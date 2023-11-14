"use strict";

//Selectors
const input = document.querySelector(".input");
const submit = document.querySelector(".submit-button");
const list = document.querySelector(".list");

//Event Listeners
document.addEventListener("DOMContentLoaded", getActionItems);
submit.addEventListener("click", addActionItem);
list.addEventListener("click", completedOrRemoveItem);
//Functions
function addActionItem(event) {
  //stopping the function from firing/reloading automatically
  event.preventDefault();
  const actionItemContainer = document.createElement("div");
  actionItemContainer.classList.add("actionItemContainer");

  const newActionItem = document.createElement("li");
  newActionItem.innerText = input.value;
  newActionItem.classList.add("actionItem");
  actionItemContainer.appendChild(newActionItem);

  saveLocalActionItems(input.value);

  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.classList.add("completeButton");
  actionItemContainer.appendChild(completeButton);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
  deleteButton.classList.add("deleteButton");
  actionItemContainer.appendChild(deleteButton);
  list.appendChild(actionItemContainer);
  input.value = ""; //clearning the form after submission
}

function completedOrRemoveItem(e) {
  const item = e.target;
  //DELETE ACTION ITEM
  if (item.classList[0] === "deleteButton") {
    item.parentElement.remove();
    removeLocalActionItems(item.parentElement);
  }
  //COMPLETE ACTION ITEM
  if (item.classList[0] === "completeButton") {
    item.parentElement.classList.toggle("completed");
    console.log(item.parentElement);
  }
}

function saveLocalActionItems(actionItem) {
  let actionItems;
  if (localStorage.getItem("actionItems") === null) {
    actionItems = [];
  } else {
    actionItems = JSON.parse(localStorage.getItem("actionItems"));
  }
  actionItems.push(actionItem);
  localStorage.setItem("actionItems", JSON.stringify(actionItems));
}

function getActionItems() {
  let actionItems;
  if (localStorage.getItem("actionItems") === null) {
    actionItems = [];
  } else {
    actionItems = JSON.parse(localStorage.getItem("actionItems"));
  }
  actionItems.forEach(function (actionItem) {
    const actionItemContainer = document.createElement("div");
    actionItemContainer.classList.add("actionItemContainer");

    const newActionItem = document.createElement("li");
    newActionItem.innerText = actionItem;
    newActionItem.classList.add("actionItem");
    actionItemContainer.appendChild(newActionItem);
    list.appendChild(actionItemContainer);

    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completeButton.classList.add("completeButton");
    actionItemContainer.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-minus"></i>';
    deleteButton.classList.add("deleteButton");
    actionItemContainer.appendChild(deleteButton);
    list.appendChild(actionItemContainer);
  });
}

function removeLocalActionItems(actionItem) {
  let actionItems;
  if (localStorage.getItem("actionItems") === null) {
    actionItems = [];
  } else {
    actionItems = JSON.parse(localStorage.getItem("actionItems"));
  }
  const actionItemIndex = actionItem.children[0].innerText;
  actionItems.splice(actionItems.indexOf(actionItemIndex), 1);
  localStorage.setItem("actionItems", JSON.stringify(actionItems));
}
