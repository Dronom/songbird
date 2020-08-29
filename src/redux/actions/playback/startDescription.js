import { START_DESCRIPTION } from '../../../utils/constants';

const startDescription = (text) => ({
  type: START_DESCRIPTION,
  payload: { text },
});

export default startDescription;
