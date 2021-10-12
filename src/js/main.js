const productClothes = [
    {
        id:    0,
        title: 'Футболка Exact 150',
        price: 150,
        badge: true,
        img:   '/src/assets/IMG/1.jfif',
    },
    {
        id:    1,
        title: 'Футболка "Эволюционируй или сдохни"',
        price: 1000,
        badge: true,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    2,
        title: 'Футболка "Lady-Fit Lightweight Hooded T"',
        price: 120,
        badge: false,
        img:   '/src/assets/IMG/2.jpg',

    },
    {
        id:    3,
        title: 'Классная футболка зеленая трава',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/3.jpg',

    },
    {
        id:    4,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    5,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    6,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    7,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    8,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
];

const productAccessories = [
    {
        id:    0,
        title: 'ПАПКА ПОРТФЕЛЬ',
        price: 600,
        badge: true,
        img:   '/src/assets/IMG/7.jfif',
    },
    {
        id:    1,
        title: 'Maleta Herramientas',
        price: 440,
        badge: true,
        img:   '/src/assets/IMG/8.jpg',

    },
    {
        id:    2,
        title: 'Кейс Large Sp Power',
        price: 330,
        badge: false,
        img:   '/src/assets/IMG/9.jpg',

    },
    {
        id:    3,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    4,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    5,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    6,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    7,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
    {
        id:    8,
        title: 'Классная футболка',
        price: 550,
        badge: false,
        img:   '/src/assets/IMG/t-shirt.jpg',

    },
];
const cardsWrapper = document.querySelector('.js-cards');
const tabsBtns = document.querySelectorAll('.js__tabs-btns');

function renderCard({
    img, badge, price, title,
}) {
    const card = `<div class="main-cards__item">
    <img class="main-cards__img"
    src="${img}"
    alt="Черная футболка 'Сделай или умри, Размер S,M,L">
    ${badge ? '<span class="badge">NEW</span>' : ''}
    <div class="main-cards-info">
        <h6 class="main-cards__points">${price} баллов</h6>
        <p class="main-cards__title">${title}</p>
        <p class="main-cards__size">Размеры S/M/L </p>
        <button class="main-cards-btn" type="button">Заказать</button>
    </div>
</div>`;

    if (cardsWrapper) {
        cardsWrapper.insertAdjacentHTML('beforeend', card);
    }
}

function changeCard() {
    tabsBtns.forEach((tab) => {
        tab.addEventListener('click', () => {
            if (tab.dataset.key === 'clothes') {
                cardsWrapper.innerHTML = '';
                productClothes.forEach(renderCard);
            }

            if (tab.dataset.key === 'accesories') {
                cardsWrapper.innerHTML = '';
                productAccessories.forEach(renderCard);
            }

            if (tab.dataset.key === 'all') {
                cardsWrapper.innerHTML = '';
                const all = productClothes.concat(productAccessories);

                all
                    .sort((a, b) => Number(b.badge) - Number(a.badge))
                    .forEach(renderCard);
            }
        });
        tabsBtns.forEach((item) => {
            item.addEventListener('click', () => {
                tabsBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    });
}

productClothes.concat(productAccessories)
    .sort((a, b) => Number(b.badge) - Number(a.badge))
    .forEach(renderCard);
changeCard();

const modal = () => {
    document.querySelectorAll('.main-cards-btn').forEach((btns) => {
        btns.addEventListener('click', () => {
            document.querySelector('.modal').classList.add('active');
        });
    });

    document.querySelector('.modal__close').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('active');
    });

    document.querySelector('.modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('active');
    });
};

modal();
