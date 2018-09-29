'use strict';

const e = React.createElement;

class ClickMeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { clicked: false };
	}

	render() {
		if (this.state.clicked) {
			return 'Oh, you clicked me!';
		}

		return e(
			'button',
			{ onClick: () => this.setState({clicked: true})},
			'Click Me'
		);
	}
}

const domContainer = document.querySelector('#click_me_container');
ReactDOM.render(e(ClickMeButton), domContainer);