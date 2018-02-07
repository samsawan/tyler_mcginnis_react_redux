var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component(
	// whatever the render method is the specific ui of the component
	render() {
		return(
			// this is JSX, not valid JS syntax
			// this is why we need babel 
			<div>Hello World!</div>
		)
	}
)

ReactDOM.render(
	// what to render
	<App />,
	// where to render
	document.getElementById('app')
);
