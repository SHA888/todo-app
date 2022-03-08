function newItem() {
  // 1. Adding a new item to the list of items
  // let li = document.createElement("li");
  let li = $("<li></li>");
  // let inputValue = document.getElementById("input").value;
  let inputValue = $("#input").val();
  //   let text = document.createTextNode(inputValue);
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    // let list = document.querySelector("#list");
    $("#list").append(li);
  }

  // 2. Crossing out an item from the list items
  //   function crossOut() {
  //     li.classList.toggle("strike");
  //   }

  // li.addEventListener("dblclick", crossOut);
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // 3. Adding the delete buton "X"
  //   let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  // crossOutButton.appendChild(document.createTextNode("X"));
  crossOutButton.append(document.createTextNode("X"));
  // li.appendChild(crossOutButton);
  li.append(crossOutButton);

  // crossOutButton.addEventListener("click", deleteListItem);
  crossOutButton.on("click", deleteListItem);

  // 4. Adding CLASS DELETE (DISPLAY: NONE) from CSS

  function deleteListItem() {
    // li.classList.add("delete");
    li.addClass("delete");
  }

  // 5. Reordering the items
  $("#list").sortable();
}
