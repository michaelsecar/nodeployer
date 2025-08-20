
export const status = (req, res) => {
    const response = JSON.stringify({
        status: '200',
        message: 'OK!'
    })
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
}