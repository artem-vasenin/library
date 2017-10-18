import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class HomeAside extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='sidebar'>
				<h2 className='heading heading--type2'>Главная Сайдбар</h2>
			</div>
		);
	}
}