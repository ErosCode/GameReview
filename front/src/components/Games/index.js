import React from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  FormControl,
  Button,
  Navbar,
} from 'react-bootstrap';

import './styles.scss';

const Games = () => (
  <div className="games">
    <Navbar bg="dark" variant="dark">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    Games
  </div>
);

export default Games;
