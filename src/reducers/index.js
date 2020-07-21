const initialState = {
  books: [
    {
      title: 'Functional Programming',
      author: 'Luis Atencio',
      category: 'learning',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Ruby by Example: Concepts and Code',
      author: 'Kevin C. Baird',
      category: 'learning',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Haskell Programming from First Principles',
      author: 'Chris Allen, Julie Moronuki',
      category: 'learning',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Get Programming with Go',
      author: 'Nathan Youngman, Roger Peppé',
      category: 'learning',
      id: Math.floor(Math.random() * 1040),
    },
  ],
  filter: 'all',
};

export default initialState;
