import express from "express";
import cors from "cors";
import rotasPrecos from "./precos/precos.routes";
import rotasAuth from "./auth/auth.routes";
import rotasCategorias from "./categorias/categorias.routes";
import rotasMercados from "./mercados/mercados.routes";
import { errorHandler } from "./errors/errorHandler";
import { configurarSwagger } from "./docs/swagger"; 

const app = express();

app.use(cors());
app.use(express.json());


configurarSwagger(app);


app.use(rotasAuth);
app.use(rotasCategorias);
app.use(rotasMercados);
app.use(rotasPrecos);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;