import CConnect from '../assets/ccportfolio.jpg';
import Note from '../assets/notemanagement.jpg';
import tech from '../assets/tech.jpg';
const projects = [
    {
        image: CConnect,
        link:"https://cook-connect.vercel.app/",
        title:"Blog web site",
        description:"Développement d'un site web de blog culinaire où les utilisateurs peuvent partager des articles, commenter et réagir. Utilisant Next.js pour le développement, Redux pour la gestion de l'état, et MongoDB pour le stockage des données. Le site vise à créer une communauté interactive pour les amateurs de cuisine.",
        category: "Full Stack"
    },
    {
        image: Note,
        link:"https://note-management.vercel.app/",
        title:"Note management",
        description:"Ce projet vise à développer une application de prise de notes performante et professionnelle. En utilisant Next.js, Redux Toolkit et TypeScript, l'application permet de créer, lire, éditer et supprimer des notes.\n Technologies Utilisées: \n _Next.js pour le développement front-end et le routage basé sur le système de fichiers, \n _Redux Toolkit pour la gestion de l'état de l'application.\n _TypeScript pour améliorer la qualité et la maintenabilité du code.",
        category: "Full Stack"

    },
    {
        image:tech,
        link:"https://tech-innovate-two.vercel.app/",
        title:"Tech innovate",
        description:"Développement d'un site vitrine professionnel pour Tech Innovate avec Next.js et TypeScript, adapté à un développeur solo.\n Technologies:Next.js,TypeScript,TailwindCSS.",
        category: "Frontend"

    },
    {
        image:"https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Fbest-recipes-blogimage-v3-65968aa8d98a7659538858.jpg&w=1280&q=75",
        link:"https://github.com/aicha-azr/Authentifier-_Recipe_API.git",
        title:"Recipe APIs",
        description:"Développement d'une API robuste avec Express.js et MongoDB pour le 'Livre de Recettes en Ligne'. Elle permettra l'exploration, l'ajout, la modification et la suppression de recettes. Express.js gérera les requêtes HTTP et MongoDB stockera les données des recettes.",
        category: "Backend"

    },
    {
        image:"https://maghreb.simplonline.co/_next/image?url=https%3A%2F%2Fsimplonline-v3-prod.s3.eu-west-3.amazonaws.com%2Fmedia%2Fimage%2Fjpg%2Fr-65a525af8532a451645825.jpg&w=1280&q=75",
        link:"https://github.com/aicha-azr/AuthFlow-Pro.git",
        title:"Implementing Authentication in the Online Cookbook API",
        description:"Ce projet se concentre sur l'amélioration de la sécurité de l'API en intégrant un système d'authentification. Les utilisateurs pourront créer des comptes, s'authentifier, et obtenir des jetons d'accès pour interagir avec l'API. Les routes sensibles, telles que la création, la mise à jour et la suppression de recettes, seront protégées et accessibles uniquement aux utilisateurs authentifiés. Un système de gestion des erreurs sera mis en place pour fournir des retours précis, et la documentation de l'API sera mise à jour pour inclure des instructions détaillées.",
        category: "Backend"

    },
]
export default projects;