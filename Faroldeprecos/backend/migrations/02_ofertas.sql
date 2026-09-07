CREATE TABLE precos (
    id SERIAL PRIMARY KEY,
    produto_id INTEGER NOT NULL REFERENCES produtos(id),
    mercado_id INTEGER NOT NULL REFERENCES mercados(id),
    usuario_id INTEGER NOT NULL REFERENCES usuarios(id),
    preco DECIMAL(10, 2) NOT NULL,
    data TIMESTAMP NOT NULL DEFAULT NOW(),
    promocao BOOLEAN DEFAULT FALSE,
    motivo_promocao VARCHAR(255),
    observacao TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);