import React from ('react');
import ReactDOM from ('react-dom');

class HelloWorld extend React.component{
	render(){
		return(
			<div> hello world</div>
			)
	}
}

ReactDom.render(
	<Helloworld />,
	document.getElementById('app')
	);