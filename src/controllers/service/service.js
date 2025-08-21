import { execute } from "../../services/systemdService.js";
import {
  validateServiceName,
  validateOperationName,
} from "../../validators/serviceValidator.js";

export const service = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    if (!req.body.name || !req.body.operation)
      throw new Error("Agregue un nombre de servicio y una operación válida");
    const serviceName = validateServiceName(req.body.name);
    const operationName = validateOperationName(req.body.operation);
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
