// Get the chat input element
const chatInput = document.querySelector('.chat-input');

// Listen for changes to the chat input element
chatInput.addEventListener('input', () => {
  // Get the current value of the chat input element
  const chatInputValue = chatInput.value;

  // Check if the input value matches an email address pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmail = emailPattern.test(chatInputValue);

  // If the input value is an email address, show an error message
  if (isEmail) {
    alert('Invalid input: please do not enter email addresses in ChatGPT prompts.');
  }
});
