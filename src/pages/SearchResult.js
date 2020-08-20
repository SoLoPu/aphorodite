import React, { Component, useState } from 'react'
import { Container, Col, Row } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import SearchItem from '../component/SearchItem';
import Pagination from '../component/pagination';
import database from '../database/data.json';

import "../css/searchResult.css"


const  SearchResult = () => {
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    const [currentProducts,setCurrentProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(null);
    const [totalPages,setTotalPages] = useState(null);

    const onPageChanged = data => {

        const allProducts = database;
        const { currentPage } = data;

        const pageLimit = 8;
        const totalPages = 6;
        const offset = (currentPage - 1) * pageLimit;
        const currentProduct = allProducts.slice(offset, offset + pageLimit);
    

        setCurrentPage(currentPage);
        setCurrentProducts(currentProduct);
        setTotalPages(totalPages);
      }
    


    const query = useQuery();
    return(
        <Container className="SearchResult" fluid="true" style={{paddingLeft: "200px", paddingRight: "200px"}}>
            <Row >
                
                <h2>Cau Chuyen</h2>
            </Row>
            <Row>
                <Col md="7" className="">
                    <img src="https://ss-images.catscdn.vn/2016/08/26/710789/cats.jpg" alt="banner-left" style={{width:"600pt", height:"250pt", borderRadius:"5pt"}}></img>
                </Col>
                <Col md="4" className="">
                    <img src="https://ss-images.catscdn.vn/2016/08/26/710789/cats.jpg" alt="banner-left" style={{width:"450pt", height:"250pt", borderRadius:"5pt"}}></img>
                </Col>
            </Row>


            <Row>
                <Col>
                    <button>
                        Filter
                    </button>
                    <button>
                        Sap xep
                    </button>
                </Col>
            </Row>

            <p>{database.length} ket qua cho "{query.get("key")}" </p>


            <Row >
                
                    {currentProducts.map((product, index)=>
                        <Col md="3" style={{backgroundColor: "#E7E7E7", padding: "0"}}>
                            <SearchItem product={product}/>
                        </Col>
                    )}

            </Row>

            <Row>
                <div className="d-flex flex-row py-4 align-items-center" style={{display:"flex", alignContent:"center", justifyItems:"center"}}>
                    <Pagination totalRecords={50} pageLimit={8} pageNeighbours={0} onPageChanged={onPageChanged} />
                </div>
            </Row>
            
            
        </Container>
    );
    
}



export default SearchResult;