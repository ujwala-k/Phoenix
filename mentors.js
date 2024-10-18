const mentorList = document.getElementById('mentor-list');

const mentors = [
    {
        name: "Dr. A. Kumar",
        expertise: "Machine Learning, Data Science",
        availableSlots: ["10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"]
    },
    {
        name: "Prof. B. Singh",
        expertise: "Software Development, Algorithms",
        availableSlots: ["11:00 AM - 12:00 PM", "3:00 PM - 4:00 PM"]
    }
];


mentors.forEach(mentor => {
    const mentorCard = `
        <div class="mentor-card">
            <h3>${mentor.name}</h3>
            <p><strong>Expertise:</strong> ${mentor.expertise}</p>
            <p><strong>Available Slots:</strong> ${mentor.availableSlots.join(', ')}</p>
        </div>`;
    mentorList.innerHTML += mentorCard;
});
