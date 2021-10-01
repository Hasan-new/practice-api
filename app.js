// fetch('https://restcountries.com/v2/all')
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach (country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h3 class="country-name">Country Name: ${country.name}</h3>
            <p>Capital: ${country.capital}</p>
            <button onclick="displayCountryDetail('${country.name}')">Detail</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const displayCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
    console.log(country);
    const countryDiv = documnet.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>${country.population}</p>
    <p>${country.area}</p>
    img src="${country.flag}">
    `
}

        // system no = 1;
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);