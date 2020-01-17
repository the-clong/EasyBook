import * as actionType from './action-type';
import * as Api from '../../../api/data';
export const getUserDetailList = () => {
  return (dispatch) => {
    Api.getUserDetailList('http://localhost:7888/easy-book/detail-user.php').then((res) => {
      if (res.data.success) {
        dispatch(getUserDetailListAction(res.data.data));
      }
    });
  };
};
export const getUserDetailListAction = (list) => ({
  type: actionType.GET_USER_DETAIL,
  userList: list
});