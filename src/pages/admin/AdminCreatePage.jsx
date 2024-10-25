import React, {useState} from 'react';
import {Form, Input, InputNumber, Button, Upload, message} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import axios from 'axios';

function AdminCreatePage() {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('price', values.price);
        formData.append('stock', values.stock);
        formData.append('definition', values.definition);
        formData.append('image', values.image[0].originFileObj);

        setLoading(true);
        try {
            const response = await axios.post('https://vip-card.onrender.com/api/api/v1/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            message.success('Product created successfully!');
            console.log(response.data);
        } catch (error) {
            console.error(error);
            message.error('Failed to create product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{minHeight: '50vh', padding: '20px'}}>
            <h2>Create New Product</h2>
            <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                    name: '',
                    price: 0,
                    stock: 0,
                    definition: '',
                }}
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{required: true, message: 'Please input the product name!'}]}
                >
                    <Input placeholder="Enter product name"/>
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{required: true, message: 'Please input the price!'}]}
                >
                    <InputNumber
                        placeholder="Enter price"
                        min={0}
                        style={{width: '100%'}}
                    />
                </Form.Item>

                <Form.Item
                    label="Stock"
                    name="stock"
                    rules={[{required: true, message: 'Please input the stock!'}]}
                >
                    <InputNumber
                        placeholder="Enter stock quantity"
                        min={0}
                        style={{width: '100%'}}
                    />
                </Form.Item>

                <Form.Item
                    label="Definition"
                    name="definition"
                    rules={[{required: true, message: 'Please input the definition!'}]}
                >
                    <Input.TextArea placeholder="Enter product definition"/>
                </Form.Item>

                <Form.Item
                    label="Product Image"
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                    rules={[{required: true, message: 'Please upload a product image!'}]}
                >
                    <Upload name="image" listType="picture" beforeUpload={() => false}>
                        <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Create New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AdminCreatePage;
