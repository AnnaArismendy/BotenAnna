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


