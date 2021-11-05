let skills = [
    {
        name: "HTML",
        rating: 7,
        imgSrc: "assets/imgs/skills/html.png",
    },
    {
        name: "CSS",
        rating: 6,
        imgSrc: "assets/imgs/skills/css.png",
    },
    {
        name: "Bootstrap",
        rating: 4,
        imgSrc: "assets/imgs/skills/bootstrap.png",
    },
    {
        name: "Mongo DB",
        rating: 5,
        imgSrc: "assets/imgs/skills/mongodb.png",
    },
    {
        name: "SQL",
        rating: 3,
        imgSrc: "assets/imgs/skills/mongodb.png",
    },
    {
        name: "Express + Node JS",
        rating: 5,
        imgSrc: "assets/imgs/skills/express_node.png",
    },
    {
        name: "React JS",
        rating: 7,
        imgSrc: "assets/imgs/skills/react.png",
    },
    {
        name: "PHP",
        rating: 4,
        imgSrc: "assets/imgs/skills/php.svg",
    },
    {
        name: "Laravel",
        rating: 3,
        imgSrc: "assets/imgs/skills/laravel.svg",
    },
];
let finSkills = [
    {
        name: "Budgeting",
        rating: 8,
    },
    {
        name: "Forecast",
        rating: 8,
    },
    {
        name: "Financial Modeling",
        rating: 7,
    },
];
let otherSkills = [
    {
        name: "MS Excel",
        rating: 8,
    },
    {
        name: "SAP",
        rating: 5,
    },
    {
        name: "Canva",
        rating: 7,
    },
    {
        name: "Proofreading",
        rating: 7,
    },
    {
        name: "Editorial Writing",
        rating: 8,
    },
    {
        name: "Feature Writing",
        rating: 8,
    },
]

let techSkillsContent = document.querySelector("#skills .tech-skills-body");
let finSkillsContent = document.querySelector("#skills .fin-skills-body");
let otherSkillsContent = document.querySelector("#skills .other-skills-body");

skills.forEach(techSkill => {
    let skillsBox = document.createElement("div");
    skillsBox.classList.add("other-skills-box");
        let innerBox = document.createElement("div");
            let skillName = document.createElement("div");
            skillName.textContent = techSkill.name;
            let skillRating = document.createElement("div");
            skillRating.classList.add("rating-holder");
            for (let x = 1; x <= 10; x++) {
                let rateBox = document.createElement("div");
                rateBox.classList.add("rate-box");
                if (x <= techSkill.rating) {
                    rateBox.classList.add("skill-green");
                };
                skillRating.append(rateBox);
            };
        innerBox.append(skillName, skillRating);
    skillsBox.append(innerBox);
    techSkillsContent.append(skillsBox);
});

finSkills.forEach(finSkill => {
    let skillsBox = document.createElement("div");
    skillsBox.classList.add("other-skills-box");
        let innerBox = document.createElement("div");
            let skillName = document.createElement("div");
            skillName.textContent = finSkill.name;
            let skillRating = document.createElement("div");
            skillRating.classList.add("rating-holder");
            for (let x = 1; x <= 10; x++) {
                let rateBox = document.createElement("div");
                rateBox.classList.add("rate-box");
                if (x <= finSkill.rating) {
                    rateBox.classList.add("skill-green");
                };
                skillRating.append(rateBox);
            };
        innerBox.append(skillName, skillRating);
    skillsBox.append(innerBox);
    finSkillsContent.append(skillsBox);
});

otherSkills.forEach(otherSkill => {
    let skillsBox = document.createElement("div");
    skillsBox.classList.add("other-skills-box");
        let innerBox = document.createElement("div");
            let skillName = document.createElement("div");
            skillName.textContent = otherSkill.name;
            let skillRating = document.createElement("div");
            skillRating.classList.add("rating-holder");
            for (let x = 1; x <= 10; x++) {
                let rateBox = document.createElement("div");
                rateBox.classList.add("rate-box");
                if (x <= otherSkill.rating) {
                    rateBox.classList.add("skill-green");
                };
                skillRating.append(rateBox);
            };
        innerBox.append(skillName, skillRating);
    skillsBox.append(innerBox);
    otherSkillsContent.append(skillsBox);
});