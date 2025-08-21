import { exec } from "child_process";

export const execute = (operation, serviceName) => {
  let response = {
    status: "500",
    message:
      "Verifique que el usuario tenga permisos para acceder a los servicios",
  };
  const command = `sudo systemctl ${operation} ${serviceName}`;
  switch (operation) {
    case "status":
      exec(command, (error, stdout, stderr) => {
        //if (error) throw error;
        if (stderr) throw new Error(stderr);
        const isActive = stdout.includes("inactive") ? false : true;
        if (error || !isActive)
          throw new Error(`El servicio ${serviceName}, se encuentra inactivo`);
        response = {
          message: `El servicio ${serviceName}, se encuentra activo`,
          active: true,
        };
      });
      break;
    case "enable":
      exec(command, (error, stdout, stderr) => {
        if (stderr || error)
          throw new Error(
            `Error al intentar habilitar el servicio ${serviceName}`,
          );
        response = {
          status: 500,
          message: `Se ha habilitado el servicio ${serviceName}`,
          active: true,
        };
      });
      break;
    case "disable":
      exec(command, (error, stdout, stderr) => {
        if (stderr || error)
          throw new Error(
            `No se ha podido deshabilitar el servicio ${serviceName}`,
          );
        response = {
          message: `Se ha deshabilitar el servicio ${serviceName}`,
          active: false,
        };
      });
      break;
    case "start":
      exec(command, (error, stdout, stderr) => {
        if (error || stderr)
          throw new Error(`Error al iniciar el servicio ${serviceName}`);
        response = {
          message: `Se ha iniciado el servicio ${serviceName}`,
          active: true,
        };
      });
      break;
    case "stop":
      exec(command, (error, stdout, stderr) => {
        if (stderr)
          throw new Error(
            `Error al detener el servicio servicio ${serviceName}`,
          );
        response = {
          message: `Se ha detenido el servicio servicio ${serviceName}`,
          active: false,
        };
      });
      break;
    case "restart":
      exec(command, (error, stdout, stderr) => {
        if (stderr)
          throw new Error(
            `Hubo un error al reiniciar el servicio servicio ${serviceName}`,
          );
        response = {
          message: `Se ha reiniciado el servicio servicio ${serviceName}`,
          active: true,
        };
      });
      break;
  }
  return response;
};
