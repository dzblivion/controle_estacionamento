DROP DATABASE IF EXISTS estacionamento;

CREATE DATABASE estacionamento;
USE estacionamento;

CREATE TABLE usuarios (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nomeUsuario VARCHAR(255) NOT NULL,
    emailUsuario VARCHAR(255) UNIQUE NOT NULL,
    categoriaUsuario VARCHAR(50) NOT NULL,
    senhaUsuario VARCHAR(255) NOT NULL,
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

EXIT;