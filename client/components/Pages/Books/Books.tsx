import * as React from 'react';
// import {connect} from 'react-redux';
import BooksList from './BooksList';
import Constants from '../../../constants/Constants';

interface IProps {

}

interface IState {

}

export default class Books extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='content'>
				<h1 className='heading heading--type1'>{Constants.PAGES.BOOKS.TITLE}</h1>
				<BooksList />
			</section>
		);
	}
}
