import * as actionType from './action-type';
import {
  fromJS
} from 'immutable';
//facebook出的immutable，immutable会比对原先state中的值和传入的值，如果不同就新生成一个值，然后返回
const defaultState = fromJS({
  widenInput: false,
  searchList: [],
  pageIndex: 1,
  pageSize: 10,
  totalPage: 1,
  mouseIn: false
});
const headReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.SEARCH_FOCUS:
      return state.set('widenInput', true);
    // break;
    case actionType.SEARCH_BLUR:
      return state.set('widenInput', false);
    // break;
    case actionType.SEARCH_LIST:
      return state.merge({
        'searchList': action.searchList,
        'totalPage': action.totalPage
      });
    // break;
    case actionType.CHANGE_PAGEINDEX:
      return state.set('pageIndex', action.pageIndex);
    // break;
    case actionType.MOUSE_ENTER:
      return state.set('mouseIn', true);
    // break;
    case actionType.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    // break;
    default:
      return state;
  }

};
export default headReducer;