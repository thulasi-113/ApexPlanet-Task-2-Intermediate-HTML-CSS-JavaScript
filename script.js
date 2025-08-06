function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("contactForm").reset();

  const msg = document.getElementById("successMessage");
  msg.textContent = "Your message has been sent!";

  setTimeout(() => {
    msg.textContent = "";
  }, 4000);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") return;

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();
  li.appendChild(delBtn);

  ul.appendChild(li);
  input.value = "";
}
