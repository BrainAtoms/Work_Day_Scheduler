// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const onSaveClick = (event) => {
  const clickedTime = event.currentTarget.id;
  // console.log('clickedTime')
  // console.log(clickedTime)
  const idOfTextArea = "text-area" + clickedTime;
  // console.log(idOfTextArea)
  const hourText = document.getElementById(idOfTextArea);
  // console.log('hourText.value')
  // console.log(hourText.value)
  // console.log(event.currentTarget.id);
  localStorage.setItem(clickedTime, hourText.value);
  // window.localStorage.clear();
};

$(function () {
  currentDay = dayjs();

  $("#currentDay").text(currentDay.format("dddd MMM D, YYYY"));
  checkStorage();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function checkStorage() {
  const timeArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
  for (i = 0; i < timeArray.length; i++) {
    const currentKey = `text-area${timeArray[i]}`;
    const value = localStorage.getItem(timeArray[i]);
    console.log(currentKey);
    console.log(value);
    document.getElementById(currentKey).value = value;

  }
}


