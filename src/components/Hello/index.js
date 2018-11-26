import React from 'react';
import './index.less';
import login from '../../network/login'
/**
 * 测试用
 */
class Hello extends React.PureComponent {
  componentDidMount() {
    login({
      username: 'test',
      password: '123456789'
    }).then(resp => console.log(resp)) // 成功的处理
    .catch(err => console.log(err)) // 失败的处理
  }
  render() {
    return <div><h1 className="testStyle">Hello, React!</h1></div>;
  }

}

export default Hello;
