import * as React from 'react';
import { connect } from 'react-redux';
import Home from './Home';

interface IProps {

}

interface IState {

}

export default class Page extends React.Component<IProps, IState> {
	render() {
		return (
			<main className='main container'>
				<div className="row">
					<div className="col-md-12">
						<Home />
					</div>
				</div>
			</main>
		);
	}
}