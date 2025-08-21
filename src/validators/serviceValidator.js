export const validateServiceName = (serviceName) => {
  const formattedServiceName = serviceName.split(" ")[0];
  if (!formattedServiceName.endsWith(".service"))
    throw new Exception("El nombre del servicio no es válido");
  return formattedServiceName;
};
export const validaOperationName = (operationName) => {
  const operation = operationName.split(" ")[0];
  if (
    operation != "status" ||
    operation != "enable" ||
    operation != "disable" ||
    operation != "start" ||
    operation != "stop" ||
    operation != "restart"
  ) {
    throw new Exception("Nombre de la operación inválida");
  }
  return operation;
};
