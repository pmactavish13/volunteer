
CREATE DATABASE volunteer_db;

USE DATABASE volunteer_db;
-- ----------------------------
--  Table structure for linked members
-- ----------------------------

-- ----------------------------
--  Table structure for linked MemberOpportunity
-- ----------------------------
DROP TABLE IF EXISTS `MemberOpportunity`;
-- CREATE TABLE `eventVolunteers` (
--   `MemberId` int(11) NOT NULL AUTO_INCREMENT,
--   `OpportunityId` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
-- ) 

-- ----------------------------
--  Table structure for `opportunities`
-- ----------------------------
DROP TABLE IF EXISTS `opportunities`;
CREATE TABLE `opportunities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  'email' varchar(255) DEFAULT NULL,
  `organization_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip` varchar(5) DEFAULT NULL,
  'inOrOut' varchar(100) DEFAULT NULL,
  'skills' boolean DEFAULT FALSE,
  PRIMARY KEY (`id`),
  


