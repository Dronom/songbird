import { SET_LANGUAGE } from '../../../utils/constants';

const setLanguage = (language) => ({ type: SET_LANGUAGE, payload: { language } });

export default setLanguage;
