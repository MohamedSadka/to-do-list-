const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("clean-all");

function addTask() {
  if (inputBox.value == "") {
    alert("you have to write somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    savaData();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    savaData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    savaData();
  }
});

function savaData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();

deleteAllBtn.addEventListener("click", function () {
  console.log("done");
  localStorage.clear();
  showData();
});
