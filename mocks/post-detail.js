var moment = require ('moment');

var post = {
  id: 3,
  title: 'Développement JS',
  texte: 'Le développement en JS est magique',
  publicationDate: moment('2018-07-01').toDate(),
  user: {
    username: 'toto',
    firstname: 'toto',
    lastname: 'toto'
  },
  content: 'Inline `code` has `back-ticks around` it.\n' +
  '\n' +
  '        ```javascript\n' +
  '        var s = "JavaScript syntax highlighting";\n' +
  '        alert(s);\n' +
  '        ```\n' +
  '\n' +
  '        ```python\n' +
  '        s = "Python syntax highlighting"\n' +
  '        print s\n' +
  '        ```\n' +
  '\n' +
  '        Colons can be used to align columns.\n' +
  '        \n' +
  '        | Tables        | Are           | Cool  |\n' +
  '        | ------------- |:-------------:| -----:|\n' +
  '        | col 3 is      | right-aligned | $1600 |\n' +
  '        | col 2 is      | centered      |   $12 |\n' +
  '        | zebra stripes | are neat      |    $1 |\n' +
  '\n' +
  '        There must be at least 3 dashes separating each header cell.\n' +
  '        The outer pipes (|) are optional, and you don\'t need to make the\n' +
  '        raw Markdown line up prettily. You can also use inline Markdown.\n' +
  '\n' +
  '        Markdown | Less | Pretty\n' +
  '        --- | --- | ---\n' +
  '        *Still* | `renders` | **nicely**\n' +
  '        1 | 2 | 3',
  comments: [{
    id: 1,
    text: 'this is a comment',
    date: moment('2018-07-01').toDate(),
    user: {
      username: 'lala',
      firstname: 'lala',
      lastname: 'lala'
    },
    comments: [{
      id: 11,
      text: 'this is a subcomment',
      date: moment('2018-07-01').toDate(),
      user: {
        username: 'tata',
        firstname: 'tata',
        lastname: 'tata'
      }
    }, {
      id: 12,
      text: 'this is another subcomment',
      date: moment('2018-07-01').toDate(),
      user: {
        username: 'kiki',
        firstname: 'kiki',
        lastname: 'kiki'
      }
    }]
  }, {
    id: 1,
    text: 'this is another comment',
    date: moment('2018-07-01').toDate(),
    user: {
      username: 'foufou',
      firstname: 'foufou',
      lastname: 'foufou'
    }
  }
  ]
};

module.exports = post;