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

    console.log ("location name: " + locationData.name)
    var cityName = document.createElement('h2')

    //cityName.textContent = locationData.name + " ," + locationData.country
    cityName.textContent = locationData.name + ", " + locationData.sys.country
    console.log(cityName)
    weatherDisplay.appendChild(cityName)
}