// Наш герой.

class Hero {
  constructor(boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = 0;
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack(hero) {
    // Атакуем.
    this.boomerang.fly(hero);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
