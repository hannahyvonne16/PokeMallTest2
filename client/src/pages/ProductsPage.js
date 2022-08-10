import Container from 'react-bootstrap/Container'
import NavBar from '../components/navbar'
import ProductListing from '../components/productList'
//import productListing from '../components/productListing'

function Product() {
    return (
        <div>
            <NavBar><div>Product</div></NavBar>
            <Container>
            <ProductListing />
        </Container>
        </div>





    )
}

export default Product