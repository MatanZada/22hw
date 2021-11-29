// #API HOMEWORK#
// 1.
// - Open a weather account https://openweathermap.org/api (Don't worry its free)
// - Create a key in your account.
// - Create a page that display the current weather in some area. ($.getJson)
// - Add a list (select in html) of area that with a display name and value.
// - Each time the user change the selected value we make a new request to the API and displaying the new weather
// Dispaly all the data that you think is informativ for the user.
// Design it a bit, make it look good.
// **Upload this project to github and SEND IT**
// 2. go to this API docs and try to get bitcoin currency https://docs.coinapi.io/
// **Bonus point - If you can use authorization header**



// let btn = document.querySelector('#btn').addEventListener('click',function(){
let btn = $('#btn')
let inputVal = $('#city');
btn.click(function(){
    goWeather(print)
    })
    function print(data){
        $.each(data.main,(key,value)=>{
            let container = $('[data-role="container"]')
        container.append(`<div>${key}</div>`)
        container.append(`<div>${value}</div>`)
        })
    }
    function goWeather(cb){
        $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.val()}&appid=0b53fd032d80d990cef514b5be2ea520`,data =>{
            cb(data);
        })
    }
    
// })



