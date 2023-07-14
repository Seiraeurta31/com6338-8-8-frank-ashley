// Your code here
//API key 08ace7633004d5ddf370678a8c052e90

var weatherDisplay = document.getElementById('weather')
var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    //console.log("hello")
    var userInput = this.search.value.trim()
    console.log (userInput)

    if(!userInput) return

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=08ace7633004d5ddf370678a8c052e90')
    .then(function(res){
        //console.log (res)
        if(res.status !== 200){
            throw new Error ('Location not found')
        }
        return res.json()
        
    })
    .then(function(data){
        console.log(data)
        return data
    })
    .then(formatLocationData)
    .catch(function(err){
        form.search.value = ""
        weatherDisplay.innerHTML = ""

        var errorMessage = document.createElement('h2')
        errorMessage.textContent = err.message
        weatherDisplay.appendChild(errorMessage)
    })   
}


function formatLocationData(locationData){
    form.search.value = ""
    weatherDisplay.innerHTML = ""

    //console.log ("location name: " + locationData.name)
    
    //City/Country 
    var cityName = document.createElement('h2')
    cityName.textContent = locationData.name + ", " + locationData.sys.country
    console.log(cityName)
    weatherDisplay.appendChild(cityName)

    //Map Link 
    var mapLink = document.createElement('a')
    mapLink.textContent = "Click to view map"
    var latitude = locationData.coord.lat
    var longitude = locationData.coord.lon
    mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude 
    mapLink.setAttribute('target', '_BLANK')
    weatherDisplay.appendChild(mapLink)

    //Weather Icon 
    var weatherIconImage = document.createElement('img')
    var weatherIconCode = locationData.weather[0].icon
    weatherIconImage.src = "https://openweathermap.org/img/wn/" + weatherIconCode + "@2x.png"
    weatherDisplay.appendChild(weatherIconImage)

    //Weather Description
    var weatherDescription = document.createElement('p')
    weatherDescription.style.textTransform = "capitalize"
    weatherDescription.textContent = locationData.weather[0].description
    weatherDisplay.appendChild(weatherDescription)

    //Current Temp
    var locationTemp = document.createElement('p') 
    var fahrenheitTemp = kelvinToFahrenheit(locationData.main.temp)
    locationTemp.textContent = fahrenheitTemp + "° F"
    weatherDisplay.appendChild(locationTemp)

    // //Feels Like Temp
    // var weatherDescription = document.createElement('p')
    // weatherDescription.style.textTransform = "capitalize"
    // weatherDescription.textContent = locationData.weather[0].description
    // weatherDisplay.appendChild(weatherDescription)

    // //Feels Like Temp
    // var weatherDescription = document.createElement('p')
    // weatherDescription.style.textTransform = "capitalize"
    // weatherDescription.textContent = locationData.weather[0].description 
    // weatherDisplay.appendChild(weatherDescription)

}

function kelvinToFahrenheit (kelvinTemp){
    return (((kelvinTemp - 273.15)* (9/5)) +32).toFixed(2)
}