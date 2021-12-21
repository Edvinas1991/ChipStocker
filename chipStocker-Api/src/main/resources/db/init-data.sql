INSERT INTO ITEMS(id, name, code, category, description, quantity, price, image)
VALUES ('48a95af7-8b83-4a08-8001-0f865db8ea26', 'Iphone 13', 'Phone', 'Very cheap phone', 'uuu',2 ,10.99, 'img'),
       ('48a91af7-8b83-4a08-8002-0f865db8ea26', 'Iphone 13', 'Phone', 'Very cheap phone', 'uuu',2, 10.99, 'img2');



INSERT INTO USERS(id, username, name, surname, country, city, street, zip_code, phone, password) VALUES
('c2aa5f20-2441-40f8-8cce-d31dbd17bc84', 'user', 'Useriukas', 'Useriauskas', 'Lithuania', 'Vilniaus', 'Savanoriu', '572441', '867489665', '{bcrypt}$2a$10$jYIbAef1H7S.womsk7MRtOCSEx/DgM7CZ1nNeLLzoZ/OPs0a25DV2'), /*pass->user*/
('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', 'admin', 'Adminas', 'Adminiauskas', 'Lithuania', 'Kaunas', 'Savanoriu', '572441', '867489665','{bcrypt}$2a$10$VylYhXDaKC7W28tQTvYYkOdZIj2pnPVIobXOConbXy3xeBcF6Xuni'); /*pass->user*/
INSERT INTO ROLES(id, name) VALUES
                                ('60dbb7bb-99a0-42eb-a837-8be6b697c074', 'USER'),
                                ('3906c549-44bf-494b-9537-5e1658a029a8', 'ADMIN');
INSERT INTO USERS_ROLES(user_id, roles_id) VALUES
                                               ('c2aa5f20-2441-40f8-8cce-d31dbd17bc84', '60dbb7bb-99a0-42eb-a837-8be6b697c074'),
                                               ('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', '60dbb7bb-99a0-42eb-a837-8be6b697c074'),
                                               ('bd8968db-ad2a-4dd0-a0ab-7eebcc05427e', '3906c549-44bf-494b-9537-5e1658a029a8');

