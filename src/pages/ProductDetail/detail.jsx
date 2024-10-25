import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import "./detail.css";
import {Button, Form, Input, Modal} from "antd";

export function ProductDetailPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                console.log('Success:', values);

                axios.post('https://vip-card.onrender.com/api/order', values)
                    .then(response => {
                        console.log('Order submitted successfully', response);
                        setIsModalOpen(false);
                    })
                    .catch(error => {
                        console.error('Failed to submit order', error);
                    });
            })
            .catch((errorInfo) => {
                console.log('Failed:', errorInfo);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get('https://vip-card.onrender.com/api/api/v1/');
                const foundProduct = response.data.find(item => item.id === parseInt(id));

                if (foundProduct) {
                    setProduct(foundProduct);
                } else {
                    setError('Product not found');
                }

                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div style={{padding: '20px'}}>
            <div className={'main-wrapper'}>
                <div className={'image-wrapper'}>
                    <img src={product.image} className={'detail-image'}/>
                </div>
                <div className={'content'}>
                    <h1>Maxsulot nomi: {product.name}</h1>
                    <h1>Narxi: {product.price}</h1>
                    <h1>Maxsulot soni: {product.stock}</h1>
                    <p>Maxsulot haqida malumot: {product.definition}</p>

                    <Button onClick={showModal} className={'order-button'} type={"primary"}>
                        Buyurtma qilish
                    </Button>
                    <Modal title="Buyurtma qilish" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            form={form}
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Ismingiz"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Telefon raqamingiz"
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Iltimos raqamigizni qoldiring!',
                                    },
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </div>
    );
}
