import React from 'react';
import {Locations, Location} from 'react-router-component';
import Main from './components/Main';

export default {
  index: function(req, res) {
    let routes = (
      <Locations path="/">
        <Location path="/" handler={Main} name="Ania" />
      </Locations>
    );

    res.render('index', {
      app: React.renderToString(routes)
    })
  }
}

