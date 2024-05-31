import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	return (
		<Navbar expand="lg" className="navbar-dark bg-dark fixed-top float-end">
			<Container className="">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav d-flex justify-content-end">
					<Nav className="">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link 1</Nav.Link>
						<Nav.Link href="#link">Link 2</Nav.Link>
						<Nav.Link href="#link">Link 3</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
