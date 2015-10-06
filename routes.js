import React from 'react';
import {Locations, Location} from 'react-router-component';
import Main from './components/Main';

export default (
  <Locations path="/">
    <Location path="/" handler={Main} />
  </Locations>
);

