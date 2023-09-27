//----------------- Section 1----------------------------------
// Selector
const totalCases = document.querySelector('.cases-no.infected');
const totalRecovered = document.querySelector('.cases-no.recovered');
const totalDeaths = document.querySelector('.cases-no.deaths');
const activeCases = document.querySelector('.cases-no.current_cases');
//Call API
axios.get('https://covid-api.com/api/reports/total')
  .then(function (response) {
    const confirmed = response.data.data.confirmed;
    const deaths = response.data.data.deaths;
    const recovered = response.data.data.recovered;
    const active = response.data.data.active;

    totalCases.innerHTML = `${confirmed}`;
    totalRecovered.innerHTML = `${recovered}`;
    totalDeaths.innerHTML =`${deaths}`;
    activeCases.innerHTML =`${active}`;
  })
  .catch(function (error) {
    console.error('Lỗi khi gửi yêu cầu:', error);
  });

//----------------- Section 2----------------------------------
//Item 1
//Item 1 Selector
const item1_1 = document.querySelector('.item-1.section2-confirmed')
const item1_2 = document.querySelector('.item-1.section2-todayCases')
const item1_3 = document.querySelector('.item-1.section2-recovered')
const item1_4 = document.querySelector('.item-1.section2-todayDeaths')
const item1_5 = document.querySelector('.item-1.section2-deaths')
//Item 1 API
axios.get('https://covid-api.com/api/reports?iso=USA')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item1_1.innerHTML = `${confirmed}`;
    item1_2.innerHTML = `${active_diff}`;
    item1_3.innerHTML = `${recovered}`;
    item1_4.innerHTML = `${deaths_diff}`;
    item1_5.innerHTML = `${deaths}`;
  }) 

// Item 2
// Item 2 Selector
const item2_1 = document.querySelector('.item-2.section2-confirmed')
const item2_2 = document.querySelector('.item-2.section2-todayCases')
const item2_3 = document.querySelector('.item-2.section2-recovered')
const item2_4 = document.querySelector('.item-2.section2-todayDeaths')
const item2_5 = document.querySelector('.item-2.section2-deaths')
// Item 2 API
axios.get('https://covid-api.com/api/reports?date=2023-03-08&region_name=Italy')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item2_1.innerHTML = `${confirmed}`;
    item2_2.innerHTML = `${active_diff}`;
    item2_3.innerHTML = `${recovered}`;
    item2_4.innerHTML = `${deaths_diff}`;
    item2_5.innerHTML = `${deaths}`;
  }) 

// Item 3
// Item 3 Selector
const item3_1 = document.querySelector('.item-3.section2-confirmed')
const item3_2 = document.querySelector('.item-3.section2-todayCases')
const item3_3 = document.querySelector('.item-3.section2-recovered')
const item3_4 = document.querySelector('.item-3.section2-todayDeaths')
const item3_5 = document.querySelector('.item-3.section2-deaths')
// Item 3 API
axios.get('https://covid-api.com/api/reports?date=2023-03-08&region_name=China')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item3_1.innerHTML = `${confirmed}`;
    item3_2.innerHTML = `${active_diff}`;
    item3_3.innerHTML = `${recovered}`;
    item3_4.innerHTML = `${deaths_diff}`;
    item3_5.innerHTML = `${deaths}`;
  }) 

// Item 4
// Item 4 Selector
const item4_1 = document.querySelector('.item-4.section2-confirmed')
const item4_2 = document.querySelector('.item-4.section2-todayCases')
const item4_3 = document.querySelector('.item-4.section2-recovered')
const item4_4 = document.querySelector('.item-4.section2-todayDeaths')
const item4_5 = document.querySelector('.item-4.section2-deaths')
// Item 4 API
axios.get('https://covid-api.com/api/reports?date=2023-03-08&region_name=Spain')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item4_1.innerHTML = `${confirmed}`;
    item4_2.innerHTML = `${active_diff}`;
    item4_3.innerHTML = `${recovered}`;
    item4_4.innerHTML = `${deaths_diff}`;
    item4_5.innerHTML = `${deaths}`;
  }) 
// Item 5
// Item 5 Selector
const item5_1 = document.querySelector('.item-5.section2-confirmed')
const item5_2 = document.querySelector('.item-5.section2-todayCases')
const item5_3 = document.querySelector('.item-5.section2-recovered')
const item5_4 = document.querySelector('.item-5.section2-todayDeaths')
const item5_5 = document.querySelector('.item-5.section2-deaths')
// Item 5 API
axios.get('https://covid-api.com/api/reports?date=2023-03-08&region_name=Germany')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item5_1.innerHTML = `${confirmed}`;
    item5_2.innerHTML = `${active_diff}`;
    item5_3.innerHTML = `${recovered}`;
    item5_4.innerHTML = `${deaths_diff}`;
    item5_5.innerHTML = `${deaths}`;
  }) 

// Item 6
// Item 6 Selector

const item6_1 = document.querySelector('.item-6.section2-confirmed')
const item6_2 = document.querySelector('.item-6.section2-todayCases')
const item6_3 = document.querySelector('.item-6.section2-recovered')
const item6_4 = document.querySelector('.item-6.section2-todayDeaths')
const item6_5 = document.querySelector('.item-6.section2-deaths')
// Item 6 API
axios.get('https://covid-api.com/api/reports?date=2023-03-08&region_name=Iran')
  .then(response => {
    const confirmed = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.confirmed, 0);
    const active_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.active_diff, 0);
    const recovered = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.recovered, 0);
    const deaths_diff = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths_diff, 0);
    const deaths = response.data.data.reduce((accumulator, currentValue) => accumulator + currentValue.deaths, 0);

    item6_1.innerHTML = `${confirmed}`;
    item6_2.innerHTML = `${active_diff}`;
    item6_3.innerHTML = `${recovered}`;
    item6_4.innerHTML = `${deaths_diff}`;
    item6_5.innerHTML = `${deaths}`;
  }) 

