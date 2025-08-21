
import { exec } from 'child_process';

export const status = (req, res) => {
    const response = JSON.stringify({

    })
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}

export const serviceStatus = (req, res) => {
    try {
        const body = req.body;
        const serviceName = body.name;
        exec(`systemctl status ${serviceName}`, (error, stdout, stderr) => {
            //if (error) throw error;
            if(stderr) throw new Error(stderr);
            const isActive = stdout.includes('inactive') ? false: true;
            const response = JSON.stringify({
                status: '200',
                message: `El servicio ${serviceName} se encuentra ${isActive? "activo" : "inactivo"}`,
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