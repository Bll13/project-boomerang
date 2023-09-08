// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
class Controller {
  constructor(hero, enemy, boomerang) {
    this.hero = hero;
    this.enemy = enemy;
    this.boomerang = boomerang;
  }

  #keyboard = {
    space: () => {
      if (this.boomerang.position === -1) {
        this.boomerang.position = this.hero.position[1] + 1;
        this.hero.attack(this.hero);
      }
    },
    d: () => {
      this.hero.moveRight();
    },
    a: () => {
      this.hero.moveLeft();
    },
    w: () => {
      this.hero.moveUp();
    },
    s: () => {
      this.hero.moveDown();
    },
  };

  // Какая-то функция.

  runInteractiveConsole(hero, enemy) {
    keypress(process.stdin);
    process.stdin.on('keypress', (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in this.#keyboard) {
          this.#keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === 'c') {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

module.exports = Controller;
