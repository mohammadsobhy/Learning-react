import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
	return (
		<Navbar bg="dark" variant="primary" expand="lg">
			<Container>
				<Navbar.Brand href="#" className="text-white">
					Logo
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#link1" className="text-white">
							Link 1
						</Nav.Link>
						<Nav.Link href="#link2" className="text-white">
							Link 2
						</Nav.Link>
						<Nav.Link href="#link3" className="text-white">
							Link 3
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
