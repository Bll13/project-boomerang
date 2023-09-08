// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Controller = require('./Controller');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(this.boomerang); // Герою можно аргументом передать бумеранг.
    this.enemy1 = new Enemy();
    this.enemy2 = new Enemy();
    this.enemy3 = new Enemy();
    this.enemy4 = new Enemy();
    this.enemy5 = new Enemy();
    this.enemy6 = new Enemy();
    this.enemy7 = new Enemy();
    this.view = new View();
    this.controller = new Controller(this.hero, this.enemy, this.boomerang);
    this.field = [];
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.field = new Array();
    for (let i = 0; i < 7; i++) {
      this.track = new Array(this.trackLength).fill(' ');
      this.field.push(this.track);
    }
    this.field[this.hero.position[0]][this.hero.position[1]] = this.hero.skin;
    this.field[0][this.enemy1.position] = this.enemy1.skin;
    this.field[1][this.enemy2.position] = this.enemy2.skin;
    this.field[2][this.enemy3.position] = this.enemy3.skin;
    this.field[3][this.enemy4.position] = this.enemy4.skin;
    this.field[4][this.enemy5.position] = this.enemy5.skin;
    this.field[5][this.enemy6.position] = this.enemy6.skin;
    this.field[6][this.enemy7.position] = this.enemy7.skin;
    this.field[this.hero.position[0]][this.boomerang.position] =
      this.boomerang.skin;
  }

  check() {
    // Убийство врага
    if (
      this.boomerang.position === this.enemy1.position ||
      this.boomerang.position + 1 === this.enemy1.position
    ) {
      this.enemy1.die();
      this.boomerang.reverse = true;
      this.enemy1 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy2.position ||
      this.boomerang.position + 1 === this.enemy2.position
    ) {
      this.enemy2.die();
      this.boomerang.reverse = true;
      this.enemy2 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy3.position ||
      this.boomerang.position + 1 === this.enemy3.position
    ) {
      this.enemy3.die();
      this.boomerang.reverse = true;
      this.enemy3 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy4.position ||
      this.boomerang.position + 1 === this.enemy4.position
    ) {
      this.enemy4.die();
      this.boomerang.reverse = true;
      this.enemy4 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy5.position ||
      this.boomerang.position + 1 === this.enemy5.position
    ) {
      this.enemy5.die();
      this.boomerang.reverse = true;
      this.enemy5 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy6.position ||
      this.boomerang.position + 1 === this.enemy6.position
    ) {
      this.enemy6.die();
      this.boomerang.reverse = true;
      this.enemy6 = new Enemy();
    }
    if (
      this.boomerang.position === this.enemy7.position ||
      this.boomerang.position + 1 === this.enemy7.position
    ) {
      this.enemy7.die();
      this.boomerang.reverse = true;
      this.enemy7 = new Enemy();
    }
    // Движение врага
    if (
      this.enemy1.position > -1 ||
      this.enemy2.position > -1 ||
      this.enemy3.position > -1 ||
      this.enemy4.position > -1 ||
      this.enemy5.position > -1 ||
      this.enemy6.position > -1 ||
      this.enemy7.position > -1
    )
      this.enemy1.moveLeft();
    this.enemy2.moveLeft();
    this.enemy3.moveLeft();
    this.enemy4.moveLeft();
    this.enemy5.moveLeft();
    this.enemy6.moveLeft();
    this.enemy7.moveLeft();
    // Полет бумеранга
    if (this.boomerang.position !== -1) {
      this.boomerang.fly();
    }
    // Враг дошел до конца строки
    if (
      this.enemy1.position === -1
    ) {
      this.enemy1.die();
      this.enemy1 = new Enemy();
    }
    if (
      this.enemy2.position === -1
    ) {
      this.enemy2.die();
      this.enemy2 = new Enemy();
    }
    if (
      this.enemy3.position === -1
    ) {
      this.enemy3.die();
      this.enemy3 = new Enemy();
    }
    if (
      this.enemy4.position === -1
    ) {
      this.enemy4.die();
      this.enemy4 = new Enemy();
    }
    if (
      this.enemy5.position === -1
    ) {
      this.enemy5.die();
      this.enemy5 = new Enemy();
    }
    if (
      this.enemy6.position === -1
    ) {
      this.enemy6.die();
      this.enemy6 = new Enemy();
    }
    if (
      this.enemy7.position === -1
    ) {
      this.enemy7.die();
      this.enemy7 = new Enemy();
    }
    // Бумеранг вернулся в руки
    if (
      this.hero.position >= [this.hero.position[0], this.boomerang.position]
    ) {
      this.boomerang.position = -1;
      this.boomerang.reverse = false;
    }
    // Смерть героя
    //   if (this.hero.position === [this.hero.position[0], this.enemy1.position]) {
    //     this.hero.die();
    //   }
  }

  play() {
    this.controller.runInteractiveConsole();
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.field);
    }, 100);
  }
}

module.exports = Game;
