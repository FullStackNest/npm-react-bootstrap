import { useEffect, useState } from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link as RouterLink } from 'react-router-dom'
import { useMedia } from 'react-use'
import { TelephoneIcon } from '../../icons';
import ProductItem from '../ProductItem/ProductItem';




const Header = () => {
    const isSmallScreen = useMedia('(max-width:992px');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setApiData(data)
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSideBarToogle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    console.log(isSidebarOpen);

    return (
        <>

            <Navbar expand={"lg"} className="bg-body-primary bg-primary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                    <Navbar.Toggle onClick={handleSideBarToogle} aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                        show={isSidebarOpen}
                        onHide={() => setIsSidebarOpen(false)}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className='' id={`offcanvasNavbarLabel-expand-lg`}>
                                BrandName
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <RouterLink onClick={handleSideBarToogle} className='nav-link ' to="/">Home</RouterLink>
                                <RouterLink onClick={handleSideBarToogle} className='nav-link ' to="/about-us">About US</RouterLink>

                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant={`outline-${isSmallScreen ? "primary" : "light"}`}>Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <TelephoneIcon className="text-primary" sx={{ height: "64px", width: "64px" }} />

            <div className='px-4'>
                {isLoading ? (
                    <ProductItem isLoading={true} />
                ) : (

                    apiData?.map((item, index) => (
                        <ProductItem imageType={index % 2 === 0 ? "square" : "rounded"} item={item} key={item.id} />
                    ))
                )}
            </div>

        </>
    );
}

export default Header