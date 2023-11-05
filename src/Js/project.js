document.getElementById("open-modal-btn").addEventListener("click",function(){
    document.getElementById("my-modal").classList.add("open")
})


// zakrit modelnoje okno pri nazatije Esc

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById ("my-modal").classList.remove("open")
        }
});

//zakrit modelnoje okno pri nazatije nivkuda 

document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});