document.querySelector('#navbarResponsive > ul').addEventListener('click', (e) => {
    let target = document.querySelector(window.location.hash);
    window.scroll({ top: target.getBoundingClientRect().top + 100, left: 0, behavior: 'smooth' });
});
document.querySelector('.js-scroll-trigger').addEventListener('click', () => {
  document.querySelector(".navbar-collapse").collapse("hide");
});

let navbar = document.getElementById("mainNav");
let classList;
let navbarCollapse = () => {
    classList = [];
    index = 0;
    classList = navbar.className.split(' ')
    index = classList.indexOf("navbar-shrink");
    if (window.scrollY > 150) {
        if (index === -1) { classList.push("navbar-shrink") }
        navbar.className = classList.join(' ');
    } else {
      if (index > -1) { classList.splice(index, 1) }
      navbar.className = classList.join(' ');
    }
};

navbarCollapse();
document.addEventListener('scroll', navbarCollapse);
