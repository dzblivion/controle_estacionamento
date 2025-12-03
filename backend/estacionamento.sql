DROP DATABASE IF EXISTS `estacionamento`;

CREATE DATABASE `estacionamento`;
USE `estacionamento`;

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(45) NOT NULL,
  `emailUsuario` varchar(50) NOT NULL,
  `categoriaUsuario` varchar(45) DEFAULT NULL,
  `statusUsuario` varchar(45) DEFAULT NULL,
  `senhaUsuario` varchar(255) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `veiculos`;

CREATE TABLE `veiculos` (
  `idVeiculo` int NOT NULL,
  `placaVeiculo` varchar(45) NOT NULL,
  `idUsuario` int NOT NULL,
  `statusVeiculo` varchar(45) NOT NULL,
  PRIMARY KEY (`idVeiculo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  

