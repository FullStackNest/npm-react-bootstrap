import { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem';

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
                <div className="row">
                    {apiData?.map((item, index) => (
                        <div key={item.id} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            {/* 12 girds per row: xl-3 => 4 grids */}
                            <ProductItem imageType={index % 2 === 0 ? "square" : "rounded"} item={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products