const events = [
    {monthName: 'OCT', monthDay: '11', eventTitle: 'Fall Leadership Rally | 2023', location: 'Georgia National Fairgrounds Perry, Georgia' },
    {monthName: 'NOV', monthDay: '4', eventTitle: 'Fall Festival at Honey Ridge Farms | 2023', location: 'Guyton, Georgia' },
    {monthName: 'NOV', monthDay: '14-16', eventTitle: 'Fall Leadership Conference | 2023', location: 'Camp John Hope Fort Valley' },
    {monthName: 'MAR', monthDay: '17-19', eventTitle: 'State Leadership Conference | 2024', location: 'Athens, Georgia' },
    {monthName: 'JUN 29 -', monthDay: 'JUL 3', eventTitle: 'National Leadership Conference | 2024', location: 'Seattle, Washington' },
];

const EventCard = (monthName, monthDay, eventTitle, location) => {
return `
    <li class="event__card">
        <div class="event__date">
            <p class="event__date--month">${monthName}</p>
            <h3 class="event__date--date">${monthDay}</h3>
        </div>
        <div class="event__info">
            <p class="event__name">${eventTitle}</p>
            <p class="event__location">${location}</p>
        </div>
    </li>
`;
};

const EventsPage = () => {
    return `
        ${EventCard(events[0].monthName, events[0].monthDay, events[0].eventTitle, events[0].location,)}
        ${EventCard(events[1].monthName, events[1].monthDay, events[1].eventTitle, events[1].location,)}
        ${EventCard(events[2].monthName, events[2].monthDay, events[2].eventTitle, events[2].location,)}
        ${EventCard(events[3].monthName, events[3].monthDay, events[3].eventTitle, events[3].location,)}
        ${EventCard(events[4].monthName, events[4].monthDay, events[4].eventTitle, events[4].location,)}
    `;
}

const eventContainer = document.querySelector('.event');
eventContainer.innerHTML = EventsPage();

console.log('hello')