import React from 'react';
import GifItemImage from './GifGridItem';
import './GifGridCategory.scss'
import { useFetchGrid } from '../hooks/useFetchGrid';
/* import { getGift } from '../Services/GridGifService';
 */const GridCategory = ({arrCategory}) => { 
    const inputValue=arrCategory[0];
    /* const [image, setImage] = useState([]);
    
    useEffect(()=>{ 
       getGift(inputValue).then(img => setImage(img));
    },[inputValue]) */
    const {data:image, loading} = useFetchGrid(inputValue);
    return (
        <>
        <h3>Categoría : {inputValue}</h3>
        {
            loading && (<p className="animate__animated animate__flash">Cargando datos...</p>)
        }
        
        
        <ol>
        {
            image.map ( (item) => (
            <li key={item.id}>
                <div  className="container-grid-item animate__animated animate__fadeIn">
                <div>   
                <GifItemImage  url={item.url} />
                <p className="card-title">{item.title}</p>
                </div>
                
            </div>
            </li>     
            ))
        }
        </ol>
        </>
    )
}
export default GridCategory;