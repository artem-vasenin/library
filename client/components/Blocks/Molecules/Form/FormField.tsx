import * as React from 'react';
import {IField} from '../../../../models/models';

interface IProps {
    item: IField;
}

interface IState {}

export default class FormField extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            submit: 'disabled',
            fields: {}
        };
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
