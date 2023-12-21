function clickTable1(){
    var t1 = document.getElementById("t1").innerHTML;
    var a1 = document.getElementById("a1");
    var lap = document.getElementById("lap");

    lap.innerHTML = t1;
}
function tool() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')) ;
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}

  document.addEventListener("DOMContentLoaded", function () {
    // Function to load table HTML content into the lap div
    function loadTable(tableNumber) {
      // Assuming your table URLs follow the pattern "../reports/tableX.html"
      var tableURL = "../reports/table" + tableNumber + ".html";

      // Using fetch to load HTML content from the specified URL
      fetch(tableURL)
        .then((response) => response.text())
        .then((html) => {
          // Setting the innerHTML of the lap div with the loaded HTML content
          document.getElementById("lap").innerHTML = html;
        })
        .catch((error) => {
          console.error("Error loading table:", error);
        });
    }

    // Call loadTable with table number 1 to initially show the first table
    loadTable(1);

    // Adding click event listeners to the pagination links
    for (var i = 1; i <= 8; i++) {
      var linkId = "a" + i;
      document.getElementById(linkId).addEventListener("click", function (event) {
        // Preventing the default behavior of the link
        event.preventDefault();
        // Extracting the table number from the link's href attribute
        var tableNumber = event.target.getAttribute("href").match(/\d+/)[0];
        // Calling the loadTable function with the extracted table number
        loadTable(tableNumber);
      });
    }

    // Adding click event listeners to the page buttons
    var pageButtons = document.querySelectorAll(".page-item");
    pageButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Extracting the page number from the button's text content
        var pageNumber = button.textContent.trim();
        // Calling the loadTable function with the extracted page number
        loadTable(pageNumber);
      });
    });
  });