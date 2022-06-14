import '../scss/style.scss';
import clothes from './clothes';
import accessories from './accessories';

// search-input

const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

btn.addEventListener('click', () => {
    input.classList.toggle('active');
    input.focus();
});

// cards

const all = clothes.concat(accessories);
const makeProductCard = (img, alt, title, price, badge, size, id) => ` <div data-id="${id}" class="content__product" >
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
    const filterItem = item.sort(good => (good.badge ? -1 : 1));
    const wrapper = document.createElement('div');

    wrapper.className = 'content__products';
    filterItem.forEach((card) => {
        const {
            img, alt, title, price, badge, size, id,
        } = card;
        const cardHtml = makeProductCard(img, alt, title, price, badge, size, id);

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

        const categoryKey = button.getAttribute('data-type');

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

function openModal(id) {
    let info;

    all.forEach((item) => {
        if (item.id === id) {
            info = item;
        }
    });
    document.querySelector('.scores__left-title').textContent = info.price;
    document.querySelector('.modal-wrapper__title').textContent = info.title;
    document.querySelector('.images__elem').src = info.img;
    document.querySelector('.modal-main-wrap').classList.add('modal-main-wrap--active');
}

document.querySelectorAll('div[data-id]').forEach((item) => {
    item.addEventListener('click', () => {
        openModal(item.dataset.id);
    });
});

function closeModal() {
    document.querySelector('.modal-main-wrap').classList.remove('modal-main-wrap--active');
}

document.querySelector('.modal-wrapper__btn').addEventListener('click', () => {
    closeModal();
});
