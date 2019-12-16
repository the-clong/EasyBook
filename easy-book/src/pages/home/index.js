import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreater } from './store';
import CarouselTop from './component/CarouselTop';
import TopicList from './component/Topic';
import NoteList from './component/NoteList';
import QRCode from './component/QRCode';
import Board from './component/Board';
import Recommand from './component/Recommand';
import BackTools from './component/BackTools';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';
class Home extends Component {
  render () {
    return (
      <>
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
          <BackTools />
        </HomeWrapper>
      </>
    )
  }
  componentDidMount () {
    this.props.searchBookList();
    this.bindEvents();
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchBookList () {
      // console.log(actionCreater);
      dispatch(actionCreater.searchBookList());
    },
    changeScrollTopShow () {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreater.showScrollBackTop(true));
      } else {
        dispatch(actionCreater.showScrollBackTop(false));
      }
    }
  }
}
export default connect(null, mapDispatchToProps)(Home)