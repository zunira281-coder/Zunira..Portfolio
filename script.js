//======================================
// MOBILE MENU
//======================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

// Close menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

//======================================
// STICKY HEADER SHADOW
//======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

//======================================
// SCROLL PROGRESS BAR
//======================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

//======================================
// BACK TO TOP BUTTON
//======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

//======================================
// ACTIVE NAVIGATION
//======================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

//======================================
// SMOOTH SCROLL
//======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

//======================================
// REVEAL ANIMATION
//======================================

const revealElements = document.querySelectorAll(

    ".about-card, .education-card, .skill-card, .project-card, .contact-card, .glass-card, .timeline-item, .store-wrapper, .resume-box"

);

revealElements.forEach(el => {

    el.classList.add("reveal");

});

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const elementTop = el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
//======================================
// TYPING EFFECT
//======================================

const typingText = document.querySelector(".typing-text");

const words = [

    "Digital Marketing Intern",

    "Shopify Store Manager",

    "SEO Enthusiast",

    "E-commerce Learner"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 110);

}

typeEffect();

//======================================
// CURRENT YEAR
//======================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =

        `© ${new Date().getFullYear()} ZUNIRA. All Rights Reserved.`;

}

//======================================
// BUTTON RIPPLE EFFECT
//======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height =

            `${diameter}px`;

        circle.style.left =

            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =

            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

//======================================
// IMAGE LOADING ANIMATION
//======================================

document.querySelectorAll("img").forEach(img => {

    img.onload = () => {

        img.style.opacity = "1";

        img.style.transform = "scale(1)";

    };

});

//======================================
// CONSOLE MESSAGE
//======================================

console.log(

"%cPortfolio Developed Successfully",

"color:#8B6B4A;font-size:18px;font-weight:bold;"

);

console.log(

"%cDeveloped for ZUNIRA",

"color:#444;font-size:14px;"

);

//======================================
// PREVENT EMPTY MAIL LINK
//======================================

document.querySelectorAll("a[href^='mailto:']").forEach(link => {

    link.addEventListener("click", () => {

        console.log("Opening Email...");

    });

});

//======================================
// WHATSAPP LINK
//======================================

document.querySelectorAll("a[href*='wa.me']").forEach(link => {

    link.addEventListener("click", () => {

        console.log("Opening WhatsApp...");

    });

});

//======================================
// STORE LINK
//======================================

document.querySelectorAll("a[href*='azeo-owneverystep.store']").forEach(link => {

    link.addEventListener("click", () => {

        console.log("Opening Live Store...");

    });

});

//======================================
// FINISHED
//======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
