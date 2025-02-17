import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import About from './Components/About';
import Footer from './Components/Footer';
import React from "react";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
//   } from "react-router-dom";

function App() {
	const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
	const [alert, setAlert] = useState(null);

	const showAlert = (message, type)=>{
		setAlert({
			msg: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	}

	const toggleMode = ()=>{
		if(mode === 'light'){
			setMode('dark');
			document.body.style.backgroundColor = '#0b133f';
			showAlert("Dark Mode has been enabled", "Success");
			document.title = 'CountMyWords-Dark'

			// setInterval(() => {
			// 	document.title = 'huihuihui'
			// }, 1000);
			// setInterval(() => {
			// 	document.title = 'ehehehe'
			// }, 1500);
		}
		else{
			setMode('light');
			document.body.style.backgroundColor = '#f0b0e0';
			showAlert("Light Mode has been enabled", "Success");
			document.title = 'CountMyWords-Light'
		}
	}
	return (
		<>
		{/* <Router> */}
		<Navbar title="CountMyWords" about="About" contact="Contact" mode={mode} toggleMode={toggleMode}/>
		<Alert alert={alert}/>
		<div className='container'>
				{/* <Routes>
					<Route path="/about" element={<About />} />
					<Route path="/" 
						element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />} 
					/>
				</Routes> */}
				<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
		</div>
		{/* <About/> */}
		<Footer/>
		{/* </Router> */}
		</>
	);
}

export default App;
