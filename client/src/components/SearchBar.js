import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

        function SearchBar(props) {
            let [searchTerm, setSearchTerm] = useState('')
            

            return (
                <Form className="d-flex" onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button size="sm" variant="outline-primary">Search</Button>
            </Form>
            )
        }

        export default SearchBar
    