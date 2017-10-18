import * as React from 'react';

interface IProps {
    type: string;
    text: string;
    action: string;
}

interface IState {

}

export default class Button extends React.Component<IProps, IState> {
	render() {
		return (
			<button className={'button' + (this.props.type && ` button--${this.props.type}`)}>
                { this.props.text }
            </button>
		);
	}
}