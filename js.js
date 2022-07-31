const Button = document.querySelector(".btn");
const Input = document.getElementById("inp");
Button.addEventListener("click", () => {
  window.location.href = `https://ru.wikipedia.org/wiki/${Input.value}`;
});
const show = () => {
  const myList = document.querySelector(".list");
  fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
    .then((resp) => resp.json())
    .then((resp) =>
      resp.data
        .filter((val) => val.name !== "Afghanistan")
        .map((el, ind) => {
          let list_elem = document.createElement("li");
          list_elem.className = "list__li";
          let picture = document.createElement("img");
          let elem = document.createElement("a");
          elem.className = "list__title";
          elem.href = `https://ru.wikipedia.org/wiki/${el.name}`;
          elem.target = "__blank";
          elem.innerHTML = `${el.name.substring(0, 25)}`;
          picture.src = `${el.flag}`;
          picture.className = "list__picture";
          myList.appendChild(list_elem);
          list_elem.appendChild(picture);
          list_elem.appendChild(elem);
        })
    );
};
show();
Input.addEventListener("input", () => {
  const filter = Input.value.toUpperCase();
  const li = Array.from(document.querySelectorAll("li"));
  const __child = Array.from(document.querySelectorAll("a"));
  for (let i = 0; i < __child.length; i++) {
    if (__child[i].textContent.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
