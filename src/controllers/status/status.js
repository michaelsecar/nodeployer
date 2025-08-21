export const status = (req, res) => {
  const response = JSON.stringify({
    status: "OK!",
  });
  res.setHeader("Content-Type", "application/json");
  res.send(response);
};
