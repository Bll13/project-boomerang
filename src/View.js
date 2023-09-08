// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(field) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    for (let i = 0; i < 7; i++) {
      console.log(field[i].join());
    }
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
