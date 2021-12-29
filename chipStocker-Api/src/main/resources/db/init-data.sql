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

INSERT INTO POSTS(id, title, category, body, author, date)VALUES
                                                              ('abdee4f9-5763-4afc-85ed-98b2fdefb35f', 'SAMSUNG PHONES', 'Smart phone',
                                                               'For the Internet-address resolution SPI, the proposal is to define an SPI for host and name address resolution so that Inet.Address can make use of resolvers other than the platform’s built-in resolver. Motivations for this effort include better enablement of Project Loom, for concurrency and new programming models in Java, along with integrating new network protocols, customization, and enabling testing. The proposal does not involve developing an alternative resolver for the JDK.',
                                                               'admin', '2021-11-14 22:22:34'),
                                                              ('abdee4f9-5763-4afc-85ed-98b2fde1235f', 'JAVA NEWS', 'JAVA',
                                                               'With the simple web server proposal, a command-line tool would be provided to start a minimal web server that serves static files only. No CGI or servlet-like functionality is available. The tool will be useful for prototyping, ad-hoc coding, and testing, particularly in educational contexts. Goals of the plan include offering an out-of-the-box static HTTP file server with easy setup and minimal functionality, reducing developer activation energy and making the JDK more approachable, and providing a default implementation via the command line together with a small API for programmatic creation and customization. Providing a feature-rich or commercial-grade server is not a goal of the proposal.',
                                                               'admin', '2021-10-14 12:12:33');
INSERT INTO Comments(id, postID, userID,date, username, text)VALUES
                                                                 ('cbdee3e9-5763-4afc-85ed-98b2fdefb31d', 'abdee4f9-5763-4afc-85ed-98b2fdefb35f','cbdee4f9-5763-4afc-85ed-98b2fdefb31d','2014 m. vasario 10 d. 20:00', 'Edvinas', 'Sveiki visi!'),
                                                                 ('cbdee3e9-5763-4afc-85ed-98b2fdefb32d', 'abdee4f9-5763-4afc-85ed-98b2fdefb35f','cbdee4f9-5763-4afc-85ed-98b2fdefb31d','2014 m. vasario 10 d. 23:28', 'Jonas', 'Kas cia?');
