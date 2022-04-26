asName.arrrev1 = 0;
function asName(n) {
  if (asName.arrrev1 === 1) {
    obj.reverse();
    showCards();
    asName.arrrev1 = 0;
  } else {
    hofCompare("userName");
    showCards();
    asName.arrrev1 = 1;
  }
}

depart.arrrev1 = 0;
function depart() {
  if (depart.arrrev1 === 1) {
    obj.reverse();
    showCards();
    depart.arrrev1 = 0;
  } else {
    let d = [];
    obj.forEach((item) => {
      d.push(item.userName);
    });

    d = d.sort();
    let arr = [];
    for (let j = 0; j < d.length; j++) {
      for (let l = 0; l < obj.length; l++) {
        if (d[j] == obj[l].userName) {
          arr.push(obj[l]);
        }
      }
    }
    obj = arr;

    showCards();
    depart.arrrev1 = 1;
  }
}

asEmail.arrrev1 = 0;
function asEmail() {
  if (asEmail.arrrev1 === 1) {
    obj.reverse();
    showCards();
    asEmail.arrrev1 = 0;
  } else {
    hofCompare("userEmail");
    showCards();
    asEmail.arrrev1 = 1;
  }
}

let numS = false;
function numSort() {
  obj = obj.sort((a, b) => {
    if (!numS) {
      numS = true;
      return b.userMobile - a.userMobile;
    } else {
      numS = false;
      return a.userMobile - b.userMobile;
    }
  });
  showCards();
}

let namS = false;
function hofCompare(field) {
  if (field == "userName") {
    let i = [];
    obj.forEach((item) => {
      i.push(item.userName);
    });

    i = i.sort();
    let arr = [];
    for (let j = 0; j < i.length; j++) {
      for (let l = 0; l < obj.length; l++) {
        if (i[j] == obj[l].userName) {
          arr.push(obj[l]);
        }
      }
    }
    obj = arr;
  } else if (field == "userEmail") {
    let i = [];
    obj.forEach((item) => {
      i.push(capitalizeFirstLetter(item.userEmail));
    });

    i = i.sort();
    let arr = [];
    for (let j = 0; j < i.length; j++) {
      for (let l = 0; l < obj.length; l++) {
        if (i[j] == capitalizeFirstLetter(obj[l].userEmail)) {
          arr.push(obj[l]);
        }
      }
    }
    obj = arr;
  }
}

// search
let search_input = document.querySelector(".search-input");

function searched(e) {
  let cards = "";
  table_body.innerHTML = "";
  obj.forEach((item) => {
    if (item.userName.toLowerCase().includes(e.target.value.toLowerCase())) {
      cards += `
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
        </tr>`;
    }
  });
  table_body.innerHTML = cards;
  if (e.target.value == "") {
    showCards();
  }
}
