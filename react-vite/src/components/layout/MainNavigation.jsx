import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from './MainNavigation.module.css'
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';


function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
      
                <Navbar className="bg-body-tertiary">
                    <Container>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                <Nav.Link href="/">All Meetups</Nav.Link>
                            </ListGroup.Item>
                            
                            <ListGroup.Item as="li" >
                                <Nav.Link href="/new-meetup">Add New Meetups</Nav.Link>
                            </ListGroup.Item>
                            <ListGroup.Item as="li">
                                <Nav.Link href="/favorites">
                                    My Favorites
                                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                                    </Nav.Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Container>
                </Navbar>
               
           
        </header>
    )
}

export default MainNavigation