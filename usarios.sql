-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.22 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Volcando datos para la tabla usuarios.roles: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `code`) VALUES
	(1, 'Administrador', 'AD'),
	(2, 'Profesor', 'PROF'),
	(3, 'Estudiante', 'STU');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando datos para la tabla usuarios.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `code`) VALUES
	(1, 'Gabriel Molina', 'gabriel_mol04@live.com', 1),
	(2, 'Carlos Antonio', 'carlos.anto@gmail.com', 3),
	(3, 'Oscar Gonzales', 'gonz.192@gmail.com', 2),
	(4, 'Karla Jimenez', 'karlita89@live.com', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
