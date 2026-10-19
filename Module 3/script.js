
const plannerForm = document.getElementById("plannerForm");
const goalInput = document.getElementById("goal");
const daysInput = document.getElementById("days");
const results = document.getElementById("results");
const planTitle = document.getElementById("planTitle");
const taskList = document.getElementById("taskList");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const progressMessage = document.getElementById("progressMessage");
const resetBtn = document.getElementById("resetBtn");

// Sample task plans stored inside the application.
const plans = {
    study: [
        "List the topics you need to study.",
        "Study the first important topic.",
        "Review your notes and write key points.",
        "Study the next topic and practise examples.",
        "Attempt practice questions without notes.",
        "Revise the difficult topics.",
        "Take a short mock test and review mistakes."
    ],

    fitness: [
        "Choose a realistic fitness goal.",
        "Plan simple, balanced meals for the day.",
        "Do a comfortable beginner-friendly workout.",
        "Take a short walk and drink enough water.",
        "Practise gentle stretching or suitable movement.",
        "Review your activity and rest properly.",
        "Check your progress and plan your next week."
    ],

    project: [
        "Write down the problem your project solves.",
        "List the main features your project needs.",
        "Sketch the page layout or user interface.",
        "Build the basic page structure.",
        "Add the main functionality and interactions.",
        "Test the project and fix any errors.",
        "Prepare screenshots and a short demonstration."
    ],

    general: [
        "Write down your goal and desired result.",
        "Break the goal into smaller tasks.",
        "Complete the easiest important task.",
        "Work on the next task for 25 minutes.",
        "Review what is finished and what remains.",
        "Finish an important unfinished task.",
        "Review your results and plan your next steps."
    ]
};

// Choose a sample plan based on words in the goal.
function choosePlan(goal) {
    const text = goal.toLowerCase();

    if (
        text.includes("exam") ||
        text.includes("study") ||
        text.includes("java") ||
        text.includes("learn") ||
        text.includes("revision")
    ) {
        return plans.study;
    }

    if (
        text.includes("fitness") ||
        text.includes("workout") ||
        text.includes("exercise") ||
        text.includes("health")
    ) {
        return plans.fitness;
    }

    if (
        text.includes("project") ||
        text.includes("website") ||
        text.includes("app") ||
        text.includes("application")
    ) {
        return plans.project;
    }

    return plans.general;
}

// Create a plan when the form is submitted.
plannerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const goal = goalInput.value.trim();
    const days = Number(daysInput.value);

    if (goal === "") {
        alert("Please enter your goal first!");
        return;
    }

    const selectedPlan = choosePlan(goal);

    planTitle.textContent = goal;
    taskList.replaceChildren();

    // Divide the tasks across the selected number of days.
    const tasksPerDay = Math.ceil(selectedPlan.length / days);

    for (let day = 0; day < days; day++) {
        const card = document.createElement("div");
        card.className = "day-card";

        const heading = document.createElement("h3");
        heading.className = "day-title";
        heading.textContent = "Day " + (day + 1);

        card.appendChild(heading);

        const start = day * tasksPerDay;
        const end = Math.min(start + tasksPerDay, selectedPlan.length);

        for (let i = start; i < end; i++) {
            const label = document.createElement("label");
            label.className = "task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const taskText = document.createElement("span");
            taskText.textContent = selectedPlan[i];

            checkbox.addEventListener("change", updateProgress);

            label.appendChild(checkbox);
            label.appendChild(taskText);
            card.appendChild(label);
        }

        taskList.appendChild(card);
    }

    results.hidden = false;
    updateProgress();

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Update the progress bar when a task is checked.
function updateProgress() {
    const checkboxes = taskList.querySelectorAll(
        'input[type="checkbox"]'
    );

    const total = checkboxes.length;
    let completed = 0;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    progressText.textContent = percentage + "%";
    progressBar.style.width = percentage + "%";

    if (percentage === 100) {
        progressMessage.textContent =
            "Amazing! You completed every task. Celebrate your progress!";
    } else if (percentage > 0) {
        progressMessage.textContent =
            completed + " of " + total + " tasks completed. Keep going!";
    } else {
        progressMessage.textContent =
            "Every small step counts. Start with one task.";
    }
}

// Reset the page to create another plan.
resetBtn.addEventListener("click", function() {
    plannerForm.reset();
    results.hidden = true;
    goalInput.focus();
});
