// Smooth scroll Nav
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Hides Navbar when click in mobile menu
const navbarCollapse = document.querySelector('.navbar-collapse');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992) {
      navbarCollapse.classList.remove('show');
    }
  });
});

// Learn More button scrolls to the About section
const learnMoreButton = document.querySelector('.home-text a');
const aboutSection = document.querySelector('.about');

learnMoreButton.addEventListener('click', event => {
    event.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});


// Inserts a back button after the <br> element
const companyLinks = document.querySelectorAll('.company-link');
const companyList = document.querySelector('.company-list');
const jobInfos = document.querySelectorAll('.job-info');

companyLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // Get the target company from the link's data attribute
    const targetCompany = link.dataset.company;

    // Hide the company list
    companyList.style.display = 'none';

    // Show the job info for the selected company
    jobInfos.forEach(info => {
      if (info.dataset.company === targetCompany) {
        info.style.display = 'block';

        // Add a back button to allow the user to return to the company list
        const backButton = document.createElement('button');
        backButton.classList.add('back-button');
        backButton.innerHTML = 'Back';
        backButton.addEventListener('click', () => {
          companyList.style.display = 'block';
          info.style.display = 'none';
          backButton.remove();
        });

        // Insert the back button after the <br> element
        const br = info.querySelector('ul');
        if (br) {
          br.insertAdjacentElement('afterend', backButton);
        } else {
          info.appendChild(backButton);
        }
      };
    });
  });
});

