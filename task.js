// Simulando tareas completadas
const completedTasks = [
  {
      title: "Tarea 1: Finalizada",
      description: "Descripción: Esta es la primera tarea finalizada.",
      date: "18 de octubre de 2024"
  },
  {
      title: "Tarea 2: Finalizada",
      description: "Descripción: Esta es la segunda tarea finalizada.",
      date: "17 de octubre de 2024"
  },
  {
      title: "Tarea 3: Finalizada",
      description: "Descripción: Esta es la tercera tarea finalizada.",
      date: "25 de noviembre de 2024"
  },
  {
      title: "Tarea 4: Finalizada",
      description: "Descripción: Esta es la cuarta tarea finalizada.",
      date: "17 de agosto de 2024"
  },
  {
      title: "Tarea 5: Finalizada",
      description: "Descripción: Esta es la quinta tarea finalizada.",
      date: "1 de octubre de 2024"
  },
  {
    title: "Tarea 6: Finalizada",
    description: "Descripción: Esta es la quinta tarea finalizada.",
    date: "3 de octubre de 2024"
},
{
  title: "Tarea 7: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "9 de octubre de 2024"
},
{
  title: "Tarea 8: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "11 de octubre de 2024"
},
{
  title: "Tarea 9: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "115 de octubre de 2024"
},
{
  title: "Tarea 10: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "17 de octubre de 2024"
},
{
  title: "Tarea 11: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "18 de octubre de 2024"
},
{
  title: "Tarea 12: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "19 de octubre de 2024"
},
{
  title: "Tarea 13: Finalizada",
  description: "Descripción: Esta es la quinta tarea finalizada.",
  date: "10 de octubre de 2024"
},
];

// Función para renderizar las tareas en el HTML
function renderCompletedTasks(tasks) {
  const tasksContainer = document.getElementById("completed-tasks");

  tasks.forEach(task => {
      const taskElement = document.createElement("article");
      taskElement.classList.add("task");

      taskElement.innerHTML = `
          <input type="checkbox" class="delete-task">
          <h3>${task.title}</h3>
          <p>${task.description}</p>
          <p><strong>Fecha de finalización:</strong> ${task.date}</p>
      `;

      // Agregar evento al checkbox para eliminar la tarea
      const checkbox = taskElement.querySelector(".delete-task");
      checkbox.addEventListener("change", () => {
          if (checkbox.checked) {
              tasksContainer.removeChild(taskElement);
          }
      });

      tasksContainer.appendChild(taskElement);
  });
}

// Llamamos a la función con las tareas simuladas
renderCompletedTasks(completedTasks);
