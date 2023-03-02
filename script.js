// Select all the navigation links
const navLinks = document.querySelectorAll('.navbar-nav a');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Learn more button scrolls to the about section
const learnMoreButton = document.querySelector('.btn-primary');
const aboutSection = document.querySelector('.about');

learnMoreButton.addEventListener('click', event => {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// Select all company links
const companyLinks = document.querySelectorAll('.company-link');

// Loop through each company link and add a click event listener
companyLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior of anchor links
    event.preventDefault();

    // Get the data-company attribute value of the clicked link
    const company = link.getAttribute('data-company');

    // Hide the company box and show the job info section that corresponds to the clicked link
    document.querySelector('.company-list').style.display = 'none';
    document.querySelector(`.job-info[data-company="${company}"]`).style.display = 'block';

    // Create a back button and append it to the job info section
    const backButton = document.createElement('button');
    backButton.classList.add('back-button');
    backButton.textContent = 'Back';
    document.querySelector(`.job-info[data-company="${company}"]`).appendChild(backButton);

    // Add a click event listener to the back button
    backButton.addEventListener('click', function(event) {
      // Hide the job info section and show the company box
      document.querySelector(`.job-info[data-company="${company}"]`).style.display = 'none';
      document.querySelector('.company-list').style.display = 'block';

      // Remove the back button from the job info section
      backButton.parentNode.removeChild(backButton);
    });
  });
});
