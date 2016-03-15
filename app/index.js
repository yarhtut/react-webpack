var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/router');


ReactDOM.render(
	routes,
	document.getElementById('app')
	)

// var USER_DATA = {
// 	name: "yarhtut",
// 	username: 'yarhtut',
// 	image: 'https://avatars1.githubusercontent.com/u/8251597?v=3&u=af4b86aa2961a25adecc31ca2c7e408188b24571&s=140'
// }


/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/

// var ProfilePic = React.createClass({
// 	render:function() {
// 		return(
// 			<img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
// 		)
// 	}
// })

// var Link = React.createClass({
// 	changeURL: function() {
// 		window.location.replace(this.props.href)
// 	},
// 	render: function(){ 
// 		return(
// 			<span style={{color: 'blue', cursor: 'pointer'}}
// 				onClick={this.changeURL} >
// 				{this.props.children}
// 			</span>
// 		)
// 	}
// })

// var ProfileLink = React.createClass({
// 	render: function() {
// 		return(
// 			<div>
// 				<Link href={'https://www.github.com/' + this.props.username}>
// 				{this.props.username}
// 				</Link>
// 			</div>
// 		)
// 	}
// })

// var ProfileName = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				{this.props.name}
// 			</div>
// 		)
// 	}
// })

// var Avatar = React.createClass({
// 	render: function () {
// 		return(
// 			<div>
// 				<ProfilePic imageUrl={this.props.user.image}/>
// 				<ProfileName name={this.props.user.name} />
// 				<ProfileLink username={this.props.user.username}/>
// 			</div>
// 		)
// 	}
// })