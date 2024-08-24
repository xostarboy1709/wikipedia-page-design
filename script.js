// Function to generate a random text for the CAPTCHA
function generateCaptcha() {
    var possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaText = '';

    for (var i = 0; i < 6; i++) { // You can adjust the length of the CAPTCHA text
      var randomIndex = Math.floor(Math.random() * possibleChars.length);
      captchaText += possibleChars.charAt(randomIndex);
    }

    return captchaText;
  }

  // Function to render the CAPTCHA
  function renderCaptcha() {
    var captchaElement = document.getElementById('captcha');
    var captchaText = generateCaptcha();
    captchaElement.textContent = captchaText;
    captchaElement.dataset.answer = captchaText;
  }

  // Function to validate the user's input
  function validateCaptcha() {
    var userInput = document.getElementById('user-input').value;
    var captchaAnswer = document.getElementById('captcha').dataset.answer;

    if (userInput.toLowerCase() === captchaAnswer.toLowerCase()) {
      alert('CAPTCHA is correct!');
      renderCaptcha(); // Generate a new CAPTCHA after successful validation
    } else {
      alert('CAPTCHA is incorrect. Please try again.');
      // Optionally, you can choose to clear the input field or take other actions.
    }
  }

  // Initial rendering of the CAPTCHA
  renderCaptcha();
