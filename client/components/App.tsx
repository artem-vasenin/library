import * as React from 'react';
import Header from './Header/Header';
import Page from './Pages/Page';
import Footer from './Footer/Footer';

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<section className='App'>
				<Header />
				<Page />
				<Footer />
			</section>
		);
	}
}
