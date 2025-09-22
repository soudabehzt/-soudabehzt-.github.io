// — mobile menu toggle (unchanged) —
const primaryHeader = document.querySelector(".primary-header");
const navToggle     = document.querySelector(".mobile-nav-toggle");
const primaryNav    = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const isVisible = primaryNav.hasAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", String(!isVisible));
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

// — A11YSlider initialization —
document.addEventListener('DOMContentLoaded', () => {
  new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    arrows:         true,
    dots:           true,
    centerMode:     true,
    responsive: {
      480: { dots: false, arrows: true }
    }
  });
});
