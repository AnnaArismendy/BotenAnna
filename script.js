function mostrarReasonsWhyILoveYou() {
    var reasons = [
        "I love you for your amazing sense of humor.",
        "I love you for your strong confidence in every hard moment.",
        "I love you because of your patience and wisdom.",
        "I love you for your super interesting conversations and facts.",
        "I love you for your big and gentle heart full of kindness.",
        "I love how you make me feel loved everyday.",
        "I love you for your dedication and hard work in yourself and us.",
        "I love you because you are authentic.",
        "I love you for everything that we have been through."
        "I love you today and I always will, cause you are worth an entire life."
    ];

    var reasonContainer = document.getElementById("reason-text");

    const conversationContainer = document.getElementById("conversation");
const userInput = document.getElementById("user-input");
const botMessage = document.getElementById("bot-message");

// Saludo inicial del BotenAnna
botMessage.innerText = "¡Hola, Hej! I am Boten Anna. How can I help you today?";

// Respuestas predefinidas a algunas preguntas básicas
function respondToUserInput(userInput) {
  const userMessage = userInput.toLowerCase();
  let response = "";

  if (userMessage.includes("Hello, Hej") || userMessage.includes("greetings")) {
    response = "¡Hola! <3 ¿Cómo estás, querido Albin?";
  } else if (userMessage.includes("I'm okay") || userMessage.includes("Estoy bien")) {
    response = "I´m so glad you are okay. How can I help you today?";
  } else if (userMessage.includes("Who are you?")) {
    response = "My name is Boten Anna. But you can call me Mi Amor. Winkwink.";
  } else {
    response = "I´m sorry, I can´t understand you. Could you be more specific, please?";
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

