import axios from "axios";
import {useEffect, useState} from "react";
import {Card, Row, Col} from "antd";
import {useNavigate} from "react-router-dom";

export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vip-card.onrender.com/api/api/v1/');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Function to handle click and navigate to product detail page
    const handleCardClick = (id) => {
        navigate(`/product/${id}`); // Navigate to the product detail page with ID
    };
    console.log(data);
    

    return (
        <div style={{padding: '20px'}}>
            <Row gutter={[16, 16]}>
                {data.map((item, i) => (
                    <Col key={i} xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            cover={<img alt={item.name} src={item.image}
                                        style={{height: '200px', objectFit: 'cover'}}/>}
                            style={{borderRadius: '10px', overflow: 'hidden'}}
                            onClick={() => handleCardClick(item.id)} // Handle click event
                        >
                            <Card.Meta title={item.name} description={item.description}/>
                            <p style={{marginTop: '10px'}}>
                                <strong>Price: </strong>${item.price}
                            </p>
                            <p>
                                <strong>Stock: </strong>{item.stock}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
