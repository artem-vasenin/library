import * as React from 'react';

interface IProps { }

interface IState { }

export default class Logo extends React.Component<IProps, IState> {
	render() {
		return (
			<div className="logo logo--header">
				<a href="/">
                    <img src="http://placehold.it/150x50" alt="logo"/>
                </a>
			</div>
		);
	}
}