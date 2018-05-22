/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50722
 Source Host           : localhost
 Source Database       : vol_match

 Target Server Type    : MySQL
 Target Server Version : 50722
 File Encoding         : utf-8

 Date: 05/21/2018 21:34:35 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `MemberOpportunity`
-- ----------------------------
DROP TABLE IF EXISTS `MemberOpportunity`;
CREATE TABLE `MemberOpportunity` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MemberId` int(11) NOT NULL,
  `OpportunityId` int(11) NOT NULL,
  PRIMARY KEY (`MemberId`,`OpportunityId`),
  KEY `OpportunityId` (`OpportunityId`),
  CONSTRAINT `memberopportunity_ibfk_1` FOREIGN KEY (`MemberId`) REFERENCES `Members` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `memberopportunity_ibfk_2` FOREIGN KEY (`OpportunityId`) REFERENCES `Opportunities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `MemberOpportunity`
-- ----------------------------
BEGIN;
INSERT INTO `MemberOpportunity` VALUES ('2018-03-10 00:00:00', '2018-03-10 00:00:00', '1', '1'), ('2018-03-10 00:00:00', '2018-03-10 00:00:00', '2', '1'), ('2018-03-10 00:00:00', '2018-03-10 00:00:00', '2', '2');
COMMIT;

-- ----------------------------
--  Table structure for `Members`
-- ----------------------------
DROP TABLE IF EXISTS `Members`;
CREATE TABLE `Members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  `phone` bigint(20) NOT NULL,
  `photoUrl` varchar(255) DEFAULT NULL,
  `frequency` varchar(255) DEFAULT NULL,
  `inOrOut` varchar(255) DEFAULT NULL,
  `cooking` tinyint(1) DEFAULT '0',
  `gardening` tinyint(1) DEFAULT '0',
  `painting` tinyint(1) DEFAULT '0',
  `carpentry` tinyint(1) DEFAULT '0',
  `plumbing` tinyint(1) DEFAULT '0',
  `electrical` tinyint(1) DEFAULT '0',
  `publicRelations` tinyint(1) DEFAULT '0',
  `marketing` tinyint(1) DEFAULT '0',
  `fundRaising` tinyint(1) DEFAULT '0',
  `programming` tinyint(1) DEFAULT '0',
  `sales` tinyint(1) DEFAULT '0',
  `teaching` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `Members`
-- ----------------------------
BEGIN;
INSERT INTO `Members` VALUES ('1', 'd@irk.com', '$2a$08$lFZgi5tM4Wm3JnZ5d1esneyHP4x2Bm7Hm./WB6ACCCS27ZsqQmWT.', 'Dirk', 'Wiggins', null, null, null, null, '6023273802', 'http://google.com', null, null, '0', '0', '0', '0', '0', '0', '1', '0', '1', '0', '0', '0', '2018-05-17 15:20:10', '2018-05-17 15:20:10'), ('2', 'dirk@irk.com', '$2a$08$8oQxJoQo0XLWAgXDXux0UuhC9IUf4QszhoEDxkiaa7CJzv4yhcAV2', 'Dirk', 'Wiggins', null, null, null, null, '6023273802', 'http://google.com', 'Once', 'Inside', '1', '0', '0', '1', '0', '0', '1', '0', '0', '1', '0', '0', '2018-05-17 22:49:05', '2018-05-17 22:49:05'), ('3', 'dirk@echo19.com', '$2a$08$dfjSIsJ0y3lWAlocQNZb5ewClm/dg073JrQgbw.OzMHBxYlocse1y', 'Dirk', 'Wiggins', null, null, null, null, '6023273802', 'http://google.com', null, 'Outside', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-05-19 17:32:14', '2018-05-19 17:32:14'), ('4', 'dirk@codeforprogress.org', '$2a$08$LzvATWwQ9NTo56neqcDdo.A4IM0om03sG/yNGtghITi.wQ5qBKwy.', 'Dirk', 'Wiggins', null, null, null, null, '6023273802', 'http://google.com', null, 'Inside', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-05-21 14:00:21', '2018-05-21 14:00:21'), ('5', 'dirk@drippy.com', '$2a$08$RYJD14m0z8MBNuqcTSUDX.VRCm4o/dFEl.r1jpjLuOQ0q0lUgEigC', 'Dirk', 'Wiggins', null, null, null, null, '6023273802', 'http://google.com', null, 'Inside', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-05-21 23:47:11', '2018-05-21 23:47:11');
COMMIT;

-- ----------------------------
--  Table structure for `Opportunities`
-- ----------------------------
DROP TABLE IF EXISTS `Opportunities`;
CREATE TABLE `Opportunities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `organization_name` varchar(255) NOT NULL,
  `opportunity_name` varchar(255) NOT NULL,
  `organization_phone` bigint(20) NOT NULL,
  `organization_eMail` varchar(255) DEFAULT NULL,
  `opportunity_photo_Url` varchar(255) NOT NULL,
  `organization_address` varchar(255) NOT NULL,
  `organization_city` varchar(100) NOT NULL,
  `organization_state` varchar(2) NOT NULL,
  `organization_zip` varchar(5) NOT NULL,
  `organization_frequency` varchar(255) NOT NULL,
  `opportunity_date` varchar(255) NOT NULL,
  `opportunity_frequency` varchar(255) NOT NULL,
  `opportunity_start_time` varchar(255) NOT NULL,
  `opportunity_end_time` varchar(255) NOT NULL,
  `opportunity_inOrOut` varchar(255) NOT NULL,
  `volunteers_needed` varchar(255) NOT NULL,
  `cooking` tinyint(1) DEFAULT '0',
  `gardening` tinyint(1) DEFAULT '0',
  `painting` tinyint(1) DEFAULT '0',
  `carpentry` tinyint(1) DEFAULT '0',
  `plumbing` tinyint(1) DEFAULT '0',
  `electrical` tinyint(1) DEFAULT '0',
  `publicRelations` tinyint(1) DEFAULT '0',
  `marketing` tinyint(1) DEFAULT '0',
  `fundRaising` tinyint(1) DEFAULT '0',
  `programming` tinyint(1) DEFAULT '0',
  `sales` tinyint(1) DEFAULT '0',
  `teaching` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `Opportunities`
-- ----------------------------
BEGIN;
INSERT INTO `Opportunities` VALUES ('1', 'w', 'ASPCA', 'Dog Walking', '4', 'person@aspca.org', 'asd', '1221 Pine St', 'Philadelphia', 'PA', '19147', 'daily', 'asd', 'asd', 'asd', 'ad', 'asd', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-03-10 00:00:00', '2018-03-10 00:00:00'), ('2', 'w', 'Community Garden', 'Gardening', '4', 'person@mycommunitygarden.org', 'asd', '1221 Pine St', 'Philadelphia', 'PA', '19147', 'daily', 'asd', 'asd', 'asd', 'ad', 'asd', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '2018-03-10 00:00:00', '2018-03-10 00:00:00');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
