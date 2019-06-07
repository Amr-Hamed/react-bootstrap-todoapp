import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './TodoNavBar.css'

export default class TodoNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
            <h1>My Todos</h1>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Bondok
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        profile
                    </DropdownItem>
                    <DropdownItem>
                        todos
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}