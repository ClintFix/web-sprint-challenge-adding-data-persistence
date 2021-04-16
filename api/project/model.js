
const db = require('../../data/dbConfig');

async function getAll() {
    const projects = await db("projects as p");
    const projectsWithBoolean = projects.map(project => {
        if (project.project_completed === 0 || !project.project_completed) {
            return {...project, "project_completed": false};
        } else {
            return {...project, "project_completed": true};
        }
    });
    return projectsWithBoolean; 
}

module.exports = {
    getAll,
}
