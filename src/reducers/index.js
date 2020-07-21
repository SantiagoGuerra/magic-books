const initialState = {
  books: [
    {
      title: 'Functional Programming',
      author: 'Luis Atencio',
      category: 'javascript',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Ruby by Example: Concepts and Code',
      author: 'Kevin C. Baird',
      category: 'ruby',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Haskell Programming from First Principles',
      author: 'Chris Allen, Julie Moronuki',
      category: 'haskell',
      id: Math.floor(Math.random() * 1040),
    },
    {
      title: 'Get Programming with Go',
      author: 'Nathan Youngman, Roger Peppé',
      category: 'go',
      id: Math.floor(Math.random() * 1040),
    },
  ],
  filter: 'All',
};

export default initialState;
