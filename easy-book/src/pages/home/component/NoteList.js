import React, { Component } from 'react';
import { ListWrapper, ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class NoteList extends Component {
  render () {
    return (
      <ListWrapper>
        {
          this.props.bookList.map((item) => {
            const data = item.getIn(['object', 'data']);
            return (
              <ListItem key={data.get('id')}>
                <ListInfo>
                  <Link className="title" to={'/detail/' + data.get('id')} target="_blank">{data.get('title')}</Link>
                  <p className="abstract">{data.get('public_abbr')}</p>
                </ListInfo>
                <a className="itemImg" style={{ display: data.get('list_image_url') !== "" ? 'block' : 'none' }} href="/">
                  <img src={data.get('list_image_url')} alt={data.get('title')} />
                </a>
              </ListItem>
            )
          })
        }
      </ListWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  bookList: state.getIn(['home', 'bookList'])
});
export default connect(mapStateToProps, null)(NoteList)