let today = new Date()
let month_num = today.getMonth()
let date= today.getDate()
let year=today.getFullYear()
let day_num=today.getDay()
let city_name=document.getElementsByTagName('p')[0]
let country_name=document.getElementsByTagName('p')[1]
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
	
    
} catch (error) {
	console.error(error);
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






