import * as React from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Page from './Pages/Page';
import Footer from './Footer/Footer';

interface IProps {

}

interface IState {

}

export default class App extends React.Component<IProps, IState> {
	render() {
		return (
			<section className='App'>
				<Header />
				<Menu />
				<Page />
				<Footer />
			</section>
		);
	}
}