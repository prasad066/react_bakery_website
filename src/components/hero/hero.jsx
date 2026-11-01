import { Link } from 'react-router-dom'
import { useGetAllcakesQuery } from '../../services/cakes'
import './hero.css'

const Home = () => {

    const { isLoading, data } = useGetAllcakesQuery()


    return (
        <section className="bakery-hero">

            {/* Background image slider */}
            <div className="bakery-slider">

                {isLoading && (
                    <div className="bakery-loader" role="status">
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>
                )}

                {data?.map((cake, index) => (
                    <div
                        className="bakery-slide"
                        key={index}
                        style={{
                            animationDelay: `${index * 4}s`
                        }}
                    >
                        <Link
                            to="/cakes"
                            className="bakery-image-link"
                        >
                            <img
                                src={cake.imageSrc}
                                alt={cake.name}
                                className="bakery-background"
                            />
                        </Link>
                    </div>
                ))}

            </div>


            {/* Dark layer over image */}
            <div className="bakery-overlay"></div>


            {/* Center caption */}
            <div className="bakery-content">

                <h1>
                    Freshly baked, made with love.
                </h1>

                <p>
                    From delicious cakes to delightful treats, we bring
                    a little sweetness to every moment.
                </p>

                <h2>
                    Taste happiness in every bite.
                </h2>

            </div>

        </section>
    )
}

export default Home