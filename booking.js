const form = document.getElementById('booking-form');
const confirmation = document.getElementById('confirmation');
const bookedSlots = new Set();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const mentor = document.getElementById('mentor').value;
    const slot = document.getElementById('slot').value;
    const bookingKey = `${mentor}-${slot}`;

    if (bookedSlots.has(bookingKey)) {
        confirmation.innerHTML = `<p class="error">This slot is already booked!</p>`;
    } else {
        bookedSlots.add(bookingKey);
        confirmation.innerHTML = `<p class="success">Your session with ${mentor} at ${slot} is confirmed.</p>`;
    }
});
