// Initialize AOS Animation Library
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scrolling for navigation links
$(document).ready(function () {
  $(".nav-links a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 50
        },
        800
      );
    }
  });

  // Form Submission Feedback
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    this.reset();
  });
});
