const burger = document.querySelector(".burger");
    const navMenu = document.querySelector("nav ul");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");

        // ARIA support
        const expanded = burger.classList.contains("active");
        burger.setAttribute("aria-expanded", expanded);
    });

    // Close menu when clicking a link (mobile)
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            burger.classList.remove("active");
            document.body.classList.remove("menu-open");
            burger.setAttribute("aria-expanded", "false");
        });
    });
