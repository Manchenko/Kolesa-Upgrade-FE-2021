const access = [{
        id: 1,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 2,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 3,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 4,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
    },
    {
        id: 5,
        title: "Рюкзак Синий",
        price: 2500,
        img: 'src/assets/bag.svg'
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
