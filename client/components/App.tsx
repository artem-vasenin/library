import * as React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Footer from './Footer/Footer';

interface IProps {

}

interface IState {

}

export default class App extends React.Component<IProps, IState> {
	render() {
		return (
			<div className='App'>
				<Header />
				<Menu />
				<Main />
				<Footer />
			</div>
		);
	}
}