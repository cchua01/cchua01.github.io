// controller.js

// Function: Load content dynamically
function loadContent(page) {
    console.log(`Loading content for page: ${page}`);
    
    const contentArea = document.querySelector('#content'); // Ensure contentArea is selected correctly
    const loadingSpinner = document.getElementById('loading-spinner'); // Ensure loadingSpinner is selected correctly
    
    if (!contentArea) {
        console.error('Content area not found!');
        return;
    }

    if (!loadingSpinner) {
        console.error('Loading spinner not found!');
        return;
    }

    // Show loading spinner and hide content area
    loadingSpinner.style.display = 'block';
    contentArea.style.display = 'none';

    switch(page) {
        case 'about':
            // Load "About Me" content
            setTimeout(() => { // Simulated delay for loading
                const aboutMe = getAboutMeData();
                if (!aboutMe) {
                    console.error('About Me data not found!');
                    return;
                }
                contentArea.innerHTML = `
                    <div class="about-container">
                        <!-- Avatar Section -->
                        <div class="avatar-section">
                            <img src="${aboutMe.avatar}" alt="Avatar" class="avatar-image">
                        </div>

                        <!-- Introduction Section -->
                        <div class="section">
                            <h2>Introduction</h2>
                            <p>${aboutMe.introduction}</p>
                        </div>

                        <!-- Education Section -->
                        <div class="section">
                            <h2>Education</h2>
                            <p>${aboutMe.education}</p>
                        </div>

                        <!-- Motivation Section -->
                        <div class="section">
                            <h2>Motivation</h2>
                            <p>${aboutMe.motivation.replace(/\n/g, '<br><br>')}</p>
                        </div>

                        <!-- Hobbies Section -->
                        <div class="section">
                            <h2>Hobbies</h2>
                            <p>${aboutMe.hobbies.join(', ')}</p>
                        </div>

                        <!-- Contact Section -->
                        <div class="section">
                            <h2>Contact Me</h2>
                            <div class="social-icons">
                                ${aboutMe.contact.map(contact => `
                                    <a href="${contact.link}" target="_blank" class="social-link">
                                        <i class="${contact.name.toLowerCase() === 'email' ? 'fas fa-envelope' : 'fab fa-' + contact.name.toLowerCase()}"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Acknowledgement Section -->
                        <div class="section">
                            <h2>Acknowledgement</h2>
                            <p>${aboutMe.acknowledgement}</p>
                        </div>
                    </div>
                `;
                // Hide loading spinner and show content area
                loadingSpinner.style.display = 'none';
                contentArea.style.display = 'block';
            }, 1000); // Simulated delay for loading
            break;

        case 'blog':
            // Load blog content
            setTimeout(() => { // Simulated delay for loading
                const blogs = getBlogPosts();
                contentArea.innerHTML = '<h1>Blog</h1>';
                blogs.forEach(post => {
                    contentArea.innerHTML += `
                        <div class="blog-post">
                            <h2>${post.title}</h2>
                            <p>${post.content}</p>
                        </div>`;
                });
                // Hide loading spinner and show content area
                loadingSpinner.style.display = 'none';
                contentArea.style.display = 'block';
            }, 1000); // Simulated delay for loading
            break;

        case 'gallery':
            // Load gallery content
            setTimeout(() => {
                const photos = getGalleryPhotos();
                contentArea.innerHTML = '<h1>Gallery</h1><div class="gallery-grid">';
                photos.forEach(photo => {
                    contentArea.innerHTML += `
                        <div class="gallery-item">
                            <img src="${photo.src}" alt="${photo.caption}" class="gallery-photo" onload="hideLoadingSpinner()">
                            <p>${photo.caption}</p>
                        </div>`;
                });
                contentArea.innerHTML += '</div>';
                // Hide loading spinner and show content area
                loadingSpinner.style.display = 'none';
                contentArea.style.display = 'block';
            }, 1000); // Simulated delay for loading
            break;

        case 'projects':
            // Load projects content
            setTimeout(() => { // Simulated delay for loading
                const projectList = getProjects();
                contentArea.innerHTML = '<h1>Projects</h1>';
                projectList.forEach(project => {
                    contentArea.innerHTML += `
                        <div class="project-item">
                            <h2>${project.title}</h2>
                            <p>${project.description}</p>
                        </div>`;
                });
                // Hide loading spinner and show content area
                loadingSpinner.style.display = 'none';
                contentArea.style.display = 'block';
            }, 1000); // Simulated delay for loading
            break;

        default:
            // Load default content
            contentArea.innerHTML = '<h1>Welcome!</h1>';
            loadingSpinner.style.display = 'none';
            contentArea.style.display = 'block';
    }
}

// Event listener for navigation
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const page = event.target.getAttribute('data-page'); // Use data-page attribute
        loadContent(page);
    });
});


