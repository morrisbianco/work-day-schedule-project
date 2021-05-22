// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner DONE
// THEN the current day is displayed at the top of the calendar DONE
// WHEN I scroll down DONE
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd MMMM do"));

var saveBtn = document.querySelector(".saveBtn");
var plannerText = document.querySelector(".text");

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    plannerText.textcontent
})