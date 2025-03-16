document.addEventListener("DOMContentLoaded", function () {
  // Adjust the container ID accordingly
  var container = document.getElementById("pageCardContainer");
  
  // Set the initial scroll position to the leftmost side
  container.scrollLeft = 0;
});


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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. TLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corporis quibusdam magni corrupti possimus, quod qui suscipit cumque commodi inventore? Error ex expedita corrupti cumque reiciendis omnis ab culpa facere eos! Officia, delectus quae ut earum culpa accusantium voluptatibus possimus atque ea labore laudantium sint fugit accusamus explicabo, tempora, necessitatibus maiores. Soluta officiis laudantium iste deleniti. Est cumque, at recusandae assumenda nam reiciendis soluta adipisci incidunt repudiandae et odit laboriosam iure non facere labore perspiciatis nisi id sunt nobis unde dolorem molestiae eveniet. Aspernatur eos, illum fugit error illo aliquam saepe ipsum est quos libero, corrupti quod deserunt odio rerum, placeat corporis aliquid dignissimos quia nihil quasi quae exercitationem at. Impedit consequuntur, quas quod iusto unde blanditiis debitis repellendus ut porro possimus eos magnam veniam. Eveniet impedit quis quisquam? Consectetur asperiores ullam maiores nemo minus vel numquam beatae officiis quasi error repellat optio cumque qui, cum ab quos voluptas aliquam. Voluptate sequi cumque molestias aperiam vero ipsam qui perferendis, numquam beatae dolor minima iusto, distinctio corrupti deleniti ab? Beatae blanditiis perferendis ea excepturi error, placeat suscipit dignissimos! Neque soluta sed eos sunt eligendi eum saepe autem, consequuntur debitis repellat dignissimos ipsam vel odit quidem cupiditate, mollitia possimus, amet delectus facere! Reiciendis, veritatis modi consequatur saepe dignissimos expedita, placeat doloremque sed, similique odit soluta pariatur quisquam iusto. Voluptatem tempora ipsam aliquam maiores omnis accusantium placeat assumenda laudantium, error sapiente adipisci praesentium neque. Placeat unde quaerat optio totam quo ex quas enim porro consectetur. Aliquid, natus tempora! Ea, repellat. Possimus magni optio illum molestias explicabo reprehenderit, commodi sapiente impedit. Similique, quas recusandae in vitae tempore iste veniam doloribus dolore? Vel veniam incidunt iure modi libero dolorum, vero quos dolore consectetur repellendus placeat quo explicabo accusamus nam provident, ea sunt, eum mollitia architecto repudiandae qui a optio voluptates! Laudantium sequi hic aperiam aliquam assumenda soluta aspernatur, sunt harum omnis. Delectus neque sapiente ratione, quasi provident ad quam sequi accusamus iure blanditiis ea dolor ipsa adipisci, excepturi velit doloribus voluptatibus in corporis. Repellendus quisquam quia quis iure ex eum doloremque at error officia est earum suscipit adipisci dignissimos id exercitationem itaque sunt dolore veniam neque voluptatum natus, laudantium accusamus. Reprehenderit porro odio quasi soluta autem incidunt temporibus ea quidem nesciunt ex repudiandae, eum inventore aut omnis, rem architecto eius, explicabo doloribus mollitia pariatur quibusdam debitis quam ipsam commodi? Officia natus expedita quisquam necessitatibus maxime quibusdam at iste magnam eaque reprehenderit maiores distinctio exercitationem molestiae mollitia, harum placeat sapiente vero provident alias dolores dolore consequuntur excepturi nesciunt corporis. Amet modi exercitationem asperiores. Beatae ab obcaecati adipisci aut harum magnam nesciunt magni quos a, fugit soluta vitae repudiandae, ducimus vel dolor, odit sequi nam deleniti tempore est quidem possimus. Laudantium beatae ducimus reiciendis ut ipsam adipisci ex neque sit sint obcaecati distinctio ad dolore officia, corrupti incidunt nam vero quidem ab cumque dolorum, voluptas aperiam nihil voluptatum! Vero ullam voluptatum deleniti sapiente ratione odit nulla quisquam dolorem nihil! Aut ab quae, nisi mollitia, nostrum tenetur aperiam odio quam iLorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corporis quibusdam magni corrupti possimus, quod qui suscipit cumque commodi inventore? Error ex expedita corrupti cumque reiciendis omnis ab culpa facere eos! Officia, delectus quae ut earum culpa accusantium voluptatibus possimus atque ea labore laudantium sint fugit accusamus explicabo, tempora, necessitatibus maiores. Soluta officiis laudantium iste deleniti. Est cumque, at recusandae assumenda nam reiciendis soluta adipisci incidunt repudiandae et odit laboriosam iure non facere labore perspiciatis nisi id sunt nobis unde dolorem molestiae eveniet. Aspernatur eos, illum fugit error illo aliquam saepe ipsum est quos libero, corrupti quod deserunt odio rerum, placeat corporis aliquid dignissimos quia nihil quasi quae exercitationem at. Impedit consequuntur, quas quod iusto unde blanditiis debitis repellendus ut porro possimus eos magnam veniam. Eveniet impedit quis quisquam? Consectetur asperiores ullam maiores nemo minus vel numquam beatae officiis quasi error repellat optio cumque qui, cum ab quos voluptas aliquam. Voluptate sequi cumque molestias aperiam vero ipsam qui perferendis, numquam beatae dolor minima iusto, distinctio corrupti deleniti ab? Beatae blanditiis perferendis ea excepturi error, placeat suscipit dignissimos! Neque soluta sed eos sunt eligendi eum saepe autem, consequuntur debitis repellat dignissimos ipsam vel odit quidem cupiditate, mollitia possimus, amet delectus facere! Reiciendis, veritatis modi consequatur saepe dignissimos expedita, placeat doloremque sed, similique odit soluta pariatur quisquam iusto. Voluptatem tempora ipsam aliquam maiores omnis accusantium placeat assumenda laudantium, error sapiente adipisci praesentium neque. Placeat unde quaerat optio totam quo ex quas enim porro consectetur. Aliquid, natus tempora! Ea, repellat. Possimus magni optio illum molestias explicabo reprehenderit, commodi sapiente impedit. Similique, quas recusandae in vitae tempore iste veniam doloribus dolore? Vel veniam incidunt iure modi libero dolorum, vero quos dolore consectetur repellendus placeat quo explicabo accusamus nam provident, ea sunt, eum mollitia architecto repudiandae qui a optio voluptates! Laudantium sequi hic aperiam aliquam assumenda soluta aspernatur, sunt harum omnis. Delectus neque sapiente ratione, quasi provident ad quam sequi accusamus iure blanditiis ea dolor ipsa adipisci, excepturi velit doloribus voluptatibus in corporis. Repellendus quisquam quia quis iure ex eum doloremque at error officia est earum suscipit adipisci dignissimos id exercitationem itaque sunt dolore veniam neque voluptatum natus, laudantium accusamus. Reprehenderit porro odio quasi soluta autem incidunt temporibus ea quidem nesciunt ex repudiandae, eum inventore aut omnis, rem architecto eius, explicabo doloribus mollitia pariatur quibusdam debitis quam ipsam commodi? Officia natus expedita quisquam necessitatibus maxime quibusdam at iste magnam eaque reprehenderit maiores distinctio exercitationem molestiae mollitia, harum placeat sapiente vero provident alias dolores dolore consequuntur excepturi nesciunt corporis. Amet modi exercitationem asperiores. Beatae ab obcaecati adipisci aut harum magnam nesciunt magni quos a, fugit soluta vitae repudiandae, ducimus vel dolor, odit sequi nam deleniti tempore est quidem possimus. Laudantium beatae ducimus reiciendis ut ipsam adipisci ex neque sit sint obcaecati distinctio ad dolore officia, corrupti incidunt nam vero quidem ab cumque dolorum, voluptas aperiam nihil voluptatum! Vero ullam voluptatum deleniti sapiente ratione odit nulla quisquam dolorem nihil! Aut ab quae, nisi mollitia, nostrum tenetur aperiam odio quam inventore nemo illo perspiciatis voluptatum officiis pariatur provident.nventore nemo illo perspiciatis voluptatum officiis pariatur provident.orporis quibusdam magni corrupti ntore nemo illo perspiciatis voluptatum officiis pariatur provident.',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora corporis quibusdam magni corrupti possimus, quod qui suscipit cumque commodi inventore? Error ex expedita corrupti cumque reiciendis omnis ab culpa facere eos! Officia, delectus quae ut earum culpa accusantium voluptatibus possimus atque ea labore laudantium sint fugit accusamus explicabo, tempora, necessitatibus maiores. Soluta officiis laudantium iste deleniti. Est cumque, at recusandae assumenda nam reiciendis soluta adipisci incidunt repudiandae et odit laboriosam iure non facere labore perspiciatis nisi id sunt nobis unde dolorem molestiae eveniet. Aspernatur eos, illum fugit error illo aliquam saepe ipsum est quos libero, corrupti quod deserunt odio rerum, placeat corporis aliquid dignissimos quia nihil quasi quae exercitationem at. Impedit consequuntur, quas quod iusto unde blanditiis debitis repellendus ut porro possimus eos magnam veniam. Eveniet impedit quis quisquam? Consectetur asperiores ullam maiores nemo minus vel numquam beatae officiis quasi error repellat optio cumque qui, cum ab quos voluptas aliquam. Voluptate sequi cumque molestias aperiam vero ipsam qui perferendis, numquam beatae dolor minima iusto, distinctio corrupti deleniti ab? Beatae blanditiis perferendis ea excepturi error, placeat suscipit dignissimos! Neque soluta sed eos sunt eligendi eum saepe autem, consequuntur debitis repellat dignissimos ipsam vel odit quidem cupiditate, mollitia possimus, amet delectus facere! Reiciendis, veritatis modi consequatur saepe dignissimos expedita, placeat doloremque sed, similique odit soluta pariatur quisquam iusto. Voluptatem tempora ipsam aliquam maiores omnis accusantium placeat assumenda laudantium, error sapiente adipisci praesentium neque. Placeat unde quaerat optio totam quo ex quas enim porro consectetur. Aliquid, natus tempora! Ea, repellat. Possimus magni optio illum molestias explicabo reprehenderit, commodi sapiente impedit. Similique, quas recusandae in vitae tempore iste veniam doloribus dolore? Vel veniam incidunt iure modi libero dolorum, vero quos dolore consectetur repellendus placeat quo explicabo accusamus nam provident, ea sunt, eum mollitia architecto repudiandae qui a optio voluptates! Laudantium sequi hic aperiam aliquam assumenda soluta aspernatur, sunt harum omnis. Delectus neque sapiente ratione, quasi provident ad quam sequi accusamus iure blanditiis ea dolor ipsa adipisci, excepturi velit doloribus voluptatibus in corporis. Repellendus quisquam quia quis iure ex eum doloremque at error officia est earum suscipit adipisci dignissimos id exercitationem itaque sunt dolore veniam neque voluptatum natus, laudantium accusamus. Reprehenderit porro odio quasi soluta autem incidunt temporibus ea quidem nesciunt ex repudiandae, eum inventore aut omnis, rem architecto eius, explicabo doloribus mollitia pariatur quibusdam debitis quam ipsam commodi? Officia natus expedita quisquam necessitatibus maxime quibusdam at iste magnam eaque reprehenderit maiores distinctio exercitationem molestiae mollitia, harum placeat sapiente vero provident alias dolores dolore consequuntur excepturi nesciunt corporis. Amet modi exercitationem asperiores. Beatae ab obcaecati adipisci aut harum magnam nesciunt magni quos a, fugit soluta vitae repudiandae, ducimus vel dolor, odit sequi nam deleniti tempore est quidem possimus. Laudantium beatae ducimus reiciendis ut ipsam adipisci ex neque sit sint obcaecati distinctio ad dolore officia, corrupti incidunt nam vero quidem ab cumque dolorum, voluptas aperiam nihil voluptatum! Vero ullam voluptatum deleniti sapiente ratione odit nulla quisquam dolorem nihil! Aut ab quae, nisi mollitia, nostrum tenetur aperiam odio rovident.',
      'Lorem ipsum, dolor sit  adipisicing elit. Tempora co magni corrupti quod qui suscipit cumque commodi inventore? Error ex expedita corrupti cumque reiciendis omnis ab culpa facere eos! Officia, delectus quae ut earum culpa accusantium voluptatibus possimus atque ea labore laudantium sint fugit accusamus explicabo, tempora, necessitatibus maiores. Soluta officiis laudantium iste deleniti. Est cumque, at recusandae assumenda nam reiciendis soluta adipisci incidunt repudiandae et odit laboriosam iure non facere labore perspiciatis nisi id sunt nobis unde dolorem molestiae eveniet. Aspernatur eos, illum fugit error illo aliquam saepe ipsum est quos libero, corrupti quod deserunt odio rerum, placeat corporis aliquid dignissimos quia nihil quasi quae exercitationem at. Impedit consequuntur, quas quod iusto unde blanditiis debitis repellendus ut porro possimus eos magnam veniam. Eveniet impedit quis quisquam? Consectetur asperiores ullam maiores nemo minus vel numquam beatae officiis quasi error repellat optio cumque qui, cum ab quos voluptas aliquam. Voluptate sequi cumque molestias aperiam vero ipsam qui perferendis, numquam beatae dolor minima iusto, distinctio corrupti deleniti ab? Beatae blanditiis perferendis ea excepturi error, placeat suscipit dignissimos! Neque soluta sed eos sunt eligendi eum saepe autem, consequuntur debitis repellat dignissimos ipsam vel odit quidem cupiditate, mollitia possimus, amet delectus facere! Reiciendis, veritatis modi consequatur saepe dignissimos expedita, placeat doloremque sed, similique odit soluta pariatur quisquam iusto. Voluptatem tempora ipsam aliquam maiores omnis accusantium placeat assumenda laudantium, error sapiente adipisci praesentium neque. Placeat unde quaerat optio totam quo ex quas enim porro consectetur. Aliquid, natus tempora! Ea, repellat. Possimus magni optio illum molestias explicabo reprehenderit, commodi sapiente impedit. Similique, quas recusandae in vitae tempore iste veniam doloribus dolore? Vel veniam incidunt iure modi libero dolorum, vero quos dolore consectetur repellendus placeat quo explicabo accusamus nam provident, ea sunt, eum mollitia architecto repudiandae qui a optio voluptates! Laudantium sequi hic aperiam aliquam assumenda soluta aspernatur, sunt harum omnis. Delectus neque sapiente ratione, quasi provident ad quam sequi accusamus iure blanditiis ea dolor ipsa adipisci, excepturi velit doloribus voluptatibus in corporis. Repellendus quisquam quia quis iure ex eum doloremque at error officia est earum suscipit adipisci dignissimos id exercitationem itaque sunt dolore veniam neque voluptatum natus, laudantium accusamus. Reprehenderit porro odio quasi soluta autem incidunt temporibus ea quidem nesciunt ex repudiandae, eum inventore aut omnis, rem architecto eius, explicabo doloribus mollitia pariatur quibusdam debitis quam ipsam commodi? Officia natus expedita quisquam necessitatibus maxime quibusdam at iste magnam eaque reprehenderit maiores distinctio exercitationem molestiae mollitia, harum placeat sapiente vero provident alias dolores dolore consequuntur excepturi nesciunt corporis. Amet modi exercitationem asperiores. Beatae ab obcaecati adipisci aut harum magnam nesciunt magni quos a, fugit soluta vitae repudiandae, ducimus vel dolor, odit sequi nam deleniti tempore est quidem possimus. Laudantium beatae ducimus reiciendis ut ipsam adipisci ex neque sit sint obcaecati distinctio ad dolore officia, corrupti incidunt nam vero quidem ab cumque dolorum, voluptas aperiam nihil voluptatum! Vero ullam voluptatum deleniti sapiente ratione odit nulla quisquam dolorem nihil! Aut ab quae, nisi mollitia, nostrum tenetur aperiam odio quam inventore nemo illo perspiciatis voluptatum officiis pariatur provident.'
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
