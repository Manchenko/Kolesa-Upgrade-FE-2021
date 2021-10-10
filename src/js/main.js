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
        price: 220,
        badge: true,
        size:  'S/M/L',
    },
    {
        id:    1,
        img:   'src/assets/image11.jpg',
        alt:   'Футболка "Все очень круто, но надо переделать"',
        title: 'Футболка "Все очень круто, но надо переделать"',
        price: 200,
        badge: true,
        size:  'S/M/L',
    },
    {
        id:    5,
        img:   'src/assets/image12.jpg',
        alt:   'Толстовка "Kolesa Team"',
        title: 'Толстовка "Kolesa Team"',
        price: 500,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    6,
        img:   'src/assets/image13.jpg',
        alt:   'Толстовка "Kolesa Team"',
        title: 'Толстовка "Kolesa Team"',
        price: 500,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    7,
        img:   'src/assets/image14.jpg',
        alt:   'Толстовка "Kolesa Team"',
        title: 'Толстовка "Kolesa Team"',
        price: 500,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    8,
        img:   'src/assets/image17.png',
        alt:   'Толстовка "Kolesa Team"',
        title: 'Толстовка "Kolesa Team"',
        price: 500,
        badge: false,
        size:  'S/M/L',
    },
];

const accessories = [
    {
        id:    11,
        img:   'src/assets/image07.jpg',
        alt:   'Бутылка для воды',
        title: 'Бутылка для воды',
        price: 150,
        badge: false,
        size:  'M',
    },
    {
        id:    13,
        img:   'src/assets/image15.jpg',
        alt:   'Рюкзак "Kolesa Team"',
        title: 'Рюкзак "Kolesa Team"',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    14,
        img:   'src/assets/image16.jpg',
        alt:   'Рюкзак "Kolesa Team"',
        title: 'Рюкзак "Kolesa Team"',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    15,
        img:   'src/assets/image08.jpg',
        alt:   'Рюкзак "Kolesa Team"',
        title: 'Рюкзак "Kolesa Team"',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    16,
        img:   'src/assets/image09.jpg',
        alt:   'Рюкзак "Kolesa Team"',
        title: 'Рюкзак "Kolesa Team"',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
    {
        id:    17,
        img:   'src/assets/image20.jpg',
        alt:   'Рюкзак "Kolesa Team"',
        title: 'Рюкзак "Kolesa Team"',
        price: 400,
        badge: false,
        size:  'S/M/L',
    },
];

const all = clothes.concat(accessories);

const makeProductCard = (img, alt, title, price, badge, size) => ` <div class="content__product">
        <div class="card">
            <div class="card__image">
                <img src="${img}" alt="${alt}">
                ${badge ? '<span class="card__label">New</span>' : ''}
            </div>
            <div class="card__desc">
                <h3 class="card__ball"> ${price} баллов</h3>
                <p class="card__name">${title}</p>
                <p class="card__sizes">Размеры ${size} </p>
                <button type="button" class="card__btn">Заказать</button>
            </div>
        </div>
    </div>`;

const renderCard = (item) => {
    const wrapper = document.createElement('div');
    const filterItem = item.sort(good => (good.badge ? -1 : 1));

    wrapper.className = 'content__products';
    filterItem.forEach((card) => {
        const {
            img, alt, title, price, badge, size,
        } = card;
        const cardHtml = makeProductCard(img, alt, title, price, badge, size);

        wrapper.innerHTML += cardHtml;

        document.querySelector('.js-products').innerHTML = wrapper.outerHTML;
    });
};

document.querySelectorAll('.js-tabs-btn').forEach((button) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('tabs__item--active')) {
            document.querySelector('.tabs__item--active').classList.remove('tabs__item--active');
            button.classList.add('tabs__item--active');
        }

        const categoryKey = button.getAttribute('data-id');

        if (categoryKey === 'all') {
            renderCard(all);
        } else if (categoryKey === 'clothes') {
            renderCard(clothes);
        } else if (categoryKey === 'accessories') {
            renderCard(accessories);
        }
    });
});

document.querySelector('.js-tabs-btn').click();

// modal-window
