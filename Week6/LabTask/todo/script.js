const btnAdd = document.getElementById("push")

function addTask(){
    let text = document.getElementById("text")
    if(text.value == ""){
        alert("Task Field is empity")
    }else{
        const toDO = document.createElement("div")
        toDO.innerText  = text.value;
        const container = document.getElementById('tasks')
        container.appendChild(toDO)

    }
}

btnAdd.onclick = addTask