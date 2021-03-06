import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/searchItem.css';



const SearchItem = (props) => {
    const [hover, setHover] = useState(false);
    const { product } = props;
    if(hover===false){
        return(
            <div className="wrapper">
                <Link to={`/detail/${product.key}`} className="link-no-hover nav-link" style={{border:"1px solid white", color: "black", justifyItems:"center", alignItems:"center", display:"flex"}}
                                    onMouseEnter={()=>{
                                        setHover(!hover);
                                    }}
                                    onMouseLeave={()=>{
                                        setHover(!hover);
                                    }}
                                    >
                                        <img className="item-img-not-hover" src={product.src1} alt=""/>
                </Link>
            </div>
        )
    }else {
        return(
            <div className="wrapper">
                <Link to={`/detail/${product.key}`} className="link-hover nav-link" 
                                    onMouseEnter={()=>{
                                        setHover(!hover);
                                    }}
                                    onMouseLeave={()=>{
                                        setHover(!hover);
                                    }}

                                    >
                                        
                                        <img className="item-img" src={product.src2} alt="Mat hình"/>
                                        <p className="name">{product.name}</p>
                                        <p className="price" style={{paddingBottom: "50px"}}>${product.price}</p>
                </Link>
            </div>
        )
    }
   
}


export default SearchItem;