import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Menu extends React.Component<IProps, IState> {
	render() {
		return (
			<nav className='Menu container'>
				Меню
			</nav>
		);
	}
}