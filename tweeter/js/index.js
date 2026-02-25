$(document).ready(function () {

  const MAX_LENGTH = 160;

  const $tweetInput = $(".tweet-input");
  const $tweetButton = $(".tweet-button");
  const $characterLimit = $("#character-limit");
  const $tweetText = $(".tweet-text");

  // Function: Validate input
  function validateTweet() {
    const textLength = $tweetInput.val().trim().length;

    if (textLength === 0) {
      // Empty → disabled, keep original color
      $tweetButton.prop("disabled", true);
      $tweetButton.css("background-color", "");
    } 
    else if (textLength > MAX_LENGTH) {
      // Over 160 → disabled + grey
      $tweetButton.prop("disabled", true);
      $tweetButton.css("background-color", "#cccccc");
    } 
    else {
      // Valid → enabled + blue
      $tweetButton.prop("disabled", false);
      $tweetButton.css("background-color", "#1da1f2");
    }
  }

  // Function: Update remaining characters
  function updateCharacterCount() {
    const remaining = MAX_LENGTH - $tweetInput.val().length;
    $characterLimit.text(remaining + " char remaining");

    if (remaining < 0) {
      $characterLimit.css("color", "red");
    } else {
      $characterLimit.css("color", "black");
    }
  }

  // When typing
  $tweetInput.on("input", function () {
    updateCharacterCount();
    validateTweet();
  });

  // When clicking Tweet
  $tweetButton.on("click", function () {
    const tweet = $tweetInput.val().trim();

    if (tweet.length > 0 && tweet.length <= MAX_LENGTH) {
      $tweetText.text(tweet);
      $tweetInput.val("");
      updateCharacterCount();
      validateTweet();
    }
  });

  // Initial state
  $tweetButton.prop("disabled", true);

});