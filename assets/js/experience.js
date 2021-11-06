let experience = [
    {
        role: "Resource Planning & Control Mgr",
        duration: "April 2013 to November 2021",
        company: "Manila Water Company, Inc.",
        tasks: [
            "Operating Expenses Modeler",
            "Budgeting Exercise Lead",
            "Process Improvement Driver",
            "Monitoring Systems Developer",
            "Bills Processing Team Lead",
        ]
    },
    {
        role: "Corporate Finance Analyst",
        duration: "June 2011 to March 2013",
        company: "Ramcar Food Group",
        tasks: [
            "Financial Modeler",
            "Performance Evaluator",
            "Trend Analyst",
            "Budget Exercise Lead",
            "Efficiency Lookout",
        ]
    },
];

let expContent = document.querySelector("#work-experience .body");

experience.forEach(item => {
    let expBox = document.createElement("div");
    expBox.classList.add("exp-body")
        let innerBox = document.createElement("div");
            let roleHeader = document.createElement("h3");
            roleHeader.classList.add("exp-header");
            roleHeader.textContent = item.role;
            let expHeader = document.createElement("div");
                let company = document.createElement("div");
                company.textContent = item.company;
                let duration = document.createElement("div");
                duration.textContent = item.duration;
            expHeader.append(company, duration);
            let roleTasks = document.createElement("ul");
            item.tasks.forEach(task => {
                let taskItem = document.createElement("li");
                taskItem.textContent = task;
                roleTasks.append(taskItem);
            })
        innerBox.append(roleHeader, expHeader, roleTasks);
    expBox.append(innerBox);
    expContent.append(expBox);
});