// LANDING PERMIT — word bank
// Each day is an array of exactly 7 items in difficulty order:
//   Q1 quite easy, Q2 moderate, Q3 hard, Q4–Q7 genuinely rare words.
// Item shape: { word, sentence, options: [4 strings], answer: index 0–3 }
// Australian English spelling throughout.

// Day 1 (Ticket #1). Every later local date counts up from here.
export const LAUNCH_DATE = '2026-10-12';

export const DAYS = [
  // ── Ticket #1 ─────────────────────────────
  [
    {
      word: "flag",
      sentence: "By the third hour of the working bee our energy had started to flag, so someone did a pie run.",
      options: ["spread around", "turn competitive", "fade or weaken", "build up"],
      answer: 2
    },
    {
      word: "laconic",
      sentence: "My uncle is famously laconic: his entire best-man speech ran to eleven words, two of which were 'cheers'.",
      options: ["sparing with words", "terribly sentimental", "fond of a drink", "dryly sarcastic"],
      answer: 0
    },
    {
      word: "nugatory",
      sentence: "The committee spent forty minutes on the agenda's font, a nugatory debate that changed absolutely nothing.",
      options: ["fiercely contested", "trivial and pointless", "long overdue", "endlessly recurring"],
      answer: 1
    },
    {
      word: "apricity",
      sentence: "On cold July mornings the cat follows the apricity across the lounge-room floor, moving whenever the shadow catches up.",
      options: ["warm air from the heater", "warmth of the winter sun", "smell of frying bacon", "robot vacuum's path"],
      answer: 1
    },
    {
      word: "absquatulate",
      sentence: "When the bill arrived, my cousin remembered an urgent phone call and managed to absquatulate before anyone noticed.",
      options: ["pocket the mints", "pay the whole bill", "make a hasty exit", "order another round"],
      answer: 2
    },
    {
      word: "snollygoster",
      sentence: "He promised a hospital in every suburb, scrapped the lot the day after winning, and was rightly called a snollygoster.",
      options: ["naive idealist", "political newcomer", "reckless spender", "unprincipled schemer"],
      answer: 3
    },
    {
      word: "psithurism",
      sentence: "Lying in the hammock with my eyes shut, I listened to the psithurism as each gust stirred the gums overhead.",
      options: ["hum of distant traffic", "drone of cicadas", "chatter of lorikeets", "rustling of the leaves"],
      answer: 3
    },
  ],
  // ── Ticket #2 ─────────────────────────────
  [
    {
      word: "husband",
      sentence: "With the tank nearly empty and forty kilometres to the next town, we had to husband every drop of fuel.",
      options: ["pay dearly for", "use very sparingly", "keep topping up", "carefully measure"],
      answer: 1
    },
    {
      word: "obsequious",
      sentence: "The waiter was so obsequious that by dessert we'd been called 'sir' forty times and couldn't finish a sentence.",
      options: ["flustered and forgetful", "nosy and intrusive", "chatty and overfamiliar", "servile and fawning"],
      answer: 3
    },
    {
      word: "jejune",
      sentence: "The reviewer dismissed the novel's politics as jejune, the sort of thing you'd hear at a first-year uni party.",
      options: ["bitterly cynical", "slyly ironic", "naive and simplistic", "dangerously extreme"],
      answer: 2
    },
    {
      word: "groak",
      sentence: "My nephew never asks for treats; he just stands at the kitchen bench and groaks until somebody cracks.",
      options: ["stares hopefully", "hums pointedly", "drums his fingers", "sighs very loudly"],
      answer: 0
    },
    {
      word: "zarf",
      sentence: "Our takeaway cups have no handles, so the barista slips each one into a zarf before handing it over.",
      options: ["paper bag", "cardboard tray", "heatproof sleeve", "branded napkin"],
      answer: 2
    },
    {
      word: "borborygmus",
      sentence: "In the silent exam hall my borborygmus was so loud that the student beside me offered half her muesli bar.",
      options: ["stomach rumbling", "pen clicking", "constant sniffing", "nervous humming"],
      answer: 0
    },
    {
      word: "quidnunc",
      sentence: "Our street's resident quidnunc knew about the engagement before our parents did, and had already told the postie.",
      options: ["jeweller", "fortune teller", "matchmaker", "busybody"],
      answer: 3
    },
  ],
  // ── Ticket #3 ─────────────────────────────
  [
    {
      word: "smart",
      sentence: "Three days after the bike accident, the graze on her knee still smarted whenever she stretched it.",
      options: ["split open", "stung sharply", "turned purple", "itched badly"],
      answer: 1
    },
    {
      word: "garrulous",
      sentence: "Our garrulous driver covered his divorce, his sourdough starter and the trade deficit before we'd left the airport.",
      options: ["relentlessly upbeat", "nervously jittery", "hopelessly lost", "endlessly talkative"],
      answer: 3
    },
    {
      word: "lugubrious",
      sentence: "The busker played a lugubrious version of 'Happy Birthday' in a minor key, and the birthday girl burst into tears.",
      options: ["fast and frantic", "gloomy and mournful", "sly and mocking", "loud and jarring"],
      answer: 1
    },
    {
      word: "gongoozler",
      sentence: "A small crowd of gongoozlers gathered on the bridge to watch the canal boat squeeze through the lock.",
      options: ["idle onlookers", "anglers", "lock keepers", "rowing coaches"],
      answer: 0
    },
    {
      word: "vomitory",
      sentence: "After the encore, thousands of fans poured out through the vomitories and down the hill to the train station.",
      options: ["merchandise tents", "first-aid stations", "exit passageways", "food stalls"],
      answer: 2
    },
    {
      word: "velleity",
      sentence: "Learning Italian was only ever a velleity for me; I bought the textbook in 2019 and never opened it.",
      options: ["passing wish", "family tradition", "lifelong dream", "school requirement"],
      answer: 0
    },
    {
      word: "jentacular",
      sentence: "Every day began with Grandpa's jentacular ritual: strong tea, two boiled eggs, the cryptic crossword and the radio news.",
      options: ["solitary", "old-fashioned", "superstitious", "breakfast-time"],
      answer: 3
    },
  ],
  // ── Ticket #4 ─────────────────────────────
  [
    {
      word: "pedestrian",
      sentence: "The film looked gorgeous, but the script was so pedestrian that I guessed every twist half an hour early.",
      options: ["darkly violent", "rushed and messy", "dull and unimaginative", "overly complicated"],
      answer: 2
    },
    {
      word: "perfunctory",
      sentence: "The doctor gave my sore ankle a perfunctory glance, wrote 'rest' on a sticky note and called the next patient.",
      options: ["puzzled and doubtful", "warm and sympathetic", "brief and half-hearted", "long and worried"],
      answer: 2
    },
    {
      word: "otiose",
      sentence: "The editor cut the final paragraph as otiose, since it only repeated what the opening had already said.",
      options: ["superfluous", "too technical", "overly emotional", "legally risky"],
      answer: 0
    },
    {
      word: "mumpsimus",
      sentence: "Dad remains a proud mumpsimus, still ordering an 'expresso' thirty years after a barista first corrected him.",
      options: ["coffee snob", "stubborn blunderer", "loyal regular", "fussy customer"],
      answer: 1
    },
    {
      word: "pandiculation",
      sentence: "The cat woke from her nap with a luxurious pandiculation, every claw extended, then strolled off to inspect her bowl.",
      options: ["rumbling purr", "full-body shake", "plaintive meow", "stretch and yawn"],
      answer: 3
    },
    {
      word: "widdershins",
      sentence: "The ballet teacher had us spin clockwise, then widdershins, so we wouldn't only ever get dizzy on one side.",
      options: ["anticlockwise", "at double speed", "with eyes shut", "on our toes"],
      answer: 0
    },
    {
      word: "lagniappe",
      sentence: "The fishmonger threw in a handful of prawns as lagniappe, the way he does for his regulars every Christmas.",
      options: ["an apology", "a little bonus", "a price match", "a garnish"],
      answer: 1
    },
  ],
  // ── Ticket #5 ─────────────────────────────
  [
    {
      word: "table",
      sentence: "The minister will table the report in parliament on Tuesday, after which journalists can finally read it.",
      options: ["postpone indefinitely", "officially reject", "formally present", "quietly bury"],
      answer: 2
    },
    {
      word: "truculent",
      sentence: "The truculent customer jabbed his finger at the cashier and threatened to have her sacked over a twenty-cent discount.",
      options: ["visibly flustered", "penny-pinching", "spoiling for a fight", "badly confused"],
      answer: 2
    },
    {
      word: "louche",
      sentence: "The bar had a louche charm: velvet booths, cigarette burns in the carpet and a bartender who asked no questions.",
      options: ["strictly formal", "homely and rustic", "bright and breezy", "seedy and disreputable"],
      answer: 3
    },
    {
      word: "ultracrepidarian",
      sentence: "My brother is a born ultracrepidarian: one YouTube video and he's lecturing the plumber about water pressure.",
      options: ["DIY enthusiast", "self-appointed expert", "conspiracy theorist", "penny-pincher"],
      answer: 1
    },
    {
      word: "brabble",
      sentence: "The twins would brabble for an hour over who got the bigger half of the last Tim Tam.",
      options: ["bargain politely", "plot quietly", "sulk silently", "squabble noisily"],
      answer: 3
    },
    {
      word: "gardyloo",
      sentence: "Our upstairs neighbour yelled 'Gardyloo!' a split second before a bucket of mop water splashed into the courtyard.",
      options: ["Watch out below!", "Lovely morning!", "Terribly sorry!", "Somebody help!"],
      answer: 0
    },
    {
      word: "hebetude",
      sentence: "The long-haul flight left me in a state of hebetude, staring at the baggage carousel without registering a single bag.",
      options: ["deep irritation", "mental dullness", "giddy relief", "quiet panic"],
      answer: 1
    },
  ],
  // ── Ticket #6 ─────────────────────────────
  [
    {
      word: "wanting",
      sentence: "The new stadium looked impressive, but its public transport links were found sadly wanting on grand final day.",
      options: ["inadequate", "unfinished", "unpopular", "overpriced"],
      answer: 0
    },
    {
      word: "mendacious",
      sentence: "The inquiry found the CEO's statements mendacious, given the emails showing he'd known about the faults all along.",
      options: ["arrogant and rude", "vague and rambling", "careless and sloppy", "deliberately untruthful"],
      answer: 3
    },
    {
      word: "crepuscular",
      sentence: "Wombats are largely crepuscular, so the best time to spot one is on the drive home as the light fades.",
      options: ["extremely shy", "active at twilight", "fiercely territorial", "solitary by nature"],
      answer: 1
    },
    {
      word: "cachinnate",
      sentence: "Whenever the comedian paused, a man in the front row would cachinnate, wiping his eyes and gasping for breath.",
      options: ["cough violently", "sob noisily", "sneeze repeatedly", "laugh loudly"],
      answer: 3
    },
    {
      word: "tatterdemalion",
      sentence: "Under the bridge sat a tatterdemalion figure, coat held together with safety pins, playing a surprisingly beautiful violin.",
      options: ["gloomy and solitary", "hooded and mysterious", "ragged and scruffy", "elderly and frail"],
      answer: 2
    },
    {
      word: "sternutation",
      sentence: "Spring in Canberra brings a chorus of sternutation from every office as the wattle comes into bloom.",
      options: ["sneezing", "sniggering", "whistling", "grumbling"],
      answer: 0
    },
    {
      word: "mullock",
      sentence: "The old goldfields around Bendigo are still dotted with mullock heaps left behind by nineteenth-century miners.",
      options: ["charcoal", "firewood", "mining waste", "rusted machinery"],
      answer: 2
    },
  ],
  // ── Ticket #7 ─────────────────────────────
  [
    {
      word: "quail",
      sentence: "When thirty Year 9s stared her down, the new teacher began to quail, and by recess she'd asked to swap classes.",
      options: ["shrink in fear", "improvise wildly", "lecture sternly", "crack jokes"],
      answer: 0
    },
    {
      word: "sanguine",
      sentence: "Despite the forecast of storms, the organisers remained sanguine about the outdoor concert going ahead.",
      options: ["secretive", "undecided", "anxious", "optimistic"],
      answer: 3
    },
    {
      word: "recondite",
      sentence: "Her thesis dealt with a recondite corner of medieval tax law that perhaps six people on Earth fully understand.",
      options: ["long outdated", "utterly fascinating", "hotly controversial", "deeply obscure"],
      answer: 3
    },
    {
      word: "bumbershoot",
      sentence: "Grandad always took his bumbershoot to the cricket, partly for the rain and partly to poke umpires he disagreed with.",
      options: ["walking stick", "umbrella", "transistor radio", "picnic rug"],
      answer: 1
    },
    {
      word: "kenspeckle",
      sentence: "With his orange beard and two-metre frame, Rory was so kenspeckle that he could never sneak into lectures late.",
      options: ["clumsy", "noisy", "conspicuous", "well liked"],
      answer: 2
    },
    {
      word: "opsimath",
      sentence: "My mum became an opsimath at seventy, enrolling in Mandarin, life drawing and a certificate in astronomy.",
      options: ["late learner", "globetrotter", "volunteer", "retiree"],
      answer: 0
    },
    {
      word: "embrangle",
      sentence: "One innocent question about the fence managed to embrangle us in the neighbours' twenty-year feud; now both sides want our support.",
      options: ["fill us in on", "drag us into", "put us off", "amuse us with"],
      answer: 1
    },
  ],
  // ── Ticket #8 ─────────────────────────────
  [
    {
      word: "bolt",
      sentence: "She bought a bolt of linen at the warehouse sale and has been sewing curtains for every room ever since.",
      options: ["sample swatch", "single metre", "large roll", "small offcut"],
      answer: 2
    },
    {
      word: "diffident",
      sentence: "Though clearly the best player on the team, she was diffident about her talent and rarely took the final shot.",
      options: ["quietly arrogant", "deeply secretive", "rather careless", "lacking in confidence"],
      answer: 3
    },
    {
      word: "tendentious",
      sentence: "The documentary was so tendentious that every expert interviewed just happened to agree with the director.",
      options: ["one-sided", "long-winded", "low-budget", "sentimental"],
      answer: 0
    },
    {
      word: "tonsorial",
      sentence: "My first tonsorial appointment after six months of lockdown hair took nearly two hours.",
      options: ["at the dentist's", "at the barber's", "at the bank", "at the vet's"],
      answer: 1
    },
    {
      word: "cruciverbalist",
      sentence: "As a keen cruciverbalist, Nan finishes the Saturday cryptic in pen before her first cup of tea goes cold.",
      options: ["speed reader", "early riser", "crossword lover", "sudoku fan"],
      answer: 2
    },
    {
      word: "horripilation",
      sentence: "The choir's final note hung in the cathedral, and I felt a wave of horripilation run up both my arms.",
      options: ["goosebumps", "pins and needles", "muscle cramp", "nervous itching"],
      answer: 0
    },
    {
      word: "rodomontade",
      sentence: "Between bouts, the boxer's rodomontade about knocking out every champion alive filled most of the press conference.",
      options: ["legal threats", "boastful bluster", "humble thanks", "nervous rambling"],
      answer: 1
    },
  ],
  // ── Ticket #9 ─────────────────────────────
  [
    {
      word: "fast",
      sentence: "The ute's wheels were stuck fast in the mud, so we sat and waited for a farmer with a tractor.",
      options: ["partially", "suddenly", "immovably", "temporarily"],
      answer: 2
    },
    {
      word: "querulous",
      sentence: "By hour six of the road trip, the querulous voice from the back seat had asked 'are we there yet?' forty times.",
      options: ["sleepy", "whingeing", "sing-song", "excited"],
      answer: 1
    },
    {
      word: "fulsome",
      sentence: "The chairman's fulsome praise for the departing CEO rang hollow, given he'd forced her resignation a week earlier.",
      options: ["warm and heartfelt", "vague and rambling", "excessive and insincere", "brief and grudging"],
      answer: 2
    },
    {
      word: "agelast",
      sentence: "Even the clown's best routine couldn't raise a smile from my uncle, a lifelong agelast.",
      options: ["night-shift worker", "retired comedian", "tone-deaf critic", "one who never laughs"],
      answer: 3
    },
    {
      word: "purlicue",
      sentence: "To hold chopsticks properly, rest the bottom one in your purlicue and let your ring finger support it.",
      options: ["cupped palm", "fingertips", "middle knuckle", "thumb's webbing"],
      answer: 3
    },
    {
      word: "virga",
      sentence: "From the plane we could see virga trailing beneath the clouds, though not a drop reached the parched paddocks below.",
      options: ["falling rain", "bushfire smoke", "jet contrails", "flocks of birds"],
      answer: 0
    },
    {
      word: "hodiernal",
      sentence: "The newspaper's hodiernal weather box was useless by mid-morning, when an unforecast storm rolled in.",
      options: ["colourful", "today's", "weekly", "regional"],
      answer: 1
    },
  ],
  // ── Ticket #10 ─────────────────────────────
  [
    {
      word: "champion",
      sentence: "She spent a decade championing bike lanes on council, long before they were popular with voters.",
      options: ["riding in", "fighting against", "designing", "pushing for"],
      answer: 3
    },
    {
      word: "parsimonious",
      sentence: "My grandfather was so parsimonious he'd drive right across town to claim the ten-cent refund on a single can.",
      options: ["environmentally minded", "absent-minded", "miserly", "law-abiding"],
      answer: 2
    },
    {
      word: "pellucid",
      sentence: "Her pellucid explanation of tax brackets finally made sense to a room full of confused first-year apprentices.",
      options: ["crystal clear", "rather rushed", "long-winded", "highly technical"],
      answer: 0
    },
    {
      word: "smellfungus",
      sentence: "Every holiday has its smellfungus, and on ours it was Gary, who said the beach was too sandy and the sunset 'a bit much'.",
      options: ["grumbler", "tour guide", "food critic", "early riser"],
      answer: 0
    },
    {
      word: "glabella",
      sentence: "Years of frowning at spreadsheets have carved two deep lines into my glabella.",
      options: ["point of the chin", "tip of the nose", "middle of the brow", "edge of the jaw"],
      answer: 2
    },
    {
      word: "matutinal",
      sentence: "Our street's magpies are relentlessly matutinal, warbling outside my window at least an hour before my alarm.",
      options: ["territorial", "inquisitive", "sociable", "early-rising"],
      answer: 3
    },
    {
      word: "collop",
      sentence: "The butcher cut us four thick collops of venison and told us to sear them hot and fast.",
      options: ["racks", "slices", "joints", "shanks"],
      answer: 1
    },
  ],
  // ── Ticket #11 ─────────────────────────────
  [
    {
      word: "spare",
      sentence: "The old drover was tall and spare, all wiry muscle and weathered skin after fifty years on horseback.",
      options: ["stooped", "quiet", "lean", "unhurried"],
      answer: 2
    },
    {
      word: "ebullient",
      sentence: "Our ebullient tour guide sang, cracked jokes and high-fived strangers, even in the pouring rain.",
      options: ["long-winded", "underpaid", "jittery", "exuberant"],
      answer: 3
    },
    {
      word: "saturnine",
      sentence: "The bass player was a saturnine presence on stage, rarely moving and glowering at anyone who clapped off the beat.",
      options: ["sloppy and careless", "sullen and brooding", "towering and imposing", "flamboyant and showy"],
      answer: 1
    },
    {
      word: "cockalorum",
      sentence: "The new regional manager, a strutting little cockalorum, renamed the tearoom after himself in his first week.",
      options: ["pompous upstart", "penny-pincher", "health fanatic", "nervous wreck"],
      answer: 0
    },
    {
      word: "hobbledehoy",
      sentence: "At fifteen my brother was a gangly hobbledehoy, all elbows and cracking voice, forever tripping over his own feet.",
      options: ["awkward youth", "class clown", "troublemaker", "bookworm"],
      answer: 0
    },
    {
      word: "sastrugi",
      sentence: "Crossing the plateau, the expedition's sleds bounced over sastrugi carved by weeks of relentless wind.",
      options: ["fallen ice blocks", "seal breathing holes", "hidden crevasses", "hard snow ridges"],
      answer: 3
    },
    {
      word: "sennight",
      sentence: "In winter the ferry calls only once a sennight, so the island's Tuesday market is the busiest day of the week.",
      options: ["full moon", "week", "fortnight", "month"],
      answer: 1
    },
  ],
  // ── Ticket #12 ─────────────────────────────
  [
    {
      word: "sanction",
      sentence: "The school finally sanctioned the students' plan to turn the old car park into a vegie garden, budget and all.",
      options: ["debated", "postponed", "penalised", "approved"],
      answer: 3
    },
    {
      word: "capricious",
      sentence: "The capricious Melbourne weather gave us sunshine, hail and a rainbow before the footy had even reached half-time.",
      options: ["bitterly cold", "gloomy", "fickle", "oppressive"],
      answer: 2
    },
    {
      word: "mordant",
      sentence: "Her mordant review of the restaurant ended by suggesting the chef consider a career in demolition.",
      options: ["glowing", "bitingly sarcastic", "carefully balanced", "rambling"],
      answer: 1
    },
    {
      word: "deipnosophist",
      sentence: "Every dinner party needs a deipnosophist like Priya, who can steer the table from politics to cheese without anyone noticing.",
      options: ["witty dinner guest", "wine buff", "master chef", "cheese connoisseur"],
      answer: 0
    },
    {
      word: "erinaceous",
      sentence: "After the haircut, my son's erinaceous new look had his classmates calling him 'Spike' for a month.",
      options: ["lopsided", "fluorescent", "hedgehog-like", "shiny"],
      answer: 2
    },
    {
      word: "cacoethes",
      sentence: "Every summer holiday my cacoethes for scribbling returns, and by late January I've filled three notebooks with half-finished stories.",
      options: ["natural talent", "irresistible urge", "old habit", "faint nostalgia"],
      answer: 1
    },
    {
      word: "crepitus",
      sentence: "The physio says the crepitus in my knee every time I squat is harmless, even if it startles people nearby.",
      options: ["crackling sound", "sharp twinge", "sudden buckling", "visible swelling"],
      answer: 0
    },
  ],
  // ── Ticket #13 ─────────────────────────────
  [
    {
      word: "temper",
      sentence: "The coach tempered her criticism with praise, so the team left the rooms disappointed but not crushed.",
      options: ["drowned out", "sharpened", "disguised", "softened"],
      answer: 3
    },
    {
      word: "munificent",
      sentence: "Thanks to a munificent donor, the regional library now has a new wing, free laptop loans and late opening hours.",
      options: ["lavishly generous", "eccentric", "publicity-hungry", "cautious"],
      answer: 0
    },
    {
      word: "anodyne",
      sentence: "The press release was carefully anodyne, saying a great deal about 'values' and nothing at all about the layoffs.",
      options: ["openly hostile", "highly technical", "safely bland", "deeply emotional"],
      answer: 2
    },
    {
      word: "hornswoggle",
      sentence: "The 'vintage' couch turned out to be flat-pack from 2015; the seller had completely hornswoggled us.",
      options: ["rushed", "swindled", "flattered", "ignored"],
      answer: 1
    },
    {
      word: "anfractuous",
      sentence: "The track to the lookout was so anfractuous that we passed the same sleepy wombat three times.",
      options: ["rocky", "muddy", "twisting", "steep"],
      answer: 2
    },
    {
      word: "gnomon",
      sentence: "The sundial in the botanic gardens had lost its gnomon to vandals, so it cast no shadow and told no time.",
      options: ["numbered face", "upright pointer", "compass rose", "engraved motto"],
      answer: 1
    },
    {
      word: "fugacious",
      sentence: "Photographers travel thousands of kilometres for the outback's fugacious wildflowers, hoping to arrive in the right week.",
      options: ["sweet-smelling", "carnivorous", "vividly coloured", "short-lived"],
      answer: 3
    },
  ],
  // ── Ticket #14 ─────────────────────────────
  [
    {
      word: "lumber",
      sentence: "As the only one of us with a ute, I always get lumbered with moving everyone's couches.",
      options: ["praised for", "excused from", "paid for", "stuck with"],
      answer: 3
    },
    {
      word: "intransigent",
      sentence: "Eleven hours in, both sides were as intransigent as when they'd started, and the pay talks collapsed.",
      options: ["exhausted", "poorly prepared", "unyielding", "evasive"],
      answer: 2
    },
    {
      word: "pusillanimous",
      sentence: "The council's pusillanimous response to the developer's threats disappointed residents who had hoped for a fight.",
      options: ["lengthy", "legalistic", "spineless", "furious"],
      answer: 2
    },
    {
      word: "hugger-mugger",
      sentence: "The merger was negotiated in hugger-mugger, with staff learning about it from a news alert on their phones.",
      options: ["good faith", "high spirits", "plain English", "secrecy"],
      answer: 3
    },
    {
      word: "callithumpian",
      sentence: "New Year's Eve on our street ends with a callithumpian parade of saucepans, kazoos and one very confused trombone.",
      options: ["raucous", "slow-moving", "candlelit", "fancy-dress"],
      answer: 0
    },
    {
      word: "brontide",
      sentence: "Residents near the fault line reported a strange brontide in the night, though the sky was perfectly clear.",
      options: ["smell of sulphur", "thunder-like rumble", "glow on the horizon", "flickering of lights"],
      answer: 1
    },
    {
      word: "ambsace",
      sentence: "Rolling snake eyes for the third time running, Kenji groaned about his ambsace and handed over his last Monopoly money.",
      options: ["rotten luck", "aching wrist", "empty wallet", "poor strategy"],
      answer: 0
    },
  ],
];
