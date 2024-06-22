const images = [ /* Your existing images array */ ];

function createCalendar() {
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = '';

    const dates = images.map(image => {
        const [year, month, day] = image.src.split('_')[0].split('-').map(Number);
        return { year, month, day, ...image };
    });

    dates.sort((a, b) => new Date(a.year, a.month - 1, a.day) - new Date(b.year, b.month - 1, b.day));

    dates.forEach(date => {
        const dateDiv = document.createElement('div');
        dateDiv.className = 'calendar-date';
        dateDiv.innerHTML = `
            <img src="images/${date.src}" alt="${date.comment}" class="calendar-image">
            <p>${date.comment}</p>
            <p>${date.month}/${date.day}/${date.year}</p>
        `;
        calendarDiv.appendChild(dateDiv);
    });
}

window.onload = createCalendar;
