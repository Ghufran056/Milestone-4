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

document.getElementById("form")?.addEventListener("submit", function (e: Event) {
  e.preventDefault();

  // Collect values from the form
  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const profile = (document.getElementById("profile") as HTMLTextAreaElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const contact = (document.getElementById("contact") as HTMLInputElement).value.trim();
  const address = (document.getElementById("address") as HTMLInputElement).value.trim();
  const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
  const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value.trim();
  const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement).value.trim();
  const linksInput = (document.getElementById("links") as HTMLInputElement).value.trim();
  

  // Validate required fields
  if (!name || !profile ||!email || !contact || !address || !education || !workExperience || !skillsInput || !linksInput) {
    alert("All fields are required.");
    return;
  }

  // Prepare data for resume
  const skills = skillsInput.split(",").map(skill => skill.trim());
  const links = linksInput.split(",").map(link => link.trim());

  
 
    
    const resumeData: ResumeData = {
      name,
      profile,
      email,
      contact,
      address,
      education,
      workExperience,
      skills,
      links,
    };

    // Store resume data in localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    // Redirect to the resume page
    window.location.href = "resume.html";
  
});
