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
    this.enemy = new Enemy();
    this.view = new View();
    this.controller = new Controller(this.hero, this.enemy, this.boomerang);
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = new Array(this.trackLength).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
  }

  check() {
    // Убийство врага
    if (
      this.boomerang.position === this.enemy.position ||
      this.boomerang.position + 1 === this.enemy.position
    ) {
      this.enemy.die();
      this.boomerang.reverse = true;
      this.enemy = new Enemy();
    }
    // Движение врага
    if (this.enemy.position > -1) this.enemy.moveLeft();
    // Полет бумеранга
    if (this.boomerang.position !== -1) {
      this.boomerang.fly();
    }
    // Враг дошел до конца строки
    if (this.enemy.position === -1) {
      this.enemy.die();
      this.enemy = new Enemy();
    }
    // Бумеранг вернулся в руки
    if (this.hero.position >= this.boomerang.position) {
      this.boomerang.position = -1;
      this.boomerang.reverse = false;
    }
    // Смерть героя
    if (this.hero.position === this.enemy.position) this.hero.die();
  }

  play() {
    this.controller.runInteractiveConsole();
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 100);
  }
}

module.exports = Game;
