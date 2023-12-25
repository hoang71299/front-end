class Task {
    constructor(id, taskName) {
        this.id = id;
        this.taskName = taskName
        this.status = "processing"
    }
}
class TaskManager {
    static taskList = [];
    static addTask(task) {
        this.taskList.push(task)
    }
    static getTask() {
        return this.taskList
    }
    static lastId() {
        let lastid = 0
        for (const task of this.taskList) {
            if (task.id > lastid) {
                lastid = task.id
            }
        }
        return lastid
    }
    static getDone(taskDone) {
        this.taskList.map((task) => {
            if (task.id == taskDone) {
                task.status = "Done"
            }
            return task;
        })
    }
    static deleteTask(taskedelete) {
        this.taskList = this.taskList.filter((task) => task.id != taskedelete)
    }

}

TaskManager.addTask(new Task(1, "hoàng"));
TaskManager.addTask(new Task(2, "nhật"));

console.log(TaskManager.getTask());
function renderTask() {
    let htmls = TaskManager.getTask().map(function (task) {
        return `  <tr>
                <td>${task.id}</td>
                <td>${task.taskName}</td>
                <td>${task.status}</td>
                <td>
                    <button onclick="changeStatus(${task.id})" class="${task.status == "processing" ? "btn btn-outline-success btn-sm" : "btn btn-outline-success btn-sm d-none "} ">Make done</button>
                    <button class="btn btn-outline-danger btn-sm" onclick="deleteTask(${task.id})">remove</button>
    
            </tr > `
    })
    document.getElementById("tbody").innerHTML = htmls.join('')
}
function handleTask(e) {
    e.preventDefault();

    let input = document.getElementById("input1").value
    let lastId = TaskManager.lastId()
    let task = new Task(lastId + 1, input)
    TaskManager.addTask(task);
    renderTask()
    reset()

}
function changeStatus(taskId) {
    let confirm = window.confirm("ban co muon done");
    if (confirm) {
        TaskManager.getDone(taskId);
        renderTask()
    }

}
function deleteTask(task) {
    let confirm = window.confirm("ban co muon xoa");
    if (confirm) {
        TaskManager.deleteTask(task)
        renderTask()
    }
}
function reset() {
    document.getElementById("input1").value = null
}
renderTask()
