var React = require ('react');

var Main = React.createClass({
	render: function(){
		return(
			<div className="main-container">
				This is Main Page
				{this.props.children}
			</div>
		)
	}
})

module.exports = Main;