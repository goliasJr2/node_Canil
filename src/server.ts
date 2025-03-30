import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index';

// ======================================
// 1. Configuração inicial do ambiente
// ======================================
dotenv.config(); // Carrega variáveis do arquivo `.env` (ex: PORT, API keys)

// ======================================
// 2. Inicialização do servidor Express
// ======================================
const server = express();

// ======================================
// 3. Configuração do Mustache como template engine
// ======================================
server.set("view engine", "mustache"); // Define Mustache para renderizar views
server.set("views", path.join(__dirname, "views")); // Localiza a pasta de views
server.engine("mustache", mustache()); // Registra a engine Mustache

// ======================================
// 4. Configuração de arquivos estáticos (CSS, JS, imagens)
// ======================================
server.use(express.static(path.join(__dirname, "../public"))); // Pasta pública

// ======================================
// 5. Rotas (a serem implementadas)
// ======================================
server.use(mainRoutes); // Roteamento principal (definido em `routes/index.ts`)

server.use((req, res) => {
    res.send("Página não encontrada"); // Resposta padrão para rotas não definidas
})


// ======================================
// 6. Inicialização do servidor
// ======================================
const PORT = process.env.PORT || 3000; // Usa a porta do .env ou 3000 como fallback
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});