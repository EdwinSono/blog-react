interface IComment {
  content: string;
  author: string;
}

interface IBlogPost {
  title: string;
  slug: string;
  content: string;
  author: string;
  comments: Array<IComment> | never
}

const blogdata: IBlogPost[] = [];

blogdata.push({
  title: '¿Qué es React?',
  slug: 'que-es-react',
  content: 'React es el mejor framework de JavaScript.',
  author: 'juandc',
  comments: [
    {
      content: 'Buenos cursos, juandc!\nPor cierto, cada vez hablas más como Freddy xD',
      author: 'alex'
    }
  ],
});
blogdata.push({
  title: '¿Qué es Vue?',
  slug: 'que-es-vue',
  content: 'Vue es el mejor framework de JavaScript.',
  author: 'diannerd',
  comments: []
});
blogdata.push({
  title: '¿Qué es Angular?',
  slug: 'que-es-angular',
  content: 'Angular es el mejor framework de JavaScript.',
  author: 'nicobytes',
  comments: []
});

export { blogdata }; 
export type { IBlogPost, IComment };

