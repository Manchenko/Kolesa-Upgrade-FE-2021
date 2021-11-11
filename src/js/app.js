const appElement = document.querySelector('#app');

export const showApp = () => {
    appElement.style.display = 'block';
};

export const hideApp = () => {
    appElement.style.display = 'none';
};

export const messageError = (text) => {
    appElement.innerHTML = text;
};
