document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab_heading");
    const projectSections = document.querySelectorAll(".project-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default action

            const tabId = this.getAttribute("data-tab");
            projectSections.forEach(section => {
                if (section.id === tabId + "-projects") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            tabs.forEach(t => {
                t.classList.remove("active-tab");
            });
            this.classList.add("active-tab");
        });
    });

    // Show the default active tab only if the element exists
    const defaultTabElement = document.getElementById("html-css-projects");
    if (defaultTabElement) {
        defaultTabElement.style.display = "block";
    }
});
