let skillList = [
  {
    skill: "HTML-100%",
    ariaValueNow: "100",
    progressBar: "width: 100%",
  },
  {
    skill: "CSS-90%",
    ariaValueNow: "90",
    progressBar: "width: 90%",
  },
  {
    skill: "JavaScript-75%",
    ariaValuenow: "75",
    progressBar: "width: 75%",
  },
  {
    skill: "React-70%",
    ariaValueNow: "70",
    progressBar: "width: 70%",
  },
  {
    skill: "Figma-80%",
    ariaValueNow: "80",
    progressBar: "width: 80%",
  },
];

let skills = document.querySelector(".skills-content");
let fragmentSkills = "";

skillList.map((item) => {
  fragmentSkills += `<div Loading = "lazy" class="progress">
    <span class="skill">${item.skill}</span>
    <div class="progress-bar-wrap">
      <div
        Loading = "lazy"
        class="progress-bar"
        role="progressbar"
        aria-valuenow="${item.ariaValueNow}"
        aria-valuemin="0"
        aria-valuemax="100"
        style="${item.progressBar}"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      ></div>
    </div>
  </div>`;
});

skills.innerHTML = fragmentSkills;
