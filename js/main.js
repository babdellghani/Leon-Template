let icon = document.querySelector(".icon");
let links = document.querySelector(".header .links ul");
let span = document.querySelector(".icon .span");

icon.addEventListener("click", function (e) {
  if (span) {
    if (span.style.width == "100%") {
      span.style.width = "60%";
      links.style.display = "none";
    } else {
      span.style.width = "100%";
      links.style.display = "block";
    }
  }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest('.links')) {
        span.style.width = "60%";
        links.style.display = "none";
    }
})
