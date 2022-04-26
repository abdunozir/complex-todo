let flexRadioDefault = document.querySelector("#flexRadioDefault");
let flexRadioDefault1 = document.querySelector("#flexRadioDefault1");
let flexRadioDefault2 = document.querySelector("#flexRadioDefault2");
let userName = document.querySelector(".userName");
let userEmail = document.querySelector(".userEmail");
let userNumber = document.querySelector(".userNumber");
let userCity = document.querySelector(".userCity");
let add_obj = document.querySelector(".add_obj");
let form_select1 = document.querySelector(".form-select1");
let date_el1 = document.querySelector(".date_el1");
let el1_checkbox = document.querySelector(".el1_checkbox");
let userName_span = document.querySelector(".userName_span");
let userEmail_span = document.querySelector(".emailLabel");
let userNumber_span = document.querySelector(".userNumber_span");
let department_span = document.querySelector(".department_span");

add_obj.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.currentTarget.classList.length > 3) {
    editted(e);
    modal_container.classList.add("modal-close-anim");
  } else {
    if (
      userNumber.value.length < 7 ||
      userEmail.value == "" ||
      userName.value == "" ||
      form_select1.value == "None"
    ) {
      if (form_select1.value == "None") {
        form_select1.classList.add("notvalid");
        department_span.classList.remove("notrequire");
      } else {
        department_span.classList.add("notrequire");
        form_select1.classList.remove("notvalid");
      }
      if (userName.value.length < 5) {
        userName.classList.add("notvalid");
        userName_span.classList.remove("notrequire");
      } else {
        userName.classList.remove("notvalid");
        userName_span.classList.add("notrequire");
      }
      if (userEmail.value.includes("@") && userEmail.value.length > 4) {
        userEmail.classList.remove("notvalid");
        userEmail_span.classList.add("notrequire");
      } else {
        userEmail_span.classList.remove("notrequire");
        userEmail.classList.add("notvalid");
      }
      if (userNumber.value.length > 7) {
        userNumber_span.classList.add("notrequire");
        userNumber.classList.remove("notvalid");
      } else {
        userNumber_span.classList.remove("notrequire");
        userNumber.classList.add("notvalid");
      }
    } else {
      modal_container.classList.add("modal-close-anim");
      addNew();
      inputsDefault();
    }
  }

  showCards();
});

// reset all form inputs
function inputsDefault() {
  flexRadioDefault.checked = false;
  flexRadioDefault1.checked = false;
  flexRadioDefault2.checked = false;

  userCity.value = "";
  userNumber.value = "";
  userEmail.value = "";
  userName.value = "";

  form_select1.value = "None";
  date_el1.value = "";
  el1_checkbox.checked = false;
  document.querySelectorAll(".notvalid").forEach((el) => {
    el.classList.remove("notvalid");
  });
  document.querySelectorAll(".requireds").forEach((el) => {
    el.classList.add("notrequire");
  });
}

// add new card obj
function addNew() {
  let i = [];
  obj.forEach((el) => {
    i.push(el.id);
  });

  let el1 = {
    id: Math.max(...i) + 1,
    userName: "",
    userEmail: "",
    userMobile: "",
    userCity: "",
    gender: {
      male: false,
      female: false,
      other: false,
    },
    department: "",
    date: "",
    permanentEmployee: false,
  };

  //   name, number, email, city form
  el1.userName = capitalizeFirstLetter(userName.value);
  el1.userEmail = userEmail.value;
  el1.userMobile = userNumber.value;
  el1.userCity = userCity.value;

  //   gender form
  el1.gender.female = false;
  el1.gender.other = false;
  el1.gender.male = false;
  if (flexRadioDefault2.checked) {
    el1.gender.other = true;
  } else if (flexRadioDefault1.checked) {
    el1.gender.female = true;
  } else {
    el1.gender.male = true;
  }

  //   department form
  el1.department = form_select1.value;

  //   date form
  el1.date = date_el1.value;

  // check box last
  if (el1_checkbox.checked == true) {
    el1.permanentEmployee = el1_checkbox.checked;
  } else {
    el1.permanentEmployee = false;
  }

  // pushing data
  obj.push(el1);
  showCards();
  inputsDefault();
}

//  capitalizing the first letter of the word
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// check onkeypress
userName.addEventListener("keyup", (e) => {
  if (e.target.value.length > 5) {
    userName.classList.remove("notvalid");
    userName_span.classList.add("notrequire");
  } else {
    userName_span.classList.remove("notrequire");
    userName.classList.add("notvalid");
  }
});

userEmail.addEventListener("keyup", (e) => {
  if (!e.target.value.includes("@")) {
    userEmail_span.classList.remove("notrequire");
    userEmail.classList.add("notvalid");
    userEmail_span.innerHTML = '"@" is required.';
  } else if (e.target.value.length <= 4) {
    userEmail_span.innerHTML = "Minimum 5 letters are required.";
    userEmail_span.classList.remove("notrequire");
    userEmail.classList.add("notvalid");
  } else {
    userEmail.classList.remove("notvalid");
    userEmail_span.classList.add("notrequire");
  }
});

userNumber.addEventListener("keyup", (e) => {
  if (e.target.value.length > 7) {
    userNumber_span.classList.add("notrequire");
    userNumber.classList.remove("notvalid");
  } else {
    userNumber_span.classList.remove("notrequire");
    userNumber.classList.add("notvalid");
  }
});

form_select1.addEventListener("change", (e) => {
  if (e.target.value == "None") {
    form_select1.classList.add("notvalid");
    department_span.classList.remove("notrequire");
  } else {
    department_span.classList.add("notrequire");
    form_select1.classList.remove("notvalid");
  }
});
