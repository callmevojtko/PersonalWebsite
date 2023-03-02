// Select all the navigation links
const navLinks = document.querySelectorAll('.navbar a');

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
const learnMoreButton = document.querySelector('.home-text a');
const aboutSection = document.querySelector('#about');

learnMoreButton.addEventListener('click', event => {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

  // Get all job info sections
  const jobInfoSections = document.querySelectorAll('.job-info');

  // Loop through each company link and add a click event listener
  const companyLinks = document.querySelectorAll('.card-link');
  companyLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default behavior of anchor links
      event.preventDefault();

      // Get the data-company attribute value of the clicked link
      const company = link.getAttribute('data-company');

      // Hide all job info sections
      jobInfoSections.forEach(section => {
        section.style.display = 'none';
      });

      // Show the job info section that corresponds to the clicked link
      const jobInfoSection = document.querySelector(`.job-info[data-company="${company}"]`);
      jobInfoSection.style.display = 'block';
    });
  });