import {
  fromJS
} from 'immutable';
import * as actionType from './action-type';
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
  {
    id: 3,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题2'
  },
  {
    id: 4,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题2'
  },
  {
    id: 5,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题2'
  },
  {
    id: 6,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题2'
  },
  {
    id: 7,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题7'
  },
  {
    id: 8,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题8'
  },
  {
    id: 9,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题9'
  },
  {
    id: 10,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题10'
  },
  {
    id: 11,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574855998062&di=8879b65929d6116a36a85701f0413e6c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
    title: '专题11'
  },
  ],
  bookList: [],
  boardList: [
    {
      title: 'Banner s club',
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      title: 'Banner s 7',
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      title: 'Banner s 5',
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      title: 'Banner s 6',
      imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ],
  recommandList: [
    {
      imgAvatar: 'http://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '卢璐说',
      title: '卢璐说',
      content: '写了1320k字 · 27.9k喜欢',
    },
    {
      imgAvatar: 'http://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '简书钻首席小管家',
      title: '简书钻首席小管家',
      content: '写了205.3k字 · 155.1k喜欢',
    },
    {
      imgAvatar: 'http://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '梅拾璎',
      title: '梅拾璎',
      content: '写了263.9k字 · 29.6k喜欢',
    },
    {
      imgAvatar: '//upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '董克平日记',
      title: '董克平日记',
      content: '写了772.8k字 · 2.4k喜欢',
    },
    {
      imgAvatar: 'http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      name: '无限猴子',
      title: '无限猴子',
      content: '写了423.5k字 · 2.2k喜欢',
    },
  ],
  isShowScrollTop: false
});
const homeReducer = (state = defaultState, action) => {
  // console.log(require('~/shared'));
  switch (action.type) {
    case actionType.SEARCH_BOOKLIST:
      return state.set('bookList', fromJS(action.bookList));
    case actionType.SHOW_SCROLLTOP:
      console.log(action.isShowScrollTop)
      return state.set('isShowScrollTop', action.isShowScrollTop);
    default:
      return state;
  }

};
export default homeReducer;