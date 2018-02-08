var React = require('react');

class SelectLanguage extends React.Component {
	render() {
		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

		return (
				<ul className='languages'>
				{languages.map(function(language) {
					return (
							<li
								style={language === this.props.selectedLanguage ? { color: '#d0021b'} : null}
								key={language}
								onClick={this.props.updateLanguage.bind(null, language)}
							>
								{language}
							</li>
						)
					}, this)
				}
			</ul>
		)
	}
}

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
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					updateLanguage={this.updateLanguage}
				/>
			</div>
		)
	}
}

module.exports = Popular;
