import * as React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Page from './Pages/Page';
import Footer from './Footer/Footer';

export default class App extends React.Component<any, any> {
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