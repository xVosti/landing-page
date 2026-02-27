// 1. Масив проектів - редагуй посилання та описи тут
const projects = [
    {
        title: "Portfolio Website",
        description: "A clean and responsive portfolio website built with HTML, CSS, and JavaScript.",
        image: "image/project3.png",
        link: "https://xvostik-resume.vercel.app/", 
        tags: ["HTML", "CSS", "JS"]
    },
    {
        title: "Landing Page",
        description: "A sleek and modern landing page for a business or startup.",
        image: "image/project2.png",
        link: "https://youtube.com", 
        tags: ["UI/UX", "Responsive"]
    },
    {
        title: "Minecraft Server",
        description: "A custom Minecraft server website with player stats.",
        image: "image/project1.png", 
        link: "https://pickme-murex.vercel.app/", 
        tags: ["API", "Gaming", "JavaScript"]
    }
];


function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn-primary" target="_blank">Live Demo</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
    
    const setupScroll = (btnId, targetId) => {
        const btn = document.getElementById(btnId);
        const target = document.getElementById(targetId);
        if (btn && target) {
            btn.addEventListener("click", () => {
                target.scrollIntoView({ behavior: "smooth" });
            });
        } 
    };
    
    const logo = document.getElementById('logo-top');
if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавна прокрутка
        });
    });
}

    setupScroll("btn-work", "projects");
    setupScroll("btn-contact", "contact");

    // Плавний скрол для посилань у меню
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});