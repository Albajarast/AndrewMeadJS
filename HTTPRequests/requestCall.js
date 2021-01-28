// --------- //
// Challenge //
// --------- //
// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

const getCountryDetails = (countryCode, callback) => {
  const req = new XMLHttpRequest()

  req.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.alpha2Code === countryCode)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback('There has been an error', undefined)
    }
  })

  req.open('GET', 'http://restcountries.eu/rest/v2/all')
  req.send()
}

const getCountries = (callback) => {
  const req = new XMLHttpRequest()

  req.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const countries = data.map((country) => {
        const countryData = {}
        countryData.name = country.name
        countryData.code = country.alpha2Code
        return countryData
      })
      callback(undefined, countries)
    } else if (e.target.readyState === 4) {
      callback('There has been an error', undefined)
    }
  })

  req.open('GET', 'http://restcountries.eu/rest/v2/all')
  req.send()
}
