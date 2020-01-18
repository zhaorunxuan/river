import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './admin.less';
import { reqLogin } from '../../api';

class Admin extends React.Component<any, any> {
    handleSubmit = (e: React.FormEvent) => {
        // 阻止事件到默认行为
        e.preventDefault();
        // 对所有表单字段进行校验
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                const {username, password} = values;
                console.log('Received values of form: ', values);
                let response: any = await reqLogin(username, password);
                console.log(response.data);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form!;
        return (
            <div className="login">
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-logo">
                        <span>后台管理</span>
                    </div>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名！'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码！'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox style={{float: "left"}}>记住我</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            忘记密码
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrapAdmin = Form.create()(Admin);
export default WrapAdmin;