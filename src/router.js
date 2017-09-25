import React from 'react';
import { Router, Route, Switch, Link } from 'dva/router';
import dynamic from 'dva/dynamic';
import { Menu } from 'antd';

import appModel from './models/app';

import './style.less';

export default ({ history, app }) => {
  const App = dynamic({
    app,
    models: () => [appModel],
    component: () => import('./routes/App'),
  });

  const Item = dynamic({
    app,
    models: () => [appModel],
    component: () => import('./routes/Item'),
  });

  const OtherItem = dynamic({
    app,
    models: () => [appModel],
    component: () => import('./routes/OtherItem'),
  });

  return (
    <Router history={history}>
      <div className="root-wrap">

        {/* 菜单栏 */}
        <nav className="aside">
          <Menu
            mode="inline"
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/id">
              <Link to="/id">子页面</Link>
            </Menu.Item>
            <Menu.Item key="/otherid">
              <Link to="/otherid">另一个子页面</Link>
            </Menu.Item>
          </Menu>
        </nav>

        <div className="main-content">

          {/* 公共部分 */}
          <App />

          {/* 路由 */}
          <Switch>
            <Route exact path="/" render={() => (<div>这里会显示各个路由的内容</div>)} />
            <Route path="/id" component={Item} />
            <Route path="/otherid" component={OtherItem} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
