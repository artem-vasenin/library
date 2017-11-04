import * as React from 'react';
import {IField} from '../../../../models/models';
import Constants from '../../../../constants/Constants';
import Formfield from './FormField';

interface IProps {
	link: string;
	fields: IField[];
	className: string;
}
interface IState {}

export default class Form extends React.Component<IProps, IState> {
    
	render() {
		return (
			<div className="form-wrap">
				<h2 className="heading heading--type2">{Constants.BUTTONS.ADDBOOK}</h2>
				<form action={this.props.link} method="POST" className={this.props.className}>
					{this.props.fields.map((item: IField, index: number) => {
						return (
							<Formfield item={item} key={index}/>
						);
					})}
                </form>
			</div>
		);
	}
}