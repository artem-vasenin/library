import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class UserRoom extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='content'>
				<h1 className='heading heading--type1'>Кабинет пользователя</h1>
			</section>
		);
	}
}