// Your code here
//API key 08ace7633004d5ddf370678a8c052e90

var weatherDisplay = document.getElementById('weather')
var form = document.querySelector('form')

form.onsubmit = function(e) {
    e.preventDefault()
    //console.log("hello")
    var userInput = document.querySelector('input').value.trim()
    //console.log (userInput)

    if(!userInput) return

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=08ace7633004d5ddf370678a8c052e90')
    .then(function(res){
        //console.log (res)
        return res.json()
    })
    .then(function(data){
        console.log (data)
    })

}