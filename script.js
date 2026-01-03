function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showMessage() {
    alert("EXO 的音乐影响了一代人 ✨\nWe Are One!");
}
