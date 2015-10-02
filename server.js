import Express from 'express';
import Jsx from 'node-jsx';
import http from 'http';
import routes from './routes';

let app = Express();
let port = process.env.PORT || 3000;

app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(Express.static(__dirname + '/public'))

app.get('/', routes.index);

http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

