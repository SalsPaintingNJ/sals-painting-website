const hamburger = document.getElementById("hamburger");
const siteNav = document.getElementById("site-nav");

if (hamburger && siteNav) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
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
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const estimateForm = document.getElementById("estimate-form");
const formFeedback = document.getElementById("form-feedback");

function buildSmsUrl(message) {
  const isiOS = /iPad|iPhone|iPod/.test(window.navigator.userAgent);
  const separator = isiOS ? "&" : "?";
  return `sms:+17276447674${separator}body=${encodeURIComponent(message)}`;
}

if (estimateForm && formFeedback) {
  estimateForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(estimateForm);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const town = (formData.get("town") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const timeline = (formData.get("timeline") || "").toString().trim();
    const details = (formData.get("details") || "").toString().trim();

    const messageLines = [
      "Hi Sal, I'm looking for a free estimate.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      town ? `Town: ${town}` : "",
      service ? `Service needed: ${service}` : "",
      timeline ? `Timeline: ${timeline}` : "",
      details ? `Project details: ${details}` : "",
      "I can text project photos after this message."
    ].filter(Boolean);

    const message = messageLines.join("\n");

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(message);
        formFeedback.textContent = "Estimate details copied. Your text app should open next. If it does not, paste the copied details into a text to (727) 644-7674.";
      } else {
        formFeedback.textContent = "Your estimate text is ready. If your messaging app does not open, copy the details manually and text them to (727) 644-7674.";
      }
    } catch (error) {
      formFeedback.textContent = "Your estimate text is ready. If copy fails, send the details manually to (727) 644-7674.";
    }

    window.location.href = buildSmsUrl(message);
  });
}