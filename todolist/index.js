let tasks = [
    {
        id: 1,
        description: "learn Html",
        completed: false
    },
]

const taskslistElement = document.getElementById("tasks");       
const newTaskInput = document.getElementById("mytask");  
renderAllTask();  
function renderTaskItem(item, listElement) {

    if (!listElement) {
        console.error("this list Element does not exits");
        return false;

    }
    else if (!item) {
        console.error("is this item exists");
        return false;
    }

    let newItemElement = document.createElement("li");
    newItemElement.id = `task-${item.id}`;
    newItemElement.innerHTML = ` 
    <input type="checkbox"> ${item.description} `;

    listElement.appendChild(newItemElement);



}



function clearTaskList(listElement) {
    if (!listElement) {
        console.error("this list Element does not exits");
        return false;

    }

    listElement.innerHTML = "";
}






function removeTaskById(taskId, listElement) {
    if (!listElement) {
        console.error("is this listElement exists");
        return false;
    }

    const taskElement = document.getElementById(`task-${taskId}`);

    if (!taskElement) {
        console.error("is this taskElement exists");
        return false;
    }

    listElement.removeChild(taskElement);

}

function handleKeyPress(event) {

    if (event.key === "Enter") {
        const inputValue = event.target.value.trim();

        if (!inputValue) {

            console.error("value is required");
            return;
        }

        tasks.push({
            id: tasks.length,
            description: inputValue,
            completed: false

        })
        clearTaskList(taskslistElement);
        renderAllTask();





    }



}

newTaskInput.addEventListener("keypress", handleKeyPress);

function renderAllTask() {
    tasks.forEach((task) => {

        renderTaskItem(task, taskslistElement);


    })

}




