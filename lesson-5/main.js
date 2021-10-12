/* eslint-disable camelcase */
/* eslint-disable no-sparse-arrays */
const categories = document.querySelectorAll('.js__category');
const productList = document.querySelector('.js__product_list');
const closeBtn = document.querySelector('.js__close_btn');

closeBtn.addEventListener('click', () => {
    document.querySelector('.modal_window_container').classList.remove('opened');
    document.querySelector('.modal_window_container').classList.add('closed');
    document.body.style.overflowY = 'scroll';
});

const clothes = [
    {
        price: '320 баллов',
        title: 'Кроссовки от Kolesa',
        size:  'M/L',
        image: './src/одежда/cloth-1.jpg',
        isNew: true,
    },
    {
        price: '170 баллов',
        title: 'Классная футболка',
        size:  'S/M',
        image: './src/одежда/cloth-2.png',
        isNew: false,
    },
    {
        price: '285 баллов',
        title: 'Белая футболка',
        size:  'S/M/L',
        image: './src/одежда/cloth-3.jpg',
        isNew: true,
    },
    {
        price: '320 баллов',
        title: 'Бежевая ветровка',
        size:  'S/M/L',
        image: './src/одежда/cloth-4.jpg',
        isNew: false,
    },
    {
        price: '140 баллов',
        title: 'Классические черные штаны',
        size:  'S/M/L',
        image: './src/одежда/cloth-5.jpg',
        isNew: false,
    },,
    {
        price: '295 баллов',
        title: 'Рубажка на все случаи жизни',
        size:  'S/M/L',
        image: './src/одежда/cloth-6.jpg',
        isNew: false,
    },
];

const accessories = [
    {
        price: '20 баллов',
        title: 'Очки как у Гарри',
        size:  'S/M/L',
        image: './src/аксессуары/accessory-1.jpg',
        isNew: false,
    },
    {
        price: '150000 баллов',
        title: 'Наушники Airpods',
        size:  'S/M/L',
        image: './src/аксессуары/accessory-2.jpg',
        isNew: false,
    },
    {
        price: '5 баллов',
        title: 'Удобная кружка',
        size:  'S/M/L',
        image: './src/аксессуары/accessory-3.jpg',
        isNew: false,
    },
    {
        price: '20 баллов',
        title: 'Apple watch',
        size:  'Universal',
        image: './src/аксессуары/accessory-4.jpg',
        isNew: true,
    },
    {
        price: '35 баллов',
        title: 'Крутая шляпа',
        size:  'S/M/L',
        image: './src/аксессуары/accessory-5.jpg',
        isNew: false,
    },
    {
        price: '20 баллов',
        title: 'Часы Xiomi Mi Band 5',
        size:  'Universal',
        image: './src/аксессуары/accessory-6.jpg',
        isNew: true,
    },
];

[].concat(clothes, accessories).sort((a, b) => ((+a.isNew > +b.isNew) ? -1 : 1)).forEach((card) => {
    const {
        price,
        title,
        size,
        image,
        isNew,
    } = card;

    // eslint-disable-next-line no-use-before-define
    productList.append(makeCard(price, title, size, image, isNew));
});
function makeCard(price, title, size, image, isNew) {
    const card = document.createElement('div');

    card.className = 'product';

    const product_img_container = document.createElement('div');

    product_img_container.className = 'product_img_container';
    const img = document.createElement('img');

    img.src = image;
    img.width = 330;
    img.height = 330;
    let new_container;

    if (isNew) {
        new_container = document.createElement('div');
        product_img_container.append(new_container);
        new_container.className = 'new_container';
        new_container.innerText = 'new';
    }

    const product_info_container = document.createElement('div');

    product_info_container.className = 'product_info_container';

    const h3_price = document.createElement('h3');

    h3_price.className = 'price';
    h3_price.innerText = price;
    const p_name_of_product = document.createElement('p');

    p_name_of_product.className = 'name_of_product';
    p_name_of_product.innerText = title;
    const p_sizes = document.createElement('p');

    p_sizes.className = 'sizes';
    p_sizes.innerText = size;
    const order_btn = document.createElement('a');

    order_btn.href = '#';
    order_btn.innerText = 'Заказать';
    order_btn.className = 'order_btn';
    product_img_container.append(img);
    product_info_container.append(h3_price);
    product_info_container.append(p_name_of_product);
    product_info_container.append(p_sizes);
    product_info_container.append(order_btn);
    card.append(product_img_container);
    card.append(product_info_container);
    [card, order_btn].forEach((item) => {
        item.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            document.querySelector('.modal_window_container').classList.remove('closed');
            document.querySelector('.modal_window_container').classList.add('opened');
            document.querySelector('.selected_product').src = image;
            document.querySelector('.title_of_product').innerHTML = title;
            document.querySelector('.current_price').innerHTML = price;
        });
    });

    return card;
}

categories.forEach((category) => {
    category.addEventListener('click', (event) => {
        productList.innerHTML = '';
        const btn = event.target;
        let target;

        if (btn.dataset.id === 'accessory') {
            target = accessories;
        } else if (btn.dataset.id === 'clothes') {
            target = clothes;
        } else {
            target = [].concat(clothes, accessories).sort((a, b) => ((+a.isNew > +b.isNew) ? -1 : 1));
        }

        target.sort((a, b) => ((+a.isNew > +b.isNew) ? -1 : 1)).forEach((card) => {
            const {
                price,
                title,
                size,
                image,
                isNew,
            } = card;

            productList.append(makeCard(price, title, size, image, isNew));
        });
    });
});
