let today = new Date()
let month_num = today.getMonth()
let date= today.getDate()
let year=today.getFullYear()
let day_num=today.getDay()
let city_name=document.getElementsByTagName('p')[0]
let country_name=document.getElementsByTagName('p')[1]
let temp_c_value=document.getElementsByTagName('p')[4]
let humidity1_value=document.getElementsByTagName('h1')[0]
let wind1_value=document.getElementsByTagName('h1')[1]
let gust1_value=document.getElementsByTagName('h1')[2]
async function weather(city,country) {
    

const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}.${country}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c17a1c771bmsh992d5aa83455bf9p1117dejsne4a59ebcb839',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
	var city_name_value=result.location.name
	var country_name_value=result.location.country
	city_name.innerHTML=city_name_value
	country_name.innerHTML=country_name_value
	var temp_value=result.current.temp_c
	temp_c_value.innerHTML=temp_value
	var humidity_value=result.current.humidity
	var wind_value=result.current.wind_kph
	var gust_value=result.current.gust_kph
	humidity1_value.innerHTML=humidity_value
	wind1_value.innerHTML=wind_value
	gust1_value.innerHTML=gust_value

    
} catch (error) {
	alert('Something went wrong');
}


    // let result=await weather()
    // let response=await result.json()
    // return response.current.humidity
	
}
let months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let day=days[day_num]
let month=months[month_num]
let formatted_date=`${date} ${month} ${year}`
let dates=document.getElementsByTagName('p')[2].innerHTML=formatted_date
let formatted_day=document.getElementsByTagName('p')[3].innerHTML=day
let search_btn=document.getElementsByTagName('button')[0]
let city_input=document.getElementsByTagName('input')[0]
let country_input=document.getElementsByTagName('input')[1]
search_btn.addEventListener('click',()=>{
	var city=city_input.value
	var country=country_input.value
	weather(city,country)
})






