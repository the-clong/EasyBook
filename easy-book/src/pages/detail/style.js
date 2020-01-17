import styled from 'styled-components';
import { Menu} from 'antd';
const {SubMenu} = Menu;
export const FooterMenu = styled(SubMenu)`
    .ant-dropdown-menu-submenu-arrow-icon {
      vertical-align: middle;
    }
`;
export const DetailBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
`;
export const DetailWrapper = styled.div`
  position: relative;
  margin: 56px auto;
  width: 1000px;
  padding: 10px 16px;
  min-height: 1000px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
`;
export const DetailLeft = styled.div`
  width: 730px;
  margin-right: 10px;
  padding: 25px;
  background-color: #fff;
  border: 1px solid red;
  > h1 {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
  }
  
`;
export const DetailRight = styled.aside`
  width: 260px;
  > .advert-img {
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    margin-bottom: 10px;
  }
  > .advert-img > img {
    width: 100%;
    vertical-align: middle;
  }
  > .advert-img > .advert-icon {
    display: block;
    padding: 2px 6px;
    position: absolute;
    color: #fff;  
    background-color: rgba(0,0,0,.5);
    font-size: 14px;
    bottom: 0;
    right: 0;
  }
  > .user-article {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 16px;
    > .article-avater {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      border: 1px solid #eee;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;      
      }
    }
    > .article-info {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex-grow: 1;
      overflow: hidden;
      margin-left: 10px;
      > .info-top {
        align-items: center;
        display: flex;
        justify-content: space-between;
        > .article-title {
          font-weight: 500;
        }
        > .concern {
          border-radius: 17px;
          width: 60px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          border: 1px solid red;
          color: red;
        }
        
      }
      > p {
        padding: 6px 0;
        color: #969696;
        font-size: 12px;
      }   
    }
  }
`;
export const AuthorInfo = styled.div`
  overflow: hidden;
  margin-top: 10px;
  > .author-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #eee;
  }
`;
export const Info = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
`;
export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  > .name {
    line-height: 23px;
    font-weight: 500;
    font-size: 16px;
  }
  > .joinUs {
    margin-left: 10px;
    display: block;
    width: 16px;
    height: 16px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  > .concern {
    margin-left: 10px;
    display: block;
    width: 44px;
    height: 23px;
    border-radius: 25px;
    border: 1px solid #ec7259;
    text-align: center;
    line-height: 23px;
    color: #ec7259;
    font-size: 13px;
  }
`;
export const InfoContent = styled.p`
  color: #969696;
  font-size: 13px;
  > span {
    margin-right: 10px;
  }
`;
export const DertailHandleWrapper = styled.div`
  position: fixed;
  top: 200px;
  width: 50px;
  left: calc((100vw - 1000px)/2 - 78px);
  display: flex;
  flex-direction: column;
  text-align: center;
  > .thumbs-up , > .reward {
    cursor: pointer;
    font-size: 19px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    color: #969696;
    background-color: #fff;
  }
  .thumbs-up {
    > .iconfont {
      font-size: 20px;
    }
  }
  .reward {
    margin-top: 20px;
    > .iconfont {
      font-size: 31px;
    }
  }
  .thumbs-num,.reward-down {
    margin-top: 10px;
    font-size: 14px;
    color: #969696;
  }
`;
export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0,0,0,.05);
  z-index: 100;
`;
export const FooterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 1000px;
  display: flex;
`;
export const FooterInput = styled.textarea.attrs(props => ({
    placeholder: '写下你的评论...'
}))`
   width: 400px;
   height: 36px;
   margin-right: 15px;
   border-radius: 18px;
   padding: 10px 18px;
   border: none;
   background-color: #f2f2f2;
`;
export const FooterButtons = styled.div`
   color: #969696;
   padding: 7px 10px;
   box-sizing: content-box;
   cursor: pointer;
   & > .iconfont {
     font-size: 20px;
     vertical-align: middle;
   }
   & > span {
     margin-left: 8px;
     font-size: 14px;
   }
   > svg {
     display: block;
   }
`;