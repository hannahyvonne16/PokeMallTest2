import Container from 'react-bootstrap/Container'
import NavBar from '../components/navbar'
import ProductDetails from '../components/productDetails'

function DetailsPage() {
    return (
        <div>
            <NavBar />
            <Container>
                <ProductDetails />
            </Container>
        </div>





    )
}

export default DetailsPage;