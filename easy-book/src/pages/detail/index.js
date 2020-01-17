import React, { Component } from 'react';
import { actionCreater } from './store';
import { connect } from 'react-redux';
import DetailFooter from './footer';
import {
  DetailBack,
  DetailWrapper,
  DetailLeft,
  DetailRight,
  AuthorInfo,
  Info,
  InfoHeader,
  InfoContent,
  DertailHandleWrapper,
} from './style';
class Detail extends Component {
  componentDidMount () {
    this.props.getUserDetailList();
  }
  render () {
    return (
      <DetailBack>
        <DetailWrapper>
          <DetailLeft>
            <h1>有哪些诗词让你觉得是人间绝句?</h1>
            <AuthorInfo>
              <img src="https://upload.jianshu.io/users/upload_avatars/10340222/bd0d786d-e896-4d18-89b2-551d126505d1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" className="author-image" alt="author img" />
              <Info>
                <InfoHeader>
                  <div className="name">荔子衿litchi</div>
                  <a href="/" className="joinUs">
                    <img src="https://upload.jianshu.io/user_badge/ec7b4a53-cd02-46ad-b136-dfa3751cff1e" alt="join us" />
                  </a>
                  <a href="/" className="concern">
                    关注
                  </a>
                </InfoHeader>
                <InfoContent>
                  <span>钻石</span>
                  <span>36</span>
                  <time>2019.03.03 18:58:45</time>
                  <span>字数 633</span>
                  <span>阅读 9,731</span>
                </InfoContent>
              </Info>
            </AuthorInfo>
          </DetailLeft>
          <DetailRight>
            {/* 广告页 */}
            <section className="advert-img">
              <img src="https://cdn2.jianshu.io/shakespeare/_next/static/images/note_page_right_sidebar_ad-e09371bad78fc240eee9de382a301456.jpeg" alt="广告位" />
              <span className="advert-icon">广告</span>
            </section>
            <section className="user-article">
              <a href className="article-avater">
                <img src="https://upload.jianshu.io/users/upload_avatars/3721842/1e34cc03eb71.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="头像" />
              </a>
              <div className="article-info">
                <div className="info-top">
                  <div className="article-title">金石明镜</div>
                  <div className="concern">
                    关注
                  </div>
                </div>
                <p>总资产299 (约28.91元)</p>
              </div>
              <ul>
                {
                  this.props.userList.map((item, index) => {
                    return <li key={index}>{item.get('title')}</li>
                  })
                }
              </ul>
            </section>
            {/* <section class=""></section> */}
          </DetailRight>
          <DertailHandleWrapper>
            <div className="thumbs-up">
              <i className="icon iconfont icondianzan"></i>
            </div>
            <div className="thumbs-num">
              336赞
              </div>
            <div className="reward">
              <i className="icon iconfont icondashang"></i>
            </div>
            <div className="reward-down">
              赞赏
            </div>
          </DertailHandleWrapper>
        </DetailWrapper>
        <DetailFooter></DetailFooter>
      </DetailBack>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userList: state.getIn(['detail', 'userList'])
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    getUserDetailList () {
      dispatch(actionCreater.getUserDetailList());
    }
  }
};
export default connect(mapStateToProps, mapDispatchProps)(Detail)