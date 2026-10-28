CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE mercados (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200) NOT NULL
);

-- NOVA TABELA: A 5ª entidade obrigatória
CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    marca VARCHAR(100),
    imagem_url TEXT, -- Requisito do dado não estruturado (Imagem)
    menor_preco_historico DECIMAL(10, 2), -- Para o cálculo do backend
    categoria_id INTEGER NOT NULL REFERENCES categorias(id) -- Ligação à 5ª entidade
);