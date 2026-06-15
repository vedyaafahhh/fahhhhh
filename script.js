// ===============================
// PASSWORD SETTINGS
// ===============================

const correctCode = "161225";


// ===============================
// ADD NUMBER TO PIN BOX
// ===============================

function addNumber(num) {

    const input = document.getElementById("passwordInput");

    if (input.value.length < 6) {
        input.value += num;
    }
}


// ===============================
// BACKSPACE BUTTON
// ===============================

function clearPassword() {

    const input = document.getElementById("passwordInput");

    input.value = input.value.slice(0, -1);
}


// ===============================
// CHECK PASSWORD
// ===============================

function checkPassword() {

    const input = document.getElementById("passwordInput");
    const message = document.getElementById("message");

    if (input.value === correctCode) {

        message.style.color = "#4CAF50";
        message.innerHTML = "Welcome ❤️";

        setTimeout(() => {

            showPage(2);

            input.value = "";
            message.innerHTML = "";

        }, 800);

    } else {

        message.style.color = "#d63384";

        message.innerHTML =
            "You can do better than this, try again 🤭";

        input.value = "";

    }
}


// ===============================
// PAGE NAVIGATION
// ===============================

function showPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const currentPage =
        document.getElementById(`page${pageNumber}`);

    currentPage.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// START WEBSITE
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    showPage(1);

});


// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Number keys

    if (!isNaN(key) && key !== " ") {

        addNumber(key);

    }

    // Backspace

    if (key === "Backspace") {

        clearPassword();

    }

    // Enter key

    if (key === "Enter") {

        checkPassword();

    }

});


// ===============================
// PHOTO STRIP ANIMATION
// ===============================

window.addEventListener("load", () => {

    const strip =
        document.querySelector(".photo-strip-image");

    if (strip) {

        strip.style.opacity = "0";

        setTimeout(() => {

            strip.style.opacity = "1";

            strip.style.transform = "translateY(0)";

        }, 500);

    }

});


// ===============================
// PREVENT ACCIDENTAL DRAGGING
// ===============================

document.addEventListener("dragstart", function(e) {

    if (e.target.tagName === "IMG") {

        e.preventDefault();

    }

});


// ===============================
// FUTURE CUSTOMIZATION AREA
// ===============================

// If later you want:
// - background music
// - confetti on last page
// - surprise popup
// - hidden secret message
// - countdown timer
// Add those features below this section.