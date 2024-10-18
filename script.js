// document
//   .getElementById("downloadForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.getElementById("email").value;

//     if (validateEmail(email)) {
//       sendDownloadRequest(email);
//     } else {
//       displayMessage("Please enter a valid email address.", "error");
//     }
//   });

// const validateEmail = (email) => {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// };

// const sendDownloadRequest = (email) => {
//   // Placeholder for email sending logic
//   displayMessage(
//     `The questionnaire and manual will be sent to ${email}`,
//     "success"
//   );
// };

// const displayMessage = (message, type) => {
//   const messageElement = document.getElementById("message");
//   messageElement.textContent = message;
//   messageElement.style.color = type === "success" ? "green" : "red";
// };



document.addEventListener('DOMContentLoaded', function() {
  const elements = document.getElementsByClassName('cite');
  Array.from(elements).forEach(element => {
    element.addEventListener('click', function(event) {
      // display message, showing the id of button clicked
      displayMessage(`Button clicked: ${event.target.id}`);
    });
  });
});

const displayMessage = (message) => {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
  messageElement.style.color = "green";
};



function openTab(event, sectionId) {
  // Hide all tab sections
  var tabSections = document.getElementsByClassName('tab-section');
  for (var i = 0; i < tabSections.length; i++) {
    tabSections[i].style.display = 'none';
  }

  // Remove active class from all tab buttons
  var tabButtons = document.getElementsByClassName('tab-button');
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove('active');
  }

  // Show the selected tab section
  document.getElementById(sectionId).style.display = 'block';

  // Add active class to the clicked tab button
  event.currentTarget.classList.add('active');
}

// Initialize the first tab as active
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('section1').style.display = 'block';
});