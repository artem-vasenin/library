import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Books from './Books';
import Chat from './Chat';
import UserRoom from './UserRoom';
import Contacts from './Contacts';

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
					<Switch>
						<Route exact path='/' component={ Home }/>
						<Route path='/books' component={ Books }/>
						<Route exact path='/chat' component={ Chat }/>
						<Route path='/userroom' component={ UserRoom }/>
						<Route exact path='/contacts' component={ Contacts }/>
					</Switch>
					</div>
				</div>
			</main>
		);
	}
}