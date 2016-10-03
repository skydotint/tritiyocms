-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.9-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.3.0.5119
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for styletex
CREATE DATABASE IF NOT EXISTS `styletex` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `styletex`;

-- Dumping structure for table styletex.blocks
CREATE TABLE IF NOT EXISTS `blocks` (
  `BlockId` bigint(100) NOT NULL AUTO_INCREMENT,
  `BlockUniqueId` varchar(255) NOT NULL,
  `BlockTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `TitleClasses` varchar(255) NOT NULL,
  `WidgetPosition` varchar(255) NOT NULL,
  `BlockContent` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `isActive` bigint(100) NOT NULL DEFAULT '1',
  PRIMARY KEY (`BlockId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.blocks: ~1 rows (approximately)
DELETE FROM `blocks`;
/*!40000 ALTER TABLE `blocks` DISABLE KEYS */;
INSERT INTO `blocks` (`BlockId`, `BlockUniqueId`, `BlockTitle`, `TitleClasses`, `WidgetPosition`, `BlockContent`, `isActive`) VALUES
	(1, 'grameen-ads_2783', 'Grameen Ads', '', '1', '<p><a href="#"><img class="img-responsive" src="http://www.bartabazar.com/images/robi-15-2-16.jpg" /></a></p>\n', 1);
/*!40000 ALTER TABLE `blocks` ENABLE KEYS */;

-- Dumping structure for table styletex.ci_sessions
CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `id` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `ip_address` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `timestamp` bigint(100) unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.ci_sessions: ~0 rows (approximately)
DELETE FROM `ci_sessions`;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;

-- Dumping structure for table styletex.country
CREATE TABLE IF NOT EXISTS `country` (
  `CountryId` bigint(100) NOT NULL AUTO_INCREMENT,
  `Code` char(3) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `Name` char(52) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `Continent` enum('Asia','Europe','North America','Africa','Oceania','Antarctica','South America') CHARACTER SET latin1 NOT NULL DEFAULT 'Asia',
  `Region` char(26) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `SurfaceArea` float(10,2) NOT NULL DEFAULT '0.00',
  `IndepYear` smallint(6) DEFAULT NULL,
  `Population` bigint(100) NOT NULL DEFAULT '0',
  `LifeExpectancy` float(3,1) DEFAULT NULL,
  `GNP` float(10,2) DEFAULT NULL,
  `GNPOld` float(10,2) DEFAULT NULL,
  `LocalName` char(45) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `GovernmentForm` char(45) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `HeadOfState` char(60) CHARACTER SET latin1 DEFAULT NULL,
  `Capital` bigint(100) DEFAULT NULL,
  `Code2` char(2) CHARACTER SET latin1 NOT NULL DEFAULT '',
  PRIMARY KEY (`CountryId`),
  KEY `Code` (`Code`)
) ENGINE=InnoDB AUTO_INCREMENT=241 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.country: ~6 rows (approximately)
DELETE FROM `country`;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` (`CountryId`, `Code`, `Name`, `Continent`, `Region`, `SurfaceArea`, `IndepYear`, `Population`, `LifeExpectancy`, `GNP`, `GNPOld`, `LocalName`, `GovernmentForm`, `HeadOfState`, `Capital`, `Code2`) VALUES
	(1, 'ABW', 'Aruba', 'North America', 'Caribbean', 193.00, NULL, 103000, 78.4, 828.00, 793.00, 'Aruba', 'Nonmetropolitan Territory of The Netherlands', 'Beatrix', 129, 'AW'),
	(2, 'AFG', 'Afghanistan', 'Asia', 'Southern and Central Asia', 652090.00, 1919, 22720000, 45.9, 5976.00, NULL, 'Afganistan/Afqanestan', 'Islamic Emirate', 'Mohammad Omar', 1, 'AF'),
	(3, 'AGO', 'Angola', 'Africa', 'Central Africa', 1246700.00, 1975, 12878000, 38.3, 6648.00, 7984.00, 'Angola', 'Republic', 'JosÃ© Eduardo dos Santos', 56, 'AO'),
	(4, 'AIA', 'Anguilla', 'North America', 'Caribbean', 96.00, NULL, 8000, 76.1, 63.20, NULL, 'Anguilla', 'Dependent Territory of the UK', 'Elisabeth II', 62, 'AI'),
	(5, 'ALB', 'Albania', 'Europe', 'Southern Europe', 28748.00, 1912, 3401200, 71.6, 3205.00, 2500.00, 'ShqipÃ«ria', 'Republic', 'Rexhep Mejdani', 34, 'AL'),
	(6, 'AND', 'Andorra', 'Europe', 'Southern Europe', 468.00, 1278, 78000, 83.5, 1630.00, NULL, 'Andorra', 'Parliamentary Coprincipality', '', 55, 'AD'),
	(7, 'ANT', 'Netherlands Antilles', 'North America', 'Caribbean', 800.00, NULL, 217000, 74.7, 1941.00, NULL, 'Nederlandse Antillen', 'Nonmetropolitan Territory of The Netherlands', 'Beatrix', 33, 'AN'),
	(8, 'ARE', 'United Arab Emirates', 'Asia', 'Middle East', 83600.00, 1971, 2441000, 74.1, 37966.00, 36846.00, 'Al-Imarat al-Â´Arabiya al-Muttahida', 'Emirate Federation', 'Zayid bin Sultan al-Nahayan', 65, 'AE'),
	(9, 'ARG', 'Argentina', 'South America', 'South America', 2780400.00, 1816, 37032000, 75.1, 340238.00, 323310.00, 'Argentina', 'Federal Republic', 'Fernando de la RÃºa', 69, 'AR'),
	(10, 'ARM', 'Armenia', 'Asia', 'Middle East', 29800.00, 1991, 3520000, 66.4, 1813.00, 1627.00, 'Hajastan', 'Republic', 'Robert KotÅ¡arjan', 126, 'AM'),
	(11, 'ASM', 'American Samoa', 'Oceania', 'Polynesia', 199.00, NULL, 68000, 75.1, 334.00, NULL, 'Amerika Samoa', 'US Territory', 'George W. Bush', 54, 'AS'),
	(12, 'ATA', 'Antarctica', 'Antarctica', 'Antarctica', 13120000.00, NULL, 0, NULL, 0.00, NULL, 'â€“', 'Co-administrated', '', NULL, 'AQ'),
	(13, 'ATF', 'French Southern territories', 'Antarctica', 'Antarctica', 7780.00, NULL, 0, NULL, 0.00, NULL, 'Terres australes franÃ§aises', 'Nonmetropolitan Territory of France', 'Jacques Chirac', NULL, 'TF'),
	(14, 'ATG', 'Antigua and Barbuda', 'North America', 'Caribbean', 442.00, 1981, 68000, 70.5, 612.00, 584.00, 'Antigua and Barbuda', 'Constitutional Monarchy', 'Elisabeth II', 63, 'AG'),
	(15, 'AUS', 'Australia', 'Oceania', 'Australia and New Zealand', 7741220.00, 1901, 18886000, 79.8, 351182.00, 392911.00, 'Australia', 'Constitutional Monarchy, Federation', 'Elisabeth II', 135, 'AU'),
	(16, 'AUT', 'Austria', 'Europe', 'Western Europe', 83859.00, 1918, 8091800, 77.7, 211860.00, 206025.00, 'Ã–sterreich', 'Federal Republic', 'Thomas Klestil', 1523, 'AT'),
	(17, 'AZE', 'Azerbaijan', 'Asia', 'Middle East', 86600.00, 1991, 7734000, 62.9, 4127.00, 4100.00, 'AzÃ¤rbaycan', 'Federal Republic', 'HeydÃ¤r Ã„liyev', 144, 'AZ'),
	(18, 'BDI', 'Burundi', 'Africa', 'Eastern Africa', 27834.00, 1962, 6695000, 46.2, 903.00, 982.00, 'Burundi/Uburundi', 'Republic', 'Pierre Buyoya', 552, 'BI'),
	(19, 'BEL', 'Belgium', 'Europe', 'Western Europe', 30518.00, 1830, 10239000, 77.8, 249704.00, 243948.00, 'BelgiÃ«/Belgique', 'Constitutional Monarchy, Federation', 'Albert II', 179, 'BE'),
	(20, 'BEN', 'Benin', 'Africa', 'Western Africa', 112622.00, 1960, 6097000, 50.2, 2357.00, 2141.00, 'BÃ©nin', 'Republic', 'Mathieu KÃ©rÃ©kou', 187, 'BJ'),
	(21, 'BFA', 'Burkina Faso', 'Africa', 'Western Africa', 274000.00, 1960, 11937000, 46.7, 2425.00, 2201.00, 'Burkina Faso', 'Republic', 'Blaise CompaorÃ©', 549, 'BF'),
	(22, 'BGD', 'Bangladesh', 'Asia', 'Southern and Central Asia', 143998.00, 1971, 129155000, 60.2, 32852.00, 31966.00, 'Bangladesh', 'Republic', 'Shahabuddin Ahmad', 150, 'BD'),
	(23, 'BGR', 'Bulgaria', 'Europe', 'Eastern Europe', 110994.00, 1908, 8190900, 70.9, 12178.00, 10169.00, 'Balgarija', 'Republic', 'Petar Stojanov', 539, 'BG'),
	(24, 'BHR', 'Bahrain', 'Asia', 'Middle East', 694.00, 1971, 617000, 73.0, 6366.00, 6097.00, 'Al-Bahrayn', 'Monarchy (Emirate)', 'Hamad ibn Isa al-Khalifa', 149, 'BH'),
	(25, 'BHS', 'Bahamas', 'North America', 'Caribbean', 13878.00, 1973, 307000, 71.1, 3527.00, 3347.00, 'The Bahamas', 'Constitutional Monarchy', 'Elisabeth II', 148, 'BS'),
	(26, 'BIH', 'Bosnia and Herzegovina', 'Europe', 'Southern Europe', 51197.00, 1992, 3972000, 71.5, 2841.00, NULL, 'Bosna i Hercegovina', 'Federal Republic', 'Ante Jelavic', 201, 'BA'),
	(27, 'BLR', 'Belarus', 'Europe', 'Eastern Europe', 207600.00, 1991, 10236000, 68.0, 13714.00, NULL, 'Belarus', 'Republic', 'Aljaksandr LukaÅ¡enka', 3520, 'BY'),
	(28, 'BLZ', 'Belize', 'North America', 'Central America', 22696.00, 1981, 241000, 70.9, 630.00, 616.00, 'Belize', 'Constitutional Monarchy', 'Elisabeth II', 185, 'BZ'),
	(29, 'BMU', 'Bermuda', 'North America', 'North America', 53.00, NULL, 65000, 76.9, 2328.00, 2190.00, 'Bermuda', 'Dependent Territory of the UK', 'Elisabeth II', 191, 'BM'),
	(30, 'BOL', 'Bolivia', 'South America', 'South America', 1098581.00, 1825, 8329000, 63.7, 8571.00, 7967.00, 'Bolivia', 'Republic', 'Hugo BÃ¡nzer SuÃ¡rez', 194, 'BO'),
	(31, 'BRA', 'Brazil', 'South America', 'South America', 8547403.00, 1822, 170115000, 62.9, 776739.00, 804108.00, 'Brasil', 'Federal Republic', 'Fernando Henrique Cardoso', 211, 'BR'),
	(32, 'BRB', 'Barbados', 'North America', 'Caribbean', 430.00, 1966, 270000, 73.0, 2223.00, 2186.00, 'Barbados', 'Constitutional Monarchy', 'Elisabeth II', 174, 'BB'),
	(33, 'BRN', 'Brunei', 'Asia', 'Southeast Asia', 5765.00, 1984, 328000, 73.6, 11705.00, 12460.00, 'Brunei Darussalam', 'Monarchy (Sultanate)', 'Haji Hassan al-Bolkiah', 538, 'BN'),
	(34, 'BTN', 'Bhutan', 'Asia', 'Southern and Central Asia', 47000.00, 1910, 2124000, 52.4, 372.00, 383.00, 'Druk-Yul', 'Monarchy', 'Jigme Singye Wangchuk', 192, 'BT'),
	(35, 'BVT', 'Bouvet Island', 'Antarctica', 'Antarctica', 59.00, NULL, 0, NULL, 0.00, NULL, 'BouvetÃ¸ya', 'Dependent Territory of Norway', 'Harald V', NULL, 'BV'),
	(36, 'BWA', 'Botswana', 'Africa', 'Southern Africa', 581730.00, 1966, 1622000, 39.3, 4834.00, 4935.00, 'Botswana', 'Republic', 'Festus G. Mogae', 204, 'BW'),
	(37, 'CAF', 'Central African Republic', 'Africa', 'Central Africa', 622984.00, 1960, 3615000, 44.0, 1054.00, 993.00, 'Centrafrique/BÃª-AfrÃ®ka', 'Republic', 'Ange-FÃ©lix PatassÃ©', 1889, 'CF'),
	(38, 'CAN', 'Canada', 'North America', 'North America', 9970610.00, 1867, 31147000, 79.4, 598862.00, 625626.00, 'Canada', 'Constitutional Monarchy, Federation', 'Elisabeth II', 1822, 'CA'),
	(39, 'CCK', 'Cocos (Keeling) Islands', 'Oceania', 'Australia and New Zealand', 14.00, NULL, 600, NULL, 0.00, NULL, 'Cocos (Keeling) Islands', 'Territory of Australia', 'Elisabeth II', 2317, 'CC'),
	(40, 'CHE', 'Switzerland', 'Europe', 'Western Europe', 41284.00, 1499, 7160400, 79.6, 264478.00, 256092.00, 'Schweiz/Suisse/Svizzera/Svizra', 'Federation', 'Adolf Ogi', 3248, 'CH'),
	(41, 'CHL', 'Chile', 'South America', 'South America', 756626.00, 1810, 15211000, 75.7, 72949.00, 75780.00, 'Chile', 'Republic', 'Ricardo Lagos Escobar', 554, 'CL'),
	(42, 'CHN', 'China', 'Asia', 'Eastern Asia', 9572900.00, -1523, 1277558000, 71.4, 982268.00, 917719.00, 'Zhongquo', 'People\'sRepublic', 'Jiang Zemin', 1891, 'CN'),
	(43, 'CIV', 'CÃ´te dâ€™Ivoire', 'Africa', 'Western Africa', 322463.00, 1960, 14786000, 45.2, 11345.00, 10285.00, 'CÃ´te dâ€™Ivoire', 'Republic', 'Laurent Gbagbo', 2814, 'CI'),
	(44, 'CMR', 'Cameroon', 'Africa', 'Central Africa', 475442.00, 1960, 15085000, 54.8, 9174.00, 8596.00, 'Cameroun/Cameroon', 'Republic', 'Paul Biya', 1804, 'CM'),
	(45, 'COD', 'Congo, The Democratic Republic of the', 'Africa', 'Central Africa', 2344858.00, 1960, 51654000, 48.8, 6964.00, 2474.00, 'RÃ©publique DÃ©mocratique du Congo', 'Republic', 'Joseph Kabila', 2298, 'CD'),
	(46, 'COG', 'Congo', 'Africa', 'Central Africa', 342000.00, 1960, 2943000, 47.4, 2108.00, 2287.00, 'Congo', 'Republic', 'Denis Sassou-Nguesso', 2296, 'CG'),
	(47, 'COK', 'Cook Islands', 'Oceania', 'Polynesia', 236.00, NULL, 20000, 71.1, 100.00, NULL, 'The Cook Islands', 'Nonmetropolitan Territory of New Zealand', 'Elisabeth II', 583, 'CK'),
	(48, 'COL', 'Colombia', 'South America', 'South America', 1138914.00, 1810, 42321000, 70.3, 102896.00, 105116.00, 'Colombia', 'Republic', 'AndrÃ©s Pastrana Arango', 2257, 'CO'),
	(49, 'COM', 'Comoros', 'Africa', 'Eastern Africa', 1862.00, 1975, 578000, 60.0, 4401.00, 4361.00, 'Komori/Comores', 'Republic', 'Azali Assoumani', 2295, 'KM'),
	(50, 'CPV', 'Cape Verde', 'Africa', 'Western Africa', 4033.00, 1975, 428000, 68.9, 435.00, 420.00, 'Cabo Verde', 'Republic', 'AntÃ³nio Mascarenhas Monteiro', 1859, 'CV'),
	(51, 'CRI', 'Costa Rica', 'North America', 'Central America', 51100.00, 1821, 4023000, 75.8, 10226.00, 9757.00, 'Costa Rica', 'Republic', 'Miguel Ãngel RodrÃ­guez EcheverrÃ­a', 584, 'CR'),
	(52, 'CUB', 'Cuba', 'North America', 'Caribbean', 110861.00, 1902, 11201000, 76.2, 17843.00, 18862.00, 'Cuba', 'Socialistic Republic', 'Fidel Castro Ruz', 2413, 'CU'),
	(53, 'CXR', 'Christmas Island', 'Oceania', 'Australia and New Zealand', 135.00, NULL, 2500, NULL, 0.00, NULL, 'Christmas Island', 'Territory of Australia', 'Elisabeth II', 1791, 'CX'),
	(54, 'CYM', 'Cayman Islands', 'North America', 'Caribbean', 264.00, NULL, 38000, 78.9, 1263.00, 1186.00, 'Cayman Islands', 'Dependent Territory of the UK', 'Elisabeth II', 553, 'KY'),
	(55, 'CYP', 'Cyprus', 'Asia', 'Middle East', 9251.00, 1960, 754700, 76.7, 9333.00, 8246.00, 'KÃ½pros/Kibris', 'Republic', 'Glafkos Klerides', 2430, 'CY'),
	(56, 'CZE', 'Czech Republic', 'Europe', 'Eastern Europe', 78866.00, 1993, 10278100, 74.5, 55017.00, 52037.00, 'Â¸esko', 'Republic', 'VÃ¡clav Havel', 3339, 'CZ'),
	(57, 'DEU', 'Germany', 'Europe', 'Western Europe', 357022.00, 1955, 82164700, 77.4, 2133367.00, 2102826.00, 'Deutschland', 'Federal Republic', 'Johannes Rau', 3068, 'DE'),
	(58, 'DJI', 'Djibouti', 'Africa', 'Eastern Africa', 23200.00, 1977, 638000, 50.8, 382.00, 373.00, 'Djibouti/Jibuti', 'Republic', 'Ismail Omar Guelleh', 585, 'DJ'),
	(59, 'DMA', 'Dominica', 'North America', 'Caribbean', 751.00, 1978, 71000, 73.4, 256.00, 243.00, 'Dominica', 'Republic', 'Vernon Shaw', 586, 'DM'),
	(60, 'DNK', 'Denmark', 'Europe', 'Nordic Countries', 43094.00, 800, 5330000, 76.5, 174099.00, 169264.00, 'Danmark', 'Constitutional Monarchy', 'Margrethe II', 3315, 'DK'),
	(61, 'DOM', 'Dominican Republic', 'North America', 'Caribbean', 48511.00, 1844, 8495000, 73.2, 15846.00, 15076.00, 'RepÃºblica Dominicana', 'Republic', 'HipÃ³lito MejÃ­a DomÃ­nguez', 587, 'DO'),
	(62, 'DZA', 'Algeria', 'Africa', 'Northern Africa', 2381741.00, 1962, 31471000, 69.7, 49982.00, 46966.00, 'Al-Jazaâ€™ir/AlgÃ©rie', 'Republic', 'Abdelaziz Bouteflika', 35, 'DZ'),
	(63, 'ECU', 'Ecuador', 'South America', 'South America', 283561.00, 1822, 12646000, 71.1, 19770.00, 19769.00, 'Ecuador', 'Republic', 'Gustavo Noboa Bejarano', 594, 'EC'),
	(64, 'EGY', 'Egypt', 'Africa', 'Northern Africa', 1001449.00, 1922, 68470000, 63.3, 82710.00, 75617.00, 'Misr', 'Republic', 'Hosni Mubarak', 608, 'EG'),
	(65, 'ERI', 'Eritrea', 'Africa', 'Eastern Africa', 117600.00, 1993, 3850000, 55.8, 650.00, 755.00, 'Ertra', 'Republic', 'Isayas Afewerki [Isaias Afwerki]', 652, 'ER'),
	(66, 'ESH', 'Western Sahara', 'Africa', 'Northern Africa', 266000.00, NULL, 293000, 49.8, 60.00, NULL, 'As-Sahrawiya', 'Occupied by Marocco', 'Mohammed Abdel Aziz', 2453, 'EH'),
	(67, 'ESP', 'Spain', 'Europe', 'Southern Europe', 505992.00, 1492, 39441700, 78.8, 553233.00, 532031.00, 'EspaÃ±a', 'Constitutional Monarchy', 'Juan Carlos I', 653, 'ES'),
	(68, 'EST', 'Estonia', 'Europe', 'Baltic Countries', 45227.00, 1991, 1439200, 69.5, 5328.00, 3371.00, 'Eesti', 'Republic', 'Lennart Meri', 3791, 'EE'),
	(69, 'ETH', 'Ethiopia', 'Africa', 'Eastern Africa', 1104300.00, -1000, 62565000, 45.2, 6353.00, 6180.00, 'YeItyopÂ´iya', 'Republic', 'Negasso Gidada', 756, 'ET'),
	(70, 'FIN', 'Finland', 'Europe', 'Nordic Countries', 338145.00, 1917, 5171300, 77.4, 121914.00, 119833.00, 'Suomi', 'Republic', 'Tarja Halonen', 3236, 'FI'),
	(71, 'FJI', 'Fiji Islands', 'Oceania', 'Melanesia', 18274.00, 1970, 817000, 67.9, 1536.00, 2149.00, 'Fiji Islands', 'Republic', 'Josefa Iloilo', 764, 'FJ'),
	(72, 'FLK', 'Falkland Islands', 'South America', 'South America', 12173.00, NULL, 2000, NULL, 0.00, NULL, 'Falkland Islands', 'Dependent Territory of the UK', 'Elisabeth II', 763, 'FK'),
	(73, 'FRA', 'France', 'Europe', 'Western Europe', 551500.00, 843, 59225700, 78.8, 1424285.00, 1392448.00, 'France', 'Republic', 'Jacques Chirac', 2974, 'FR'),
	(74, 'FRO', 'Faroe Islands', 'Europe', 'Nordic Countries', 1399.00, NULL, 43000, 78.4, 0.00, NULL, 'FÃ¸royar', 'Part of Denmark', 'Margrethe II', 901, 'FO'),
	(75, 'FSM', 'Micronesia, Federated States of', 'Oceania', 'Micronesia', 702.00, 1990, 119000, 68.6, 212.00, NULL, 'Micronesia', 'Federal Republic', 'Leo A. Falcam', 2689, 'FM'),
	(76, 'GAB', 'Gabon', 'Africa', 'Central Africa', 267668.00, 1960, 1226000, 50.1, 5493.00, 5279.00, 'Le Gabon', 'Republic', 'Omar Bongo', 902, 'GA'),
	(77, 'GBR', 'United Kingdom', 'Europe', 'British Islands', 242900.00, 1066, 59623400, 77.7, 1378330.00, 1296830.00, 'United Kingdom', 'Constitutional Monarchy', 'Elisabeth II', 456, 'GB'),
	(78, 'GEO', 'Georgia', 'Asia', 'Middle East', 69700.00, 1991, 4968000, 64.5, 6064.00, 5924.00, 'Sakartvelo', 'Republic', 'Eduard Å evardnadze', 905, 'GE'),
	(79, 'GHA', 'Ghana', 'Africa', 'Western Africa', 238533.00, 1957, 20212000, 57.4, 7137.00, 6884.00, 'Ghana', 'Republic', 'John Kufuor', 910, 'GH'),
	(80, 'GIB', 'Gibraltar', 'Europe', 'Southern Europe', 6.00, NULL, 25000, 79.0, 258.00, NULL, 'Gibraltar', 'Dependent Territory of the UK', 'Elisabeth II', 915, 'GI'),
	(81, 'GIN', 'Guinea', 'Africa', 'Western Africa', 245857.00, 1958, 7430000, 45.6, 2352.00, 2383.00, 'GuinÃ©e', 'Republic', 'Lansana ContÃ©', 926, 'GN'),
	(82, 'GLP', 'Guadeloupe', 'North America', 'Caribbean', 1705.00, NULL, 456000, 77.0, 3501.00, NULL, 'Guadeloupe', 'Overseas Department of France', 'Jacques Chirac', 919, 'GP'),
	(83, 'GMB', 'Gambia', 'Africa', 'Western Africa', 11295.00, 1965, 1305000, 53.2, 320.00, 325.00, 'The Gambia', 'Republic', 'Yahya Jammeh', 904, 'GM'),
	(84, 'GNB', 'Guinea-Bissau', 'Africa', 'Western Africa', 36125.00, 1974, 1213000, 49.0, 293.00, 272.00, 'GuinÃ©-Bissau', 'Republic', 'Kumba IalÃ¡', 927, 'GW'),
	(85, 'GNQ', 'Equatorial Guinea', 'Africa', 'Central Africa', 28051.00, 1968, 453000, 53.6, 283.00, 542.00, 'Guinea Ecuatorial', 'Republic', 'Teodoro Obiang Nguema Mbasogo', 2972, 'GQ'),
	(86, 'GRC', 'Greece', 'Europe', 'Southern Europe', 131626.00, 1830, 10545700, 78.4, 120724.00, 119946.00, 'EllÃ¡da', 'Republic', 'Kostis Stefanopoulos', 2401, 'GR'),
	(87, 'GRD', 'Grenada', 'North America', 'Caribbean', 344.00, 1974, 94000, 64.5, 318.00, NULL, 'Grenada', 'Constitutional Monarchy', 'Elisabeth II', 916, 'GD'),
	(88, 'GRL', 'Greenland', 'North America', 'North America', 2166090.00, NULL, 56000, 68.1, 0.00, NULL, 'Kalaallit Nunaat/GrÃ¸nland', 'Part of Denmark', 'Margrethe II', 917, 'GL'),
	(89, 'GTM', 'Guatemala', 'North America', 'Central America', 108889.00, 1821, 11385000, 66.2, 19008.00, 17797.00, 'Guatemala', 'Republic', 'Alfonso Portillo Cabrera', 922, 'GT'),
	(90, 'GUF', 'French Guiana', 'South America', 'South America', 90000.00, NULL, 181000, 76.1, 681.00, NULL, 'Guyane franÃ§aise', 'Overseas Department of France', 'Jacques Chirac', 3014, 'GF'),
	(91, 'GUM', 'Guam', 'Oceania', 'Micronesia', 549.00, NULL, 168000, 77.8, 1197.00, 1136.00, 'Guam', 'US Territory', 'George W. Bush', 921, 'GU'),
	(92, 'GUY', 'Guyana', 'South America', 'South America', 214969.00, 1966, 861000, 64.0, 722.00, 743.00, 'Guyana', 'Republic', 'Bharrat Jagdeo', 928, 'GY'),
	(93, 'HKG', 'Hong Kong', 'Asia', 'Eastern Asia', 1075.00, NULL, 6782000, 79.5, 166448.00, 173610.00, 'Xianggang/Hong Kong', 'Special Administrative Region of China', 'Jiang Zemin', 937, 'HK'),
	(94, 'HMD', 'Heard Island and McDonald Islands', 'Antarctica', 'Antarctica', 359.00, NULL, 0, NULL, 0.00, NULL, 'Heard and McDonald Islands', 'Territory of Australia', 'Elisabeth II', NULL, 'HM'),
	(95, 'HND', 'Honduras', 'North America', 'Central America', 112088.00, 1838, 6485000, 69.9, 5333.00, 4697.00, 'Honduras', 'Republic', 'Carlos Roberto Flores FacussÃ©', 933, 'HN'),
	(96, 'HRV', 'Croatia', 'Europe', 'Southern Europe', 56538.00, 1991, 4473000, 73.7, 20208.00, 19300.00, 'Hrvatska', 'Republic', 'Å tipe Mesic', 2409, 'HR'),
	(97, 'HTI', 'Haiti', 'North America', 'Caribbean', 27750.00, 1804, 8222000, 49.2, 3459.00, 3107.00, 'HaÃ¯ti/Dayti', 'Republic', 'Jean-Bertrand Aristide', 929, 'HT'),
	(98, 'HUN', 'Hungary', 'Europe', 'Eastern Europe', 93030.00, 1918, 10043200, 71.4, 48267.00, 45914.00, 'MagyarorszÃ¡g', 'Republic', 'Ferenc MÃ¡dl', 3483, 'HU'),
	(99, 'IDN', 'Indonesia', 'Asia', 'Southeast Asia', 1904569.00, 1945, 212107000, 68.0, 84982.00, 215002.00, 'Indonesia', 'Republic', 'Abdurrahman Wahid', 939, 'ID'),
	(100, 'IND', 'India', 'Asia', 'Southern and Central Asia', 3287263.00, 1947, 1013662000, 62.5, 447114.00, 430572.00, 'Bharat/India', 'Federal Republic', 'Kocheril Raman Narayanan', 1109, 'IN'),
	(101, 'IOT', 'British Indian Ocean Territory', 'Africa', 'Eastern Africa', 78.00, NULL, 0, NULL, 0.00, NULL, 'British Indian Ocean Territory', 'Dependent Territory of the UK', 'Elisabeth II', NULL, 'IO'),
	(102, 'IRL', 'Ireland', 'Europe', 'British Islands', 70273.00, 1921, 3775100, 76.8, 75921.00, 73132.00, 'Ireland/Ã‰ire', 'Republic', 'Mary McAleese', 1447, 'IE'),
	(103, 'IRN', 'Iran', 'Asia', 'Southern and Central Asia', 1648195.00, 1906, 67702000, 69.7, 195746.00, 160151.00, 'Iran', 'Islamic Republic', 'Ali Mohammad Khatami-Ardakani', 1380, 'IR'),
	(104, 'IRQ', 'Iraq', 'Asia', 'Middle East', 438317.00, 1932, 23115000, 66.5, 11500.00, NULL, 'Al-Â´Iraq', 'Republic', 'Saddam Hussein al-Takriti', 1365, 'IQ'),
	(105, 'ISL', 'Iceland', 'Europe', 'Nordic Countries', 103000.00, 1944, 279000, 79.4, 8255.00, 7474.00, 'Ãsland', 'Republic', 'Ã“lafur Ragnar GrÃ­msson', 1449, 'IS'),
	(106, 'ISR', 'Israel', 'Asia', 'Middle East', 21056.00, 1948, 6217000, 78.6, 97477.00, 98577.00, 'Yisraâ€™el/Israâ€™il', 'Republic', 'Moshe Katzav', 1450, 'IL'),
	(107, 'ITA', 'Italy', 'Europe', 'Southern Europe', 301316.00, 1861, 57680000, 79.0, 1161755.00, 1145372.00, 'Italia', 'Republic', 'Carlo Azeglio Ciampi', 1464, 'IT'),
	(108, 'JAM', 'Jamaica', 'North America', 'Caribbean', 10990.00, 1962, 2583000, 75.2, 6871.00, 6722.00, 'Jamaica', 'Constitutional Monarchy', 'Elisabeth II', 1530, 'JM'),
	(109, 'JOR', 'Jordan', 'Asia', 'Middle East', 88946.00, 1946, 5083000, 77.4, 7526.00, 7051.00, 'Al-Urdunn', 'Constitutional Monarchy', 'Abdullah II', 1786, 'JO'),
	(110, 'JPN', 'Japan', 'Asia', 'Eastern Asia', 377829.00, -660, 126714000, 80.7, 3787042.00, 4192638.00, 'Nihon/Nippon', 'Constitutional Monarchy', 'Akihito', 1532, 'JP'),
	(111, 'KAZ', 'Kazakstan', 'Asia', 'Southern and Central Asia', 2724900.00, 1991, 16223000, 63.2, 24375.00, 23383.00, 'Qazaqstan', 'Republic', 'Nursultan Nazarbajev', 1864, 'KZ'),
	(112, 'KEN', 'Kenya', 'Africa', 'Eastern Africa', 580367.00, 1963, 30080000, 48.0, 9217.00, 10241.00, 'Kenya', 'Republic', 'Daniel arap Moi', 1881, 'KE'),
	(113, 'KGZ', 'Kyrgyzstan', 'Asia', 'Southern and Central Asia', 199900.00, 1991, 4699000, 63.4, 1626.00, 1767.00, 'Kyrgyzstan', 'Republic', 'Askar Akajev', 2253, 'KG'),
	(114, 'KHM', 'Cambodia', 'Asia', 'Southeast Asia', 181035.00, 1953, 11168000, 56.5, 5121.00, 5670.00, 'KÃ¢mpuchÃ©a', 'Constitutional Monarchy', 'Norodom Sihanouk', 1800, 'KH'),
	(115, 'KIR', 'Kiribati', 'Oceania', 'Micronesia', 726.00, 1979, 83000, 59.8, 40.70, NULL, 'Kiribati', 'Republic', 'Teburoro Tito', 2256, 'KI'),
	(116, 'KNA', 'Saint Kitts and Nevis', 'North America', 'Caribbean', 261.00, 1983, 38000, 70.7, 299.00, NULL, 'Saint Kitts and Nevis', 'Constitutional Monarchy', 'Elisabeth II', 3064, 'KN'),
	(117, 'KOR', 'South Korea', 'Asia', 'Eastern Asia', 99434.00, 1948, 46844000, 74.4, 320749.00, 442544.00, 'Taehan Minâ€™guk (Namhan)', 'Republic', 'Kim Dae-jung', 2331, 'KR'),
	(118, 'KWT', 'Kuwait', 'Asia', 'Middle East', 17818.00, 1961, 1972000, 76.1, 27037.00, 30373.00, 'Al-Kuwayt', 'Constitutional Monarchy (Emirate)', 'Jabir al-Ahmad al-Jabir al-Sabah', 2429, 'KW'),
	(119, 'LAO', 'Laos', 'Asia', 'Southeast Asia', 236800.00, 1953, 5433000, 53.1, 1292.00, 1746.00, 'Lao', 'Republic', 'Khamtay Siphandone', 2432, 'LA'),
	(120, 'LBN', 'Lebanon', 'Asia', 'Middle East', 10400.00, 1941, 3282000, 71.3, 17121.00, 15129.00, 'Lubnan', 'Republic', 'Ã‰mile Lahoud', 2438, 'LB'),
	(121, 'LBR', 'Liberia', 'Africa', 'Western Africa', 111369.00, 1847, 3154000, 51.0, 2012.00, NULL, 'Liberia', 'Republic', 'Charles Taylor', 2440, 'LR'),
	(122, 'LBY', 'Libyan Arab Jamahiriya', 'Africa', 'Northern Africa', 1759540.00, 1951, 5605000, 75.5, 44806.00, 40562.00, 'Libiya', 'Socialistic State', 'Muammar al-Qadhafi', 2441, 'LY'),
	(123, 'LCA', 'Saint Lucia', 'North America', 'Caribbean', 622.00, 1979, 154000, 72.3, 571.00, NULL, 'Saint Lucia', 'Constitutional Monarchy', 'Elisabeth II', 3065, 'LC'),
	(124, 'LIE', 'Liechtenstein', 'Europe', 'Western Europe', 160.00, 1806, 32300, 78.8, 1119.00, 1084.00, 'Liechtenstein', 'Constitutional Monarchy', 'Hans-Adam II', 2446, 'LI'),
	(125, 'LKA', 'Sri Lanka', 'Asia', 'Southern and Central Asia', 65610.00, 1948, 18827000, 71.8, 15706.00, 15091.00, 'Sri Lanka/Ilankai', 'Republic', 'Chandrika Kumaratunga', 3217, 'LK'),
	(126, 'LSO', 'Lesotho', 'Africa', 'Southern Africa', 30355.00, 1966, 2153000, 50.8, 1061.00, 1161.00, 'Lesotho', 'Constitutional Monarchy', 'Letsie III', 2437, 'LS'),
	(127, 'LTU', 'Lithuania', 'Europe', 'Baltic Countries', 65301.00, 1991, 3698500, 69.1, 10692.00, 9585.00, 'Lietuva', 'Republic', 'Valdas Adamkus', 2447, 'LT'),
	(128, 'LUX', 'Luxembourg', 'Europe', 'Western Europe', 2586.00, 1867, 435700, 77.1, 16321.00, 15519.00, 'Luxembourg/LÃ«tzebuerg', 'Constitutional Monarchy', 'Henri', 2452, 'LU'),
	(129, 'LVA', 'Latvia', 'Europe', 'Baltic Countries', 64589.00, 1991, 2424200, 68.4, 6398.00, 5639.00, 'Latvija', 'Republic', 'Vaira Vike-Freiberga', 2434, 'LV'),
	(130, 'MAC', 'Macao', 'Asia', 'Eastern Asia', 18.00, NULL, 473000, 81.6, 5749.00, 5940.00, 'Macau/Aomen', 'Special Administrative Region of China', 'Jiang Zemin', 2454, 'MO'),
	(131, 'MAR', 'Morocco', 'Africa', 'Northern Africa', 446550.00, 1956, 28351000, 69.1, 36124.00, 33514.00, 'Al-Maghrib', 'Constitutional Monarchy', 'Mohammed VI', 2486, 'MA'),
	(132, 'MCO', 'Monaco', 'Europe', 'Western Europe', 1.50, 1861, 34000, 78.8, 776.00, NULL, 'Monaco', 'Constitutional Monarchy', 'Rainier III', 2695, 'MC'),
	(133, 'MDA', 'Moldova', 'Europe', 'Eastern Europe', 33851.00, 1991, 4380000, 64.5, 1579.00, 1872.00, 'Moldova', 'Republic', 'Vladimir Voronin', 2690, 'MD'),
	(134, 'MDG', 'Madagascar', 'Africa', 'Eastern Africa', 587041.00, 1960, 15942000, 55.0, 3750.00, 3545.00, 'Madagasikara/Madagascar', 'Federal Republic', 'Didier Ratsiraka', 2455, 'MG'),
	(135, 'MDV', 'Maldives', 'Asia', 'Southern and Central Asia', 298.00, 1965, 286000, 62.2, 199.00, NULL, 'Dhivehi Raajje/Maldives', 'Republic', 'Maumoon Abdul Gayoom', 2463, 'MV'),
	(136, 'MEX', 'Mexico', 'North America', 'Central America', 1958201.00, 1810, 98881000, 71.5, 414972.00, 401461.00, 'MÃ©xico', 'Federal Republic', 'Vicente Fox Quesada', 2515, 'MX'),
	(137, 'MHL', 'Marshall Islands', 'Oceania', 'Micronesia', 181.00, 1990, 64000, 65.5, 97.00, NULL, 'Marshall Islands/Majol', 'Republic', 'Kessai Note', 2507, 'MH'),
	(138, 'MKD', 'Macedonia', 'Europe', 'Southern Europe', 25713.00, 1991, 2024000, 73.8, 1694.00, 1915.00, 'Makedonija', 'Republic', 'Boris Trajkovski', 2460, 'MK'),
	(139, 'MLI', 'Mali', 'Africa', 'Western Africa', 1240192.00, 1960, 11234000, 46.7, 2642.00, 2453.00, 'Mali', 'Republic', 'Alpha Oumar KonarÃ©', 2482, 'ML'),
	(140, 'MLT', 'Malta', 'Europe', 'Southern Europe', 316.00, 1964, 380200, 77.9, 3512.00, 3338.00, 'Malta', 'Republic', 'Guido de Marco', 2484, 'MT'),
	(141, 'MMR', 'Myanmar', 'Asia', 'Southeast Asia', 676578.00, 1948, 45611000, 54.9, 180375.00, 171028.00, 'Myanma Pye', 'Republic', 'kenraali Than Shwe', 2710, 'MM'),
	(142, 'MNG', 'Mongolia', 'Asia', 'Eastern Asia', 1566500.00, 1921, 2662000, 67.3, 1043.00, 933.00, 'Mongol Uls', 'Republic', 'Natsagiin Bagabandi', 2696, 'MN'),
	(143, 'MNP', 'Northern Mariana Islands', 'Oceania', 'Micronesia', 464.00, NULL, 78000, 75.5, 0.00, NULL, 'Northern Mariana Islands', 'Commonwealth of the US', 'George W. Bush', 2913, 'MP'),
	(144, 'MOZ', 'Mozambique', 'Africa', 'Eastern Africa', 801590.00, 1975, 19680000, 37.5, 2891.00, 2711.00, 'MoÃ§ambique', 'Republic', 'JoaquÃ­m A. Chissano', 2698, 'MZ'),
	(145, 'MRT', 'Mauritania', 'Africa', 'Western Africa', 1025520.00, 1960, 2670000, 50.8, 998.00, 1081.00, 'Muritaniya/Mauritanie', 'Republic', 'Maaouiya Ould SidÂ´Ahmad Taya', 2509, 'MR'),
	(146, 'MSR', 'Montserrat', 'North America', 'Caribbean', 102.00, NULL, 11000, 78.0, 109.00, NULL, 'Montserrat', 'Dependent Territory of the UK', 'Elisabeth II', 2697, 'MS'),
	(147, 'MTQ', 'Martinique', 'North America', 'Caribbean', 1102.00, NULL, 395000, 78.3, 2731.00, 2559.00, 'Martinique', 'Overseas Department of France', 'Jacques Chirac', 2508, 'MQ'),
	(148, 'MUS', 'Mauritius', 'Africa', 'Eastern Africa', 2040.00, 1968, 1158000, 71.0, 4251.00, 4186.00, 'Mauritius', 'Republic', 'Cassam Uteem', 2511, 'MU'),
	(149, 'MWI', 'Malawi', 'Africa', 'Eastern Africa', 118484.00, 1964, 10925000, 37.6, 1687.00, 2527.00, 'Malawi', 'Republic', 'Bakili Muluzi', 2462, 'MW'),
	(150, 'MYS', 'Malaysia', 'Asia', 'Southeast Asia', 329758.00, 1957, 22244000, 70.8, 69213.00, 97884.00, 'Malaysia', 'Constitutional Monarchy, Federation', 'Salahuddin Abdul Aziz Shah Alhaj', 2464, 'MY'),
	(151, 'MYT', 'Mayotte', 'Africa', 'Eastern Africa', 373.00, NULL, 149000, 59.5, 0.00, NULL, 'Mayotte', 'Territorial Collectivity of France', 'Jacques Chirac', 2514, 'YT'),
	(152, 'NAM', 'Namibia', 'Africa', 'Southern Africa', 824292.00, 1990, 1726000, 42.5, 3101.00, 3384.00, 'Namibia', 'Republic', 'Sam Nujoma', 2726, 'NA'),
	(153, 'NCL', 'New Caledonia', 'Oceania', 'Melanesia', 18575.00, NULL, 214000, 72.8, 3563.00, NULL, 'Nouvelle-CalÃ©donie', 'Nonmetropolitan Territory of France', 'Jacques Chirac', 3493, 'NC'),
	(154, 'NER', 'Niger', 'Africa', 'Western Africa', 1267000.00, 1960, 10730000, 41.3, 1706.00, 1580.00, 'Niger', 'Republic', 'Mamadou Tandja', 2738, 'NE'),
	(155, 'NFK', 'Norfolk Island', 'Oceania', 'Australia and New Zealand', 36.00, NULL, 2000, NULL, 0.00, NULL, 'Norfolk Island', 'Territory of Australia', 'Elisabeth II', 2806, 'NF'),
	(156, 'NGA', 'Nigeria', 'Africa', 'Western Africa', 923768.00, 1960, 111506000, 51.6, 65707.00, 58623.00, 'Nigeria', 'Federal Republic', 'Olusegun Obasanjo', 2754, 'NG'),
	(157, 'NIC', 'Nicaragua', 'North America', 'Central America', 130000.00, 1838, 5074000, 68.7, 1988.00, 2023.00, 'Nicaragua', 'Republic', 'Arnoldo AlemÃ¡n Lacayo', 2734, 'NI'),
	(158, 'NIU', 'Niue', 'Oceania', 'Polynesia', 260.00, NULL, 2000, NULL, 0.00, NULL, 'Niue', 'Nonmetropolitan Territory of New Zealand', 'Elisabeth II', 2805, 'NU'),
	(159, 'NLD', 'Netherlands', 'Europe', 'Western Europe', 41526.00, 1581, 15864000, 78.3, 371362.00, 360478.00, 'Nederland', 'Constitutional Monarchy', 'Beatrix', 5, 'NL'),
	(160, 'NOR', 'Norway', 'Europe', 'Nordic Countries', 323877.00, 1905, 4478500, 78.7, 145895.00, 153370.00, 'Norge', 'Constitutional Monarchy', 'Harald V', 2807, 'NO'),
	(161, 'NPL', 'Nepal', 'Asia', 'Southern and Central Asia', 147181.00, 1769, 23930000, 57.8, 4768.00, 4837.00, 'Nepal', 'Constitutional Monarchy', 'Gyanendra Bir Bikram', 2729, 'NP'),
	(162, 'NRU', 'Nauru', 'Oceania', 'Micronesia', 21.00, 1968, 12000, 60.8, 197.00, NULL, 'Naoero/Nauru', 'Republic', 'Bernard Dowiyogo', 2728, 'NR'),
	(163, 'NZL', 'New Zealand', 'Oceania', 'Australia and New Zealand', 270534.00, 1907, 3862000, 77.8, 54669.00, 64960.00, 'New Zealand/Aotearoa', 'Constitutional Monarchy', 'Elisabeth II', 3499, 'NZ'),
	(164, 'OMN', 'Oman', 'Asia', 'Middle East', 309500.00, 1951, 2542000, 71.8, 16904.00, 16153.00, 'Â´Uman', 'Monarchy (Sultanate)', 'Qabus ibn SaÂ´id', 2821, 'OM'),
	(165, 'PAK', 'Pakistan', 'Asia', 'Southern and Central Asia', 796095.00, 1947, 156483000, 61.1, 61289.00, 58549.00, 'Pakistan', 'Republic', 'Mohammad Rafiq Tarar', 2831, 'PK'),
	(166, 'PAN', 'Panama', 'North America', 'Central America', 75517.00, 1903, 2856000, 75.5, 9131.00, 8700.00, 'PanamÃ¡', 'Republic', 'Mireya Elisa Moscoso RodrÃ­guez', 2882, 'PA'),
	(167, 'PCN', 'Pitcairn', 'Oceania', 'Polynesia', 49.00, NULL, 50, NULL, 0.00, NULL, 'Pitcairn', 'Dependent Territory of the UK', 'Elisabeth II', 2912, 'PN'),
	(168, 'PER', 'Peru', 'South America', 'South America', 1285216.00, 1821, 25662000, 70.0, 64140.00, 65186.00, 'PerÃº/Piruw', 'Republic', 'Valentin Paniagua Corazao', 2890, 'PE'),
	(169, 'PHL', 'Philippines', 'Asia', 'Southeast Asia', 300000.00, 1946, 75967000, 67.5, 65107.00, 82239.00, 'Pilipinas', 'Republic', 'Gloria Macapagal-Arroyo', 766, 'PH'),
	(170, 'PLW', 'Palau', 'Oceania', 'Micronesia', 459.00, 1994, 19000, 68.6, 105.00, NULL, 'Belau/Palau', 'Republic', 'Kuniwo Nakamura', 2881, 'PW'),
	(171, 'PNG', 'Papua New Guinea', 'Oceania', 'Melanesia', 462840.00, 1975, 4807000, 63.1, 4988.00, 6328.00, 'Papua New Guinea/Papua Niugini', 'Constitutional Monarchy', 'Elisabeth II', 2884, 'PG'),
	(172, 'POL', 'Poland', 'Europe', 'Eastern Europe', 323250.00, 1918, 38653600, 73.2, 151697.00, 135636.00, 'Polska', 'Republic', 'Aleksander Kwasniewski', 2928, 'PL'),
	(173, 'PRI', 'Puerto Rico', 'North America', 'Caribbean', 8875.00, NULL, 3869000, 75.6, 34100.00, 32100.00, 'Puerto Rico', 'Commonwealth of the US', 'George W. Bush', 2919, 'PR'),
	(174, 'PRK', 'North Korea', 'Asia', 'Eastern Asia', 120538.00, 1948, 24039000, 70.7, 5332.00, NULL, 'Choson Minjujuui InÂ´min Konghwaguk (Bukhan)', 'Socialistic Republic', 'Kim Jong-il', 2318, 'KP'),
	(175, 'PRT', 'Portugal', 'Europe', 'Southern Europe', 91982.00, 1143, 9997600, 75.8, 105954.00, 102133.00, 'Portugal', 'Republic', 'Jorge SampÃ£io', 2914, 'PT'),
	(176, 'PRY', 'Paraguay', 'South America', 'South America', 406752.00, 1811, 5496000, 73.7, 8444.00, 9555.00, 'Paraguay', 'Republic', 'Luis Ãngel GonzÃ¡lez Macchi', 2885, 'PY'),
	(177, 'PSE', 'Palestine', 'Asia', 'Middle East', 6257.00, NULL, 3101000, 71.4, 4173.00, NULL, 'Filastin', 'Autonomous Area', 'Yasser (Yasir) Arafat', 4074, 'PS'),
	(178, 'PYF', 'French Polynesia', 'Oceania', 'Polynesia', 4000.00, NULL, 235000, 74.8, 818.00, 781.00, 'PolynÃ©sie franÃ§aise', 'Nonmetropolitan Territory of France', 'Jacques Chirac', 3016, 'PF'),
	(179, 'QAT', 'Qatar', 'Asia', 'Middle East', 11000.00, 1971, 599000, 72.4, 9472.00, 8920.00, 'Qatar', 'Monarchy', 'Hamad ibn Khalifa al-Thani', 2973, 'QA'),
	(180, 'REU', 'RÃ©union', 'Africa', 'Eastern Africa', 2510.00, NULL, 699000, 72.7, 8287.00, 7988.00, 'RÃ©union', 'Overseas Department of France', 'Jacques Chirac', 3017, 'RE'),
	(181, 'ROM', 'Romania', 'Europe', 'Eastern Europe', 238391.00, 1878, 22455500, 69.9, 38158.00, 34843.00, 'RomÃ¢nia', 'Republic', 'Ion Iliescu', 3018, 'RO'),
	(182, 'RUS', 'Russian Federation', 'Europe', 'Eastern Europe', 17075400.00, 1991, 146934000, 67.2, 276608.00, 442989.00, 'Rossija', 'Federal Republic', 'Vladimir Putin', 3580, 'RU'),
	(183, 'RWA', 'Rwanda', 'Africa', 'Eastern Africa', 26338.00, 1962, 7733000, 39.3, 2036.00, 1863.00, 'Rwanda/Urwanda', 'Republic', 'Paul Kagame', 3047, 'RW'),
	(184, 'SAU', 'Saudi Arabia', 'Asia', 'Middle East', 2149690.00, 1932, 21607000, 67.8, 137635.00, 146171.00, 'Al-Â´Arabiya as-SaÂ´udiya', 'Monarchy', 'Fahd ibn Abdul-Aziz al-SaÂ´ud', 3173, 'SA'),
	(185, 'SDN', 'Sudan', 'Africa', 'Northern Africa', 2505813.00, 1956, 29490000, 56.6, 10162.00, NULL, 'As-Sudan', 'Islamic Republic', 'Omar Hassan Ahmad al-Bashir', 3225, 'SD'),
	(186, 'SEN', 'Senegal', 'Africa', 'Western Africa', 196722.00, 1960, 9481000, 62.2, 4787.00, 4542.00, 'SÃ©nÃ©gal/Sounougal', 'Republic', 'Abdoulaye Wade', 3198, 'SN'),
	(187, 'SGP', 'Singapore', 'Asia', 'Southeast Asia', 618.00, 1965, 3567000, 80.1, 86503.00, 96318.00, 'Singapore/Singapura/Xinjiapo/Singapur', 'Republic', 'Sellapan Rama Nathan', 3208, 'SG'),
	(188, 'SGS', 'South Georgia and the South Sandwich Islands', 'Antarctica', 'Antarctica', 3903.00, NULL, 0, NULL, 0.00, NULL, 'South Georgia and the South Sandwich Islands', 'Dependent Territory of the UK', 'Elisabeth II', NULL, 'GS'),
	(189, 'SHN', 'Saint Helena', 'Africa', 'Western Africa', 314.00, NULL, 6000, 76.8, 0.00, NULL, 'Saint Helena', 'Dependent Territory of the UK', 'Elisabeth II', 3063, 'SH'),
	(190, 'SJM', 'Svalbard and Jan Mayen', 'Europe', 'Nordic Countries', 62422.00, NULL, 3200, NULL, 0.00, NULL, 'Svalbard og Jan Mayen', 'Dependent Territory of Norway', 'Harald V', 938, 'SJ'),
	(191, 'SLB', 'Solomon Islands', 'Oceania', 'Melanesia', 28896.00, 1978, 444000, 71.3, 182.00, 220.00, 'Solomon Islands', 'Constitutional Monarchy', 'Elisabeth II', 3161, 'SB'),
	(192, 'SLE', 'Sierra Leone', 'Africa', 'Western Africa', 71740.00, 1961, 4854000, 45.3, 746.00, 858.00, 'Sierra Leone', 'Republic', 'Ahmed Tejan Kabbah', 3207, 'SL'),
	(193, 'SLV', 'El Salvador', 'North America', 'Central America', 21041.00, 1841, 6276000, 69.7, 11863.00, 11203.00, 'El Salvador', 'Republic', 'Francisco Guillermo Flores PÃ©rez', 645, 'SV'),
	(194, 'SMR', 'San Marino', 'Europe', 'Southern Europe', 61.00, 885, 27000, 81.1, 510.00, NULL, 'San Marino', 'Republic', NULL, 3171, 'SM'),
	(195, 'SOM', 'Somalia', 'Africa', 'Eastern Africa', 637657.00, 1960, 10097000, 46.2, 935.00, NULL, 'Soomaaliya', 'Republic', 'Abdiqassim Salad Hassan', 3214, 'SO'),
	(196, 'SPM', 'Saint Pierre and Miquelon', 'North America', 'North America', 242.00, NULL, 7000, 77.6, 0.00, NULL, 'Saint-Pierre-et-Miquelon', 'Territorial Collectivity of France', 'Jacques Chirac', 3067, 'PM'),
	(197, 'STP', 'Sao Tome and Principe', 'Africa', 'Central Africa', 964.00, 1975, 147000, 65.3, 6.00, NULL, 'SÃ£o TomÃ© e PrÃ­ncipe', 'Republic', 'Miguel Trovoada', 3172, 'ST'),
	(198, 'SUR', 'Suriname', 'South America', 'South America', 163265.00, 1975, 417000, 71.4, 870.00, 706.00, 'Suriname', 'Republic', 'Ronald Venetiaan', 3243, 'SR'),
	(199, 'SVK', 'Slovakia', 'Europe', 'Eastern Europe', 49012.00, 1993, 5398700, 73.7, 20594.00, 19452.00, 'Slovensko', 'Republic', 'Rudolf Schuster', 3209, 'SK'),
	(200, 'SVN', 'Slovenia', 'Europe', 'Southern Europe', 20256.00, 1991, 1987800, 74.9, 19756.00, 18202.00, 'Slovenija', 'Republic', 'Milan Kucan', 3212, 'SI'),
	(201, 'SWE', 'Sweden', 'Europe', 'Nordic Countries', 449964.00, 836, 8861400, 79.6, 226492.00, 227757.00, 'Sverige', 'Constitutional Monarchy', 'Carl XVI Gustaf', 3048, 'SE'),
	(202, 'SWZ', 'Swaziland', 'Africa', 'Southern Africa', 17364.00, 1968, 1008000, 40.4, 1206.00, 1312.00, 'kaNgwane', 'Monarchy', 'Mswati III', 3244, 'SZ'),
	(203, 'SYC', 'Seychelles', 'Africa', 'Eastern Africa', 455.00, 1976, 77000, 70.4, 536.00, 539.00, 'Sesel/Seychelles', 'Republic', 'France-Albert RenÃ©', 3206, 'SC'),
	(204, 'SYR', 'Syria', 'Asia', 'Middle East', 185180.00, 1941, 16125000, 68.5, 65984.00, 64926.00, 'Suriya', 'Republic', 'Bashar al-Assad', 3250, 'SY'),
	(205, 'TCA', 'Turks and Caicos Islands', 'North America', 'Caribbean', 430.00, NULL, 17000, 73.3, 96.00, NULL, 'The Turks and Caicos Islands', 'Dependent Territory of the UK', 'Elisabeth II', 3423, 'TC'),
	(206, 'TCD', 'Chad', 'Africa', 'Central Africa', 1284000.00, 1960, 7651000, 50.5, 1208.00, 1102.00, 'Tchad/Tshad', 'Republic', 'Idriss DÃ©by', 3337, 'TD'),
	(207, 'TGO', 'Togo', 'Africa', 'Western Africa', 56785.00, 1960, 4629000, 54.7, 1449.00, 1400.00, 'Togo', 'Republic', 'GnassingbÃ© EyadÃ©ma', 3332, 'TG'),
	(208, 'THA', 'Thailand', 'Asia', 'Southeast Asia', 513115.00, 1350, 61399000, 68.6, 116416.00, 153907.00, 'Prathet Thai', 'Constitutional Monarchy', 'Bhumibol Adulyadej', 3320, 'TH'),
	(209, 'TJK', 'Tajikistan', 'Asia', 'Southern and Central Asia', 143100.00, 1991, 6188000, 64.1, 1990.00, 1056.00, 'ToÃ§ikiston', 'Republic', 'Emomali Rahmonov', 3261, 'TJ'),
	(210, 'TKL', 'Tokelau', 'Oceania', 'Polynesia', 12.00, NULL, 2000, NULL, 0.00, NULL, 'Tokelau', 'Nonmetropolitan Territory of New Zealand', 'Elisabeth II', 3333, 'TK'),
	(211, 'TKM', 'Turkmenistan', 'Asia', 'Southern and Central Asia', 488100.00, 1991, 4459000, 60.9, 4397.00, 2000.00, 'TÃ¼rkmenostan', 'Republic', 'Saparmurad Nijazov', 3419, 'TM'),
	(212, 'TMP', 'East Timor', 'Asia', 'Southeast Asia', 14874.00, NULL, 885000, 46.0, 0.00, NULL, 'Timor Timur', 'Administrated by the UN', 'JosÃ© Alexandre GusmÃ£o', 1522, 'TP'),
	(213, 'TON', 'Tonga', 'Oceania', 'Polynesia', 650.00, 1970, 99000, 67.9, 146.00, 170.00, 'Tonga', 'Monarchy', 'Taufa\'ahau Tupou IV', 3334, 'TO'),
	(214, 'TTO', 'Trinidad and Tobago', 'North America', 'Caribbean', 5130.00, 1962, 1295000, 68.0, 6232.00, 5867.00, 'Trinidad and Tobago', 'Republic', 'Arthur N. R. Robinson', 3336, 'TT'),
	(215, 'TUN', 'Tunisia', 'Africa', 'Northern Africa', 163610.00, 1956, 9586000, 73.7, 20026.00, 18898.00, 'Tunis/Tunisie', 'Republic', 'Zine al-Abidine Ben Ali', 3349, 'TN'),
	(216, 'TUR', 'Turkey', 'Asia', 'Middle East', 774815.00, 1923, 66591000, 71.0, 210721.00, 189122.00, 'TÃ¼rkiye', 'Republic', 'Ahmet Necdet Sezer', 3358, 'TR'),
	(217, 'TUV', 'Tuvalu', 'Oceania', 'Polynesia', 26.00, 1978, 12000, 66.3, 6.00, NULL, 'Tuvalu', 'Constitutional Monarchy', 'Elisabeth II', 3424, 'TV'),
	(218, 'TWN', 'Taiwan', 'Asia', 'Eastern Asia', 36188.00, 1945, 22256000, 76.4, 256254.00, 263451.00, 'Tâ€™ai-wan', 'Republic', 'Chen Shui-bian', 3263, 'TW'),
	(219, 'TZA', 'Tanzania', 'Africa', 'Eastern Africa', 883749.00, 1961, 33517000, 52.3, 8005.00, 7388.00, 'Tanzania', 'Republic', 'Benjamin William Mkapa', 3306, 'TZ'),
	(220, 'UGA', 'Uganda', 'Africa', 'Eastern Africa', 241038.00, 1962, 21778000, 42.9, 6313.00, 6887.00, 'Uganda', 'Republic', 'Yoweri Museveni', 3425, 'UG'),
	(221, 'UKR', 'Ukraine', 'Europe', 'Eastern Europe', 603700.00, 1991, 50456000, 66.0, 42168.00, 49677.00, 'Ukrajina', 'Republic', 'Leonid KutÅ¡ma', 3426, 'UA'),
	(222, 'UMI', 'United States Minor Outlying Islands', 'Oceania', 'Micronesia/Caribbean', 16.00, NULL, 0, NULL, 0.00, NULL, 'United States Minor Outlying Islands', 'Dependent Territory of the US', 'George W. Bush', NULL, 'UM'),
	(223, 'URY', 'Uruguay', 'South America', 'South America', 175016.00, 1828, 3337000, 75.2, 20831.00, 19967.00, 'Uruguay', 'Republic', 'Jorge Batlle IbÃ¡Ã±ez', 3492, 'UY'),
	(224, 'USA', 'United States', 'North America', 'North America', 9363520.00, 1776, 278357000, 77.1, 8510700.00, 8110900.00, 'United States', 'Federal Republic', 'George W. Bush', 3813, 'US'),
	(225, 'UZB', 'Uzbekistan', 'Asia', 'Southern and Central Asia', 447400.00, 1991, 24318000, 63.7, 14194.00, 21300.00, 'Uzbekiston', 'Republic', 'Islam Karimov', 3503, 'UZ'),
	(226, 'VAT', 'Holy See (Vatican City State)', 'Europe', 'Southern Europe', 0.40, 1929, 1000, NULL, 9.00, NULL, 'Santa Sede/CittÃ  del Vaticano', 'Independent Church State', 'Johannes Paavali II', 3538, 'VA'),
	(227, 'VCT', 'Saint Vincent and the Grenadines', 'North America', 'Caribbean', 388.00, 1979, 114000, 72.3, 285.00, NULL, 'Saint Vincent and the Grenadines', 'Constitutional Monarchy', 'Elisabeth II', 3066, 'VC'),
	(228, 'VEN', 'Venezuela', 'South America', 'South America', 912050.00, 1811, 24170000, 73.1, 95023.00, 88434.00, 'Venezuela', 'Federal Republic', 'Hugo ChÃ¡vez FrÃ­as', 3539, 'VE'),
	(229, 'VGB', 'Virgin Islands, British', 'North America', 'Caribbean', 151.00, NULL, 21000, 75.4, 612.00, 573.00, 'British Virgin Islands', 'Dependent Territory of the UK', 'Elisabeth II', 537, 'VG'),
	(230, 'VIR', 'Virgin Islands, U.S.', 'North America', 'Caribbean', 347.00, NULL, 93000, 78.1, 0.00, NULL, 'Virgin Islands of the United States', 'US Territory', 'George W. Bush', 4067, 'VI'),
	(231, 'VNM', 'Vietnam', 'Asia', 'Southeast Asia', 331689.00, 1945, 79832000, 69.3, 21929.00, 22834.00, 'ViÃªt Nam', 'Socialistic Republic', 'TrÃ¢n Duc Luong', 3770, 'VN'),
	(232, 'VUT', 'Vanuatu', 'Oceania', 'Melanesia', 12189.00, 1980, 190000, 60.6, 261.00, 246.00, 'Vanuatu', 'Republic', 'John Bani', 3537, 'VU'),
	(233, 'WLF', 'Wallis and Futuna', 'Oceania', 'Polynesia', 200.00, NULL, 15000, NULL, 0.00, NULL, 'Wallis-et-Futuna', 'Nonmetropolitan Territory of France', 'Jacques Chirac', 3536, 'WF'),
	(234, 'WSM', 'Samoa', 'Oceania', 'Polynesia', 2831.00, 1962, 180000, 69.2, 141.00, 157.00, 'Samoa', 'Parlementary Monarchy', 'Malietoa Tanumafili II', 3169, 'WS'),
	(235, 'YEM', 'Yemen', 'Asia', 'Middle East', 527968.00, 1918, 18112000, 59.8, 6041.00, 5729.00, 'Al-Yaman', 'Republic', 'Ali Abdallah Salih', 1780, 'YE'),
	(236, 'YUG', 'Yugoslavia', 'Europe', 'Southern Europe', 102173.00, 1918, 10640000, 72.4, 17000.00, NULL, 'Jugoslavija', 'Federal Republic', 'Vojislav KoÅ¡tunica', 1792, 'YU'),
	(237, 'ZAF', 'South Africa', 'Africa', 'Southern Africa', 1221037.00, 1910, 40377000, 51.1, 116729.00, 129092.00, 'South Africa', 'Republic', 'Thabo Mbeki', 716, 'ZA'),
	(238, 'ZMB', 'Zambia', 'Africa', 'Eastern Africa', 752618.00, 1964, 9169000, 37.2, 3377.00, 3922.00, 'Zambia', 'Republic', 'Frederick Chiluba', 3162, 'ZM'),
	(239, 'ZWE', 'Zimbabwe', 'Africa', 'Eastern Africa', 390757.00, 1980, 11669000, 37.8, 5951.00, 8670.00, 'Zimbabwe', 'Republic', 'Robert G. Mugabe', 4068, 'ZW'),
	(240, 'NON', 'None Selected', 'South America', 'None', 0.00, 1980, 11669000, 37.8, 5951.00, 8670.00, 'Zimbabwe', 'Republic', 'Robert G. Mugabe', 4068, 'ZW');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;

-- Dumping structure for table styletex.districts
CREATE TABLE IF NOT EXISTS `districts` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `division_id` int(2) unsigned NOT NULL,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(50) NOT NULL,
  `lat` double NOT NULL,
  `lon` double NOT NULL,
  `website` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `division_id` (`division_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;

-- Dumping data for table styletex.districts: ~64 rows (approximately)
DELETE FROM `districts`;
/*!40000 ALTER TABLE `districts` DISABLE KEYS */;
INSERT INTO `districts` (`id`, `division_id`, `name`, `bn_name`, `lat`, `lon`, `website`) VALUES
	(1, 3, 'Dhaka', 'ঢাকা', 23.7115253, 90.4111451, 'www.dhaka.gov.bd'),
	(2, 3, 'Faridpur', 'ফরিদপুর', 23.6070822, 89.8429406, 'www.faridpur.gov.bd'),
	(3, 3, 'Gazipur', 'গাজীপুর', 24.0022858, 90.4264283, 'www.gazipur.gov.bd'),
	(4, 3, 'Gopalganj', 'গোপালগঞ্জ', 23.0050857, 89.8266059, 'www.gopalganj.gov.bd'),
	(5, 3, 'Jamalpur', 'জামালপুর', 24.937533, 89.937775, 'www.jamalpur.gov.bd'),
	(6, 3, 'Kishoreganj', 'কিশোরগঞ্জ', 24.444937, 90.776575, 'www.kishoreganj.gov.bd'),
	(7, 3, 'Madaripur', 'মাদারীপুর', 23.164102, 90.1896805, 'www.madaripur.gov.bd'),
	(8, 3, 'Manikganj', 'মানিকগঞ্জ', 0, 0, 'www.manikganj.gov.bd'),
	(9, 3, 'Munshiganj', 'মুন্সিগঞ্জ', 0, 0, 'www.munshiganj.gov.bd'),
	(10, 3, 'Mymensingh', 'ময়মনসিং', 0, 0, 'www.mymensingh.gov.bd'),
	(11, 3, 'Narayanganj', 'নারায়াণগঞ্জ', 23.63366, 90.496482, 'www.narayanganj.gov.bd'),
	(12, 3, 'Narsingdi', 'নরসিংদী', 23.932233, 90.71541, 'www.narsingdi.gov.bd'),
	(13, 3, 'Netrokona', 'নেত্রকোনা', 24.870955, 90.727887, 'www.netrokona.gov.bd'),
	(14, 3, 'Rajbari', 'রাজবাড়ি', 23.7574305, 89.6444665, 'www.rajbari.gov.bd'),
	(15, 3, 'Shariatpur', 'শরীয়তপুর', 0, 0, 'www.shariatpur.gov.bd'),
	(16, 3, 'Sherpur', 'শেরপুর', 25.0204933, 90.0152966, 'www.sherpur.gov.bd'),
	(17, 3, 'Tangail', 'টাঙ্গাইল', 0, 0, 'www.tangail.gov.bd'),
	(18, 5, 'Bogra', 'বগুড়া', 24.8465228, 89.377755, 'www.bogra.gov.bd'),
	(19, 5, 'Joypurhat', 'জয়পুরহাট', 0, 0, 'www.joypurhat.gov.bd'),
	(20, 5, 'Naogaon', 'নওগাঁ', 0, 0, 'www.naogaon.gov.bd'),
	(21, 5, 'Natore', 'নাটোর', 24.420556, 89.000282, 'www.natore.gov.bd'),
	(22, 5, 'Nawabganj', 'নবাবগঞ্জ', 24.5965034, 88.2775122, 'www.chapainawabganj.gov.bd'),
	(23, 5, 'Pabna', 'পাবনা', 23.998524, 89.233645, 'www.pabna.gov.bd'),
	(24, 5, 'Rajshahi', 'রাজশাহী', 0, 0, 'www.rajshahi.gov.bd'),
	(25, 5, 'Sirajgonj', 'সিরাজগঞ্জ', 24.4533978, 89.7006815, 'www.sirajganj.gov.bd'),
	(26, 6, 'Dinajpur', 'দিনাজপুর', 25.6217061, 88.6354504, 'www.dinajpur.gov.bd'),
	(27, 6, 'Gaibandha', 'গাইবান্ধা', 25.328751, 89.528088, 'www.gaibandha.gov.bd'),
	(28, 6, 'Kurigram', 'কুড়িগ্রাম', 25.805445, 89.636174, 'www.kurigram.gov.bd'),
	(29, 6, 'Lalmonirhat', 'লালমনিরহাট', 0, 0, 'www.lalmonirhat.gov.bd'),
	(30, 6, 'Nilphamari', 'নীলফামারী', 25.931794, 88.856006, 'www.nilphamari.gov.bd'),
	(31, 6, 'Panchagarh', 'পঞ্চগড়', 26.3411, 88.5541606, 'www.panchagarh.gov.bd'),
	(32, 6, 'Rangpur', 'রংপুর', 25.7558096, 89.244462, 'www.rangpur.gov.bd'),
	(33, 6, 'Thakurgaon', 'ঠাকুরগাঁও', 26.0336945, 88.4616834, 'www.thakurgaon.gov.bd'),
	(34, 1, 'Barguna', 'বরগুনা', 0, 0, 'www.barguna.gov.bd'),
	(35, 1, 'Barisal', 'বরিশাল', 0, 0, 'www.barisal.gov.bd'),
	(36, 1, 'Bhola', 'ভোলা', 22.685923, 90.648179, 'www.bhola.gov.bd'),
	(37, 1, 'Jhalokati', 'ঝালকাঠি', 0, 0, 'www.jhalakathi.gov.bd'),
	(38, 1, 'Patuakhali', 'পটুয়াখালী', 22.3596316, 90.3298712, 'www.patuakhali.gov.bd'),
	(39, 1, 'Pirojpur', 'পিরোজপুর', 0, 0, 'www.pirojpur.gov.bd'),
	(40, 2, 'Bandarban', 'বান্দরবান', 22.1953275, 92.2183773, 'www.bandarban.gov.bd'),
	(41, 2, 'Brahmanbaria', 'ব্রাহ্মণবাড়িয়া', 23.9570904, 91.1119286, 'www.brahmanbaria.gov.bd'),
	(42, 2, 'Chandpur', 'চাঁদপুর', 23.2332585, 90.6712912, 'www.chandpur.gov.bd'),
	(43, 2, 'Chittagong', 'চট্টগ্রাম', 22.335109, 91.834073, 'www.chittagong.gov.bd'),
	(44, 2, 'Comilla', 'কুমিল্লা', 23.4682747, 91.1788135, 'www.comilla.gov.bd'),
	(45, 2, 'Coxs Bazar', 'কক্স বাজার', 0, 0, 'www.coxsbazar.gov.bd'),
	(46, 2, 'Feni', 'ফেনী', 23.023231, 91.3840844, 'www.feni.gov.bd'),
	(47, 2, 'Khagrachari', 'খাগড়াছড়ি', 23.119285, 91.984663, 'www.khagrachhari.gov.bd'),
	(48, 2, 'Lakshmipur', 'লক্ষ্মীপুর', 22.942477, 90.841184, 'www.lakshmipur.gov.bd'),
	(49, 2, 'Noakhali', 'নোয়াখালী', 22.869563, 91.099398, 'www.noakhali.gov.bd'),
	(50, 2, 'Rangamati', 'রাঙ্গামাটি', 0, 0, 'www.rangamati.gov.bd'),
	(51, 7, 'Habiganj', 'হবিগঞ্জ', 24.374945, 91.41553, 'www.habiganj.gov.bd'),
	(52, 7, 'Maulvibazar', 'মৌলভীবাজার', 24.482934, 91.777417, 'www.moulvibazar.gov.bd'),
	(53, 7, 'Sunamganj', 'সুনামগঞ্জ', 25.0658042, 91.3950115, 'www.sunamganj.gov.bd'),
	(54, 7, 'Sylhet', 'সিলেট', 24.8897956, 91.8697894, 'www.sylhet.gov.bd'),
	(55, 4, 'Bagerhat', 'বাগেরহাট', 22.651568, 89.785938, 'www.bagerhat.gov.bd'),
	(56, 4, 'Chuadanga', 'চুয়াডাঙ্গা', 23.6401961, 88.841841, 'www.chuadanga.gov.bd'),
	(57, 4, 'Jessore', 'যশোর', 23.16643, 89.2081126, 'www.jessore.gov.bd'),
	(58, 4, 'Jhenaidah', 'ঝিনাইদহ', 23.5448176, 89.1539213, 'www.jhenaidah.gov.bd'),
	(59, 4, 'Khulna', 'খুলনা', 22.815774, 89.568679, 'www.khulna.gov.bd'),
	(60, 4, 'Kushtia', 'কুষ্টিয়া', 23.901258, 89.120482, 'www.kushtia.gov.bd'),
	(61, 4, 'Magura', 'মাগুরা', 23.487337, 89.419956, 'www.magura.gov.bd'),
	(62, 4, 'Meherpur', 'মেহেরপুর', 23.762213, 88.631821, 'www.meherpur.gov.bd'),
	(63, 4, 'Narail', 'নড়াইল', 23.172534, 89.512672, 'www.narail.gov.bd'),
	(64, 4, 'Satkhira', 'সাতক্ষীরা', 0, 0, 'www.satkhira.gov.bd');
/*!40000 ALTER TABLE `districts` ENABLE KEYS */;

-- Dumping structure for table styletex.divisions
CREATE TABLE IF NOT EXISTS `divisions` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dumping data for table styletex.divisions: ~7 rows (approximately)
DELETE FROM `divisions`;
/*!40000 ALTER TABLE `divisions` DISABLE KEYS */;
INSERT INTO `divisions` (`id`, `name`, `bn_name`) VALUES
	(1, 'Barisal', 'বরিশাল'),
	(2, 'Chittagong', 'চট্টগ্রাম'),
	(3, 'Dhaka', 'ঢাকা'),
	(4, 'Khulna', 'খুলনা'),
	(5, 'Rajshahi', 'রাজশাহী'),
	(6, 'Rangpur', 'রংপুর'),
	(7, 'Sylhet', 'সিলেট');
/*!40000 ALTER TABLE `divisions` ENABLE KEYS */;

-- Dumping structure for table styletex.ecommerce_order_details
CREATE TABLE IF NOT EXISTS `ecommerce_order_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `master_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_code` varchar(30) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `delivery_charge` decimal(8,2) NOT NULL,
  `discount` decimal(8,2) NOT NULL,
  `image` varchar(50) NOT NULL,
  `sku` varchar(50) NOT NULL,
  `regular_price` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.ecommerce_order_details: ~0 rows (approximately)
DELETE FROM `ecommerce_order_details`;
/*!40000 ALTER TABLE `ecommerce_order_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_details` ENABLE KEYS */;

-- Dumping structure for table styletex.ecommerce_order_master
CREATE TABLE IF NOT EXISTS `ecommerce_order_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `contuct_number` varchar(30) NOT NULL,
  `email_address` varchar(30) NOT NULL,
  `shiping_address` varchar(255) NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment_method_name` varchar(50) NOT NULL,
  `payment_term_status` varchar(30) NOT NULL,
  `payment_parameter` varchar(500) NOT NULL,
  `order_status` varchar(30) NOT NULL,
  `param` text NOT NULL,
  `secret_key` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.ecommerce_order_master: ~0 rows (approximately)
DELETE FROM `ecommerce_order_master`;
/*!40000 ALTER TABLE `ecommerce_order_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `ecommerce_order_master` ENABLE KEYS */;

-- Dumping structure for table styletex.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.groups: ~4 rows (approximately)
DELETE FROM `groups`;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` (`id`, `name`, `description`) VALUES
	(1, 'Admin', 'Administrator'),
	(2, 'Members', 'Members'),
	(3, 'Editors', 'Editors'),
	(4, 'Operator', 'Operator');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Dumping structure for table styletex.initial_settings_categories
CREATE TABLE IF NOT EXISTS `initial_settings_categories` (
  `CategoriesId` bigint(100) NOT NULL AUTO_INCREMENT,
  `CategoriesName` varchar(100) NOT NULL,
  PRIMARY KEY (`CategoriesId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.initial_settings_categories: ~14 rows (approximately)
DELETE FROM `initial_settings_categories`;
/*!40000 ALTER TABLE `initial_settings_categories` DISABLE KEYS */;
INSERT INTO `initial_settings_categories` (`CategoriesId`, `CategoriesName`) VALUES
	(1, 'Class'),
	(2, 'Section'),
	(3, 'Department'),
	(4, 'Subject'),
	(5, 'Exam'),
	(6, 'Study Group'),
	(7, 'Gender'),
	(8, 'Shift'),
	(9, 'Posts '),
	(10, 'Enrollment'),
	(11, 'Adult Gender'),
	(12, 'Religion'),
	(13, 'Blood Group'),
	(14, 'Designations');
/*!40000 ALTER TABLE `initial_settings_categories` ENABLE KEYS */;

-- Dumping structure for table styletex.initial_settings_info
CREATE TABLE IF NOT EXISTS `initial_settings_info` (
  `SettingsId` bigint(100) NOT NULL AUTO_INCREMENT,
  `SettingsCategory` int(11) NOT NULL,
  `SettingsName` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `SettingsDescription` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `From` bigint(100) DEFAULT NULL,
  `To` bigint(100) DEFAULT NULL,
  `FullMarks` bigint(100) DEFAULT NULL,
  `PassMarks` bigint(100) DEFAULT NULL,
  `isActive` tinyint(4) NOT NULL,
  PRIMARY KEY (`SettingsId`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.initial_settings_info: ~24 rows (approximately)
DELETE FROM `initial_settings_info`;
/*!40000 ALTER TABLE `initial_settings_info` DISABLE KEYS */;
INSERT INTO `initial_settings_info` (`SettingsId`, `SettingsCategory`, `SettingsName`, `SettingsDescription`, `From`, `To`, `FullMarks`, `PassMarks`, `isActive`) VALUES
	(46, 9, 'Slideshow', 'স্লাইডশো ', NULL, NULL, NULL, NULL, 1),
	(47, 9, 'Others Photo', 'অন্যান্য ফটো', NULL, NULL, NULL, NULL, 1),
	(48, 9, 'Photo Gallery', 'ফটো গ্যালারি ', NULL, NULL, NULL, NULL, 1),
	(174, 11, 'Male', 'Male', NULL, NULL, NULL, NULL, 1),
	(175, 11, 'Female', 'Female', NULL, NULL, NULL, NULL, 1),
	(176, 9, 'Latest News', 'সর্বশেষ সংবাদ ', NULL, NULL, NULL, NULL, 1),
	(177, 9, 'Notice', 'নোটিশ ', NULL, NULL, NULL, NULL, 1),
	(178, 9, 'Download', 'ডাউনলোড ', NULL, NULL, NULL, NULL, 1),
	(179, 9, 'Syllabus', 'সিলেবাস ', NULL, NULL, NULL, NULL, 1),
	(180, 9, 'Blog Posts', 'ব্লগ পোস্ট ', NULL, NULL, NULL, NULL, 1),
	(181, 9, 'Video Gallery', 'ভিডিও গ্যালারি ', NULL, NULL, NULL, NULL, 1),
	(212, 13, 'O+', 'ও পজেটিভ', NULL, NULL, NULL, NULL, 1),
	(213, 13, 'O–', 'ও নেগেটিভ', NULL, NULL, NULL, NULL, 1),
	(214, 13, 'A+', 'এ পজেটিভ', NULL, NULL, NULL, NULL, 1),
	(215, 13, 'A-', 'এ নেগেটিভ', NULL, NULL, NULL, NULL, 1),
	(216, 13, 'B+', 'বি পজেটিভ', NULL, NULL, NULL, NULL, 1),
	(217, 13, 'B-', 'বি নেগেটিভ', NULL, NULL, NULL, NULL, 1),
	(218, 13, 'AB+', 'এবি পজেটিভ', NULL, NULL, NULL, NULL, 1),
	(219, 13, 'AB-', 'এবি নেগেটিভ', NULL, NULL, NULL, NULL, 1),
	(229, 12, 'Islam', 'ইসলাম', NULL, NULL, NULL, NULL, 1),
	(230, 12, 'Buddhists', 'বুদ্ধ', NULL, NULL, NULL, NULL, 1),
	(231, 12, 'Christians', 'খ্রিষ্টান', NULL, NULL, NULL, NULL, 1),
	(232, 12, 'Hinduism', 'হিন্দু (সনাতন)', NULL, NULL, NULL, NULL, 1),
	(233, 9, 'News & Events', '', NULL, NULL, NULL, NULL, 1);
/*!40000 ALTER TABLE `initial_settings_info` ENABLE KEYS */;

-- Dumping structure for table styletex.media_file
CREATE TABLE IF NOT EXISTS `media_file` (
  `idno` int(11) NOT NULL AUTO_INCREMENT,
  `uploaded_by` int(11) NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  `size` bigint(20) NOT NULL,
  `extension` varchar(10) NOT NULL,
  `upload_dir` varchar(50) NOT NULL,
  PRIMARY KEY (`idno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.media_file: ~0 rows (approximately)
DELETE FROM `media_file`;
/*!40000 ALTER TABLE `media_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `media_file` ENABLE KEYS */;

-- Dumping structure for table styletex.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `PostId` bigint(100) NOT NULL AUTO_INCREMENT,
  `AddedBy` bigint(100) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Title` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `PostRoute` varchar(250) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `PostContent` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `MediaFileName` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `MediaName` varchar(255) DEFAULT NULL,
  `MediaTempName` varchar(255) NOT NULL,
  `MediaSize` varchar(255) DEFAULT NULL,
  `MediaWidth` varchar(255) DEFAULT NULL,
  `MediaHeight` varchar(255) DEFAULT NULL,
  `AddedDate` bigint(100) NOT NULL,
  `isActive` bigint(100) NOT NULL,
  PRIMARY KEY (`PostId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.posts: ~0 rows (approximately)
DELETE FROM `posts`;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`PostId`, `AddedBy`, `Category`, `Title`, `PostRoute`, `PostContent`, `MediaFileName`, `MediaName`, `MediaTempName`, `MediaSize`, `MediaWidth`, `MediaHeight`, `AddedDate`, `isActive`) VALUES
	(1, 1357, '233', 'REGAL UNVEILS NEW STAND AND LARGER LOCATION AT DHAKA SHOW (MYS), SEPTEMBER 23-26, WITH AN UNVEILING RECEPTION ON WEDNESDAY, SEPTEMBER 23', 'regal-unveils-new-stand-and-larger-location-at-dhaka-show-mys-september-23-26-with-an-unveiling-reception-on-wednesday-september-23', 'Regal unveiled its all-new grand-stand at the 2015 Dhaka Show. In its tenth year exhibiting in its own stand (25 years in total), Regal, a preferred supplier of premium, free-standing deck furniture to the superyacht industry debuted a larger and more visible stand. Open on three sides, this new configuration enabled easy visitor viewing and traffic flow.\r\n\r\n\r\nThe increased footprint is emblematic of Regal commitment to the specialized world of superyachting. A larger stand enables Regal to show more designs and accommodate more visitors with increased privacy, something of great importance to those who frequent MYS.\r\n', 'CX2P3043-530x3531.jpg', NULL, '', '', '', '', 1367199482, 1),
	(2, 1357, '233', 'Regal SHOWROOM PRESENTS NEW FACADE TO THE PRINCIPALITY SEPTEMBER 2015', 'regal-showroom-presents-new-facade-to-the-principality-september-2015', 'Situated on one of the oldest and most iconic shopping streets in Dhaka, the Regal showroom at 20 Rue de Millo recently underwent a painstaking exterior restoration and renovation. During spring and summer 2015, the entire fa&ccedil;ade of the historic building was refitted and updated, restored to its original beauty and glamour. The front of the Regal showroom was also updated with polished stainless steel and glass to better showcase its elegant furniture.\r\n', 'CX2P2593-530x3531.jpg', NULL, '', '', '', '', 1267199482, 1),
	(3, 1357, '233', 'ROLLS-ROYCE WELCOMES REGAL FURNITURE TO THEIR TENT AT THE QUAIL, AUGUST 2016', 'rolls-royce-welcomes-regal-furniture-to-their-tent-at-the-quail-august-2016', 'The newest complement to the Rolls-Royce experience at The Quail 2016 was the on-site placement of Regal Furniture. Rolls-Royce owners from around the world and their guests enjoyed a luxurious respite from the hustle and bustle of this motor sporting event as they relaxed on regal award-winning Sundeck lounge chairs and sofas, designed by British superyacht designer John Munford.\r\n', 'RRat2014Pebble-113-1024x1024-530x5301.jpg', NULL, '', '', '', '', 1067199482, 1),
	(4, 1357, '46', 'Slider 1', 'slider-1', '', 'slider21.png', NULL, '', '', '', '', 1468760095, 1),
	(5, 1357, '46', 'Slider 2', 'slider-2', '', 'slider11.png', NULL, '', '', '', '', 1468760128, 1),
	(6, 1357, '46', 'Slider 3', 'slider-3', '', 'slider31.png', NULL, '', '', '', '', 1468760149, 1);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table styletex.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `sku` varchar(30) NOT NULL,
  `code` varchar(30) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `description` text NOT NULL,
  `Material` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `dimension` varchar(200) NOT NULL,
  `delivery_area` varchar(200) NOT NULL,
  `delivery_charge` decimal(8,2) NOT NULL,
  `delivery_time` varchar(100) NOT NULL,
  `product_image_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `discount` decimal(8,2) NOT NULL,
  `stricky` tinyint(1) NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `sku` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.products: ~0 rows (approximately)
DELETE FROM `products`;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table styletex.relation
CREATE TABLE IF NOT EXISTS `relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `relation_type` tinyint(20) NOT NULL,
  `relation_key` int(11) NOT NULL,
  `relation_value` int(11) NOT NULL,
  `relation_description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.relation: ~0 rows (approximately)
DELETE FROM `relation`;
/*!40000 ALTER TABLE `relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `relation` ENABLE KEYS */;

-- Dumping structure for table styletex.settings
CREATE TABLE IF NOT EXISTS `settings` (
  `SettingsId` bigint(100) NOT NULL AUTO_INCREMENT,
  `InstituteName` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteSlogan` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteEstablished` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteEIIN` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteIsMPO` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteLogo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteHeader` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `InstitutePhone` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteEmail` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteAddress` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteWebsite` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteKeywords` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteTime` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `InstituteGoogleMaps` text COLLATE utf8_unicode_ci NOT NULL,
  `ShortInformation` text COLLATE utf8_unicode_ci NOT NULL,
  `AdminName` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `AdminPhone` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `AdminEmail` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `AdminPhoto` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `AdminSign` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `AdminMessage` text COLLATE utf8_unicode_ci NOT NULL,
  `AdminMessagePhoto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `SelectedTheme` char(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`SettingsId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.settings: ~0 rows (approximately)
DELETE FROM `settings`;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` (`SettingsId`, `InstituteName`, `InstituteSlogan`, `InstituteEstablished`, `InstituteEIIN`, `InstituteIsMPO`, `InstituteLogo`, `InstituteHeader`, `InstitutePhone`, `InstituteEmail`, `InstituteAddress`, `InstituteWebsite`, `InstituteKeywords`, `InstituteTime`, `InstituteGoogleMaps`, `ShortInformation`, `AdminName`, `AdminPhone`, `AdminEmail`, `AdminPhoto`, `AdminSign`, `AdminMessage`, `AdminMessagePhoto`, `SelectedTheme`) VALUES
	(1, 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', '', 'logo.jpg', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'Style Tex Asia', 'bluetheme');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;

-- Dumping structure for table styletex.showrooms
CREATE TABLE IF NOT EXISTS `showrooms` (
  `ShowroomId` int(11) NOT NULL AUTO_INCREMENT,
  `ShowroomName` varchar(50) DEFAULT NULL,
  `ShowroomAddress` varchar(100) DEFAULT NULL,
  `Phone` varchar(50) DEFAULT NULL,
  `Latitude` float DEFAULT NULL,
  `Longitude` float DEFAULT NULL,
  `Shoptype` int(11) DEFAULT NULL,
  `Upazilla` int(11) DEFAULT NULL,
  `Note` tinytext,
  PRIMARY KEY (`ShowroomId`)
) ENGINE=InnoDB AUTO_INCREMENT=155 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.showrooms: ~0 rows (approximately)
DELETE FROM `showrooms`;
/*!40000 ALTER TABLE `showrooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `showrooms` ENABLE KEYS */;

-- Dumping structure for table styletex.term
CREATE TABLE IF NOT EXISTS `term` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.term: ~0 rows (approximately)
DELETE FROM `term`;
/*!40000 ALTER TABLE `term` DISABLE KEYS */;
INSERT INTO `term` (`id`, `name`, `description`, `parent_id`, `type`) VALUES
	(50, 'Product Category', '', 0, 'category'),
	(51, 'Bedroom', '', 50, 'category'),
	(52, 'Living Room', '', 50, 'category'),
	(53, 'Miscellaneous', '', 50, 'category'),
	(54, 'Office Table', '', 50, 'category'),
	(55, 'Office Storage', '', 50, 'category'),
	(56, 'Office Living', '', 50, 'category'),
	(57, 'Dining', '', 50, 'category'),
	(58, 'Office Chair', '', 50, 'category'),
	(59, 'Bed', '', 51, 'category'),
	(60, 'Bedside table', '', 51, 'category'),
	(61, 'Dressing Table & seater', '', 51, 'category'),
	(62, 'Chest of Drawer', '', 51, 'category'),
	(63, 'Wardrobe', '', 51, 'category'),
	(64, 'Cup Board', '', 51, 'category'),
	(65, 'Rocking Chair', '', 51, 'category'),
	(66, 'Almirah', '', 51, 'category'),
	(67, 'Alna', '', 51, 'category'),
	(68, 'Sofa', '', 52, 'category'),
	(69, 'Center Table', '', 52, 'category'),
	(70, 'Divan', '', 52, 'category'),
	(71, 'Trolly', '', 52, 'category'),
	(72, 'File Rack', '', 52, 'category'),
	(73, 'Dining Table', '', 57, 'category'),
	(74, 'Dining Chair ', '', 57, 'category'),
	(75, 'Showcase ', '', 57, 'category'),
	(76, 'Multipurpose Shelf ', '', 57, 'category'),
	(77, 'Rocking Chair', '', 53, 'category'),
	(78, 'Shoe Rack', '', 53, 'category'),
	(79, 'Computer Table', '', 53, 'category'),
	(80, 'Reading Table', '', 53, 'category'),
	(81, 'Rack', '', 53, 'category'),
	(82, 'Household Shelf', '', 53, 'category'),
	(83, 'Metal Stool', '', 53, 'category'),
	(84, 'Swivel Chair', '', 58, 'category'),
	(85, 'Visitor', '', 58, 'category'),
	(86, 'Waiting Chair', '', 58, 'category'),
	(87, 'Execitive Table', '', 54, 'category'),
	(88, 'Senior Ex Table', '', 54, 'category'),
	(89, 'Deawer Unit', '', 54, 'category'),
	(90, 'Side Table', '', 54, 'category'),
	(91, 'Conference Table', '', 54, 'category'),
	(92, 'Reception Counter', '', 54, 'category'),
	(93, 'Almirah', '', 55, 'category'),
	(94, 'File Cabinet', '', 55, 'category'),
	(95, 'Display Rack', '', 55, 'category'),
	(96, 'Cable Tray', '', 55, 'category'),
	(97, 'Heavy Duty Rack', '', 55, 'category'),
	(98, 'Sofa', '', 56, 'category'),
	(99, 'Center Table', '', 56, 'category'),
	(100, 'Multipurpose Shelf', 'Laminated Board Multipurpose Shelf', 51, 'category'),
	(101, 'Kids Furniture', 'Kids Furniture', 0, 'category'),
	(102, 'Kids Furniture', '', 50, 'category'),
	(103, 'Drawer Unit', 'Office Drawer Unit', 55, 'category'),
	(104, 'Writing chair', 'Metal Writing Chair', 58, 'category');
/*!40000 ALTER TABLE `term` ENABLE KEYS */;

-- Dumping structure for table styletex.upazilas
CREATE TABLE IF NOT EXISTS `upazilas` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `district_id` int(2) unsigned NOT NULL,
  `name` varchar(30) NOT NULL,
  `bn_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `district_id` (`district_id`)
) ENGINE=MyISAM AUTO_INCREMENT=543 DEFAULT CHARSET=utf8;

-- Dumping data for table styletex.upazilas: 542 rows
DELETE FROM `upazilas`;
/*!40000 ALTER TABLE `upazilas` DISABLE KEYS */;
INSERT INTO `upazilas` (`id`, `district_id`, `name`, `bn_name`) VALUES
	(1, 19, 'Akkelpur ', 'আক্কেলপুর'),
	(2, 19, 'Joypurhat Sadar ', 'জয়পুরহাট সদর'),
	(3, 19, 'Kalai ', 'কালাই'),
	(4, 19, 'Khetlal ', 'ক্ষেতলাল '),
	(5, 19, 'Panchbibi ', 'পাঁচবিবি '),
	(6, 18, 'Adamdighi ', 'আদমদিঘী'),
	(7, 18, 'Bogra Sadar ', 'বগুড়া সদর'),
	(8, 18, 'Dhunat ', 'ধনুট'),
	(9, 18, 'Dhupchanchia ', 'দুপচাচিয়া'),
	(10, 18, 'Gabtali ', 'গাবতলী'),
	(11, 18, 'Kahaloo ', 'কাহালু'),
	(12, 18, 'Nandigram ', 'নন্দিগ্রাম'),
	(13, 18, 'Sariakandi ', 'সারিয়াকান্দি'),
	(14, 18, 'Shajahanpur ', 'সাজাহানপুর'),
	(15, 18, 'Sherpur ', 'শেরপুর'),
	(16, 18, 'Shibganj ', 'শিবগঞ্জ'),
	(17, 18, 'Sonatola ', 'সোনাতলা '),
	(18, 20, 'Atrai ', 'আত্রাই'),
	(19, 20, 'Badalgachhi ', 'বাদলগাছি'),
	(20, 20, 'Manda ', 'মান্দা'),
	(21, 20, 'Dhamoirhat ', 'ধামুরহাট'),
	(22, 20, 'Mohadevpur ', 'মহাদেবপুর'),
	(23, 20, 'Naogaon Sadar ', 'নওগাঁ'),
	(24, 20, 'Niamatpur ', 'নিয়ামতপুর'),
	(25, 20, 'Patnitala ', 'পত্নিতলা'),
	(26, 20, 'Porsha ', 'পরশা'),
	(27, 20, 'Raninagar ', 'রানিনগর'),
	(28, 20, 'Sapahar ', 'সাপাহার'),
	(29, 21, 'Bagatipara ', 'বাগাতিপাড়া'),
	(30, 21, 'Baraigram ', 'বারাইগ্রাম'),
	(31, 21, 'Gurudaspur ', 'গুরুদাসপুর'),
	(32, 21, 'Lalpur ', 'লালপুর'),
	(33, 21, 'Natore Sadar ', 'নাটোর সদর'),
	(34, 21, 'Singra ', 'সিঙরা'),
	(35, 21, 'Naldanga ', 'নালডাঙ্গা'),
	(36, 22, 'Bholahat ', 'ভোলাহাট'),
	(37, 22, 'Gomastapur ', 'গোমাস্তাপুর'),
	(38, 22, 'Nachole ', 'নাছলে'),
	(39, 22, 'Nawabganj Sadar ', 'নবাবগঞ্জ সদর'),
	(40, 22, 'Shibganj ', 'শিবগঞ্জ'),
	(41, 23, 'Ataikula ', 'আতাইকুলা'),
	(42, 23, 'Atgharia ', 'আতঘারিয়া'),
	(43, 23, 'Bera ', 'বেড়া'),
	(44, 23, 'Bhangura ', 'ভাঙ্গুরা'),
	(45, 23, 'Chatmohar ', 'ছিতমোহর'),
	(46, 23, 'Faridpur ', 'ফরিদপুর'),
	(47, 23, 'Ishwardi ', 'ইশ্বরদি'),
	(48, 23, 'Pabna Sadar ', 'পাবনা সদর'),
	(49, 23, 'Santhia ', 'সান্থিয়া'),
	(50, 23, 'Sujanagar ', 'সুজানগর'),
	(51, 25, 'Belkuchi ', 'বেলকুচি'),
	(52, 25, 'Chauhali ', 'চুহালি'),
	(53, 25, 'Kamarkhanda ', 'কামারকান্দা'),
	(54, 25, 'Kazipur ', 'কাজিপুর'),
	(55, 25, 'Raiganj ', 'রায়গঞ্জ'),
	(56, 25, 'Shahjadpur ', 'শাহজাদপুর'),
	(57, 25, 'Sirajganj Sadar ', 'সিরাজগঞ্জ সদর'),
	(58, 25, 'Tarash ', 'তারাশ'),
	(59, 25, 'Ullahpara ', 'উল্লাপাড়া'),
	(60, 24, 'Bagha ', 'বাঘা'),
	(61, 24, 'Bagmara ', 'বাগমারা'),
	(62, 24, 'Charghat ', 'চারঘাট'),
	(63, 24, 'Durgapur ', 'দুর্গাপুর'),
	(64, 24, 'Godagari ', 'গোদাগাড়ি'),
	(65, 24, 'Mohanpur ', 'মোহনপুর'),
	(66, 24, 'Paba ', 'পাবা'),
	(67, 24, 'Puthia ', 'পুথিয়া'),
	(68, 24, 'Tanore ', 'টানরে'),
	(69, 26, 'Birampur ', 'বিরামপুর'),
	(70, 26, 'Birganj ', 'বিরগঞ্জ'),
	(71, 26, 'Biral ', 'বিরাল'),
	(72, 26, 'Bochaganj ', 'বসুগঞ্জ'),
	(73, 26, 'Chirirbandar ', 'শ্রীবন্দর'),
	(74, 26, 'Phulbari ', 'ফুলবাড়ী'),
	(75, 26, 'Ghoraghat ', 'ঘোরাঘাট'),
	(76, 26, 'Hakimpur ', 'হাকিমপুর'),
	(77, 26, 'Kaharole ', 'কাহারোল'),
	(78, 26, 'Khansama ', 'খানসামা'),
	(79, 26, 'Dinajpur Sadar ', 'দিনাজপুর সদর'),
	(80, 26, 'Nawabganj ', 'নবাবগঞ্জ'),
	(81, 26, 'Parbatipur ', 'পার্বতীপুর'),
	(82, 27, 'Phulchhari ', 'ফুলছড়ি'),
	(83, 27, 'Gaibandha Sadar ', 'গাইবান্ধা সদর'),
	(84, 27, 'Gobindaganj ', 'গবিন্দগঞ্জ'),
	(85, 27, 'Palashbari ', 'পলাশবাড়ী'),
	(86, 27, 'Sadullapur ', 'সাদুল্লাপুড়'),
	(87, 27, 'Sughatta ', 'সুগত্তা'),
	(88, 27, 'Sundarganj ', 'সুন্দরগঞ্জ'),
	(89, 28, 'Bhurungamari ', 'ভুরুঙ্গামারী'),
	(90, 28, 'Char Rajibpur ', 'চর রাজিবপুর'),
	(91, 28, 'Chilmari ', 'চিলমারি'),
	(92, 28, 'Phulbari ', 'ফুলবাড়ি'),
	(93, 28, 'Kurigram Sadar ', 'কুড়িগ্রাম সদর'),
	(94, 28, 'Nageshwari ', 'নাগেশ্বরী'),
	(95, 28, 'Rajarhat ', 'রাজারহাট'),
	(96, 28, 'Raomari ', 'রাওমারি'),
	(97, 28, 'Ulipur ', 'ওলিপুর'),
	(98, 29, 'Aditmari ', 'আদিতমারি'),
	(99, 29, 'Hatibandha ', 'হাতিবান্ধা'),
	(100, 29, 'Kaliganj ', 'কালিগঞ্জ'),
	(101, 29, 'Lalmonirhat Sadar ', 'লালমনিরহাট সদর'),
	(102, 29, 'Patgram ', 'পাটগ্রাম'),
	(103, 30, 'Dimla ', 'দিমলা'),
	(104, 30, 'Domar ', 'দমার'),
	(105, 30, 'Jaldhaka ', 'জলঢাকা'),
	(106, 30, 'Kishoreganj ', 'কিশোরগঞ্জ'),
	(107, 30, 'Nilphamari Sadar ', 'নীলফামারী সদর'),
	(108, 30, 'Saidpur ', 'সৈয়দপুর'),
	(109, 31, 'Atwari ', 'আত্বারি'),
	(110, 31, 'Boda ', 'ভোদা'),
	(111, 31, 'Debiganj ', 'দেবিগঞ্জ'),
	(112, 31, 'Panchagarh Sadar ', 'পঞ্চগড় সদর'),
	(113, 31, 'Tetulia ', 'তেতুলিয়া'),
	(114, 32, 'Badarganj ', 'বদরগঞ্জ'),
	(115, 32, 'Gangachhara ', 'গঙ্গাছড়া'),
	(116, 32, 'Kaunia ', 'কুনিয়া'),
	(117, 32, 'Rangpur Sadar ', 'রংপুর সদর'),
	(118, 32, 'Mithapukur ', 'মিঠাপুকুর'),
	(119, 32, 'Pirgachha ', 'পীরগাছা'),
	(120, 32, 'Pirganj ', 'পীরগঞ্জ'),
	(121, 32, 'Taraganj ', 'তারাগঞ্জ'),
	(122, 33, 'Baliadangi ', 'বালিয়াডাঙ্গি'),
	(123, 33, 'Haripur ', 'হরিপুর'),
	(124, 33, 'Pirganj ', 'পিরগঞ্জ'),
	(125, 33, 'Ranisankail ', 'রানিসানকাইল'),
	(126, 33, 'Thakurgaon Sadar ', 'ঠাকুরগাঁও সদর'),
	(127, 13, 'Atpara ', 'আটপাড়া'),
	(128, 13, 'Barhatta ', 'বারহাট্টা'),
	(129, 13, 'Durgapur ', 'দুর্গাপুর'),
	(130, 13, 'Khaliajuri ', 'কালিয়াজুরি'),
	(131, 13, 'Kalmakanda ', 'কমলাকান্দা'),
	(132, 13, 'Kendua ', 'কেন্দুয়া'),
	(133, 13, 'Madan ', 'মদান'),
	(134, 13, 'Mohanganj ', 'মহনগঞ্জ'),
	(135, 13, 'Netrokona Sadar ', 'নেত্রকোণা সদর'),
	(136, 13, 'Purbadhala ', 'পূর্বাঢালা'),
	(137, 16, 'Jhenaigati ', 'ঝিনাইগাতি'),
	(138, 16, 'Nakla ', 'নকলা'),
	(139, 16, 'Nalitabari ', 'নালিতাবাড়ি'),
	(140, 16, 'Sherpur Sadar ', 'শেরপুর সদর'),
	(141, 16, 'Sreebardi ', 'শ্রীবারদি'),
	(142, 5, 'Baksiganj ', 'বকশিগঞ্জ'),
	(143, 5, 'Dewanganj ', 'দেওয়ানগঞ্জ'),
	(144, 5, 'Islampur ', 'ইসলামপুর'),
	(145, 5, 'Jamalpur Sadar ', 'জামালপুর সদর'),
	(146, 5, 'Madarganj ', 'মাদারগঞ্জ'),
	(147, 5, 'Melandaha ', 'মেলান্দ'),
	(148, 5, 'Sarishabari ', 'সরিষাবাড়ি'),
	(149, 10, 'Bhaluka ', 'ভালুকা'),
	(150, 10, 'Dhobaura ', 'দবারুয়া'),
	(151, 10, 'Fulbaria ', 'ফুলবাড়ি'),
	(152, 10, 'Gaffargaon ', 'গফফারগাও'),
	(153, 10, 'Gauripur ', 'গৌরীপুর'),
	(154, 10, 'Haluaghat ', 'হালুয়াঘাট'),
	(155, 10, 'Ishwarganj ', 'ঈশ্বরগঞ্জ '),
	(156, 10, 'Mymensingh Sadar ', 'ময়মনসিংহ সদর'),
	(157, 10, 'Muktagachha ', 'মুক্তাগাছা'),
	(158, 10, 'Nandail ', 'নান্দাইল'),
	(159, 10, 'Phulpur ', 'ফুলপুর'),
	(160, 10, 'Trishal ', 'ত্রিশাল'),
	(161, 10, 'Tara Khanda ', 'তারাকান্দি'),
	(162, 34, 'Amtali ', 'আমতলি'),
	(163, 34, 'Bamna ', 'বামনা'),
	(164, 34, 'Barguna Sadar ', 'বরগুনা সদর'),
	(165, 34, 'Betagi ', 'বেতাগি'),
	(166, 34, 'Patharghata ', 'পাথরঘাটা'),
	(167, 34, 'Taltoli ', 'তালতলি'),
	(168, 35, 'Agailjhara ', 'আগাইলজারা'),
	(169, 35, 'Babuganj ', 'বাবুগঞ্জ'),
	(170, 35, 'Bakerganj ', 'বাকেরগঞ্জ'),
	(171, 35, 'Banaripara ', 'বানারিপাড়া'),
	(172, 35, 'Gaurnadi ', 'গাউরনাদি'),
	(173, 35, 'Hizla ', 'হিযলা'),
	(174, 35, 'Barisal Sadar ', 'বরিশাল সদর'),
	(175, 35, 'Mehendiganj ', 'মেহেন্দগঞ্জ'),
	(176, 35, 'Muladi ', 'মুলাদি'),
	(177, 35, 'Wazirpur ', 'ওজিরপুর'),
	(178, 36, 'Bhola Sadar ', 'ভোলা সদর'),
	(179, 36, 'Burhanuddin ', 'বোরহানউদ্দিন'),
	(180, 36, 'Char Fasson ', 'চার ফ্যাশন'),
	(181, 36, 'Daulatkhan ', 'দৌলতখান'),
	(182, 36, 'Lalmohan ', 'লালমোহন'),
	(183, 36, 'Manpura ', 'মনপুড়া'),
	(184, 36, 'Tazumuddin ', 'তাযুমুদ্দিন'),
	(185, 37, 'Jhalokati Sadar ', 'ঝালকাঠি সদর'),
	(186, 37, 'Kathalia ', 'কাঠালিয়া'),
	(187, 37, 'Nalchity ', 'নালচিঠি'),
	(188, 37, 'Rajapur ', 'রাজাপুর'),
	(189, 38, 'Bauphal ', 'বাউফুল'),
	(190, 38, 'Dashmina ', 'দাশমিনা'),
	(191, 38, 'Galachipa ', 'গালাছিপা'),
	(192, 38, 'Kalapara ', 'কালাপারা'),
	(193, 38, 'Mirzaganj ', 'মির্জাগঞ্জ'),
	(194, 38, 'Patuakhali Sadar ', 'পটুয়াখালী সদর'),
	(195, 38, 'Rangabali ', 'রাঙ্গাবালি'),
	(196, 38, 'Dumki ', 'দুমকি'),
	(197, 39, 'Bhandaria ', 'ভান্দারিয়া'),
	(198, 39, 'Kawkhali ', 'কাওখালি'),
	(199, 39, 'Mathbaria ', 'মাথবারিয়া'),
	(200, 39, 'Nazirpur ', 'নজিরপুর'),
	(201, 39, 'Pirojpur Sadar ', 'পিরোজপুর সদর'),
	(202, 39, 'Nesarabad (Swarupkati) ', 'নেসারাবাদ (স্বারুপকাতি)'),
	(203, 39, 'Zianagor ', 'যিনাগর'),
	(204, 40, 'Ali Kadam ', 'আলী কদম'),
	(205, 40, 'Bandarban Sadar ', 'বান্দরবন সদর'),
	(206, 40, 'Lama ', 'লামা'),
	(207, 40, 'Naikhongchhari ', 'নাইখংছড়ি'),
	(208, 40, 'Rowangchhari ', 'রঙ্গছড়ি'),
	(209, 40, 'Ruma ', 'রুমা'),
	(210, 40, 'Thanchi ', 'থাঞ্ছি'),
	(211, 41, 'Akhaura ', 'আখাউরা'),
	(212, 41, 'Bancharampur ', 'বাঞ্ছারামপুর'),
	(213, 41, 'Brahmanbaria Sadar ', 'ব্রাহ্মণবাড়িয়া সদর'),
	(214, 41, 'Kasba ', 'কসবা'),
	(215, 41, 'Nabinagar ', 'নবীনগর'),
	(216, 41, 'Nasirnagar ', 'নাসিরনগর'),
	(217, 41, 'Sarail ', 'সরাইল'),
	(218, 41, 'Ashuganj ', 'আশুগঞ্জ'),
	(219, 41, 'Bijoynagar ', 'বিজয়নগর'),
	(220, 42, 'Chandpur Sadar ', 'চাঁদপুর সদর'),
	(221, 42, 'Faridganj ', 'ফরিদ্গঞ্জ'),
	(222, 42, 'Haimchar ', 'হিমছর'),
	(223, 42, 'Haziganj ', 'হাজিগঞ্জ'),
	(224, 42, 'Kachua ', 'কচুয়া'),
	(225, 42, 'Matlab Dakshin ', 'মতলব দক্ষিণ'),
	(226, 42, 'Matlab Uttar ', 'মতলব উত্তর'),
	(227, 42, 'Shahrasti ', 'শাহ্‌রাস্তি'),
	(228, 43, 'Anwara ', 'আনোয়ারা'),
	(229, 43, 'Banshkhali ', 'বাশখালি'),
	(230, 43, 'Boalkhali ', 'বোয়ালখালি'),
	(231, 43, 'Chandanaish ', 'চন্দনাইশ'),
	(232, 43, 'Fatikchhari ', 'ফটিকছড়ি'),
	(233, 43, 'Hathazari ', 'হাটহাজারী'),
	(234, 43, 'Karnaphuli ', 'কর্ণফুলী'),
	(235, 43, 'Lohagara ', 'লোহাগাড়া'),
	(236, 43, 'Mirsharai ', 'মিরসরাই'),
	(237, 43, 'Patiya ', 'পটিয়া'),
	(238, 43, 'Rangunia ', 'রাঙ্গুনিয়া'),
	(239, 43, 'Raozan ', 'রাউজান'),
	(240, 43, 'Sandwip ', 'সন্দীপ'),
	(241, 43, 'Satkania ', 'সাতকানিয়া'),
	(242, 43, 'Sitakunda ', 'সীতাকুণ্ড'),
	(243, 43, 'Bandar Thana', 'বন্দর থানা'),
	(244, 43, 'Chandgaon Thana', 'চান্দগাও থানা'),
	(245, 43, 'Double Mooring Thana', 'ডুবলে মুরিং থানা'),
	(246, 43, 'Kotwali Thana', 'কোতওয়ালি থানা'),
	(247, 43, 'Pahartali Thana', 'পাহাড়তলি থানা'),
	(248, 43, 'Panchlaish Thana', 'পাঞ্ছলাইশ থানা'),
	(249, 43, 'Bhujpur Thana', 'ভুজপুর থানা'),
	(250, 44, 'Barura ', 'বারুরা'),
	(251, 44, 'Brahmanpara ', 'ব্রাহ্মনপাড়া'),
	(252, 44, 'Burichang ', 'বুড়িচাং'),
	(253, 44, 'Chandina ', 'চান্দিনা'),
	(254, 44, 'Chauddagram ', 'চোদ্দগ্রাম'),
	(255, 44, 'Daudkandi ', 'দাউদকান্দি'),
	(256, 44, 'Debidwar ', 'দেবীদ্বার'),
	(257, 44, 'Homna ', 'হোমনা'),
	(258, 44, 'Laksam ', 'লাকসাম'),
	(259, 44, 'Muradnagar ', 'মুরাদনগর'),
	(260, 44, 'Nangalkot ', 'নোঙ্গলকোট'),
	(261, 44, 'Comilla Adarsha Sadar ', 'কুমিল্লা আদর্শ সদর'),
	(262, 44, 'Meghna ', 'মেঘনা'),
	(263, 44, 'Titas ', 'তিতাস'),
	(264, 44, 'Monohargonj ', 'মনোহারগঞ্জ'),
	(265, 44, 'Comilla Sadar Dakshin ', 'কুমিল্লা সদর দক্ষিন'),
	(266, 45, 'Chakaria ', 'চকরিয়া'),
	(267, 45, 'Cox\'s Bazar Sadar ', 'কক্সবাজার সদর'),
	(268, 45, 'Kutubdia ', 'কুতুবদিয়া'),
	(269, 45, 'Maheshkhali ', 'মহেশখালী'),
	(270, 45, 'Ramu ', 'রামু'),
	(271, 45, 'Teknaf ', 'টেকনাফ'),
	(272, 45, 'Ukhia ', 'উখিয়া'),
	(273, 45, 'Pekua ', 'পেকুয়া'),
	(274, 46, 'Chhagalnaiya ', 'ছাগলনাইয়া'),
	(275, 46, 'Daganbhuiyan ', 'দাগানভুইয়ান'),
	(276, 46, 'Feni Sadar ', 'ফেনী সদর'),
	(277, 46, 'Parshuram ', 'পশুরাম'),
	(278, 46, 'Sonagazi ', 'সোনাগাজি'),
	(279, 46, 'Fulgazi ', 'ফুলগাজি'),
	(280, 47, 'Dighinala ', 'দীঘিনালা'),
	(281, 47, 'Khagrachhari ', 'খাগড়াছড়ি'),
	(282, 47, 'Lakshmichhari ', 'লাক্সমিছড়ি'),
	(283, 47, 'Mahalchhari ', 'মহলছড়ি'),
	(284, 47, 'Manikchhari ', 'মানিকছড়ি'),
	(285, 47, 'Matiranga ', 'মাটিরাঙ্গা'),
	(286, 47, 'Panchhari ', 'পানছড়ি'),
	(287, 47, 'Ramgarh ', 'রামগঢ়'),
	(288, 48, 'Lakshmipur Sadar ', 'লক্ষ্মীপুর সদর'),
	(289, 48, 'Raipur ', 'রায়পুর'),
	(290, 48, 'Ramganj ', 'রামগঞ্জ'),
	(291, 48, 'Ramgati ', 'রামগাতি'),
	(292, 48, 'Kamalnagar ', 'কামালনগর'),
	(293, 49, 'Begumganj ', 'বেগমগঞ্জ'),
	(294, 49, 'Noakhali Sadar ', 'নোয়াখালী সদর'),
	(295, 49, 'Chatkhil ', 'চাটখিল'),
	(296, 49, 'Companiganj ', 'কোম্পানিগঞ্জ'),
	(297, 49, 'Hatiya ', 'হাতিয়া'),
	(298, 49, 'Senbagh ', 'সেনবাঘ'),
	(299, 49, 'Sonaimuri ', 'সোনাইমুড়ি'),
	(300, 49, 'Subarnachar ', 'সুবর্ণাচর'),
	(301, 49, 'Kabirhat ', 'কবিরহাট'),
	(302, 50, 'Bagaichhari ', 'বাগাইছড়ি'),
	(303, 50, 'Barkal ', 'বরকল'),
	(304, 50, 'Kawkhali (Betbunia) ', 'কাওখালি (বেতবুনিয়া)'),
	(305, 50, 'Belaichhari ', 'বেলাইছড়ি'),
	(306, 50, 'Kaptai ', 'কাপ্তাই'),
	(307, 50, 'Juraichhari ', 'জুরাইছড়ি'),
	(308, 50, 'Langadu ', 'লাঙ্গাদু'),
	(309, 50, 'Naniyachar ', 'নানিয়াচর'),
	(310, 50, 'Rajasthali ', 'রাজাস্থালি'),
	(311, 50, 'Rangamati Sadar ', 'রাঙামাটি সদর'),
	(312, 1, 'Adabor', 'আদাবর'),
	(313, 1, 'Agargaon', 'আগারগাঁও'),
	(314, 1, 'Badda', 'বড্ডা'),
	(315, 1, 'Biman Bandar', 'বিমান বন্দর'),
	(316, 1, 'Bangshal', 'বংশাল'),
	(317, 1, 'Cantonment', 'ক্যান্টনমেন্ট '),
	(318, 1, 'Chawkbazar Model', 'চকবাজার মডেল'),
	(319, 1, 'Dakshinkhan', 'দক্ষিনখান'),
	(320, 1, 'Darus Salam', 'দারুস সালাম'),
	(321, 1, 'Dhanmondi', 'ধানমন্ডি'),
	(322, 1, 'Demra', 'ডেমরা'),
	(323, 1, 'Kotwali', 'কোতওয়ালি'),
	(324, 1, 'Gendaria', 'গেণ্ডারিয়া'),
	(325, 1, 'Gulshan', 'গুলশান'),
	(326, 1, 'Hazaribagh', 'হাজারিবাগ'),
	(327, 1, 'Jatrabari', 'যাত্রাবাড়ী'),
	(328, 1, 'Kadamtali', 'কদমতলী'),
	(329, 1, 'Kafrul', 'কাফরুল'),
	(330, 1, 'Kalabagan', 'কলাবাগান'),
	(331, 1, 'Kamringir Char', 'কামরাঙ্গির চর'),
	(332, 1, 'Khilkhet', 'খিলখেত'),
	(333, 1, 'Khilgaon', 'খিলগাঁ'),
	(334, 1, 'Lalbagh', 'লালবাঘ'),
	(335, 1, 'Mirpur', 'মিরপুর'),
	(336, 1, 'Mohammadpur', 'মোহাম্মদপুর'),
	(337, 1, 'Motijheel', 'মতিঝিল'),
	(338, 1, 'New Market', 'নিউ মার্কেট'),
	(339, 1, 'Pallabi', 'পল্লবী'),
	(340, 1, 'Paltan', 'পল্টন'),
	(341, 1, 'Ramna', 'রমনা'),
	(342, 1, 'Rampura', 'রামপুরা'),
	(343, 1, 'Sabujbagh', 'সবুজবাগ'),
	(344, 1, 'Shah Ali', 'শাহ আলী'),
	(345, 1, 'Shahbagh', 'শাহবাগ'),
	(346, 1, 'ShereBangla Nagor', 'শেরেবাংলা নগর'),
	(347, 1, 'Shyampur', 'শ্যামপুর'),
	(348, 1, 'Sutrapur', 'সূত্রাপুর'),
	(349, 1, 'Tejgaon', 'তেজগাঁও'),
	(350, 1, 'Tejgaon Industrial Area', 'তেজগাঁও ইনডাস্টারিয়াল এরিয়া'),
	(351, 1, 'Turag', 'তুরাগ'),
	(352, 1, 'Uttar Khan', 'উত্তর খান'),
	(353, 1, 'Uttara', 'উত্তরা'),
	(354, 3, 'Gazipur Sadar ', 'গাজীপুর সদর'),
	(355, 3, 'Kaliakair ', 'কালিহাতী'),
	(356, 3, 'Kaliganj ', 'কালিগঞ্জ'),
	(357, 3, 'Kapasia ', 'কাপাসিয়া'),
	(358, 4, 'Sreepur ', 'শ্রীপুর'),
	(359, 4, 'Gopalganj Sadar ', 'গোপালগঞ্জ সদর'),
	(360, 4, 'Kashiani ', 'কাশিয়ানি'),
	(361, 4, 'Kotalipara ', 'কোটালিপাড়া'),
	(362, 4, 'Muksudpur ', 'মোকসুদপুর'),
	(363, 4, 'Tungipara ', 'টঙ্গিপাড়া'),
	(364, 6, 'Austagram ', 'অষ্টগ্রাম'),
	(365, 6, 'Bajitpur ', 'বাজিতপুর'),
	(366, 6, 'Bhairab ', 'ভৈরব'),
	(367, 6, 'Hossainpur ', 'হোসাইনপুর'),
	(368, 6, 'Itna ', 'ইত্না'),
	(369, 6, 'Karimganj ', 'করিমগঞ্জ'),
	(370, 6, 'Katiadi ', 'কাতিয়াদি'),
	(371, 6, 'Kishoreganj Sadar ', 'কিশোরগঞ্জ সদর'),
	(372, 6, 'Kuliarchar ', 'কুলিয়ারচর'),
	(373, 6, 'Mithamain ', 'মিথামাইন'),
	(374, 6, 'Nikli ', 'নিক্লি'),
	(375, 6, 'Pakundia ', 'পাকুন্দিয়া'),
	(376, 6, 'Tarail ', 'তাড়াইল'),
	(377, 7, 'Rajoir ', 'রাজইর'),
	(378, 7, 'Madaripur Sadar ', 'মাদারীপুর সদর'),
	(379, 7, 'Kalkini ', 'কালকিনি'),
	(380, 7, 'Shibchar ', 'শিবচর'),
	(381, 8, 'Daulatpur ', 'দৌলতপুর'),
	(382, 8, 'Ghior ', 'গইর'),
	(383, 8, 'Harirampur ', 'হরিরামপুর'),
	(384, 8, 'Manikgonj Sadar ', 'মানিকগঞ্জ সদর'),
	(385, 8, 'Saturia ', 'সাটুরিয়া'),
	(386, 8, 'Shivalaya ', 'শিভালয়'),
	(387, 8, 'Singair ', 'সিঙ্গাইর'),
	(388, 9, 'Gazaria ', 'গজারিয়া'),
	(389, 9, 'Lohajang ', 'লহজং'),
	(390, 9, 'Munshiganj Sadar ', 'মুন্সিগঞ্জ'),
	(391, 9, 'Sirajdikhan ', 'সিরাজদিখান'),
	(392, 9, 'Sreenagar ', 'শ্রীনগর'),
	(393, 9, 'Tongibari ', 'টঙ্গিবাড়ী'),
	(394, 11, 'Araihazar ', 'আড়াইহাজার'),
	(395, 11, 'Bandar ', 'বন্দর'),
	(396, 11, 'Narayanganj Sadar ', 'নারায়ণগঞ্জ সদর'),
	(397, 11, 'Rupganj ', 'রূপগঞ্জ'),
	(398, 11, 'Sonargaon ', 'সোনারগাঁ'),
	(399, 14, 'Baliakandi ', 'বালিয়াকান্দি'),
	(400, 14, 'Goalandaghat ', 'গোয়ালান্দাঘাট'),
	(401, 14, 'Pangsha ', 'পানংশা'),
	(402, 14, 'Rajbari Sadar ', 'রাজবাড়ী সদর'),
	(403, 14, 'Kalukhali ', 'কালুখালি'),
	(404, 15, 'Bhedarganj ', 'ভেদরগঞ্জ'),
	(405, 15, 'Damudya ', 'দামুদা'),
	(406, 15, 'Gosairhat ', 'গোসাইরহাট'),
	(407, 15, 'Naria ', 'নারিয়া'),
	(408, 15, 'Shariatpur Sadar ', 'শরীয়তপুর সদর'),
	(409, 15, 'Zajira ', 'যাজিরা'),
	(410, 15, 'Shakhipur ', 'সখিপুর '),
	(411, 2, 'Alfadanga ', 'আলফাডাঙ্গা'),
	(412, 2, 'Bhanga ', 'ভাঙ্গা'),
	(413, 2, 'Boalmari ', 'বোয়ালমারী'),
	(414, 2, 'Charbhadrasan ', 'চরভাদ্রাসান'),
	(415, 2, 'Faridpur Sadar ', 'ফরিদপুর'),
	(416, 2, 'Madhukhali ', 'মধুখালি'),
	(417, 2, 'Nagarkanda ', 'নগরকান্দা'),
	(418, 2, 'Sadarpur ', 'সদরপুর'),
	(419, 2, 'Saltha ', 'সলতা'),
	(420, 17, 'Gopalpur ', 'গোপালপুর'),
	(421, 17, 'Basail ', 'বাসাইল'),
	(422, 17, 'Bhuapur ', 'ভূয়াপুর'),
	(423, 17, 'Delduar ', 'দেলদুয়ার'),
	(424, 17, 'Ghatail ', 'ঘাটাইল'),
	(425, 17, 'Kalihati ', 'কালিহাতি'),
	(426, 17, 'Madhupur ', 'মধুপুর'),
	(427, 17, 'Mirzapur ', 'মির্জাপুর'),
	(428, 17, 'Nagarpur ', 'নাগরপুর'),
	(429, 17, 'Sakhipur ', 'সখিপুর '),
	(430, 17, 'Dhanbari ', 'ধনবাড়ি'),
	(431, 17, 'Tangail Sadar ', 'টাংগাইল সদর'),
	(432, 12, 'Narsingdi Sadar ', 'নরসিংদী সদর'),
	(433, 12, 'Belabo ', 'বেলাবো'),
	(434, 12, 'Monohardi ', 'মনোহরদি'),
	(435, 12, 'Palash ', 'পলাশ'),
	(436, 12, 'Raipura ', 'রায়পুরা'),
	(437, 12, 'Shibpur ', 'শিবপুর'),
	(438, 55, 'Bagerhat Sadar ', 'বাগেরহাট সদর'),
	(439, 55, 'Chitalmari ', 'চিতলমারি'),
	(440, 55, 'Fakirhat ', 'ফকিরহাট'),
	(441, 55, 'Kachua ', 'কচুয়া'),
	(442, 55, 'Mollahat ', 'মোল্লাহাট'),
	(443, 55, 'Mongla ', 'মংলা'),
	(444, 55, 'Morrelganj ', 'মরেলগঞ্জ'),
	(445, 55, 'Rampal ', 'রামপাল'),
	(446, 55, 'Sarankhola ', 'সরনখোলা'),
	(447, 56, 'Alamdanga ', 'আলমডাঙ্গা'),
	(448, 56, 'Chuadanga Sadar ', 'চুয়াডাঙ্গা সদর'),
	(449, 56, 'Damurhuda ', 'দামুরহুদা'),
	(450, 56, 'Jibannagar ', 'জীবননগর'),
	(451, 57, 'Abhaynagar ', 'অভয়নগর'),
	(452, 57, 'Bagherpara ', 'বাঘেরপাড়া'),
	(453, 57, 'Chaugachha ', 'চৌগাছা'),
	(454, 57, 'Jhikargachha ', 'জিকারগাছা'),
	(455, 57, 'Keshabpur ', 'কেশাবপুর'),
	(456, 57, 'Jessore Sadar ', 'যশোর সদর'),
	(457, 57, 'Manirampur ', 'মনিরামপুর'),
	(458, 57, 'Sharsha ', 'সারশা'),
	(459, 58, 'Harinakunda ', 'হারিনাকুন্দ'),
	(460, 58, 'Jhenaidah Sadar ', 'ঝিনাইদহ সদর'),
	(461, 58, 'Kaliganj ', 'কালিগঞ্জ'),
	(462, 58, 'Kotchandpur ', 'কোটচাঁদপুর'),
	(463, 58, 'Maheshpur ', 'মহেশপুর'),
	(464, 58, 'Shailkupa ', 'শৈলকূপা'),
	(465, 59, 'Batiaghata ', 'বাতিয়াঘাতা'),
	(466, 59, 'Dacope ', 'দাকপে'),
	(467, 59, 'Dumuria ', 'ডুমুরিয়া'),
	(468, 59, 'Dighalia ', 'দীঘলিয়া'),
	(469, 59, 'Koyra ', 'কয়রা'),
	(470, 59, 'Paikgachha ', 'পাইকগাছা'),
	(471, 59, 'Phultala ', 'ফুলতলা'),
	(472, 59, 'Rupsha ', 'রূপসা'),
	(473, 59, 'Terokhada ', 'তেরখাদা'),
	(474, 59, 'Daulatpur Thana', 'দৌলতপুর থানা'),
	(475, 59, 'Khalishpur Thana', 'খালিসপুর থানা'),
	(476, 59, 'Khan Jahan Ali Thana', 'খান জাহান আলী থানা'),
	(477, 59, 'Kotwali Thana', 'কোতোয়ালি থানা'),
	(478, 59, 'Sonadanga Thana', 'সোনাডাঙা থানা'),
	(479, 59, 'Harintana Thana', 'হারিনটানা থানা'),
	(480, 60, 'Bheramara ', 'ভেরামারা'),
	(481, 60, 'Daulatpur ', 'দৌলতপুর'),
	(482, 60, 'Khoksa ', 'খোকসা'),
	(483, 60, 'Kumarkhali ', 'কুমারখালি'),
	(484, 60, 'Kushtia Sadar ', 'কুষ্টিয়া সদর'),
	(485, 60, 'Mirpur ', 'মিরপুর'),
	(486, 61, 'Magura Sadar ', 'মাগুরা সদর'),
	(487, 61, 'Mohammadpur ', 'মোহাম্মদপুর'),
	(488, 61, 'Shalikha ', 'শালিখা'),
	(489, 61, 'Sreepur ', 'শ্রীপুর'),
	(490, 62, 'Gangni ', 'গাংনি'),
	(491, 62, 'Meherpur Sadar ', 'মেহেরপুর সদর'),
	(492, 62, 'Mujibnagar ', 'মুজিবনগর'),
	(493, 63, 'Kalia ', 'কালিয়া'),
	(494, 63, 'Lohagara ', 'লোহাগাড়া'),
	(495, 63, 'Narail Sadar ', 'নরাইল সদর'),
	(496, 63, 'Naragati Thana', 'নারাগাতি থানা'),
	(497, 64, 'Assasuni ', 'আশাশুনি'),
	(498, 64, 'Debhata ', 'দেবহাটা'),
	(499, 64, 'Kalaroa ', 'কালারোয়া'),
	(500, 64, 'Kaliganj ', 'কালীগঞ্জ'),
	(501, 64, 'Satkhira Sadar ', 'সাতক্ষীরা সদর'),
	(502, 64, 'Shyamnagar ', 'শ্যামনগর'),
	(503, 64, 'Tala ', 'তালা'),
	(504, 51, 'Ajmiriganj ', 'আজমিরিগঞ্জ'),
	(505, 51, 'Bahubal ', 'বাহুবল'),
	(506, 51, 'Baniyachong ', 'বানিয়াচং'),
	(507, 51, 'Chunarughat ', 'চুনারুঘাত'),
	(508, 51, 'Habiganj Sadar ', 'হবিগঞ্জ সদর'),
	(509, 51, 'Lakhai ', 'লক্ষ্মী'),
	(510, 51, 'Madhabpur ', 'মাধবপুর'),
	(511, 51, 'Nabiganj ', 'নবিগঞ্জ'),
	(512, 52, 'Barlekha ', 'বারলেখা'),
	(513, 52, 'Kamalganj ', 'কামালগঞ্জ'),
	(514, 52, 'Kulaura ', 'কুলাউরা'),
	(515, 52, 'Moulvibazar Sadar ', 'মৈালভীবাজার সদর'),
	(516, 52, 'Rajnagar ', 'রাজনগর'),
	(517, 52, 'Sreemangal ', 'শ্রীমঙ্গল'),
	(518, 52, 'Juri ', 'জুরী '),
	(519, 53, 'Bishwamvarpur ', 'বিশ্বভারামপুর'),
	(520, 53, 'Chhatak ', 'ছতাক'),
	(521, 53, 'Derai ', 'দেরাই'),
	(522, 53, 'Dharamapasha ', 'ধরামপাশা'),
	(523, 53, 'Dowarabazar ', 'দওরাবাজার'),
	(524, 53, 'Jagannathpur ', 'জগন্নাথপুর'),
	(525, 53, 'Jamalganj ', 'জামালগঞ্জ'),
	(526, 53, 'Sullah ', 'সুল্লাহ'),
	(527, 53, 'Sunamganj Sadar ', 'সুনামগঞ্জ সদর'),
	(528, 53, 'Tahirpur ', 'তাহিরপুর'),
	(529, 53, 'Dakshin Sunamganj ', 'দক্ষিণ সুনামগঞ্জ'),
	(530, 54, 'Balaganj ', 'বালাগঞ্জ'),
	(531, 54, 'Beanibazar ', 'বেয়ানিবাজার'),
	(532, 54, 'Bishwanath ', 'বিশ্বনাথ'),
	(533, 54, 'Companigonj ', 'কোম্পানিগঞ্জ'),
	(534, 54, 'Fenchuganj ', 'ফেঞ্চুগঞ্জ'),
	(535, 54, 'Golapganj ', 'গোলাপগঞ্জ'),
	(536, 54, 'Gowainghat ', 'গোইনঘাট'),
	(537, 54, 'Jaintiapur ', 'জয়ন্তীপুর'),
	(538, 54, 'Kanaighat ', 'কানাইঘাট'),
	(539, 54, 'Sylhet Sadar ', 'সিলেট সদর'),
	(540, 54, 'Zakiganj ', 'জাকিগঞ্জ'),
	(541, 54, 'South Surma ', 'দক্ষিন সুরমা'),
	(542, 54, 'Osmani Nagar ', 'ওসমানী নগর');
/*!40000 ALTER TABLE `upazilas` ENABLE KEYS */;

-- Dumping structure for table styletex.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(15) NOT NULL,
  `username` varchar(100) NOT NULL,
  `randomcode` bigint(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` bigint(100) unsigned DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` bigint(100) unsigned NOT NULL,
  `last_login` bigint(100) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `full_name_bn` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `full_name_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `father_name_bn` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `father_name_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mother_name_bn` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `mother_name_en` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` int(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=201638133 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.users: ~0 rows (approximately)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `ip_address`, `username`, `randomcode`, `password`, `salt`, `email`, `activation_code`, `forgotten_password_code`, `forgotten_password_time`, `remember_code`, `created_on`, `last_login`, `active`, `first_name`, `last_name`, `full_name_bn`, `full_name_en`, `father_name_bn`, `father_name_en`, `mother_name_bn`, `mother_name_en`, `company`, `phone`, `address`) VALUES
	(1357, '', 'administrator', 0, '$2y$08$FRCobjRKCeM/zqs0wSuihex4ZGNmj63VGUeQUbORfqGltN..22rCO', NULL, 'skydotint@gmail.com', NULL, NULL, NULL, 'mmvCReNqpAiaYM91DFZ5Ze', 1268889823, 1475040972, 1, 'Tritiyo', 'Limited', 'Admin', 'Administrator', 'Badruzzaman Khan', 'Badruzzaman Khan', 'Shahinazzaman Khan', 'Shahinazzaman Khan', 'Tritiyo Limited', '01821660066', 0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table styletex.users_connections
CREATE TABLE IF NOT EXISTS `users_connections` (
  `session_id` bigint(100) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(100) NOT NULL COMMENT 'refer to your user id on your application',
  `hybridauth_session` text NOT NULL COMMENT 'will contain the hybridauth session data',
  `provider` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.users_connections: ~0 rows (approximately)
DELETE FROM `users_connections`;
/*!40000 ALTER TABLE `users_connections` DISABLE KEYS */;
INSERT INTO `users_connections` (`session_id`, `user_id`, `hybridauth_session`, `provider`, `updated_at`) VALUES
	(17, 1357, 'a:2:{s:35:"hauth_session.facebook.is_logged_in";s:4:"i:1;";s:41:"hauth_session.facebook.token.access_token";s:192:"s:183:"EAAKK2eMNIVgBAD9hujJw8QnNCiJ2lLY5GY2eQSFS1jeXfmC0MlNKpGNItGOWd2RlbAMnReLm7Ru1gSUg05SCyLfoS4EYgRlFquNxwnKec3xYQp1QuGimbsZCpSU5wZBIH2YBZBXib8FYbHjaxnY0ffX8oPZAe4NZCt94NOe1AFd12YYS2fZBua";";}', 'Facebook', '0000-00-00 00:00:00');
/*!40000 ALTER TABLE `users_connections` ENABLE KEYS */;

-- Dumping structure for table styletex.users_groups
CREATE TABLE IF NOT EXISTS `users_groups` (
  `id` bigint(100) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(100) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uc_users_groups` (`user_id`,`group_id`),
  KEY `fk_users_groups_users1_idx` (`user_id`),
  KEY `fk_users_groups_groups1_idx` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.users_groups: ~0 rows (approximately)
DELETE FROM `users_groups`;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
INSERT INTO `users_groups` (`id`, `user_id`, `group_id`) VALUES
	(2, 1357, 1);
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;

-- Dumping structure for table styletex.u_basicinfos
CREATE TABLE IF NOT EXISTS `u_basicinfos` (
  `InfosId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL,
  `UniqueNumber` bigint(100) NOT NULL,
  `Gender` bigint(1) NOT NULL,
  `Religion` varchar(50) NOT NULL,
  `Address` varchar(60) DEFAULT NULL,
  `Upazila` varchar(60) DEFAULT NULL,
  `District` varchar(100) DEFAULT NULL,
  `DateOfBirth` bigint(100) DEFAULT NULL,
  `JoinDate` bigint(100) DEFAULT NULL,
  `BloodGroup` varchar(50) DEFAULT NULL,
  `CountryId` bigint(100) NOT NULL,
  `Biography` text,
  `NewsFeedKeywords` text,
  `UserPhoto` text,
  `UserVideo` text,
  `MaritalStatus` bigint(100) DEFAULT NULL,
  `YearlyIncome` bigint(100) DEFAULT NULL,
  `NewportalURL` varchar(60) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `EnrollmentStatus` bigint(100) DEFAULT NULL,
  PRIMARY KEY (`InfosId`),
  UNIQUE KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.u_basicinfos: ~0 rows (approximately)
DELETE FROM `u_basicinfos`;
/*!40000 ALTER TABLE `u_basicinfos` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_basicinfos` ENABLE KEYS */;

-- Dumping structure for table styletex.u_businesses
CREATE TABLE IF NOT EXISTS `u_businesses` (
  `BusinessId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL DEFAULT '0',
  `CateogryId` bigint(100) NOT NULL,
  `OrganizationName` varchar(150) NOT NULL,
  `OrganizationURL` varchar(150) NOT NULL,
  `OrganizationCity` varchar(150) NOT NULL,
  `StartDate` bigint(20) NOT NULL,
  `Services` varchar(150) NOT NULL,
  `Notes` varchar(150) NOT NULL,
  PRIMARY KEY (`BusinessId`),
  KEY `UserId` (`UserId`),
  KEY `CateogryId` (`CateogryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.u_businesses: ~0 rows (approximately)
DELETE FROM `u_businesses`;
/*!40000 ALTER TABLE `u_businesses` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_businesses` ENABLE KEYS */;

-- Dumping structure for table styletex.u_educationhistory
CREATE TABLE IF NOT EXISTS `u_educationhistory` (
  `EducationID` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) DEFAULT NULL,
  `InstituteName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `Degree` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `Concentrations` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `StartDate` bigint(100) DEFAULT NULL,
  `EndDate` bigint(100) DEFAULT NULL,
  `GPA` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `PSession` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `PassingYear` int(11) DEFAULT NULL,
  `Board` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `IsGraduated` bigint(1) DEFAULT NULL,
  PRIMARY KEY (`EducationID`),
  KEY `education_userid` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.u_educationhistory: ~0 rows (approximately)
DELETE FROM `u_educationhistory`;
/*!40000 ALTER TABLE `u_educationhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_educationhistory` ENABLE KEYS */;

-- Dumping structure for table styletex.u_images
CREATE TABLE IF NOT EXISTS `u_images` (
  `ImageId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL,
  `ImageName` varchar(100) NOT NULL,
  PRIMARY KEY (`ImageId`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.u_images: ~0 rows (approximately)
DELETE FROM `u_images`;
/*!40000 ALTER TABLE `u_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_images` ENABLE KEYS */;

-- Dumping structure for table styletex.u_std_information
CREATE TABLE IF NOT EXISTS `u_std_information` (
  `StudentInfoId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL,
  `Class` bigint(100) NOT NULL,
  `ClassRoll` bigint(100) NOT NULL,
  `Section` bigint(100) NOT NULL,
  `GroupId` bigint(100) NOT NULL,
  `Department` bigint(100) NOT NULL,
  `isActive` int(11) NOT NULL,
  PRIMARY KEY (`StudentInfoId`),
  UNIQUE KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table styletex.u_std_information: ~0 rows (approximately)
DELETE FROM `u_std_information`;
/*!40000 ALTER TABLE `u_std_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_std_information` ENABLE KEYS */;

-- Dumping structure for table styletex.u_tchstaff_information
CREATE TABLE IF NOT EXISTS `u_tchstaff_information` (
  `TchStaffId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL,
  `Designation` varchar(255) NOT NULL,
  `SalaryScale` varchar(255) NOT NULL,
  `IndexNumber` varchar(255) DEFAULT NULL,
  `BankAccountNumber` varchar(255) DEFAULT NULL,
  `BankName` varchar(255) DEFAULT NULL,
  `BankBranchName` varchar(255) DEFAULT NULL,
  `DateAttended` varchar(255) DEFAULT NULL,
  `isActive` int(11) NOT NULL,
  PRIMARY KEY (`TchStaffId`),
  UNIQUE KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table styletex.u_tchstaff_information: ~0 rows (approximately)
DELETE FROM `u_tchstaff_information`;
/*!40000 ALTER TABLE `u_tchstaff_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_tchstaff_information` ENABLE KEYS */;

-- Dumping structure for table styletex.u_workhistory
CREATE TABLE IF NOT EXISTS `u_workhistory` (
  `WorkId` bigint(100) NOT NULL AUTO_INCREMENT,
  `UserId` bigint(100) NOT NULL,
  `Organization` varchar(150) NOT NULL,
  `Position` varchar(100) NOT NULL,
  `StartDate` bigint(20) NOT NULL,
  `EndDate` bigint(20) NOT NULL,
  `Responsibilities` text NOT NULL,
  PRIMARY KEY (`WorkId`),
  KEY `UserId` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.u_workhistory: ~0 rows (approximately)
DELETE FROM `u_workhistory`;
/*!40000 ALTER TABLE `u_workhistory` DISABLE KEYS */;
/*!40000 ALTER TABLE `u_workhistory` ENABLE KEYS */;

-- Dumping structure for table styletex.webpages
CREATE TABLE IF NOT EXISTS `webpages` (
  `PageId` bigint(100) NOT NULL AUTO_INCREMENT,
  `PageTitle` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PageRoute` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SpecificRoutes` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `ParentId` int(11) DEFAULT NULL,
  `PageOrder` int(11) NOT NULL,
  `Description` longtext COLLATE utf8_unicode_ci,
  `PublishDate` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `isSpecial` int(11) DEFAULT NULL,
  `isMegaMenu` int(11) DEFAULT NULL,
  `isInMenu` int(11) DEFAULT NULL,
  `isSecondary` int(11) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  PRIMARY KEY (`PageId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- Dumping data for table styletex.webpages: ~0 rows (approximately)
DELETE FROM `webpages`;
/*!40000 ALTER TABLE `webpages` DISABLE KEYS */;
INSERT INTO `webpages` (`PageId`, `PageTitle`, `PageRoute`, `SpecificRoutes`, `ParentId`, `PageOrder`, `Description`, `PublishDate`, `isSpecial`, `isMegaMenu`, `isInMenu`, `isSecondary`, `isActive`) VALUES
	(1, 'About Us', 'about-us', NULL, 0, 0, '<div class="row">\n<div class="col-lg-3 col-md-3 col-sm-4">\n<div class="about_inner">\n<div id="about_slider">\n<div class="item"><img alt="" class="img-responsive img-thumbnail" src="http://aponstore.com/regalf/uploads/file/2016-08/999.png" /></div>\n\n<div class="item"><img alt="" class="img-responsive img-thumbnail" src="http://aponstore.com/regalf/uploads/file/2016-08/1000.png" /></div>\n\n<div class="item"><img alt="" class="img-responsive img-thumbnail" src="http://aponstore.com/regalf/uploads/file/2016-08/1004.png" /></div>\n\n<div class="item"><img alt="" class="img-responsive img-thumbnail" src="http://aponstore.com/regalf/uploads/file/2016-08/1001.png" /></div>\n\n<div class="item"><img alt="" class="img-responsive img-thumbnail" src="http://aponstore.com/regalf/uploads/file/2016-08/1005.png" /></div>\n</div>\n</div>\n</div>\n\n<div class="col-lg-9 col-md-9 col-md-9">\n<div class="about_content">\n<p><strong>BBML</strong> is a sister concern of <strong>RFL</strong>. Among a lot of products, <strong>BBML</strong> has added<strong> REGAL</strong> Furniture in its product category. Regal as a brand already attracted the customer&#39;s attention. Regal is a very sophisticated brand at present. We face huge demand every month. But Regal brand established in 2012, in this short period of time Regal has been a popular brand to the mass.</p>\n<u><strong>Some features of our products.</strong></u><br />\n&nbsp;\n<p>- Completely Knockdown (CKD) Furniture<br />\n- Modern and Slim Look<br />\n- Durable &amp; User-Friendly<br />\n- Furniture with Groove Design<br />\n- 100% Termite Proof<br />\n- 1 Year Service Warranty</p>\n\n<p><u><strong>Factory Details:</strong></u></p>\n\n<p>We have three individual furniture manufacturing industries in Bangladesh. One is situated in Rupgonj, Narayangonj which area is approximate 2 lacs square feet and another two factories are situated in Gawsia, Narayangonj which area is approximate 1.25 lacs square feet.</p>\n\n<p>Selection is done based on merits and qualifications. Everyone has got clear-cut job descriptions and got equal opportunity to contribute and share their ideas and thoughts to grow in the company</p>\n\n<p>Employees are rewarded with salary, commission and incentives as per standards. Workers and staffs are provided with free and subsidized food from the factory and office cafeterias.</p>\n\n<p><u><strong>Factory Environment: </strong></u></p>\n\n<p>We are very conscious about Fire extinguishing, we have strong fire extinguishing unit in our factory arena. Employees&rsquo; health and hygiene are taken out most care with full-time adequate numbers of Doctors, nurses and other medical supports.</p>\n\n<p>We ensure clean and well air existing environment in our factory which is one of the biggest priority of us. To develop the human skills, both on the jobs and off the jobs trainings are constantly being provided to all the workers and staffs.</p>\n</div>\n</div>\n</div>\n', '1467081339', 0, 0, 0, 1, 1);
/*!40000 ALTER TABLE `webpages` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
