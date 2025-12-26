const CONTENT_DIR = "contents/";
const CONFIG_FILE = "config.yml";

window.addEventListener("DOMContentLoaded", () => {

  marked.use({ mangle: false, headerIds: false });

  const params = new URLSearchParams(window.location.search);
  const p = params.get("p");
  const type = params.get("type") || "project";

  const isDetailPage = window.location.pathname.endsWith("/project.html");

  /* ===========================
     DETAIL PAGE (project.html)
     =========================== */
  if (isDetailPage) {
    const container = document.getElementById("project-md");
    if (!container || !p) return;

    const folder = type === "experience" ? "experiences" : "projects";

    fetch(`${CONTENT_DIR}${folder}/${p}.md`)
      .then(r => {
        if (!r.ok) throw new Error("Not found");
        return r.text();
      })
      .then(md => {
        container.innerHTML = marked.parse(md);
        if (window.MathJax) MathJax.typeset();
      })
      .catch(() => {
        container.innerHTML = "<h2>Content not found</h2>";
      });

    return;
  }

  /* ===========================
     HOMEPAGE
     =========================== */

  // Load site config
  fetch(CONTENT_DIR + CONFIG_FILE)
    .then(r => r.text())
    .then(text => {
      const yml = jsyaml.load(text);
      Object.entries(yml).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = val;
      });
    });

  function loadMarkdown(id, file) {
    const el = document.getElementById(id);
    if (!el) return;

    fetch(file)
      .then(r => r.text())
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
