import React from 'react';
import logoPic from '../../statics/logo.png';
import betaPic from '../../statics/beta.png';
import { CSSTransition } from 'react-transition-group'; //引入css-transition展示动画
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
	InputBarWrapper
} from './style';
class CommonHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			widenInput: false,
		};
		this.focusKeyWords = this.focusKeyWords.bind(this);
		this.blurKeyWords = this.blurKeyWords.bind(this);
	}
	render () {
		return (
			<NavBarWrapper>
				<Logo href="/"><img src={logoPic} alt="简书Logo" /></Logo>
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
									in={this.state.widenInput}
									timeout={400}
									classNames="slide"
								>
									<NavBarSearch onFocus={this.focusKeyWords} className={this.state.widenInput ? 'active' : ''} onBlur={this.blurKeyWords} />
								</CSSTransition>
								<CSSTransition
									in={this.state.widenInput}
									timeout={400}
									classNames="show"
								>
									<SearchIconWrapper className={this.state.widenInput ? 'active' : ''}>
										<span className="icon iconfont iconsearch"></span>
									</SearchIconWrapper>
								</CSSTransition>
							</InputBarWrapper>
						</NavBarItem>
					</NavBarList>
				</Nav>
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
						<img src={betaPic} />
					</a>
				</PageBarItem>
				<PageBarItem>
					<a href="/">
						<span className="icon iconfont iconAa"></span>
					</a>
				</PageBarItem>
			</NavBarWrapper>
		)
	}
	focusKeyWords () {
		this.setState(() => ({
			widenInput: true
		}));
	}
	blurKeyWords () {
		this.setState(() => ({
			widenInput: false
		}));
	}
}
export default CommonHeader