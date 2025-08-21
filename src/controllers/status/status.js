
import { exec } from 'child_process';
import { parse } from 'path';

export const status = (req, res) => {
    const response = JSON.stringify({

    })
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}

export const serviceStatus = (req, res) => {
    try {
        if(!req.body.name) throw new Error('No se ha enviado el nombre del servicio');
        const parsedName = req.body.name.split(' ')[0];
        const isValidService = parsedName.endsWith('.service');
        if(!isValidService) throw new Error('El nombre del servicio no es válido');

        exec(`systemctl status ${parsedName}`, (error, stdout, stderr) => {
            //if (error) throw error;
            if(stderr) throw new Error(stderr);
            const isActive = stdout.includes('inactive') ? false: true;
            const response = JSON.stringify({
                status: '200',
                message: `El servicio ${parsedName} se encuentra ${isActive? "activo" : "inactivo"}`,
                isActive: isActive
            })
            res.setHeader('Content-Type', 'application/json');
            res.send(response);
        });
    }
    catch(err) {
        const response = JSON.stringify({
            status: '500',
            message: err.message
        })
        res.setHeader('Content-Type', 'application/json');
        res.send(response);
    }
}