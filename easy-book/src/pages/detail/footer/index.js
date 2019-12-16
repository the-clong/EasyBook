import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FooterWrapper } from '../style';
class CommonFooter extends Component {
  render () {
    return (
      <FooterWrapper>footer</FooterWrapper>
    )
  }
}
export default connect(null, null)(CommonFooter);