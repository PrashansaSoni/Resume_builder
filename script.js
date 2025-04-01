function fetchProfile(platform) {
  const urlInput = document.getElementById("profileUrl").value;
  const loading = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const output = document.getElementById("resumeOutput");

  errorDiv.style.display = "none";
  output.innerHTML = "";

  if (!urlInput) {
    errorDiv.textContent = "Please enter a profile URL";
    errorDiv.style.display = "block";
    return;
  }
  if (platform == "github") {
    errorDiv.textContent =
      "Github implementation in progress..., will be done soon";
    errorDiv.style.display = "block";
    return;
  }
  loading.style.display = "block";

  setTimeout(() => {
    loading.style.display = "none";
    generateResume(fakeData);
  }, 1500);
}

function generateResume(data) {
  const output = document.getElementById("resumeOutput");
  output.innerHTML = "";

  const resume = document.createElement("div");
  resume.className = "resume";

  // Header Section
  const header = document.createElement("div");
  header.className = "resume-header";
  header.innerHTML = `
        <h1>${data.Name}</h1>
        <h2>${data.Headline}</h2>
        <p class="location">${data.Location}</p>
    `;
  resume.appendChild(header);

  // About Section
  const about = document.createElement("div");
  about.className = "section";
  about.innerHTML = `
        <h3>About</h3>
        <p>${data.About.replace(/\n/g, "<br>")}</p>
    `;
  resume.appendChild(about);

  // Experience Section
  const experience = document.createElement("div");
  experience.className = "section";
  experience.innerHTML = "<h3>Experience</h3>";
  const expList = document.createElement("ul");
  data.Experience.forEach((exp) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${exp.split("\n")[0]}</strong><br>${exp.split("\n").slice(1).join("<br>")}`;
    expList.appendChild(li);
  });
  experience.appendChild(expList);
  resume.appendChild(experience);

  // Education Section
  const education = document.createElement("div");
  education.className = "section";
  education.innerHTML = "<h3>Education</h3>";
  const eduList = document.createElement("ul");
  data.Education.forEach((edu) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>${edu.Institute}</strong><br>
            ${edu.GPA_or_Percentage}
        `;
    eduList.appendChild(li);
  });
  education.appendChild(eduList);
  resume.appendChild(education);

  // Skills Section
  const skills = document.createElement("div");
  skills.className = "section";
  skills.innerHTML = "<h3>Technical Skills</h3>";
  const skillsGrid = document.createElement("div");
  skillsGrid.className = "skills-grid";
  data.Skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "skill-chip";
    chip.textContent = skill;
    skillsGrid.appendChild(chip);
  });
  skills.appendChild(skillsGrid);
  resume.appendChild(skills);

  // Projects Section
  const projects = document.createElement("div");
  projects.className = "section";
  projects.innerHTML = "<h3>Projects</h3>";
  data.Projects.forEach((proj) => {
    const project = document.createElement("div");
    project.className = "project";
    project.innerHTML = `
            <h4>${proj["Project Name"]}</h4>
            <em>${proj.Duration.split("\n")[0]}</em>
            <p>${proj.Description.split("\n").slice(0, 5).join("<br>")}</p>
        `;
    projects.appendChild(project);
  });
  resume.appendChild(projects);

  // Certifications Section
  const certifications = document.createElement("div");
  certifications.className = "section";
  certifications.innerHTML = "<h3>Certifications</h3>";
  const certList = document.createElement("ul");
  data.Certifications.forEach((cert) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <strong>${cert.Certification}</strong><br>
            ${cert["Issued By"].split("\n")[0]}
        `;
    certList.appendChild(li);
  });
  certifications.appendChild(certList);
  resume.appendChild(certifications);

  // Honors & Awards Section
  const honors = document.createElement("div");
  honors.className = "section";
  honors.innerHTML = "<h3>Honors & Awards</h3>";
  const honorsList = document.createElement("ul");
  data["Honors & Awards"].forEach((honor) => {
    const li = document.createElement("li");
    li.textContent = honor["Honor/Award"];
    honorsList.appendChild(li);
  });
  honors.appendChild(honorsList);
  resume.appendChild(honors);

  output.appendChild(resume);
}
const fakeData = {
  Name: "Adya Nandi",
  Headline:
    "| Aspiring Data Scientist | 5🌟 in Python @ HackerRank | Machine Learning Enthusiast | Proficient in MySQL |",
  Location: "Varanasi, Uttar Pradesh, India",
  About:
    "👩‍💻 Computer Science Student | Machine Learning Enthusiast | Streamlit Developer\n\nAs a passionate technologist, I thrive on exploring the ever-evolving landscape of data science, machine learning, and web development. With a solid foundation in Python and MySql I create impactful solutions that bridge technical complexity with real-world applications.\n\nI am proficient in building intuitive web apps using Streamlit, crafting seamless user experiences with HTML & CSS, and developing predictive models using advanced machine learning algorithms. My work often involves tackling complex datasets, automating workflows with Selenium, and ensuring scalability through effective database management.\n\nBeyond my technical expertise, I have worked on meaningful projects like:\n\nDiabetic Alert: A predictive tool combining 11 ML models for healthcare solutions.\nVisitor Management System for BHEL: Simplified operations and improved vendor analytics.\nDriven by curiosity and a desire to innovate, I stay updated on cutting-edge technologies and thrive in collaborative environments. I enjoy solving challenges that make a difference.\n\nLet’s connect to collaborate, share ideas, and embark on a journey of innovation together! 🌟",
  Experience: [
    "Campus marketing officer\nCoding Ninjas 10X Club · Part-time\nJan 2025 - Present · 3 mos\nJan 2025 to Present · 3 mos\nHaryana, India · Remote\nOffer letter \nOffer letter",
    "Software Engineer Intern\nBharat Heavy Electricals Limited · Internship\nJun 2024 - Aug 2024 · 3 mos\nJun 2024 to Aug 2024 · 3 mos\nVaranasi, Uttar Pradesh, India · On-site\nData Analysis, Data Visualization and +6 skills",
  ],
  Education: [
    {
      Institute: "Central University of Haryana, Mahendergarh",
      Duration: "",
      GPA_or_Percentage: "Grade: A",
    },
  ],
  Skills: [
    "Algorithms",
    "GitHub",
    "Front-End Development",
    "Amazon Web Services (AWS)",
    "Data Science",
    "Computer Science",
    "Communication",
    "Java",
    "Analytical Skills",
    "Problem Solving",
    "English",
    "Prompt Engineering",
    "Large Language Models (LLM)",
    "Artificial Intelligence (AI)",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
    "EDA",
    "Beautiful Soup",
    "Selenium WebDriver",
    "Selenium",
    "Web Scraping",
    "Computer Vision",
    "Keras",
    "Git",
    "Canva",
    "Microsoft PowerPoint",
    "Microsoft Word",
    "TypeScript",
    "Tailwind CSS",
    "Flask",
    "JavaScript",
    "Natural Language Processing (NLP)",
    "Recurrent Neural Networks (RNN)",
    "Artificial Neural Networks",
    "Adobe Photoshop",
    "Figma (Software)",
    "Microsoft Excel",
    "Generative AI",
    "Deep Learning",
    "Data Visualization",
    "Diabetes Alert - Diabetes Insight Tool",
    "Data Analysis",
    "Analytics",
    "Machine Learning",
    "Pandas (Software)",
    "Scikit-Learn",
    "TensorFlow",
    "SQLite",
    "Streamlit",
    "NumPy",
    "C++",
    "C (Programming Language)",
    "HTML",
    "Cascading Style Sheets (CSS)",
    "CSS Flexbox",
    "Python",
    "Python(Basics)",
    "Data Structures",
    "Object-Oriented Programming (OOP)",
    "SQL",
    "Database Management System (DBMS)",
  ],
  Projects: [
    {
      "Project Name": "Diabetes Alert - Diabetes Insight Tool",
      Duration: "Jul 2024 - Aug 2024\nJul 2024 - Aug 2024",
      Description:
        "Associated with Central University of Haryana, Mahendergarh\nAssociated with Central University of Haryana, Mahendergarh\nDeveloped a web-based diabetes prediction tool using Streamlit. The application utilizes machine learning models, including Logistic Regression, to provide accurate predictions based on user health metrics. Designed with a user-friendly interface, it features secure login for hospital admins, ensuring data confidentiality. The project integrates Python, Streamlit, and SQLite to manage data efficiently. This tool stands as a testament to the potential of AI in improving health outcomes, empowering users to take control of their well-being with timely insights.\n\nDeveloped a web-based diabetes prediction tool using Streamlit. The application utilizes machine learning models, including Logistic Regression, to provide accurate predictions based on user health metrics. Designed with a user-friendly interface, it features secure login for hospital admins, ensuring data confidentiality. The project integrates Python, Streamlit, and SQLite to manage data efficiently. This tool stands as a testament to the potential of AI in improving health outcomes, empowering users to take control of their well-being with timely insights.\nSkills: Machine Learning · Pandas (Software) · SQLite · Data Analysis · Streamlit · Python · TensorFlow · Analytics · Scikit-Learn · NumPy · Data Visualization\nMachine Learning · Pandas (Software) · SQLite · Data Analysis · Streamlit · Python · TensorFlow · Analytics · Scikit-Learn · NumPy · Data Visualization\nRegular users : \nRegular users :\nAdmin :\nAdmin :\nOther contributors\nOther contributors",
    },
  ],
  Certifications: [
    {
      Certification: "Python(Basics)",
      "Issued By":
        "Issued Aug 2024\nIssued Aug 2024, HackerRank\nHackerRank, Credential ID CCB2AA24CC0F\nCredential ID CCB2AA24CC0F",
      Date: "Issued Aug 2024\nIssued Aug 2024, Credential ID CCB2AA24CC0F\nCredential ID CCB2AA24CC0F",
    },
  ],
  "Honors & Awards": [
    {
      "Honor/Award": "Nothing to see for now",
      "Issued By": "",
    },
  ],
};
