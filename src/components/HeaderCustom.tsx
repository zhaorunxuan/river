import React from "react";
import { Avatar, Layout, Menu } from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

// 主页header组件
export default class HeaderCustom extends React.Component<any, any> {

    render() {
        return (
            <Header style={{color: 'white'}}>
                <Menu
                    mode="horizontal"
                    style={{ float: 'right', backgroundColor: '#001529', lineHeight: '63px' }}
                >
                    <SubMenu
                        title={
                            <span >
                                <Avatar size='large'>G</Avatar>
                            </span>
                        }
                    >
                        <Menu.Item key="setting:1">嗨 - Guest</Menu.Item>
                        <Menu.Item key="setting:2">个人信息</Menu.Item>
                        <Menu.Item key="logout">
                            <span>退出登录</span>
                        </Menu.Item>
                        <Menu.Item key="setting:3">系统设置</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}