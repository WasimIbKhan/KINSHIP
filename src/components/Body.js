import SearchFilter from './SearchFilter'
import ProductBox from './ProductBox';
import './Body.css'
function Body () {
    return (
      <div className="Body">
        <SearchFilter />
        <ProductBox />
      </div>
    );
    
}

export default Body;