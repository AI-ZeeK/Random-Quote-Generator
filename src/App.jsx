import "./App.css";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
	const [text, setText] = useState({});
	const fetchAdvice = async () => {
		try {
			const res = await fetch("https://api.adviceslip.com/advice");
			const data = await res.json();

			setText(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAdvice();

	}, []);

	return (
		<div className="container">
			<h1>Advice #{text.slip?.id}</h1>
			<p>{text?.slip?.advice}</p>
			<picture>
				{/* <source media="(min-width: 768px)" srcSet={pauseDesktop} /> */}
				<img src={pauseMobile} alt="" />
			</picture>
			<div>
				<button onClick={fetchAdvice}>
					<img src={dice} alt="" />
				</button>
			</div>
		</div>
	);
}

export default App;
