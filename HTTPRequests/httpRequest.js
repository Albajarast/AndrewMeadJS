//------------------------//
// HTTP Request Challenge //
//------------------------//
// 1. Make a new request for all countries</li>
// 2. Parse the responseText to get back the array of objects</li>
// 3. Find the country object by it's country code (alpha2Code property)</li>
// 4. Print the full country name (name property)</li>

const countryNameDisplay = document.querySelector('#country-name')
const countryFlagDisplay = document.querySelector('#country-flag')
const countryCodeDisplay = document.querySelector('#country-code')
const countrySelectorOptions = document.querySelector('#country-selector')
  .options
const selectedCountry = document.querySelector('#country-selector')

// let countryCode = 'AX'
// countryCodeDisplay.textContent = countryCode

// --------- //
// Challenge //
// --------- //
// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code, the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

getCountries()
  .then((countries) => {
    countries.forEach((country) => {
      countrySelectorOptions.add(new Option(country.name, country.code))
    })
  })
  .catch((err) => {
    console.log(`Error: ${error}`)
  })

selectedCountry.addEventListener('change', () => {
  countryCode = selectedCountry.value
  countryCodeDisplay.textContent = countryCode
  getCountryDetails(countryCode)
    .then((country) => {
      countryNameDisplay.textContent = country.name
      countryFlagDisplay.src = country.flag
    })
    .catch((err) => {
      console.log(`Error: ${err}`)
    })
})
