
export const deploy = async (req, res) =>  {
    try {
        const data= req.body;
        console.log(data);
        if(!data) throw new Error("No content")

        res.setHeader('Content-Type', 'application/json');
        res.send("ok");
    }
    catch(err){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({error: err.message}));
    }
}