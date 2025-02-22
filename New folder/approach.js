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