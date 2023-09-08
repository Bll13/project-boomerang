// Наш герой.

class Hero {
  constructor(boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = [0, 0];
    this.boomerang = boomerang;
  }

  moveLeft() {
    // Идём влево.
    this.position[1] -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position[1] += 1;
  }

  moveUp() {
    // Идём вверх.
    this.position[0] -= 1;
  }

  moveDown() {
    // Идём вниз.
    this.position[0] += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
