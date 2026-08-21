  // ---- WhatsApp enquiry links -------------------------------------------
  // PLACEHOLDER: replace with the real business WhatsApp number
  // in international format, digits only (no  or spaces), e.g. "919876543210"
  const WHATSAPP_NUMBER = "918714283808";

  document.querySelectorAll(".wa-link").forEach(function (el) {
    var msg = el.getAttribute("data-msg") || "Hi KPP & Sons, I'd like to know more.";
    el.setAttribute(
      "href",
      "https://wa.me/" + 918714283808 + "?text=" + encodeURIComponent(msg)
    );
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // ---- scroll reveal -------------------------------------------------------
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
