const express = require("express");

const app = express();
app.use(express.json());

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    console.log("Pedido recebido:", pedido);
    res.send({message: "Pedido criado com sucesso", pedido});
});

app.listen(4000, () => console.log("Rodando na porta 4000"))
