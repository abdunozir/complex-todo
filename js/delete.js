let alert_container = document.querySelector(".alert-container");
let isDeleted = "";

function notDelete() {
  isDeleted = "";
  alert_container.classList.add("modal-close-alert");
}

function letDelete() {
  obj = obj.filter((user) => user.id != isDeleted);
  showCards();
  alert_container.classList.add("modal-close-alert");
}

function deleteEl(e) {
  isDeleted = e.currentTarget.classList[0];
  alert_container.classList.remove("modal-close-alert");
}
