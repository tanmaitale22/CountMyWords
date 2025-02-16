import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

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
		<Navbar title="CountMyWords" about="About" mode={mode} toggleMode={toggleMode}/>
		<Alert alert={alert}/>
		<div className='container'>
			<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode}/>
		</div>
		</>
	);
}

export default App;
