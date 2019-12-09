import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BoardWrapper, BoardItem } from '../style';
class Board extends Component {
  render () {
    return (
      <BoardWrapper>
        {
          this.props.boardList.map((item) => {
            return (
              <BoardItem key={item.get('title')}>
                <a href="/">
                  <img src={item.get('imgUrl')} alt={item.get('title')} />
                </a>
              </BoardItem>
            )
          })
        }
      </BoardWrapper>
    )
  }
}
const mapStateToProps = (state) => (
  {
    boardList: state.getIn(['home', 'boardList'])
  }
)
export default connect(mapStateToProps, null)(Board);