const sidebar = document.querySelector(".sidebar");
const dropdownContent = document.querySelector(".dropdown-content");
sidebar.addEventListener("click", function() {
    // Toggle the visibility of the dropdown content
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});