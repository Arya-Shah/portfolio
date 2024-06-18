import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated computer science professional with a strong foundation in data analysis and software development. With expertise in Python, R, JavaScript, and extensive experience in both front-end and back-end technologies, I am committed to creating impactful solutions. My background includes developing robust applications and conducting comprehensive data analyses, aiming to deliver exceptional results and drive business success.`;

export const ABOUT_TEXT = `I am a computer science graduate with a passion for data analysis and software development. My expertise spans across programming languages like Python, R, and JavaScript, with significant experience in both web development and database management.
                            As a Graduate Student Assistant at Stevens Institute of Technology, I honed my organizational and communication skills by overseeing front desk operations, maintaining departmental records, and coordinating academic seminars. This role enhanced my ability to handle administrative tasks efficiently and contribute to a vibrant educational environment.
                            During my tenure as a Software Developer Intern at Pixelotech, I developed a user-centric hotel management system using Python and the Django-rest framework. I collaborated with cross-functional teams to implement a comprehensive load testing strategy for a mobile application, ensuring it could handle high user traffic without performance degradation. This experience deepened my understanding of back-end development, performance optimization, and cross-functional teamwork.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Graduate Student Assistant",
    company: "Stevens Institute of Technology.",
    description: `Managed front desk operations, departmental records, and coordinated academic events.`,
    technologies: [
      "Administrative tasks",
      "Record maintenance",
      "Event coordination",
      "Communication",
      "Organization",
      "Data management"
  ],
  },
  {
    year: "2022-Jan - 2022-May",
    role: "Software Developer Intern",
    company: "Pixelotech",
    description: `Developed a cross-platform hotel management system and executed load testing for a mobile application.`,
    technologies: [
      "Python",
      "Django-rest Framework",
      "Cross-functional collaboration",
      "Load testing",
      "Performance optimization",
      "API development",
      "Mobile application testing"
  ],
  }
];

export const PROJECTS = [
  {
    title: "Apartment Hunt Helper",
    image: project1, // replace with actual image variable
    description: "A web application that simplifies the rental property search process by allowing users to search for properties, review landlords, and share rental experiences.",
    technologies: ["MongoDB", "AJAX", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Music Genre Classifier",
    image: project2, // replace with actual image variable
    description: "A Python-based application for classifying and identifying music genres from audio files using the K-Nearest-Neighbor algorithm.",
    technologies: ["Python", "Numpy", "Scipy.io.wavfile", "Python-Speech-Features"],
  },
  {
    title: "Rainfall Predictor",
    image: project3, // replace with actual image variable
    description: "A Python application to forecast precipitation probabilities for specific regions, utilizing linear regression and data visualization techniques.",
    technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Sklearn"],
  }
];

export const CONTACT = {
  address: "111 Hutton St, Jersey City, NJ, 07307 ",
  phoneNo: "+1 857-995-3393",
  email: "arya.apps14@gmail.com",
};
