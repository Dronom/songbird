import { IS_STARTED } from '../../../utils/constants';

const isStarted = (status) => ({ type: IS_STARTED, payload: { status } });

export default isStarted;
