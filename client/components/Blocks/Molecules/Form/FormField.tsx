import * as React from 'react';
import {connect} from 'react-redux';
import {IField, IGlobalState} from '../../../../models/models';

interface IProps {
    item: IField;
    user: number;
    role: number;
}

interface IState {
    submit: string;
    fields: Object;
}

class FormField extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            submit: 'disabled',
            fields: {}
        };
    }

    handleChange = (e: any) => {
        const element = e.target;
        console.log(e.target.value);
        let fields = {
            [element.name]: {
                id: element.id,
                type: element.type,
                name: element.name,
                className: element.className,
                value: e.target.value,
            }
        }
        this.setState({
            fields: fields
        });
    }

    getField = () => {
        let fieldComponent,
            item = this.props.item;

        switch (item.component) {
            case 'FieldInput':
                if (item.label) {
                    fieldComponent = (
                        <label className="label">
                            <div className="label__name">{item.label}</div>
                            <input
                                id={item.id}
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                className={item.className}
                                onChange={this.handleChange}
                                value={this.state[item.name]}
                            />
                        </label>
                    );
                } else {
                    fieldComponent = (
                        <input
                            id={item.id}
                            type={item.type}
                            name={item.name}
                            placeholder={item.placeholder}
                            className={item.className}
                            onChange={this.handleChange}
                            value={this.state[item.name]}
                        />
                    );
                }
            break;
            case 'FieldTextarea':
                if (item.label) {
                    fieldComponent = (
                        <label className="label">
                            <div className="label__name">{item.label}</div>
                            <textarea
                                id={item.id}
                                name={item.name}
                                placeholder={item.placeholder}
                                className={item.className}
                                onChange={this.handleChange}
                                value={this.state[item.name]}
                            >
                            </textarea>
                        </label>
                    );
                } else {
                    fieldComponent = (
                        <textarea
                            id={item.id}
                            name={item.name}
                            placeholder={item.placeholder}
                            className={item.className}
                            onChange={this.handleChange}
                            value={this.state[item.name]}
                        >
                        </textarea>
                    );
                }
            break;
            case 'FieldButton':
                fieldComponent = (
                    <div className="button-block">
                        <button
                            id={item.id}
                            type={item.type}
                            name={item.name}
                            className={item.className}
                        >
                        {item.value}
                        </button>
                    </div>
                );
            break;
        }
        return fieldComponent;
    }

    render() {
        return this.getField();
    }
}

const mapStateToProps = (state: IGlobalState) => {
    return {
        user: state.user,
        role: state.role
    };
};

export default connect(mapStateToProps)(FormField);
