import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title1, RecommandWrapper, RecommandItem } from '../style';
class Recommand extends Component {
  handleChangeClick (spinIcon) {
    console.log(spinIcon);
    let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
  }
  render () {
    return (
      <>
        <Title1>
          <div>推荐作者</div>
          <a onClick={() => this.handleChangeClick(this.spinIcon)} href="/"><i className="icon iconfont iconshuaxin" ref={(icon) => { this.spinIcon = icon }}></i>换一批</a>
        </Title1>
        <RecommandWrapper>
          {
            this.props.recommandList.map((item, index) => {
              return (
                <RecommandItem key={index}>
                  <a className="avatar" href="/">
                    <img src={item.get('imgAvatar')} alt={item.get('title')} />
                  </a>
                  <a className="follow" href="/">
                    <i className="icon iconfont iconadd1"></i>关注
                    </a>
                  <div className="name">{item.get('name')}</div>
                  <p>{item.get('content')}</p>
                </RecommandItem>
              )
            })
          }
        </RecommandWrapper>
      </>
    )
  }

}
const mapStateToProps = (state) => ({
  recommandList: state.getIn(['home', 'recommandList'])
});
export default connect(mapStateToProps, null)(Recommand);