export  const phrases = [
    'Ты молодец!',
    'Супер! Получилось!',
    '🎉Так держать!',
    '🎉 Ура! Всё правильно!',
    '🎉 Молодец! Переходим к следующему заданию.',
    '🎉 Победа!'
  ];

  export   const getRandomPhrase = () =>
    phrases[Math.floor(Math.random() * phrases.length)];