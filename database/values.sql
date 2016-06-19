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
VALUES (1, 2, 160, "Nonimmigrant Visa Electronic Application (DS-160) form,Criminal Background Check,Employment History,Current relationship status,property");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (1, 3, 50, "Peruvian Visa Application Form,photos,Letter Of Invitation from Peru,Proof of departure,Hotel confirmation,Criminal Record");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (2, 1, 160, "Chinese Visa Application Form,Payment Authorization Form,LETTER OF INVITATION (FOR Q1, Q2, S1,S2 VISA)");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (2, 3, 160, "Passport valid at least 6 months,Valid (tourist) visa at the time of application,For Students: Enrollment certification issued by a recognized educational institution,Proof of sufficient financial resources to fund your studies or internship in Peru,Application form and fee");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (3, 1, 160, "Chinese Visa Application Form,Payment Authorization Form,LETTER OF INVITATION (FOR Q1, Q2, S1,S2 VISA)");
INSERT RequireDocs
(DestId, PassId, Cost, Requred_Doc)
VALUES (3, 2, 160, "Nonimmigrant Visa Electronic Application (DS-160) form,Criminal Background Check,Employment History,Current relationship status,property");

