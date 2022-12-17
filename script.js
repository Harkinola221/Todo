document.querySelector("#push").addEventListener('click', function(){
  if (document.querySelector("#newtask input").value.length <= 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task id="draggable">
        <span id="taskname">
          ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;

    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].addEventListener('click', function(){
        this.parentNode.remove();
      })

      let dragged = document.querySelectorAll('.newtask')
      for(let i = 0; i < dragged.length; i++){
        dragged[i].addEventListener('dragStart', function(){
          const dragged = this;
        })
      }
    }
    var tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].addEventListener('click', function(){
        this.classList.toggle("completed");
      })
    }

    document.querySelector("#newtask input").value = "";
  }
});

