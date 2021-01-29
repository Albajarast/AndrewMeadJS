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

const locationDisplay = document.querySelector('#location')
const locationCountry = document.querySelector('#location-countryName')
const locationCode = document.querySelector('#location-countryCode')
const locationRegion = document.querySelector('#location-countryRegion')
const locationCurrency = document.querySelector('#location-countryCurrency')
const locationFLag = document.querySelector('#location-countryFlag')

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
    console.log(err)
  })

selectedCountry.addEventListener('change', () => {
  countryCode = selectedCountry.value
  countryCodeDisplay.textContent = countryCode
  getCountryDetails(countryCode)
    .then((country) => {
      countryNameDisplay.textContent = country.name
      countryFlagDisplay.src = country.flag
      countryFlagDisplay.alt = `Flag of ${country.name}`
    })
    .catch((err) => {
      console.log(err)
    })
})

getLocation()
  .then((location) => {
    const { city, region, country } = location
    locationDisplay.textContent = `Your current location is: ${city}, ${region} (${country})`
    return country
  })
  .then((countryCode) => {
    return getCountryDetails(countryCode)
  })
  .then((country) => {
    locationCountry.textContent = country.name
    locationCode.textContent = country.alpha2Code
    locationRegion.textContent = country.region
    locationCurrency.textContent = `${country.currencies[0].symbol} ${country.currencies[0].code} - ${country.currencies[0].name}`
    locationFLag.src = country.flag
    locationFLag.alt = `Flag of ${country.name}`
  })
  .catch((err) => {
    console.log(err)
  })
