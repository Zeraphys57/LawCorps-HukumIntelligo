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

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded');

  const pageCardContentContainer = document.getElementById('pageCardContentContainer');

  // Function to update the content when a card is clicked
  window.cardClicked = function(cardIndex) {
    updateCardContent(cardIndex);
  };

  function updateCardContent(cardIndex) {
    // Retrieve the content based on the clicked card
    const cardContents = 
    [
    ' ',
    ' ',
    ' ',
    ' '
    ];

    

    // Get the corresponding content
    const content = cardContents[cardIndex - 1];

    // Update the content in the pageCardContentContainer
    if (pageCardContentContainer) {
      pageCardContentContainer.innerHTML = content;
    }
  }

  /* Card Switcher ===================================================================== */

  function switchToPage(cardIndex, event) {
    // Log the event to the console for debugging
    console.log(event);

    // Prevent the default behavior of the click event
    event.preventDefault();

    const pagePath = "/LawCorps/Directories/page" + cardIndex + ".html";
    // Adjust the directory path as needed

    // Navigate to the page
    window.location.href = pagePath;
  }
});


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
