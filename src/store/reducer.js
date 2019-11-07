import { CHANGE_INPUT_VAL } from './actionTypes';

let defState = {
	iptVal: '默认值'
}

export default (state = defState, action) => {
	if (action.type === CHANGE_INPUT_VAL) {
		let newState = JSON.parse(JSON.stringify(defState));
		newState.iptVal = action.value || '默认值';
		return newState;
	}
	return state;
}