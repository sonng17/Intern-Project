// Lấy tham chiếu đến phần tử div để hiển thị dữ liệu
const dataContainer = document.getElementById('data-container');

// Gửi yêu cầu API bằng JavaScript Fetch API
fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    .then(response => response.json())
    .then(data => {
        // Xử lý dữ liệu API ở đây và cập nhật nội dung trang HTML
        const cases = data.cases;
        const deaths = data.deaths;
        const recovered = data.recovered;

        let casesKeys = Object.keys(cases); 
        let casesLastKey = casesKeys[casesKeys.length - 1];

        let deathsKeys = Object.keys(deaths); 
        let deathLastKey = deathsKeys[deathsKeys.length - 1];

        let recoveredKeys = Object.keys(recovered); 
        let recoveredLastKey= recoveredKeys[recoveredKeys.length - 1];

        const dataHTML = `
            <h2>Cases: ${cases[casesLastKey]}</h2>
            <h2>Deaths: ${deaths[deathLastKey]}</h2>
            <h2>Recovered: ${recovered[recoveredLastKey]}</h2>
        `;

        dataContainer.innerHTML = dataHTML;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
