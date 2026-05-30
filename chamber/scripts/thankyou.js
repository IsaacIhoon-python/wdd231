// Get URL parameters and display them
const urlParams = new URLSearchParams(window.location.search);
const formData = document.getElementById('form-data');

const membershipNames = {
    'member': 'Member',
    'bronze': 'Bronze Membership',
    'silver': 'Silver Membership',
    'gold': 'Gold Membership'
};

const timestamp = urlParams.get('timestamp');
const formattedDate = timestamp ? new Date(timestamp).toLocaleString() : 'N/A';

formData.innerHTML = `
    <p><strong>First Name:</strong> ${urlParams.get('fname') || 'N/A'}</p>
    <p><strong>Last Name:</strong> ${urlParams.get('lname') || 'N/A'}</p>
    <p><strong>Email:</strong> ${urlParams.get('email') || 'N/A'}</p>
    <p><strong>Mobile Phone:</strong> ${urlParams.get('phone') || 'N/A'}</p>
    <p><strong>Business Name:</strong> ${urlParams.get('organization') || 'N/A'}</p>
    <p><strong>Membership Level:</strong> ${membershipNames[urlParams.get('membership')] || 'N/A'}</p>
    <p><strong>Application Date:</strong> ${formattedDate}</p>
`;