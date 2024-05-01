function redirectToS() {
    const rollNumber = document.getElementById("rollNumber").value;
    // Check if the roll number is "19303"
    if (rollNumber === "1909261") {
        // Redirect to s.html
        window.location.href = "m.html";
    } else {
        // Redirect to m.html for invalid roll numbers
        window.location.href = "s.html";
    }
}
