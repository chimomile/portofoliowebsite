// REALTIME CLOCK IN PRIMARY SECTION
window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    //get current date and time
    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + " " + ampm;

    //combine current date and time
    // const dateTime = date + " - " + time;
    // const dateTime = time;


    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = time;
    setTimeout(clock, 1000);
  }
});
// END REALTIME CLOCK IN PRIMARY SECTION
// SCROLL BUTTON
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// SCROLL BUTTON END

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form form");
  const emailInput = document.getElementById("email");
  const submitBtn = document.getElementById("form-btn");

  function validateEmail(email) {
    const techi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return techi.test(String(email).toLowerCase());
  }

  submitBtn.addEventListener("click", function() {
    swal({
  title: "Yeaayy!",
  text: "Your message was submitted successfully!",
  icon: "success",
  button: "awwww yeaayyy",
});
  })

  form.addEventListener("submit", function (event) {
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      event.preventDefault();
      swal({
  title: "Oops there's something wrong!",
  text: "Your email might be wrong!",
  icon: "warning",
  button: "try again",
});
    }
  });
});


// POP UP START
const authorSpan = document.getElementById("author");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

authorSpan.addEventListener("click", function () {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});
// POP UP END

// SUMMARY POPUP
const summaryidSpan = document.getElementById("summaryid");
const popup2 = document.getElementById("popup2");
const closeBtnPopup2 = document.getElementById("closeBtn2");

summaryidSpan.addEventListener("click", function () {
  popup2.style.display = "block";
});

closeBtnPopup2.addEventListener("click", function () {
  popup2.style.display = "none";
});
// SUMMARY POPUP END