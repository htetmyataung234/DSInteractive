function ExecuteScript(strId)
{
  switch (strId)
  {
      case "69HVPTnUwvn":
        Script1();
        break;
      case "6Fdz7ZO5JHm":
        Script2();
        break;
      case "6P2DAv7xTnI":
        Script3();
        break;
  }
}

function Script1()
{
  // 1. Get the player object
var player = GetPlayer();

// 2. Get the user's typed email address
var email = player.GetVar("Email");

// 3. Define the Regex (The Validator)
// This checks for: text + @ + text + . + text
var emailPattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 4. Test the email
var isItValid = emailPattern.test(email);

// 5. Send the result (True or False) back to Storyline
player.SetVar("EmailIsValid", isItValid);
}

function Script2()
{
  // 1. Get the player object
var player = GetPlayer();

// 2. Get the user's typed email address
var email = player.GetVar("Email");

// 3. Define the Regex (The Validator)
// This checks for: text + @ + text + . + text
var emailPattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 4. Test the email
var isItValid = emailPattern.test(email);

// 5. Send the result (True or False) back to Storyline
player.SetVar("EmailIsValid", isItValid);
}

function Script3()
{
  // 1. Get the player object
var player = GetPlayer();

// 2. Get the user's typed email address
var email = player.GetVar("Email");

// 3. Define the Regex (The Validator)
// This checks for: text + @ + text + . + text
var emailPattern = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 4. Test the email
var isItValid = emailPattern.test(email);

// 5. Send the result (True or False) back to Storyline
player.SetVar("EmailIsValid", isItValid);
}

