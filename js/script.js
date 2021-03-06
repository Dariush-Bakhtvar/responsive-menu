const btnToggle = document.querySelector('.btn-toggle');
const menu = document.querySelector('.Menu');
const arrow = document.querySelector('.arrow-down');
btnToggle.addEventListener('click', (e) => {
    e.preventDefault();
    btnToggle.classList.toggle('activeToggle');
    menu.classList.toggle('activeMenu');
});
menu.addEventListener('click', (e) => {
    let id = e.target.dataset.toggleId;
    if (!id) return;
    let elem = document.getElementById(id);
    console.log(elem);
    elem.hidden = !elem.hidden;
    arrow.classList.toggle('arrow-hover');
});