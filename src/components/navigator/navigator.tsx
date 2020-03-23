import React from "react";
import './navigator.less';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import navList from "../../config/navigatorConfig";

type NavNode = typeof navList[0];

// 主页导航栏(navigator)组件
export default class Navigator extends React.Component<any, any> {

    // 根据navList的数据数组生成对应的标签数组
    getNavNodes = (list: NavNode[]) => {
        // 使用数组的reduce方法生成导航栏
        return list.reduce((pre, item) => {
            pre.push((
                <Menu.Item key={item.key}>
                    <Link to={item.path}>
                        <Icon type={item.icon}/>
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            ));
            return pre;
        }, [])
    };

    render() {
        return(
            <div>
                <div className="logo" />
                <Menu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="dark"
                >
                    { this.getNavNodes(navList) }
                </Menu>
            </div>
        );
    }
}