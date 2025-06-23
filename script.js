async function weather() {
    

const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=sirsa.in`;
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
weather()



