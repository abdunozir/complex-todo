function editted(e) {
  obj.forEach((item) => {
    if (
      +e.currentTarget.classList[e.currentTarget.classList.length - 1] ==
      item.id
    ) {
      console.log(item);
      e.currentTarget.classList.remove(item.id);
      item.gender.male = flexRadioDefault.checked;
      item.gender.female = flexRadioDefault1.checked;
      item.gender.other = flexRadioDefault2.checked;

      item.userCity = userCity.value;
      item.userMobile = userNumber.value;
      item.userEmail = userEmail.value;
      item.userName = userName.value;

      item.department = form_select1.value;
      item.date = date_el1.value;
      item.permanentEmployee = el1_checkbox.checked;
    }
  });
}

function del(e) {
  modal_container.classList.remove("modal-close-anim");

  obj.forEach((item) => {
    if (item.id == e.currentTarget.classList[0]) {
      document.querySelector(".add_obj").classList.add(`${item.id}`);
      flexRadioDefault.checked = item.gender.male;
      flexRadioDefault1.checked = item.gender.female;
      flexRadioDefault2.checked = item.gender.other;

      userCity.value = item.userCity;
      userNumber.value = item.userMobile;
      userEmail.value = item.userEmail;
      userName.value = item.userName;

      form_select1.value = item.department;
      date_el1.value = item.date;
      el1_checkbox.checked = item.permanentEmployee;
    }
  });
}
