import * as Api from '../../../api/data';
import * as actionType from './action-type';
export const searchBookListAction = (list) => ({
  type: actionType.SEARCH_BOOKLIST,
  bookList: list
});
export const showScrollBackTop = (isShowBackTop) => ({
  type: actionType.SHOW_SCROLLTOP,
  isShowScrollTop: isShowBackTop
});
export const searchBookList = () => {
  return (dispatch) => {
    console.log(Api.searchEasyList);
    Api.searchEasyList('/api/list').then((res) => {
      console.log(res.data);
      dispatch(searchBookListAction(res.data.list));
    });
  };
};