const btnAdd = document.getElementById("push")

const count = 0

function addTask(){
    
    let text = document.getElementById("text")
    if(text.value == ""){
        alert("Task Field is empity")
    }else{
        const toDO = document.createElement("div")
        const removeBtn = document.createElement("button")
        removeBtn.textContent = 'Delete';
        
        document.body.appendChild(removeBtn);
        toDO.innerText  = text.value;
        const container = document.getElementById('tasks')
        container.appendChild(toDO)
    
        removeBtn.addEventListener("click", function() {
            container.removeChild(toDO)
        })

    }

}

btnAdd.onclick = addTask