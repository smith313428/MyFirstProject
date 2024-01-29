import {
  LOGS
} from '../actions';

export const setLogsPageNumber = (page) => ({
  type: LOGS,
  payload: page
});