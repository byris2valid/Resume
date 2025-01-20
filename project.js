"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resume_js_1 = require("./classes/resume.js");
var resume = new resume_js_1.Resume({
    name: 'Byris Fells',
    email: 'byris.fells@gmail.com',
    phone: '(555) 555-5555',
    education: 'University of Washington',
    tech_skills: {
        Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'C++', 'Dart', 'PHP'],
        Frameworks: ['React', 'Node.js', 'Express.js', 'Flutter', 'Dart'],
        Tools: ['Git', 'GitHub', 'VS Code'],
    },
    skills: [
        'Strong communication skills',
        'Problem-solving skills',
        'Attention to detail',
        'Adaptable',
    ],
});
resume.printResume();
