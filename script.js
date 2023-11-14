function transformToSunflower() {
  const circle = document.getElementById('circle');
  const sunflower = document.getElementById('sunflower');

  // Hide the circle and show the sunflower
  circle.style.display = 'none';
  sunflower.style.display = 'block';
}

function displayMessage() {
  const messageContainer = document.getElementById('message-container');

  // Show the message container
  messageContainer.style.display = 'block';
}
