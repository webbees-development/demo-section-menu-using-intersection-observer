let currentSectionId = undefined;

const options = {
    threshold: 0.5
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.intersectionRatio > 0.5) {
            currentSectionId = entry.target.getAttribute('id');
        }
    });

    document.querySelectorAll("nav a").forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add("active");
        }
    });
}, options);

document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});