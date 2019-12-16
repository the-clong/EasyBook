import React, { Component } from 'react';
import $ from 'jquery';
import { BackToolsWrapper } from '../style';
import { connect } from 'react-redux';
class BackTools extends Component {
  handleScrollToTop () {
    $('html ,body').animate({
      scrollTop: 0
    }, 300);
  }
  render () {
    return (
      <BackToolsWrapper onClick={this.handleScrollToTop} style={{ 'display': this.props.isShowScrollTop ? 'block' : 'none' }}>
        <li>
          <a>
            <i class="icon iconfont iconfanhuidingbu"></i>
          </a>
        </li>
      </BackToolsWrapper>
    )
  }
}
const mapStateTopProps = (state) => {
  return {
    isShowScrollTop: state.getIn(['home', 'isShowScrollTop']),
  }
}
export default connect(mapStateTopProps, null)(BackTools);