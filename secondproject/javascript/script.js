let weekdays = ["Saturday","Friday","Thursday","Wednesday","Tuesday","Monday"];
let days  =document.getElementById("days");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let speed = document.getElementById("speed");
let details = document.getElementById("detail_1");
let description1 = document.getElementById("displaydate");
let description4 =document.getElementById("desc2");
const indexestocollect = [8,16,24,32,39];
const tempratures =[];
const featureweather =[];
var ctx = document.getElementById('myChart').getContext('2d');
const indexestocollect1 =[0,8,16,24,32];



var para ="";

var para1 =  `
          <div class="box1">
          <div class="pic">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="todayimage">
          </div>
          <div class="desc">
            <h5 id="weekday">${weekdays[weekdays.length-1]}</h5>
            <p id="nighttemp">Night - 25.6&deg;C</p>
          </div>
          </div>
      `

for(var i = 0 ; i<weekdays.length-1;i++){
  
   para = `
          <div class="box">
          <div class="pic">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" id="futureimage${i}">
          </div>
          <div class="desc">
            <h5 class="weedays" id="day${i}">${weekdays[i]}</h5>
            <p class="otherdayNight" id="nighttemp${i}">Night - 25.6&deg;C</p>
            <p class="otherdayNight" id="daytemp${i}">Day - 25.6&deg;C</p>
          </div>
        </div>
  `+para;
  
  
}

para = para1+para;
days.innerHTML =para;




const days1 =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let time = document.getElementById('time');
let day = document.getElementById('day') ;
let weedays =document.getElementsByClassName("weedays");



const nextFiveDays = [];
setInterval(() => {
  const weekday = document.getElementById('weekday');
  const time1 = new Date();
  const month = time1.getMonth();
  const date = time1.getDate();
  const day2 = time1.getDay();
  const hour = time1.getHours();
  const hour2 = hour>=13 ? hour%12 : hour;
  const minute = time1.getMinutes();
  const ampm = hour>=12 ? "PM":"AM"  

  time.innerHTML = (hour2 < 10? '0'+hour2 : hour2) + ':' + (minute < 10? '0'+minute: minute)+ ' ' + `<span id="am-pm">${ampm}</span>`
  day.innerHTML = days1[day2]+", "+date+ "  "+months[month];
  description1.innerHTML=`${days1[day2]}`;
  weekday.innerText=days1[day2];
  document.getElementById("day4").innerText=days1[day2+1];
  document.getElementById("day3").innerText=days1[day2+2];
  document.getElementById("day2").innerText=days1[day2+3];
  document.getElementById("day1").innerText=days1[day2+4];
  document.getElementById("day0").innerText=days1[day2+5];
  
}, 1000);



const api_key ='6d98c256d418eaa4ae01a7dd8df2a9ae';
let nighttemp = document.getElementById('nighttemp');




async function getWeatherApidate(){
 
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=moratuwa&appid=${api_key}`;
   try{

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data2 = await response.json();
    console.log(data2);
    console.log(data2.list);

    let daydetails =`
          <div class="detail_1">
             <p>Humidity</p>
            <p id ="humidity">${data2.main.humidity}q</p>
          </div>
         <div class="detail_1">
            <p>Pressure</p>
             <p id="pressure">${data2.main.pressure}p</p>
         </div>
  
        <div class="detail_1">
           <p>Wind Speed</p>
          <p id="speed">${data2.wind.speed}km/h</p>
        </div> 
        <div class="detail_1">
           <p>Sea level</p>
          <p id="speed">${data2.main.sea_level}m</p>
        </div> `;
    details.innerHTML=daydetails;
    let temp1 = data2.main.temp;
    temp1 = temp1-273;
    temp1=Math.round(temp1);
    let description3 = `
                        <h3 class="displaytemp">Night- ${temp1}&deg;C</h3>
                        <h3 class="displaytemp">Day- ${temp1}&deg;C</h3>`;
    description4.innerHTML=description3; 

    let description5 =` 
              <p id="nighttemp">Night- ${temp1}&deg;C</p>
              <p id="daytemp">Day - ${temp1}&deg;C</p>
    `;
    
    nighttemp.innerHTML =description5;
   generateweatherimage(data2);
      
   }catch(error){
    console.error('Error fetching weather data:', error);
      }
    
   

}


getWeatherApidate();
function  generateweatherimage(data){
  const weatherIcon = document.getElementById('clouds');
  const weatherIcon2 = document.getElementById('todayimage');
  let iconSrc='';
  let iconSrc2 =''
    switch(data.weather[0].main){

      case 'Clear':
        iconSrc="/My_Weather_app/secondproject/cloudimage/clear.png";
        iconSrc2="/My_Weather_app/secondproject/cloudimage/clear.png";
        break;
      case 'Rain':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/rain.png'; 
          iconSrc2 ='/My_Weather_app/secondproject/cloudimage/rain.png';
          break;
      case 'Clouds':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/clouds.png'; 
          iconSrc2='/My_Weather_app/secondproject/cloudimage/clouds.png'; 
          break;

      case 'Drizzle':
          iconSrc="/My_Weather_app/secondproject/cloudimage/drizzle.png";
          iconSrc2 ='/My_Weather_app/secondproject/cloudimage/drizzle.png'; 
          break;
     case 'Mist':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/mist.png';
          iconSrc2 ='/My_Weather_app/secondproject/cloudimage/mist.png'; 
          break;
     case 'Snow':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/snow.png'; 
          iconSrc2 ='/My_Weather_app/secondproject/cloudimage/snow.png'; 
          break;
     default:
          iconSrc = '/My_Weather_app/secondproject/cloudimage/snow.png';
          iconSrc2 ='/My_Weather_app/secondproject/cloudimage/snow.png';  
          break

    }
    console.log(data.weather.main);
    weatherIcon.src = iconSrc;
    weatherIcon2.src =iconSrc2;
    
 }




 const otherdayTemp = document.querySelector(".otherdayNight");
 var para1 ="";
 getFutureweather();

 function getFutureweather(){
  const url =`https://api.openweathermap.org/data/2.5/forecast?q=moratuwa&appid=${api_key}`;
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    displayFuturedata(data);

  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
});
 }



 function displayFuturedata(data){
  console.log(data)
  for (const forecast of data.list) {
    let temp = Math.round(forecast.main.temp-273);
    para1 += `
          <div class="box">
          <div class="pic">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="">
          </div>
          <div class="desc">
            <h5>${forecast.dt_txt}</h5>
            <p class="otherdayNight" id="nighttemp1">Night -  ${temp}&deg;C</p>
            <p class="otherdayNight">Day - 25.6&deg;C</p>
          </div>
        </div>

  `;
  
  }
  for(const indexes of indexestocollect ){
    const specificForecast = data.list[indexes];
    const temprature = Math.round(specificForecast.main.temp-273);
    const tempfutureweather = specificForecast.weather[0].main;
    tempratures.push(temprature);
    featureweather.push(tempfutureweather);
  }

  for(let i=0; i<tempratures.length;i++){
    document.getElementById(`nighttemp${i}`).innerHTML=`Night -${tempratures[i]}&deg;C`;
    document.getElementById(`daytemp${i}`).innerHTML=`Day -${tempratures[i]}&deg;C`;
  }

  for(let i=0; i<featureweather.length;i++){
    const weatherIcon2 = document.getElementById(`futureimage${i}`);
    let iconSrc='';
    switch(featureweather[i]){
      case 'Clear':
        iconSrc="/My_Weather_app/secondproject/cloudimage/clear.png";
        break;
      case 'Rain':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/rain.png'; 
         
          break;
      case 'Clouds':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/clouds.png'; 
         
          break;

      case 'Drizzle':
          iconSrc="/My_Weather_app/secondproject/cloudimage/drizzle.png";
         
          break;
     case 'Mist':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/mist.png';
         
          break;
     case 'Snow':
          iconSrc = '/My_Weather_app/secondproject/cloudimage/snow.png'; 
          
          break;
     default:
          iconSrc = '/My_Weather_app/secondproject/cloudimage/snow.png';
          
          break

    }
    
    weatherIcon2.src=iconSrc;
    weatherIcon2.style.width="100px"


  }
  console.log(para1);
 }

 

 function getApidata(){
  const weekday = document.getElementById('weekday');
  const time1 = new Date();
  var day = time1.getDay();
  displaychart(day);

  
};

getApidata();

function displaychart(day){

  getWeatherApidate();

  async function getWeatherApidate(){
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=moratuwa&appid=${api_key}`;
    try{
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
  
      
      console.log(data);



      var myChart = new Chart(ctx, {
        type: 'bar', // Specify the chart type (bar, line, pie, etc.)
        data: {
          labels: [days1[day],days1[day+1],days1[day+2],days1[day+3],days1[day+4]], // X-axis labels
          datasets: [{
            label: 'Humidity',
            data: [data.list[indexestocollect1[0]].main.humidity, data.list[indexestocollect1[1]].main.humidity, data.list[indexestocollect1[2]].main.humidity,data.list[indexestocollect1[3]].main.humidity,data.list[indexestocollect1[4]].main.humidity], // Y-axis values
            backgroundColor: [
              'rgba(70,130,180)',
              'rgba(70,130,180)',
              'rgba(70,130,180)',
             
            ], // Bar colors
            borderColor: [
              'rgba(70,130,180)',
              'rgba(70,130,180)',
              'rgba(70,130,180)',
            ], // Border colors
            
            borderWidth: 1, // Border width
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    
    }catch(error){
      console.error('Error fetching weather data:', error);
    }
    



  
  }
  

  

  
 





}