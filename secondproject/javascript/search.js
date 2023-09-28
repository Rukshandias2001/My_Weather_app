let city = document.getElementById("city1");
let inputcity = document.getElementById("inputtext1");
let temp = document.getElementById("temp");
let inputbtn = document.getElementById("btninput");
let windspeed = document.getElementById("kmh");
let showimage = document.getElementById("showimage");
let humidity = document.getElementById("humidity");
let error = document.getElementById("error1");
let days  =document.getElementById("days");

const indexestocollect = [8,16,24,32,39];
const tempratures =[];
const featureweather =[];


const api_key ='6d98c256d418eaa4ae01a7dd8df2a9ae';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="



async function getweatherdata(city1){

  try{
    console.log(city1);
  
    const response = await fetch(apiUrl+city1+`&appid=${api_key}`);
    if(response.status===404){
      document.querySelector(".error").style.display = 'block';
    
    }else{
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const data2 = await response.json();
      
      
      let data3 = Math.round(data2.main.temp);
      
      console.log(data2);
      city.innerHTML =city1;
      temp.innerHTML=`${data3-273}&deg;C`;
      kmh.innerText=`${data2.wind.speed}Km/h`;
      humidity.innerText =`${data2.main.humidity}%`;
      generateweatherimage(data2);
       
      document.querySelector(".displaytemprature").style.display='flex';
      
      document.querySelector(".error").style.display = 'none';
      document.querySelector(".footer-container").style.top ='200px';




    }

   
    



  }catch(error){
    console.error('Error fetching weather data:', error);
  }
  
}

inputbtn.addEventListener("click",()=>{
  getweatherdata(inputcity.value);
})

function generateweatherimage(data){
  
  let iconSrc ='';
  switch(data.weather[0].main){
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
          break;
   }
   showimage.src =iconSrc;

}

inputcity.addEventListener('keydown',function(event){
  if(event.key==='Enter'|| event.keyCode===13){
    getweatherdata(inputcity.value);

  }
});




