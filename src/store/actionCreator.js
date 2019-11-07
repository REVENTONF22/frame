import { CHANGE_INPUT_VAL } from './actionTypes';

export let changeVal = (val) => {
	return {
		type: CHANGE_INPUT_VAL,
		value: val
	}
}