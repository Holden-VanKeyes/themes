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
//test small change
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

type AnswerKeyOLD = {
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

export const answerKeyOLD: AnswerKeyOLD = {
  '20250220': {
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
        explanation: "cheddar -> 'dd'",
      },
      {
        hint: 'pinnacle',
        answers: ['acme', 'mountain', 'climber', 'craggy', 'volcano'],
        correct: 'craggy',
        explanation: "craggy -> 'gg'",
      },
      {
        hint: 'baseball',
        answers: ['bat', 'strike', 'mitt', 'umpire', 'natural'],
        correct: 'mitt',
        explanation: "mitt -> 'tt'",
      },
      {
        hint: 'channel',
        answers: ['television', 'England', 'teller', 'loch', 'remote'],
        correct: 'teller',
        explanation: "teller -> 'll'",
      },
    ],
  },
  '20250223': {
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
  '20250224': {
    rule: {
      pattern: 'Drop the last letter',
      explanation:
        'Remove the last letter of each correct answer to find another valid word',
    },
    sets: [
      {
        hint: 'paint',
        answers: ['coat', 'hue', 'kind', 'color', 'enamel'],
        correct: 'kind',
        explanation: 'paint - t = pain & kind - k = kin',
      },
      {
        hint: 'waver',
        answers: ['staff', 'wizard', 'story', 'theme', 'legend'],
        correct: 'theme',
        explanation: 'waver - r = wave & theme - e = them',
      },
      {
        hint: 'spare',
        answers: ['chain', 'rope', 'extra', 'empty', 'gone'],
        correct: 'chain',
        explanation: 'spare - e = spar & chain - n = chai',
      },
      {
        hint: 'meant',
        answers: ['deserted', 'bare', 'spice', 'understood', 'felt'],
        correct: 'bare',
        explanation: 'meant - t = mean & bare - e = bar',
      },
    ],
  },
  '20250225': {
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
        explanation: 'REcord (noun) VS. reCORD (verb) ',
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
  '20250226': {
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
        explanation: "Woodstock has double 'o'",
      },
      {
        hint: 'Stool Pigeon',
        answers: ['Parakeet', 'Rat Fink', 'Parrot', 'Carrot', 'Heckle'],
        correct: 'Parakeet',
        explanation: "Parakeet has a double 'e'",
      },
      {
        hint: 'Radii',
        answers: ['Pie', 'Power', 'Circumference', 'Circle', 'Floor'],
        correct: 'Floor',
        explanation: "Floor has a double 'o'",
      },
      {
        hint: 'Noon',
        answers: ['Pita', 'Falafel', 'None', 'Nun', 'Naan'],
        correct: 'Naan',
        explanation: "Naan has a double 'a'",
      },
    ],
  },
  '20250227': {
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
  '20250228': {
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
  '20250301': {
    rule: {
      pattern: 'The color pink',
      explanation: 'all answers are associted with pink',
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
  '20250302': {
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
  '20250303': {
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
  '20250304': {
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
  '20250305': {
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
  '20250306': {
    rule: {
      pattern: 'Subtract To Make New',
      explanation:
        'Remove letters from the end of the hint and pair with answer to get something else',
    },
    sets: [
      {
        hint: 'Guard',
        answers: ['Mint', 'Breath', 'Toothpaste', 'Mouthwash', 'Gum'],
        correct: 'Gum',
        explanation: 'Guard - d = Guar Gum',
      },
      {
        hint: 'Highlight',
        answers: ['Times', 'Plus', 'Minus', 'Sine', 'Equals'],
        correct: 'Times',
        explanation: 'Highlight - light = High Times (magazine)',
      },
      {
        hint: 'Freeway',
        answers: ['Electrician', 'Plumber', 'Framer', 'Mason', 'Boss'],
        correct: 'Mason',
        explanation: 'Freeway - way = Free Mason',
      },
      {
        hint: 'Brief',
        answers: ['Smile', 'Cheese', 'Pose', 'Grin', 'Laugh'],
        correct: 'Cheese',
        explanation: 'Brief - f = Brie Cheese',
      },
    ],
  },
  '20250307': {
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
  //TODO this one needs work
  '20250308': {
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
  '20250309': {
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
  '20250310': {
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
  '20250311': {
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
  '20250312': {
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
  '20250313': {
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
  '20250314': {
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
  '20250315': {
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
  '20250316': {
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
  '20250317': {
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
  '20250318': {
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
  '20250319': {
    rule: {
      pattern: 'Hidden Public Figures',
      explanation:
        'Remove letters from the end of the hint and pair with answer to get a public figure',
    },
    sets: [
      {
        hint: 'Rude',
        answers: ['John', 'Paul', 'George', 'Ringo', 'Billy'],
        correct: 'Paul',
        explanation: 'Rude - de = RuPaul',
      },
      {
        hint: 'Question',
        answers: ['Happiness', 'Live', 'Laugh', 'Love', 'Hate'],
        correct: 'Love',
        explanation: 'Question - ion = Quest Love',
      },
      {
        hint: 'Tomato',
        answers: ['Green', 'Red', 'Cherry', 'Plum', 'Paste'],
        correct: 'Green',
        explanation: 'Tomato - ato = Tom Green',
      },
      {
        hint: 'Abetted',
        answers: ['Kennedy', 'Reagan', 'Nixon', 'Taft', 'Lincoln'],
        correct: 'Lincoln',
        explanation: 'Abetted - tted = Abe Lincoln',
      },
    ],
  },
  '20250320': {
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
  '20250321': {
    rule: {
      pattern: 'One to the other',
      explanation:
        'The answer can be combined with each word from the hint to form a phrase',
    },
    sets: [
      {
        hint: 'Alter Trip',
        answers: ['Change', 'Fix', 'Ego', 'Fight', 'Vacation'],
        correct: 'Ego',
        explanation: 'Alter Ego | Ego Trip',
      },
      {
        hint: 'Average Camel',
        answers: ['Joe', 'Par', 'Normal', 'Desert', 'Oasis'],
        correct: 'Joe',
        explanation: 'Average Joe | Joe Camel',
      },
      {
        hint: 'Cats Liner',
        answers: ['Ear', 'Nose', 'Mouth', 'Eye', 'Whiskers'],
        correct: 'Eye',
        explanation: 'Cats Eye | Eye Liner',
      },
      {
        hint: 'Bad Brother',
        answers: ['Wolf', 'Sister', 'Big', 'Plasma', 'Blood'],
        correct: 'Blood',
        explanation: 'Bad Blood | Blood Brother',
      },
    ],
  },
  '20250322': {
    rule: {
      pattern: 'Famous Organization Acronyms',
      explanation:
        'First letter of each word in the hint/answer combines into an acronym',
    },
    sets: [
      {
        hint: 'Ice Racing Squad',
        answers: [
          'Elephants Painting Avocados',
          'Peaches Go Bad',
          'Big Fish Nets',
          'Down Dusty Roads',
          'Hey There Tiger',
        ],
        correct: 'Elephants Painting Avocados',
        explanation:
          'IRS = Internal Revenue Service | EPA = Environmental Protection Agency',
      },
      {
        hint: 'Whales Have Odor',
        answers: [
          'Yeah Yeah Yeah',
          'Ok Ok Ok',
          'Blah Blah Blah',
          'Enough Is Enough',
          'Repeat That Please',
        ],
        correct: 'Blah Blah Blah',
        explanation:
          'WHO = World Health Organization | BBB = Better Business Bureau',
      },
      {
        hint: 'Clowns Drink Cranberry',
        answers: [
          'Nuns Go Hunting',
          'No One Knows',
          'Not Reasonable Actors',
          'New Kid Prank',
          'Now Your Talking',
        ],
        correct: 'Not Reasonable Actors',
        explanation:
          'CDC = Centers for Disease Control | NRA = National Rifle Association',
      },
      {
        hint: 'Island Of Canada',
        answers: [
          'Stamps On Passports',
          'Do Not Eat',
          'Once Daily Dose',
          'Same As Ever',
          'It Moves Freely',
        ],
        correct: 'It Moves Freely',
        explanation:
          'IOC = International Olympic Committee | IMF = International Monetary Fund',
      },
    ],
  },
  '20250323': {
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
        answers: ['Aristotle', 'Napolean', 'Caesar', 'Rome', 'Gladiator'],
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
  '20250324': {
    rule: {
      pattern: 'As a [type]',
      explanation: 'Well known phrases using as a',
    },
    sets: [
      {
        hint: 'Quiet',
        answers: ['Cheese', 'Study', 'Tree', 'Barnacle', 'Mouse'],
        correct: 'Mouse',
        explanation: 'Quiet as a mouse',
      },
      {
        hint: 'Fit',
        answers: ['Guitar', 'Fiddle', 'Violin', 'Cello', 'Harp'],
        correct: 'Fiddle',
        explanation: 'Fit as a fiddle',
      },
      {
        hint: 'Drunk',
        answers: ['Zebra', 'Newspaper', 'Badger', 'Skunk', 'Television'],
        correct: 'Skunk',
        explanation: 'Drunk as a skunk',
      },
      {
        hint: 'Sly',
        answers: ['Hottie', 'Fox', 'Babe', 'Sexy', 'Beast'],
        correct: 'Fox',
        explanation: 'Sly as a fox',
      },
    ],
  },
  '20250325': {
    rule: {
      pattern: 'Candy bars',
      explanation: 'Types of candy bars',
    },
    sets: [
      {
        hint: 'Crunch',
        answers: ['Hills', 'Snap', 'Bumps', 'Mounds', 'Break'],
        correct: 'Mounds',
        explanation: 'Crunch bar (Nestlé) | Mounds bar (Hershey',
      },
      {
        hint: 'Mars',
        answers: ['Saturn', 'Pluto', 'Milky Way', 'Andromeda', 'Black Hole'],
        correct: 'Milky Way',
        explanation: 'Mars bar (Mars, Inc.) | Milky Way bar (Mars, Inc.)',
      },
      {
        hint: 'Oh Henry!',
        answers: [
          'Hot Piece',
          'Major Babe',
          'Perfect 10',
          'Handsome Buck',
          'Big Hunk',
        ],
        correct: 'Big Hunk',
        explanation:
          'Oh Henry! bar (Hershey/Ferrero) | Big Hunk bar (Annabelle Candy)',
      },
      {
        hint: 'Yorkie',
        answers: ['Dove', 'Wren', 'Flamingo', 'Emu', 'Robin'],
        correct: 'Dove',
        explanation: 'Yorkie bar (Nestlé) | Dove bar (Mars, Inc.)',
      },
    ],
  },
  '20250326': {
    rule: {
      pattern: 'Right down the middle',
      explanation:
        'Slot the answer in the middle of the hint to reveal 3 unique phrases',
    },
    sets: [
      {
        hint: 'Breakfast Hop',
        answers: [
          'Taco Bell',
          'Pizza Hut',
          'Panda Express',
          'Shake Shack',
          'Red Lobster',
        ],
        correct: 'Taco Bell',
        explanation: 'Breakfast Taco | Taco Bell | Bell Hop',
      },
      {
        hint: 'Burger Pool',
        answers: [
          'Summer Solstice',
          'New Moon',
          'King Tide',
          'Leap Year',
          'Lunar Eclipse',
        ],
        correct: 'King Tide',
        explanation: 'Burger King | King Tide | Tide Pool',
      },
      {
        hint: 'Flower Shock',
        answers: [
          'Soup Dumpling',
          'Pot Sticker',
          'Fried Gyoza',
          'Bao Bun',
          'Dim Sum',
        ],
        correct: 'Pot Sticker',
        explanation: 'Flower Pot | Pot Sticker | Sticker Shock',
      },
      {
        hint: 'Front Dance',
        answers: [
          'Porch Swing',
          'Sun Sail',
          'Swing Set',
          'Kiddie Pool',
          'Lawn Chair',
        ],
        correct: 'Porch Swing',
        explanation: 'Front Porch | Porch Swing | Swing Dance',
      },
    ],
  },
}

// '20250322': {
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
// the first 2 letters of the hint reference a state abbreviation and the answer is a neighboring state of the hint
//  -- Arrange & Laugh (Arkansas | Louisiana)
//  -- Insert & Illicit (Indiana | Illinois) -- Gain & Scar (Georgia | South Carolina)
//  -- Debate & Pattern (Delaware | Pennsylvania)

//associations
//Me & Rabbit = IHOP , Tiny Roman = Little Caesars, Under Method = Subway
