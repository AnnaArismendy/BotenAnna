const conversationContainer = document.getElementById("conversation");
const userInput = document.getElementById("user-input");
const botMessage = document.getElementById("bot-message");

// Saludo inicial del BotenAnna
botMessage.innerText = "Hello, Albin! <3 I'm your personal bot made by Anna, your wife. How can I assist you today?";

// Respuestas predefinidas a algunas preguntas básicas
function respondToUserInput(userInput) {
  const userMessage = userInput.toLowerCase();
  let response = "";

  if (userMessage.includes("hello") || userMessage.includes("hej")) {
    response = "Hello, hej, hola, how are you?";
  } else if (userMessage.includes("i'm good") || userMessage.includes("great")) {
    response = "I'm glad to hear that! Even I would be good if Anna was my girlfriend. Joke. How else can I assist you?";
  } else if (userMessage.includes("what is your name")) {
    response = "My name is BotenAnna, but you can call me MiAmor. Don't tell my boss.";
  } else if (userMessage.includes("gimme reasons why Anna loves me")) {
    const reasons = [
      "I love your genuine soul",
      "I admire your intelligence and dedication",
      "You are so cool and awesome to be around",
      "You make me feel loved and special everyday",
      "I love you for your amazing sense of humor.",
      "I love you for your strong confidence in every hard moment.",
      "I love you because of your patience and wisdom.",
      "I love you for your super interesting conversations and facts.",
      "I love you for your big and gentle heart full of kindness.",
      "I love how you brighten everyone's life with your presence.",
      "I love you for your dedication and hard work in yourself and us.",
      "I love you because you are authentic.",
      "I love you for everything that we have been through.",
      "I love you today and I always will, 'cause you are worth an entire life."
      // Agrega más razones aquí
    ];

    response = "Here are some reasons why I love you:\n\n";
    response += reasons.join("\n");
  } else {
    response = "I'm sorry, I don't understand. Could you be more specific?";
  }

  displayBotMessage(response);
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
