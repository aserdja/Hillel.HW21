document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const collapsibleHeaders = document.querySelectorAll('.collapsible');
collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const contentId = header.id.replace('-header', '-content');
        const content = document.getElementById(contentId);
        if (content) {
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
        }
    });
});

document.getElementById('feedback-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const result = `
        <p><b>Ім'я:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Повідомлення:</b> ${message}</p>
    `;

    document.getElementById('feedback-result').innerHTML = result;
});