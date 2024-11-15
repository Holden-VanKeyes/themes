type GameSet = {
  hint: string
  answers: string[]
  correct: string
  explanation: string
}

type GameDay = {
  rule: {
    pattern: string
    explanation: string
  }
  sets: GameSet[]
}

type AnswerKey = {
  [key: string]: GameDay
}

export const GAME_MESSAGES = {
  win1: 'Perfect!',
  win2: 'Grand!',
  win3: 'Good Job!',
  win4: 'You Squeaked By!',
  lose: 'Sorry, No Dice!',
}

export const answerKey: AnswerKey = {
  '20241112': {
    rule: {
      pattern: 'Words with double consonants',
      explanation:
        'Each correct answer contains two of the same consonant letters next to each other',
    },
    sets: [
      {
        hint: 'strawberry',
        answers: ['peel', 'bread', 'monkey', 'cheddar', 'grape'],
        correct: 'cheddar',
        explanation: "Contains 'dd'",
      },
      {
        hint: 'pinnacle',
        answers: ['acme', 'mountain', 'climber', 'craggy', 'volcano'],
        correct: 'craggy',
        explanation: "Contains 'gg'",
      },
      {
        hint: 'baseball',
        answers: ['bat', 'strike', 'mitt', 'umpire', 'natural'],
        correct: 'mitt',
        explanation: "Contains 'tt'",
      },
      {
        hint: 'channel',
        answers: ['television', 'England', 'teller', 'loch', 'remote'],
        correct: 'teller',
        explanation: "Contains 'll'",
      },
    ],
  },
  '20241113': {
    rule: {
      pattern: 'Things typically found or used in pairs',
      explanation:
        'Each correct answer is something commonly associated with its pair',
    },
    sets: [
      {
        hint: 'ear',
        answers: ['nose', 'nostril', 'finger', 'snot', 'hair'],
        correct: 'nose',
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
        answers: ['a pear tree', 'christmas', 'boot', 'beard', 'reindeer'],
        correct: 'boot',
        explanation:
          'Boots are worn as a pair and Turtle Doves come in pairs in a famous Christmas song',
      },
    ],
  },
  '20241114': {
    rule: {
      pattern:
        'Words that become different words when the last letter is removed',
      explanation:
        'Remove the last letter of each correct answer to find another valid word',
    },
    sets: [
      {
        hint: 'paint',
        answers: ['coat', 'sword', 'kind', 'color', 'plain'],
        correct: 'kind',
        explanation: 'kind → kin',
      },
      {
        hint: 'wand',
        answers: ['staff', 'wizard', 'story', 'theme', 'legend'],
        correct: 'theme',
        explanation: 'theme → them',
      },
      {
        hint: 'spare',
        answers: ['chain', 'rope', 'extra', 'empty', 'gone'],
        correct: 'chain',
        explanation: 'chain → chai',
      },
      {
        hint: 'meant',
        answers: ['deserted', 'bare', 'roomy', 'understood', 'felt'],
        correct: 'bare',
        explanation: 'bare → bar',
      },
    ],
  },
  '20241115': {
    rule: {
      pattern: 'Words with different meanings based on pronunciation',
      explanation:
        'Each word has different meanings when stressed on different syllables',
    },
    sets: [
      {
        hint: 'conduct',
        answers: ['grow', 'flower', 'record', 'garden', 'seed'],
        correct: 'record',
        explanation: 'REcord (noun) vs reCORD (verb)',
      },
      {
        hint: 'conflict',
        answers: ['oasis', 'present', 'sand', 'cactus', 'dry'],
        correct: 'present',
        explanation: 'PREsent (noun) vs preSENT (verb)',
      },
      {
        hint: 'refuse',
        answers: ['trash', 'permit', 'garbage', 'waste', 'deny'],
        correct: 'permit',
        explanation: 'PERmit (noun) vs perMIT (verb)',
      },
      {
        hint: 'object',
        answers: ['thing', 'protest', 'item', 'matter', 'desk'],
        correct: 'protest',
        explanation: 'PROtest (noun) vs proTEST (verb)',
      },
    ],
  },
}
