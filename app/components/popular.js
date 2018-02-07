var React = require('react');

class Popular extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(newLanguage) {
		this.setState(function() {
			return {
				selectedLanguage: newLanguage
			}
		});
	}

	render() {
		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
		return (
			<ul className='languages'>
			<p>Selected Language: {this.state.selectedLanguage}</p>
			{languages.map(function(language) {
				return(
					<li
						key={language}
						onClick={this.updateLanguage.bind(null, language)}>
						{language}
					</li>
				)
			}, this)}
			</ul>
		)
	}
}

module.exports = Popular;
