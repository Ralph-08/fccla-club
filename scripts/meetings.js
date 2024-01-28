const meetings = [
    {monthName: 'AUG', monthDay: '25', meetingTitle: 'Shirt Voting Meeting | 2023', location: 'During School | Room 615' },
    {monthName: 'SEP', monthDay: '29', meetingTitle: 'Projects Meeting | 2023', location: 'During School | Room 615' },
    {monthName: 'NOV', monthDay: '17', meetingTitle: 'Christmas Plan-out | 2023', location: 'During School | Room 615' },
    {monthName: 'DEC', monthDay: '13', meetingTitle: 'Christmas Party | 2023', location: 'After School | Room 615' },
    {monthName: 'JAN', monthDay: '31', meetingTitle: 'States Conference Meeting | 2024', location: 'During IF | Room 615' },
];

const meetingContainer = document.querySelector('.meeting');
meetingContainer.innerHTML = '';

const createMeetingCard = (obj) => {

    const meetingDate = document.createElement('div');
    meetingDate.classList.add('meeting__date');

    const meetingMonth = document.createElement('p');
    meetingMonth.classList.add('meeting__date--month');
    meetingMonth.innerHTML = obj.monthName;

    const meetingDay = document.createElement('h3');
    meetingDay.classList.add('meeting__date--day');
    meetingDay.innerHTML = obj.monthDay;

    meetingDate.appendChild(meetingMonth);
    meetingDate.appendChild(meetingDay);


    const meetingInfo = document.createElement('div');
    meetingInfo.classList.add('meeting__info');

    const meetingTitle = document.createElement('p');
    meetingTitle.classList.add('meeting__name');
    meetingTitle.innerHTML = obj.meetingTitle;

    const meetingLocation = document.createElement('p');
    meetingLocation.classList.add('meeting__location');
    meetingLocation.innerHTML = obj.location;

    meetingInfo.appendChild(meetingTitle);
    meetingInfo.appendChild(meetingLocation);


    const meetingCard = document.createElement('li');
    meetingCard.classList.add('meeting__card');

    meetingCard.appendChild(meetingDate);
    meetingCard.appendChild(meetingInfo);

    meetingContainer.appendChild(meetingCard);
}

const iterateMeetings = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        createMeetingCard(meetings[i]);
    }
};

iterateMeetings(meetings);