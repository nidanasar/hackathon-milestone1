
var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var summaryInput = document.getElementById('summary');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var educationInput = document.getElementById('education');
var generateBtn = document.getElementById('generate-btn');
var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var resumePreview = document.getElementById('resume-preview');
// Event listener for the 'Generate Preview' button
generateBtn.addEventListener('click', function () {
    // Generate the resume preview
    resumePreview.innerHTML = "\n        <h2>Resume Preview</h2>\n        <p><strong>Name:</strong> ".concat(nameInput.value, "</p>\n        <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n        <p><strong>Phone:</strong> ").concat(phoneInput.value, "</p>\n        <p><strong>Summary:</strong> ").concat(summaryInput.value, "</p>\n        <p><strong>Skills:</strong> ").concat(skillsInput.value, "</p>\n        <p><strong>Experience:</strong> ").concat(experienceInput.value, "</p>\n        <p><strong>Education:</strong> ").concat(educationInput.value, "</p>\n    ");
});
// Event listener for the 'Hide/Show Skills' button
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsInput.style.display === 'none') {
        skillsInput.style.display = 'block';
    }
    else {
        skillsInput.style.display = 'none';
    }
});
