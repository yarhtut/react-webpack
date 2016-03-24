var React = require('react');

var ConfrimBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	// componentWillMount: function () {
	// 	console.log('componentWillMount')
	// },
	componentDidMount: function() {
		console.log('componentDidMount');
		 var query = this.props.location.query;
		// console.log('Query', query);
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				this.setState({
					isLoading: false,
				playersInfo: [players[0], players[1]]
				})
				
			}.bind(this));
	},
	// componentWillReceiveProps: function() {
	// 	console.log('componentWillReceiveProps');
	// },
	// componentWillUnmount: function() {
	// 	console.log('componentWillUnmount');
	// },
	render: function() {
		return(
			<ConfrimBattle isLoading={this.state.isLoading}
			playersInfo={this.state.playersInfo}/>
		)
	}
})

module.exports = ConfirmBattleContainer;