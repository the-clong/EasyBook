import {
  fromJS
} from 'immutable';
//facebook出的immutable，immutable会比对原先state中的值和传入的值，如果不同就新生成一个值，然后返回
const defaultState = fromJS({
  topicList: [{
      id: 1,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
      title: '专题1'
    },
    {
      id: 2,
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
      title: '专题2'
    },
  ]
});
const topicReducer = (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }

};
export default topicReducer;