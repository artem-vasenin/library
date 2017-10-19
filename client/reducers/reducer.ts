import { IGlobalState } from '../models/models';

const initialState: IGlobalState = {
	url: '/',
	user: 'guest'
};

export default function reducer(state: IGlobalState = initialState, action: any) {
	return state;
}