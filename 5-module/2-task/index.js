function toggleText() {
  let button = document.body.querySelector(".toggle-text-button");
  let text = document.getElementById("text");
  button.addEventListener("click", () => text.hidden = !text.hidden);
}
