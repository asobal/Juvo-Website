document.addEventListener("DOMContentLoaded", function () {

  const body = document.body;

  function clear(prefix) {
    body.className = body.className
      .split(" ")
      .filter(c => !c.startsWith(prefix))
      .join(" ");
  }

  // Toggle panel
  document.getElementById("uw-toggle").addEventListener("click", function () {
    const panel = document.getElementById("uw-panel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });

  document.getElementById("uw-size-toggle").addEventListener("click", function () {
  document.getElementById("uw-panel").classList.toggle("large");
});

  // Reset
  document.getElementById("uw-reset").addEventListener("click", function () {
  body.className = body.className
    .split(" ")
    .filter(c => !c.startsWith("uw-"))
    .join(" ");

  body.style.setProperty("--uw-scale", "1");

  document.querySelectorAll(".uw-box button").forEach(btn => {
    btn.classList.remove("active");
  });
});

  // Active button thing
function setActive(group, selectedBtn) {
  document.querySelectorAll(group).forEach(btn => {
    btn.classList.remove("active");
  });
  selectedBtn.classList.add("active");
}
  //  Contrast
  document.querySelectorAll("[data-contrast]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-contrast-");
    body.classList.add("uw-contrast-" + this.dataset.contrast);

    setActive("[data-contrast]", this);
  });
});

  // Text size
  document.querySelectorAll("[data-size]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-text-");
    body.style.setProperty("--uw-scale", {
        "1": "1",
        "2": "1.08",
        "3": "1.16",
        "4": "1.25"
        }[this.dataset.size]);

    setActive("[data-size]", this);
  });
});

  // Spacing
  document.querySelectorAll("[data-space]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-space-");
    body.classList.add("uw-space-" + this.dataset.space);

    setActive("[data-space]", this);
  });
});
  // Line height
  document.querySelectorAll("[data-line]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-line-");
    body.classList.add("uw-line-" + this.dataset.line);

    setActive("[data-line]", this);
  });
});

  // Alignment
  document.querySelectorAll("[data-align]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-align-");
    body.classList.add("uw-align-" + this.dataset.align);

    setActive("[data-align]", this);
  });
});

  // Saturation
  document.querySelectorAll("[data-sat]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-sat-");
    body.classList.add("uw-sat-" + this.dataset.sat);

    setActive("[data-sat]", this);
  });
});
  
  // Highlight links
  document.querySelectorAll("[data-links]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-links-");
    body.classList.add("uw-links-" + this.dataset.links);

    setActive("[data-links]", this);
  });
});

  // Pause animations
  document.querySelectorAll("[data-anim]").forEach(btn => {
  btn.addEventListener("click", function () {
    clear("uw-anim-");
    body.classList.add("uw-anim-" + this.dataset.anim);

    setActive("[data-anim]", this);
  });
});


  

});