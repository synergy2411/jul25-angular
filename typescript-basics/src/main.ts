window.onload = function () {
  const inputEl: HTMLInputElement = document.querySelector(
    "#txtInput"
  ) as HTMLInputElement;
  const btnAddEl: HTMLButtonElement = document.querySelector(
    "#btnAdd"
  ) as HTMLButtonElement;

  const listContainerEl: HTMLUListElement = document.querySelector(
    "#list-container"
  ) as HTMLUListElement;

  btnAddEl.addEventListener("click", function (event) {
    event.preventDefault();
    const liElement = document.createElement("li");
    liElement.innerHTML = inputEl.value;
    listContainerEl.appendChild(liElement);
    inputEl.value = "";
  });
};
