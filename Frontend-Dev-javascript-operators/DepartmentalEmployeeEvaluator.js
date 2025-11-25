// Q10: Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Loop through each department
departments.forEach(([deptName, score]) => {
    let verdict = "";

    if (score >= 90) {
        verdict = "Excellent";
    } 
    else if (score >= 75) {
        verdict = "Good";
    } 
    else if (score >= 60) {
        verdict = "Average";
    } 
    else {
        verdict = "Needs Improvement";
    }

    console.log(`${deptName}: ${verdict}`);
});
