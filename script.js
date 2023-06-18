function ReasonsWhyILoveYou() {
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
botMessage.innerText = "¡Hola! Soy tu BotenAnna. ¿En qué puedo ayudarte hoy?";

// Respuestas predefinidas a algunas preguntas básicas
function respondToUserInput(userInput) {
  const userMessage = userInput.toLowerCase();
  let response = "";

  if (userMessage.includes("hola") || userMessage.includes("saludos")) {
    response = "¡Hola! ¿Cómo estás?";
  } else if (userMessage.includes("bien") || userMessage.includes("genial")) {
    response = "Me alegra escuchar eso. ¿En qué más puedo ayudarte?";
  } else if (userMessage.includes("nombre")) {
    response = "Mi nombre es BotenAnna, pero puedes llamarme como quieras.";
  } else {
    response = "Lo siento, no entiendo. ¿Podrías ser más específico/a?";
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


