let projects = [
    {
        projImage: "assets/imgs/projects/proj1.png",
        projName: "Heroes in Action",
        projDesc: "Mobile-Responsive Static Website",
        concept: "Not all are heroes but anyone can be a hero. This site aims to collect stories to inspire viewers to be their own version of heroes.",
        technicalities: [
            "Flexbox and positioning",
            "CSS animation",
        ],
        linkSrc: "https://haidee-tan.github.io/heroes-in-action/"
    },
    {
        projImage:  "assets/imgs/projects/proj2.png",
        projName: "Maria's Pizzeria",
        projDesc: "Vanilla Javascript Game",
        concept: "Maria needs help! Serve customers coming to her pizzeria by baking the pizza that they ordered within the shift time limit.",
        technicalities: [
            "JS DOM Manipulation",
        ],
        linkSrc: "https://haidee-tan.github.io/mariaspizzeria/"
    },
    {
        projImage: "assets/imgs/projects/proj3.png",
        projName: "To-Do App",
        projDesc: "React JS Application",
        concept: "Can't track which tasks you need to do for the day? To-Do App to the rescue!",
        technicalities: [
            "Two-way binding of input and values",
            "Conditional rendering",
            "React-Redux",
        ],
        linkSrc: "http://haidee-tan.github.io/to-do-app"
    },
    {
        projImage:  "assets/imgs/projects/proj4.png",
        projName: "Munch Time!",
        projDesc: "React JS Application",
        concept: "Simple restaurant app that allows customers to add to their cart their orders, plus, they can create their own pizza! Yum yum yum. App also include admin CRUD functionalities on the menu items.",
        technicalities: [
            "Two-way binding of input and values",
            "Conditional rendering",
            "React-Redux",
            "Utilized Lodash and UUID packages"
        ],
        linkSrc: "http://haidee-tan.github.io/munch-time_resto-app"
    },
    {
        projImage:  "assets/imgs/projects/proj5.png",
        projName: "Pokedex",
        projDesc: "React JS Application",
        concept: "Fan of pokemon? Here's a website that features selected pokemons.",
        technicalities: [
            "React-Routing"
        ],
        linkSrc: "http://haidee-tan.github.io/pokedex"
    },
    {
        projImage:  "assets/imgs/projects/extra1.png",
        projName: "Financials Tracker",
        projDesc: "React JS Application",
        concept: "We all need to save! This app allows users to track their revenues and expenses and moves the savings to the following month's book.",
        technicalities: [
            "Two-way binding of input and values",
            "Conditional rendering",
            "React-Redux",
        ],
        linkSrc: "https://haidee-tan.github.io/financials-tracker"
    },
    {
        projImage:  "assets/imgs/projects/extra2.png",
        projName: "Tootie Fruity",
        projDesc: "React JS Application",
        concept: "It's harvest time! Help the owner of Tootie Fruity Store to serve the fruits that his customers are ordering.",
        technicalities: [
            "Conditional rendering",
            "setInterval in React JS setup",
        ],
        linkSrc: "https://haidee-tan.github.io/tootie-fruity-game"
    },
    {
        projImage:  "assets/imgs/projects/proj6.png",
        projName: "Coin Retriever",
        projDesc: "MERN Stack Website",
        concept: "Asking for refund can be tedious and soooo long (plus, frustrating?). Coin Retriever here to help you retrieve your precious coins!",
        technicalities: [
            "MongoDB, Express JS, React JS, and Node JS",
            "React hooks: useEffect, useRef, useState",
            "React-Redux",
            "Lodash, UUID, Axios packages",
            "Password hashing",
            "JSON Web Token",
            "Mongoose Schema"
        ],
        linkSrc: "https://haidee-tan.github.io/coin-retriever"
    },
];

const projContent = document.querySelector("#projects .body");

projects.forEach(item => {

    let project = document.createElement("div");
    project.classList.add("project");
    
        let projLink = document.createElement("a");
        projLink.href = item.linkSrc;
        projLink.target = "_blank";
    
        let innerBox = document.createElement("div");
    
            let imgBox = document.createElement("div");
                imgBox.classList.add("proj-img-box")
                let projImg = document.createElement("img");
                projImg.src = item.projImage; 
                projImg.alt = item.projName;
            imgBox.append(projImg);
            
            let projBody = document.createElement("div");

                let projName = document.createElement("h3");
                projName.textContent = item.projName;

                let projDesc = document.createElement("div");
                projDesc.classList.add("proj-short-desc");
                projDesc.textContent = item.projDesc;

                let projTexts = document.createElement("div");
                projTexts.classList.add("proj-textbox");

                    let projConcept = document.createElement("div");
                        let conceptBody = document.createElement("p");
                        conceptBody.textContent = item.concept;
                    projConcept.append(conceptBody);

                    let projTech = document.createElement("div");
                        let techHeader = document.createElement("h4");
                        techHeader.textContent = "Technicalities";
                        let techBody = document.createElement("ul");
                        item.technicalities.forEach(detail => {
                            let techDetail = document.createElement("li");
                            techDetail.textContent = detail;
                            techBody.append(techDetail);
                        });
                    projTech.append(techHeader,techBody);

                projTexts.append(projConcept, projTech);

            projBody.append(projName, projDesc, projTexts);

        innerBox.append(imgBox, projBody);

    projLink.append(innerBox)
    project.append(projLink);
    projContent.append(project);

})