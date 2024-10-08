/*We will use the website https://openweathermap.org/ to perform our Fetch operations,
this is because we need an API key of a website from which we can retrieve our data.*/
//Preventing the default behavior of submitting a form.
function showWeatherDetails(event){
    event.preventDefault();
    //The labeled textfield of city
    const city=document.getElementById("city");
    /*The URL of OpenWeatherMap API has been constructed by combining the user-entered city name
    with a personal API key, essential for accessing weather data.
    */
    const apiKey='72255af64fca329b179246da3348fb71';
    //This URI is used to fetch the details related to the city inserted by the user.
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
    /*Using fetch api method to fetch details related to city which user will enter in the input box
    provided in the HTML file. Include below code inside showweatherDetails function below variables initialization
    */
    //Fetch AJAX http  request of the specified URL
    fetch(apiUrl)
        .then(response => response.json())
        /*Response handling is being utilized by promise with .then() to process responde
        by first converting it to JSON format response.json() and then accessing the resulting data*/
        .then(data=>{
        const weatherInfo=document.getElementById("weatherInfo");
        //Updating content of HTML dynamically
        weatherInfo.innerHTML=`
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            `;
        })
}
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("weatherForm").addEventListener("submit",showWeatherDetails);
})
