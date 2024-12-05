interface ResumeData {
  name: string;
  profile: string;
  email: string;
  address: string;
  contact: string;
  education: string;
  workExperience: string;
  skills: string[];
  links: string[];
}

window.addEventListener("DOMContentLoaded", () => {
  const resumeData: ResumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  if (resumeData) {
    (document.getElementById("resumeName") as HTMLElement).innerText = resumeData.name || "Your Name";
    (document.getElementById("profile") as HTMLElement).innerText = resumeData.profile || "Your Experience";
    (document.getElementById("resumeEmail") as HTMLElement).innerText = resumeData.email || "Your Email";
    (document.getElementById("resumePhone") as HTMLElement).innerText = resumeData.contact || "Your Phone";
    (document.getElementById("resumeLocation") as HTMLElement).innerText = resumeData.address || "Your Location";
    (document.getElementById("resumeExperience") as HTMLElement).innerText = resumeData.workExperience || "Your Experience";
 
    const educatioArr = resumeData.education.split(",");
   const educationList = document.getElementById("resumeEducation") as HTMLElement;
   educationList.innerHTML = educatioArr.map((education: string) => `<p>${education}</p>`).join('');


    const skillsList = document.getElementById("resumeSkills") as HTMLElement;
    skillsList.innerHTML = resumeData.skills.map((skill: string) => `<li>${skill}</li>`).join('');

    const linksContainer = document.getElementById("resumeLinks") as HTMLElement;
    linksContainer.innerHTML = resumeData.links.map((link: string) => `<a href="${link}" target="_blank">${link}</a>`).join('');
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const editBtn = document.getElementById("editResumeBtn") as HTMLButtonElement;
  const editModal = document.getElementById("editModal") as HTMLElement;
  const closeBtn = document.querySelector(".close") as HTMLElement;
  const saveBtn = document.getElementById("saveResumeBtn") as HTMLButtonElement;
  
  const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

  // inject Editmodal fields with current data
  editBtn.onclick = () => {
    (document.getElementById("editName") as HTMLInputElement).value = resumeData.name || "";
    (document.getElementById("editProfile") as HTMLInputElement).value = resumeData.profile || "";
    (document.getElementById("editEmail") as HTMLInputElement).value = resumeData.email || "";
    (document.getElementById("editContact") as HTMLInputElement).value = resumeData.contact || "";
    (document.getElementById("editAddress") as HTMLInputElement).value = resumeData.address || "";
    (document.getElementById("editEducation") as HTMLTextAreaElement).value = resumeData.education || "";
    (document.getElementById("editWorkExperience") as HTMLTextAreaElement).value = resumeData.workExperience || "";
    (document.getElementById("editSkills") as HTMLInputElement).value = (resumeData.skills || []).join(", ");
    (document.getElementById("editLinks") as HTMLInputElement).value = (resumeData.links || []).join(", ");
    
    editModal.style.display = "flex";
  };

  closeBtn.onclick = () => {
    editModal.style.display = "none";
  };

  saveBtn.onclick = () => {
    resumeData.name = (document.getElementById("editName") as HTMLInputElement).value;
    resumeData.profile = (document.getElementById("editProfile") as HTMLInputElement).value;
    resumeData.email = (document.getElementById("editEmail") as HTMLInputElement).value;
    resumeData.contact = (document.getElementById("editContact") as HTMLInputElement).value;
    resumeData.address = (document.getElementById("editAddress") as HTMLInputElement).value;
    resumeData.education = (document.getElementById("editEducation") as HTMLTextAreaElement).value;
    resumeData.workExperience = (document.getElementById("editWorkExperience") as HTMLTextAreaElement).value;
    resumeData.skills = (document.getElementById("editSkills") as HTMLInputElement).value.split(",").map(skill => skill.trim());
    resumeData.links = (document.getElementById("editLinks") as HTMLInputElement).value.split(",").map(link => link.trim());

    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    updateResumeDisplay();
    editModal.style.display = "none";
  };

  function updateResumeDisplay() {
    // Refresh resume display
    const resumeData: ResumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

    (document.getElementById("resumeName") as HTMLElement).innerText = resumeData.name || "Your Name";
    (document.getElementById("profile") as HTMLElement).innerText = resumeData.profile || "Your Experience";
    (document.getElementById("resumeEmail") as HTMLElement).innerText = resumeData.email || "Your Email";
    (document.getElementById("resumePhone") as HTMLElement).innerText = resumeData.contact || "Your Phone";
    (document.getElementById("resumeLocation") as HTMLElement).innerText = resumeData.address || "Your Location";
    (document.getElementById("resumeExperience") as HTMLElement).innerText = resumeData.workExperience || "Your Experience";
  
    const educatioArr = resumeData.education.split(",");
   const educationList = document.getElementById("resumeEducation") as HTMLElement;
   educationList.innerHTML = educatioArr.map((education: string) => `<p>${education}</p>`).join('');

    const skillsList = document.getElementById("resumeSkills") as HTMLElement;
    skillsList.innerHTML = resumeData.skills.map((skill: string) => `<li>${skill}</li>`).join("");
  
    const linksContainer = document.getElementById("resumeLinks") as HTMLElement;
    linksContainer.innerHTML = resumeData.links.map((link: string) => `<a href="${link}" target="_blank">${link}</a>`).join("");
  }

  window.onclick = (event) => {
    if (event.target === editModal) {
      editModal.style.display = "none";
    }
  };
});
