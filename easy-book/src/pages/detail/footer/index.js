import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Menu, Dropdown} from 'antd';
import {FooterButtons, FooterContainer, FooterInput, FooterWrapper,FooterMenu} from '../style';
class CommonFooter extends Component {
    render() {
         // const {SubMenu} = FooterMenu;
        const menu = (
            <Menu>
                {
                    this.props.footBtnList.map((item,index) => {
                        return index === 0 ? <FooterMenu title={item.get('name')} className="aaa">
                            <Menu.Item>分享到微信</Menu.Item>
                            <Menu.Item>分享到微博</Menu.Item>
                        </FooterMenu> : <Menu.Item key={index}>
                            <a href="/">{item.get('name')}</a>
                        </Menu.Item>
                    })
                }
            </Menu>
        );
        return (
            <FooterWrapper>
                <FooterContainer>
                    <FooterInput/>
                    <FooterButtons>
                        <i class="icon iconfont iconpinglun"></i>
                        <span>评论 15</span>
                    </FooterButtons>
                    <FooterButtons>
                        <i className="icon iconfont icondianzan"></i>
                        <span>点赞 225</span>
                    </FooterButtons>
                    <FooterButtons>
                        <Dropdown overlay={menu} placement="topCenter" trigger={['click']}>
                          <i className="icon iconfont icondianzan"></i>
                        </Dropdown>
                    </FooterButtons>
                </FooterContainer>
            </FooterWrapper>
        )
    }
}
const mapStateToProps = (state) => ({
    footBtnList: state.getIn(['detail','footBtnList'])
});

export default connect(mapStateToProps, null)(CommonFooter);