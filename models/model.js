// model.js

// Data for the blog posts
const blogPosts = [
    {
        title: "Machine Learning with Functional Analysis Perspectives",
        content: `
        In the middle of this year, when I dove into three AI-related subjects, the more I learned, the stronger I believed that life is just like a search game—we first learn new things, fed by an intensive flow of information, knowledge, and life experiences. The past shapes who you are now and who you might be in the future. High-quality experiences are like high-quality training sets—just as poor-quality datasets, such as imbalanced datasets, lead to poor performance, higher bias, and variance. Sometimes, the model may never achieve convergence, fluctuating as if trapped in a cycle. Some people are like that, searching for something but never finding it, repeating the same mistakes over and over. Hence, we definitely need to broaden our experiences, or in other words, have a more balanced dataset, and apply Early Stopping to avoid useless exploration, preventing a "Greek tragedy." As humans, what other analogies can we draw from machines, or ultimately, from mathematics?

        Another reason I decided to write this note is that when I was in class, the content of these subjects reminded me of a very obscure image from functional analysis, like a butterfly. After reading the paper *Active Contour Without Edges*, it enhanced my ambition to figure out the foundations of higher-level machine learning. Someone once told me that algorithms are not magic, but I do consider the algorithm in *Active Contour Without Edges* to be magical, as it relies solely on geometrical invariants. So, here we are.
        `,
        link: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/blog_general_framework_of_ml.pdf" 
    },
    {
        title: "Notes on Game Theory for COMP4418",
        content: `
        During COMP4418, I delved into core concepts like Nash equilibrium, zero-sum games, and cooperative versus non-cooperative games.

        A memorable insight was understanding how Nash equilibrium is reached in multi-agent systems and its implications in designing algorithms for AI agents. The classic *Prisoner's Dilemma* highlights the tension between individual rationality and collective welfare. This is further expanded in dynamic games where strategies evolve over time.

        Exploring auctions, voting systems, and bargaining models helped illustrate how game theory informs mechanism design. In AI, concepts from game theory are foundational for multi-agent coordination, adversarial training, and reinforcement learning. As I progress, I aim to dive deeper into its computational aspects and connections to algorithmic game theory.
        `,
        link: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Notes_on_game_theory.pdf"
    },
];

// Data for the gallery photos
const galleryPhotos = [
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Magellanic_Clouds.jpg", caption: "Magellanic Clouds" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/The_Milky_Way_and_Fireflies.jpg", caption: "The Milky Way and Fireflies" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/The_Milky_Way_and_Shooting_Stars.jpg", caption: "The Milky Way and Shooting Stars" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/The_Milky_Way_South_Crux-2.jpg", caption: "The Milky Way and the South Crux" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Lotus_Leaves_and_Bird.jpg", caption: "Lotus Leaves and a Bird" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Lotus_and_Mountain.jpg", caption: "Lotus and Mountain" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/On_the_Beach.jpg", caption: "On the Beach" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/On_the_Road.jpg", caption: "On the Road" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/La_Perouse.jpg", caption: "La Perouse" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Temple.jpg", caption: "Temple" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/People.jpg", caption: "People" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/City_Light.jpg", caption: "City Light" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Campus.jpg", caption: "Campus" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/Bird.jpg", caption: "Bird" },
    { src: "https://formyportfolio.s3.ap-southeast-2.amazonaws.com/The_Milky_Way_and_Aurora_and_Me.jpg", caption: "The Milky Way, Aurora and Me" },
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
    avatar: "assets/img/Prophecy.JPG",
    introduction: "Hi, I'm Chihui Chen, a current student (2nd term out of 6 terms) at University of New South Wales. I'm doing Master of Information Technology, specialising in Artificial Intelligence.",
    education: "I did Engineering degree in Mineral Processing for my undergraduate at Fuzhou University.",
    motivation: `
        I was lost for a few years, suspending and seeking... until I recollected my inherent curiosity—a gift, "a gift of solitude" as described by Alexander Grothendieck in his Récoltes et Semailles. I was, and I am still, fascinated by the starry sky, as if there's an appealing call to me from millions of light-years away.

        Then I realized that I'm so eager to know more beyond the perceptual aspects—what is the concise, elegant, and universal regularity/pattern/prophecy behind such vivid phenomena. Naturally, I delved into the theoretical part, expecting predictive results—math is the first thing I had to figure out. It was in my first year during my undergraduate studies, after being introduced to Laplacian Transformation in a calculus course, I felt a brand new world opening up to me, and then I started to find more math books while taking mineral processing courses. Thanks to my engineering background, which acts like a bidirectional link, leading me to think about the theory behind, feeding me some potential applications too. I can kind of sense the motivation behind some abstract definitions and schemes. Like why would we care about classification/partition, and then look for the universal properties under a specific space? Why would we do representative sampling? But later, when I encountered functional analysis, I was so clueless and suspicious of the application, feeling like I was in the ivory tower, betrayed by reality. Looking back at photography—one of my hobbies, especially computational photography, it perfectly fits my expectations—both theory and applications—hence, I can always keep my purpose/motivation in mind when exploring due to this goal-oriented task. So... I started to question myself, why not just transfer my major. Therefore, I'm here today. And this website is way more like recording some of my thoughts, notes, experience, and projects—I wish I'm always on the way to learn, fulfilling my whole life.
    `,
    hobbies: ["Photography", "Math", "Music"],
    contact: [
        { name: "Instagram", link: "https://www.instagram.com/chihuahuachiefchen" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/chihui-chen-338710270" },
        { name: "GitHub", link: "https://github.com/cchua01" },
        { name: "Email", link: "mailto:chihui.chen@student.unsw.edu.au" }
    ],
    acknowledgement: `
        The background music is binaural beats, which I gained from <a href="https://pixabay.com/music/search/binaural/" target="_blank">Pixabay</a>, and the panorama of the Milky Way is from <a href="https://www.eso.org/public/archives/images/publicationjpg/eso0932a.jpg" target="_blank">ESO</a>. I will create my own panorama at some point.
    `
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

