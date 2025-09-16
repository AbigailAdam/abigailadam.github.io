const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'experiences', 'projects', 'resume']

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }
            })
        })
        .catch(error => console.log(error));

    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
            })
            .then(() => {
                // MathJax
                MathJax.typeset();

                // --- Modal functionality (AFTER markdown is injected) ---
                document.querySelectorAll("[data-modal-target]").forEach(trigger => {
                    trigger.addEventListener("click", () => {
                        const modalId = trigger.getAttribute("data-modal-target");
                        const modal = document.getElementById(modalId);
                        if (modal) modal.style.display = "block";
                    });
                });

                // Close buttons
                document.querySelectorAll(".modal-close").forEach(btn => {
                    btn.addEventListener("click", () => {
                        btn.closest(".custom-modal").style.display = "none";
                    });
                });

                // Close when clicking outside modal content
                window.addEventListener("click", (event) => {
                    if (event.target.classList.contains("custom-modal")) {
                        event.target.style.display = "none";
                    }
                });
            })
            .catch(error => console.log(error));
    })

});
