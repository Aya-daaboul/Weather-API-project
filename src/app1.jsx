// import React, { useState } from "react"; 
// import "./App.css"; 
 
// const App = () => { 
//   const [city, setCity] = useState(""); 
//   const [weather, setWeather] = useState(null); 
//   const [error, setError] = useState(""); 
 
//   const fetchWeather = async () => { 
//     if (!city) { 
//       setError("Please enter a city."); 
//       setWeather(null); 
//       return; 
//     } 
 
//     try { 
//       const API_KEY = "331aac5599ba6ae9b24fe531ee0a1717";   
//       const response = await fetch( 
//         https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric 
//       ); 
 
//       if (!response.ok) throw new Error("City not found."); 
 
//       const data = await response.json(); 
//       setWeather({ 
//         city: data.name,  // Add city name here 
//         icon: https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png, 
//         temperature: data.main.temp, 
//         humidity: data.main.humidity, 
//       }); 
//       setError(""); 
//     } catch (err) { 
//       setError(err.message); 
//       setWeather(null); 
//     } 
//   }; 
 
//   return ( 
//     <div className="container"> 
//       <h1 className="heading">Weather App</h1> 
//       <div className="input-container"> 
//         <input 
//           type="text" 
//           placeholder="Enter city" 
//           value={city} 
//           onChange={(e) => setCity(e.target.value)} 
//           className="input" 
//         /> 
//         <button onClick={fetchWeather} className="button"> 
//           Get Weather 
//         </button> 
//       </div> 
 
//       {error && <p className="error">{error}</p>} 
 
//       {weather && ( 
//         <div className="weather-container"> 
//           <h2>{weather.city}</h2> {/* Display city name here */} 
//           <img src={weather.icon} alt="Weather Icon" className="icon" /> 
//           <div> 
//             <p className="weather-text"> 
//               <strong>Temperature:</strong> {weather.temperature}°C 
//             </p> 
//             <p className="weather-text"> 
//               <strong>Humidity:</strong> {weather.humidity}% 
//             </p> 
//           </div> 
//         </div> 
//       )} 
//     </div> 
//   ); 
// }; 
 
// export default App;