import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store';
import CarouselTop from './component/CarouselTop';
import TopicList from './component/Topic';
import NoteList from './component/NoteList';
import QRCode from './component/QRCode';
import Board from './component/Board';
import Recommand from './component/Recommand';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
class Home extends Component {
  componentDidMount () {
    this.props.searchBookList();
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <CarouselTop />
          <TopicList />
          <NoteList />
        </HomeLeft>
        <HomeRight>
          <Board />
          <QRCode />
          <Recommand />
        </HomeRight>
        <button onClick={this.test}>123</button>
      </HomeWrapper>
    )
  }
  test () {
    console.log('text----');
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchBookList () {
      // console.log(actionCreater);
      dispatch(actionCreater.searchBookList());
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)