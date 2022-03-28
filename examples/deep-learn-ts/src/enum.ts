enum AnimalFlags {
  None = 0,
  HasClaws = 1 << 0,
  CanFly = 1 << 1,
  EatsFish = 1 << 2,
  Endangered = 1 << 3,
}

interface Animal {
  flags: AnimalFlags;
  [key: string]: any;
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log('animal has claws');
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log('animal can fly');
  }
  if (animalFlags === AnimalFlags.None) {
    console.log('nothing');
  }
}

let animal: Animal = {
  flags: AnimalFlags.None,
};

printAnimalAbilities(animal);

/**
 * 我们使用 |= 来添加一个标志；
 * 组合使用 &= 和 ~ 来清理一个标志；
 * | 来合并标志
 */

animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal);

animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal);

animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal);

enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

console.log(Weekday.isBusinessDay(Weekday.Friday));
