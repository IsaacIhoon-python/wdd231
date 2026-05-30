// Set timestamp
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Modal functionality
const infoLinks = document.querySelectorAll('.info-link');
const modals = document.querySelectorAll('dialog');
const closeButtons = document.querySelectorAll('.close-modal');

infoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('dialog').close();
    });
});

// Close modal on backdrop click
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
});