  document.addEventListener("click", event => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("ajax-link")) {
      event.preventDefault();
      const url = clickedElement.getAttribute("href"); 
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const newDocument = parser.parseFromString(html, "text/html");
          const newContent = newDocument.querySelector("#content");
          const oldContent = document.querySelector("#content");
          oldContent.style.opacity = 1;
          setTimeout(() => {
            oldContent.parentNode.replaceChild(newContent, oldContent);
          }, 500);
        })
        .catch(error => console.error(error));
    }
  });