const countElement = document.getElementById("visitor-count");

fetch("https://takkiwnooc.execute-api.us-east-1.amazonaws.com/prod/visit")
  .then(response => response.json())
  .then(data => {
    countElement.textContent = data.count;
  })
  .catch(error => {
    console.error("Error loading count:", error);
    countElement.textContent = "Error loading count";
  });