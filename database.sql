/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50732
Source Host           : localhost:3306
Source Database       : diary_studen

Target Server Type    : MYSQL
Target Server Version : 50732
File Encoding         : 65001

Date: 2021-10-24 09:15:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
	`id` int(11) NULL,
	`name` varchar(255) NOT NULL,
	`race` varchar(255) NOT NULL,
	`univ` varchar(255) NOT NULL,
	`year_race` varchar(255) NOT NULL,
	`year_admision` varchar(255) NOT NULL,
	`age_admision` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of data
-- ----------------------------
 


-- ----------------------------
-- Table structure for matter
-- ----------------------------
DROP TABLE IF EXISTS `matter`;
CREATE TABLE `diary_studen`.`matter` (
	`id` INT NULL AUTO_INCREMENT , 
	`matter` VARCHAR(100) NOT NULL , 
	`teacher` VARCHAR(100) NOT NULL , 
	PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of studen
-- ----------------------------


-- ----------------------------
-- Table structure for matter
-- ----------------------------
DROP TABLE IF EXISTS `diary`;
CREATE TABLE `diary_studen`.`diary` (
	`id` INT NULL AUTO_INCREMENT ,
	`title` VARCHAR(100) NOT NULL , 
	`descript` VARCHAR(100) NOT NULL , 
	`day` INT(100) NOT NULL, 
	`month` INT(100) NOT NULL, 
	`year` INT(100) NOT NULL , 
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;


-- ----------------------------
-- Records of studen
-- ----------------------------


SET FOREIGN_KEY_CHECKS=1;
