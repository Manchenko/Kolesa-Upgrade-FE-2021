import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { showLoader, hideLoader } from './loader';
import { showError, hideError } from './error';
import { messageError, showApp } from './app';

export default () => {
    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError();
            } else {
                const appElement = document.querySelector('#app');

                messageError(data.html);
                showApp();

                Array.from(appElement.querySelector('button')).forEach((button) => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault();

                        e.currentTarget.textContent = 'Загрузка...';

                        toggleFavoriteRequest(e.currentTarget.dataset.id)
                            .then(({ data: buttonData }) => {
                                if (buttonData.result === 'set') {
                                    e.currentTarget.textContent = '🌝';
                                } else {
                                    e.currentTarget.textContent = '🌚';
                                }
                            });
                    });
                });
            }
        })
        .catch((e) => {
            messageError(e.message);
            showError();
        })
        .finally(() => {
            hideLoader();
        });
};
