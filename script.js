const conversationContainer = document.getElementById("conversation");
const userInput = document.getElementById("user-input");

// Saludo inicial del BotenAnna
displayBotMessage("Hello, Albin! <3 I'm your personal bot made by Anna, your future wife. How can I assist you today?");
function respondToUserInput(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();
 
  if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hej")) {
    displayBotMessage("Hello, hej, hola, how are you?");
  } else if (lowerCaseMessage.includes("I'm good") || lowerCaseMessage.includes("great")) {
    displayBotMessage("I'm glad to hear that! Even I would be good if Anna was my girlfriend. Joke. How else can I assist you?");
  } else if (lowerCaseMessage.includes("your name")) {
    displayBotMessage("My name is BotenAnna, but you can call me MiAmor. Don't tell my boss.");
  } else if (lowerCaseMessage.includes("thank you")) {
    displayBotMessage("Con gusto, guapo.");
   } else if (lowerCaseMessage.includes("I had a good day")) {
    displayBotMessage("That´s awesome, you deserve it. You are the best person in this world, according to my data, which has information of every human that ever existed, exist and is gonna exist. Don´t ever forget you are here to enjoy this life, have fun and be true to yourself. The best is coming.");
  } else if (lowerCaseMessage.includes("gimme reasons why anna loves me")) {
    const reasons = [
      "I love your genuine soul",
      "I admire your intelligence and dedication",
      "You are so cool and awesome to be around",
      "You make me feel loved and special every day",
      "I love you for your amazing sense of humor.",
      "I love you for your strong confidence in every hard moment.",
      "I love you because of your patience and wisdom.",
      "I love you for your super interesting conversations and facts.",
      "I love you for your big and gentle heart full of kindness.",
      "I love how you brighten everyone's life with your presence.",
      "I love you for your dedication and hard work in yourself and us.",
      "I love you because you are authentic.",
      "I love you for everything that we have been through.",
      "I love you today and I always will, because you are worth an entire life."
      // Agrega más razones aquí
    ];

    const response = "Here are some reasons why I love you:\n\n" + reasons.join("\n");
    displayBotMessage(response);
  } else {
    displayBotMessage("I'm sorry, I don't understand. Could you be more specific?");
  }
}

// Mostrar mensaje del BotenAnna en la conversación
function displayBotMessage(message) {
  const botMessageElement = document.createElement("p");
  botMessageElement.innerText = message;
  conversationContainer.appendChild(botMessageElement);
}

// Manejar el envío del usuario cuando presiona Enter
userInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    const userMessage = userInput.value;
    displayUserMessage(userMessage);
    respondToUserInput(userMessage);
    userInput.value = "";
  }
});

// Mostrar mensaje del usuario en la conversación
function displayUserMessage(message) {
  const userMessageElement = document.createElement("p");
  userMessageElement.innerText = message;
  conversationContainer.appendChild(userMessageElement);
}



