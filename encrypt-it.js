/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Runs once the page has loaded. Sets up the event handlers
   * for the buttons on the page.
   */
  function init() {
    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
    /**
   * Logs a test message when the "Encrypt It!" button is clicked.
   */
  function handleEncrypt() {
    console.log("Encrypt button clicked!");

    let inputText = document.getElementById("input-text").value;
    let cipherText = shiftCipher(inputText);
    document.getElementById("result").textContent = cipherText;
  }

  /**
   * Clears the input textarea.
   */
  function handleReset() {
    let input = document.getElementById("input-text");
    // .value is what the user typed. innerHTML only sets the textarea's
    // starting text, so it won't clear anything once the user has typed.
    input.value = "";
    input.innerHTML = "";
  }

})();
