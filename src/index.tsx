import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from "single-spa-react";
import App from './app';

// 创建生命周期实例
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: any) => {
    return <App {...props} />;
  },
  domElementGetter: () => document.getElementById('micro-project-content') // 指定要挂载到哪个dom元素上面
}) as any;

export const bootstrap = [
  reactLifecycles.bootstrap,
];
// 项目启动后的钩子
export const mount = [
  reactLifecycles.mount,
];
// 项目卸载的钩子
export const unmount = [
  reactLifecycles.unmount,
];
// export const update = [
//   reactLifecycles.update,
// ]
