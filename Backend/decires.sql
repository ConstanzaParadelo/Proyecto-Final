-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-11-2021 a las 15:29:35
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `decires`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'Talleres Foto, dibujo y algo más...', 'Nos unimos al colectivo artístico psicoterapéutico itinerante ', 'Ofrecemos espacios de aprendizajes e intercambios en fotografía y dibujo, para jóvenes y adultos con discapacidad, promoviendo su desarrollo como sujetos autónomos y activos en el ámbito cultural y laboral.', 'dsb6d0fkgxtwirvlyyna'),
(2, 'Formación en la Clínica con Infancias', 'Queremos acompañarte en tu inicios en la clínica con infancias', '▪︎Entrenamiento en intervenciones para los diferentes momentos de la clínica con las infancias.\r\n▪︎Algunos ejes de trabajo: admisión, primeras entrevistas, juego; devolución; escuela, familia y obras sociales, informes; psicopatología y semiología infantil, diagnóstico diferencial.', 'gha7xho4kun3ifvxvomr'),
(3, 'Laboratorio de emociones', 'Taller dirigido a niñas y niños para aprender jugando ', 'Para más información e inscripciones escribir un correo a decirescordoba@gmail.com o un WhatsApp a 338539217', NULL),
(6, 'Hola', 'llll', '122', NULL),
(19, 'Taller', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Coty', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Martin', 'e10adc3949ba59abbe56e057f20f883e');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
