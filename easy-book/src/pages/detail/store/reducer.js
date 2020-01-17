import { fromJS } from 'immutable';
import * as actionType from './action-type';
const defaultState = fromJS({
  userList: [],
  recommandList: [],
  footBtnList: fromJS(
      [
        {
          name: '分享文章'
        },
        {
          name: '收入专题'
        },
        {
          name: '收藏文章'
        },
        {
          name: '举报文章'
        }
      ]
  )
});
const detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_USER_DETAIL:
      return state.set('userList', fromJS(action.userList));
    case actionType.GET_DETAIL_RECOMMAND:
      return state.set('recommandList', fromJS(action.recommandList));
    default:
      return state;
  }


};
export default detailReducer;