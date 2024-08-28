// controller.js

// Function: Load content dynamically
function loadContent(page) {
    console.log(`Loading content for page: ${page}`);
    const contentArea = document.querySelector('#content'); // Ensure contentArea is selected correctly
    if (!contentArea) {
        console.error('Content area not found!');
        return;
    }

    switch(page) {
        case 'about':
            // Load "About Me" content
            const aboutMe = getAboutMeData();
            if (!aboutMe) {
                console.error('About Me data not found!');
                return;
            }
            contentArea.innerHTML = `
                <h2>${aboutMe.avatar}</h2>
                <p><strong>Introduction:</strong> ${aboutMe.introduction}</p>
                <p><strong>Education:</strong> ${aboutMe.education}</p>
                <p><strong>Motivation:</strong> ${aboutMe.motivation}</p>
                <p><strong>Hobbies:</strong> ${aboutMe.hobbies.join(', ')}</p>
                <p><strong>Contact Me:</strong></p>
                <ul>
                    ${aboutMe.contact.map(contact => `<li><a href="${contact.link}" target="_blank">${contact.name}</a></li>`).join('')}
                </ul>
                <p><strong>Acknowledgement:</strong> ${aboutMe.acknowledgement}</p>
            `;
            break;

        case 'blog':
            // Load blog content
            const blogs = getBlogPosts();
            contentArea.innerHTML = '<h1>Blog</h1>';
            blogs.forEach(post => {
                contentArea.innerHTML += `
                    <div class="blog-post">
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                    </div>`;
            });
            break;

        case 'gallery':
            // Load gallery content
            const photos = getGalleryPhotos();
            contentArea.innerHTML = '<h1>Gallery</h1>';
            photos.forEach(photo => {
                contentArea.innerHTML += `
                    <div class="gallery-photo">
                        <img src="${photo.src}" alt="${photo.caption}">
                        <p>${photo.caption}</p>
                    </div>`;
            });
            break;

        case 'projects':
            // Load projects content
            const projectList = getProjects();
            contentArea.innerHTML = '<h1>Projects</h1>';
            projectList.forEach(project => {
                contentArea.innerHTML += `
                    <div class="project-item">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
                    </div>`;
            });
            break;

        default:
            // Load default content
            contentArea.innerHTML = '<h1>Welcome!</h1>';
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


