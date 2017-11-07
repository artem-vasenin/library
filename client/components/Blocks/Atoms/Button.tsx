import * as React from 'react';

interface IProps {
    type: string;
    text: string;
    action: string;
    callback: any;
}

interface IState {
    type: string;
}

export default class Button extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            type: newProps.type
        });
    }

	render() {
		return (
			<button
                className={'button' + (this.state.type && ` button--${this.state.type}`)}
                onClick={this.props.callback}
            >
                {this.props.text}
            </button>
		);
	}
}