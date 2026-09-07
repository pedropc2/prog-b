-- Limpa dados existentes para poder rodar o seed várias vezes sem duplicar
TRUNCATE precos, produtos, mercados, usuarios RESTART IDENTITY CASCADE;

-- Inserindo usuários de teste
INSERT INTO usuarios (nome, email, senha) VALUES
('Ana Silva', 'ana@email.com', '123456'),
('Bruno Costa', 'bruno@email.com', '123456'),
('Carla Souza', 'carla@email.com', '123456');

-- Inserindo mercados de teste
INSERT INTO mercados (nome, endereco) VALUES
('Supermercado Preço Bom', 'Av. Central, 100'),
('Atacadão Econômico', 'Rodovia Itabaiana, km 2'),
('Mercadinho do Bairro', 'Rua das Flores, 45');

-- Inserindo produtos de teste
INSERT INTO produtos (nome, marca, categoria) VALUES
('Leite Integral 1L', 'Italac', 'Laticínios'),
('Arroz 5kg', 'Tio João', 'Grãos'),
('Feijão Carioca 1kg', 'Camil', 'Grãos'),
('Café 250g', '3 Corações', 'Bebidas');

-- Inserindo preços cadastrados pela comunidade
INSERT INTO precos (produto_id, mercado_id, usuario_id, preco, data, promocao, motivo_promocao, observacao) VALUES
(1, 1, 1, 5.49, NOW(), FALSE, NULL, 'Encontrado na gôndola principal'),
(1, 2, 2, 4.99, NOW(), TRUE, 'Queima de estoque', 'Próximo ao vencimento (vence em 3 dias)'),
(2, 2, 1, 24.90, NOW(), FALSE, NULL, 'Preço normal de atacado'),
(2, 3, 3, 22.50, NOW(), TRUE, 'Oferta de inauguração', 'Promoção válida apenas hoje'),
(3, 1, 2, 8.99, NOW(), FALSE, NULL, 'Pacote de 1kg'),
(4, 3, 3, 11.90, NOW(), FALSE, NULL, 'Em pó tradicional');