// var React = require('react');
// var Prompt = require('../components/Prompt');

// var PromptContainer = React.createClass({

// 	contextTypes: {
// 		router: React.PropTypes.object.isRequired
// 	},
// 	getInitialState: function() {
// 		return{
// 			username: ''

// 		}
// 	},
// 	handleUpdateUser: function(e){
// 		this.setState({
// 			username: e.target.value
// 		})
// 	},
// 	handleSubmitUser: function(e){
// 		e.preventDefault();
// 		var username= this.state.username;
// 		this.setState({
// 			username:''
// 		});

// 		if(this.props.routeParams.playerOne){
// 			//console.log(this.context)
// 			this.context.router.push({
// 					pathname: '/battle',
// 					query: {
// 						playerOne: this.props.routeParams.playerOne,
// 						playerTwo: this.state.username
// 					}
// 				})
// 		}else{
// 			//console.log(this.context)
// 			this.context.router.push('/playerTwo/' + this.state.username)
// 		}

// 	},
// 	render: function() {
// 		//console.log(this);
// 		return (
// 			<Prompt 
// 			onSubmitUser={this.handleSubmitUser}
// 			onUpdateUser={this.handleUpdateUser}
// 			header={this.props.route.header}
// 			username={this.state.username}
// 			/>
// 		)
// 	}
// })
// module.exports = PromptContainer;
var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  handleUpdateUser: function (event) {
    this.setState({
      username: event.target.value
    });
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
});

module.exports = PromptContainer;