-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: serion
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reseniasusuario`
--

DROP TABLE IF EXISTS `reseniasusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseniasusuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idserie` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `texto` text NOT NULL,
  `fechacreacion` datetime NOT NULL,
  `fechaactualizacion` datetime DEFAULT NULL,
  `puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reseniasusuario_idx` (`idusuario`),
  CONSTRAINT `reseniasusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseniasusuario`
--

LOCK TABLES `reseniasusuario` WRITE;
/*!40000 ALTER TABLE `reseniasusuario` DISABLE KEYS */;
INSERT INTO `reseniasusuario` VALUES (1,100,3,'MALARDA','2020-06-01 00:00:00','2020-06-01 00:00:00',1),(4,2316,8,'LA MEJOR SERIE ','2020-06-04 00:00:00','2020-06-04 00:00:00',10),(5,79525,8,'Michael Jordan jugadorazo. Muy buena. ','2020-06-04 00:00:00','2020-06-04 00:00:00',9),(7,60735,11,'Buena','2020-06-06 00:00:00','2020-06-06 00:00:00',6),(8,66788,12,'Solo la primer temporada es buena','2020-06-06 00:00:00','2020-06-06 00:00:00',5),(9,1668,13,'BUENISIMA','2020-06-06 00:00:00','2020-06-06 00:00:00',10),(10,66788,2,'Pochoclera','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(11,42573,8,'buena','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(12,100,2,'posta parece para nenes de dos anios, no vale la pena','2020-06-08 00:00:00','2020-06-08 00:00:00',3),(13,1416,2,'Mi serie preferida. Quiero 16 temporadas mas. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(14,1416,9,'Buenisima','2020-06-08 00:00:00','2020-06-08 00:00:00',8),(15,2288,8,'buena','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(16,2288,5,'buena y estresante','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(17,1399,8,'Espectacular','2020-06-08 00:00:00','2020-06-08 00:00:00',9),(18,1399,9,'muy entretenida y buenisimos actores','2020-06-08 00:00:00','2020-06-08 00:00:00',8),(19,103506,5,'piel de gallina, fuertisima','2020-06-08 00:00:00','2020-06-08 00:00:00',8),(20,1668,2,'Es brillante. Una de las mejores que hay. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(21,2316,5,'mi serie preferida, muy divertida','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(22,48891,8,'graciosa y buena para ver en familia','2020-06-08 00:00:00','2020-06-08 00:00:00',8),(23,71446,9,'Es excelente hasta la segunda temporada.','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(24,65494,2,'Brillante. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(25,65494,9,'Fascinante los vestuarios, la puesta en escena. Muy buena produccion. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(26,19885,8,'Benedict Cumberbatch es un gran actor y aca se ve porque. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(27,59941,5,'Jimmy Fallon es inigualable. Graciosa, inteligente y entretenida. ','2020-06-08 00:00:00','2020-06-08 00:00:00',10),(28,3626,9,'Te engancha. Igual, lo extraño a Simon Cowell. Hay mucho talento. ','2020-06-08 00:00:00','2020-06-08 00:00:00',7),(29,1667,5,'Outstanding','2020-06-08 00:00:00','2020-06-08 00:00:00',10);
/*!40000 ALTER TABLE `reseniasusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(80) NOT NULL,
  `nacimiento` datetime NOT NULL,
  `genero` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Lola','email@prueba.com','lola','2001-05-12 12:00:00',''),(2,'lola','lola@gmail.com','$2a$10$YrmzIwR44NcqtxhpmWBJOOgku27lG4j1BYed2ez01CpmGHFaoLjAe','2001-12-05 03:00:00',''),(3,'olimarotta','olivia@gmail.com','$2a$10$5MOfyU8rcDQTjz33RowMK./zuxaTTkdcXmEjJs/YtQWwnZ/vwLIBi','2003-11-10 03:00:00','Comedia'),(4,'MiloMarotta','milo@gmail.com','$2a$10$IcXXmGsnGMqwzWTv0iWdJeRmPcT7GOR4T5gDgHPYl8/mtAw.TO6ty','2008-12-08 02:00:00','Animacion'),(5,'PoliLoizaga','paula@gmail.com','$2a$10$E5gHhxhw9y2YCYi7VawN/uD8nS.jlrMw/XxS7eiAtTglZdkgLHWOK','1973-05-15 03:00:00','Romance'),(8,'PabloMarotta','corcho@gmail.com','$2a$10$cMHhuVoJm7BbjJyMp4mnMuyKQhd4zbOUnhvr7A9q9FYQ1dAJ41l7u','1972-04-03 03:00:00','Acciom'),(9,'AnaMendez','ana@hotmail.com','$2a$10$eOE8.ZdbSasPu8n2n13hUeGOK.q8iJ/G0q82eYLgUTgRLTE76hxbW','1950-07-26 03:00:00','Romance'),(11,'Lola','lolamarotta@gmail.com','$2a$10$LArkBfIkQU01UQVk0rJ3weVt5HrvHsJg2PSqvs8rItFg5xIlqzxJ.','2001-03-14 00:00:00','Documentary'),(12,'MoraAV','moraabellavelarde@gmail.com','$2a$10$J.jH/LZSXKiTtDQdtDWge.XHYHXTp3wjn6t1AR2KW5MBbvXIgeTdW','2001-02-22 00:00:00','Comedy'),(13,'FeliAgostini','feli@gmail.com','$2a$10$AvLKO591Txs0PkIFGGX75O0otRF9mQ79kvC28AlTl.RmcJoyOgEB2','2020-06-03 00:00:00','Drama');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-08 17:10:25
