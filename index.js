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
        console.log(res)
    })
    .then(formatLocationData)
    .catch(function(err){
        weatherDisplay.innerHTML = err.message
    })   

}

function formatLocationData(locationData){
    weatherDisplay.innerHTML = ""
    userInput.value =""
    var cityName = document.createElement('h3')
    //cityName.textContent
}