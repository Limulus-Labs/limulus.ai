(function initLanguageSwitchers() {
    const ROOT_SELECTOR = ".lang-root";
    const BTN_SELECTOR = ".lang-btn";
    const MENU_SELECTOR = ".lang-menu";

    function placeMenu(btn, menu) {
        const r = btn.getBoundingClientRect();
        const gap = 8;

        const menuWidth = menu.offsetWidth || 160;
        let left = Math.max(8, r.right - menuWidth);
        left = Math.min(left, window.innerWidth - menuWidth - 8);

        menu.style.top = `${r.bottom + gap}px`;
        menu.style.left = `${left}px`;
    }

    function wireRoot(root) {
        const btn = root.querySelector(BTN_SELECTOR);
        const menu = root.querySelector(MENU_SELECTOR);
        if (!btn || !menu) return;

        let isOpen = false;

        const open = () => {
            menu.hidden = false;
            requestAnimationFrame(() => {
                placeMenu(btn, menu);
                menu.classList.add("show");
                btn.setAttribute("aria-expanded", "true");
                isOpen = true;
            });
        };

        const close = () => {
            menu.classList.remove("show");
            btn.setAttribute("aria-expanded", "false");
            setTimeout(() => { menu.hidden = true; }, 120);
            isOpen = false;
        };

        const toggle = (ev) => {
            ev.stopPropagation();
            isOpen ? close() : open();
        };

        btn.addEventListener("pointerup", toggle, { passive: true });
        btn.addEventListener("click", toggle);

        document.addEventListener("click", (e) => {
            if (!isOpen) return;
            const t = e.target;
            if (!(t instanceof Node)) return;
            if (!root.contains(t)) close();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && isOpen) close();
        });

        const reposition = () => { if (isOpen) placeMenu(btn, menu); };
        window.addEventListener("resize", reposition);
        window.addEventListener("scroll", reposition, true);
    }

    document.querySelectorAll(ROOT_SELECTOR).forEach(wireRoot);

    window.addEventListener("astro:page-load", () => {
        document.querySelectorAll(ROOT_SELECTOR).forEach(wireRoot);
    });
})();
