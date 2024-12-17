AOS.init();

document.querySelectorAll(".read-more").forEach(function(button) {
  button.addEventListener("click", function() {
    const container = this.closest(".Review_Contnt");
    container.classList.toggle("expanded");
    this.textContent = container.classList.contains("expanded")
      ? "Read less"
      : "Read more";
  });
});

