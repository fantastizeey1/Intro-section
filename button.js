function myBtn1Clicked() {
    var dropdown = document.getElementById("myDropdown1");
    var downArrow = document.getElementById("drop-down-arrow1");
    var upArrow = document.getElementById("go-up-arrow1");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        downArrow.style.display = "none";
        upArrow.style.display = "inline";
    } else {
        dropdown.style.display = "none";
        downArrow.style.display = "inline";
        upArrow.style.display = "none";
    }
}

function myBtn2Clicked() {
    var dropdown = document.getElementById("myDropdown2");
    var downArrow = document.getElementById("drop-down-arrow2");
    var upArrow = document.getElementById("go-up-arrow2");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        downArrow.style.display = "none";
        upArrow.style.display = "inline";
    } else {
        dropdown.style.display = "none";
        downArrow.style.display = "inline";
        upArrow.style.display = "none";
    }
}






window.onload = function() {
    if (screen.width <= 500) {
        document.getElementById("full-img").src = "/image-hero-mobile.png";
    }

    const showNavButton = document.getElementById('show-nav');
    const closeNavButton = document.getElementById('close-nav');
    const navElements = document.querySelectorAll('.header-top');

    showNavButton.addEventListener('click', function() {
        // Show the nav elements
        navElements.forEach(function(element) {
            element.style.width = "60%";
        });
    });

    closeNavButton.addEventListener('click', function() {
        // Hide the nav elements
        navElements.forEach(function(element) {
            element.style.width = "0";
        });
    });

    const showNav = document.getElementById("show-nav");
    const closeNav = document.getElementById("close-nav");

    showNav.addEventListener("click", function() {
        // Toggle visibility of show-nav and close-nav
        showNav.style.display = "none";
        closeNav.style.display = "inline-block";
    });

    closeNav.addEventListener("click", function() {
        // Toggle visibility of close-nav and show-nav
        closeNav.style.display = "none";
        showNav.style.display = "inline-block";
    });
};
