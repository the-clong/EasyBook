import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicList from './component/Topic';
import {
  HomeWrapper,
  HomeLeft
} from './style';
class Home extends Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574854509414&di=e86fb7e60036de6f43c5236dcecef5a6&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg" />
          <TopicList />
        </HomeLeft>
      </HomeWrapper>
    )
  }
}
const mapState = () => {

}
export default connect(null, null)(Home)