// Theme Switcher
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update checkbox state
    const checkbox = document.getElementById('theme-toggle');
    checkbox.checked = theme === 'dark';
}

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Theme toggle checkbox functionality
document.getElementById('theme-toggle').addEventListener('change', (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
});

// Contact Form Handler
function sendEmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Create email body
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:imrangogri@gmail.com?subject=Website Inquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form
    document.getElementById('contactForm').reset();
    
    return false;
}

// Modal functionality
function openModal(serviceType) {
    const modal = document.getElementById('modal');
    const modalSections = document.querySelectorAll('.modal-section');
    
    // Hide all sections first
    modalSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(`modal-${serviceType}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Show the modal
    modal.style.display = 'block';
    
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    
    // Re-enable scrolling on the body
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
