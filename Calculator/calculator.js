document.addEventListener('DOMContentLoaded', () => {
    // Get the result input element
    const resultElement = document.getElementById('result');
  
    // Get all the calculator buttons
    const buttons = document.querySelectorAll('#press');
  
    // Add click event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonText = button.textContent;
        handleButtonPress(buttonText);
      });
    });
  
    // Function to handle button press
    function handleButtonPress(buttonText) {
      if (buttonText === '=') {
        calculateResult();
      } else if (buttonText === 'C') {
        clearResult();
      } else {
        appendToResult(buttonText);
      }
    }
  
    // Function to append button text to the result
    function appendToResult(buttonText) {
      resultElement.value += buttonText;
    }
  
    // Function to clear the result
    function clearResult() {
      resultElement.value = '';
    }
  
    // Function to calculate the result
    function calculateResult() {
      try {
        const expression = resultElement.value;
        const result = eval(expression);
        resultElement.value = result;
      } catch (error) {
        resultElement.value = 'Error';
      }
    }
  });
  