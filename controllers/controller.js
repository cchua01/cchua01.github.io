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
            break;

        case 'blog':
            // Load blog content with enhanced SEO for machine learning and functional analysis
            const blogs = getBlogPosts();
            contentArea.innerHTML = '<h1>Blog: Machine Learning and Functional Analysis</h1>';
            blogs.forEach(post => {
                const summarizedContent = `
                    This blog explores how to define appropriate metrics to understand the structure of spaces, especially in relation to machine learning and the "Curse of Dimensionality." Invariants—features that remain stable across spaces—are key to identifying new properties. We discuss types of spaces with approximation properties, such as metric, Banach, and Hilbert spaces, and how to represent elements within these spaces using bases like orthonormal and Schauder. 
                    
                    In machine learning, methods like Structural Risk Minimization (SRM) and Empirical Risk Minimization (ERM) help us find the best approximation with controllable error, while regularization balances accuracy with computational complexity. We also examine how Functional Analysis aids in constructing spaces with approximation properties and representation theorems. 
                    
                    Finally, drawing from Vapnik's Statistical Learning Theory, we highlight four key levels of understanding: consistency, convergence rates, control of convergence, and algorithms like SVMs and neural networks.
                `;
                
                contentArea.innerHTML += `
                    <article class="blog-post">
                        <header>
                            <h2>${post.title}</h2>
                        </header>
                        <p>${post.content.replace(/\n/g, '<br><br>')}</p>
                        <p><a href="${post.link}" target="_blank" rel="noopener noreferrer">Read more (PDF)</a></p>
                        
                        <!-- Structured Data for SEO -->
                        <script type="application/ld+json">
                        {
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": "${post.title}",
                            "articleBody": "${summarizedContent.replace(/"/g, '\\"')}",
                            "url": "${window.location.href}",
                            "author": {
                                "@type": "Person",
                                "name": "Chihui Chen"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Chihui Chen",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://cchua01.github.io/assets/img/Avatar.JPG"
                                }
                            },
                            "datePublished": "2024-10-14"
                        }
                        </script>
                    </article>`;
            });
            break;

        case 'gallery':
            // Load gallery content
            const photos = getGalleryPhotos();
            contentArea.innerHTML = '<h1>Gallery</h1><div class="gallery-grid">';
            photos.forEach(photo => {
                contentArea.innerHTML += `
                    <div class="gallery-item">
                        <img src="${photo.src}" alt="${photo.caption}" class="gallery-photo">
                        <p>${photo.caption}</p>
                    </div>`;
            });
            contentArea.innerHTML += '</div>';
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


