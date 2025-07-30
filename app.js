
let A = ["Amsterdam", "Ankara", "Athens", "Abu Dhabi", "Atlanta"]
let B = ["Berlin", "Bangkok", "Beijing", "Barcelona", "Brussels"]
let C = ["Cairo", "Chicago", "Cape Town", "Cologne", "Copenhagen"]
let D = ["Dubai", "Delhi", "Damascus", "Dhaka", "Dallas"];
let E= ["Edinburgh", "Essen", "Eindhoven", "El Paso", "Entebbe"]
let F = ["Frankfurt", "Florence", "Fukuoka", "Faisalabad", "Fresno"]
let G = ["Geneva", "Guangzhou", "Guadalajara", "Glasgow", "Guwahati"]
let H = ["Hong Kong", "Houston", "Hanoi", "Hyderabad", "Hamburg"]
let I= ["Islamabad", "Istanbul", "Indianapolis", "Izmir", "Irvine"]
let J = ["Jakarta", "Johannesburg", "Jeddah", "Jaipur", "Jersey City"];
let K= ["Karachi", "Kuala Lumpur", "Kyoto", "Kabul", "Kansas City"]
let L = ["London", "Los Angeles", "Lahore", "Lisbon", "Las Vegas"]
let M = ["Madrid", "Milan", "Moscow", "Miami", "Melbourne"]
let N = ["New York", "Nairobi", "Naples", "Nagoya", "Nice"]
let O= ["Osaka", "Ottawa", "Oslo", "Orlando", "Omsk"];
let P = ["Paris", "Prague", "Perth", "Pune", "Philadelphia"]
let Q= ["Quebec City", "Quito", "Quetta", "Quezon City", "Qom"]
let R = ["Rome", "Riyadh", "Rotterdam", "Rio de Janeiro", "Rawalpindi"]
let S = ["Seoul", "Sydney", "Stockholm", "San Francisco", "Singapore"];
let T = ["Tokyo", "Toronto", "Tehran", "Tashkent", "Tunis"]
let U= ["Ulaanbaatar", "Udaipur", "Utrecht", "Uberlândia", "Uppsala"]
let V= ["Vienna", "Vancouver", "Venice", "Vadodara", "Verona"]
let W = ["Washington", "Warsaw", "Wuhan", "Wellington", "Wiesbaden"]
let X = ["Xi’an", "Xiamen", "Xining", "Xochimilco", "Xinxiang"];
let Y = ["Yokohama", "Yerevan", "Yaoundé", "Yinchuan", "Yogyakarta"]
let Z= ["Zurich", "Zagreb", "Zhengzhou", "Zamboanga", "Zhuhai"]; 

function city(cityName){
let randomCity = cityName[Math.floor(Math.random()*5)];
// console.log(randomCity);

let cityDisplay = document.getElementById('cityDisplay')
// console.log(cityDisplay);

cityDisplay.innerText= randomCity
cityDisplay.style.color = "#ffffffff"

}

