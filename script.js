// Visitor counter fetch
const countElement = document.getElementById("visitor-count");

fetch("https://takkiwnooc.execute-api.us-east-1.amazonaws.com/prod/visit")
  .then(response => response.json())
  .then(data => {
    countElement.textContent = `👀 Visitor Count: ${data.count}`;
  })
  .catch(error => {
    console.error("Error loading count:", error);
    countElement.textContent = "👀 Visitor Count: error";
  });

// Tab switching logic
function showTab(id) {
  // Hide all panels
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  // Deactivate all buttons
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  // Activate the clicked one
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}
