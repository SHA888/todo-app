function newItem() {
  // 1. Adding a new item to the list of items
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let list = document.querySelector("#list");
    list.appendChild(li);
  }

  // 2. Crossing out an item from the list items
  function crossOut() {
    li.classList.toggle("strike");
  }

  li.addEventListener("dblclick", crossOut);

  // 3. Adding the delete buton "X"
  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);
  // 4. Adding CLASS DELETE (DISPLAY: NONE) from CSS

  function deleteListItem() {
    li.classList.add("delete");
  }

  // 5. Reordering the items
  $("#list").sortable();
}
