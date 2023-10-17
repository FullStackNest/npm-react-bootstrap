import { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setApiData(data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='px-4'>
            {isLoading ? (
                <ProductItem isLoading={true} />
            ) : (
                <Row>
                    {apiData?.map((item, index) => (
                        <Col key={item.id} xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                            {/* 12 girds per row: xl-3 => 4 grids */}
                            <ProductItem imageType={index % 2 === 0 ? "square" : "rounded"} item={item} />
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    )
}

export default Products