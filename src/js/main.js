const access = [{
        id: 1,
        title: "Футболка Эволюцианируй или сдохни",
        price: 2500,
        img: 'src/assets/image 4.png',
        isNew: true
    },
    {
        id: 2,
        title: "Футболка Эволюцианируй или сдохни",
        price: 2500,
        img: 'src/assets/image 4.png',
        isNew: true
    },
    {
        id: 3,
        title: "Футболка Эволюцианируй или сдохни",
        price: 2500,
        img: 'src/assets/image 4.png'
    },
    {
        id: 4,
        title: "Футболка Эволюцианируй или сдохни",
        price: 2500,
        img: 'src/assets/image 4.png'
    },
    {
        id: 5,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/image 4.png'
    }
]
const cloth = [{
        id: 6,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 7,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 8,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 9,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    }

]
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.hidden');
const productCard = document.querySelector(".main-card");
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});


document.querySelectorAll('.main-card').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = 'block';
    })
})

var makeElement = function(tagName, className, text) {
    var listItem = document.createElement(tagName)
    listItem.classList.add(className)
    if (text) {
        listItem.textContent = text
    }
    return listItem
}


var createElement = function(product) {
    var listItem = makeElement('div', 'main-card')
    var imgBlock = makeElement('div', 'main-image__block')
    listItem.appendChild(imgBlock)
    var img = makeElement('img', 'main-image')
    img.src = product.img;
    img.alt = product.title;
    imgBlock.appendChild(img);
    var badge = makeElement('span', 'badge')
    badge.innerHTML = "new"
    if (product.isNew) {
        imgBlock.appendChild(badge);
    }
    var description = makeElement('div', 'main-image__description');
    listItem.appendChild(description)
    var price = makeElement('div', 'main-price', product.price);
    description.appendChild(price);
    var info = makeElement('h3', 'main-image__title', product.title)
    description.appendChild(info)
    var size = makeElement('div', 'main-image__hint')
    size.innerHTML = "Размеры S/M/L"
    description.appendChild(size)
    var btn = makeElement('button', 'main-image__button')
    btn.innerHTML = "Заказать"
    description.appendChild(btn)

    return listItem
}
var good = document.querySelector('.main-products')
for (var i = 0; i < access.length; i++) {
    var item = createElement(access[i])
    good.append(item)
}
