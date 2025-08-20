
import express from 'express';
import multer from 'multer';
import { deploy } from './controllers/deploy';
import { status } from './controllers/status';

export class Nodeployer {
  constructor() {
    this.app = express();
    this.load();
  }

  load() {
    const upload = multer(dest='uploads/');
    this.app.use(express.json());

    // endpoints
    this.app.get('/status', status);
    this.app.post('/deploy', upload.single('file'), deploy);
  }

  start() {
    this.app.listen(3000, () => {
      console.log('Example app listening on port 3000!');
    });
  }
}