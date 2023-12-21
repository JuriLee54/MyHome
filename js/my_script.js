function tool() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) ;
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

document.addEventListener("DOMContentLoaded", function () {
    function loadTable(tableNumber) {
      var tableURL = "../my_web/table" + tableNumber + ".html";

      fetch(tableURL)
        .then((response) => response.text())
        .then((html) => {
          document.getElementById("lap").innerHTML = html;
        })
        .catch((error) => {
          console.error("Error loading table:", error);
        });
    }

    loadTable(1);

    for (var i = 1; i <= 8; i++) {
      var linkId = "a" + i;
      document.getElementById(linkId).addEventListener("click", function (event) {
        event.preventDefault();
        var tableNumber = event.target.getAttribute("href").match(/\d+/)[0];
        loadTable(tableNumber);
      });
    }

    var pageButtons = document.querySelectorAll(".page-item");
    pageButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var pageNumber = button.textContent.trim();
        loadTable(pageNumber);
      });
    });
  });
