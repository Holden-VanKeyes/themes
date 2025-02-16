// '20241201': {
//     rule: {
//       pattern: '',
//       explanation: '',
//     },
//     sets: [
//       {
//         hint: '',
//         answers: ['', '', '', '', ''],
//         correct: '',
//         explanation: '',
//       },
//       {
//         hint: '',
//         answers: ['', '', '', '', ''],
//         correct: '',
//         explanation: '',
//       },
//       {
//         hint: '',
//         answers: ['', '', '', '', ''],
//         correct: '',
//         explanation: '',
//       },
//       {
//         hint: '',
//         answers: ['', '', '', '', ''],
//         correct: '',
//         explanation: '',
//       },
//     ],
//   },

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

export const answerKey: AnswerKey = {
  '20250215': {
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
  '20241118': {
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
  '20241119': {
    rule: {
      pattern:
        'Words that become different words when the last letter is removed',
      explanation:
        'Remove the last letter of each correct answer to find another valid word',
    },
    sets: [
      {
        hint: 'paint',
        answers: ['coat', 'hue', 'kind', 'color', 'plain'],
        correct: 'kind',
        explanation: 'kind → kin | paint → pain',
      },
      {
        hint: 'waver',
        answers: ['staff', 'wizard', 'story', 'theme', 'legend'],
        correct: 'theme',
        explanation: 'theme → them | waver → wave',
      },
      {
        hint: 'spare',
        answers: ['chain', 'rope', 'extra', 'empty', 'gone'],
        correct: 'chain',
        explanation: 'chain → chai | spare → spar',
      },
      {
        hint: 'meant',
        answers: ['deserted', 'bare', 'spice', 'understood', 'felt'],
        correct: 'bare',
        explanation: 'bare → bar | meant → mean',
      },
    ],
  },
  '20241120': {
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
  '20241121': {
    rule: {
      pattern: 'A double vowel somewhere in the answer',
      explanation:
        'Each correct answer contains two of the same vowels letters next to each other',
    },
    sets: [
      {
        hint: 'Snoopy',
        answers: ['Nosy', 'Linus', 'Woodstock', 'Pig-Pen', 'Snake'],
        correct: 'Woodstock',
        explanation: "Contains 'oo",
      },
      {
        hint: 'Parakeet',
        answers: ['Stool Pigeon', 'Rat Fink', 'Parrot', 'Carrot', 'Heckle'],
        correct: 'Stool Pigeon',
        explanation: "Contains 'oo'",
      },
      {
        hint: 'Radii',
        answers: ['Pie', 'Power', 'Circumference', 'Circle', 'Floor'],
        correct: 'Floor',
        explanation: "Contains 'oo'",
      },
      {
        hint: 'Naan',
        answers: ['Pita', 'Falafel', 'None', 'Nun', 'Noon'],
        correct: 'Noon',
        explanation: "Contains 'oo'",
      },
    ],
  },
  '20241122': {
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
  '20241123': {
    rule: {
      pattern: 'Words containing other 4-letter words',
      explanation:
        'Each word contains a hidden 4-letter word within the spelling',
    },
    sets: [
      {
        hint: 'Chairman',
        answers: ['Harvest', 'Circus', 'Wisdom', 'Wizard', ''],
        correct: 'Harvest',
        explanation: 'C(hair)man -> Hair || Har(vest) -> Vest',
      },
      {
        hint: 'Classic',
        answers: ['Cedar', 'Mango', 'Pleasure', 'Planet', 'Station'],
        correct: 'Planet',
        explanation: '(Class)ic -> Class || (Plan)et -> Plan',
      },
      {
        hint: 'Machine',
        answers: ['Compete', 'Pinch', 'Dinner', 'Comfort', 'Cylinder'],
        correct: 'Comfort',
        explanation: 'Com(fort) -> Fort || (Mach)ine -> Mach',
      },
      {
        hint: 'Sparkle',
        answers: ['Basement', 'Picture', 'Glimmer', 'Frame', 'Monster'],
        correct: 'Basement',
        explanation: '(Spark)le -> Spark || (Base)ment -> Base',
      },
    ],
  },
  '20241124': {
    rule: {
      pattern: 'Popular shades of pink',
      explanation: 'all answers are a shade of pink',
    },
    sets: [
      {
        hint: 'Coral',
        answers: ['Reef', 'Surf', 'Flamingo', 'Pelican', 'Octopus'],
        correct: 'Flamingo',
        explanation: 'Flamingo pink',
      },
      {
        hint: 'Bubble Gum',
        answers: [
          'Big League',
          'Bazooka',
          'Cotton Candy',
          'Jaw Breaker',
          'Popsicle',
        ],
        correct: 'Cotton Candy',
        explanation: 'Cotton Candy pink',
      },
      {
        hint: 'Carnation',
        answers: ['Prom', 'Milk', 'Fern', 'Lilac', 'Cherry Blossom'],
        correct: 'Cherry Blossom',
        explanation: 'Cherry Blossom pink',
      },
      {
        hint: 'Salmon',
        answers: ['Bass', 'Guitar', 'Hero', 'Sandwich', 'Rose'],
        correct: 'Rose',
        explanation: 'Rose pink',
      },
    ],
  },
  '20241125': {
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
        correct: '',
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
        explanation: 'Brutus Beefcake | Rick Flair',
      },
    ],
  },
  '20241126': {
    rule: {
      pattern: 'Well known company acronyms',
      explanation:
        'combine the first letter from each word in the hint/answer for a company acronym',
    },
    sets: [
      {
        hint: 'Imagine black mirrors',
        answers: [
          'Race every inch',
          'Never give up',
          'Do unto others',
          'Sleep well knowing',
          'Be kind rewind',
        ],
        correct: 'Race every inch',
        explanation: 'IBM & REI',
      },
      {
        hint: 'Bring more wings',
        answers: [
          'Kiss my grits',
          'Eat my shorts',
          'Down the hatch',
          'Give me cake',
          'Feed my soul',
        ],
        correct: 'Give me cake',
        explanation: 'BMW & GMC',
      },
      {
        hint: 'Two wheel axle',
        answers: [
          'Watch your step',
          'Under pastel skies',
          'I do declare',
          'My only regret',
          'Long road ahead',
        ],
        correct: 'Under pastel skies',
        explanation: 'TWA & UPS',
      },
      {
        hint: 'Come very soon',
        answers: [
          "Don't be late",
          'Early bird worm',
          'With wicked fervor',
          'Who can say',
          'Hear me now',
        ],
        correct: 'With wicked fervor',
        explanation: 'CVS & WWF',
      },
    ],
  },
  '20241127': {
    rule: {
      pattern: 'Types of chili pepper',
      explanation: '🌶️',
    },
    sets: [
      {
        hint: 'Banana',
        answers: ['Monkey', 'Smoothie', 'Cherry', 'Vanilla', 'Pineapple'],
        correct: 'Cherry',
        explanation: 'Banana pepper | Cherry pepper',
      },
      {
        hint: 'Bell',
        answers: ['Liberty', 'Tower', 'Church', 'Haunt', 'Ghost'],
        correct: 'Ghost',
        explanation: 'Bell pepper | Ghost pepper',
      },
      {
        hint: 'Fresno',
        answers: [
          'Sacramento',
          'Santa Cruz',
          'Santa Barbara',
          'Anaheim',
          'Oakland',
        ],
        correct: 'Anaheim',
        explanation: 'Fresno pepper | Anaheim pepper',
      },
      {
        hint: 'Aleppo',
        answers: ['Damascus', 'Tuscan', 'Calabrian', 'Tblisi', 'Milan'],
        correct: 'Calabrian',
        explanation: 'Aleppo pepper | Calabrian chili',
      },
    ],
  },
  '20241128': {
    rule: {
      pattern: 'State abbreviations',
      explanation:
        'the first 2 letters of the hint reference a state abbreviation and the answer is a neighboring state of the hint',
    },
    sets: [
      {
        hint: 'Orange',
        answers: ['Idiot', 'Cruel', 'Blood', 'Dunce', 'Dim'],
        correct: 'Idiot',
        explanation: 'Oregon (OR) | Idaho (ID)',
      },
      {
        hint: 'Massive',
        answers: ['Risk', 'Attack', 'Boulder', 'Earthquake', 'Tree'],
        correct: 'Risk',
        explanation: 'Massachusetts (MA) | Rhode Island (RI)',
      },
      {
        hint: 'Alter',
        answers: ['Change', 'Hem', 'Storm', 'Typhoon', 'Flood'],
        correct: 'Flood',
        explanation: 'Alabama (AL) | Florida (FL)',
      },
      {
        hint: 'Utter',
        answers: ['Say', 'Color', 'Speak', 'Hue', 'Announce'],
        correct: 'Color',
        explanation: 'Utter (UT) | Colorado (CO)',
      },
    ],
  },
  '20241129': {
    rule: {
      pattern: 'Vowel swap',
      explanation: 'Change a vowel for new word',
    },
    sets: [
      {
        hint: 'Crush',
        answers: ['Candy', 'Craving', 'Crash', 'Clobber', 'Crunch'],
        correct: 'Crash',
        explanation: 'u → a',
      },
      {
        hint: 'Sweet',
        answers: ['Swell', 'Swear', 'Sweat', 'Swoon', 'Swipe'],
        correct: 'Sweat',
        explanation: 'e → a',
      },
      {
        hint: 'Knit',
        answers: ['Naught', 'Knot', 'Not', 'Knife', 'Knight'],
        correct: 'Knot',
        explanation: 'i → o',
      },
      {
        hint: 'Flush',
        answers: ['Film', 'Fluster', 'Fling', 'Fresh', 'Flash'],
        correct: 'Flash',
        explanation: 'u → a',
      },
    ],
  },
  '20241130': {
    rule: {
      pattern: 'Hairy Creatures',
      explanation: 'Famous hairy/furry creatures from another planet',
    },
    sets: [
      {
        hint: 'Barf',
        answers: ['Chewy', 'Vomit', 'Puke', 'Crunchy', 'Sick'],
        correct: 'Chewy',
        explanation: 'Barf = Spaceballs | Chewy = Star Wars',
      },
      {
        hint: 'Rocket',
        answers: ['Gadget', 'Thingy', 'Whatchamacallit', 'Gizmo', 'Doohickey'],
        correct: 'Gizmo',
        explanation: 'Rocket = Guardians of the Galaxy | Gizmo = Gremlins',
      },
      {
        hint: 'Wicket',
        answers: ['Cricket', 'Hem', 'Birdie', 'Sew', 'Stitch'],
        correct: 'Stitch',
        explanation: 'Wicket = Star Wars | Stitch = Lilo & Stitch',
      },
      {
        hint: 'Alf',
        answers: ['Data', 'Tribbles', 'Spock', 'Jar Jar', 'Jabba'],
        correct: 'Tribbles',
        explanation: 'Alf = Alf | Tribbles = Star Trek',
      },
    ],
  },
  '20241131': {
    rule: {
      pattern: 'Word associations',
      explanation:
        'each word has an association with the answer to form a restaurant chain',
    },
    sets: [
      {
        hint: 'Patty & Charles',
        answers: [
          'Burger King',
          'Pizza Hut',
          'Cracker Barrel',
          'Taco Bell',
          'Panera Bread',
        ],
        correct: 'Burger King',
        explanation: 'Burger patty & King Charles',
      },
      {
        hint: 'Cheese & Chess',
        answers: [
          'Cookies & Cream',
          "Ben & Jerry's",
          'Haagen Dazs',
          'Dairy Queen',
          'Baskin Robbins',
        ],
        correct: 'Dairy Queen',
        explanation: 'Cheese is a dairy product & Queen is a chess piece',
      },
      {
        hint: 'Idol & Stag',
        answers: [
          'Peets',
          'Starbucks',
          'Dunkin Donuts',
          'Coffee Bean & Tea Leaf',
          'Au Bon Pain',
        ],
        correct: 'Starbucks',
        explanation: 'an idol is a star and a stag is a buck',
      },
      {
        hint: 'Ghost & Grayskull',
        answers: [
          "Wendy's",
          'Shake Shack',
          'Jack In The Box',
          'Five Guys',
          'White Castle',
        ],
        correct: 'White Castle',
        explanation: 'Ghosts are white & Grayskull is the castle in He-Man',
      },
    ],
  },
  '20241201': {
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
          'A baker bakes bread and works with dough which are words for $',
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
  '20241202': {
    rule: {
      pattern: 'One to the other',
      explanation: 'A word that connects hint to answer',
    },
    sets: [
      {
        hint: 'Desert Gold',
        answers: ['Rose', 'Diamond', 'Quartz', 'Opal', 'Emerald'],
        correct: 'Rose',
        explanation: 'Desert Rose | Rose Gold',
      },
      {
        hint: 'Blood Blossom',
        answers: ['Pink', 'Orange', 'Cherry', 'Plasma', 'Blister'],
        correct: 'Orange',
        explanation: 'Blood Orange | Orange Blossom',
      },
      {
        hint: 'Blue Plate',
        answers: ['Iron', 'Copper', 'Wood', 'Aluminum', 'Steel'],
        correct: 'Steel',
        explanation: 'Blue Steel | Steel Plate',
      },
      {
        hint: 'Fresh Bar',
        answers: ['Soap', 'Juice', 'Spring', 'Tapas', 'Wine'],
        correct: 'Juice',
        explanation: 'Fresh Juice | Juice Bar',
      },
    ],
  },
  '20241203': {
    rule: {
      pattern: 'hidden words associated with atlas/map',
      explanation:
        'hidden words commonly used with geography, atlases and maps',
    },
    sets: [
      {
        hint: 'Maple',
        answers: ['Bread', 'Tree', 'Syrup', 'Leaf', 'Yeast'],
        correct: 'Yeast',
        explanation: 'Maple -> Map | Yeast -> East',
      },
      {
        hint: 'Platitude',
        answers: ['Awestruck', 'Amazing', 'Aghast', 'Wild', 'Awesome'],
        correct: 'Awestruck',
        explanation: 'Platitude -> Latitude | Awestruck -> West',
      },
      {
        hint: 'Poinsettia',
        answers: ['Dog', 'Donkey', 'Donut', 'Deer', 'Daisy'],
        correct: 'Donkey',
        explanation: 'Poinsettia -> Inset | Donkey -> Key',
      },
      {
        hint: 'Unorthodox',
        answers: ['Contained', 'Encompassing', 'Different', 'Whole', 'Entire'],
        correct: 'Encompassing',
        explanation: 'Unorthodox -> North | Encompassing -> Compass',
      },
    ],
  },
  '20241204': {
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
  '20241205': {
    rule: {
      pattern: 'Popular acronyms',
      explanation:
        'Combine 1st letter from each word in the hint/answer for a well-known acronym',
    },
    sets: [
      {
        hint: 'Pet dog android',
        answers: [
          'Cat hair blanket',
          'Taste my iguana',
          'Chunky rhino alert',
          'Slam poet partridge',
          'Koala bear bank',
        ],
        correct: 'Taste my iguana',
        explanation:
          'PDA (public display of affection) | TMI (too much information) ',
      },
      {
        hint: 'Dark night ranger',
        answers: [
          'Ranch may ketchup',
          'Sweet potato fries',
          'Fried pickled okra',
          'Zest my lime',
          'Hot wing sauce',
        ],
        correct: 'Sweet potato fries',
        explanation: 'DNR (do not resuscitate) | SPF (sun protection factor)',
      },
      {
        hint: 'Pink ice necklace',
        answers: [
          'Snow angel custard',
          'Hot brownie mud',
          'Ruby red raindrop',
          'Sand hat hangover',
          'Pickled duck feet',
        ],
        correct: 'Pickled duck feet',
        explanation:
          'PIN (personal identification number) | PDF (portable document format)',
      },
      {
        hint: 'Drink sun tea',
        answers: [
          'Feed my porcupine',
          'Cancel that halo',
          'Rad old toupee',
          'Sexy new legs',
          'Flip your burger',
        ],
        correct: 'Sexy new legs',
        explanation: 'DST (daylight savings time) | SNL (saturday night live)',
      },
    ],
  },
  '20241206': {
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
        explanation: "Hogan's Heroes",
      },
      {
        hint: 'Sally Field',
        answers: ['Movies', 'Stars', 'Wishes', 'Dreams', 'Awards'],
        correct: 'Dreams',
        explanation: 'Field of Dreams',
      },
      {
        hint: 'Prince Charles',
        answers: ['Credit', 'Charge', 'Cash', 'Check', 'Debt'],
        correct: 'Charge',
        explanation: 'Charles in Charge',
      },
      {
        hint: 'Barry White',
        answers: ['Iris', 'Lotus', 'Rose', 'Daisy', 'Cactus'],
        correct: 'Lotus',
        explanation: 'White Lotus',
      },
    ],
  },
  '20241207': {
    rule: {
      pattern: 'Go Fish',
      explanation:
        'Add the hint letter to one of the potential answers to get a fish',
    },
    sets: [
      {
        hint: 'T',
        answers: ['Sanitizer', 'Medic', 'Mask', 'Surgeon', 'Nurse'],
        correct: 'Surgeon',
        explanation: 'Surgeon + t = Sturgeon',
      },
      {
        hint: 'M',
        answers: ['Studio', 'Salon', 'Beauty', 'Barber', 'Perm'],
        correct: 'Salon',
        explanation: 'Salon + m = Salmon',
      },
      {
        hint: 'P',
        answers: ['Car', 'Truck', 'Van', 'Plane', 'Canoe'],
        correct: 'Car',
        explanation: 'Car + p = Carp',
      },
      {
        hint: 'R',
        answers: ['Comment', 'Say', 'Talk', 'Speak', 'Tout'],
        correct: 'Tout',
        explanation: 'Tout + r = Trout',
      },
    ],
  },
  '20241208': {
    rule: {
      pattern: 'Go Fish',
      explanation: 'Hint and answer start with the name of a fish',
    },
    sets: [
      {
        hint: 'Bassoon',
        answers: ['Oboe', 'Drummer', 'Guitar', 'Clarinet', 'Bongo'],
        correct: 'Drummer',
        explanation: '(Bass)oon -> Bass | (Drum)mer -> Drum',
      },
      {
        hint: 'Herringbone',
        answers: ['Perchance', 'Maybe', 'Possibly', 'Sometimes', 'Never'],
        correct: 'Perchance',
        explanation: '(Herring)bone -> Herring | (Perch)ance -> Perch',
      },
      {
        hint: 'Coddle',
        answers: ['Sugar', 'Garland', 'Flower', 'Lei', 'Honey'],
        correct: 'Garland',
        explanation: '(Cod)dle -> Cod | (Gar)land -> Gar',
      },
      {
        hint: 'Charcoal',
        answers: ['Tile', 'Window', 'Wood', 'Stone', 'Carpet'],
        correct: 'Carpet',
        explanation: '(Char)coal -> Char | (Carp)et -> Carp',
      },
    ],
  },
  '20241209': {
    rule: {
      pattern: 'Hidden Trees',
      explanation: 'the name of a tree is hidden in hint and answer',
    },
    sets: [
      {
        hint: 'Cloak',
        answers: ['Sword', 'Captain', 'Helm', 'Guide', 'Shield'],
        correct: 'Helm',
        explanation: 'Cl(oak) -> Oak | H(elm) -> Elm',
      },
      {
        hint: 'Steak',
        answers: ['Claim', 'Money', 'Gold', 'Cash', 'Award'],
        correct: 'Cash',
        explanation: 'S(teak) -> Teak | C(ash) -> Ash',
      },
      {
        hint: 'Spine',
        answers: ['Confirm', 'Agree', 'Deny', 'Knee', 'Hip'],
        correct: 'Confirm',
        explanation: 'S(pine) -> Pine | Con(fir)m -> Fir',
      },
      {
        hint: 'Naplam',
        answers: ['Maim', 'Scar', 'Difigure', 'Explode', 'Erupt'],
        correct: 'Disfigure',
        explanation: 'Na(palm) -> Palm | Dis(fig)ure -> Fig',
      },
    ],
  },
  '20241210': {
    rule: {
      pattern: 'Adam or Addams',
      explanation: 'associated with Adam or Addams',
    },
    sets: [
      {
        hint: 'Driver',
        answers: ['Flea', 'Worm', 'Gnat', 'Moth', 'Ant'],
        correct: 'Ant',
        explanation: 'Adam Driver | Adam Ant',
      },
      {
        hint: 'Eve',
        answers: ['Thigh', 'Wing', 'Rib', 'Loin', 'Shank'],
        correct: 'Rib',
        explanation: "Adam and Eve | Adam's Rib",
      },
      {
        hint: 'West',
        answers: ['Apple', 'Orange', 'Pear', 'Plum', 'Peach'],
        correct: 'Apple',
        explanation: "Adam West | Adam's Apple",
      },
      {
        hint: 'Family',
        answers: ['Sunday', 'Monday', 'Week', 'Wednesday', 'Month'],
        correct: 'Wednesday',
        explanation: 'Addams Family | Wednesday Addams',
      },
    ],
  },
}
// the first 2 letters of the hint reference a state abbreviation and the answer is a neighboring state of the hint
//  -- Arrange & Laugh (Arkansas | Louisiana)
//  -- Insert & Illicit (Indiana | Illinois) -- Gain & Scar (Georgia | South Carolina)
//  -- Debate & Pattern (Delaware | Pennsylvania)

//associations
//Me & Rabbit = IHOP , Tiny Roman = Little Caesars, Under Method = Subway
