import {Button, Flex, Form, Input} from 'antd';
import axios from 'axios';
import "./style.css";

const onFinish = (values) => {
    axios.post('https://vip-card.onrender.com/api/api/v1/custom_auth/token/', {
        username: values.username,
        password: values.password,
    })
        .then(response => {
            const accessToken = response.data.access;
            localStorage.setItem('access_token', accessToken);
            window.location.href = '/admin';
        })
        .catch(error => {
            console.error('Login failed:', error);
        });
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const App = () => (
    <>
        <Flex vertical className='login-flex' justify={'center'} align={'center'}>
            <h1>Login</h1>
            <Form
                name="basic"
                className={'login-form'}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Flex>
    </>
);

export default App;
