var _a;
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect values from the form
    var name = document.getElementById("name").value.trim();
    var profile = document.getElementById("profile").value.trim();
    var email = document.getElementById("email").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var address = document.getElementById("address").value.trim();
    var education = document.getElementById("education").value.trim();
    var workExperience = document.getElementById("workExperience").value.trim();
    var skillsInput = document.getElementById("skills").value.trim();
    var linksInput = document.getElementById("links").value.trim();
    // Validate required fields
    if (!name || !profile || !email || !contact || !address || !education || !workExperience || !skillsInput || !linksInput) {
        alert("All fields are required.");
        return;
    }
    // Prepare data for resume
    var skills = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    var links = linksInput.split(",").map(function (link) { return link.trim(); });
    var resumeData = {
        name: name,
        profile: profile,
        email: email,
        contact: contact,
        address: address,
        education: education,
        workExperience: workExperience,
        skills: skills,
        links: links,
    };
    // Store resume data in localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    // Redirect to the resume page
    window.location.href = "resume.html";
});
