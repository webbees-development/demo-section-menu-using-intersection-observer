let currentSection = undefined;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            currentSection = entry.target.getAttribute('id');
        }
    });

    document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add("active");
        }
    })
})

document.querySelectorAll(".section-heading").forEach((section) => {
    observer.observe(section);
})