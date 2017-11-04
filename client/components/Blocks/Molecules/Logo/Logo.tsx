import * as React from 'react';
import {Link} from 'react-router-dom';

export default class Logo extends React.Component<any, any> {
	render() {
		return (
			<div className="logo logo--header">
				<Link to="/" className="logo__link">
                    <img className="logo__img" src="http://placehold.it/150x50" alt="logo"/>
                </Link>
			</div>
		);
	}
}