import React from 'react';
import { Layout } from "antd";
import Navigator from "../../components/navigator/navigator";
import HeaderCustom from "../../components/HeaderCustom";

const { Footer, Content, Sider } = Layout;

// 管理主页页面
export default class Admin extends React.Component<any, any> {
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider><Navigator/></Sider>
                <Layout>
                    <HeaderCustom></HeaderCustom>
                    <Content></Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}