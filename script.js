function initMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const siteNav = document.getElementById("site-nav");
  const serviceNavItems = [
    ["interior-painting.html", "Interior Painting"],
    ["exterior-painting.html", "Exterior Painting"],
    ["drywall-repair-prep.html", "Drywall Repair and Prep"],
    ["trim-doors-ceilings.html", "Trim, Doors, and Ceilings"],
    ["accent-walls.html", "Accent Walls"],
    ["deck-fence-staining.html", "Deck and Fence Staining"],
    ["basic-renovations.html", "Basic Renovations"]
  ];

  if (!hamburger || !siteNav) {
    return;
  }

  const isDesktopNav = () => window.innerWidth > 1120;

  const servicesLink = siteNav.querySelector('a[data-page="services"]');
  let closeServicesMenu = () => {};

  if (servicesLink && !servicesLink.closest(".site-nav-item")) {
    const currentPath = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const menuItem = document.createElement("div");
    const linkRow = document.createElement("div");
    const toggle = document.createElement("button");
    const submenu = document.createElement("div");

    menuItem.className = "site-nav-item site-nav-item--services";
    linkRow.className = "site-nav-link-row";
    submenu.className = "site-nav-submenu";
    submenu.setAttribute("aria-label", "Service pages");

    toggle.type = "button";
    toggle.className = "site-nav-submenu-toggle";
    toggle.setAttribute("aria-label", "Toggle service pages");
    toggle.setAttribute("aria-expanded", "false");

    servicesLink.replaceWith(menuItem);
    linkRow.appendChild(servicesLink);
    linkRow.appendChild(toggle);
    menuItem.appendChild(linkRow);

    serviceNavItems.forEach(([href, label]) => {
      const submenuLink = document.createElement("a");
      submenuLink.className = "site-nav-submenu-link";
      submenuLink.href = href;
      submenuLink.textContent = label;

      if (currentPath === href) {
        submenuLink.classList.add("is-active");
        submenuLink.setAttribute("aria-current", "page");
      }

      submenu.appendChild(submenuLink);
    });

    menuItem.appendChild(submenu);

    closeServicesMenu = () => {
      menuItem.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    menuItem.addEventListener("mouseenter", () => {
      if (!isDesktopNav()) {
        return;
      }

      menuItem.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    });

    menuItem.addEventListener("mouseleave", () => {
      if (!isDesktopNav()) {
        return;
      }

      closeServicesMenu();
    });

    toggle.addEventListener("click", (event) => {
      if (isDesktopNav()) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      const nextExpanded = toggle.getAttribute("aria-expanded") !== "true";
      menuItem.classList.toggle("is-open", nextExpanded);
      toggle.setAttribute("aria-expanded", String(nextExpanded));
    });
  }

  const closeNavigation = () => {
    hamburger.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    closeServicesMenu();
  };

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);

    if (expanded) {
      closeServicesMenu();
    }
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();
    });
  });

  if (!siteNav.querySelector(".site-nav-social-row")) {
    const socialRow = document.createElement("div");
    socialRow.className = "site-nav-social-row";

    [
      {
        href: "https://www.facebook.com/SalsPaintingNJ",
        label: "Facebook"
      },
      {
        href: "https://share.google/WfeqOL0v1ni1DC3Mh",
        label: "Google Business Profile"
      }
    ].forEach(({ href, label }) => {
      const link = document.createElement("a");
      link.className = "site-nav-social-link";
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", label);
      link.title = label;
      socialRow.appendChild(link);
    });

    siteNav.appendChild(socialRow);
  }

  const currentPage = document.body.dataset.page;
  if (currentPage) {
    siteNav.querySelectorAll("a[data-page]").forEach((link) => {
      const isActive = link.dataset.page === currentPage;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1120) {
      closeNavigation();
    }
  });
}

function initRevealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!revealItems.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initFooterYear() {
  const footerYear = document.getElementById("footer-year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}

function initFaqAccordions() {
  const faqGroups = document.querySelectorAll(".faq-list");

  faqGroups.forEach((faqGroup) => {
    const faqItems = faqGroup.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) {
          return;
        }

        faqItems.forEach((other) => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      });
    });
  });
}

function initReviewCarousels() {
  const carousels = document.querySelectorAll("[data-review-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector("[data-review-track]");
    const dotsContainer = carousel.querySelector("[data-review-dots]");
    const previousButton = carousel.querySelector("[data-review-prev]");
    const nextButton = carousel.querySelector("[data-review-next]");

    if (!track || !dotsContainer) {
      return;
    }

    const cards = Array.from(track.querySelectorAll(".review-card"));
    if (!cards.length) {
      return;
    }

    let currentIndex = 0;
    let cachedCardWidth = 0;

    function visibleCount() {
      if (window.innerWidth <= 760) {
        return 1;
      }

      if (window.innerWidth <= 1080) {
        return 2;
      }

      return 3;
    }

    function getCardWidth() {
      if (!cachedCardWidth) {
        const firstCard = cards[0];
        const styles = window.getComputedStyle(track);
        const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
        cachedCardWidth = firstCard.getBoundingClientRect().width + gap;
      }

      return cachedCardWidth;
    }

    function buildDots() {
      dotsContainer.innerHTML = "";
      const pages = Math.max(1, Math.ceil(cards.length / visibleCount()));

      for (let index = 0; index < pages; index += 1) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "review-carousel-dot";
        dot.setAttribute("aria-label", `Go to review set ${index + 1}`);
        dot.addEventListener("click", () => {
          currentIndex = index * visibleCount();
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateCarousel() {
      const visible = visibleCount();
      const maxIndex = Math.max(0, cards.length - visible);
      currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
      track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;

      const activeDotIndex = Math.floor(currentIndex / visible);
      dotsContainer.querySelectorAll(".review-carousel-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === activeDotIndex);
      });

      if (previousButton) {
        previousButton.disabled = currentIndex === 0;
      }

      if (nextButton) {
        nextButton.disabled = currentIndex >= maxIndex;
      }
    }

    if (previousButton) {
      previousButton.addEventListener("click", () => {
        currentIndex -= visibleCount();
        updateCarousel();
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        currentIndex += visibleCount();
        updateCarousel();
      });
    }

    buildDots();
    updateCarousel();

    let resizeTimer;
    window.addEventListener("resize", () => {
      cachedCardWidth = 0;
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        buildDots();
        updateCarousel();
      }, 120);
    });
  });
}

function setFormStatus(feedbackElement, message, state) {
  if (!feedbackElement) {
    return;
  }

  feedbackElement.textContent = message;
  feedbackElement.dataset.state = state;
}

function initContactForms() {
  const forms = document.querySelectorAll("form[data-contact-form]");

  forms.forEach((form) => {
    const feedbackElement = form.querySelector("[data-form-feedback]");
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultButtonText = submitButton ? submitButton.textContent : "";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!(form instanceof HTMLFormElement)) {
        return;
      }

      const action = form.getAttribute("action");
      const method = form.getAttribute("method") || "POST";
      const formData = new FormData(form);
      formData.set("source_page", window.location.pathname);

      if (!action) {
        setFormStatus(feedbackElement, "This form is missing a submission endpoint.", "error");
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      setFormStatus(feedbackElement, "Sending your request...", "pending");

      try {
        const response = await fetch(action, {
          method: method.toUpperCase(),
          headers: {
            Accept: "application/json"
          },
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        form.reset();
        setFormStatus(feedbackElement, "Thanks. Your estimate request was sent. If you need a faster reply, call or text Sal at (727) 644-7674.", "success");
      } catch (error) {
        setFormStatus(feedbackElement, "We could not send the form right now. Please try again, or call or text Sal directly at (727) 644-7674.", "error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultButtonText;
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initRevealOnScroll();
  initFooterYear();
  initFaqAccordions();
  initReviewCarousels();
  initContactForms();
});