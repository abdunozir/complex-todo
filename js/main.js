let modal_container = document.querySelector(".modal-container");
let openadd_modal = document.querySelector(".open-add-modal");
let table_body = document.querySelector(".table_body");
let btn_closeModal = document.querySelector(".btn-close");

btn_closeModal.addEventListener("click", () => {
  modal_container.classList.add("modal-close-anim");
});
openadd_modal.addEventListener("click", () => {
  modal_container.classList.remove("modal-close-anim");
  inputsDefault();
});

function showCards() {
  let modal_content = ``;
  obj.forEach((item) => {
    modal_content += `
<tr>
    <td scope="row">${item.userName}</td>
    <td>${item.userEmail}</td>
    <td>${item.userMobile}</td>
    <td>${item.department}</td>
    <td>
    <button class="${item.id} btn btn-primary" onclick="del(event)">
       <i class="bi bi-pencil"></i>
    </button>
    <button class="${item.id} dlt_btn btn btn-danger" onclick="deleteEl(event)">
        <i class="bi bi-x"></i>
    </button>
    </td>
</tr>

`;
  });

  table_body.innerHTML = modal_content;
}
showCards();
