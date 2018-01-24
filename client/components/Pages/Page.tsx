import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import HomeAside from './Home/HomeAside';
import Books from './Books/Books';
import BooksAside from './Books/BooksAside';
import Chat from './Chat/Chat';
import ChatAside from './Chat/ChatAside';
import UserRoom from './UserRoom/UserRoom';
import UserRoomAside from './UserRoom/UserRoomAside';
import Contacts from './Contacts/Contacts';
import ContactsAside from './Contacts/ContactsAside';

interface IProps {

}

interface IState {

}

export default class Page extends React.Component<IProps, IState> {
	render() {
		return (
			<main className='main container'>
				<div className="site-body row">
					<aside className="col-md-3 aside">
					<Switch>
						<Route exact path='/' component={ HomeAside }/>
						<Route path='/books' component={ BooksAside }/>
						<Route exact path='/chat' component={ ChatAside }/>
						<Route path='/userroom' component={ UserRoomAside }/>
						<Route exact path='/contacts' component={ ContactsAside }/>
					</Switch>
					</aside>
					
					<article className="col-md-9 content-wrap">
					<Switch>
						<Route exact path='/' component={ Home }/>
						<Route path='/books' component={ Books }/>
						<Route exact path='/chat' component={ Chat }/>
						<Route path='/userroom' component={ UserRoom }/>
						<Route exact path='/contacts' component={ Contacts }/>
					</Switch>
					</article>
				</div>
			</main>
		);
	}
}
