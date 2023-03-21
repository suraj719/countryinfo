const container = document.querySelector('.container')
const countrydiv = document.querySelector('.countrydiv')
const countrydetails = document.querySelector('.countrydetails')
const cnameinp = document.querySelector('#cnameinp')
const searchbtn = document.querySelector('.searchbtn')
const alc = document.querySelector('.alc')
searchbtn.addEventListener('click', (val) => {
    let countryname = cnameinp.value
    const url=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`
    fetch(url)
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        countrydetails.innerHTML = `
        <img src=${data[0].flags.png}>
        <h2>country name: ${data[0].name.common}</h2>
        <h2>capital: ${data[0].capital}</h2>
        <h2>continent: ${data[0].continents[0]}</h2>
        <h2>currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</h2>
        <h2>population: ${data[0].population}</h2>
        <h2>time zone: ${data[0].timezones[0]}</h2>
        <h2> <a href="${data[0].maps.googleMaps}">wanna go there ??</a></h2>
        `
        container.style= "width:400px;height:720px;margin-top:10px;"
        countrydiv.style="margin:0;padding:30px 0 30px 50px;"
        alc.style = "margin-left:30px;margin-bottom:30px;"
    })
})