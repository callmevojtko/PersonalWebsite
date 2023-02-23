// Select all the navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the target section from the link's href attribute
        const targetId = link.getAttribute('href');
        console.log('Target ID:', targetId);

        // Scroll to the target section using smooth scrolling
        const targetElement = document.querySelector(targetId);
        console.log('Target element:', targetElement);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get all company links
const companyLinks = document.querySelectorAll('.company-link');

// Add a click event listener to each company link
companyLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the target company from the link's data attribute
        const targetCompany = link.dataset.company;

        // Hide the company list
        const companyList = document.querySelector('.company-list');
        companyList.style.display = 'none';

        // Show the job info for the selected company
        const jobInfo = document.querySelector(`.job-info[data-company="${targetCompany}"]`);
        jobInfo.style.display = 'block';

        // Add a back button to allow the user to return to the company list
        const backButton = document.createElement('button');
        backButton.innerHTML = 'Back';
        backButton.addEventListener('click', () => {
            companyList.style.display = 'block';
            jobInfo.style.display = 'none';
            backButton.remove();
        });
        jobInfo.appendChild(backButton);
    });
});
