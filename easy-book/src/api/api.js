import axios from 'axios';
import {
  notification
} from 'antd';
const key = 'keepOnlyOne';
export default (apiUrl, configObj = {}) => {

  //用户传入的接口配置参数
  let {
    method = 'GET',
      params = {},
      data = {},
      timeout = 5000
  } = configObj;
  /**
   * 返回的Promise对象含有then、catch方法
   */
  return new Promise(function (resolve, reject) {
    axios({
      url: apiUrl,
      method: method,
      params: params,
      data: data,
      timeout: timeout,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(function (response) {
      if (response) {

        if (response.data && response.status === 200) {
          resolve(response);
        } else {
          console.log(response);
          notification.error({
            key,
            message: '操作失败',
            description: '返回的数据格式有误'
          });
          resolve(response);
        }
      } else {

        //处理特殊的情况就是response返回什么也没有
        notification.error({
          key,
          message: '操作失败',
          description: '服务器错误'
        });
        resolve(response);
      }
    }).catch(function (error) {
      notification.error({
        key,
        message: '操作失败',
        description: '网络异常,请稍后重试'
      });
      reject(error);
    });
  });
};