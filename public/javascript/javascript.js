document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    document.querySelectorAll("kbd").forEach(element => {
      let parent = element.parentNode;
      if (e.key.toUpperCase() === element.textContent){
        parent.classList.add("playing")
        setTimeout(() => {
          parent.classList.remove("playing")
        }, 100);
        document.querySelector(`audio[data-key="${parent.getAttribute("data-key")}"]`).play()
      }
    })
  })
})