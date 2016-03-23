var React = require('react');

var ConfrimBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playerinfo: []
		}
	},
	componentWillMount: function () {
		console.log('componentWillMount')
	},
	componentDidMount: function() {
		console.log('componentDidMount');
		var query = this.props.location.query;
		console.log('Query', query);
	},
	componentWillReceiveProps: function() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount: function() {
		console.log('componentWillUnmount');
	},
	render: function() {
		return(
			<ConfrimBattle isLoading={this.state.isLoading}
			playerinfo={this.props.playerinfo}/>
		)
	}
})

module.exports = ConfirmBattleContainer;