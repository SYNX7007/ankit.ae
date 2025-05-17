//open pdf function
function openPDF(pdfSrc) {
  const modal = document.getElementById('pdfModal');
  const viewer = document.getElementById('pdfViewer');
  viewer.src = pdfSrc;
  modal.classList.add('show');
}

function closePDF() {
  const modal = document.getElementById('pdfModal');
  const viewer = document.getElementById('pdfViewer');
  viewer.src = "";
  modal.classList.remove('show');
}
// animation inistializations
AOS.init({
  duration: 600,
  once: false,            
  mirror: true,           
  easing: 'ease-out'
});

// button to scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const topBtn = document.getElementById("topBtn");

  if (!topBtn) {
    console.error("Top button not found!");
    return;
  }

  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// number counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 1000; // Lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  };

  // Animate when hero section is in view
  let triggered = false;
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const heroTop = hero.getBoundingClientRect().top;

    if (!triggered && heroTop < window.innerHeight) {
      animateCounters();
      triggered = true;
    }
  });
});
