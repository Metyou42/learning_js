fetch('http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=831ab4d40cde84662598e242c9937dce&units=metric')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg';
        document.querySelector('.decription').textContent = data.weather[0].description;
    })
    .catch(function () {

    });