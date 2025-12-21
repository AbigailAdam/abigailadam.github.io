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
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    const section = params.get("section");
    const p = params.get("p");

    function hideAllSections() {
        document.querySelectorAll("[id$='-md']").forEach(el => {
            el.style.display = "none";
        });
    }

    function loadMarkdown(targetId, path) {
        hideAllSections();
        const el = document.getElementById(targetId);
        if (!el) return;

        el.style.display = "block";

        fetch(path)
            .then(res => res.text())
            .then(md => {
                el.innerHTML = marked.parse(md);
                MathJax.typeset();
            })
            .catch(err => console.error(err));
    }

    // ---- ROUTING ----

    if (section === "projects" && p) {
        loadMarkdown("projects-md", `${content_dir}projects/${p}.md`);
    }
    else if (section === "experiences" && p) {
        loadMarkdown("experiences-md", `${content_dir}experiences/${p}.md`);
    }
    else if (page === "projects") {
        loadMarkdown("projects-md", `${content_dir}projects.md`);
    }
    else if (page === "experiences") {
        loadMarkdown("experiences-md", `${content_dir}experiences.md`);
    }
    else if (page === "resume") {
        loadMarkdown("resume-md", `${content_dir}resume.md`);
    }
    else {
        loadMarkdown("home-md", `${content_dir}home.md`);
    }

});
