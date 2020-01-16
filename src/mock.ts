import { IQuizItem, ITest } from './types';

export const test1:IQuizItem[] = [
  {
    id: 0,
    question: 'Как называется водная оболочка земли?',
    answers: [
      {
        status: false,
        data: 'Литосфера',
      },
      {
        status: true,
        data: 'Гидросфера',
      },
      {
        status: false,
        data: 'Биосфера'
      },
      {
        status: false,
        data: 'Атмосфера'
      }
    ]
  },
  {
    id: 1,
    question: 'Какую птицу называют лесным доктором?',
    answers: [
      {
        status: true,
        data: 'Дятел',
      },
      {
        status: false,
        data: 'Кукушка',
      },
      {
        status: false,
        data: 'Птица-Доктор'
      },
      {
        status: false,
        data: 'Сорока'
      }
    ]
  },
  {
    id: 2,
    question: 'Выберите самый длинный техт?',
    answers: [
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение',
      },
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение',
      },
      {
        status: true,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение'
      },
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение.aloha'
      }
    ]
  },
  {
    id: 3,
    question: 'Откуда пошло выражение «деньги не пахнут?',
    answers: [
      {
        status: false,
        data: 'От подателей за провоз парфюмерии',
      },
      {
        status: false,
        data: 'От сборов за нестиранные носки',
      },
      {
        status: true,
        data: 'От налога на туалеты'
      },
      {
        status: false,
        data: 'От налогов на землю'
      }
    ]
  },
  {
    id: 4,
    question: '2+2*2?',
    answers: [
      {
        status: true,
        data: 'Шесть',
      },
      {
        status: false,
        data: '8',
      },
      {
        status: true,
        data: '6'
      },
      {
        status: false,
        data: '10'
      }
    ]
  },
  {
    id: 5,
    question: 'Туристы, приезжающие на Майорку, обязаны заплатить налог?',
    answers: [
      {
        status: true,
        data: 'На солнце',
      },
      {
        status: false,
        data: 'На майку',
      },
      {
        status: false,
        data: 'На трусы'
      },
      {
        status: false,
        data: 'На шорты'
      }
    ]
  },
];

export const test2:IQuizItem[] = [
  {
    id: 0,
    question: 'Кто из президентов США написал свой собственный рассказ про Шерлока Холмса?',
    answers: [
      {
        status: false,
        data: 'Джон Кеннеди'
      },
      {
        status: false,
        data: 'Рональд Рейган',
      },
      {
        status: false,
        data: 'Франклин Рузвельт'
      },
      {
        status: false,
        data: 'Барака Обама'
      }
    ]
  },
  {
    id: 1,
    question: 'Какую пошлину ввели в XII  веке в Англии для того чтобы заставить мужчин пойти на войну?',
    answers: [
      {
        status: false,
        data: 'Налог на тунеядство',
      },
      {
        status: true,
        data: 'Налог на трусость',
      },
      {
        status: false,
        data: 'Налог на отсутствие сапог'
      },
      {
        status: false,
        data: 'Налог на оружие'
      }
    ]
  },
  {
    id: 2,
    question: 'Выберите самый длинный техт?',
    answers: [
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение',
      },
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение',
      },
      {
        status: true,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение. Проверка на переполнение'
      },
      {
        status: false,
        data: 'Проверка на переполнение. Проверка на переполнение. Проверка на переполнение.aloha'
      }
    ]
  },
  {
    id: 3,
    question: 'Российский мультфильм, удостоенный «Оскара», — это…',
    answers: [
      {
        status: false,
        data: '«Простоквашино»',
      },
      {
        status: false,
        data: '«Винни-Пух»',
      },
      {
        status: true,
        data: ' «Старик и море»'
      },
      {
        status: false,
        data: '«Ну, погоди!»'
      }
    ]
  },
  {
    id: 4,
    question: '2+2*2?',
    answers: [
      {
        status: true,
        data: 'Шесть',
      },
      {
        status: false,
        data: '8',
      },
      {
        status: true,
        data: '6'
      },
      {
        status: false,
        data: '10'
      }
    ]
  },
  {
    id: 5,
    question: 'Что в Российской империи было вещевым эквивалентом денег?',
    answers: [
      {
        status: true,
        data: 'Шкуры пушных зверей',
      },
      {
        status: false,
        data: 'Крупный рогатый скот',
      },
      {
        status: false,
        data: 'Табак'
      },
      {
        status: false,
        data: 'Женские серьги'
      }
    ]
  },
  {
    id: 6,
    question: 'У индейцев из немногочисленного североамериканского племени квакиутл есть традиция: беря деньги в долг, они оставляют в залог…',
    answers: [
      {
        status: false,
        data: 'Душу',
      },
      {
        status: true,
        data: 'Имя',
      },
      {
        status: false,
        data: 'Скальп тещи'
      },
      {
        status: false,
        data: 'Амулет'
      }
    ]
  }
];

export const tests:ITest[] = [
  {
    id: 0,
    ifPassed: false,
    title: "Тема теста, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test1],
    numberOfQuestions: test1.length,
    createDate: '20/01/20',
    passedDate: undefined,
    resultInNumber: undefined,
    resultInPercent: undefined,
  },
  {
    id: 1,
    ifPassed: false,
    createDate: '11/10/19',
    title: "Второй тест, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test2],
    numberOfQuestions: test2.length,
    passedDate: undefined,
    resultInNumber: undefined,
    resultInPercent: undefined,
  },
  {
    id: 2,
    ifPassed: false,
    createDate: '11/10/19',
    title: "Второй тест, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test2],
    numberOfQuestions: test2.length,
    passedDate: undefined,
    resultInNumber: undefined,
    resultInPercent: undefined,
  }
];

export const tests2:ITest[] = [
  {
    id: 0,
    ifPassed: false,
    title: "Тема теста, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test1],
    numberOfQuestions: test1.length,
    createDate: '20/01/20',
    passedDate: '20/01/20',
    resultInNumber: 69,
    resultInPercent: 87,
  },
  {
    id: 1,
    ifPassed: false,
    createDate: '11/10/19',
    title: "Второй тест, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test2],
    numberOfQuestions: test2.length,
    passedDate: '11/10/19',
    resultInNumber: 48,
    resultInPercent: 89,
  },
  {
    id: 2,
    ifPassed: false,
    createDate: '11/10/19',
    title: "Второй тест, например “Ежемесячное тестирование юр. отдела 2018/2019",
    questionsWithAnswers: [...test2],
    numberOfQuestions: test2.length,
    passedDate: '11/10/19',
    resultInNumber: 23,
    resultInPercent: 100,
  }
];


