import * as React from 'react';
import { connect } from 'react-redux';

interface IProps {

}

interface IState {

}

export default class Books extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='content'>
				<h1 className='heading heading--type1'>Книги</h1>
			</section>
		);
	}
}