import { execute } from "../../services/systemdService";
import {
  validateServiceName,
  validaOperationName,
} from "../../validators/serviceValidator";

export const service = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    if (!req.body.name || !req.body.operation)
      throw new Exception(
        "Agregue un nombre de servicio y una operación válida",
      );
    const serviceName = validateServiceName(req.body.name);
    const operationName = validaOperationName(req.body.operation);
    const response = execute(operationName, serviceName);
    res.send(JSON.stringify(response));
  } catch (err) {
    res.send(
      JSON.stringify({
        error: err.message,
      }),
    );
  }
};
