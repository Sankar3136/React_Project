import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [temp, setTemp] = useState("");
const [word, setWord] = useState("");
const [size,] = useState(400);
const [bgColor,] = useState("ffffff");
const [qrCode, setQrCode] = useState("");

// Changing the URL only when the user
// changes the input
useEffect(() => {
	setQrCode
(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
}, [word, size, bgColor]);
function handleClick() {
	setWord(temp);
}

return (
	<div className="App">
	<h1>QR Code Generator</h1>
	<div className="input-box">
		<div className="gen">
		<input type="text" onChange={
			(e) => {setTemp(e.target.value)}}
			placeholder="Enter the text" />
		<button className="button"
			onClick={handleClick}>
			Generate
		</button>
		</div>
	</div>
	<div className="output-box">
		<img src={qrCode} alt="" />
		<a href={qrCode} download="QRCode">
		<button type="button">Download</button>
		</a>
	</div>
	</div>
);
}

export default App;
