
SET NAMES utf8mb4;

-- ----------------------------
--  Table structure for `eventVolunteers`
-- ----------------------------
DROP TABLE IF EXISTS `eventVolunteers`;
CREATE TABLE `eventVolunteers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `eventId` int(11) NOT NULL,
  `volunteerId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `eventId` (`eventId`),
  KEY `volunteerId` (`volunteerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `events`
-- ----------------------------
DROP TABLE IF EXISTS `events`;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `evenName` varchar(255) DEFAULT NULL,
  `eventHostID` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eventHostID` (`eventHostID`),
  CONSTRAINT `eventId_eventVolId` FOREIGN KEY (`id`) REFERENCES `eventVolunteers` (`eventId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `volunteers`
-- ----------------------------
DROP TABLE IF EXISTS `volunteers`;
CREATE TABLE `volunteers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `photoURL` varchar(255) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `volId_eventHostId` FOREIGN KEY (`id`) REFERENCES `events` (`eventHostID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `volId_eventVolId` FOREIGN KEY (`id`) REFERENCES `eventVolunteers` (`volunteerId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

