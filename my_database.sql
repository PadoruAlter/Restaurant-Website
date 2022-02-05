DROP DATABASE IF EXISTS my_database;
CREATE DATABASE my_database;
USE `my_database`;

CREATE TABLE `comments` (
  `commentid` int(11) NOT NULL,
  `restaurantId` int(11) NOT NULL,
  `userId` int(11)  NOT NULL,
  `review`  varchar(65) CHARACTER SET utf8 NOT NULL,
  `rating` int(11) NOT NULL,
  `datePosted` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `restaurant` (
  `restaurantId` int(11) NOT NULL,
  `restaurantName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `restaurantDescription` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `restaurantLocation` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `restaurantWebsite` varchar(255) CHARACTER SET utf8 NOT NULL,
  `restaurantTelephone` int(8)  DEFAULT NULL,
  `restaurantRating` int(8)  DEFAULT NULL,
  `restaurantCusine` varchar(45) CHARACTER SET utf8 DEFAULT NULL,
  `restaurantPicture` varchar(255) CHARACTER SET utf8 DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `users` (
  `userId` int(11)  NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `firstName` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `lastName`  varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `mobileNo` int(8)  DEFAULT NULL,
  `gender` tinyint DEFAULT NULL,
  `picture`  varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `activated` int(11) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `FK_userId` (`userId`),
  ADD KEY `FK_restaurantId` (`restaurantId`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurantId`);

-- Indexes for table `user`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--


--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT for table `restaurant
--
ALTER TABLE `restaurant`
  MODIFY `restaurantId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

-- AUTO_INCREMENT for table `users`
  ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_restaurantId` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant` (`restaurantId`) ON DELETE CASCADE ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;
  
  INSERT INTO `restaurant` (`restaurantName`, `restaurantDescription`, `restaurantLocation`, `restaurantWebsite`, `restaurantTelephone`, `restaurantRating`, `RestaurantCusine`, `restaurantPicture`) VALUES
("Mcdonalds","McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States","118 Rivervale Dr, 01-32 Rivervale Plaza, Singapore 540118","https://www.mcdonalds.com.sg/","23456234",NULL,"western",NULL),
("Ichiban","ichiban Sushi. Quality and value ply the conveyor belts at Ichiban Sushi."," 90 Hougang Avenue 10 #02-23, Hougang Mall, 538766","https://ichibansushi.com.sg/en/","63867836",NULL,"Japanese","https://lh5.googleusercontent.com/p/AF1QipP9op3wP6_Mdmw6mUzbFYxTVlYtweVeBRgCeTc5=w114-h114-n-k-no"),
("Isteak","Exquisitely done Tenderloins to a gorgeous PorterHouses for the family, with over 20 sides and pastas of forage to land and sea","1 Maju Ave, #02-03/04/05/06 myVillage, Singapore 556679","https://www.isteaksdiner.com/","62858839",NULL,"Western",NULL),
("Saizeriya","Saizeriya is a Japanese chain of family-style Italian yōshoku restaurants. It is managed by Saizeriya Co. Its headquarters are in Yoshikawa, Saitama.","1 Hougang Street 91, #01-38, Singapore 538692","https://www.saizeriya.com.sg/","63128644",NULL,"Italian",NULL),
("Hansik Restaurant",NULL,"205 Hougang Street 21, Singapore 530205","http://ww1.hansikrest.com/?subid1=1c45ed00-709d-11ec-8ab3-cd878db41af2","62882448",NULL,"Korean","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrAkD1pP40SYFE5HBUOZhOBSfx3bphdsxaw&usqp=CAU"),
("Syed Restaurant",NULL,"292, 01-301 Yishun Street 22, 760292","https://sg.openrice.com/en/singapore/r-syed-restaurant-yishun-r13670","65554998",NULL,"Indian",NULL),
("Crystal Jade Hong Kong Kitchen","Crystal Jade, owned by Crystal Jade Culinary Concept Holdings, is a Singapore-based Chinese restaurant chain.","4 Tampines Central 5 B1, 11 Tampines Mall, 529510","https://www.crystaljade.com/","67880633",NULL,"Chinese",NULL),
("Amigo's","Amigo's lip-smacking Smoky Buffalo Drumettes is always a crowd pleaser and with it's extensive western food menu, there's always something for everyone.","#01-809, 681 Hougang Ave 8, Singapore 530681","https://www.tenderfresh.com.sg/amigos",NULL,NULL,"Western",NULL),
("Pietro Ristorante italiano","Italian staples such as pasta, pizza, seafood & meat dishes are served at this informal eatery.","12 Jln Kelulut, Singapore 809030","https://pietro.com.sg/","64845528",NULL,"Italian","https://lh5.googleusercontent.com/p/AF1QipOtVBsloUlcfxP1SpN2_tjqMvvR7o-rkTHje8-J=w112-h112-n-k-no"),
("Monster Curry","Monster Curry is the only restaurant in Singapore that serves Japanese demi-glace curry made with 14 different vegetables and spices","83 Punggol Central, 02-25 Waterway Point, Singapore 828761","https://www.monstercurry.com.sg/","62458879",NULL,"Japanese","https://www.monstercurry.com.sg/wp-content/uploads/2019/10/logo-1-527x527.gif");


INSERT INTO `users` (`email`, `firstName`, `lastName`, `address`, `mobileNo`, `gender`, `picture`, `activated`, `password`) VALUES
("axel@gmail.com", "axel","Koh", "1 Random Adress", "88698620","1","picture1", "1" ,"Axel"),
("notuser1@gmail.com", "nully","not","nulled str", "93427651","0",null, "1" ,"nullify"),
("johnre@gmail.com", "john","re","sleeping", "93621837","1","profilePic1", "1" ,"genre"),
("jackjacka@gmail.com", "jack","jack","incredible house", "95959634","1","null", "1" ,"lazereye"),
("albert@gmail.com", "al","bert","1 els str", "85634012","1",null, "1" ,"albert"),
("bowser@gmail.com", "bowser","fury","Bowser Castle 5", "94507513","1","weefwfqf", "1" ,"bowserFury"),
("lenma@gmail.com", "lem","ma","500 seseme street", "86110550","0",null, "1" ,"lenNah"),
("Kallena@gmail.com", "kallen","kaslana","schicksal 2", "97675132","0","weefwfqf", "1" ,"hanging"),
("Otto@gmail.com", "otto","apocolypse","schicksal", "89575876","1",null, "1" ,"Void"),
("raiden@gmail.com", "raiden","mei","1 hyperion", "83426148","0",null, "1" ,"thunder"),
("Link@gmail.com", "Link","Link","hyrule Castle", "80829320","1",null, "1" ,"Sword"),
("Saber@gmail.com", "artoria","pendragon","britan", "98043734","0","altriapic", "1" ,"beam"),
("Sutr@gmail.com", "sutr","lost","Rhodes island", "91476682","0","sutrpic", "1" ,"memories"),
("Knight@gmail.com", "hollow","knight","blk 20A city of tears", null,"1","weefwfqf", "1" ,"king"),
("Mario@gmail.com", "Mario","mario","1 Mushroom Kingdom st", "87652132","1","MarioPic","1" ,"peach");

INSERT INTO `comments` (`restaurantId`, `userId`, `review`, `rating`, `datePosted`) VALUES
(1,1,'pancakes is good','5','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(1,2,"test",'1','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(1,3,'wafer','1','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(2,4,'A','5','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(2,1,'nice food','5','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(1,4,'best','5','Sat Jan 08 2022 10:07:41 GMT+0800 (Singapore Standard Time)'),
(1,5,'why','1','Fri Jan 07 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(2,10,'Aha','5','Tue Jan 04 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(2,11,'ehe','3','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(3,1,'pancakes is good','5','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(3,2,"test 2",'1','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(4,3,'AHHH','1','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(10,4,'gura','5','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(9,1,'nice food i think','5','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(8,4,'best best','5','Sat Jan 08 2022 10:07:41 GMT+0800 (Singapore Standard Time)'),
(7,5,'why not','1','Fri Jan 07 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(6,8,'huehuehue','5','Tue Jan 04 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(5,11,'ehehehe','3','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(10,5,'no','3','Sat Jan 08 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(9,6,'hate the food','1','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)'),
(8,12,'why is it long','1','Sat Jan 08 2022 10:07:41 GMT+0800 (Singapore Standard Time)'),
(7,13,'nah','1','Fri Jan 07 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(6,12,'pre food','3','Tue Jan 04 2022 22:07:41 GMT+0800 (Singapore Standard Time)'),
(5,14,'ehe not good','2','Fri Jan 07 2022 20:00:30 GMT+0800 (Singapore Standard Time)');
