import React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './login.less';
import { reqLogin } from '../../api';
import memory from '../../utils/memory';

// 登陆页面
class Login extends React.Component<any, any> {

    handleSubmit = (e: React.FormEvent) => {
        // 阻止事件到默认行为
        e.preventDefault();
        // 对所有表单字段进行校验
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {
                const { username, password } = values;
                console.log('Received values of form: ', values);
                let response: any = await reqLogin(username, password);
                response = response.data;
                if (response.code === 200) {
                    // 登陆成功
                    message.success("登陆成功! ");
                    memory.user = response.data;
                    this.props.history.replace("/");
                } else {
                    // 登陆失败
                    message.error(response.msg);
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form!;

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
                        <span className="login-form-forgot">
                            忘记密码
                        </span>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登 陆
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

// 高阶组件
const WrapLogin = Form.create()(Login);
export default WrapLogin;