// GIVEN I am using a daily planner to create a schedule DONE
// WHEN I open the planner DONE
// THEN the current day is displayed at the top of the calendar DONE
// WHEN I scroll down DONE
// THEN I am presented with timeblocks for standard business hours DONE
// WHEN I view the timeblocks for that day DONE
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future DONE
// WHEN I click into a timeblock DONE
// THEN I can enter an event DONE
// WHEN I click the save button for that timeblock DONE
// THEN the text for that event is saved in local storage DONE
// WHEN I refresh the page
// THEN the saved events persist
var currentHour = moment().format("H");
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM do"));

var container = document.querySelector(".container");
var plannerText = document.querySelector("plannerText");
// var studentGrades = JSON.parse(localStorage.getItem("studentGrades")) || [];
var todos = JSON.parse(localStorage.getItem("todos"));

function saveTodo() {
    var todo = document.querySelector(".plannerText").value;

    localStorage.setItem("todos", JSON.stringify(todo));
}

container.addEventListener("click", function (event) {
    event.preventDefault();
    var btn = event.target;
    if (btn.matches("button")) {
        saveTodo();
        renderTodo();
    }

})

function renderTodo() {
    // console.log(JSON.parse(localStorage.getItem("todos")));
}


function checkTime() {
    for (var i = 9; i <= 17; i++) {
        $(`.time${i}`)

        if (i === currentHour) {
            $(`.time${i}`).css({ 'background-color': '#ff6961', 'color': 'white' });
        } else if (i < currentHour) {
            $(`.time${i}`).css({ 'background-color': '#d3d3d3', 'color': 'white' });
        } else {
            $(`.time${i}`).css({ 'background-color': '#77dd77', 'color': 'white' });
        }
        
    }

}

checkTime();