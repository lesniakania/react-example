import React from 'react';
import Main from './components/Main';

let routes = {
  index: function(req, res) {
    res.render('index', {
      app: React.renderToString(<Main name='Ania' />)
    })
  }
}

export default routes
