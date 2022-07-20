const buyBtns = document.querySelectorAll('.js-buy-btn')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeModal = document.querySelector('.js-modal-close')


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', function () {
        modal.classList.add('open')
    })
}

closeModal.addEventListener('click', function () {
    modal.classList.remove('open')
})

modal.addEventListener('click', function () {
    modal.classList.remove('open')
})

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})