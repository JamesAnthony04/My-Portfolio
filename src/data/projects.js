import enroll from "../assets/enroll-sys.png";
import dish from "../assets/dish-dash.png";
import portfolio from "../assets/my-portfolio.png";

const projects = [
            {
                id: 1,
                title: "Enrollment Management System",
                img:{
                    src: enroll,
                    alt: "Project Image"
                },
                desc: "The system for managing enrollment for Sta. Cruz Elementary School eases the, scheduling, enrollment, and sections management. Teachers monitor student list and grades, administrators manage enrollment, sections, and schedules, and students can readily access, re-enroll, and view sections, grades, and schedules.",
                tech: [
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "PHP",
                    "MySQL",
                ],
                url: "http://Stacruz.edu.ph",    
                repo: "https://github.com/JamesAnthony04/Elementary-School-Enrollment-MS"    
            },
            {
                id: 2,
                title: "Dish Dash Recipe App with API Integration",
                img:{
                    src: dish,
                    alt: "Project Image"
                },
                desc: "A smart recipe app that generates meal suggestions based on the ingredients you have on hand. It simplifies cooking by helping you make the most of your available resources.",
                tech: [
                    "React JS",
                    "JavaScript",
                    "TailwindCSS",
                    "Vite",
                    "HTML",
                    "CSS",
                ],
                url: "https://dish-dash-system.vercel.app/",
                repo: "https://github.com/JamesAnthony04/dish-dash-system"
            },
            {
                id: 3,
                title: "My Personal Portfolio",
                img:{
                    src: portfolio,
                    alt: "Project Image"
                },
                desc: "Designed and developed a personal portfolio website to showcase my skills and projects as a developer. The website features a clean, modern design with responsive layouts, providing an engaging user experience across devices.",
                tech: [
                    "React JS",
                    "JavaScript",
                    "TailwindCSS",
                    "Vite",
                    "HTML",
                    "CSS",
                ],
                url: "https://portfolio-delta-ochre-61.vercel.app/",
                repo: "https://github.com/JamesAnthony04/My-Portfolio"

            },
]
export default projects;