/*
 * Encrypt-It!
 * Takes a message from the textarea and outputs an encrypted version
 * using a shift cipher. The Reset button clears the input and result.
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
   * Runs once the page has loaded. Sets up the click handlers
   * for the "Encrypt It!" and "Reset" buttons.
   */
  function init() {
    console.log("Window loaded!");

    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Gets the text from the input textarea, encrypts it with a
   * shift cipher, and shows the result in the #result paragraph.
   */
  function handleEncrypt() {
    console.log("Button clicked!");

    let inputText = document.getElementById("input-text").value;
    let cipherText = shiftCipher(inputText);
    document.getElementById("result").textContent = cipherText;
  }

  /**
   * Clears the input textarea and the result paragraph.
   */
  function handleReset() {
    let input = document.getElementById("input-text");
    // .value is what the user typed. innerHTML only sets the textarea's
    // starting text, so it won't clear anything once the user has typed.
    input.value = "";
    input.innerHTML = "";
    document.getElementById("result").textContent = "";
  }

  /**
   * Returns an encrypted version of the given text, where each letter
   * is shifted alphabetically ahead by 1 letter, and 'z' wraps around
   * to 'a'. Upper and lowercase letters are treated the same, and the
   * result is all lowercase. Non-letters are left unchanged.
   * @param {string} text - the message to encrypt
   * @returns {string} the encrypted message
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    let aCode = "a".charCodeAt(0); // 97

    for (let i = 0; i < text.length; i++) {
      let ch = text[i];
      if (ch < "a" || ch > "z") {
        // not a letter (space, number, punctuation), keep it as is
        result += ch;
      } else {
        // turn the letter into 0-25, add 1, wrap with % 26, turn back into a letter
        let position = text.charCodeAt(i) - aCode;
        let newPosition = (position + 1) % 26;
        result += String.fromCharCode(newPosition + aCode);
      }
    }
    return result;
  }

})();