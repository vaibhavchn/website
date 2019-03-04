const nav = document.querySelector('.ol__btn');
const navbtn = Array.from(nav.children);
const code = document.querySelector('.code__event__ul');
const codeli = Array.from(code.children);

const reset = (li) => {
    li.style.opacity = '0';
    li.style.visibility = 'hidden';
};

nav.addEventListener('click', e => {
    const target = e.target.closest('.ol__li');
    if (!target) return;
    const target_a = Array.from(target.children);
    const active_a = nav.querySelector('.active');
    const targetIndex = navbtn.findIndex(navbtn => navbtn === target);
    codeli.forEach(reset);
    codeli[targetIndex].style.opacity = '1';
    codeli[targetIndex].style.visibility = 'visible';
    target_a[0].classList.add('active');
    active_a.classList.remove('active');

});


