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

<script>
  function popConfetti() {
    const c = document.getElementById("confetti");
    const icons = ["🥘","🍰","🍜","🍕","🍣","🥗","🍪","🧁","🍩"];
    const N = 30; // number of pieces
    for (let i = 0; i < N; i++) {
      const bit = document.createElement("span");
      bit.className = "confetti-bit";
      bit.textContent = icons[Math.floor(Math.random() * icons.length)];
      bit.style.left = Math.random() * 100 + "vw";
      bit.style.animationDuration = (1 + Math.random()) + "s";
      c.appendChild(bit);
      setTimeout(() => bit.remove(), 2000); // clean up
    }
  }

  document.getElementById("recipe-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xwprbqby", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      form.style.display = "none";
      document.getElementById("thank-you").style.display = "block";
      popConfetti();   // 🎉 trigger confetti
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  });
</script>
