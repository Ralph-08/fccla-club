const fundRaisers = [
    { title: 'Buy Christmas for a family in our community', for: 'Goal is to raise $500 dollars', goalDate: 'December 5th 2023' },
    { title: 'Chicken Biscuit Sale', for: 'FCCLA funds', goalDate: 'January 19, 2023' },
    { title: 'Bundt Cake Sale', for: 'FCCLA funds', goalDate: 'February 14, 2023' },
    { title: 'Chicken Biscuit Sale', for: 'FCCLA funds', goalDate: 'March 1, 2023' },
    { title: 'Bundt Cake Sale', for: 'FCCLA funds', goalDate: 'March 22, 2023' },
    { title: 'Bundt Cake Sale', for: 'FCCLA funds', goalDate: 'April 26, 2023' },
    { title: 'Bundt Cake Sale', for: 'FCCLA funds', goalDate: 'May 17, 2023' },
];

const FundRaiserCard = (title, forDes, goalDate) => {
    return `
    <div class="card">
        <h4 class="card__header">${title}</h4>
        <ul class="card__list">
            <li class="card__item"><span class="card__item--bold">For: </span>${forDes}</li>
            <li class="card__item"><span class="card__item--bold">Goal Date: </span>${goalDate}</li>
        </ul>
    </div>  
    `;
};

const FundRaisersPage = () => {
    return `
    ${FundRaiserCard(fundRaisers[0].title, fundRaisers[0].for, fundRaisers[0].goalDate)}
    ${FundRaiserCard(fundRaisers[1].title, fundRaisers[1].for, fundRaisers[1].goalDate)}
    ${FundRaiserCard(fundRaisers[2].title, fundRaisers[2].for, fundRaisers[2].goalDate)}
    ${FundRaiserCard(fundRaisers[3].title, fundRaisers[3].for, fundRaisers[3].goalDate)}
    ${FundRaiserCard(fundRaisers[4].title, fundRaisers[4].for, fundRaisers[4].goalDate)}
    ${FundRaiserCard(fundRaisers[5].title, fundRaisers[5].for, fundRaisers[5].goalDate)}
    ${FundRaiserCard(fundRaisers[6].title, fundRaisers[6].for, fundRaisers[6].goalDate)}
    `;
};

const fundRaisersContainer = document.querySelector('.main');
fundRaisersContainer.innerHTML = FundRaisersPage();