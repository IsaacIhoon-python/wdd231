const resultsDiv = document.querySelector('#form-results');
const params = new URLSearchParams(window.location.search);

if (params.toString()) {
  const data = {
    name: params.get('name'),
    email: params.get('email'),
    category: params.get('category'),
    location: params.get('location'),
    price: params.get('price'),
    reason: params.get('reason'),
    timestamp: params.get('timestamp')
  };

  resultsDiv.innerHTML = `
    <h3>Submission Details</h3>
    <p><strong>Restaurant:</strong> ${data.name}</p>
    <p><strong>Category:</strong> ${data.category}</p>
    <p><strong>Location:</strong> ${data.location}</p>
    <p><strong>Price Range:</strong> ${data.price}</p>
    <p><strong>Your Email:</strong> ${data.email || 'Not provided'}</p>
    <p><strong>Reason:</strong> ${data.reason || 'Not provided'}</p>
    <p><strong>Submitted:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
  `;
  
  // localStorage requirement
  const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
  suggestions.push(data);
  localStorage.setItem('suggestions', JSON.stringify(suggestions));
  
} else {
  resultsDiv.innerHTML = '<p class="error">No form data found. Please submit the form first.</p>';
}