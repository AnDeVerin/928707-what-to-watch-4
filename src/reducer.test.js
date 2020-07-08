import { reducer, ActionType, ActionCreator } from './reducer.js';

const movies = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    thumbUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Adventure`,
    realeseYear: 2018,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BYWVlMDI5N2UtZTIyMC00NjZkLWI5Y2QtODM5NGE5MzA0NmVjXkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BYTRiOTM4YzEtN2MwMC00MjMxLWIxM2ItMGE1YzA1MjNkN2YzXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX1777_CR0,0,1777,999_AL_.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      rating: {
        value: 6.6,
        count: 240,
      },
      description: [
        `At the end of the first film, the powerful Dark wizard Gellert Grindelwald (Depp) was captured by MACUSA (Magical Congress of the United States of America), with the help of Newt Scamander (Redmayne). But, making good on his threat, Grindelwald escaped custody and has set about gathering followers, most unsuspecting of his true agenda: to raise pure-blood wizards up to rule over all non-magical beings. In an effort to thwart Grindelwald's plans, Albus Dumbledore (Law) enlists his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.`,
      ],
      director: `David Yates`,
      stars: [
        `Johnny Depp`,
        `Eddie Redmayne`,
        `Kevin Guthrie`,
        `Carmen Ejogo`,
        `Wolf Roth`,
        `Eddie Redmayne`,
        `Zoë Kravitz`,
        `Callum Turner`,
        `Derek Riddell`,
        `Cornell John`,
        `Ezra Miller`,
      ],
      runTime: `2h 14min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `2016-12-20`,
        rating: 7.6,
      },
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2018-02-02`,
        rating: 9.2,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2019-12-18`,
        rating: 8.4,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `Bohemian Rhapsody`,
    thumbUrl: `img/bohemian-rhapsody.jpg`,
    genre: `Drama`,
    realeseYear: 2018,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_SY1000_CR0,0,674,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTYwYzMwMGItZDkzOS00YTczLTg2MDAtNDA2MWY2YmU5NDZiXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg`,
    trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      rating: {
        value: 8.5,
        count: 426,
      },
      description: [
        `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Музыкальный фестиваль Live Aid (1985).`,
      ],
      director: `Bryan Singer`,
      stars: [
        `Rami Malek`,
        `Lucy Boynton`,
        `Gwilym Lee`,
        `Ben Hardy`,
        `Joseph Mazzello`,
        `Aidan Gillen`,
      ],
      runTime: `2h 22min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `2016-12-20`,
        rating: 7.6,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2019-12-18`,
        rating: 8.4,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `Macbeth`,
    thumbUrl: `img/macbeth.jpg`,
    genre: `Drama`,
    realeseYear: 2015,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BNzgyNDczMjU4NV5BMl5BanBnXkFtZTgwMTUwMDI3NjE@._V1_SY1000_SX675_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BNjY4OTk1MWUtOTMxZC00NzJkLWIwZmUtNjMwZDcwMjBkMmI5XkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      rating: {
        value: 2.9,
        count: 16,
      },
      description: [
        `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
      ],
      director: `Justin Kurzel`,
      stars: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
      runTime: `1h 53min `,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `2016-12-20`,
        rating: 7.6,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `Aviator`,
    thumbUrl: `img/aviator.jpg`,
    genre: `Biography`,
    realeseYear: 2004,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BYzI1OTQ3YTMtNjgwMC00NGU2LTkzM2ItYjMzOTQzZTBjNDc2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,1530,1000_AL_.jpg`,
    trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      rating: {
        value: 10,
        count: 324,
      },
      description: [
        `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
      ],
      director: `Martin Scorsese`,
      stars: [
        `Leonardo DiCaprio`,
        `Cate Blanchett`,
        `Kate Beckinsale`,
        `John C. Reilly`,
        `Alec Baldwin`,
      ],
      runTime: `2h 50min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2018-02-02`,
        rating: 9.2,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2019-12-18`,
        rating: 8.4,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `We need to talk about Kevin`,
    thumbUrl: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Mystery`,
    realeseYear: 20011,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SY1000_CR0,0,683,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTA3MzQzOTk1MDVeQTJeQWpwZ15BbWU3MDEzNjc0MzY@._V1_SY1000_SX675_AL_.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      rating: {
        value: 5,
        count: 124,
      },
      description: [
        `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      ],
      director: `Lynne Ramsay`,
      stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`, `Alan Alda`],
      runTime: `1h 1min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `2016-12-20`,
        rating: 7.6,
      },
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2018-02-02`,
        rating: 9.2,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2019-12-18`,
        rating: 8.4,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `What We Do in the Shadows`,
    thumbUrl: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Mystery`,
    realeseYear: 2011,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SY1000_CR0,0,683,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTA3MzQzOTk1MDVeQTJeQWpwZ15BbWU3MDEzNjc0MzY@._V1_SY1000_SX675_AL_.jpg`,
    trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      rating: {
        value: 5,
        count: 124,
      },
      description: [
        `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      ],
      director: `Lynne Ramsay`,
      stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`, `Alan Alda`],
      runTime: `1h 1min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
        author: `Paula Fleri-Soler`,
        date: `2016-12-20`,
        rating: 7.6,
      },
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2018-02-02`,
        rating: 9.2,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2019-12-18`,
        rating: 8.4,
      },
      {
        text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult. Even if the content is a little more adult`,
        author: `Paula Fleri-Soler`,
        date: `2020-12-22`,
        rating: 7.0,
      },
    ],
  },
  {
    title: `Revenant`,
    thumbUrl: `img/revenant.jpg`,
    genre: `Mystery`,
    realeseYear: 2001,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SY1000_CR0,0,683,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTA3MzQzOTk1MDVeQTJeQWpwZ15BbWU3MDEzNjc0MzY@._V1_SY1000_SX675_AL_.jpg`,
    trailer: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    overview: {
      rating: {
        value: 5,
        count: 124,
      },
      description: [
        `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      ],
      director: `Lynne Ramsay`,
      stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`, `Alan Alda`],
      runTime: `1h 1min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
    ],
  },
  {
    title: `Johnny English`,
    thumbUrl: `img/johnny-english.jpg`,
    genre: `Mystery`,
    realeseYear: 2011,
    posterUrl: `https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SY1000_CR0,0,683,1000_AL_.jpg`,
    coverUrl: `https://m.media-amazon.com/images/M/MV5BMTA3MzQzOTk1MDVeQTJeQWpwZ15BbWU3MDEzNjc0MzY@._V1_SY1000_SX675_AL_.jpg`,
    trailer: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    overview: {
      rating: {
        value: 5,
        count: 124,
      },
      description: [
        `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
      ],
      director: `Lynne Ramsay`,
      stars: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`, `Alan Alda`],
      runTime: `1h 1min`,
    },
    reviews: [
      {
        text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
        author: `Kate Muir`,
        date: `2016-12-24`,
        rating: 8.9,
      },
      {
        text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
        author: `Bill Goodykoontz`,
        date: `2015-11-18`,
        rating: 8.0,
      },
    ],
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: 'All genres',
    movies,
  });
});

it(`Reducer should change genre to a given value`, () => {
  expect(
    reducer(
      {
        genre: 'All genres',
        movies,
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Drama`,
      }
    )
  ).toEqual({
    genre: `Drama`,
    movies,
  });

  expect(
    reducer(
      {
        genre: 'All genres',
        movies,
      },
      {
        type: ActionType.SET_GENRE,
        payload: `Adventure`,
      }
    )
  ).toEqual({
    genre: `Adventure`,
    movies,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for setting genre returns correct action`, () => {
    expect(ActionCreator.setGenre(`some genre`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `some genre`,
    });
  });
});