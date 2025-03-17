document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit",(event) => {
    
    if (formInput.value.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.textContent = formInput.value;
      taskList.append(newTask);

      formInput.value = "";
    }
  });
});

