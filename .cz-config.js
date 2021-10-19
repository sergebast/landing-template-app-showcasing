module.exports = {
  types: [
    { value: 'chore', name: 'Обновление рабочих задач и т.д.; без изменения производственного кода'},
    { value: 'feature', name: 'Используется при добавлении новой функциональности уровня приложения' },
    { value: 'fix', name: 'Исправление ошибки для пользователя, а не исправление сценария сборки' },
    {
      value: 'refactor',
      name:
        'Рефакторинг производственного кода, например, переименование переменной'
    },      
    {
      value: 'style',
      name:
        'Форматирование, пропущенные точки с запятой и т. д .; без изменения производственного кода'
    },
    { value: 'test', name: 'Всё, что связано с тестированием' },
    { value: 'docs', name: 'Всё, что касается документации' },
    { value: 'revert', name: 'Откат на предыдущие коммиты' },
  ],
  scopes: [{name: 'html'}, {name: 'css'}, {name: 'app'}],

  messages: {
    type: 'Какие изменения вы вносите?',
    scope: 'Выберите ОБЛАСТЬ, которую вы изменили (опционально):',
    customScope: 'Укажите свою ОБЛАСТЬ:',
    subject: 'Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:',
    body:
      'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:',
    breaking: 'Список BREAKING CHANGES (опционально):',
    footer:'',
    confirmCommit: 'Вас устраивает получившийся коммит?'
  },

  // Разрешим собственную ОБЛАСТЬ
  allowCustomScopes: false,

  // Запрет на Breaking Changes
  allowBreakingChanges: false,

  // Префикс для нижнего колонтитула
  footerPrefix: 'МЕТА ДАННЫЕ:',

  // limit subject length
  subjectLimit: 50,
  upperCaseSubject: true,
  skipQuestions: ['footer', 'breaking']
}

