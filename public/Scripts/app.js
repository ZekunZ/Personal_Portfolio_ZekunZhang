// IIFF immediately invoked function expression
(function () {
  function Start() {
    console.log("App Started...");

    let deleteButtions = document.querySelectorAll(".btn-danger");

    for (button of deleteButtions) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure?")) {
          event.preventDefault();
          window.location.assign("/contact-list");
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();
