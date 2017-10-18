import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Library extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='library'>
				<h1 className='heading heading--type1'>Добавлялка книг</h1>
			</div>
		);
	}
}