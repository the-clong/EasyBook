import * as actionType from './action-type';
import axios from 'axios';
import {
  fromJS
} from 'immutable';

export const searchFocus = () => ({
  type: actionType.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
});
export const searchHeaderList = (data, pageSize) => ({
  type: actionType.SEARCH_LIST,
  searchList: fromJS(data),
  totalPage: Math.ceil(data.length / pageSize)
});
//设置当前页数pageIndex
export const setPageIndex = (pageIndex) => ({
  type: actionType.CHANGE_PAGEINDEX,
  pageIndex: fromJS(pageIndex)
});
//点击搜索框不触发blur事件
export const mouseInPage = () => ({
  type: actionType.MOUSE_ENTER
});
//离开框触发blur
export const mouseLeavePage = () => ({
  type: actionType.MOUSE_LEAVE
});
export const getSearchList = (pageSize) => {
  return function (dispatch) {
    axios.get('http://localhost:7888/easy-book/search-list.php').then((res) => {
      console.log(res);
      const data = res.data;
      if (data.success) {
        dispatch(searchHeaderList(data.data, pageSize));
      }
    });
  };
};