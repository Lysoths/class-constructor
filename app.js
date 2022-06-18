const inputName = document.getElementById("name");
const inputUserName = document.getElementById("username");
const inputLastName = document.getElementById("lastname");
const inputRank = document.getElementById("rank");
const button = document.querySelector("button");
const nobetContainer = document.querySelector(".nobet-container");
let userName = inputUserName.value;
button.addEventListener("click", () => {
  if (
    userName == "" &&
    inputUserName.value == "" &&
    inputLastName.value == "" &&
    inputRank.value == ""
  ) {
    alert("Bilgileri Eksiksiz Giriniz");
  } else {
    class Person {
      constructor(name, lastName, rank) {
        this.name = name;
        this.lastName = lastName;
        this.rank = rank;
      }
    }

    const userName = new Person(
      `${inputName.value}`,
      `${inputLastName.value}`,
      `${inputRank.value}`
    );

    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `İsim : ${userName.name}<br>
          Soyisim : ${userName.lastName}<br>
          Rütbe : ${userName.rank}<br>`;
    nobetContainer.appendChild(box);
  }
});
