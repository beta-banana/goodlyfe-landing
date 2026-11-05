const menuButton = document.querySelector(".menu-button");
const mainNavigation = document.querySelector("#main-navigation");

menuButton.addEventListener("click", () => {
    mainNavigation.hidden  = !mainNavigation.hidden;

    menuButton.setAttribute(
        "aria-expanded",
        String(!mainNavigation.hidden)
    );
});

const mobileScreen = window.matchMedia("(max-width: 768px)");

function updateMenu() {
    const isMobile = mobileScreen.matches;
    menuButton.hidden = !isMobile;
    mainNavigation.hidden = isMobile;

    menuButton.setAttribute(
        "aria-expanded",
        String(!isMobile)
    );
}

updateMenu();
mobileScreen.addEventListener("change", updateMenu);

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        mobileScreen.matches && 
        !mainNavigation.hidden
    ) {
        mainNavigation.hidden = true;
        menuButton.setAttribute("aria-expanded", false);
        menuButton.focus();
    }
});

const trialForm = document.querySelector(".trial-form");
const formStatus = trialForm.querySelector(".form-status");

trialForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent = 
        "Demo completed. Your details were not sent or saved."
});

trialForm.addEventListener("input", () => {
    formStatus.textContent = "";
});

const navigationLinks = mainNavigation.querySelectorAll("a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileScreen.matches) {
            mainNavigation.hidden = true;
            menuButton.setAttribute("aria-expanded", "false");

            const section = document.querySelector(
                link.getAttribute("href")
            );

            section.setAttribute("tabindex", "-1");
            section.focus({ preventScroll: true});
        }
    });
});

const submitButton = trialForm.querySelector('button[type="submit"]');

trialForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formStatus.textContent = 
        "Demo completed. Your details were not sent or saved.";
});

submitButton.disabled = false;