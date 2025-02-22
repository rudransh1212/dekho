function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

// Close sidebar when clicking outside of the sidebar or hamburger button
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    
    // Check if the click is outside the sidebar and the hamburger button
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove("open");
    }
});
const contentDiv = document.querySelector('.content');
const text = "Master Course On Acing Divya . . .";
const words = text.split(" ");

function displayWords() {
    // Clear the contentDiv to start fresh
    contentDiv.innerHTML = '';

    // Wrap and display each word with animation
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + " ";
        span.style.animation = `fadeIn 0.5s ease ${index * 0.5}s forwards`;
        contentDiv.appendChild(span);
    });

    // Set timeout to clear the line after the last word
    setTimeout(() => {
        contentDiv.innerHTML = ''; // Clear the line
    }, words.length * 500); // Adjust to match the total animation duration
}

// Repeat the process infinitely
setInterval(displayWords, words.length * 500 + 500);

// Optional CSS styles for animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

document.getElementById('startItem').addEventListener('click', function () {
    const hiddenDiv = document.getElementById('hiddenDiv');
    hiddenDiv.classList.toggle('show');
});