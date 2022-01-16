const menu = () => {
  const serviceBlockBtns = document.querySelectorAll('a[href^="#"]');
  const mainLogo = document.querySelector('img[src^="images/logo.png"]').closest('a');
  mainLogo.classList.add('mainLogo-head');

  serviceBlockBtns.forEach((el) => {
    if (el.closest('div.header') &&
    !el.closest('a').matches('.mainLogo-head') &&
    !el.closest('a').matches('.callback-btn') &&
    !el.closest('a').matches('.mainLogo-head') &&
    !el.closest('a').matches('.callback-btn')
    ) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href').slice(1);
        if (document.getElementById(`${id}`)) {
          document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    }
  });

  const arrowUp = document.querySelector(".up"),
    servicesSection = document.querySelector(".services-section"),
    sectionTop = servicesSection.offsetTop;

  arrowUp.style.display = "none";

  window.onscroll = function () {
    if (window.pageYOffset >= sectionTop) {
      arrowUp.style.display = "block";
    } else {
      arrowUp.style.display = "none";
    }
  };

  arrowUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
export default menu;