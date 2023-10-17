
import './ProductItem.css'
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


/**
 * 
 * @param {item, imageType} item - Array of product objects , imageType: square | rounded
 * @returns Elements
 */
const ProductItem = ({ item, imageType, isLoading }) => {
    if (isLoading) {
        return (
            [1, 2, 3].map(item => (
                <div key={item} className="custom-card d-flex align-items-center justify-content-between p-4 my-3">

                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={8} />
                            <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={2} />
                    </Card.Body>
                    <Placeholder className={`img-${item % 2 === 0 ? "square" : "rounded"}`} />
                </div>
            ))
        )
    }
    return (
        <div className="custom-card d-flex flex-column align-items-center justify-content-between p-4 my-3" key={item.id}>
            <img className={`img-${imageType}`} src={item.image} />
            <div className="details">
                <p><b>Title:</b> {item.title}</p>
                <p><b>Description:</b> {item.description}</p>
                <button type="button" className="btn btn-primary">
                    Rating <span className="badge bg-warning">{item.rating.rate}&nbsp;<i className="bi bi-star-fill"></i></span>
                </button>
            </div>

        </div>
    )
}
ProductItem.propTypes = {
    item: PropTypes.object,
    imageType: PropTypes.string,
    isLoading: PropTypes.bool,
}

export default ProductItem