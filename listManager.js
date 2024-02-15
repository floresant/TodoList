const newTask = (input) => {
  if (input == "") {
    alert("Please input a task to be completed.")
  }
  else {
    const listItem = document.createElement("div");
    const eraseButton = document.createElement("button");
    const buttonText = document.createTextNode("Delete");
    const editButton = document.createElement("button");
    const editText = document.createTextNode("Edit");
    const p = document.createElement("p");
    let task = document.createTextNode(input);

    p.appendChild(task);
    eraseButton.appendChild(buttonText);

    editButton.appendChild(editText);

    listItem.appendChild(p);
    listItem.appendChild(editButton);
    listItem.appendChild(eraseButton);
    listItem.addEventListener("click", manage);
    listItem.className = "task";

    const taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);
    
    document.getElementById('input').value = "";
  }
}

const inputKey = (event) => {
  if (event.key == "Enter") {
    newTask(event.target.value);
  }
}


const manage = (event) => {
  const clicked = event.target;
  if (clicked.textContent == "Delete") {
    clicked.parentElement.remove();
  }
  else if (clicked.textContent == "Edit" || clicked.textContent == "Done") {
    let parent = clicked.parentElement;
    let element = parent.firstChild.tagName;
    if (element == "P") {
      clicked.textContent = "Done";
      let para = parent.firstChild.textContent;
      let input = document.createElement("input");
      input.value = para;
      input.addEventListener("keypress", changeTask)
      parent.firstChild.replaceWith(input);
    }
    else if (element == "INPUT") {
      clicked.textContent = "Edit";
      let text = document.createTextNode(parent.firstChild.value);
      let para = document.createElement("p");
      para.appendChild(text);
      parent.firstChild.replaceWith(para);
    }
  }
  else if (clicked.tagName == "P") {
    let task = event.currentTarget.firstChild;
    task.classList.toggle("taskComplete");
  }

}

const changeTask = (event) => {
  if (event.key == "Enter") {
    if (event.target.value == "") {
      alert("Please input a task to be completed.")
    }
    else {
      let parent = event.target.parentElement;
      let button = parent.getElementsByTagName("button")[0];
      button.textContent = "Edit";
      let text = event.target.value;
      let para = document.createElement("p");
      let newTask = document.createTextNode(text);
      para.appendChild(newTask);
      event.target.replaceWith(para);
    }
  }
}

const deleteAll = (list) => {
  let len = list.length;

  for (let i = 0; i < len; i++)
  {
    document.getElementById('taskList').removeChild(list[0]);
  }
}