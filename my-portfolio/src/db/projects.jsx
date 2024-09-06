import CConnect from '../assets/ccportfolio.jpg';
import Note from '../assets/notemanagement.jpg';
import tech from '../assets/tech.jpg';
const projects = [
    {
        image:"/src/assets/tbp2.JPG",
        link:"https://github.com/aicha-azr/CODSOFT/tree/main/Blog_Platform",
        title:"Tech Blog Platform",
        description:"A simple tech blog platform built with the MERN stack, featuring a rich text editor, image uploading, and JWT authentication. The platform allows users to create, update, and manage blog posts seamlessly.",
        category: "Full Stack"
        
    },
    {
        image: Note,
        link:"https://note-management.vercel.app/",
        title:"Note management",
        description:"This project aims to develop a simplified note-taking application for solo use. The strategy and project requirements are tailored to match the skills and resources of an individual developer. By focusing on the use of Next.js, Redux Toolkit, and TypeScript.",
        category: "Full Stack"
    },
        {
            image:"https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Fbest-recipes-blogimage-v3-65968aa8d98a7659538858.jpg&w=1280&q=75",
            link:"https://github.com/aicha-azr/Authentifier-_Recipe_API.git",
            title:"Recipe APIs",
            description:"Development of a robust API with Express.js and MongoDB for the \‘Online Recipe Book\’. It will allow for the exploration, addition, modification, and deletion of recipes. Express.js will handle HTTP requests and MongoDB will store the recipe data.",
            category: "Backend"
            
        },
        {
            image:"https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Fr-65a525af8532a451645825.jpg&w=1280&q=75",
            link:"https://github.com/aicha-azr/AuthFlow-Pro.git",
            title:"Implementing Authentication in the Online Cookbook API",
            description:"This project focuses on enhancing API security by integrating an authentication system. Users will be able to create accounts, authenticate, and obtain access tokens to interact with the API. Sensitive routes, such as creating, updating, and deleting recipes, will be protected and accessible only to authenticated users. An error management system will be implemented to provide precise feedback, and the API documentation will be updated to include detailed instructions.",
            category: "Backend"
            
        },{
            image:"/src/assets/picture2.png",
            link:"https://tasktracker-aichas-projects-14c2cccb.vercel.app/",
            title:"Task Tracker App",
            description:"This is a simple task tracker application built with React and styled with Tailwind CSS. The app, created using Vite for fast development and build processes, allows users to manage their to-do items by adding, updating, and deleting tasks. Users can also mark tasks as complete or incomplete.",
            category: "Frontend"
            
        },,
    ]
    export default projects;
    /**
     
    {
        image: CConnect,
        link:"https://cook-connect.vercel.app/",
        title:"Blog web site",
        description:"Développement d'un site web de blog culinaire où les utilisateurs peuvent partager des articles, commenter et réagir. Utilisant Next.js pour le développement, Redux pour la gestion de l'état, et MongoDB pour le stockage des données. Le site vise à créer une communauté interactive pour les amateurs de cuisine.",
        category: "Full Stack"
    },
    {
     image:tech,
     link:"https://tech-innovate-two.vercel.app/",
     title:"Tech innovate",
     description:"Développement d'un site vitrine professionnel pour Tech Innovate avec Next.js et TypeScript, adapté à un développeur solo.\n Technologies:Next.js,TypeScript,TailwindCSS.",
     category: "Frontend"
 
 },
 * 
 * 
 */