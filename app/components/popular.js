var React = require('react');
var api = require('../utils/api');

function SelectLanguage(props) {
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className='languages'>
			{languages.map(function(language) {
				return (
						<li
							style={language === props.selectedLanguage ? { color: '#d0021b'} : null}
							key={language}
							onClick={props.updateLanguage.bind(null, language)}
						>
							{language}
						</li>
					)
				})
			}
		</ul>
	)
}

class Popular extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage)
	}

	updateLanguage(newLanguage) {
		this.setState(function() {
			return {
				selectedLanguage: newLanguage,
				repos: null
			}
		});

		api.fetchPopularRepos(newLanguage)
		.then(function(repos) {
			this.setState(function() {
				return {
					repos: repos
				}
			})
		}.bind(this));
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					updateLanguage={this.updateLanguage}
				/>
				{JSON.stringify(this.state.repos, null, 2)}
			</div>
		)
	}
}

module.exports = Popular;
