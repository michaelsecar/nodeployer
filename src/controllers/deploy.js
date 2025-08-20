
import { join } from 'path';
import os from 'os'
import fs from 'fs';

export const deploy = async (req, res) =>  {
    try {
        const data = req.body;
        const file = req.file;
        if(!data) throw new Error("No se han enviado datos dentro de la solicitud");
        if(!file) throw new Error("No se ha enviado un archivo");

        const filePath = join(os.homedir(), data.path)
        if(!fs.existsSync(filePath) ){
            fs.mkdirSync(filePath);
        }
        fs.copyFileSync(file.path, join(filePath, data.name));

        res.setHeader('Content-Type', 'application/json');
        res.send("ok");
    }
    catch(err){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({error: err.message}));
    }
}