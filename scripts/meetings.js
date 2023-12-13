const meetings = [
    {monthName: 'MAR', monthDay: '17-19', meetingTitle: 'State Leadership Conference', location: 'Athens, Georgia' },
    {monthName: 'OCT', monthDay: '11', meetingTitle: 'Fall Leadership Rally', location: 'Georgia National Fairgrounds Perry, Georgia' },
    {monthName: 'NOV', monthDay: '4', meetingTitle: 'Fall Festival at Honey Ridge Farms', location: 'Guyton, Georgia' },
    {monthName: 'NOV', monthDay: '14-16', meetingTitle: 'Fall Leadership Conference', location: 'Camp John Hope Fort Valley' },
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