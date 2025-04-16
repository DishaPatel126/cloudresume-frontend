const countElement = document.getElementById("visitor-count");

// This URL will be replaced after API Gateway + Lambda setup
fetch("https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/visit")
  .then(response => response.json())
  .then(data => {
    countElement.textContent = data.count;
  })
  .catch(error => {
    countElement.textContent = "Error loading count";
    console.error("API error:", error);
  });
