var React = require('react');

class Popular extends React.Component {
	render() {
		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
		return (
			<ul>
			{languages.map(function(language) {
				return(
					<li>
						{language}
					</li>
				)
			})}
			</ul>
		)
	}
}

module.exports = Popular;
