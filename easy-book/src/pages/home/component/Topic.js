import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper
} from '../../home/style';
class Topic extends Component {

  render () {
    console.log(this.props.list.toJS());
    return (
      <TopicWrapper>
        {
          this.props.list.map((item) => {
            return (
              <div key={item.get('id')}>{item.get('title')}</div>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});
export default connect(mapState, null)(Topic)