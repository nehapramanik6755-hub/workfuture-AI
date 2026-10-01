// ================= SHOW APPLICATION =================

function showApp() {

    document.querySelector(".navbar").style.display = "none";
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".feature-strip").style.display = "none";

    document.getElementById("app").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    createChart();
}


// ================= NAVIGATION =================

function showPage(pageId, button) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    document.getElementById(pageId).classList.add("active-page");

    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    const titles = {
        dashboard: "Dashboard",
        task: "Task Automation Analyzer",
        skill: "Skill Analyzer",
        reskill: "Reskill & Upskill Engine",
        team: "Human + AI Team Planner",
        reports: "Future Workforce Dashboard",
        career: "AI Career Assistant"
    };

    document.getElementById("pageTitle").innerText =
        titles[pageId];

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= SCROLL =================

function scrollFeatures() {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}


// ================= TASK ANALYZER =================

function analyzeTasks() {

    const input = document.getElementById("taskInput").value.trim();

    if (!input) {
        alert("Please enter some workplace tasks.");
        return;
    }

    const tasks = input
        .split("\n")
        .filter(task => task.trim() !== "");

    let auto = 0;
    let human = 0;
    let hybrid = 0;

    tasks.forEach(task => {

        const text = task.toLowerCase();

        if (
            text.includes("data entry") ||
            text.includes("email") ||
            text.includes("report generation") ||
            text.includes("copy") ||
            text.includes("schedule")
        ) {
            auto++;
        }

        else if (
            text.includes("decision") ||
            text.includes("creative") ||
            text.includes("strategy") ||
            text.includes("leadership")
        ) {
            human++;
        }

        else {
            hybrid++;
        }

    });

    document.getElementById("humanCount").innerText = human;
    document.getElementById("autoCount").innerText = auto;
    document.getElementById("hybridCount").innerText = hybrid;

    const saved = Math.max(2, auto * 3 + hybrid * 2);

    document.getElementById("timeSaved").innerText =
        saved + " hrs/week";

    document.getElementById("taskResult").classList.remove("hidden");
}


// ================= SKILL ANALYZER =================

function analyzeSkills() {

    const input = document.getElementById("skillInput").value.trim();

    if (!input) {
        alert("Please enter your skills.");
        return;
    }

    const skills = input
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");

    const container =
        document.getElementById("currentSkills");

    container.innerHTML = "";

    skills.forEach(skill => {

        const span = document.createElement("span");

        span.innerHTML = "✓ " + skill;

        container.appendChild(span);

    });

    document.getElementById("skillResult")
        .classList.remove("hidden");
}


// ================= RESKILL =================

function generateRoadmap() {

    const role =
        document.getElementById("roleSelect").value;

    document.getElementById("roadmap")
        .classList.remove("hidden");

    const target =
        document.querySelector(".career-target h2");

    if (role === "Software Developer") {

        target.innerText = "AI Software Engineer";

    } else if (role === "Business Analyst") {

        target.innerText = "AI Business Analyst";

    } else if (role === "Marketing Executive") {

        target.innerText = "AI Marketing Specialist";

    } else {

        target.innerText = "Data Analyst";

    }
}


// ================= TEAM PLANNER =================

function planTeam() {

    const employees =
        parseInt(document.getElementById("employees").value);

    const tasks =
        parseInt(document.getElementById("tasks").value);

    if (employees <= 0 || tasks <= 0) {

        alert("Enter valid numbers.");

        return;
    }

    const perPerson =
        Math.ceil(tasks / (employees + 1));

    document.querySelectorAll(".team-member strong")
        .forEach(item => {

            item.innerText =
                perPerson + " tasks";

        });

    alert(
        "AI Team Plan Generated!\n\n" +
        "Employees: " + employees +
        "\nTasks: " + tasks +
        "\nAI Agent included: Yes"
    );
}


// ================= CHART =================

let automationChart;

function createChart() {

    if (automationChart) {
        return;
    }

    const canvas =
        document.getElementById("automationChart");

    if (!canvas) {
        return;
    }

    automationChart = new Chart(canvas, {

        type: "doughnut",

        data: {

            labels: [
                "Automatable",
                "Human Only",
                "Human + AI"
            ],

            datasets: [{

                data: [68, 20, 12],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "bottom",
                    labels: {
                        font: {
                            size: 11
                        }
                    }
                }

            }

        }

    });
}


// ================= AUTH =================

function openAuth(type) {

    document.getElementById("authModal")
        .classList.remove("hidden");

    if (type === "register") {

        document.getElementById("loginForm")
            .classList.add("hidden");

        document.getElementById("registerForm")
            .classList.remove("hidden");

    } else {

        document.getElementById("registerForm")
            .classList.add("hidden");

        document.getElementById("loginForm")
            .classList.remove("hidden");

    }
}


function closeAuth() {

    document.getElementById("authModal")
        .classList.add("hidden");
}


function loginUser() {

    alert("Login successful! Welcome to WorkFuture AI.");

    closeAuth();

    showApp();
}


function registerUser() {

    alert(
        "Account created successfully!\n" +
        "Welcome to WorkFuture AI."
    );

    openAuth("login");
}


// ================= INITIAL LOAD =================

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "WorkFuture AI Frontend Loaded Successfully 🚀"
    );

});