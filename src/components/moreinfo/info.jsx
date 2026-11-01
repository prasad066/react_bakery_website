import { useParams } from 'react-router-dom'
import { useGetAllcakesQuery } from '../../services/cakes'
import { useDispatch } from 'react-redux'
import { additem } from '../cart/cartitems'
import './info.css'

const Info = () => {

    const { isLoading, data } = useGetAllcakesQuery()
    const { id } = useParams()
    const dispatch = useDispatch()

    return (
        <div className="product-page">

            {isLoading && (
                <div className="product-loading">
                    Loading...
                </div>
            )}

            {
                data?.map((d) => {

                    if (d.id == id) {

                        return (
                            <div className="product-container" key={d.id}>

                                {/* Product Image */}
                                <div className="product-image-section">

                                    <img
                                        src={d.imageSrc}
                                        alt={d.name}
                                        className="product-image"
                                    />

                                </div>


                                {/* Product Details */}
                                <div className="product-details">

                                    <span className="product-category">
                                        {d.category}
                                    </span>

                                    <h1 className="product-name">
                                        {d.name}
                                    </h1>

                                    <div className="product-rating">

                                        <span className="rating-stars">
                                            ★★★★★
                                        </span>

                                        <span className="rating-number">
                                            {d.rating}
                                        </span>

                                        <span className="review-count">
                                            ({d.reviewsCount} reviews)
                                        </span>

                                    </div>


                                    <p className="product-description">
                                        {d.description}
                                    </p>


                                    <div className="product-price">
                                        ${d.price}
                                    </div>


                                    {/* Product Information */}

                                    <div className="product-info">

                                        <div className="info-row">
                                            <span className="info-label">
                                                Weight
                                            </span>

                                            <span className="info-value">
                                                {d.weight}
                                            </span>
                                        </div>

                                        <div className="info-row">
                                            <span className="info-label">
                                                Size
                                            </span>

                                            <span className="info-value">
                                                {d.dimensions}
                                            </span>
                                        </div>

                                        <div className="info-row">
                                            <span className="info-label">
                                                Calories
                                            </span>

                                            <span className="info-value">
                                                {d.caloriesPerServing} calories / serving
                                            </span>
                                        </div>

                                        <div className="info-row">
                                            <span className="info-label">
                                                Shelf life
                                            </span>

                                            <span className="info-value">
                                                {d.shelfLife}
                                            </span>
                                        </div>

                                        <div className="info-row">
                                            <span className="info-label">
                                                Type
                                            </span>

                                            <span className="info-value">
                                                {d.isVegetarian
                                                    ? 'Vegetarian'
                                                    : 'Non-Vegetarian'}
                                            </span>
                                        </div>

                                        <div className="info-row">
                                            <span className="info-label">
                                                Availability
                                            </span>

                                            <span
                                                className={
                                                    d.inStock
                                                        ? 'stock-available'
                                                        : 'stock-unavailable'
                                                }
                                            >
                                                {d.inStock
                                                    ? 'In Stock'
                                                    : 'Out of Stock'}
                                            </span>
                                        </div>

                                    </div>


                                    {/* Allergens */}

                                    <div className="product-section">

                                        <h3 className="section-title">
                                            Allergens
                                        </h3>

                                        <div className="tag-list">

                                            {d.allergens?.map((allergen, index) => (
                                                <span
                                                    className="allergen-tag"
                                                    key={index}
                                                >
                                                    {allergen}
                                                </span>
                                            ))}

                                        </div>

                                    </div>


                                    {/* Tags */}

                                    <div className="product-section">

                                        <h3 className="section-title">
                                            Tags
                                        </h3>

                                        <div className="tag-list">

                                            {d.tags?.map((tag, index) => (
                                                <span
                                                    className="product-tag"
                                                    key={index}
                                                >
                                                    #{tag}
                                                </span>
                                            ))}

                                        </div>

                                    </div>


                                    {/* Add To Cart */}

                                    <div className="product-actions">

                                        <button
                                            className="add-cart-button"
                                            onClick={() => {
                                                dispatch(additem(d))
                                            }}
                                            disabled={!d.inStock}
                                        >
                                            {d.inStock
                                                ? 'Add to Cart'
                                                : 'Out of Stock'}
                                        </button>

                                    </div>

                                </div>

                            </div>
                        )
                    }

                    return null
                })
            }

        </div>
    )
}

export default Info