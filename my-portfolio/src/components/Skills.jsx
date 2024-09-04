const Skills = ()=>{
    return(
    <>
     <div className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Frontend Technologies:</h3>
        <ul>
          <li><strong>React.js:</strong> Proficient in building interactive user interfaces and single-page applications using React, including state management with Redux and component-based architecture.</li>
          <li><strong>JavaScript (ES6+):</strong> Strong understanding of modern JavaScript concepts such as arrow functions, destructuring, and asynchronous programming.</li>
          <li><strong>HTML5 & CSS3:</strong> Experience in creating well-structured, semantic HTML markup and styling with CSS, including flexbox and grid layout.</li>
          <li><strong>Responsive Design:</strong> Skilled in developing responsive web applications that adapt to various screen sizes and devices using media queries and Bootstrap.</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Backend & Other Technologies:</h3>
        <ul>
          <li><strong>Node.js:</strong> Familiarity with server-side JavaScript development using Node.js, Express.js, and RESTful APIs.</li>
          <li><strong>Database Management:</strong> Experience working with databases like MongoDB for NoSQL and MySQL for relational databases.</li>
          <li><strong>Version Control:</strong> Proficient in using Git for version control and GitHub for collaboration and code management.</li>
          <li><strong>Package Management:</strong> Experienced in managing project dependencies using npm and Yarn.</li>
          <li><strong>Testing:</strong> Knowledge of testing React components using Jest and Enzyme for unit and integration testing.</li>
          <li><strong>Development Tools:</strong> Proficient in using VS Code as the primary code editor and Chrome DevTools for debugging and optimizing web applications.</li>
          <li><strong>Deployment:</strong> Experience in deploying React applications to cloud platforms such as Heroku and Netlify, including setting up CI/CD pipelines for automated deployment.</li>
        </ul>
      </div>
    </div>
    </>
    )
}
export default Skills;