document.querySelector("#push").addEventListener('click', function(){
  if (document.querySelector("#newtask input").value.length <= 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task" draggable="true">
        <span id="taskname">
          ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;


    // Delete task not needed
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].addEventListener('click', function(){
        this.parentNode.remove();
      })

    };

    // Change Background Color when clicked
    let newTask = document.querySelectorAll(".task")
    for (let a = 0; a < newTask.length; a++){
      newTask[a].addEventListener('click', function(){
        newTask[a].style.backgroundColor = '#8052ec'
        newTask[a].style.borderRadius = '5px'
      })
    };

    
    
    // // Stroke line when task is completed
    // var tasks = document.querySelectorAll(".task");
    // for (let i = 0; i < tasks.length; i++) {
    //   tasks[i].addEventListener('click', function(){
    //     this.classList.toggle("completed");
    //   })
    // }

    // Makes input field empty after task as been called
    document.querySelector("#newtask input").value = "";
  }
});

