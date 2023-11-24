// open close modal
const learnMoreButton = document.getElementById("learnMoreButton")
const learnMoreModal = document.querySelector(".learnMoreModal")
const learnMoreCloseButton = document.getElementById("learnMoreCloseButton")


let isOpenModal = false;

const openModal = () => {
    isOpenModal = true;
    learnMoreModal.classList.add("open")
}

const closeModal = () => {
    isOpenModal = false;
    learnMoreModal.classList.remove("open")
}


learnMoreButton.addEventListener('click', openModal)
learnMoreCloseButton.addEventListener('click', closeModal)