import
styled
  from 'styled-components';
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  overflow: hidden;
`;
//左侧容器
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  > img {
    width: 625px;
    height: 270px;
  }
`;
//右侧容器
export const HomeRight = styled.div`
  float: right;
  width: 330px;
  padding-left: 30px;
  box-sizing: border-box;
`;
//主题列表
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  width: 95px;
  padding-right: 10px;
	background: #f7f7f7;
	font-size: 12px;
	color: #000;
	border: 1px solid #dcdcdc;
  border-radius: 4px;
  > .topic-pic {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    vertical-align: middle;
		width: 34px;
		height: 34px;
		margin-right: 10px;
	}
`;
//主体列表
export const ListWrapper = styled.ul`
  // overflow: hidden;
`;
export const ListItem = styled.li`
  display: flex;
  padding: 15px 2px 20px 0;
  margin: 0 0 15px;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  > .itemImg {
    width: 150px;
    height: 100px;
    margin-top: -15px;
    padding-left: 10px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const ListInfo = styled.div`
  flex: 1;
  > .title {
    color: #333;
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    &:hover {
      text-decoration:underline;
    }
  }
  > .title:visited {
    color: #969696;
  }
  > .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;
//右侧板块列表
export const BoardWrapper = styled.ul`
  margin-top: -4px;
  min-height: 228px;
`;
export const BoardItem = styled.li`
  > a {
    display: block;
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
//二维码
export const QRCodeContainer = styled.a`
  display: block;
  width: 280px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #eee;
  padding: 10px 15px;
  margin-top: 5px;
  > img {
    width: 60px;
    height: 60px;
    opacity: .85; 
    vertical-align: middle;
  }
  > .info {
    margin-left: 5px;
    display: inline-block;
    vertical-align: middle;
    > p {
      padding: 5px 0;
      color: #999;
      font-size: 13px;
    }
  }
`;
//推荐列表
export const Title1 = styled.div`
  overflow: hidden;
  width: 280px;
  padding: 20px 0 10px 0;
  font-size: 14px;
  color: #969696;
  > div {
    float: left;
  }
  > a {
    float: right;
    > .iconshuaxin {
      display: inline-block;
      font-size: 13px;
      margin-right: 5px;
      transition: all .2s ease-in;
      transform-origin: center center;
    }
  }
`;
export const RecommandWrapper = styled.ul`
  margin-top: 6px;
`;
export const RecommandItem = styled.li`
  display: block;
  width: 280px;
  box-sizing: border-box;
  padding: 5px 0;
  // height: 30px;
  // border: 1px solid red;
  overflow: hidden;
  > .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    > img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
    }
  }
  > .follow {
    font-size: 13px;
    margin-top: 10px;
    color: #42c02e;
    float: right;
    :hover {
      color: #3db922;
    }
  }
  > .name {
    margin-top: 5px;
    font-size: 14px;
  }
  > p {
    color: #969696;
    font-size: 12px;
    margin-top: 6px;
  }
`;