// model.js

// Data for the blog posts
const blogPosts = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post."
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post."
    },
    // Add more blog posts here...
];

// Data for the gallery photos
const galleryPhotos = [
    {
        src: "assets/images/photo1.jpg",
        caption: "Caption for photo 1"
    },
    {
        src: "assets/images/photo2.jpg",
        caption: "Caption for photo 2"
    },
    // Add more photos here...
];

// Data for the projects
const projects = [
    {
        title: "Project One",
        description: "This is the first project description."
    },
    {
        title: "Project Two",
        description: "This is the second project description."
    },
    // Add more projects here...
];

// Data for the "About Me" section
const aboutMeData = {
    avatar: "assets/img/Avatar.JPG",
    introduction: "Hi, I'm Chihui Chen, a current student (2nd term out of 6 terms) at University of New South Wales. I'm doing Master of Information Technology, specialising in Artificial Intelligence.",
    education: "I did Engineering degree in Mineral Processing for my undergraduate at Fuzhou University.",
    motivation: "Why I transferred my major from Chemistry related to Computer Science related.",
    hobbies: ["Photography", "Math", "Music"],
    contact: [
        { name: "Instagram", link: "https://www.instagram.com/chihuahuachiefchen" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/chihui-chen-338710270" },
        { name: "GitHub", link: "https://github.com/cchua01" },
        { name: "Email", link: "mailto:chihui.chen@student.unsw.edu.au" }
    ],
    acknowledgement: "Binaural beats, Milky Way."
};

// Function to get all blog posts
function getBlogPosts() {
    return blogPosts;
}

// Function to get all gallery photos
function getGalleryPhotos() {
    return galleryPhotos;
}

// Function to get all projects
function getProjects() {
    return projects;
}

// Function to get "About Me" data
function getAboutMeData() {
    return aboutMeData;
}

