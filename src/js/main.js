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
