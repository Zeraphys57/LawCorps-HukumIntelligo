
/* Ini function buat burger di navigation============================================= */
function toggleNav() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");

  // Hide the nav links when clicking outside the burger icon
  document.body.addEventListener('click', function (event) {
    if (!event.target.closest('.burger-container') && !event.target.closest('#nav-links')) {
      navLinks.classList.remove("active");
    }
  });
}



/* Card Switcher ===================================================================== */

function switchToPage(cardIndex, event) {
  // Log the event to the console for debugging
  console.log(event);

  // Prevent the default behavior of the click event
  event.preventDefault();

  const pagePath = "Directories/page" + cardIndex + ".html";
  // Adjust the directory path as needed

  // Navigate to the page
  window.location.href = pagePath;
}

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper', {
    // Add other Swiper parameters here

    // Enable navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

/* Swiper ============================================================================ */
console.log("Script loaded");
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

/* Scroll To Top Button */
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


