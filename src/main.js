
import express from 'express';
import multer from 'multer';
import { deploy } from './controllers/deploy.js';
import { status } from './controllers/status.js';
import { remove } from './controllers/remove.js';

export class Nodeployer {
  constructor() {
    this.app = express();
    this.load();
  }

  load() {
    const upload = multer({
      dest: 'uploads/'
    });
    this.app.use(express.urlencoded({ extended: true }));

    // endpoints
    this.app.get('/status', upload.none(), status);
    this.app.post('/deploy', upload.single('file'), deploy);
    this.app.post('/remove', upload.none(), remove);
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  }
}