import React, { useState } from 'react'
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import SearchItem from '../component/SearchItem';
import Pagination from '../component/pagination';
import database from '../database/data.json';

import "../css/searchResult.css"


const  SearchResult = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();

    const [stateAllProducts,setAllProducts] = useState([]);
    const [currentProducts,setCurrentProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(null);
    const [totalPages,setTotalPages] = useState(null);

    function setNewDate() {
        let allProducts = [];
            database.forEach((item) => {
                if(item.name.includes(query.get("key"))){
                    allProducts.push(item);
                }
                console.log(item);
            });
        setAllProducts([...allProducts],console.log(stateAllProducts));
    }


    const onPageChanged = data => {

        let allProducts = [];
            database.forEach((item) => {
                if(item.name.includes(query.get("key"))){
                    allProducts.push(item);
                }
            });
        const { currentPage } = data;

        const pageLimit = 8;
        const totalPages = 6;
        const offset = (currentPage - 1) * pageLimit;
        const currentProduct = allProducts.slice(offset, offset + pageLimit);
    

        setAllProducts(state => [...allProducts]);
        setCurrentPage(currentPage);
        setCurrentProducts(currentProduct);
        setTotalPages(totalPages);
      }
    


    
    return(
        <div className="SearchResult">
            <div className="collection-banner">
                <img className="collection-banner-img" src="http://media.gucci.com/content/HeroRegularStandard_1600x675/1595347205/HeroRegularStandard_FS03-JACKIE-canvas-02_001_Default.jpg" alt="Banner" />
                <h1 className="collection-banner-title">THE JACKIE 1961</h1>
            </div>
            <Container className="SearchResult" fluid="true" style={{paddingLeft: "50px"}}>
                <Row>
                    <h2 className="story-title">Câu chuyện</h2>
                </Row>
                <Row style={{paddingBottom: "50px"}}>
                    <Col md="7" className="collection-story" style={{padding:0}}>
                        <img src="https://cdn.videogamesblogger.com/wp-content/uploads/2019/09/Arise-A-Simple-Story-Banner.jpg" alt="banner-left" style={{width:"700pt", height:"250pt", borderRadius:"10pt"}}></img>
                    </Col>
                    <Col md="5" className="">
                        <img src="https://cdn.shopify.com/s/files/1/0083/5167/8530/files/banner1_1920x960.png?v=1594625614" alt="banner-left" style={{width:"470pt", height:"250pt", borderRadius:"10pt"}}></img>
                    </Col>
                </Row>
                <Row >
                    <Col className="btn-search" md="5" style={{padding: "0"}}>
                        <button className="btn-search-filter">Bộ lọc</button>
                        <button className="btn-search-filter">Sắp xếp</button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{padding: "0"}}>
                    <p style={{paddingTop: "25px", paddingBottom:"25px"}}>{stateAllProducts.length} kết quả cho "{query.get("key")}" </p>
                    </Col>
                </Row>
            </Container>

            <Container className="SearchResult" fluid="true">
            <Row style={{paddingLeft: "25px", paddingRight:"30px"}}>
                
                    {currentProducts.map((product, index)=>
                        <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}} key={index}>
                            <SearchItem product={product}/>
                        </Col>
                    )}

            </Row>

            <Row>
                <div className="d-flex flex-row py-4 align-items-center" style={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:"100px"}}>
                    <Pagination totalRecords={50} pageLimit={8} pageNeighbours={0} onPageChanged={onPageChanged} />
                </div>
            </Row>
            
            
        </Container>
        </div>
        
    );
    
}



export default SearchResult;