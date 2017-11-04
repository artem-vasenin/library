import * as React from 'react';

interface IProps {
    type: string;
    text: string;
    action: string;
    callback: any;
}

interface IState { }

export default class Button extends React.Component<IProps, IState> {
	render() {
		return (
			<button 
                className={'button' + (this.props.type && ` button--${this.props.type}`)}
                onClick={this.props.callback}
            >
                {this.props.text}
            </button>
		);
	}
}