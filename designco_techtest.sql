-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 14, 2021 at 05:35 PM
-- Server version: 5.7.33-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `designco_techtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `Name`, `Email`, `Password`) VALUES
(1, 'jnj', 'njnj@cas.com', 'Hello'),
(2, 'mcjan', 'abdullahabid427@gmail.com', 'Hello1'),
(3, 'Hello', 'hello123@gmail.com', 'Hello'),
(4, 'Hello', 'abdullahabid427@gmail.com', 'Hello'),
(5, 'Hello', 'abdullahabid427@gmail.com', 'Hello'),
(6, 'bjbhbbjbb', 'khawajaali246@gmail.com', 'Hello'),
(7, 'Lawrence Attoh', 'Lawrenceattoh@ymail.com', 'Rosina'),
(8, 'Lawrence Attoh', 'Lawrenceattoh@ymail.com', 'niiarmah'),
(9, 'Hemkas', 'njacs@asc.com', 'Hello'),
(10, 'Hemkas', 'njacs@asc.com', 'Hello'),
(11, 'Hemkas', 'njacs@asc.com', 'Hello'),
(12, 'Hemkas', 'njacs@asc.com', 'Hello'),
(13, 'design', 'khawajaali246@gmail.com', 'Hello'),
(14, 'jnacs', 'khawajaali246@gmail.com', 'Hello1'),
(15, 'Abdullah', 'abdullahabid427@gmail.com', 'asd'),
(16, 'Abdullah', 'abdullahabid427@gmail.com', 'asd'),
(17, 'Abdullah Abid', 'abdullahabid427@gmail.com', 'TicketDedo123'),
(18, 'Abdullah Abid', 'abdullahabid427@gmail.com', 'TicketDedo123'),
(19, 'Abdullah Abid', 'abdullahabid427@gmail.com', 'TicketDedo123'),
(20, 'Abdullah Abid', 'abduahabid427@gmail.com', 'TicketDedo123'),
(21, 'Abdullah Abid', 'abduahabid427@gmail.com', 'TicketDedo123'),
(22, 'Abdullah Abid', 'abduahabid427@gmail.com', 'TicketDedo123'),
(23, 'Abdullah Abid', 'abdullahabid427@gmail.com', 'TicketDedo123'),
(24, 'Abdullah Abid', 'abdullahabid27@gmail.com', 'TicketDedo123'),
(25, 'Abdullah Abid', 'abdullahabid27@gmail.com', 'TicketDedo123'),
(26, 'Abdullah Abid', 'abdullahabid27@gmail.com', 'TicketDedo123'),
(27, 'Hello', 'khawajli246@gmail.com', 'Hello12'),
(28, 'Hajaja', 'sample@gmail.com', 'temp'),
(29, 'Hajaja', 'khawajamali246@gmail.com', 'temp'),
(30, 'Mark Attoh', 'mark@yahoo.com', 'niiarmah'),
(31, 'Rosina Attoh', 'rose@attoh.com', 'rosina213'),
(32, 'njjnnj', 'hhbv@vj.com', 'Hello'),
(33, 'Elon Musk', 'elon@musk.com', 'elonmusk'),
(34, 'Larry Attoh', 'larryattoh@gmail.com', 'larryattoh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
