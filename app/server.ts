import app from './app';
import { PORT } from './utils/constants';

app.listen( PORT, () => {
  console.log('Example app listening on port ' + PORT +' !');
});