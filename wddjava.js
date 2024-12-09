// Task 1: Change Text
function change() {
    const task1 = document.getElementById("task1");
    task1.textContent = "Thank you for reading";
    task1.style.color = "green";
    task1.style.fontWeight = "bold";
}

// Task 2: Hide and Unhide Content
function showHide() {
    const hideTask = document.getElementById("hideTask");
    if (hideTask.style.display === "none" || hideTask.style.display === "") {
        hideTask.style.display = "block";
    } else {
        hideTask.style.display = "none";
    }
}

// Task 3: Extract Data from Array
function arrayTwo() {
    // Array containing 16 other Sustainable Development Goals
    const array = [
        "No Poverty",
        "Zero Hunger",
        "Good Health and Well-being",
        "Gender Equality",
        "Clean Water and Sanitation",
        "Affordable and Clean Energy",
        "Decent Work and Economic Growth",
        "Industry, Innovation, and Infrastructure",
        "Reduced Inequalities",
        "Sustainable Cities and Communities",
        "Responsible Consumption and Production",
        "Climate Action",
        "Life Below Water",
        "Life on Land",
        "Peace, Justice, and Strong Institutions",
        "Partnerships for the Goals"
    ];

    // Targeting the paragraph with id "task3"
    const task3 = document.getElementById("task3");

    // Extracting and displaying the first two SDGs from the array
    const output = `Extracted Items: ${array[0]},${array[1]},${array[2]},${array[3]},${array[4]},${array[5]},${array[6]}
	${array[7]},${array[8]},${array[7]},${array[8]},${array[9]},${array[10]},${array[11]},${array[12]},${array[13]},${array[14]},${array[15]};`
    
    // Updating the content of the paragraph
    task3.textContent = output;

    // Adding some styling to the output text
    task3.style.color = "blue";
    task3.style.fontStyle = "italic";
}

