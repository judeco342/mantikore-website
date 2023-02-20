window.addEventListener("load", function() {
    setTimeout(function() {
      const loaderWrapper = document.querySelector("#loader-wrapper");
      const body = document.querySelector("body");
      loaderWrapper.classList.add("loaded");
      body.classList.add("loaded");
    }, 2000);

    setTimeout(function() {
      const loaderWrapper = document.querySelector("#loader-wrapper");
      const content = document.querySelector("#content");
      loaderWrapper.classList.add("loaded");
      content.style.transition = "opacity 3s ease-out"; // add transition style
      content.style.opacity = 1;
    }, 3000); // change delay to 3 seconds
  });