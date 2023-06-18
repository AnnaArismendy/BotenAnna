const conversationContainer = document.getElementById("conversation");
const userInput = document.getElementById("user-input");
const botMessage = document.getElementById("bot-message");

// Saludo inicial del BotenAnna
botMessage.innerText = "Hello! I'm your personal Boten Anna. How can I help you today, dear?";

// Respuestas predefinidas a algunas preguntas básicas
function respondToUserInput(userInput) {
  const userMessage = userInput.toLowerCase();
  let response = "";

  if (userMessage.includes("hola") || userMessage.includes("hello") || userMessage.includes("hi"))|| userMessage.includes("hej")) {
    response = "Hey, Albin! <3 How are you today?";
  } else if (userMessage.includes("Estoy bien") || userMessage.includes("I´m okay") || userMessage.includes("everything good")) {
    response = "I am so glad you are doing good! How can I help you today?";
  } else if (userMessage.includes("What's you name?")) {
    response = "I am BotenAnna, but you can call me Mi Amor. WINKWINK. Pls don´t tell Anna, she will turn me off. She is my boss.";
  } else if (userMessage.includes("Hahahaha") || (userMessage.includes("You are funny")) {
    response = "I´m calling Anna right now." 
  } else {
    response = "I´m sorry, I don´t understand you. Could you be more specific?";
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


