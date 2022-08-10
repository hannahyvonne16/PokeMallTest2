import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from '../components/NavBar'
import ProductListing from '../components/productListing'
//import productListing from '../components/productListing'

function Product() {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/api/products/getProducts')
            const newData = await response.json();
            setProductsData(newData);
            console.log(newData)
        }
        getProducts();
    }, [])
    return (
        <div>
            <NavBar><div>Product</div></NavBar>
            <Container>
            <Row>
                {productsData.map(() => {
                    return <Col>
                
                    </Col>
                })}

            </Row>
        </Container>
        </div>





    )
}

export default Product