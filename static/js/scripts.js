const CONTENT_DIR = "contents/";
const CONFIG_FILE = "config.yml";

window.addEventListener("DOMContentLoaded", () => {

  marked.use({ mangle: false, headerIds: false });

  const params = new URLSearchParams(window.location.search);
  const p = params.get("p");

  const isProjectPage = window.location.pathname.endsWith("/project.html");

  /* =====================================================
     PROJECT PAGE (project.html)
     ===================================================== */
  if (isProjectPage) {
    const container = document.getElementById("project-md");

    if (!container || !p) {
      container.innerHTML = "<h2>Project not found</h2>";
      return;
    }

    fetch(`${CONTENT_DIR}projects/${p}.md`)
      .then(res => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then(md => {
        container.innerHTML = marked.parse(md);
        if (window.MathJax) MathJax.typeset();
      })
      .catch(() => {
        container.innerHTML = "<h2>Project not found</h2>";
      });

    return; // 🚨 stop here
  }

  /* =====================================================
     HOMEPAGE (index.html)
     ===================================================== */

  // ScrollSpy
  const mainNav = document.querySelector("#mainNav");
  if (mainNav && window.bootstrap) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse navbar on mobile
  const navbarToggler = document.querySelector(".navbar-toggler");
  document.querySelectorAll("#navbarResponsive .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navbarToggler && getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Load YAML config
  fetch(CONTENT_DIR + CONFIG_FILE)
    .then(res => res.text())
    .then(text => {
      const yml = jsyaml.load(text);
      Object.keys(yml).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.innerHTML = yml[key];
      });
    });

  /* =====================================================
     LOAD ALL SECTIONS (THIS IS THE KEY FIX)
     ===================================================== */

  function loadMarkdown(targetId, path) {
    const el = document.getElementById(targetId);
    if (!el) return;

    fetch(path)
      .then(res => res.text())
      .then(md => {
        el.innerHTML = marked.parse(md);
        if (window.MathJax) MathJax.typeset();
      });
  }

  loadMarkdown("home-md", `${CONTENT_DIR}home.md`);
  loadMarkdown("projects-md", `${CONTENT_DIR}projects.md`);
  loadMarkdown("experiences-md", `${CONTENT_DIR}experiences.md`);
  loadMarkdown("resume-md", `${CONTENT_DIR}resume.md`);

});
