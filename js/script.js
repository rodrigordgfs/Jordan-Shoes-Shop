let backToTop = document.getElementById("back_to_top");

// Show/Hide Back to top button
window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      backToTop.classList.remove("animate__fadeOutDown");
      backToTop.classList.add("animate__animated", "animate__fadeInUp");
      backToTop.style.display = "block";
    } else {
      backToTop.classList.remove("animate__fadeInUp");
      backToTop.classList.add("animate__fadeOutDown");
    }
  });
  
  backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  
  // Scrool Reveal Effect
  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.main__content__list_item', { delay: 200 });  