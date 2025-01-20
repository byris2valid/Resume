"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resume = void 0;
var Resume = /** @class */ (function () {
    function Resume(resume) {
        this.name = resume.name;
        this.email = resume.email;
        this.phone = resume.phone;
        this.education = resume.education;
        this.tech_skills = resume.tech_skills;
        this.skills = resume.skills;
    }
    Resume.prototype.printResume = function () {
        var resumeDiv = document.getElementById('resume');
        if (!resumeDiv)
            return;
        resumeDiv.innerHTML = "\n         <h1>".concat(this.name, "</h1>\n         <p>Email: ").concat(this.email, "</p>\n         <p>Phone: ").concat(this.phone, "</p>\n         <p>Education: ").concat(this.education, "</p>\n         \n         <h2>Technical Skills</h2>\n         <p>Languages: ").concat(this.tech_skills.Languages.join(', '), "</p>\n         <p>Frameworks: ").concat(this.tech_skills.Frameworks.join(', '), "</p>\n         <p>Tools: ").concat(this.tech_skills.Tools.join(', '), "</p>\n         \n         <h2>Skills</h2>\n         <ul>\n             ").concat(this.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n         </ul>\n     ");
    };
    return Resume;
}());
exports.Resume = Resume;
