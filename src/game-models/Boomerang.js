// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = -1;
    this.reverse = false;
  }

  fly(hero) {
    this.reverse ? this.moveLeft() : this.moveRight();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    if (this.position === 30) this.reverse = true;
  }
}

module.exports = Boomerang;
