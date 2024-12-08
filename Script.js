let accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  Array.from(accordion.children).forEach((Wrapper) => {
    if (Wrapper.classList.contains("show")) {
      Wrapper.querySelector("div").style.maxHeight =
        Wrapper.querySelector("div").scrollHeight + 30 + "px";
    }
    Wrapper.querySelector("span").addEventListener("click", (e) => {
      let span = e.target;
      let Wrapper = span.parentElement;
      let div = span.nextElementSibling;
      Wrapper.classList.toggle("show");
      if (Wrapper.classList.contains("show")) {
        div.style.maxHeight = div.scrollHeight + 30 + "px";
      } else {
        div.style.maxHeight = null;
      }
      Array.from(accordion.children).forEach((w) => {
        if (w != Wrapper) {
          w.classList.remove("show");
          w.querySelector("div").style.maxHeight = null;
        }
      });
    });
  });
});
