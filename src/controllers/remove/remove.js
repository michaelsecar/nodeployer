
import { join } from 'path';
import os from 'os'
import fs from 'fs';

export const remove = async (req, res) =>  {
    try {
        const data = req.body;
        console.log(data);
        if(!data || !data.path || !data.name) throw new Error("No se han enviado datos dentro de la solicitud");
        const filePath = join(os.homedir(), data.path, data.name)
        if(fs.existsSync(filePath) ){
            fs.unlinkSync(filePath);
        }
        res.setHeader('Content-Type', 'application/json');
        res.send({
            status: '200',
            message: 'Se ha eliminado el archivo correctamente'
        });
    }
    catch(err){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({error: err.message}));
    }
}