import '../css/style.css';

document.querySelector('#app').innerHTML = `
    <div class="modal">
        <!-- Modal -->
        <div class="modal__body">
            <div class="modal__images">
                <img src="src/assets/IMG/t-shirt.jpg" alt="Классная футболка! Эволюционируй или сдохни">
                <div class="modal__preview">
                    <img
                    src="/src/assets/IMG/preview-1.jpg"
                    alt="Классная футболка! Эволюционируй или сдохни"
                    width="50"
                    height="50"
                    >
                    <img
                    class="active"
                    src="/src/assets/IMG/preview-2.jpg"
                    alt="Классная футболка! Эволюционируй или сдохни"
                    width="50"
                    height="50"
                    >
                    <img
                    src="/src/assets/IMG/preview-3.jpg"
                    alt="Классная футболка! Эволюционируй или сдохни"
                    width="50"
                    height="50"
                    >
                </div>
            </div>
            <div class="modal__description">
                <h1 class="modal__title">Футболка "Эволюционируй или сдохни"</h1>
                <form action="#" method="GET" class="modal__form">
                    <div class="modal__sell">
                        <div class="modal__scores">
                            <h6 class="modal__score">100 баллов</h6>
                            <button class="btn-primary" type="submit">Заказать</button>
                        </div>
                        <div class="modal__yourbalance">
                            <p class="modal__yourbalance--balance">Твой баланс:</p>
                            <p class="modal__yourbalance--score">3 945 баллов</p>
                            <img class="modal__yourbalance--basket" src="/src/assets/IMG/basket.png" alt="Корзина">
                        </div>
                    </div>
                    <div class="modal__radio--colors">
                        <h6 class="modal__radio--title">Цвета:</h6>
                        <div class="modal__radio--btns">
                            <input class="modal__radio" type="radio" name="modal__color" id="modal__color--blue"
                                value="#00458A">
                            <label class="modal__color--lable" for="modal__color--blue">
                                <div class="modal__color--container" style="background-color: #00458A;"></div>
                                <span>Синий</span>
                            </label>
                            <input class="modal__radio" type="radio" name="modal__color" id="modal__color--beige"
                                value="#EFE8D8">
                            <label class="modal__color--lable" for="modal__color--beige">
                                <div class="modal__color--container" style="background-color: #EFE8D8;"></div>
                                <span>Бежевый</span>
                            </label>
                            <input class="modal__radio" type="radio" name="modal__color" id="modal__color--gray"
                                value="#D4D4DA  ">
                            <label class="modal__color--lable" for="modal__color--gray">
                                <div class="modal__color--container" style="background-color: #D4D4DA;"></div>
                                <span>Серый</span>
                            </label>
                        </div>
                    </div>
                    <div class="modal__radio--size">
                        <h6 class="modal__radio--title">Размер:</h6>
                        <div class="modal__radio--btns">
                            <input class="modal__radio" type="radio" name="modal__size" id="modal__size--s" value="s">
                            <label class="modal__size--lable" for="modal__size--s">
                                <span>S</span>
                            </label>
                            <input class="modal__radio" type="radio" name="modal__size" id="modal__size--m" value="m">
                            <label class="modal__size--lable" for="modal__size--m">
                                <span>M</span>
                            </label>
                            <input class="modal__radio" type="radio" name="modal__size" id="modal__size--l" value="l">
                            <label class="modal__size--lable" for="modal__size--l">
                                <span>L</span>
                            </label>

                        </div>
                    </div>
                    <div class="modal__info">
                        <h6 class="modal__info--title">Детали:</h6>
                        <p class="modal__info--text">Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%,
                            Вискоза 20%</p>
                        <h6 class="modal__info--title">Как выбрать размер:</h6>
                        <p class="modal__info--text">Написать дяде Рику для уточнения.</p>
                    </div>
                    <button class="modal__close" type="button">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M24.4372 6.66675L16.0012 15.1021L7.56404
                                6.66675L6.66663 7.56283L15.1025 15.9994L6.66663
                                24.4348L7.56404 25.3334L16.0012 16.8968L24.4372
                                25.3334L25.3333 24.4348L16.8974 15.9994L25.3333
                                7.56283L24.4372 6.66675Z"
                                fill="#888B94" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div><!-- /Modal -->
`;
