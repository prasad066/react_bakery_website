import { useGetAllcakesQuery } from '../../services/cakes'
import './cakes.css'
import { Link } from 'react-router-dom'

const Cakes = () => {
    const{isLoading,data}=useGetAllcakesQuery()

  return (
    <div className="cakes-container">
        { isLoading && <button className="btn btn-primary cakes-loading-btn" type="button" disabled>
  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>}
{
    data?.map((d,i)=>{
        return(
            <div className="cake-card" key={i}>
                <div className="cake-image-wrapper">
                    <img className="cake-image" src={d.imageSrc} alt={d.name} />
                </div>
                <div className="cake-content">
                    <h3 className="cake-name">{d.name}</h3>
                    <p className="cake-description">{d.description}</p>
                    <Link to={`/${d.id}`}>
                    <button className="btn btn-primary cake-button">More Details...</button>
                    </Link>
                    
                </div>
            </div>
        )
    })
}
    </div>
  )
}

export default Cakes