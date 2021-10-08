import '../scss/style.scss';

// search-input

const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

btn.addEventListener('click', () => {
    input.classList.toggle('active');
    input.focus();
});

// cards

const clothes = [
    {
        id:    0,
        img:   'src/assets/image04.jpg',
        alt:   'Футболка "Эволюционируй или сдохни"',
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 500,
        badge: true,
        size:  'S/M/L',
    },
    {
        id:    1,
        img:   'src/assets/image11.jpg',
        alt:   'Футболка "Все очень круто, но надо переделать"',
        title: 'Футболка "Все очень круто, но надо переделать"',
        price: 450,
        badge: true,
        size:  'S/M/L',
    },
    {
        id:    2,
        img:   'src/assets/image07.jpg',
        alt:   'Бутылка для воды',
        title: 'Бутылка для воды',
        price: 350,
        badge: false,
        size:  'M',
    },
    {
        id:    3,
        img:   'src/assets/image08.jpg',
        alt:   'Термокружка',
        title: 'Термокружка',
        price: 200,
        badge: false,
        size:  'M',
    },
    {
        id:    4,
        img:   'src/assets/image09.jpg',
        alt:   'Вязаная шапка',
        title: 'Вязаная шапка',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    5,
        img:   'src/assets/image10.jpg',
        alt:   'Толстовка "Игнорируй"',
        title: 'Толстовка "Игнорируй"',
        price: 800,
        badge: false,
        size:  'S/M/L',
    },
];

const renderProductCard = (img, alt, title, price, badge, size) => ` <div class="content__product">
        <div class="card">
            <div class="card__image">
                <img src="${img}" alt="${alt}">
                ${badge ? '<span class="card__label">New</span>' : ''}
            </div>
            <div class="card__desc">
                <h3 class="card__ball"> ${price} баллов</h3>
                <h4 class="card__name">${title}</h4>
                <p class="card__sizes">Размеры ${size} </p>
                <button type="button" class="card__btn">Заказать</button>
            </div>
        </div>
    </div>`;

clothes.forEach((card) => {
    const {
        img, alt, title, price, badge, size,
    } = card;
    const cardHtml = renderProductCard(img, alt, title, price, badge, size);

    document.querySelector('.js-products').innerHTML += cardHtml;
});
