
export class Resume {
    public name: string;
    public email: string;
    public phone: string;
    public education: string;
    public tech_skills: {
     Languages: string[];
     Frameworks: string[];
     Tools: string[];
    }
    public skills: string[];
   
 
 
    constructor(resume: resume) {
     this.name = resume.name;
     this.email = resume.email;
     this.phone = resume.phone;
     this.education = resume.education;
     this.tech_skills = resume.tech_skills;
     this.skills = resume.skills;
    }
 
    printResume() {
     const resumeDiv = document.getElementById('resume');
     if (!resumeDiv) return;
 
     resumeDiv.innerHTML = `
         <h1>${this.name}</h1>
         <p>Email: ${this.email}</p>
         <p>Phone: ${this.phone}</p>
         <p>Education: ${this.education}</p>
         
         <h2>Technical Skills</h2>
         <p>Languages: ${this.tech_skills.Languages.join(', ')}</p>
         <p>Frameworks: ${this.tech_skills.Frameworks.join(', ')}</p>
         <p>Tools: ${this.tech_skills.Tools.join(', ')}</p>
         
         <h2>Skills</h2>
         <ul>
             ${this.skills.map(skill => `<li>${skill}</li>`).join('')}
         </ul>
     `;
 }
 }