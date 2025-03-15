document.addEventListener("DOMContentLoaded", function () {
    updateTaskSummary();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");
    const completeButton = document.createElement("button");

    completeButton.textContent = "Complete";
    completeButton.onclick = function () { markCompleted(completeButton); };

    li.textContent = taskInput.value;
    li.appendChild(completeButton);
    li.classList.add("pending");

    taskList.appendChild(li);
    taskInput.value = "";

    updateTaskSummary();
}

function markCompleted(button) {
    if (!button.classList.contains("completed-button")) {
        button.classList.add("completed-button");
        button.style.backgroundColor = "green"; // Change button color to green
        button.textContent = "Completed"; 
    }
    updateTaskSummary();
}

function updateTaskSummary() {
    const completedCount = document.querySelectorAll(".completed-button").length;
    const pendingCount = document.querySelectorAll(".pending").length;

    document.getElementById("completedCount").textContent = completedCount;
    document.getElementById("pendingCount").textContent = pendingCount - completedCount;
}

function clearAllTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    updateTaskSummary();
}
