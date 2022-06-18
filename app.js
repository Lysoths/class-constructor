const inputName = document.getElementById("name");
const inputLastName = document.getElementById("lastname");
const inputRank = document.getElementById("rank");
const button = document.querySelector("button");
const nobetContainer = document.querySelector(".nobet-container");
let boxes = document.querySelectorAll(".box");

let users = [];
let i = 0;
button.addEventListener("click", () => {
  if (
    inputLastName.value == "" &&
    inputRank.value == "" &&
    inputName.value == ""
  ) {
    alert("Bilgileri Eksiksiz Giriniz");
  } else {
    class Person {
      constructor(id, name, lastName, rank) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.rank = rank;
      }
    }
    users.push(
      new Person(
        i,
        `${inputName.value}`,
        `${inputLastName.value}`,
        `${inputRank.value}`
      )
    );
    const box = document.createElement("div");
    box.classList.add("box");
    console.log(users.length);
    box.innerHTML = `İsim : ${users[i].name.toUpperCase()}<br>
    Soyisim : ${users[i].lastName.toUpperCase()}<br>
    Rütbe : ${users[i].rank.toUpperCase()}<br>`;
    nobetContainer.appendChild(box);
    i++;
  }
  console.log(boxes);
});
