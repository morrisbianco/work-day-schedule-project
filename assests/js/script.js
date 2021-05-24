var buttons = document.querySelector(".container");
var currentHour = moment().format("H");
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do, YYYY"));

function init() {
    checkTime();
    renderTodoList();
};

function checkTime() {

    for (var i = 9; i <= 17; i++) {
        $(`.time${i}`)

        if (i === parseInt(currentHour)) {
            $(`.time${i}`).addClass("present");
        } else if (i < currentHour) {
            $(`.time${i}`).addClass("past");
        } else {
            $(`.time${i}`).addClass("future");
        }

    }

};

var todoList = JSON.parse(localStorage.getItem("todos")) || [];


buttons.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target
    
    if (element.matches(".saveBtn")) {
        var text = element.previousSibling.previousSibling.value;
        var id = element.previousSibling.previousSibling.attributes.index.value;
        
        todoList = todoList.concat([{todoText: text, todoId: id}]);

        localStorage.setItem("todos", JSON.stringify(todoList));

    }
});

function renderTodoList() {

    for (i = 0; i < todoList.length; i++) {
        $('textarea').eq(parseInt(todoList[i].todoId)).text(todoList[i].todoText);

    }

}

    
    init();