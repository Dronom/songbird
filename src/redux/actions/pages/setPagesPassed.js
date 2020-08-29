import { SET_PAGES_PASSED } from '../../../utils/constants';

const setPagesPassed = (pageNumber) => ({
  type: SET_PAGES_PASSED,
  payload: { pageNumber },
});

export default setPagesPassed;
