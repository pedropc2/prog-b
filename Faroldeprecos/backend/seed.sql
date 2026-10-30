-- Limpa dados existentes para poder rodar o seed várias vezes sem duplicar
TRUNCATE precos, produtos, mercados, categorias, usuarios RESTART IDENTITY CASCADE;

-- 1. Inserindo a 5ª entidade obrigatória: categorias
INSERT INTO categorias (nome, descricao) VALUES
('Laticínios', 'Leite, queijos, iogurtes e derivados'),
('Grãos e Cereais', 'Arroz, feijão, milho, aveia e grãos em geral'),
('Bebidas', 'Cafés, sucos, refrigerantes e águas');

-- 2. Inserindo usuários de teste (com hash de senha bcrypt para '123456')
INSERT INTO usuarios (nome, email, senha) VALUES
('Ana Silva', 'ana@email.com', '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeg6Lruj3vjPGga31lW'),
('Bruno Costa', 'bruno@email.com', '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeg6Lruj3vjPGga31lW'),
('Carla Souza', 'carla@email.com', '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeg6Lruj3vjPGga31lW');

-- 3. Inserindo mercados de teste
INSERT INTO mercados (nome, endereco) VALUES
('Supermercado Preço Bom', 'Av. Central, 100'),
('Atacadão Econômico', 'Rodovia Itabaiana, km 2'),
('Mercadinho do Bairro', 'Rua das Flores, 45');

-- 4. Inserindo produtos de teste (com categoria_id, imagem_url e menor_preco_historico)
INSERT INTO produtos (nome, marca, categoria_id, imagem_url, menor_preco_historico) VALUES
('Leite Integral 1L', 'Italac', 1, 'https://exemplo.com/imagens/leite.jpg', 4.99),
('Arroz 5kg', 'Tio João', 2, 'https://exemplo.com/imagens/arroz.jpg', 22.50),
('Feijão Carioca 1kg', 'Camil', 2, 'https://exemplo.com/imagens/feijao.jpg', 8.99),
('Café 250g', '3 Corações', 3, 'https://exemplo.com/imagens/cafe.jpg', 11.90);

-- 5. Inserindo preços cadastrados pela comunidade
INSERT INTO precos (produto_id, mercado_id, usuario_id, preco, data, promocao, motivo_promocao, observacao) VALUES
(1, 1, 1, 5.49, NOW(), FALSE, NULL, 'Encontrado na gôndola principal'),
(1, 2, 2, 4.99, NOW(), TRUE, 'Queima de estoque', 'Próximo ao vencimento (vence em 3 dias)'),
(2, 2, 1, 24.90, NOW(), FALSE, NULL, 'Preço normal de atacado'),
(2, 3, 3, 22.50, NOW(), TRUE, 'Oferta de inauguração', 'Promoção válida apenas hoje'),
(3, 1, 2, 8.99, NOW(), FALSE, NULL, 'Pacote de 1kg'),
(4, 3, 3, 11.90, NOW(), FALSE, NULL, 'Em pó tradicional');