import { IS_QUESSED } from '../../../utils/constants';

const changeIsQuessed = (category, status) => ({
  type: IS_QUESSED,
  payload: { category, status },
});

export default changeIsQuessed;
