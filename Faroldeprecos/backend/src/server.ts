import app from "./app";
import { configuracao } from "./config";

app.listen(configuracao.porta, () => {
  console.log(`Servidor rodando com sucesso na porta ${configuracao.porta}`);
});