export const validateServiceName = (serviceName) => {
  const formattedServiceName = serviceName.split(" ")[0];
  if (!formattedServiceName.endsWith(".service"))
    throw new Error("El nombre del servicio no es válido");
  return formattedServiceName;
};
export const validateOperationName = (operationName) => {
  const operation = operationName.split(" ")[0];
  if (
    operation != "status" ||
    operation != "enable" ||
    operation != "disable" ||
    operation != "start" ||
    operation != "stop" ||
    operation != "restart"
  ) {
    return operation;
  }
  throw new Error("Nombre de la operación inválida");
};
