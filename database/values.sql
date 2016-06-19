INSERT INTO Destination 
(Country)
VALUES ("China");
INSERT INTO Destination 
(Country)
VALUES ("USA");
INSERT INTO Destination 
(Country)
VALUES ("Peru");
INSERT INTO Passport
(Country)
VALUES ("China");
INSERT INTO Passport
(Country)
VALUES ("USA");
INSERT INTO Passport
(Country)
VALUES ("Peru");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (1, 2, 160, "http://www.ustraveldocs.com/cn/cn-niv-typeb1b2.asp#ApplicationItems");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (1, 3, 50, "https://peru.travisa.com/");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (2, 1, 160, "https://www.visaforchina.org/MTL_EN/generalinformation/downloads/index.shtml");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (2, 3, 160, "http://www.limaeasy.com/peru-info/peruvian-visa");


