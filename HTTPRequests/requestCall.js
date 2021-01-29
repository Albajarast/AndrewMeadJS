// --------- //
// Challenge //
// --------- //
// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

// Using XMLHttpRequest()

// const getCountryDetails = (countryCode) =>
//   new Promise((res, rej) => {
//     const req = new XMLHttpRequest()

//     req.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const country = JSON.parse(e.target.responseText)
//         // const country = data.find((country) => country.alpha2Code === countryCode)
//         res(country)
//       } else if (e.target.readyState === 4) {
//         rej('There has been an error')
//       }
//     })

//     req.open('GET', `https://restcountries.eu/rest/v2/alpha/${countryCode}`)
//     req.send()
//   })

// const getCountries = () =>
//   new Promise((res, rej) => {
//     const req = new XMLHttpRequest()

//     req.addEventListener('readystatechange', (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const countries = data.map((country) => {
//           const countryData = {}
//           countryData.name = country.name
//           countryData.code = country.alpha2Code
//           return countryData
//         })
//         res(countries)
//       } else if (e.target.readyState === 4) {
//         rej('There has been an error')
//       }
//     })

//     req.open('GET', 'http://restcountries.eu/rest/v2/all')
//     req.send()
//   })

// Using Fetch API

const getCountryDetails = (countryCode) => {
  return fetch(`http://restcountries.eu/rest/v2/alpha/${countryCode}`).then(
    (response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Unable to fetch country details')
      }
    }
  )
}

const getCountries = () => {
  return (
    fetch('http://restcountries.eu/rest/v2/all')
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error('Unable to fetch all countries')
        }
      })
      // allCountriesData is the object returned response.json()
      .then((allCountriesData) => {
        const countries = allCountriesData.map((country) => {
          const countryData = {}
          countryData.name = country.name
          countryData.code = country.alpha2Code
          return countryData
        })
        return countries
      })
  )
}
