export type GameSet = {
  hint: string
  answers: string[]
  correct: string
  explanation: string
  color?: string
}

export type GameDay = {
  rule: {
    pattern: string
    explanation: string
  }
  sets: GameSet[]
}

type AnswerKey = {
  [key: string]: GameDay
}

type GameMsgs = {
  [key: number]: string
  [key: string]: string
}

export const GAME_MESSAGES: GameMsgs = {
  4: 'Perfect!',
  3: 'Bravo!',
  2: 'Not Too Shabby!',
  1: 'Squeaked By!',
  0: 'Sorry, No Dice!',
}

export const GAME_EMOJIS: GameMsgs = {
  4: '🦄',
  3: '🐳',
  2: '🐢',
  1: '🧀',
  0: '🧊',
}

export const trialAnswerKey: AnswerKey = {
  // Trial Puzzle 1 - Monday
  1: {
    rule: {
      pattern: 'Toss me',
      explanation: 'Types of salad',
    },
    sets: [
      {
        hint: 'Wedge',
        answers: ['Iron', 'Putter', 'Bunker', 'Garden', 'Shed'],
        correct: 'Garden',
        explanation: 'Wedge salad | Garden salad',
      },
      {
        hint: 'Greek',
        answers: ['Aristotle', 'Napoleon', 'Caesar', 'Rome', 'Gladiator'],
        correct: 'Caesar',
        explanation: 'Greek salad | Caesar salad',
      },
      {
        hint: 'Fruit',
        answers: ['Egg', 'Avocado', 'Kiwi', 'Oval', 'Grape'],
        correct: 'Egg',
        explanation: 'Fruit salad | Egg salad',
      },
      {
        hint: 'Tuna',
        answers: ['Enchilada', 'Curry', 'Satay', 'Oatmeal', 'Pasta'],
        correct: 'Pasta',
        explanation: 'Tuna salad | Pasta salad',
      },
    ],
  },

  // Trial Puzzle 2 - Tuesday
  2: {
    rule: {
      pattern: 'Words containing animals',
      explanation: 'Each word has the name of an animal within the spelling',
    },
    sets: [
      {
        hint: 'Spigot',
        answers: ['Tap', 'Scathing', 'Swine', 'Water', 'Wine'],
        correct: 'Scathing',
        explanation: 'S(cat)hing -> Cat | S(pig)ot -> Pig',
      },
      {
        hint: 'Selfish',
        answers: ['Growl', 'Mean', 'Anger', 'Keep', 'Hide'],
        correct: 'Growl',
        explanation: 'Gr(owl) -> Owl | Sel(fish) -> Fish',
      },
      {
        hint: 'Dogma',
        answers: ['Religion', 'Hero', 'Villain', 'Caper', 'Damsel'],
        correct: 'Caper',
        explanation: 'C(ape)r -> Ape | (Dog)ma -> Dog',
      },
      {
        hint: 'Share',
        answers: ['Hope', 'Lend', 'Like', 'Tweet', 'Feel'],
        correct: 'Feel',
        explanation: 'F(eel) -> Eel | S(hare) -> Hare',
      },
    ],
  },

  // Trial Puzzle 3 - Wednesday
  3: {
    rule: {
      pattern: "Last names of 80's wrestlers",
      explanation: "The 80's were wild y'all!",
    },
    sets: [
      {
        hint: 'Rude',
        answers: ['Savage', 'Bad', 'Mean', 'Attitude', 'Boys'],
        correct: 'Savage',
        explanation: 'Macho Man Randy Savage | Rick Rude',
      },
      {
        hint: 'Piper',
        answers: ['Fiddler', 'Organ', 'Steamboat', 'Smokestack', 'Kiln'],
        correct: 'Steamboat',
        explanation: 'Ricky Steamboat | Rowdy Roddy Piper',
      },
      {
        hint: 'Hart',
        answers: ['Attack', 'Aorta', 'Rose', 'Candy', 'Valentine'],
        correct: 'Valentine',
        explanation: 'Greg Valentine | Bret Hart',
      },
      {
        hint: 'Flair',
        answers: ['Hunk', 'Elan', 'Beefcake', 'Pizzazz', 'Babe'],
        correct: 'Beefcake',
        explanation: 'Brutus Beefcake | Ric Flair',
      },
    ],
  },

  // Trial Puzzle 4 - Thursday
  4: {
    rule: {
      pattern: 'Things typically found or used in pairs',
      explanation:
        'Each correct answer is something commonly associated with its pair',
    },
    sets: [
      {
        hint: 'ear',
        answers: ['canal', 'nostril', 'worm', 'snot', 'hair'],
        correct: 'nostril',
        explanation: 'We have two ears and two nostrils',
      },
      {
        hint: 'sock',
        answers: ['hit', 'slap', 'shoe', 'laundry', 'wool'],
        correct: 'shoe',
        explanation: 'Socks and shoes are worn as pairs',
      },
      {
        hint: 'eye',
        answers: ['cardinal', 'astro', 'ranger', 'dodger', 'twin'],
        correct: 'twin',
        explanation: 'Like eyes, twins come in pairs',
      },
      {
        hint: 'a turtle dove',
        answers: ['a pear tree', 'christmas', 'boot', 'beard', 'santa'],
        correct: 'boot',
        explanation:
          'Boots are worn as a pair and Turtle Doves come in pairs in a famous Christmas song',
      },
    ],
  },

  // Trial Puzzle 5 - Friday
  5: {
    rule: {
      pattern: 'Missing link',
      explanation:
        'the answer is linked to the 2nd word of the hint and makes a TV show or movie',
    },
    sets: [
      {
        hint: 'Hulk Hogan',
        answers: ['Heroes', 'Villains', 'Cheaters', 'Saviors', 'Snakes'],
        correct: 'Heroes',
        explanation: "Hulk Hogan | Hogan's Heroes",
      },
      {
        hint: 'Sally Field',
        answers: ['Movies', 'Stars', 'Wishes', 'Dreams', 'Awards'],
        correct: 'Dreams',
        explanation: 'Sally Field | Field of Dreams',
      },
      {
        hint: 'Prince Charles',
        answers: [
          'In Over My Head',
          'In Charge',
          'In Love',
          'In Deep',
          'In Debt',
        ],
        correct: 'In Charge',
        explanation: 'Prince Charles | Charles in Charge',
      },
      {
        hint: 'Barry White',
        answers: ['Iris', 'Lotus', 'Rose', 'Daisy', 'Cactus'],
        correct: 'Lotus',
        explanation: 'Barry White | White Lotus',
      },
    ],
  },

  // Trial Puzzle 6 - Saturday
  6: {
    rule: {
      pattern: 'One removed',
      explanation: 'the hint and answer are tied together by a common word',
    },
    sets: [
      {
        hint: 'Baker',
        answers: ['Loaf', 'Cash', 'Butcher', 'Josephine', 'Pastry'],
        correct: 'Cash',
        explanation:
          'A baker bakes bread and works with dough which are words for',
      },
      {
        hint: 'Toolbox',
        answers: ['Stranger', 'River', 'Planet', 'Cocktail', 'Dough'],
        correct: 'Cocktail',
        explanation:
          'A toolbox holds a screwdriver and a screwdriver is a cocktail',
      },
      {
        hint: 'Actor',
        answers: ['Role', 'Cher', 'Power', 'Biology', 'Code'],
        correct: 'Code',
        explanation: 'An actor reads a script and a script is a piece of code',
      },
      {
        hint: 'Landscaper',
        answers: ['Mushrooms', 'Marijuana', 'Cocaine', 'Acid', 'Ecstasy'],
        correct: 'Marijuana',
        explanation:
          'A landscaper cuts grass and pulls weeds which are names for Marijuana',
      },
    ],
  },

  // Trial Puzzle 7 - Sunday
  7: {
    rule: {
      pattern: 'Missing connector',
      explanation: 'Each hint answer pair has a word that connects them',
    },
    sets: [
      {
        hint: 'Bunny',
        answers: ['Bourbon', 'Whiskey', 'Gin', 'Scotch', 'Vodka'],
        correct: 'Scotch',
        explanation: 'Bunny hop | Hopscotch',
      },
      {
        hint: 'Holy',
        answers: ['Bottle', 'Cheese', 'Death', 'Orange', 'Lunch'],
        correct: 'Bottle',
        explanation: 'Holy water | Water bottle',
      },
      {
        hint: 'Car',
        answers: ['Trunks', 'Tie', 'Jacket', 'Belt', 'Socks'],
        correct: 'Belt',
        explanation: 'Car seat | Seat belt',
      },
      {
        hint: 'Easy',
        answers: ['A', 'Flip', 'Kiss', 'Light', 'Dish'],
        correct: 'Light',
        explanation: 'Easy street | Streetlight',
      },
    ],
  },
}
