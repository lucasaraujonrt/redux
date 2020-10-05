const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1, title: 'Começando com redux', lessons: [
        { id: 1, title: 'Primeiro estudo' },
        { id: 2, title: 'Segundo estudo' },
        { id: 3, title: 'Terceiro estudo' },
      ],

    },
    {
      id: 2, title: 'Começando com react-native-redux', lessons: [
        { id: 4, title: 'Quarto estudo' },
        { id: 5, title: 'Quinto estudo' },
        { id: 6, title: 'Sexto estudo' },
      ]
    }
  ]
}

export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return {
      ...state, activeLesson: action.lesson, activeModule: action.module
    }
  }
  return state;
}