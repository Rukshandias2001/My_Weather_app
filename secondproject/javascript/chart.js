var ctx = document.getElementById('myChart').getContext('2d');
const api_key ='6d98c256d418eaa4ae01a7dd8df2a9ae';
const indexestocollect1 =[0,8,16];
const days1 =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var existingChart = Chart.getChart('0');









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
          labels: [days1[day],days1[day+1],days1[day+2]], // X-axis labels
          datasets: [{
            label: 'My Chart',
            data: [data.list[indexestocollect1[0]].main.humidity, data.list[indexestocollect1[1]].main.humidity, data.list[indexestocollect1[2]].main.humidity], // Y-axis values
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
  // Create the chart
  