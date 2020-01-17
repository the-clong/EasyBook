import React, { Component } from 'react';
import logoPic from '../../statics/images/logo.png';
import betaPic from '../../statics/images/beta.png';
import { CSSTransition } from 'react-transition-group'; //引入css-transition展示动画
import { connect } from 'react-redux';
import { actionCreater } from './store';
import {
	NavBarWrapper,
	Logo,
	Nav,
	NavBarItem,
	NavBarList,
	PageBarItem,
	UserActiveLink,
	NavBarSearch,
	SearchIconWrapper,
	InputBarWrapper,
	ToggleSearchBar
} from './style';
class CommonHeader extends Component {
	render () {
		const { searchList, mouseIn, pageIndex, pageSize, totalPage } = this.props;
		//从当页第一条，截取到当页最后一条
		const pageList = searchList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
		return (
			<NavBarWrapper>
				<Logo href="/"><img src={logoPic} alt="简书Logo" /></Logo>
				<UserActiveLink className="writeAricle">
					<i className="icon iconfont iconfankuitianxie"></i>
					写文章
				</UserActiveLink>
				<UserActiveLink className="register">
					注册
				</UserActiveLink>
				<UserActiveLink className="login">
					登录
				</UserActiveLink>
				<PageBarItem>
					<a href="/">
						<img src={betaPic} alt="QR CODE" />
					</a>
				</PageBarItem>
				<PageBarItem>
					<a href="/">
						<span className="icon iconfont iconAa"></span>
					</a>
				</PageBarItem>
				<Nav className="container">
					<NavBarList>
						<NavBarItem><a href="/">
							<span className="icon iconfont iconzhinanzhenfaxiandaohangdizhiweizhi"></span>
							首页</a></NavBarItem>
						<NavBarItem><a href="/">
							<span className="icon iconfont iconphone"></span>
							下载App</a></NavBarItem>
						<NavBarItem>
							<InputBarWrapper>
								<CSSTransition
									in={this.props.widenInput}
									timeout={400}
									classNames="slide"
								>
									<NavBarSearch onFocus={() => { this.props.focusKeyWords(pageSize, searchList) }} className={this.props.widenInput ? 'active' : ''} onBlur={this.props.blurKeyWords} />
								</CSSTransition>
								<CSSTransition
									in={this.props.widenInput}
									timeout={400}
									classNames="show"
								>
									<SearchIconWrapper className={this.props.widenInput ? 'active' : ''}>
										<span className="icon iconfont iconsearch"></span>
									</SearchIconWrapper>
								</CSSTransition>
								<ToggleSearchBar style={{ 'display': this.props.widenInput || mouseIn ? 'block' : 'none' }} onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
									<div className="hot-search">热门搜索</div>
									<div className="change-another" onClick={() => this.props.changeAnother(pageIndex, totalPage, this.spinIcon)}>
										<i className="icon iconfont iconshuaxin" ref={(icon) => { this.spinIcon = icon }}></i>
										换一批</div>
									<ul>
										{
											pageList.map((item) => {
												return (
													<li key={item}><a href="/">{item}</a></li>
												)
											})
										}
									</ul>
								</ToggleSearchBar>
							</InputBarWrapper>
						</NavBarItem>
					</NavBarList>
				</Nav>
			</NavBarWrapper>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		widenInput: state.getIn(['header', 'widenInput']),
		searchList: state.getIn(['header', 'searchList']),
		pageIndex: state.getIn(['header', 'pageIndex']),
		pageSize: state.getIn(['header', 'pageSize']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalPage: state.getIn(['header', 'totalPage']),
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		focusKeyWords (pageSize, searchList) {
			searchList.size === 0 && dispatch(actionCreater.getSearchList(pageSize));
			dispatch(actionCreater.searchFocus());
		},
		blurKeyWords () {
			dispatch(actionCreater.searchBlur());
		},
		handleMouseEnter () {
			dispatch(actionCreater.mouseInPage());
		},
		handleMouseLeave () {
			dispatch(actionCreater.mouseLeavePage());
		},
		changeAnother (pageIndex, totalPage, spinIcon) {
			let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			if (pageIndex < totalPage) {
				dispatch(actionCreater.setPageIndex(pageIndex + 1));
			} else {
				dispatch(actionCreater.setPageIndex(1));
			}
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(CommonHeader)