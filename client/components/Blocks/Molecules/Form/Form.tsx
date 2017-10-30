import * as React from 'react';
import { IForm } from '../../../../models/models';
import Constants from '../../../../constants/Constants';

interface IState {}

export default class Form extends React.Component<IForm, IState> {
    constructor(props: any) {
		super(props);
		this.state = {
			
		}
    }
    
	render() {
		return (
			<div className="form-wrap">
                <h2 className="heading heading--type2">{Constants.READMORE}</h2>
				<form action={this.props.link} method="POST">
                
                </form>
			</div>
		);
	}
}