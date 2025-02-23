// Select Navbar Elements
var toggler = document.getElementById("toggler");
var overlay = document.getElementById("overlay");
var ln1 = document.createElement("div"); // Create lines dynamically if missing
var ln2 = document.createElement("div");
var toggleflag = 0;

// Select sections that need to be hidden when the menu is open
var intro = document.getElementById("intro-div");
var about = document.getElementById("about-div");
var services = document.getElementById("services-div");
var careers = document.getElementById("careers-div");
var contact = document.getElementById("contact-div");

// Disable scrolling when menu is open
function disableScrolling() {
    document.body.style.overflow = "hidden";
}

// Enable scrolling when menu is closed
function enableScrolling() {
    document.body.style.overflow = "";
}

// Function to Toggle Mobile Navbar
function mobilenav() {
    if (toggleflag === 0) {
        overlay.classList.add("active"); // Show the menu
        disableScrolling(); // Prevent page scroll

        ln1.style.transform = "rotate(50deg)";
        ln2.style.transform = "rotate(-50deg)";
        toggler.style.height = "1px";

        // Hide page content
        if (intro) intro.style.display = "none";
        if (about) about.style.display = "none";
        if (services) services.style.display = "none";
        if (careers) careers.style.display = "none";
        if (contact) contact.style.display = "none";

        toggleflag = 1;
    } else {
        overlay.classList.remove("active"); // Hide the menu
        enableScrolling(); // Allow page scroll

        ln1.style.transform = "rotate(0deg)";
        ln2.style.transform = "rotate(0deg)";
        toggler.style.height = "40%";

        // Show page content again
        if (intro) intro.style.display = "flex";
        if (about) about.style.display = "flex";
        if (services) services.style.display = "flex";
        if (careers) careers.style.display = "flex";
        if (contact) contact.style.display = "flex";

        toggleflag = 0;
    }
}

// Function to Close Navbar When Clicking a Link
function navigation() {
    overlay.classList.remove("active"); // Close menu
    enableScrolling(); // Enable scrolling

    ln1.style.transform = "rotate(0deg)";
    ln2.style.transform = "rotate(0deg)";
    toggler.style.height = "40%";

    if (intro) intro.style.display = "flex";
    if (about) about.style.display = "flex";
    if (services) services.style.display = "flex";
    if (careers) careers.style.display = "flex";
    if (contact) contact.style.display = "flex";

    toggleflag = 0;
}

// Close Menu When Clicking Outside
document.addEventListener("click", (event) => {
    if (toggleflag === 1 && !overlay.contains(event.target) && event.target !== toggler) {
        mobilenav();
    }
});

// Ensure toggler exists
if (!document.getElementById("ln1")) toggler.appendChild(ln1);
if (!document.getElementById("ln2")) toggler.appendChild(ln2);
