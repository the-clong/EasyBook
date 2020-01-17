import React, { Component } from 'react';
import { connect } from 'react-redux';
import { QRCodeContainer } from '../style';
import { Popover, OverlayTrigger } from 'react-bootstrap';
class QRCode extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  render () {
    const popover = (
      <Popover id="popover-basic">
        {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
        <Popover.Content>
          <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode" style={{ 'width': '180px', 'height': '180px' }} />
        </Popover.Content>
      </Popover>
    );
    return (
      <>
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <QRCodeContainer >
            <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode" />
            <div className="info">
              <div className="title">
                下载简书手机App<i className="icon iconfont iconzhinanzhenfaxiandaohangdizhiweizhi"></i>
              </div>
              <p>
                随时随地发现和创作内容
            </p>
            </div>
          </QRCodeContainer>
        </OverlayTrigger>
      </>
    )
  }
  handleButtonClick () {
    // $('#example').popover();
    console.log('click------');
  }
}
export default connect(null, null)(QRCode);