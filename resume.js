window.addEventListener("DOMContentLoaded", function () {
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    if (resumeData) {
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("profile").innerText = resumeData.profile || "Your Experience";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.contact || "Your Phone";
        document.getElementById("resumeLocation").innerText = resumeData.address || "Your Location";
        document.getElementById("resumeExperience").innerText = resumeData.workExperience || "Your Experience";
        var educatioArr = resumeData.education.split(",");
        var educationList = document.getElementById("resumeEducation");
        educationList.innerHTML = educatioArr.map(function (education) { return "<p>".concat(education, "</p>"); }).join('');
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join('');
        var linksContainer = document.getElementById("resumeLinks");
        linksContainer.innerHTML = resumeData.links.map(function (link) { return "<a href=\"".concat(link, "\" target=\"_blank\">").concat(link, "</a>"); }).join('');
    }
});
window.addEventListener("DOMContentLoaded", function () {
    var editBtn = document.getElementById("editResumeBtn");
    var editModal = document.getElementById("editModal");
    var closeBtn = document.querySelector(".close");
    var saveBtn = document.getElementById("saveResumeBtn");
    var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
    // inject Editmodal fields with current data
    editBtn.onclick = function () {
        document.getElementById("editName").value = resumeData.name || "";
        document.getElementById("editProfile").value = resumeData.profile || "";
        document.getElementById("editEmail").value = resumeData.email || "";
        document.getElementById("editContact").value = resumeData.contact || "";
        document.getElementById("editAddress").value = resumeData.address || "";
        document.getElementById("editEducation").value = resumeData.education || "";
        document.getElementById("editWorkExperience").value = resumeData.workExperience || "";
        document.getElementById("editSkills").value = (resumeData.skills || []).join(", ");
        document.getElementById("editLinks").value = (resumeData.links || []).join(", ");
        editModal.style.display = "flex";
    };
    closeBtn.onclick = function () {
        editModal.style.display = "none";
    };
    saveBtn.onclick = function () {
        resumeData.name = document.getElementById("editName").value;
        resumeData.profile = document.getElementById("editProfile").value;
        resumeData.email = document.getElementById("editEmail").value;
        resumeData.contact = document.getElementById("editContact").value;
        resumeData.address = document.getElementById("editAddress").value;
        resumeData.education = document.getElementById("editEducation").value;
        resumeData.workExperience = document.getElementById("editWorkExperience").value;
        resumeData.skills = document.getElementById("editSkills").value.split(",").map(function (skill) { return skill.trim(); });
        resumeData.links = document.getElementById("editLinks").value.split(",").map(function (link) { return link.trim(); });
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        updateResumeDisplay();
        editModal.style.display = "none";
    };
    function updateResumeDisplay() {
        // Refresh resume display
        var resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
        document.getElementById("resumeName").innerText = resumeData.name || "Your Name";
        document.getElementById("profile").innerText = resumeData.profile || "Your Experience";
        document.getElementById("resumeEmail").innerText = resumeData.email || "Your Email";
        document.getElementById("resumePhone").innerText = resumeData.contact || "Your Phone";
        document.getElementById("resumeLocation").innerText = resumeData.address || "Your Location";
        document.getElementById("resumeExperience").innerText = resumeData.workExperience || "Your Experience";
        var educatioArr = resumeData.education.split(",");
        var educationList = document.getElementById("resumeEducation");
        educationList.innerHTML = educatioArr.map(function (education) { return "<p>".concat(education, "</p>"); }).join('');
        var skillsList = document.getElementById("resumeSkills");
        skillsList.innerHTML = resumeData.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join("");
        var linksContainer = document.getElementById("resumeLinks");
        linksContainer.innerHTML = resumeData.links.map(function (link) { return "<a href=\"".concat(link, "\" target=\"_blank\">").concat(link, "</a>"); }).join("");
    }
    window.onclick = function (event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };
});
