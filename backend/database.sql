-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema wuat
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wuat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `wuat` ;

-- -----------------------------------------------------
-- Table `player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `owner_id` INT NOT NULL,
  `round` INT NULL,
  `title` VARCHAR(255) NULL,
  `url` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_game_player_idx` (`owner_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scenario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `scenario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `game_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scenario_game1_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `fk_scenario_game1`
    FOREIGN KEY (`game_id`)
    REFERENCES `game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `game_player`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `game_player` (
  `game_id` INT NOT NULL,
  `player_id` INT NOT NULL,
  PRIMARY KEY (`game_id`, `player_id`),
  INDEX `fk_game_has_player_player1_idx` (`player_id` ASC) VISIBLE,
  INDEX `fk_game_has_player_game1_idx` (`game_id` ASC) VISIBLE,
  CONSTRAINT `fk_game_has_player_game1`
    FOREIGN KEY (`game_id`)
    REFERENCES `game` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_game_has_player_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sentence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sentence` (
  `scenario_id` INT NOT NULL,
  `player_id` INT NOT NULL,
  `round` INT NULL,
  `content` TEXT NULL,
  PRIMARY KEY (`scenario_id`, `player_id`),
  INDEX `fk_scenario_has_player_player1_idx` (`player_id` ASC) VISIBLE,
  INDEX `fk_scenario_has_player_scenario1_idx` (`scenario_id` ASC) VISIBLE,
  CONSTRAINT `fk_scenario_has_player_scenario1`
    FOREIGN KEY (`scenario_id`)
    REFERENCES `scenario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_scenario_has_player_player1`
    FOREIGN KEY (`player_id`)
    REFERENCES `player` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
