import * as React from 'react';
import {connect} from 'react-redux';
import {IBook, IGlobalState, IField} from '../../../../models/models';
import Constants from '../../../../constants/Constants';
import Formfield from './FormField';

interface IProps {
	link: string;
	fields: IField[];
	className: string;
	user: number;
	role: number;
	bookList: boolean | IBook[];
}
interface IState {}

class Form extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
    
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

const mapStateToProps = (state: IGlobalState) => {
	return {
		user: state.user,
		role: state.role,
		bookList: state.bookList
	};
};

export default connect(mapStateToProps)(Form);
