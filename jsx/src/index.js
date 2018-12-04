// Import React & ReactDOM Libraries

import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// {{}} used to indicate styling, no dashes
// {} reference javascript variable
const App = () => {
	
	const labelText = "Enter Name:";
	//const buttArr = ["hi", "there"]
	const newText = {text:"Click On Me!"};
	const style = {backgroundColor:'blue', color:'white'}

	return (
	<div>
  		<label className="label" htmlFor="name">
  			{labelText}
  		</label>

  		<input id="name" type="text"/>

  		<button style={style}>
  			{newText.text}
  		</button>
	</div>
	);
};

// Nesting, Reusability etc buttons, Configuration etc customization

// Render react component
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);