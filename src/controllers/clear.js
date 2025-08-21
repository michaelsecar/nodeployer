
import fs from 'fs';
import { resolve } from 'path';

export const clear = (req, res) => {
    try {
        fs.readdirSync('uploads/').forEach(file => {
            const uploadFolder = resolve('uploads', file);
            fs.unlinkSync(uploadFolder);
        });
        const response  = {
            status: 200,
            message: 'Se han eliminado todos los archivos'
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
    catch(err) {
        const response = {
            status: 500,
            message: err.message
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response));
    }
}