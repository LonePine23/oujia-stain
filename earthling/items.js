// EARTHLING — word bank
// One array per day, seven items each, in difficulty order:
//   Q1 quite easy · Q2 moderate · Q3 hard · Q4–Q7 genuinely rare.
// Item: { word, sentence, options: [4 strings], answer: index 0–3 }
// Australian English throughout. Every word is checked against Webster's 1913,
// WordNet or Merriam-Webster before it goes in.
// When the days run out the game remixes them by itself (see itemsForDay in index.html).
// To add more, append whole days to the end of DAYS. Never edit or reorder past days.

// Day 1 = Ticket #1. Each local date after that counts up by one.
export const LAUNCH_DATE = '2026-10-12';

export const DAYS = [
  // #1 · Mon 12 Oct 2026
  [
    {"word": "flag", "sentence": "By the third hour of the working bee our energy had started to flag, so someone did a pie run.", "options": ["spread around", "turn competitive", "fade or weaken", "build up"], "answer": 2},
    {"word": "laconic", "sentence": "My uncle is famously laconic: his entire best-man speech ran to eleven words, two of which were 'cheers'.", "options": ["sparing with words", "terribly sentimental", "fond of a drink", "dryly sarcastic"], "answer": 0},
    {"word": "nugatory", "sentence": "The committee spent forty minutes on the agenda's font, a nugatory debate that changed absolutely nothing.", "options": ["fiercely contested", "trivial and pointless", "long overdue", "endlessly recurring"], "answer": 1},
    {"word": "apricity", "sentence": "On cold July mornings the cat follows the apricity across the lounge-room floor, moving whenever the shadow catches up.", "options": ["warm air from the heater", "warmth of the winter sun", "smell of frying bacon", "robot vacuum's path"], "answer": 1},
    {"word": "absquatulate", "sentence": "When the bill arrived, my cousin remembered an urgent phone call and managed to absquatulate before anyone noticed.", "options": ["pocket the mints", "pay the whole bill", "make a hasty exit", "order another round"], "answer": 2},
    {"word": "snollygoster", "sentence": "He promised a hospital in every suburb, scrapped the lot the day after winning, and was rightly called a snollygoster.", "options": ["naive idealist", "political newcomer", "reckless spender", "unprincipled schemer"], "answer": 3},
    {"word": "psithurism", "sentence": "Lying in the hammock with my eyes shut, I listened to the psithurism as each gust stirred the gums overhead.", "options": ["hum of distant traffic", "drone of cicadas", "chatter of lorikeets", "rustling of the leaves"], "answer": 3},
  ],
  // #2 · Tue 13 Oct 2026
  [
    {"word": "husband", "sentence": "With the tank nearly empty and forty kilometres to the next town, we had to husband every drop of fuel.", "options": ["pay dearly for", "use very sparingly", "keep topping up", "carefully measure"], "answer": 1},
    {"word": "obsequious", "sentence": "The waiter was so obsequious that by dessert we'd been called 'sir' forty times and couldn't finish a sentence.", "options": ["flustered and forgetful", "nosy and intrusive", "chatty and overfamiliar", "servile and fawning"], "answer": 3},
    {"word": "jejune", "sentence": "The reviewer dismissed the novel's politics as jejune, the sort of thing you'd hear at a first-year uni party.", "options": ["bitterly cynical", "slyly ironic", "naive and simplistic", "dangerously extreme"], "answer": 2},
    {"word": "groak", "sentence": "My nephew never asks for treats; he just stands at the kitchen bench and groaks until somebody cracks.", "options": ["stares hopefully", "hums pointedly", "drums his fingers", "sighs very loudly"], "answer": 0},
    {"word": "zarf", "sentence": "Our takeaway cups have no handles, so the barista slips each one into a zarf before handing it over.", "options": ["paper bag", "cardboard tray", "heatproof sleeve", "branded napkin"], "answer": 2},
    {"word": "borborygmus", "sentence": "In the silent exam hall my borborygmus was so loud that the student beside me offered half her muesli bar.", "options": ["stomach rumbling", "pen clicking", "constant sniffing", "nervous humming"], "answer": 0},
    {"word": "quidnunc", "sentence": "Our street's resident quidnunc knew about the engagement before our parents did, and had already told the postie.", "options": ["jeweller", "fortune teller", "matchmaker", "busybody"], "answer": 3},
  ],
  // #3 · Wed 14 Oct 2026
  [
    {"word": "smart", "sentence": "Three days after the bike accident, the graze on her knee still smarted whenever she stretched it.", "options": ["split open", "stung sharply", "turned purple", "itched badly"], "answer": 1},
    {"word": "garrulous", "sentence": "Our garrulous driver covered his divorce, his sourdough starter and the trade deficit before we'd left the airport.", "options": ["relentlessly upbeat", "nervously jittery", "hopelessly lost", "endlessly talkative"], "answer": 3},
    {"word": "lugubrious", "sentence": "The busker played a lugubrious version of 'Happy Birthday' in a minor key, and the birthday girl burst into tears.", "options": ["fast and frantic", "gloomy and mournful", "sly and mocking", "loud and jarring"], "answer": 1},
    {"word": "gongoozler", "sentence": "A small crowd of gongoozlers gathered on the bridge to watch the canal boat squeeze through the lock.", "options": ["idle onlookers", "anglers", "lock keepers", "rowing coaches"], "answer": 0},
    {"word": "vomitory", "sentence": "After the encore, thousands of fans poured out through the vomitories and down the hill to the train station.", "options": ["merchandise tents", "first-aid stations", "exit passageways", "food stalls"], "answer": 2},
    {"word": "velleity", "sentence": "Learning Italian was only ever a velleity for me; I bought the textbook in 2019 and never opened it.", "options": ["passing wish", "family tradition", "lifelong dream", "school requirement"], "answer": 0},
    {"word": "jentacular", "sentence": "Every day began with Grandpa's jentacular ritual: strong tea, two boiled eggs, the cryptic crossword and the radio news.", "options": ["solitary", "old-fashioned", "superstitious", "breakfast-time"], "answer": 3},
  ],
  // #4 · Thu 15 Oct 2026
  [
    {"word": "pedestrian", "sentence": "The film looked gorgeous, but the script was so pedestrian that I guessed every twist half an hour early.", "options": ["darkly violent", "rushed and messy", "dull and unimaginative", "overly complicated"], "answer": 2},
    {"word": "perfunctory", "sentence": "The doctor gave my sore ankle a perfunctory glance, wrote 'rest' on a sticky note and called the next patient.", "options": ["puzzled and doubtful", "warm and sympathetic", "brief and half-hearted", "long and worried"], "answer": 2},
    {"word": "otiose", "sentence": "The editor cut the final paragraph as otiose, since it only repeated what the opening had already said.", "options": ["superfluous", "too technical", "overly emotional", "legally risky"], "answer": 0},
    {"word": "mumpsimus", "sentence": "Dad remains a proud mumpsimus, still ordering an 'expresso' thirty years after a barista first corrected him.", "options": ["coffee snob", "stubborn blunderer", "loyal regular", "fussy customer"], "answer": 1},
    {"word": "pandiculation", "sentence": "The cat woke from her nap with a luxurious pandiculation, every claw extended, then strolled off to inspect her bowl.", "options": ["rumbling purr", "full-body shake", "plaintive meow", "stretch and yawn"], "answer": 3},
    {"word": "widdershins", "sentence": "The ballet teacher had us spin clockwise, then widdershins, so we wouldn't only ever get dizzy on one side.", "options": ["anticlockwise", "at double speed", "with eyes shut", "on our toes"], "answer": 0},
    {"word": "lagniappe", "sentence": "The fishmonger threw in a handful of prawns as lagniappe, the way he does for his regulars every Christmas.", "options": ["an apology", "a little bonus", "a price match", "a garnish"], "answer": 1},
  ],
  // #5 · Fri 16 Oct 2026
  [
    {"word": "table", "sentence": "The minister will table the report in parliament on Tuesday, after which journalists can finally read it.", "options": ["postpone indefinitely", "officially reject", "formally present", "quietly bury"], "answer": 2},
    {"word": "truculent", "sentence": "The truculent customer jabbed his finger at the cashier and threatened to have her sacked over a twenty-cent discount.", "options": ["visibly flustered", "penny-pinching", "spoiling for a fight", "badly confused"], "answer": 2},
    {"word": "louche", "sentence": "The bar had a louche charm: velvet booths, cigarette burns in the carpet and a bartender who asked no questions.", "options": ["strictly formal", "homely and rustic", "bright and breezy", "seedy and disreputable"], "answer": 3},
    {"word": "ultracrepidarian", "sentence": "My brother is a born ultracrepidarian: one YouTube video and he's lecturing the plumber about water pressure.", "options": ["DIY enthusiast", "self-appointed expert", "conspiracy theorist", "penny-pincher"], "answer": 1},
    {"word": "brabble", "sentence": "The twins would brabble for an hour over who got the bigger half of the last Tim Tam.", "options": ["bargain politely", "plot quietly", "sulk silently", "squabble noisily"], "answer": 3},
    {"word": "gardyloo", "sentence": "Our upstairs neighbour yelled 'Gardyloo!' a split second before a bucket of mop water splashed into the courtyard.", "options": ["Watch out below!", "Lovely morning!", "Terribly sorry!", "Somebody help!"], "answer": 0},
    {"word": "hebetude", "sentence": "The long-haul flight left me in a state of hebetude, staring at the baggage carousel without registering a single bag.", "options": ["deep irritation", "mental dullness", "giddy relief", "quiet panic"], "answer": 1},
  ],
  // #6 · Sat 17 Oct 2026
  [
    {"word": "wanting", "sentence": "The new stadium looked impressive, but its public transport links were found sadly wanting on grand final day.", "options": ["inadequate", "unfinished", "unpopular", "overpriced"], "answer": 0},
    {"word": "mendacious", "sentence": "The inquiry found the CEO's statements mendacious, given the emails showing he'd known about the faults all along.", "options": ["arrogant and rude", "vague and rambling", "careless and sloppy", "deliberately untruthful"], "answer": 3},
    {"word": "crepuscular", "sentence": "Wombats are largely crepuscular, so the best time to spot one is on the drive home as the light fades.", "options": ["extremely shy", "active at twilight", "fiercely territorial", "solitary by nature"], "answer": 1},
    {"word": "cachinnate", "sentence": "Whenever the comedian paused, a man in the front row would cachinnate, wiping his eyes and gasping for breath.", "options": ["cough violently", "sob noisily", "sneeze repeatedly", "laugh loudly"], "answer": 3},
    {"word": "tatterdemalion", "sentence": "Under the bridge sat a tatterdemalion figure, coat held together with safety pins, playing a surprisingly beautiful violin.", "options": ["gloomy and solitary", "hooded and mysterious", "ragged and scruffy", "elderly and frail"], "answer": 2},
    {"word": "sternutation", "sentence": "Spring in Canberra brings a chorus of sternutation from every office as the wattle comes into bloom.", "options": ["sneezing", "sniggering", "whistling", "grumbling"], "answer": 0},
    {"word": "mullock", "sentence": "The old goldfields around Bendigo are still dotted with mullock heaps left behind by nineteenth-century miners.", "options": ["charcoal", "firewood", "mining waste", "rusted machinery"], "answer": 2},
  ],
  // #7 · Sun 18 Oct 2026
  [
    {"word": "quail", "sentence": "When thirty Year 9s stared her down, the new teacher began to quail, and by recess she'd asked to swap classes.", "options": ["shrink in fear", "improvise wildly", "lecture sternly", "crack jokes"], "answer": 0},
    {"word": "sanguine", "sentence": "Despite the forecast of storms, the organisers remained sanguine about the outdoor concert going ahead.", "options": ["secretive", "undecided", "anxious", "optimistic"], "answer": 3},
    {"word": "recondite", "sentence": "Her thesis dealt with a recondite corner of medieval tax law that perhaps six people on Earth fully understand.", "options": ["long outdated", "utterly fascinating", "hotly controversial", "deeply obscure"], "answer": 3},
    {"word": "bumbershoot", "sentence": "Grandad always took his bumbershoot to the cricket, partly for the rain and partly to poke umpires he disagreed with.", "options": ["walking stick", "umbrella", "transistor radio", "picnic rug"], "answer": 1},
    {"word": "kenspeckle", "sentence": "With his orange beard and two-metre frame, Rory was so kenspeckle that he could never sneak into lectures late.", "options": ["clumsy", "noisy", "conspicuous", "well liked"], "answer": 2},
    {"word": "opsimath", "sentence": "My mum became an opsimath at seventy, enrolling in Mandarin, life drawing and a certificate in astronomy.", "options": ["late learner", "globetrotter", "volunteer", "retiree"], "answer": 0},
    {"word": "embrangle", "sentence": "One innocent question about the fence managed to embrangle us in the neighbours' twenty-year feud; now both sides want our support.", "options": ["fill us in on", "drag us into", "put us off", "amuse us with"], "answer": 1},
  ],
  // #8 · Mon 19 Oct 2026
  [
    {"word": "bolt", "sentence": "She bought a bolt of linen at the warehouse sale and has been sewing curtains for every room ever since.", "options": ["sample swatch", "single metre", "large roll", "small offcut"], "answer": 2},
    {"word": "diffident", "sentence": "Though clearly the best player on the team, she was diffident about her talent and rarely took the final shot.", "options": ["quietly arrogant", "deeply secretive", "rather careless", "lacking in confidence"], "answer": 3},
    {"word": "tendentious", "sentence": "The documentary was so tendentious that every expert interviewed just happened to agree with the director.", "options": ["one-sided", "long-winded", "low-budget", "sentimental"], "answer": 0},
    {"word": "tonsorial", "sentence": "My first tonsorial appointment after six months of lockdown hair took nearly two hours.", "options": ["at the dentist's", "at the barber's", "at the bank", "at the vet's"], "answer": 1},
    {"word": "cruciverbalist", "sentence": "As a keen cruciverbalist, Nan finishes the Saturday cryptic in pen before her first cup of tea goes cold.", "options": ["speed reader", "early riser", "crossword lover", "sudoku fan"], "answer": 2},
    {"word": "horripilation", "sentence": "The choir's final note hung in the cathedral, and I felt a wave of horripilation run up both my arms.", "options": ["goosebumps", "pins and needles", "muscle cramp", "nervous itching"], "answer": 0},
    {"word": "rodomontade", "sentence": "Between bouts, the boxer's rodomontade about knocking out every champion alive filled most of the press conference.", "options": ["legal threats", "boastful bluster", "humble thanks", "nervous rambling"], "answer": 1},
  ],
  // #9 · Tue 20 Oct 2026
  [
    {"word": "fast", "sentence": "The ute's wheels were stuck fast in the mud, so we sat and waited for a farmer with a tractor.", "options": ["partially", "suddenly", "immovably", "temporarily"], "answer": 2},
    {"word": "querulous", "sentence": "By hour six of the road trip, the querulous voice from the back seat had asked 'are we there yet?' forty times.", "options": ["sleepy", "whingeing", "sing-song", "excited"], "answer": 1},
    {"word": "fulsome", "sentence": "The chairman's fulsome praise for the departing CEO rang hollow, given he'd forced her resignation a week earlier.", "options": ["warm and heartfelt", "vague and rambling", "excessive and insincere", "brief and grudging"], "answer": 2},
    {"word": "agelast", "sentence": "Even the clown's best routine couldn't raise a smile from my uncle, a lifelong agelast.", "options": ["night-shift worker", "retired comedian", "tone-deaf critic", "one who never laughs"], "answer": 3},
    {"word": "purlicue", "sentence": "To hold chopsticks properly, rest the bottom one in your purlicue and let your ring finger support it.", "options": ["cupped palm", "fingertips", "middle knuckle", "thumb's webbing"], "answer": 3},
    {"word": "virga", "sentence": "From the plane we could see virga trailing beneath the clouds, though not a drop reached the parched paddocks below.", "options": ["falling rain", "bushfire smoke", "jet contrails", "flocks of birds"], "answer": 0},
    {"word": "hodiernal", "sentence": "The newspaper's hodiernal weather box was useless by mid-morning, when an unforecast storm rolled in.", "options": ["colourful", "today's", "weekly", "regional"], "answer": 1},
  ],
  // #10 · Wed 21 Oct 2026
  [
    {"word": "champion", "sentence": "She spent a decade championing bike lanes on council, long before they were popular with voters.", "options": ["riding in", "fighting against", "designing", "pushing for"], "answer": 3},
    {"word": "parsimonious", "sentence": "My grandfather was so parsimonious he'd drive right across town to claim the ten-cent refund on a single can.", "options": ["environmentally minded", "absent-minded", "miserly", "law-abiding"], "answer": 2},
    {"word": "pellucid", "sentence": "Her pellucid explanation of tax brackets finally made sense to a room full of confused first-year apprentices.", "options": ["crystal clear", "rather rushed", "long-winded", "highly technical"], "answer": 0},
    {"word": "smellfungus", "sentence": "Every holiday has its smellfungus, and on ours it was Gary, who said the beach was too sandy and the sunset 'a bit much'.", "options": ["grumbler", "tour guide", "food critic", "early riser"], "answer": 0},
    {"word": "glabella", "sentence": "Years of frowning at spreadsheets have carved two deep lines into my glabella.", "options": ["point of the chin", "tip of the nose", "middle of the brow", "edge of the jaw"], "answer": 2},
    {"word": "matutinal", "sentence": "Our street's magpies are relentlessly matutinal, warbling outside my window at least an hour before my alarm.", "options": ["territorial", "inquisitive", "sociable", "early-rising"], "answer": 3},
    {"word": "collop", "sentence": "The butcher cut us four thick collops of venison and told us to sear them hot and fast.", "options": ["racks", "slices", "joints", "shanks"], "answer": 1},
  ],
  // #11 · Thu 22 Oct 2026
  [
    {"word": "spare", "sentence": "The old drover was tall and spare, all wiry muscle and weathered skin after fifty years on horseback.", "options": ["stooped", "quiet", "lean", "unhurried"], "answer": 2},
    {"word": "ebullient", "sentence": "Our ebullient tour guide sang, cracked jokes and high-fived strangers, even in the pouring rain.", "options": ["long-winded", "underpaid", "jittery", "exuberant"], "answer": 3},
    {"word": "saturnine", "sentence": "The bass player was a saturnine presence on stage, rarely moving and glowering at anyone who clapped off the beat.", "options": ["sloppy and careless", "sullen and brooding", "towering and imposing", "flamboyant and showy"], "answer": 1},
    {"word": "cockalorum", "sentence": "The new regional manager, a strutting little cockalorum, renamed the tearoom after himself in his first week.", "options": ["pompous upstart", "penny-pincher", "health fanatic", "nervous wreck"], "answer": 0},
    {"word": "hobbledehoy", "sentence": "At fifteen my brother was a gangly hobbledehoy, all elbows and cracking voice, forever tripping over his own feet.", "options": ["awkward youth", "class clown", "troublemaker", "bookworm"], "answer": 0},
    {"word": "sastrugi", "sentence": "Crossing the plateau, the expedition's sleds bounced over sastrugi carved by weeks of relentless wind.", "options": ["fallen ice blocks", "seal breathing holes", "hidden crevasses", "hard snow ridges"], "answer": 3},
    {"word": "sennight", "sentence": "In winter the ferry calls only once a sennight, so the island's Tuesday market is the busiest day of the week.", "options": ["full moon", "week", "fortnight", "month"], "answer": 1},
  ],
  // #12 · Fri 23 Oct 2026
  [
    {"word": "sanction", "sentence": "The school finally sanctioned the students' plan to turn the old car park into a vegie garden, budget and all.", "options": ["debated", "postponed", "penalised", "approved"], "answer": 3},
    {"word": "capricious", "sentence": "The capricious Melbourne weather gave us sunshine, hail and a rainbow before the footy had even reached half-time.", "options": ["bitterly cold", "gloomy", "fickle", "oppressive"], "answer": 2},
    {"word": "mordant", "sentence": "Her mordant review of the restaurant ended by suggesting the chef consider a career in demolition.", "options": ["glowing", "bitingly sarcastic", "carefully balanced", "rambling"], "answer": 1},
    {"word": "deipnosophist", "sentence": "Every dinner party needs a deipnosophist like Priya, who can steer the table from politics to cheese without anyone noticing.", "options": ["witty dinner guest", "wine buff", "master chef", "cheese connoisseur"], "answer": 0},
    {"word": "erinaceous", "sentence": "After the haircut, my son's erinaceous new look had his classmates calling him 'Spike' for a month.", "options": ["lopsided", "fluorescent", "hedgehog-like", "shiny"], "answer": 2},
    {"word": "cacoethes", "sentence": "Every summer holiday my cacoethes for scribbling returns, and by late January I've filled three notebooks with half-finished stories.", "options": ["natural talent", "irresistible urge", "old habit", "faint nostalgia"], "answer": 1},
    {"word": "crepitus", "sentence": "The physio says the crepitus in my knee every time I squat is harmless, even if it startles people nearby.", "options": ["crackling sound", "sharp twinge", "sudden buckling", "visible swelling"], "answer": 0},
  ],
  // #13 · Sat 24 Oct 2026
  [
    {"word": "temper", "sentence": "The coach tempered her criticism with praise, so the team left the rooms disappointed but not crushed.", "options": ["drowned out", "sharpened", "disguised", "softened"], "answer": 3},
    {"word": "munificent", "sentence": "Thanks to a munificent donor, the regional library now has a new wing, free laptop loans and late opening hours.", "options": ["lavishly generous", "eccentric", "publicity-hungry", "cautious"], "answer": 0},
    {"word": "anodyne", "sentence": "The press release was carefully anodyne, saying a great deal about 'values' and nothing at all about the layoffs.", "options": ["openly hostile", "highly technical", "safely bland", "deeply emotional"], "answer": 2},
    {"word": "hornswoggle", "sentence": "The 'vintage' couch turned out to be flat-pack from 2015; the seller had completely hornswoggled us.", "options": ["rushed", "swindled", "flattered", "ignored"], "answer": 1},
    {"word": "anfractuous", "sentence": "The track to the lookout was so anfractuous that we passed the same sleepy wombat three times.", "options": ["rocky", "muddy", "twisting", "steep"], "answer": 2},
    {"word": "gnomon", "sentence": "The sundial in the botanic gardens had lost its gnomon to vandals, so it cast no shadow and told no time.", "options": ["numbered face", "upright pointer", "compass rose", "engraved motto"], "answer": 1},
    {"word": "fugacious", "sentence": "Photographers travel thousands of kilometres for the outback's fugacious wildflowers, hoping to arrive in the right week.", "options": ["sweet-smelling", "carnivorous", "vividly coloured", "short-lived"], "answer": 3},
  ],
  // #14 · Sun 25 Oct 2026
  [
    {"word": "lumber", "sentence": "As the only one of us with a ute, I always get lumbered with moving everyone's couches.", "options": ["praised for", "excused from", "paid for", "stuck with"], "answer": 3},
    {"word": "intransigent", "sentence": "Eleven hours in, both sides were as intransigent as when they'd started, and the pay talks collapsed.", "options": ["exhausted", "poorly prepared", "unyielding", "evasive"], "answer": 2},
    {"word": "pusillanimous", "sentence": "The council's pusillanimous response to the developer's threats disappointed residents who had hoped for a fight.", "options": ["lengthy", "legalistic", "spineless", "furious"], "answer": 2},
    {"word": "hugger-mugger", "sentence": "The merger was negotiated in hugger-mugger, with staff learning about it from a news alert on their phones.", "options": ["good faith", "high spirits", "plain English", "secrecy"], "answer": 3},
    {"word": "callithumpian", "sentence": "New Year's Eve on our street ends with a callithumpian parade of saucepans, kazoos and one very confused trombone.", "options": ["raucous", "slow-moving", "candlelit", "fancy-dress"], "answer": 0},
    {"word": "brontide", "sentence": "Residents near the fault line reported a strange brontide in the night, though the sky was perfectly clear.", "options": ["smell of sulphur", "thunder-like rumble", "glow on the horizon", "flickering of lights"], "answer": 1},
    {"word": "ambsace", "sentence": "Rolling snake eyes for the third time running, Kenji groaned about his ambsace and handed over his last Monopoly money.", "options": ["rotten luck", "aching wrist", "empty wallet", "poor strategy"], "answer": 0},
  ],
  // #15 · Mon 26 Oct 2026
  [
    {"word": "fleet", "sentence": "The fleet young winger left three defenders in her wake and scored before the crowd had even stood up.", "options": ["bold and reckless", "fast and nimble", "tall and lanky", "slight and wiry"], "answer": 1},
    {"word": "acerbic", "sentence": "The critic's acerbic review described the soufflé as 'a brave attempt at pancake', and the chef never forgave her.", "options": ["fussy and pedantic", "brief and offhand", "harsh and cutting", "puzzled and unsure"], "answer": 2},
    {"word": "lambent", "sentence": "A lambent glow from the campfire played over our faces as we told ghost stories late into the night.", "options": ["harsh and glaring", "deep orange", "softly flickering", "dim and smoky"], "answer": 2},
    {"word": "susurrus", "sentence": "Through the thin motel wall came a susurrus of voices, too soft to follow but impossible to ignore.", "options": ["tinny music", "low murmuring", "steady thumping", "sudden shouting"], "answer": 1},
    {"word": "apricate", "sentence": "On the first warm day of spring, the whole retirement village came out to apricate on the lawn, faces tilted to the sky.", "options": ["bask in the sun", "play lawn bowls", "do group stretches", "watch for birds"], "answer": 0},
    {"word": "latibulize", "sentence": "Every June my flatmate latibulizes: electric blanket, three doonas, and no social plans until the wattle flowers.", "options": ["goes on a diet", "takes up knitting", "travels north", "hibernates indoors"], "answer": 3},
    {"word": "moonglade", "sentence": "We sat on the end of the jetty at midnight, watching the moonglade stretch across the bay towards Williamstown.", "options": ["moonlit path on water", "line of fishing boats", "cool evening breeze", "row of harbour lights"], "answer": 0},
  ],
  // #16 · Tue 27 Oct 2026
  [
    {"word": "pore", "sentence": "She pored over the old council maps for weeks, convinced a creek had once run right through her backyard.", "options": ["fretted anxiously", "argued endlessly", "laughed fondly", "studied closely"], "answer": 3},
    {"word": "brusque", "sentence": "The receptionist was brusque but efficient: three words, one stamp, and I was back on the street within a minute.", "options": ["abrupt and curt", "bored and distracted", "shy and awkward", "polite and formal"], "answer": 0},
    {"word": "parlous", "sentence": "After the drought and two floods, the farm's finances were in a parlous state, and the bank had stopped returning calls.", "options": ["surprisingly healthy", "dangerously shaky", "hopelessly tangled", "carefully managed"], "answer": 1},
    {"word": "tergiversate", "sentence": "Asked whether he'd back the new bike lane, the councillor began to tergiversate, citing 'ongoing consultation' and 'community sentiment'.", "options": ["list the costs", "praise the idea", "dodge and weave", "lose his temper"], "answer": 2},
    {"word": "pandowdy", "sentence": "Grandma's pandowdy came out of the oven bubbling, the broken crust pressed down into the sweet stewed apples.", "options": ["baked apple pudding", "apple-glazed ham", "spiced apple punch", "candied apple jam"], "answer": 0},
    {"word": "oscitate", "sentence": "Ten minutes into the budget presentation, half the room had begun to oscitate behind their hands.", "options": ["smirk", "fidget", "yawn", "whisper"], "answer": 2},
    {"word": "gulosity", "sentence": "His gulosity at the buffet was legendary; he once went back for a seventh plate while the staff were stacking chairs.", "options": ["loud complaining", "careful planning", "skill with chopsticks", "greedy appetite"], "answer": 3},
  ],
  // #17 · Wed 28 Oct 2026
  [
    {"word": "sound", "sentence": "The building inspector said the old house was structurally sound, despite the creaking floors and the lean on the veranda.", "options": ["solid and stable", "rather noisy", "overpriced", "heritage-listed"], "answer": 0},
    {"word": "alacrity", "sentence": "When Mum offered ten dollars to whoever cleaned the gutters, my brother agreed with an alacrity he'd never shown for homework.", "options": ["great reluctance", "suspicious caution", "a heavy sigh", "cheerful eagerness"], "answer": 3},
    {"word": "avuncular", "sentence": "The new principal had an avuncular manner, remembering every birthday and slipping kids lollies after assembly.", "options": ["stern and military", "kindly, uncle-like", "flashy and loud", "nervous and fussy"], "answer": 1},
    {"word": "sesquipedalian", "sentence": "The lawyer's sesquipedalian letter used 'notwithstanding' four times and left my dad reaching for the dictionary.", "options": ["badly typed", "extremely brief", "threatening legal action", "full of long words"], "answer": 3},
    {"word": "jobation", "sentence": "After the window broke, Dad delivered a twenty-minute jobation about responsibility while we stared at our shoes.", "options": ["tedious scolding", "lengthy apology", "tearful confession", "practical demonstration"], "answer": 0},
    {"word": "bombilate", "sentence": "The old fridge would bombilate all night, a low drone that eventually became part of the house.", "options": ["leak", "click", "hum", "rattle"], "answer": 2},
    {"word": "crumenal", "sentence": "He patted his coat for his crumenal, realised he'd left it at home, and sheepishly asked to borrow ten dollars.", "options": ["umbrella", "purse", "house keys", "reading glasses"], "answer": 1},
  ],
  // #18 · Thu 29 Oct 2026
  [
    {"word": "bank", "sentence": "Don't bank on the train being on time; the Frankston line has been a disaster all week.", "options": ["dwell", "insist", "rely", "comment"], "answer": 2},
    {"word": "phlegmatic", "sentence": "Even when the kitchen caught fire, our phlegmatic landlord just said 'Right,' and went to find the extinguisher.", "options": ["stingy and greedy", "vague and absent-minded", "old and frail", "calm and unflappable"], "answer": 3},
    {"word": "bilious", "sentence": "The stepmother in the play is a bilious old crank who snaps at every character who enters her parlour.", "options": ["superstitious", "forgetful", "bad-tempered", "wealthy"], "answer": 2},
    {"word": "mountebank", "sentence": "The so-called healer was a mountebank, selling bottles of tinted water from the back of a ute at every country show.", "options": ["rodeo rider", "travelling vet", "travelling preacher", "swindling showman"], "answer": 3},
    {"word": "nunchion", "sentence": "Halfway between breakfast and lunch, the shearers stopped for a nunchion of scones and strong black tea.", "options": ["light snack", "short nap", "quick swim", "union meeting"], "answer": 0},
    {"word": "fogbow", "sentence": "As the sun broke through the mist over the paddock, a pale white fogbow arched above the dam.", "options": ["faint rainbow", "patch of frost", "low-flying heron", "plume of smoke"], "answer": 0},
    {"word": "vagissate", "sentence": "The spring lambs vagissated across the paddock, springing straight up as though the grass were electrified.", "options": ["huddled", "frolicked", "grazed", "stumbled"], "answer": 1},
  ],
  // #19 · Fri 30 Oct 2026
  [
    {"word": "hawk", "sentence": "A man walked the beach hawking ice creams from an esky, shouting his prices over the noise of the surf.", "options": ["handing out", "melting", "peddling", "smuggling"], "answer": 2},
    {"word": "affable", "sentence": "Our affable new neighbour introduced himself, offered us lemons from his tree, and asked if we needed help with the boxes.", "options": ["nosy and intrusive", "wealthy and showy", "warm and easy-going", "elderly and retired"], "answer": 2},
    {"word": "encomium", "sentence": "At his retirement dinner, the dean delivered a glowing encomium that made the old professor blush into his soup.", "options": ["formal reprimand", "detailed report", "formal apology", "heartfelt tribute"], "answer": 3},
    {"word": "bibulous", "sentence": "Uncle Barry's bibulous evenings at the RSL usually ended with him serenading the car park.", "options": ["heavy-drinking", "argumentative", "lonely", "gambling"], "answer": 0},
    {"word": "fadaise", "sentence": "The awards speech was pure fadaise: 'teamwork makes the dream work' and other lines you could find on a fridge magnet.", "options": ["angry ranting", "empty platitudes", "foreign phrases", "clever wit"], "answer": 1},
    {"word": "grobian", "sentence": "Some grobian at the next table belched loudly, wiped his hands on the tablecloth and yelled for the bill.", "options": ["food critic", "tired tourist", "regular customer", "uncouth lout"], "answer": 3},
    {"word": "hippocras", "sentence": "At the medieval fair, stallholders ladled warm hippocras into clay cups, and by dusk the jesters were noticeably tipsy.", "options": ["beef broth", "honey porridge", "herbal tea", "spiced wine"], "answer": 3},
  ],
  // #20 · Sat 31 Oct 2026
  [
    {"word": "steep", "sentence": "Let the tea leaves steep for four minutes, or you'll end up with something closer to dishwater.", "options": ["dry", "cool", "settle", "soak"], "answer": 3},
    {"word": "assiduous", "sentence": "Thanks to assiduous study every night for six months, she passed the bar exam on her first attempt.", "options": ["solitary", "expensive", "diligent", "frantic"], "answer": 2},
    {"word": "refulgent", "sentence": "The cathedral's newly cleaned dome was refulgent in the afternoon sun, almost too bright to look at.", "options": ["elegant", "crumbling", "towering", "dazzling"], "answer": 3},
    {"word": "hebdomadal", "sentence": "The hebdomadal staff meeting had become such a ritual that people started calling Mondays 'Meeting Day'.", "options": ["compulsory", "weekly", "early-morning", "pointless"], "answer": 1},
    {"word": "lychnobite", "sentence": "Being a lychnobite suits Jules: she does her best baking at 2 a.m. and treats lunchtime as bedtime.", "options": ["night worker", "perfectionist", "pastry chef", "insomniac"], "answer": 0},
    {"word": "snudge", "sentence": "On rainy Sundays I like to snudge under the doona with a book and a pot of tea.", "options": ["read aloud", "lie snugly", "sulk quietly", "work late"], "answer": 1},
    {"word": "aleberry", "sentence": "For his cold, the innkeeper prescribed a steaming bowl of aleberry, and by the second spoonful the patient was singing sea shanties.", "options": ["chicken broth", "spiced hot ale", "herbal poultice", "barley gruel"], "answer": 1},
  ],
  // #21 · Sun 01 Nov 2026
  [
    {"word": "harbour", "sentence": "She had harboured a grudge against her cousin ever since he ate the last slice of her twenty-first birthday cake.", "options": ["laughed off", "talked about", "held on to", "apologised for"], "answer": 2},
    {"word": "diatribe", "sentence": "His dinner-party diatribe against e-scooters lasted until dessert and alienated every guest under forty.", "options": ["tirade", "pitch", "demo", "joke"], "answer": 0},
    {"word": "asperity", "sentence": "'I asked for that report on Monday,' the editor said with some asperity, tapping her watch.", "options": ["relief", "harshness", "amusement", "confusion"], "answer": 1},
    {"word": "gelid", "sentence": "Diving into the gelid waters of Lake Catani in October, I lost the ability to speak for a full minute.", "options": ["icy", "murky", "still", "deep"], "answer": 0},
    {"word": "glaver", "sentence": "The salesman would glaver about how the car 'suited my personality' while quietly adding extras to the bill.", "options": ["whisper", "explain", "complain", "flatter"], "answer": 3},
    {"word": "vinolent", "sentence": "After the third bottle, the vinolent wedding guests attempted a conga line straight through the marquee wall.", "options": ["overdressed", "badly sunburnt", "competitive", "drunk on wine"], "answer": 3},
    {"word": "mammet", "sentence": "My daughter dressed her mammet in a doily and sat it at the tea party between the teddy bear and the plastic dinosaur.", "options": ["doll", "kitten", "pet duck", "little brother"], "answer": 0},
  ],
  // #22 · Mon 02 Nov 2026
  [
    {"word": "dock", "sentence": "The boss threatened to dock our pay if anyone else turned up late after the Christmas party.", "options": ["publish", "freeze", "delay", "reduce"], "answer": 3},
    {"word": "maudlin", "sentence": "By midnight he'd become maudlin, weeping over old photos and telling everyone they were his best friend.", "options": ["soppy and tearful", "wildly energetic", "aggressively rude", "sleepy and quiet"], "answer": 0},
    {"word": "inveigle", "sentence": "She managed to inveigle her way backstage by claiming to be the drummer's cousin from Perth.", "options": ["pay generously", "push forcefully", "creep silently", "coax slyly"], "answer": 3},
    {"word": "nacreous", "sentence": "The inside of the abalone shell was nacreous, shimmering pink and green as I turned it in the light.", "options": ["chalky", "slimy", "pearly", "rusty"], "answer": 2},
    {"word": "noctivagant", "sentence": "The noctivagant possums clattered across our roof every night, then slept all day in the hollow of the gum tree.", "options": ["nocturnal", "territorial", "noisy", "hungry"], "answer": 0},
    {"word": "tapster", "sentence": "The tapster at the old pub could pour a perfect pint while holding three conversations and a tea towel.", "options": ["bouncer", "barman", "cook", "regular"], "answer": 1},
    {"word": "sciomachy", "sentence": "His long letter to the council was pure sciomachy, attacking a parking policy that nobody had ever proposed.", "options": ["legal jargon", "careful research", "polite flattery", "shadow-boxing"], "answer": 3},
  ],
  // #23 · Tue 03 Nov 2026
  [
    {"word": "founder", "sentence": "The start-up began to founder within a year, once the investors pulled out and the lead coder moved to Berlin.", "options": ["change direction", "attract attention", "fail and collapse", "expand quickly"], "answer": 2},
    {"word": "placate", "sentence": "To placate the furious toddler, Dad handed over his phone, his keys and finally half his sandwich.", "options": ["teach", "ignore", "punish", "pacify"], "answer": 3},
    {"word": "cavil", "sentence": "Critics may cavil at the film's running time, but nobody left the cinema early.", "options": ["laugh", "marvel", "nitpick", "guess"], "answer": 2},
    {"word": "noisome", "sentence": "A noisome odour drifted from the fish co-op bins after three days of forty-degree heat.", "options": ["salty and fresh", "strange and sweet", "foul and offensive", "faint and fleeting"], "answer": 2},
    {"word": "eructation", "sentence": "The baby's tremendous eructation after her bottle drew applause from the whole café.", "options": ["sneeze", "burp", "yawn", "giggle"], "answer": 1},
    {"word": "crepuscle", "sentence": "Kangaroos come out to graze at crepuscle, so take extra care on country roads as the light fades.", "options": ["twilight", "full moon", "harvest", "low tide"], "answer": 0},
    {"word": "snithy", "sentence": "A snithy wind cut straight through my jacket as I waited for the first tram on Swanston Street.", "options": ["salt-laden", "muggy", "piercing", "bone-dry"], "answer": 2},
  ],
  // #24 · Wed 04 Nov 2026
  [
    {"word": "spell", "sentence": "After a long dry spell, the first rain made the whole street smell of wet bitumen.", "options": ["riddle", "curse", "word", "period"], "answer": 3},
    {"word": "dilatory", "sentence": "The dilatory builder had promised the deck by Christmas; it was finished the following Easter.", "options": ["dishonest", "unqualified", "slow to act", "expensive"], "answer": 2},
    {"word": "fustian", "sentence": "The speech was all fustian: soaring metaphors, borrowed quotes and not one concrete policy.", "options": ["angry insults", "dry statistics", "quiet humility", "pompous waffle"], "answer": 3},
    {"word": "sedulous", "sentence": "Through sedulous practice, an hour every morning before school, she worked her way into the state youth orchestra.", "options": ["diligent", "private", "natural", "musical"], "answer": 0},
    {"word": "whapper", "sentence": "'You should've seen the one that got away,' he said, flinging his arms wide to describe the whapper.", "options": ["storm", "monster", "rival", "fishing rod"], "answer": 1},
    {"word": "tussive", "sentence": "The doctor listened to the child's chest and asked how long the tussive fits had been keeping her up at night.", "options": ["coughing", "crying", "teething", "nightmare"], "answer": 0},
    {"word": "rambooze", "sentence": "The pub's winter special, a steaming rambooze served in pewter mugs, was blamed for three marriage proposals and a broken window.", "options": ["apple pie", "beef stew", "folk band", "punch"], "answer": 3},
  ],
  // #25 · Thu 05 Nov 2026
  [
    {"word": "grave", "sentence": "The surgeon's grave expression told us the news before she said a single word.", "options": ["tired", "kind", "puzzled", "solemn"], "answer": 3},
    {"word": "gauche", "sentence": "I made a gauche joke about the host's ex-wife, then realised she was standing right behind me.", "options": ["subtle", "rambling", "awkward", "witty"], "answer": 2},
    {"word": "stentorian", "sentence": "The sergeant's stentorian voice carried across the parade ground without any need for a microphone.", "options": ["hoarse", "foreign", "gentle", "booming"], "answer": 3},
    {"word": "rubicund", "sentence": "The rubicund farmer, cheeks glowing after a morning in the frosty paddock, waved us into the shed.", "options": ["ruddy", "cheerful", "bearded", "stocky"], "answer": 0},
    {"word": "pernoctation", "sentence": "The students' pernoctation before the exam involved four energy drinks, two pizzas and not one hour of sleep.", "options": ["all-night vigil", "cram notes", "early breakfast", "study group"], "answer": 0},
    {"word": "lusory", "sentence": "The museum displays lusory objects from ancient Egypt: knucklebones, spinning tops and a board game with tiny lion pieces.", "options": ["used for cooking", "used in play", "used in rituals", "used in burials"], "answer": 1},
    {"word": "margent", "sentence": "We pitched our tent on the margent of the lake, close enough to hear the water lapping all night.", "options": ["hill above", "far side", "edge", "island"], "answer": 2},
  ],
  // #26 · Fri 06 Nov 2026
  [
    {"word": "crane", "sentence": "We craned our necks to see the comet, which was barely a smudge above the Dandenongs.", "options": ["covered", "stretched", "wrapped", "rubbed"], "answer": 1},
    {"word": "obdurate", "sentence": "Despite the petition and the protests, the obdurate minister refused to reconsider the school closure.", "options": ["stubbornly unmoved", "newly appointed", "deeply apologetic", "frequently absent"], "answer": 0},
    {"word": "risible", "sentence": "The council's risible excuse, that the pothole was 'a heritage feature', went viral within hours.", "options": ["legal", "absurd", "honest", "lengthy"], "answer": 1},
    {"word": "nescient", "sentence": "Nescient of the local tides, the tourists set up their towels on the sandbar and were soon stranded.", "options": ["fearful", "careless", "proud", "unaware"], "answer": 3},
    {"word": "olfactor", "sentence": "The sniffer dog's remarkable olfactor picked up the smuggled mangoes through two suitcases and a cooler bag.", "options": ["training", "hearing", "nose", "handler"], "answer": 2},
    {"word": "lucarne", "sentence": "Through the tiny lucarne in the attic, we could see the whole street and the tops of the plane trees.", "options": ["pair of binoculars", "dormer window", "telescope", "attic hatch"], "answer": 1},
    {"word": "forweep", "sentence": "After the funeral, Nan would forweep each evening, and nothing, not even her favourite shows, could console her.", "options": ["sleep early", "walk alone", "weep bitterly", "pray quietly"], "answer": 2},
  ],
  // #27 · Sat 07 Nov 2026
  [
    {"word": "muster", "sentence": "The coach managed to muster eleven players for the final, including two dads and a very reluctant goalkeeper.", "options": ["train", "choose", "gather", "pay"], "answer": 2},
    {"word": "voluble", "sentence": "Our voluble Airbnb host explained the heating, the bins, the history of the suburb and his divorce in one breath.", "options": ["chatty", "helpful", "elderly", "nervous"], "answer": 0},
    {"word": "vitiate", "sentence": "One careless error in the data was enough to vitiate the entire study, and the paper was withdrawn.", "options": ["publicise", "undermine", "delay", "summarise"], "answer": 1},
    {"word": "gasconade", "sentence": "Behind all his gasconade about winning the title, the boxer looked terrified at the weigh-in.", "options": ["medical advice", "fan support", "boastful talk", "training"], "answer": 2},
    {"word": "makebate", "sentence": "Every office has a makebate who 'just mentions' to Sue what Dave said about her in the kitchen.", "options": ["new starter", "stirrer", "peacemaker", "night cleaner"], "answer": 1},
    {"word": "caliginous", "sentence": "We felt our way along the caliginous corridor of the old asylum, phones dead and torches forgotten.", "options": ["endless", "narrow", "haunted", "murky"], "answer": 3},
    {"word": "paralian", "sentence": "A lifelong paralian, Mum has never lived more than a five-minute walk from the waves, even in winter.", "options": ["board-rider", "beach cleaner", "lifeguard", "coast dweller"], "answer": 3},
  ],
  // #28 · Sun 08 Nov 2026
  [
    {"word": "pine", "sentence": "Stuck in a snowy Canadian winter, she began to pine for Queensland's warm afternoons and mango season.", "options": ["write", "plan", "pay", "long"], "answer": 3},
    {"word": "indolent", "sentence": "The indolent cat spent the whole day moving from one patch of sun to the next, stirring only for dinner.", "options": ["lazy", "greedy", "elderly", "injured"], "answer": 0},
    {"word": "truckle", "sentence": "Ministers who truckle to big donors rarely last long once the voters notice.", "options": ["object", "refuse", "lie", "grovel"], "answer": 3},
    {"word": "contumelious", "sentence": "The contumelious reply, calling the complaint 'whingeing from a nobody', was posted on the company's official account.", "options": ["insolent", "misspelt", "anonymous", "rambling"], "answer": 0},
    {"word": "rixation", "sentence": "The family barbecue ended in a rixation over who had really won the 1998 backyard cricket final.", "options": ["rematch", "toast", "row", "photo"], "answer": 2},
    {"word": "cageling", "sentence": "The little cageling sang every morning from its perch beside the kitchen window.", "options": ["newborn baby", "songbird", "radio", "kettle"], "answer": 1},
    {"word": "eyewinker", "sentence": "'Make a wish,' said my niece, holding up a single eyewinker on the tip of her finger.", "options": ["ladybird", "eyelash", "dandelion seed", "birthday candle"], "answer": 1},
  ],
  // #29 · Mon 09 Nov 2026
  [
    {"word": "drove", "sentence": "Shoppers arrived in droves for the Boxing Day sales, queuing outside from four in the morning.", "options": ["crowds", "cars", "pairs", "costume"], "answer": 0},
    {"word": "florid", "sentence": "His florid speech, all 'golden dawns' and 'noble hearts', made the hardened journalists roll their eyes.", "options": ["short and blunt", "flowery and ornate", "dry and technical", "fast and mumbled"], "answer": 1},
    {"word": "invidious", "sentence": "Asking a teacher to pick the 'best' student puts them in an invidious position with the whole class.", "options": ["privileged", "temporary", "public", "unenviable"], "answer": 3},
    {"word": "lissome", "sentence": "The lissome gymnast folded herself into the tiny box, to gasps from the crowd.", "options": ["supple", "nervous", "smiling", "petite"], "answer": 0},
    {"word": "simous", "sentence": "The puppy had a simous little face, its nose so short it looked pressed flat against a window.", "options": ["whiskery", "snub-nosed", "wrinkle-faced", "lopsided"], "answer": 1},
    {"word": "rayonnant", "sentence": "A rayonnant sun was painted above the church door, its gold beams stretching to every corner of the arch.", "options": ["smiling", "eclipsed", "radiant", "setting"], "answer": 2},
    {"word": "wolfling", "sentence": "The ranger pointed out a wolfling tumbling with its siblings near the mouth of the den.", "options": ["baby hare", "eaglet", "young badger", "wolf cub"], "answer": 3},
  ],
  // #30 · Tue 10 Nov 2026
  [
    {"word": "tender", "sentence": "The minister was forced to tender her resignation after the leaked texts appeared on the front page.", "options": ["submit", "rewrite", "deny", "delay"], "answer": 0},
    {"word": "penchant", "sentence": "My grandmother has a penchant for true-crime podcasts, which she listens to while knitting baby clothes.", "options": ["strong liking", "rare talent", "secret dislike", "deep fear"], "answer": 0},
    {"word": "legerdemain", "sentence": "Through some financial legerdemain, the company reported a record profit while claiming it couldn't afford pay rises.", "options": ["honesty", "generosity", "bad luck", "trickery"], "answer": 3},
    {"word": "thrasonical", "sentence": "The thrasonical striker announced he'd score a hat-trick, then missed a penalty in the first minute.", "options": ["foreign", "boastful", "injured", "veteran"], "answer": 1},
    {"word": "sorner", "sentence": "My cousin turned up 'for a weekend' and stayed four months: a true sorner who never once bought milk.", "options": ["freeloader", "night owl", "house-sitter", "lost tourist"], "answer": 0},
    {"word": "smilet", "sentence": "The baby gave a sleepy smilet, then nodded off again on her father's shoulder.", "options": ["tiny wave", "little smile", "soft sneeze", "little hiccup"], "answer": 1},
    {"word": "noonstead", "sentence": "By noonstead the shade had vanished from the courtyard and even the lizards had retreated under the steps.", "options": ["low tide", "harvest", "midday", "dusk"], "answer": 2},
  ],
  // #31 · Wed 11 Nov 2026
  [
    {"word": "rail", "sentence": "My grandfather would rail against the price of bread every Sunday, as though the baker had insulted him personally.", "options": ["rant", "joke", "bake", "save"], "answer": 0},
    {"word": "convivial", "sentence": "The convivial owner of the corner pub knew every regular by name and had their usual poured before they sat down.", "options": ["young", "tight-fisted", "friendly", "strict"], "answer": 2},
    {"word": "quotidian", "sentence": "Her poems find beauty in quotidian things: the kettle, the school run, the bins on a Thursday night.", "options": ["expensive", "ancient", "foreign", "everyday"], "answer": 3},
    {"word": "obloquy", "sentence": "After the scandal, the senator endured weeks of obloquy, from talkback radio to graffiti on his office windows.", "options": ["abuse", "lawsuits", "silence", "praise"], "answer": 0},
    {"word": "pannikin", "sentence": "The swagman boiled his tea in a battered pannikin over the coals, then drank it scalding hot.", "options": ["camp stretcher", "kerosene lamp", "small metal cup", "canvas sack"], "answer": 2},
    {"word": "earsore", "sentence": "The neighbour's leaf blower, roaring every Saturday at seven, had become the street's chief earsore.", "options": ["gossip topic", "safety hazard", "point of pride", "noise nuisance"], "answer": 3},
    {"word": "dentiscalp", "sentence": "The hygienist picked up a dentiscalp and went to work on the tartar behind my back teeth.", "options": ["paper bib", "tooth scraper", "water syringe", "mouth mirror"], "answer": 1},
  ],
  // #32 · Thu 12 Nov 2026
  [
    {"word": "sap", "sentence": "The relentless humidity began to sap our energy, and by noon nobody wanted to leave the pool.", "options": ["drain", "test", "hide", "boost"], "answer": 0},
    {"word": "acrimonious", "sentence": "The acrimonious divorce dragged on for three years and ended with them splitting the record collection in court.", "options": ["quiet", "bitter", "quick", "costly"], "answer": 1},
    {"word": "tenebrous", "sentence": "The tenebrous back lanes of Fitzroy were lit by a single flickering streetlight.", "options": ["graffitied", "gloomy", "cobbled", "narrow"], "answer": 1},
    {"word": "bumptious", "sentence": "The bumptious intern corrected the CEO's grammar in front of the entire board.", "options": ["unpaid", "nervous", "brilliant", "brash"], "answer": 3},
    {"word": "horselaugh", "sentence": "The comedian's terrible pun drew a single horselaugh from the back row, then silence.", "options": ["loud guffaw", "shouted 'boo'", "faint groan", "polite cough"], "answer": 0},
    {"word": "crinal", "sentence": "The salon offered crinal treatments with oils, steam and something called 'follicle meditation'.", "options": ["hair", "foot", "facial", "nail"], "answer": 0},
    {"word": "vallancy", "sentence": "The judge peered out from beneath his enormous vallancy, its curls almost brushing the bench.", "options": ["robe", "beard", "wig", "hat"], "answer": 2},
  ],
  // #33 · Fri 13 Nov 2026
  [
    {"word": "wake", "sentence": "The ferry left a long white wake across the bay, and the kids watched it until it faded.", "options": ["wash", "funeral", "plume", "blast"], "answer": 0},
    {"word": "fractious", "sentence": "The fractious toddler refused his shoes, his breakfast and, eventually, the entire concept of Tuesday.", "options": ["clingy", "cranky", "curious", "sleepy"], "answer": 1},
    {"word": "effete", "sentence": "The aristocrats in the film are portrayed as effete, fainting at the sight of a spider and needing help with their own gloves.", "options": ["clever and witty", "weak and pampered", "loyal and brave", "cruel and greedy"], "answer": 1},
    {"word": "cozen", "sentence": "The con artist would cozen elderly widows out of their savings with stories about a sick grandchild.", "options": ["cheat", "comfort", "advise", "visit"], "answer": 0},
    {"word": "fumette", "sentence": "The pheasant had hung too long, and its fumette filled the whole kitchen before we'd even unwrapped it.", "options": ["freshness", "price", "feathered look", "smell"], "answer": 3},
    {"word": "hedgeborn", "sentence": "In the old play, the prince refuses to marry a hedgeborn girl, however clever and beautiful she might be.", "options": ["orphaned", "foreign-born", "lowly-born", "younger"], "answer": 2},
    {"word": "pediluvy", "sentence": "After the forty-kilometre hike, a warm pediluvy with Epsom salts felt like the greatest invention in history.", "options": ["hot shower", "neck massage", "cold beer", "foot bath"], "answer": 3},
  ],
  // #34 · Sat 14 Nov 2026
  [
    {"word": "issue", "sentence": "The old farmer died without issue, so the property passed to a nephew in Adelaide.", "options": ["debt", "complaint", "children", "warning"], "answer": 2},
    {"word": "jocular", "sentence": "The surgeon's jocular manner put patients at ease, though some wished he'd joke a little less before the anaesthetic.", "options": ["formal", "playful", "gentle", "brisk"], "answer": 1},
    {"word": "importunate", "sentence": "An importunate salesman rang four times before lunch, each time 'just following up'.", "options": ["pushy", "foreign", "junior", "polite"], "answer": 0},
    {"word": "benison", "sentence": "The old priest raised his hand and gave the fishing fleet his benison before they sailed.", "options": ["map", "farewell", "warning", "blessing"], "answer": 3},
    {"word": "abderian", "sentence": "My abderian little sister laughs at everything: knock-knock jokes, the word 'spoon', even the weather report.", "options": ["nosy", "giggly", "fussy", "chatty"], "answer": 1},
    {"word": "refect", "sentence": "After the long walk, a bowl of pho was enough to refect us, and we wandered back out into the night.", "options": ["revive", "puzzle", "warn", "slow"], "answer": 0},
    {"word": "rutterkin", "sentence": "That old rutterkin of a real estate agent somehow convinced us the mould was 'character'.", "options": ["ally", "trickster", "rookie", "broker"], "answer": 1},
  ],
  // #35 · Sun 15 Nov 2026
  [
    {"word": "brook", "sentence": "The head chef would brook no argument about the menu, not even from the owner.", "options": ["provoke", "tolerate", "repeat", "lose"], "answer": 1},
    {"word": "cajole", "sentence": "After twenty minutes of flattery and promises, she managed to cajole her grandfather into trying sushi.", "options": ["drag", "trick", "force", "coax"], "answer": 3},
    {"word": "abstruse", "sentence": "The lecture on quantum gravity was so abstruse that even the physics students left looking dazed.", "options": ["long-winded", "badly delivered", "hard to grasp", "poorly attended"], "answer": 2},
    {"word": "adumbrate", "sentence": "The minister's speech adumbrated the budget cuts without ever saying how deep they would go.", "options": ["denied", "hinted at", "detailed", "celebrated"], "answer": 1},
    {"word": "amnicolist", "sentence": "A lifelong amnicolist, Dad has rebuilt his house on the Murray twice after floods and still refuses to move uphill.", "options": ["flood engineer", "river dweller", "keen fisherman", "stubborn farmer"], "answer": 1},
    {"word": "cracknel", "sentence": "She served the cheese with crisp cracknels that shattered into crumbs at the first bite.", "options": ["onions", "almonds", "biscuits", "apricots"], "answer": 2},
    {"word": "chowter", "sentence": "Told to put his tablet away, my nephew sat in the corner to chowter about how unfair everything was.", "options": ["grumble", "sing", "brag about it", "joke"], "answer": 0},
  ],
  // #36 · Mon 16 Nov 2026
  [
    {"word": "buff", "sentence": "My uncle is a real history buff and can name every Australian prime minister in order, with their dates.", "options": ["fanatic", "author", "teacher", "sceptic"], "answer": 0},
    {"word": "castigate", "sentence": "The coroner's report castigated the hospital for ignoring repeated warnings about staffing.", "options": ["condemned", "thanked", "investigated", "fined"], "answer": 0},
    {"word": "apposite", "sentence": "Her apposite quote from Shakespeare drew a knowing laugh; even the groom's grumpy father nodded along.", "options": ["misquoted", "fitting", "obscure", "lengthy"], "answer": 1},
    {"word": "aleatory", "sentence": "The composer's aleatory piece asks the performers to roll dice to decide the order of the movements.", "options": ["chance-based", "unfinished", "religious", "very short-lived"], "answer": 0},
    {"word": "anserous", "sentence": "Bumbling about the office and honking with laughter at his own jokes, Trevor was positively anserous.", "options": ["owl-like", "horse-like", "goose-like", "dog-like"], "answer": 2},
    {"word": "cynorexia", "sentence": "Teenage boys seem to suffer from cynorexia, emptying the fridge within an hour of the weekly shop.", "options": ["growing pains", "chronic laziness", "mood swings", "ravenous appetite"], "answer": 3},
    {"word": "copesmate", "sentence": "Mates since primary school, the two old copesmates still meet every Friday for a parma and a beer.", "options": ["neighbours", "companions", "rivals", "workmates"], "answer": 1},
  ],
  // #37 · Tue 17 Nov 2026
  [
    {"word": "compound", "sentence": "Leaving the leak unfixed only compounded the problem, and by spring the whole ceiling had collapsed.", "options": ["hid", "solved", "worsened", "delayed"], "answer": 2},
    {"word": "caustic", "sentence": "His caustic remarks about her cooking finally drove his sister to leave the dinner table in tears.", "options": ["biting", "honest", "witty", "drunken"], "answer": 0},
    {"word": "arrant", "sentence": "The so-called miracle cure was arrant nonsense, and the doctor said so on national radio.", "options": ["harmless", "utter", "popular", "clever"], "answer": 1},
    {"word": "amaranthine", "sentence": "The poet compares their love to an amaranthine rose, blooming on long after the garden around it has turned to dust.", "options": ["wild", "thorny", "crimson", "unfading"], "answer": 3},
    {"word": "anythingarian", "sentence": "Raised by a Catholic and a Buddhist, Sam calls himself a cheerful anythingarian and celebrates every holiday going.", "options": ["eager convert", "keen historian", "creed-free soul", "party animal"], "answer": 2},
    {"word": "cenatory", "sentence": "The Romans' cenatory habits involved reclining on couches and eating with their fingers for hours.", "options": ["bathing", "dining", "sleeping", "voting"], "answer": 1},
    {"word": "bibliotaph", "sentence": "A true bibliotaph, my grandfather kept his rare books locked in a trunk and never let anyone open them.", "options": ["book binder", "book hoarder", "book critic", "book thief"], "answer": 1},
  ],
  // #38 · Wed 18 Nov 2026
  [
    {"word": "cure", "sentence": "The farmers cure the hams in salt for a year before hanging them in the smokehouse.", "options": ["slice", "preserve", "wrap", "inject"], "answer": 1},
    {"word": "churlish", "sentence": "It would be churlish to complain about a free concert just because it started ten minutes late.", "options": ["ungracious", "too risky", "pointless", "unpatriotic"], "answer": 0},
    {"word": "atavistic", "sentence": "Faced with a huntsman in the shower, my brother let out an atavistic shriek, the kind our cave-dwelling forebears must have made.", "options": ["muffled", "musical", "primal", "silly"], "answer": 2},
    {"word": "apotropaic", "sentence": "Sailors once painted eyes on the bows of their boats as an apotropaic charm against storms and sea monsters.", "options": ["protective", "traditional", "decorative", "religious"], "answer": 0},
    {"word": "bibacious", "sentence": "The bibacious old sea captain kept a bottle of rum in every coat pocket, 'for emergencies'.", "options": ["seasick", "boozy", "grumpy", "forgetful"], "answer": 1},
    {"word": "churme", "sentence": "From the playground came a churme of a hundred children's voices, none of them distinguishable.", "options": ["sudden scream", "confused din", "sweet chorus", "distant echo"], "answer": 1},
    {"word": "daddle", "sentence": "My grandfather daddles down to the letterbox every morning, stick in hand, stopping to chat to the magpies.", "options": ["cycles", "races", "drives", "toddles"], "answer": 3},
  ],
  // #39 · Thu 19 Nov 2026
  [
    {"word": "dash", "sentence": "A late goal dashed the home side's hopes of a finals berth.", "options": ["raised", "tested", "revived", "wrecked"], "answer": 3},
    {"word": "circumspect", "sentence": "Investors have become more circumspect since the crash, asking far more questions before they part with their cash.", "options": ["cautious", "generous", "greedy", "impulsive"], "answer": 0},
    {"word": "bucolic", "sentence": "After a decade in Sydney, they traded their inner-city flat for a bucolic life of chooks, veggie patches and dirt roads.", "options": ["frugal", "hectic", "lonely", "rustic"], "answer": 3},
    {"word": "bathetic", "sentence": "The film's bathetic ending, with the dog winning an Oscar, turned a moving war drama into a joke.", "options": ["heartbreaking", "unexpected", "anticlimactic", "ambiguous"], "answer": 2},
    {"word": "blinkard", "sentence": "Without his glasses the old professor became a blinkard, peering at the whiteboard and calling every student Jason.", "options": ["absent-minded man", "weak-eyed squinter", "nervous lecturer", "harsh examiner"], "answer": 1},
    {"word": "bobbery", "sentence": "The neighbours' bobbery over a parking spot brought half the street out onto their lawns.", "options": ["garage sale", "car crash", "party", "squabble"], "answer": 3},
    {"word": "crowkeeper", "sentence": "Every spring, Grandpa built a new crowkeeper out of his old suits and stood it in the middle of the corn.", "options": ["compost bin", "garden shed", "scarecrow", "bird feeder"], "answer": 2},
  ],
  // #40 · Fri 20 Nov 2026
  [
    {"word": "desert", "sentence": "After years of cheating at cards, Uncle Dez finally got his just deserts when the club banned him for life.", "options": ["payout", "his due", "luck", "dessert"], "answer": 1},
    {"word": "clandestine", "sentence": "The two rival chefs held clandestine meetings in a car park to plan their joint restaurant.", "options": ["official", "frequent", "secret", "tense"], "answer": 2},
    {"word": "blandishment", "sentence": "Despite all the developer's blandishments, the old woman refused to sell her cottage by the creek.", "options": ["late visits", "sweet talk", "cash offers", "legal threats"], "answer": 1},
    {"word": "captious", "sentence": "The captious reviewer complained that the novel's 400 pages contained two typos and an 'unconvincing' cat.", "options": ["anonymous", "famous", "nitpicking", "jealous"], "answer": 2},
    {"word": "blatherskite", "sentence": "The blatherskite at the bus stop talked non-stop for twenty minutes about his theories on the moon landing.", "options": ["busker", "inspector", "student", "windbag"], "answer": 3},
    {"word": "cannikin", "sentence": "The old prospector dipped his cannikin into the creek and drank deeply before setting off again.", "options": ["pickaxe", "felt hat", "gold pan", "small cup"], "answer": 3},
    {"word": "deambulate", "sentence": "On fine evenings the residents deambulate along the esplanade, nodding to each other and admiring the dogs.", "options": ["stroll", "picnic", "jog", "cycle"], "answer": 0},
  ],
  // #41 · Sat 21 Nov 2026
  [
    {"word": "doctor", "sentence": "The auditors discovered that someone had doctored the receipts to hide thousands in missing funds.", "options": ["shredded", "filed", "falsified", "scanned"], "answer": 2},
    {"word": "cogent", "sentence": "She made such a cogent case for a four-day week that even the sceptical board agreed to a trial.", "options": ["convincing", "lengthy", "emotional", "passionate"], "answer": 0},
    {"word": "chicanery", "sentence": "The election was marred by chicanery, including ballot boxes that mysteriously arrived already full.", "options": ["skulduggery", "apathy", "violence", "low turnout"], "answer": 0},
    {"word": "chary", "sentence": "Having been burnt by a dodgy mechanic before, she was chary of anyone offering a 'special deal'.", "options": ["jealous", "wary", "fond", "unaware"], "answer": 1},
    {"word": "brangle", "sentence": "The committee brangled for three meetings over the colour of the new clubhouse curtains.", "options": ["fundraised", "voted", "laughed", "wrangled"], "answer": 3},
    {"word": "candlewaster", "sentence": "A confirmed candlewaster, she wrote most of her thesis between midnight and dawn under a desk lamp.", "options": ["light sleeper", "night-owl student", "careless spender", "slow typist"], "answer": 1},
    {"word": "caperclaw", "sentence": "The cat would caperclaw the lizard for a while, batting it about before letting it scamper off.", "options": ["lick clean", "ignore politely", "stalk silently", "toy with cruelly"], "answer": 3},
  ],
  // #42 · Sun 22 Nov 2026
  [
    {"word": "exact", "sentence": "The dictator exacted a heavy price from anyone who dared to criticise him in public.", "options": ["waived", "demanded", "offered", "paid"], "answer": 1},
    {"word": "contrite", "sentence": "Looking genuinely contrite, the boy returned the stolen bike and offered to wash the owner's car for a month.", "options": ["remorseful", "apprehensive", "amused", "defiant"], "answer": 0},
    {"word": "choleric", "sentence": "The choleric old colonel shouted at the waiter, the chef and finally the potted palm.", "options": ["well-dressed", "short-sighted", "hard of hearing", "hot-tempered"], "answer": 3},
    {"word": "chthonic", "sentence": "The museum's new exhibition explores chthonic gods, whose temples were built in caves and whose priests worked by torchlight.", "options": ["ocean", "harvest-time", "underworld", "warrior"], "answer": 2},
    {"word": "causerie", "sentence": "Every Sunday afternoon the old friends met for a causerie on the veranda, talking about books, politics and nothing much.", "options": ["card game", "formal debate", "relaxed chat", "light lunch"], "answer": 2},
    {"word": "circumforaneous", "sentence": "The circumforaneous knife-sharpener pedalled his grinding wheel through a different suburb every day of the week.", "options": ["elderly", "foreign", "talented", "itinerant"], "answer": 3},
    {"word": "clapperclaw", "sentence": "The two cats clapperclawed in the laundry until we separated them with a broom.", "options": ["sulked", "hid out", "napped", "brawled"], "answer": 3},
  ],
  // #43 · Mon 23 Nov 2026
  [
    {"word": "fawn", "sentence": "The new manager's assistants would fawn over him, laughing at every joke and fetching his coffee unasked.", "options": ["worry", "gossip", "glare", "grovel"], "answer": 3},
    {"word": "copious", "sentence": "She took copious notes in the lecture, filling twelve pages while everyone else wrote three lines.", "options": ["neat", "secret", "abundant", "careless"], "answer": 2},
    {"word": "cupidity", "sentence": "The CEO's cupidity was eventually his undoing: he couldn't resist one last bonus, and the auditors noticed.", "options": ["laziness", "naivety", "greed", "vanity"], "answer": 2},
    {"word": "condign", "sentence": "After the cheating scandal, the club received condign punishment: a hefty fine and relegation.", "options": ["delayed", "deserved", "lenient", "secret"], "answer": 1},
    {"word": "chirrupy", "sentence": "The barista was so chirrupy at six in the morning that some customers found it frankly alarming.", "options": ["merry", "grumpy", "clumsy", "sleepy"], "answer": 0},
    {"word": "clarty", "sentence": "The kids came in from the creek clarty from head to toe, leaving a trail of mud through the house.", "options": ["soaked", "shivering", "filthy", "sunburnt"], "answer": 2},
    {"word": "commensality", "sentence": "In her family, commensality was sacred: phones off, no TV, and nobody touched a fork until Nonna sat down.", "options": ["bedtimes", "shared meals", "saying grace", "home cooking"], "answer": 1},
  ],
  // #44 · Tue 24 Nov 2026
  [
    {"word": "file", "sentence": "The bushwalkers set off in file along the narrow ridge track, each one keeping an eye on the boots ahead.", "options": ["the dark", "a line", "silence", "a hurry"], "answer": 1},
    {"word": "craven", "sentence": "The craven captain abandoned ship in the first lifeboat, leaving the passengers to fend for themselves.", "options": ["elderly", "cowardly", "drunken", "foreign"], "answer": 1},
    {"word": "dissolute", "sentence": "The novel follows a dissolute young heir who gambles away his fortune between champagne breakfasts.", "options": ["ambitious", "sickly", "naive", "debauched"], "answer": 3},
    {"word": "couth", "sentence": "Even my teenage brother can be quite couth when there's a girl he likes at the dinner table.", "options": ["refined", "hungry", "bashful", "talkative"], "answer": 0},
    {"word": "clodpoll", "sentence": "Only a clodpoll would try to light a barbecue with petrol in the middle of a total fire ban.", "options": ["tourist", "firefighter", "blockhead", "teenager"], "answer": 2},
    {"word": "cockcrowing", "sentence": "We set off at cockcrowing so we could reach the summit before the heat of the day.", "options": ["noon", "low tide", "bedtime", "dawn"], "answer": 3},
    {"word": "colluvies", "sentence": "The garage had become a colluvies of broken bikes, paint tins, half a canoe and forty years of magazines.", "options": ["workshop", "jumbled heap", "museum", "neat archive"], "answer": 1},
  ],
  // #45 · Wed 25 Nov 2026
  [
    {"word": "flush", "sentence": "Flush with cash after selling his comic collection, Darren shouted the whole pub a round.", "options": ["brimming", "generous", "careless", "reckless"], "answer": 0},
    {"word": "credulous", "sentence": "The credulous tourists paid fifty dollars each to see a 'genuine drop bear' that was clearly a stuffed koala.", "options": ["jet-lagged", "excited", "wealthy", "gullible"], "answer": 3},
    {"word": "epicurean", "sentence": "The hotel's epicurean breakfast featured truffled eggs, house-cured salmon and pastries flown in from Paris.", "options": ["hasty", "budget", "healthy", "gourmet"], "answer": 3},
    {"word": "descry", "sentence": "From the lookout we could just descry a pod of whales spouting far out beyond the heads.", "options": ["count", "hear", "make out", "photograph"], "answer": 2},
    {"word": "confabulate", "sentence": "The three grandmothers would confabulate on the park bench every morning, solving the world's problems before ten.", "options": ["chat", "knit", "doze", "argue"], "answer": 0},
    {"word": "crapulent", "sentence": "Feeling crapulent after the wedding, the best man spent the next morning lying very still under a cold flannel.", "options": ["sunburnt", "hung-over", "heartbroken", "embarrassed"], "answer": 1},
    {"word": "crosspatch", "sentence": "Don't mind Grandpa; he's always a crosspatch until he's had his first cup of tea.", "options": ["chatterbox", "sleepyhead", "joker", "grump"], "answer": 3},
  ],
  // #46 · Thu 26 Nov 2026
  [
    {"word": "foil", "sentence": "Quick-thinking staff foiled the robbery by locking the thieves in the cool room until police arrived.", "options": ["reported", "filmed", "thwarted", "assisted"], "answer": 2},
    {"word": "culpable", "sentence": "The inquiry found the council partly culpable for the flooding, since it had approved houses on the flood plain.", "options": ["insured", "unaware", "praised", "to blame"], "answer": 3},
    {"word": "evanescent", "sentence": "The evanescent beauty of the cherry blossoms draws crowds every year, all hoping to arrive before the first strong wind.", "options": ["delicate", "fragrant", "famous", "fleeting"], "answer": 3},
    {"word": "despond", "sentence": "Don't despond: the first draft of anything is always terrible.", "options": ["lose heart", "give advice", "rush ahead", "show off"], "answer": 0},
    {"word": "cunningman", "sentence": "Desperate to find her lost ring, the farmer's wife paid the village cunningman to read the cards.", "options": ["pawnbroker", "fortune teller", "constable", "local blacksmith"], "answer": 1},
    {"word": "dandiprat", "sentence": "The dandiprat strutting about the stage barely reached the leading lady's shoulder, but his voice filled the theatre.", "options": ["stagehand", "understudy", "conductor", "little man"], "answer": 3},
    {"word": "deosculate", "sentence": "At the airport, the grandparents deosculated every grandchild twice before they'd even reached the baggage carousel.", "options": ["counted", "photographed", "scolded", "kissed warmly"], "answer": 3},
  ],
  // #47 · Fri 27 Nov 2026
  [
    {"word": "forge", "sentence": "Despite the rain, the walkers decided to forge ahead to the next hut rather than camp in the mud.", "options": ["push", "phone", "scout", "plan"], "answer": 0},
    {"word": "cursory", "sentence": "The mechanic gave the car a cursory glance and declared it 'probably fine'.", "options": ["puzzled", "quick", "careful", "worried"], "answer": 1},
    {"word": "febrile", "sentence": "In the febrile atmosphere before the election, every rumour spread like wildfire.", "options": ["gloomy", "feverish", "stale", "polite"], "answer": 1},
    {"word": "drear", "sentence": "The drear afternoon dragged on, rain against the windows and nothing on TV but lawn bowls.", "options": ["short", "lazy", "windy", "dismal"], "answer": 3},
    {"word": "desidious", "sentence": "A desidious student, he did his assignments only when the threat of failure became absolutely unavoidable.", "options": ["idle", "anxious", "gifted", "mature"], "answer": 0},
    {"word": "desipient", "sentence": "The meeting descended into desipient chatter about whose turn it was to buy the biscuits.", "options": ["urgent", "silly", "technical", "angry"], "answer": 1},
    {"word": "dingthrift", "sentence": "A dingthrift with his inheritance, he blew the lot on a speedboat, a racehorse and an ill-fated nightclub.", "options": ["philanthropist", "speculator", "spendthrift", "show-off"], "answer": 2},
  ],
  // #48 · Sat 28 Nov 2026
  [
    {"word": "fret", "sentence": "Don't fret about the exam now; you've done all the study you can.", "options": ["dream", "talk", "joke", "worry"], "answer": 3},
    {"word": "dearth", "sentence": "There's a real dearth of good Thai food in this town; the nearest decent pad see ew is forty minutes away.", "options": ["variety", "history", "abundance", "shortage"], "answer": 3},
    {"word": "fulminate", "sentence": "Every morning, the talkback host would fulminate against cyclists, councils and the price of parking.", "options": ["advertise", "joke", "rage", "report"], "answer": 2},
    {"word": "effulgent", "sentence": "The effulgent sunset turned the whole of Port Phillip Bay a molten gold.", "options": ["early", "chilly", "radiant", "hazy"], "answer": 2},
    {"word": "dodipoll", "sentence": "The dodipoll in the next caravan tried to put out his barbecue fire with a can of insect spray.", "options": ["ranger", "ninny", "retiree", "handyman"], "answer": 1},
    {"word": "dozzled", "sentence": "Dozzled after the heavy lunch, I stared at the same spreadsheet cell for twenty minutes.", "options": ["inspired", "overworked", "dull-witted", "irritated"], "answer": 2},
    {"word": "drumble", "sentence": "Don't drumble about; pack your bag, or we'll miss the bus!", "options": ["dawdle", "sing", "complain", "panic"], "answer": 0},
  ],
  // #49 · Sun 29 Nov 2026
  [
    {"word": "gall", "sentence": "He had the gall to ask for a reference after being sacked for stealing from the petty cash.", "options": ["courtesy", "patience", "nerve", "sense"], "answer": 2},
    {"word": "deferential", "sentence": "The young players were deferential to the veteran coach, calling him 'sir' and hanging on his every word.", "options": ["indifferent", "respectful", "hostile", "cheeky"], "answer": 1},
    {"word": "hagiography", "sentence": "The authorised biography reads like hagiography, glossing over every scandal and praising even his parking.", "options": ["uncritical worship", "a spy novel", "a ransom note", "a police report"], "answer": 0},
    {"word": "excoriate", "sentence": "The review didn't just criticise the restaurant; it excoriated it, from the stale bread to the 'hostile' music.", "options": ["praised", "ignored", "savaged", "summarised"], "answer": 2},
    {"word": "dubitate", "sentence": "She dubitated over the job offer for a week, writing pro-and-con lists on every napkin in the house.", "options": ["celebrated", "bragged", "laughed", "hesitated"], "answer": 3},
    {"word": "earwitness", "sentence": "An earwitness in the flat below heard the argument, the crash and then footsteps running down the stairs.", "options": ["police officer", "night guard", "nosy tenant", "listener"], "answer": 3},
    {"word": "ebrious", "sentence": "The ebrious best man swayed at the microphone and began his speech with a story about the groom's ex.", "options": ["overdressed", "unprepared", "tipsy", "nervous"], "answer": 2},
  ],
  // #50 · Mon 30 Nov 2026
  [
    {"word": "game", "sentence": "I'm game for anything this weekend, as long as it doesn't involve camping in the rain.", "options": ["tired", "willing", "available", "too busy"], "answer": 1},
    {"word": "demure", "sentence": "The demure flower girl smiled shyly and hid behind her mother's dress whenever anyone spoke to her.", "options": ["sticky", "grumpy", "giggling", "reserved"], "answer": 3},
    {"word": "histrionic", "sentence": "His histrionic reaction to a papercut, complete with a request for an ambulance, became family legend.", "options": ["squeamish", "stoic", "dramatic", "delayed"], "answer": 2},
    {"word": "execrate", "sentence": "Generations of schoolchildren have execrated the inventor of algebra homework.", "options": ["praised", "cursed", "studied", "imitated"], "answer": 1},
    {"word": "efflation", "sentence": "Each efflation of the bellows sent sparks spiralling up the blacksmith's chimney.", "options": ["drip of oil", "sudden creak", "puff of air", "heavy thump"], "answer": 2},
    {"word": "esurient", "sentence": "Esurient after the long bushwalk, we demolished an entire tray of lamingtons in four minutes.", "options": ["ravenous", "sunburnt", "exhausted", "elated"], "answer": 0},
    {"word": "evenfall", "sentence": "The bats begin to stream out of the gully at evenfall, darkening the sky above the botanic gardens.", "options": ["noon", "dawn", "dusk", "lunch"], "answer": 2},
  ],
  // #51 · Tue 01 Dec 2026
  [
    {"word": "gross", "sentence": "The film grossed over two billion dollars, making it the most successful release of the year.", "options": ["spent", "lost", "borrowed", "earned"], "answer": 3},
    {"word": "desultory", "sentence": "The two strangers made desultory conversation about the weather while waiting for the delayed train.", "options": ["half-hearted", "flirtatious", "heated", "fascinating"], "answer": 0},
    {"word": "impecunious", "sentence": "As impecunious students, we lived on two-minute noodles and the free biscuits at the library.", "options": ["homesick", "carefree", "penniless", "studious"], "answer": 2},
    {"word": "finical", "sentence": "The finical client sent the logo back eleven times because the blue wasn't 'blue enough'.", "options": ["absent", "fussy", "wealthy", "colourblind"], "answer": 1},
    {"word": "facetiae", "sentence": "The old newspaper column was full of facetiae: puns, quips and the occasional limerick about local politicians.", "options": ["classifieds", "obituaries", "weather notes", "witty sayings"], "answer": 3},
    {"word": "faineant", "sentence": "The faineant prince spent his days napping in the palace gardens while his ministers ran the country.", "options": ["exiled", "tyrannical", "do-nothing", "ailing"], "answer": 2},
    {"word": "fantod", "sentence": "My mother worked herself into a fantod over the seating plan, convinced two of her sisters would come to blows.", "options": ["fit of giggles", "nervous fuss", "silent sulk", "deep sleep"], "answer": 1},
  ],
  // #52 · Wed 02 Dec 2026
  [
    {"word": "hound", "sentence": "The paparazzi hounded the young actor from the airport to his hotel and back again.", "options": ["pursued", "drove", "ignored", "praised"], "answer": 0},
    {"word": "didactic", "sentence": "The film was well acted but too didactic, stopping every ten minutes to lecture the audience about recycling.", "options": ["violent", "expensive", "preachy", "slow"], "answer": 2},
    {"word": "inchoate", "sentence": "The idea for her novel was still inchoate, a few scribbled notes and a character with no name.", "options": ["secret", "borrowed", "brilliant", "unformed"], "answer": 3},
    {"word": "forfend", "sentence": "Heaven forfend that the trains should actually run on time during the footy finals!", "options": ["know", "hope", "decide", "forbid"], "answer": 3},
    {"word": "bridecake", "sentence": "The bridecake had five tiers, real flowers and a tiny sugar dog dressed as the best man.", "options": ["birthday cake", "wedding cake", "christening cake", "anniversary cake"], "answer": 1},
    {"word": "clouterly", "sentence": "My clouterly attempt at a pirouette ended with me flat on my back in the Christmas tree.", "options": ["graceful", "clumsy", "drunken", "secret"], "answer": 1},
    {"word": "fearnaught", "sentence": "A real fearnaught, my six-year-old jumped off the top diving board on her first day at the pool.", "options": ["chatterbox", "beginner", "daredevil", "show-off"], "answer": 2},
  ],
  // #53 · Thu 03 Dec 2026
  [
    {"word": "intimate", "sentence": "The coach intimated that a few senior players might not be selected next season.", "options": ["denied", "hinted", "announced", "boasted"], "answer": 1},
    {"word": "deleterious", "sentence": "Too much screen time can have a deleterious effect on children's sleep.", "options": ["calming", "minor", "harmful", "lasting"], "answer": 2},
    {"word": "bowdlerise", "sentence": "The publishers bowdlerised the memoir, cutting every swear word and most of the funny bits.", "options": ["illustrated", "translated", "reprinted", "censored"], "answer": 3},
    {"word": "froward", "sentence": "The froward child refused every request, contradicting her parents purely out of habit.", "options": ["precocious", "sleepy", "sickly", "contrary"], "answer": 3},
    {"word": "fiddledeedee", "sentence": "'Fiddledeedee,' said Nana when I told her a dishwasher would save time; she's washed by hand for sixty years.", "options": ["Nonsense!", "How lovely!", "Show me!", "Thank you!"], "answer": 0},
    {"word": "figary", "sentence": "On a sudden figary, Mum booked us all on a midnight ghost tour of the old jail.", "options": ["dare", "budget", "warning", "whim"], "answer": 3},
    {"word": "flustration", "sentence": "In her flustration, she put the milk in the pantry and the cereal in the fridge.", "options": ["fluster", "excitement", "wisdom", "laziness"], "answer": 0},
  ],
  // #54 · Fri 04 Dec 2026
  [
    {"word": "lot", "sentence": "She accepted her lot with good humour, even when the third flood in a decade washed away the shed.", "options": ["prize", "debt", "fate", "land"], "answer": 2},
    {"word": "dogmatic", "sentence": "My dogmatic uncle insists there is only one correct way to stack a dishwasher, and it's his.", "options": ["forgetful", "rigid", "practical", "easygoing"], "answer": 1},
    {"word": "baleful", "sentence": "The bouncer gave us a baleful look that made it clear we would not be getting in.", "options": ["tired", "puzzled", "friendly", "menacing"], "answer": 3},
    {"word": "gainsay", "sentence": "No one could gainsay her expertise; she'd been mapping the reef for thirty years.", "options": ["explain", "envy", "dispute", "match"], "answer": 2},
    {"word": "forgather", "sentence": "Old school friends forgather at the same pub every Anzac Day to play two-up and swap stories.", "options": ["meet up", "argue", "volunteer", "march"], "answer": 0},
    {"word": "fragor", "sentence": "The fragor of the collapsing scaffold echoed down the street, sending pigeons flapping in every direction.", "options": ["loud crash", "long shadow", "cloud of dust", "rusty smell"], "answer": 0},
    {"word": "frescade", "sentence": "After the market's heat and noise, we found a frescade beneath the fig trees and sat down with our gelato.", "options": ["public toilet", "busker's pitch", "water fountain", "shady walk"], "answer": 3},
  ],
  // #55 · Sat 05 Dec 2026
  [
    {"word": "litter", "sentence": "Our kelpie had a litter of six last night, all black except for one with a single white sock.", "options": ["brood of pups", "set of toys", "bed of straw", "bag of rubbish"], "answer": 0},
    {"word": "efficacious", "sentence": "The new vaccine proved highly efficacious, cutting hospital admissions by ninety per cent.", "options": ["expensive", "popular", "effective", "controversial"], "answer": 2},
    {"word": "imbroglio", "sentence": "What began as a dispute over a fence turned into a full-blown legal imbroglio involving three councils and a koala.", "options": ["friendly chat", "quick settlement", "media campaign", "tangled mess"], "answer": 3},
    {"word": "grandiloquent", "sentence": "The grandiloquent mayor described the new roundabout as 'a triumph of civic vision for the ages'.", "options": ["modest", "honest", "tired", "pompous"], "answer": 3},
    {"word": "fuzzle", "sentence": "Two glasses of punch were enough to fuzzle my great-aunt, who then challenged the vicar to arm wrestling.", "options": ["offend", "make tipsy", "embarrass", "bore"], "answer": 1},
    {"word": "hyetal", "sentence": "The hyetal map showed the ranges in deep blue and the plains below them in pale yellow.", "options": ["elevation", "population", "soil type", "rainfall"], "answer": 3},
    {"word": "latchet", "sentence": "The cobbler threaded a new leather latchet through the eyelets of my old boots.", "options": ["sole", "buckle", "tongue", "lace"], "answer": 3},
  ],
  // #56 · Sun 06 Dec 2026
  [
    {"word": "long", "sentence": "After a month of hospital food, he longed for a proper meat pie.", "options": ["queued", "yearned", "paid", "searched"], "answer": 1},
    {"word": "effusive", "sentence": "The effusive tour guide hugged everyone on the bus and cried when we left.", "options": ["bossy", "nervous", "gushing", "elderly"], "answer": 2},
    {"word": "inimical", "sentence": "Late nights and energy drinks are inimical to good study habits.", "options": ["essential", "related", "hostile", "unknown"], "answer": 2},
    {"word": "hortatory", "sentence": "The coach's hortatory speech at half-time, all clenched fists and 'dig deep', seemed to work.", "options": ["rousing", "apologetic", "tactical", "rambling"], "answer": 0},
    {"word": "gadder", "sentence": "My great-aunt was a notorious gadder, visiting a different neighbour every afternoon to swap the latest news.", "options": ["card cheat", "night walker", "roving gossip", "fussy cook"], "answer": 2},
    {"word": "gildale", "sentence": "The cricket club's end-of-season gildale ran up a bar tab that everyone split down to the last cent.", "options": ["fundraiser", "trophy night", "awards dinner", "booze-up"], "answer": 3},
    {"word": "jackpudding", "sentence": "At the fair, a jackpudding in a striped suit juggled eggs and fell into the duck pond on purpose.", "options": ["buffoon", "auctioneer", "magician", "pickpocket"], "answer": 0},
  ],
  // #57 · Mon 07 Dec 2026
  [
    {"word": "minute", "sentence": "The jeweller pointed out a minute scratch on the watch face, invisible without a magnifying glass.", "options": ["deep", "recent", "costly", "tiny"], "answer": 3},
    {"word": "egregious", "sentence": "The referee's egregious error, awarding a goal that clearly went wide, sparked a pitch invasion.", "options": ["glaring", "rare", "minor", "honest"], "answer": 0},
    {"word": "irascible", "sentence": "The irascible chef threw a saucepan at the wall when the soufflé collapsed.", "options": ["exhausted", "perfectionist", "short-tempered", "famous"], "answer": 2},
    {"word": "illume", "sentence": "A single lantern was enough to illume the tiny cabin and the snow falling past the window.", "options": ["warm", "guard", "decorate", "light up"], "answer": 3},
    {"word": "garboil", "sentence": "The garboil in the school hall, with three hundred kids and one broken fire alarm, could be heard from the road.", "options": ["music", "smoke", "uproar", "assembly"], "answer": 2},
    {"word": "johnadreams", "sentence": "Stop being such a johnadreams and get your shoes on; the bus leaves in two minutes!", "options": ["daydreamer", "show-off", "slowcoach", "grump"], "answer": 0},
    {"word": "lutulent", "sentence": "After the flood the river ran lutulent and brown, carrying branches, fence posts and the odd surprised duck.", "options": ["noisy", "muddy", "shallow", "swift"], "answer": 1},
  ],
  // #58 · Tue 08 Dec 2026
  [
    {"word": "mean", "sentence": "The mean temperature in Hobart in July is around eight degrees, though it feels much colder.", "options": ["nastiest", "harsh", "average", "lowest"], "answer": 2},
    {"word": "elucidate", "sentence": "The teacher drew a diagram to elucidate how the heart pumps blood around the body.", "options": ["clarify", "question", "celebrate", "measure"], "answer": 0},
    {"word": "lachrymose", "sentence": "The lachrymose best man had to stop his speech three times to blow his nose.", "options": ["nervous", "weepy", "forgetful", "drunken"], "answer": 1},
    {"word": "importune", "sentence": "Street vendors importune every tourist who steps off the ferry, waving postcards and sunhats.", "options": ["follow", "greet", "ignore", "pester"], "answer": 3},
    {"word": "gazingstock", "sentence": "After his trousers split on stage, the poor singer became the gazingstock of the entire festival.", "options": ["headline act", "sound engineer", "laughing stock", "fashion icon"], "answer": 2},
    {"word": "kamsin", "sentence": "The kamsin blew in from the south, coating every surface in fine sand and pushing the temperature past forty-five.", "options": ["hot desert wind", "spring festival", "trading ship", "camel caravan"], "answer": 0},
    {"word": "latrate", "sentence": "Every time the postie came, the dog would latrate furiously from behind the side gate.", "options": ["hide", "bark", "dig", "whimper"], "answer": 1},
  ],
  // #59 · Wed 09 Dec 2026
  [
    {"word": "nurse", "sentence": "He nursed a grudge against the referee for twenty years after that grand final.", "options": ["forgave", "laughed off", "wrote down", "kept alive"], "answer": 3},
    {"word": "equanimity", "sentence": "She received the news of her redundancy with remarkable equanimity, then went home and repainted the kitchen.", "options": ["confusion", "fury", "relief", "calm"], "answer": 3},
    {"word": "limn", "sentence": "In just a few pages, the author manages to limn a whole country town: the pub, the gossip, the heat.", "options": ["portray", "insult", "praise", "invent"], "answer": 0},
    {"word": "inapposite", "sentence": "His inapposite joke about funerals, made at a funeral, cleared the room.", "options": ["hilarious", "mumbled", "ill-suited", "rehearsed"], "answer": 2},
    {"word": "glumpy", "sentence": "Glumpy after losing the grand final, the players sat in the change rooms without saying a word.", "options": ["relieved", "injured", "exhausted", "sulky"], "answer": 3},
    {"word": "ingurgitate", "sentence": "Watching him ingurgitate an entire family pizza in eight minutes was equal parts impressive and alarming.", "options": ["deliver", "photograph", "gulp down", "slice up"], "answer": 2},
    {"word": "lackbrain", "sentence": "Some lackbrain had parked across three spaces outside the hospital emergency department.", "options": ["doctor", "dimwit", "tradie", "visitor"], "answer": 1},
  ],
  // #60 · Thu 10 Dec 2026
  [
    {"word": "moor", "sentence": "The fishing boats were moored in the harbour, rocking gently as the storm passed overhead.", "options": ["sinking", "racing", "tied up", "painted"], "answer": 2},
    {"word": "equivocal", "sentence": "The minister gave an equivocal answer, managing to sound both for and against the proposal.", "options": ["brief", "vague", "honest", "angry"], "answer": 1},
    {"word": "maladroit", "sentence": "His maladroit handling of the complaint turned one unhappy customer into a viral campaign.", "options": ["swift", "polite", "secretive", "bungling"], "answer": 3},
    {"word": "indecorous", "sentence": "Laughing loudly during the minute's silence was considered highly indecorous.", "options": ["improper", "contagious", "brave", "patriotic"], "answer": 0},
    {"word": "glunch", "sentence": "The toddler gave me a glunch from her highchair when I took away the biscuit tin.", "options": ["sticky kiss", "sullen scowl", "loud burp", "sly wink"], "answer": 1},
    {"word": "interjangle", "sentence": "In the shed, a dozen wind chimes interjangled every time the breeze came through the open door.", "options": ["swayed", "glittered", "clattered", "rusted"], "answer": 2},
    {"word": "leptology", "sentence": "The meeting's two hours of leptology over the font size of the newsletter tested everyone's patience.", "options": ["trivial detail", "bright ideas", "free coffee", "hard bargaining"], "answer": 0},
  ],
  // #61 · Fri 11 Dec 2026
  [
    {"word": "pan", "sentence": "Critics panned the musical, calling it 'two and a half hours of my life I will never get back'.", "options": ["funded", "filmed", "praised", "slammed"], "answer": 3},
    {"word": "erudite", "sentence": "Her erudite lecture ranged across Greek philosophy, medieval astronomy and the history of the potato.", "options": ["scholarly", "rushed", "rambling", "entertaining"], "answer": 0},
    {"word": "martinet", "sentence": "The new captain was a martinet who inspected boots, beds and even toothbrushes every morning at six.", "options": ["neat freak", "early riser", "stickler", "germophobe"], "answer": 2},
    {"word": "insouciant", "sentence": "With insouciant charm, the busker kept playing while a magpie stole his hat and most of his coins.", "options": ["carefree", "nervous", "practised", "furious"], "answer": 0},
    {"word": "gobemouche", "sentence": "Only a gobemouche would believe an email claiming he'd won a foreign prince's lottery.", "options": ["tech expert", "lucky winner", "spam filter", "gullible fool"], "answer": 3},
    {"word": "jangler", "sentence": "The tram was full of janglers, every one of them chattering loudly into a phone.", "options": ["buskers", "babblers", "pickpockets", "students"], "answer": 1},
    {"word": "lickerish", "sentence": "The lickerish boy hovered by the cake stall all morning, eyeing the vanilla slices.", "options": ["sweet-toothed", "bored", "short-sighted", "light-fingered"], "answer": 0},
  ],
  // #62 · Sat 12 Dec 2026
  [
    {"word": "pen", "sentence": "The farmer drove the sheep into the pen before the storm hit.", "options": ["truck", "valley", "creek", "paddock"], "answer": 3},
    {"word": "esoteric", "sentence": "The quiz night's final round was so esoteric that only the retired librarian scored a single point.", "options": ["rigged", "obscure", "rushed", "noisy"], "answer": 1},
    {"word": "mendicant", "sentence": "The mendicant monks walked from village to village, carrying only a bowl for whatever food they were given.", "options": ["healing", "teaching", "begging", "silent"], "answer": 2},
    {"word": "inveigh", "sentence": "For forty years, my grandfather would inveigh against daylight saving every October.", "options": ["protest", "prepare", "vote", "joke"], "answer": 0},
    {"word": "grouty", "sentence": "The grouty old ferryman refused to take us across until we'd paid twice and apologised for something.", "options": ["seasick", "grouchy", "honest", "sleepy"], "answer": 1},
    {"word": "knappish", "sentence": "Short of sleep, the new parents grew knappish with each other over who'd forgotten the nappy bag.", "options": ["giggly", "tearful", "sentimental", "snappy"], "answer": 3},
    {"word": "lickpenny", "sentence": "The parking meter outside the hospital is a notorious lickpenny, swallowing coins without giving any time.", "options": ["safety hazard", "money-eater", "landmark", "eyesore"], "answer": 1},
  ],
  // #63 · Sun 13 Dec 2026
  [
    {"word": "plot", "sentence": "They bought a small plot on the edge of town and planted it with tomatoes, beans and pumpkins.", "options": ["floor plan", "story", "scheme", "patch"], "answer": 3},
    {"word": "exculpate", "sentence": "The new DNA evidence helped exculpate the man who'd spent eleven years in prison.", "options": ["describe", "convict", "identify", "clear"], "answer": 3},
    {"word": "misanthrope", "sentence": "A lifelong misanthrope, he moved to a remote island and put up a sign reading 'Visitors Not Welcome'.", "options": ["artist", "people-hater", "keen birdwatcher", "fisherman"], "answer": 1},
    {"word": "irenic", "sentence": "The new chair took an irenic approach, inviting both feuding factions to the same barbecue.", "options": ["peacemaking", "legalistic", "aggressive", "cautious"], "answer": 0},
    {"word": "gulist", "sentence": "A gulist of the highest order, my uncle treats every buffet as a personal challenge.", "options": ["glutton", "show-off", "gambler", "grump"], "answer": 0},
    {"word": "lobcock", "sentence": "That lobcock of a bouncer took ten minutes to check my ID, then forgot why he was holding it.", "options": ["brute", "jokester", "dullard", "newbie"], "answer": 2},
    {"word": "marchpane", "sentence": "The bakery's Christmas window was full of marchpane fruits, coloured and shaped to look like tiny apples and pears.", "options": ["candle wax", "felt", "glass", "marzipan"], "answer": 3},
  ],
  // #64 · Mon 14 Dec 2026
  [
    {"word": "poach", "sentence": "The rival firm tried to poach our best designer with a bigger salary and a company car.", "options": ["copy", "lure", "train", "sue"], "answer": 1},
    {"word": "exigent", "sentence": "The exigent circumstances, a flood and two staff in hospital, forced the café to close for a week.", "options": ["pressing", "mysterious", "unusual", "temporary"], "answer": 0},
    {"word": "opprobrium", "sentence": "The company faced public opprobrium after it was revealed that it had been dumping waste in the river.", "options": ["sympathy", "investigation", "condemnation", "curiosity"], "answer": 2},
    {"word": "jocund", "sentence": "The jocund innkeeper greeted every traveller with a joke and a mug of cider.", "options": ["suspicious", "stingy", "weary", "merry"], "answer": 3},
    {"word": "guttler", "sentence": "The guttler at the next table slurped his laksa so loudly that the waiters stopped to watch.", "options": ["loud talker", "greedy eater", "regular", "food critic"], "answer": 1},
    {"word": "loggerheaded", "sentence": "Only a loggerheaded official could insist that a dog fill in its own pet registration form.", "options": ["thick-headed", "power-hungry", "overworked", "foreign"], "answer": 0},
    {"word": "mirksome", "sentence": "We stumbled through the mirksome forest, our phone torches barely reaching the next tree.", "options": ["gloomy", "silent", "tangled", "ancient"], "answer": 0},
  ],
  // #65 · Tue 15 Dec 2026
  [
    {"word": "prime", "sentence": "Prime the wall properly before you paint, or the old stains will bleed straight through.", "options": ["wash", "photograph", "measure", "undercoat"], "answer": 3},
    {"word": "expedient", "sentence": "Lying to the inspector was expedient in the short term but disastrous by the end of the week.", "options": ["illegal", "convenient", "dangerous", "heroic"], "answer": 1},
    {"word": "panegyric", "sentence": "The minister's speech was a panegyric to the new freeway, lingering lovingly on everything down to the lane markings.", "options": ["warning", "summary", "tribute", "requiem"], "answer": 2},
    {"word": "lubberly", "sentence": "The lubberly new deckhand tripped over the anchor chain twice before we'd even left the marina.", "options": ["talkative", "seasick", "eager", "clumsy"], "answer": 3},
    {"word": "heavisome", "sentence": "The heavisome lecture, two hours of tax law straight after lunch, sent half the class to sleep.", "options": ["urgent", "dreary", "lively", "brief"], "answer": 1},
    {"word": "lucubrate", "sentence": "In the weeks before her exams, she would lucubrate until two in the morning by the light of a single lamp.", "options": ["doodle", "study late", "worry", "pace about"], "answer": 1},
    {"word": "morosoph", "sentence": "The professor was a true morosoph: he could recite Homer in Greek but couldn't work out how to boil an egg.", "options": ["learned fool", "picky eater", "bookish snob", "clever linguist"], "answer": 0},
  ],
  // #66 · Wed 16 Dec 2026
  [
    {"word": "pupil", "sentence": "In the bright light, her pupils shrank to tiny black dots.", "options": ["earrings", "eye centres", "tiny freckles", "students"], "answer": 1},
    {"word": "extol", "sentence": "The brochure extolled the resort's 'pristine beaches', failing to mention the airport next door.", "options": ["mapped", "listed", "described", "praised"], "answer": 3},
    {"word": "peripatetic", "sentence": "Her peripatetic childhood, with eleven schools in six countries, left her able to make friends anywhere.", "options": ["nomadic", "bilingual", "lonely", "privileged"], "answer": 0},
    {"word": "minatory", "sentence": "The sky turned a minatory shade of green, and the farmers hurried to get the hay in.", "options": ["beautiful", "peculiar", "familiar", "menacing"], "answer": 3},
    {"word": "highflier", "sentence": "A highflier with grand opinions, he booked first-class tickets on a salary that barely covered his rent.", "options": ["extravagant poser", "frequent flyer", "nervous traveller", "budget expert"], "answer": 0},
    {"word": "macrology", "sentence": "His wedding speech was pure macrology: forty minutes on his own childhood and one sentence about the couple.", "options": ["wordplay", "tribute", "waffle", "planning"], "answer": 2},
    {"word": "moonling", "sentence": "Only a moonling would go swimming at Bells Beach in July without a wetsuit.", "options": ["local", "surfer", "day-tripper", "simpleton"], "answer": 3},
  ],
  // #67 · Thu 17 Dec 2026
  [
    {"word": "quarry", "sentence": "The fox crept through the long grass, eyes fixed on its quarry.", "options": ["mate", "den", "path", "prey"], "answer": 3},
    {"word": "facetious", "sentence": "His facetious reply, 'I'll get back to you next decade,' did not amuse the boss.", "options": ["honest", "flippant", "anxious", "formal"], "answer": 1},
    {"word": "piquant", "sentence": "The chef's piquant sauce, laced with lime and chilli, woke up an otherwise bland piece of fish.", "options": ["mild", "sweet", "creamy", "zesty"], "answer": 3},
    {"word": "mingy", "sentence": "The mingy portions at that café wouldn't feed a sparrow, let alone a hungry builder.", "options": ["pricey", "fancy", "greasy", "stingy"], "answer": 3},
    {"word": "hobbyhorsical", "sentence": "My hobbyhorsical uncle can turn any conversation, even one about the weather, into a lecture on steam trains.", "options": ["obsessive", "boastful", "forgetful", "jovial"], "answer": 0},
    {"word": "mammothrept", "sentence": "Raised by a doting nan who never said no, my cousin was a mammothrept who still expected breakfast in bed at thirty.", "options": ["only child", "picky eater", "spoilt child", "late bloomer"], "answer": 2},
    {"word": "musard", "sentence": "A born musard, my father once walked to the shop for milk and came back three hours later with a library book and no milk.", "options": ["miser", "dreamer", "joker", "wanderer"], "answer": 1},
  ],
  // #68 · Fri 18 Dec 2026
  [
    {"word": "rally", "sentence": "The share market rallied in the afternoon after a shaky start.", "options": ["recovered", "gathered", "protested", "closed"], "answer": 0},
    {"word": "fastidious", "sentence": "My fastidious flatmate labels every item in the fridge and irons his socks.", "options": ["generous", "meticulous", "forgetful", "unhygienic"], "answer": 1},
    {"word": "plangent", "sentence": "The plangent sound of the bagpipes drifted across the cemetery as the coffin was lowered.", "options": ["piercing", "distant", "cheerful", "mournful"], "answer": 3},
    {"word": "monitory", "sentence": "A monitory sign at the trailhead listed the six people who had been lost on the mountain that year.", "options": ["faded", "historic", "warning", "welcome"], "answer": 2},
    {"word": "hoddydoddy", "sentence": "The hoddydoddy in the ticket queue tried to pay for a train fare with a library card.", "options": ["nitwit", "student", "tourist", "pensioner"], "answer": 0},
    {"word": "madbrain", "sentence": "Some madbrain decided to drive through the floodwater and had to be winched off his car roof.", "options": ["reporter", "volunteer", "farmer", "hothead"], "answer": 3},
    {"word": "mopish", "sentence": "The dog has been mopish ever since the kids went back to school, lying by the door all day.", "options": ["aggressive", "dejected", "energetic", "hungry"], "answer": 1},
  ],
  // #69 · Sat 19 Dec 2026
  [
    {"word": "rank", "sentence": "The bins behind the fish market were rank by the end of the week.", "options": ["emptied", "overflowing", "stinking", "locked"], "answer": 2},
    {"word": "fatuous", "sentence": "The fatuous questions at the press conference ranged from 'How do you feel?' to 'What's your favourite colour?'", "options": ["inane", "hostile", "probing", "rehearsed"], "answer": 0},
    {"word": "polemic", "sentence": "Her latest book is a fierce polemic against fast fashion, naming and shaming a dozen brands.", "options": ["cookbook", "attack", "novel", "memoir"], "answer": 1},
    {"word": "mulish", "sentence": "My mulish toddler sat down in the middle of the supermarket and refused to move another inch.", "options": ["stubborn", "hungry", "curious", "sleepy"], "answer": 0},
    {"word": "monotonist", "sentence": "At dinner parties my cousin is an unrepentant monotonist: every conversation somehow ends up back at his cryptocurrency.", "options": ["one-topic bore", "show-off", "food snob", "quiet guest"], "answer": 0},
    {"word": "manducate", "sentence": "The cow would slowly manducate each mouthful of clover, watching us suspiciously the whole time.", "options": ["sniff", "spit", "trample", "chew"], "answer": 3},
    {"word": "morology", "sentence": "Ignore the morology on that forum; half the posts claim the Earth is hollow.", "options": ["personal attacks", "foolish talk", "spam adverts", "expert advice"], "answer": 1},
  ],
  // #70 · Sun 20 Dec 2026
  [
    {"word": "raze", "sentence": "The old cinema was razed to make way for a car park, to the dismay of the whole town.", "options": ["sold", "demolished", "renovated", "raised"], "answer": 1},
    {"word": "fecund", "sentence": "The fecund soil of the volcanic plains grows potatoes the size of footballs.", "options": ["rocky", "sandy and dry", "fertile", "dark"], "answer": 2},
    {"word": "portentous", "sentence": "There was a portentous silence before the judge read out the verdict.", "options": ["brief", "polite", "ominous", "awkward"], "answer": 2},
    {"word": "nettlesome", "sentence": "The nettlesome mosquito kept whining in my ear all night, always just out of reach.", "options": ["hungry", "silent", "minuscule", "irritating"], "answer": 3},
    {"word": "muckerer", "sentence": "The old muckerer kept his fortune in biscuit tins under the floorboards and patched his own shoes with tape.", "options": ["collector", "miser", "banker", "hermit"], "answer": 1},
    {"word": "mulligrubs", "sentence": "Too many cherries gave the twins the mulligrubs, and they spent the afternoon curled up on the couch, groaning.", "options": ["hiccups", "giggles", "gripes", "sulks"], "answer": 2},
    {"word": "myriologue", "sentence": "At the village funeral, an old woman sang a myriologue she made up on the spot, listing all the dead man's kindnesses.", "options": ["dirge", "lullaby", "wedding song", "drinking song"], "answer": 0},
  ],
  // #71 · Mon 21 Dec 2026
  [
    {"word": "recess", "sentence": "We found a little stone statue hidden in a recess in the garden wall.", "options": ["crack", "gateway", "alcove", "mural"], "answer": 2},
    {"word": "feckless", "sentence": "Her feckless brother lost his third job in a month and then borrowed money for a jet ski.", "options": ["unlucky", "hopeless", "sporty", "ambitious"], "answer": 1},
    {"word": "prolix", "sentence": "The report was so prolix that the summary alone ran to forty pages.", "options": ["secret", "biased", "wordy", "urgent"], "answer": 2},
    {"word": "obtrude", "sentence": "I didn't want to obtrude on their grief, so I left the flowers on the doorstep and slipped away.", "options": ["comment", "dwell", "insist", "intrude"], "answer": 3},
    {"word": "multiloquy", "sentence": "The radio host's multiloquy filled three hours a day, and listeners swore he never paused for breath.", "options": ["endless chatter", "relentless jokes", "angry rants", "phone-ins"], "answer": 0},
    {"word": "nasute", "sentence": "The nasute sommelier could name the vineyard after a single sniff.", "options": ["keen-nosed", "young", "snobbish", "French-born"], "answer": 0},
    {"word": "mumpish", "sentence": "Mumpish after his team's loss, Dad didn't say a word all through dinner.", "options": ["drunk", "hungry", "sullen", "tired"], "answer": 2},
  ],
  // #72 · Tue 22 Dec 2026
  [
    {"word": "reel", "sentence": "Still reeling from the news, she sat down on the front steps and stared at her phone.", "options": ["fishing", "dazed", "dancing", "laughing"], "answer": 1},
    {"word": "fetid", "sentence": "A fetid smell rose from the drain after the heatwave.", "options": ["sweet", "smoky", "faint", "rotten"], "answer": 3},
    {"word": "propinquity", "sentence": "The study found that propinquity, not shared interests, best predicted who became friends in the dorm.", "options": ["height", "sense of humour", "closeness", "wealth"], "answer": 2},
    {"word": "odoriferous", "sentence": "The odoriferous cheese stall at the market could be detected from the car park.", "options": ["smelly", "pricey", "popular", "crowded"], "answer": 0},
    {"word": "neogamist", "sentence": "As neogamists, the couple were still discovering which of them left wet towels on the bed.", "options": ["teenagers", "newlyweds", "flatmates", "tourists"], "answer": 1},
    {"word": "newsmonger", "sentence": "The local newsmonger knew about the divorce before the couple had even told their kids.", "options": ["counsellor", "lawyer", "reporter", "gossip"], "answer": 3},
    {"word": "heydeguy", "sentence": "At the harvest festival, the villagers danced the heydeguy around the bonfire, hand in hand.", "options": ["drinking game", "harvest song", "country dance", "fire ritual"], "answer": 2},
  ],
  // #73 · Wed 23 Dec 2026
  [
    {"word": "refrain", "sentence": "The crowd joined in the refrain, singing so loudly that the band could barely be heard.", "options": ["chorus", "applause", "protest", "silence"], "answer": 0},
    {"word": "flippant", "sentence": "His flippant response to the safety warning, 'What's the worst that could happen?', did not reassure anyone.", "options": ["nervous", "official", "glib", "detailed"], "answer": 2},
    {"word": "quiescent", "sentence": "The volcano has been quiescent for two hundred years, but scientists still monitor it daily.", "options": ["growing", "famous", "erupting", "dormant"], "answer": 3},
    {"word": "orotund", "sentence": "The narrator's orotund voice made even the instructions on a cereal box sound like Shakespeare.", "options": ["soft and breathy", "thin and nasal", "fast and clipped", "rich and resonant"], "answer": 3},
    {"word": "gewgaw", "sentence": "The market stalls were full of gewgaws: plastic sunglasses, light-up yo-yos and Opera House fridge magnets.", "options": ["local produce", "handmade quilts", "cheap trinkets", "vintage clothes"], "answer": 2},
    {"word": "luskish", "sentence": "The heat made us all luskish, and we spent the afternoon horizontal in front of the fan.", "options": ["chatty", "sluggish", "hungry", "irritable"], "answer": 1},
    {"word": "lambale", "sentence": "Every spring the station held a lambale, with a whole sheep on the spit and a band in the woolshed.", "options": ["shearing feast", "wool auction", "rodeo", "sheepdog trial"], "answer": 0},
  ],
  // #74 · Thu 24 Dec 2026
  [
    {"word": "refuse", "sentence": "The council collects household refuse every Tuesday morning, so put the bins out the night before.", "options": ["rubbish", "mail", "rates", "complaints"], "answer": 0},
    {"word": "furtive", "sentence": "The cat gave a furtive glance towards the kitchen bench, where the fish was defrosting.", "options": ["sleepy", "frightened", "sneaky", "bored"], "answer": 2},
    {"word": "rapacious", "sentence": "Rapacious developers bought up the beachfront, bulldozing the fish-and-chip shops for luxury towers.", "options": ["local", "foreign", "greedy", "visionary"], "answer": 2},
    {"word": "palter", "sentence": "When asked where the money had gone, the treasurer began to palter, offering half-answers and vague apologies.", "options": ["weep", "confess", "shout", "hedge"], "answer": 3},
    {"word": "nidorous", "sentence": "The nidorous air outside the kebab shop made it impossible to walk past without stopping.", "options": ["roast-scented", "smoke-hazy", "rain-soaked", "traffic-choked"], "answer": 0},
    {"word": "nidget", "sentence": "Don't be a nidget; the spider is smaller than your thumbnail.", "options": ["coward", "tattletale", "bully", "show-off"], "answer": 0},
    {"word": "ninnyhammer", "sentence": "The ninnyhammer at the barbecue tried to flip a sausage with a garden rake.", "options": ["host", "fool", "kid", "chef"], "answer": 1},
  ],
  // #75 · Fri 25 Dec 2026
  [
    {"word": "rent", "sentence": "There was a long rent in the sail where the storm had caught it against the mast.", "options": ["stain", "tear", "patch", "fold"], "answer": 1},
    {"word": "fortuitous", "sentence": "Their meeting was entirely fortuitous: both had missed the same train and ended up sharing a taxi.", "options": ["romantic", "awkward", "planned", "chance"], "answer": 3},
    {"word": "pulchritude", "sentence": "The pageant judges claimed to value intelligence, but the scoring sheet had a whole column for pulchritude.", "options": ["punctuality", "beauty", "posture", "poise"], "answer": 1},
    {"word": "perfervid", "sentence": "The perfervid fans camped outside the stadium for three days to get front-row tickets.", "options": ["patient", "sunburnt", "zealous", "local"], "answer": 2},
    {"word": "nugacity", "sentence": "After an hour of nugacity about the colour of the logo, the committee finally turned to the budget.", "options": ["trivial talk", "awkward silence", "heated debate", "careful study"], "answer": 0},
    {"word": "oblatrate", "sentence": "The neighbour's terrier would oblatrate at every passing jogger, then retreat behind the hydrangeas.", "options": ["snarl", "stare", "wag", "whine"], "answer": 0},
    {"word": "prothalamion", "sentence": "Her brother wrote a prothalamion for the wedding and sang it, slightly off-key, just before the vows.", "options": ["guest list", "wedding hymn", "love letter", "funny wedding toast"], "answer": 1},
  ],
  // #76 · Sat 26 Dec 2026
  [
    {"word": "rifle", "sentence": "The burglar rifled through every drawer, scattering clothes and papers across the bedroom floor.", "options": ["cleaned", "shot", "rummaged", "tiptoed"], "answer": 2},
    {"word": "grandiose", "sentence": "His grandiose plans for the backyard included a moat, a turret and a heated lagoon.", "options": ["showy", "secret", "practical", "cheap"], "answer": 0},
    {"word": "reprobate", "sentence": "The film's hero is a charming reprobate who cheats at cards, lies to the police and steals hearts in every port.", "options": ["rogue", "orphan", "detective", "sailor"], "answer": 0},
    {"word": "persiflage", "sentence": "Their friendly persiflage across the office, mostly about each other's football teams, kept everyone amused.", "options": ["gossip", "rivalry", "banter", "emails"], "answer": 2},
    {"word": "nupson", "sentence": "Some nupson on a scooter tried to overtake the tram on the inside and ended up in a hedge.", "options": ["numbskull", "courier", "teenager", "tourist"], "answer": 0},
    {"word": "patterer", "sentence": "A patterer on the corner sold 'miracle' knife sets, talking so fast nobody could get a word in.", "options": ["shy busker", "glib salesman", "street juggler", "lost tourist"], "answer": 1},
    {"word": "sweven", "sentence": "She woke with the sweven still vivid: a whale swimming slowly through her grandmother's kitchen.", "options": ["headache", "song", "smell", "dream"], "answer": 3},
  ],
  // #77 · Sun 27 Dec 2026
  [
    {"word": "root", "sentence": "The pig rooted about in the mud for truffles while the farmer leaned on his stick.", "options": ["rolled", "fought", "slept", "foraged"], "answer": 3},
    {"word": "gratuitous", "sentence": "The film was let down by gratuitous violence that added nothing to the story.", "options": ["brief", "cartoonish", "realistic", "unnecessary"], "answer": 3},
    {"word": "sententious", "sentence": "The sententious headmaster ended every assembly with a moral lesson about honesty and hard work.", "options": ["jovial", "elderly", "moralising", "short-tempered"], "answer": 2},
    {"word": "pertinacious", "sentence": "The pertinacious journalist called the minister's office every day for eight months until she got her interview.", "options": ["dogged", "rookie", "sloppy", "brash"], "answer": 0},
    {"word": "obdormition", "sentence": "His Sunday obdormition on the couch, newspaper over his face, was a sacred family institution.", "options": ["crossword", "snooze", "lecture", "breakfast"], "answer": 1},
    {"word": "pantophagist", "sentence": "A true pantophagist, my brother will happily tackle tripe, durian and his kids' leftover fish fingers.", "options": ["food critic", "omnivore", "picky eater", "chef"], "answer": 1},
    {"word": "rantipole", "sentence": "Our neighbour's rantipole of a daughter cartwheeled across our lawn and straight into the paddling pool.", "options": ["gymnast", "babysitter", "toddler", "tearaway"], "answer": 3},
  ],
  // #78 · Mon 28 Dec 2026
  [
    {"word": "row", "sentence": "The couple next door had a blazing row about the dishwasher at two in the morning.", "options": ["argument", "line", "party", "boat trip"], "answer": 0},
    {"word": "guile", "sentence": "The fox in the fable uses guile rather than strength, flattering the crow until it drops the cheese.", "options": ["cunning", "speed", "luck", "patience"], "answer": 0},
    {"word": "solecism", "sentence": "Using 'irregardless' in a job application is a solecism that some employers won't forgive.", "options": ["clever trick", "legal risk", "fashion choice", "language error"], "answer": 3},
    {"word": "pestiferous", "sentence": "The pestiferous flies at the picnic forced us to eat our sandwiches inside the car.", "options": ["slow", "green", "pesky", "tiny"], "answer": 2},
    {"word": "pococurante", "sentence": "The pococurante cat watched the kitchen fire with mild interest before going back to sleep.", "options": ["curious", "blasé", "hungry", "terrified"], "answer": 1},
    {"word": "potsure", "sentence": "Potsure after three beers, my uncle challenged the bouncer to an arm wrestle.", "options": ["sore from the gym", "fed up with waiting", "fresh from a win", "made bold by drink"], "answer": 3},
    {"word": "psilology", "sentence": "The talkback station's psilology runs twenty-four hours a day, and none of it means anything.", "options": ["weather reports", "advertising", "empty chatter", "old music"], "answer": 2},
  ],
  // #79 · Tue 29 Dec 2026
  [
    {"word": "ruffle", "sentence": "Nothing seems to ruffle our principal; she once handled a snake in the staffroom without spilling her tea.", "options": ["impress", "fluster", "amuse", "surprise"], "answer": 1},
    {"word": "hackneyed", "sentence": "The film was full of hackneyed lines like 'We're not so different, you and I.'", "options": ["clever", "poetic", "clichéd", "improvised"], "answer": 2},
    {"word": "splenetic", "sentence": "The splenetic letters to the editor were mostly about parking, bins and the youth of today.", "options": ["peevish", "handwritten", "anonymous", "lengthy"], "answer": 0},
    {"word": "puissant", "sentence": "The puissant warlord commanded an army of ten thousand and the loyalty of every village in the valley.", "options": ["wealthy", "cruel", "ageing", "powerful"], "answer": 3},
    {"word": "puckery", "sentence": "The unripe persimmon was so puckery that my mouth felt as if it had been lined with felt.", "options": ["stringy", "tart", "juicy", "sweet"], "answer": 1},
    {"word": "quelquechose", "sentence": "She brought a little quelquechose for the hostess: a tiny jar of homemade fig jam.", "options": ["complaint", "recipe", "trifle", "speech"], "answer": 2},
    {"word": "querimonious", "sentence": "The querimonious guest wrote a three-page review about the pillows, the birds and the sunrise.", "options": ["elderly and frail", "whingeing", "wealthy", "foreign"], "answer": 1},
  ],
  // #80 · Wed 30 Dec 2026
  [
    {"word": "saw", "sentence": "'Waste not, want not' was Nan's favourite old saw, usually delivered over a half-eaten sandwich.", "options": ["saying", "joke", "habit", "recipe"], "answer": 0},
    {"word": "haughty", "sentence": "The haughty maître d' looked us up and down and announced that the restaurant was 'fully committed'.", "options": ["elderly", "flustered", "arrogant", "cheerful"], "answer": 2},
    {"word": "sybaritic", "sentence": "Their sybaritic holiday involved daily massages, champagne at lunch and a butler for the pool.", "options": ["adventurous", "luxurious", "cultural", "budget"], "answer": 1},
    {"word": "purblind", "sentence": "The purblind old dog walked straight into the screen door, then barked at it suspiciously.", "options": ["half-blind", "hungry", "stubborn", "excitable"], "answer": 0},
    {"word": "quiddler", "sentence": "Don't be a quiddler; just pick a font and send the invitations.", "options": ["spendthrift", "show-off", "fusspot", "slowcoach"], "answer": 2},
    {"word": "ragabash", "sentence": "The ragabash by the station, in a torn coat and odd shoes, turned out to be the town's richest man.", "options": ["loud busker", "street preacher", "scruffy idler", "ticket seller"], "answer": 2},
    {"word": "raucity", "sentence": "The raucity of the cockatoos at dawn made sleeping in at the campsite impossible.", "options": ["bright colours", "boldness", "sheer numbers", "harsh racket"], "answer": 3},
  ],
  // #81 · Thu 31 Dec 2026
  [
    {"word": "scale", "sentence": "The thieves scaled the back fence and escaped across the railway line.", "options": ["measured", "painted", "damaged", "climbed"], "answer": 3},
    {"word": "hubris", "sentence": "The coach's hubris, declaring the trophy 'already ours' before kick-off, came back to haunt him.", "options": ["anxiety", "pride", "humour", "honesty"], "answer": 1},
    {"word": "threnody", "sentence": "The violinist played a threnody for the firefighters lost in the bushfires, and the whole hall stood in silence.", "options": ["lament", "lullaby", "anthem", "march"], "answer": 0},
    {"word": "rebarbative", "sentence": "His rebarbative manner, all sneers and interruptions, made him the least-liked panellist on the show.", "options": ["nervous", "well-polished", "off-putting", "charming"], "answer": 2},
    {"word": "rattlehead", "sentence": "The rattlehead at the bar wouldn't stop talking about his ex, his car and his ex's car.", "options": ["blabbermouth", "nightclub bouncer", "cabbie", "bartender"], "answer": 0},
    {"word": "roughscuff", "sentence": "Tourists were warned to avoid the docks at night, where the roughscuff gathered after the pubs closed.", "options": ["rabble", "fishermen", "seagulls", "police"], "answer": 0},
    {"word": "scriggle", "sentence": "The worm scriggled out of the compost and disappeared into the cracks in the path.", "options": ["rolled", "dropped", "glowed", "wriggled"], "answer": 3},
  ],
  // #82 · Fri 01 Jan 2027
  [
    {"word": "school", "sentence": "A school of tuna flashed silver beneath the boat as we drifted over the reef.", "options": ["trail", "shoal", "class", "flock"], "answer": 1},
    {"word": "iconoclast", "sentence": "An iconoclast in the kitchen, the young chef served deconstructed pavlova in a test tube.", "options": ["rule-breaker", "perfectionist", "beginner", "traditionalist"], "answer": 0},
    {"word": "timorous", "sentence": "The timorous kitten hid under the bed for two days before venturing out to sniff the lounge room.", "options": ["sick", "sleepy", "hungry", "fearful"], "answer": 3},
    {"word": "recreant", "sentence": "The recreant knight fled the battle and was later found hiding in a wine cellar.", "options": ["drunken", "craven", "wounded", "foreign"], "answer": 1},
    {"word": "rowdydow", "sentence": "The rowdydow from the end-of-year party could be heard three streets away.", "options": ["traffic", "lights", "smell", "hubbub"], "answer": 3},
    {"word": "saltate", "sentence": "The children saltated across the wet sand, leaping over each wave as it ran up the beach.", "options": ["dug", "crawled", "skipped", "raced"], "answer": 2},
    {"word": "slyboots", "sentence": "That little slyboots hid the last cupcake in her dollhouse and swore she hadn't seen it.", "options": ["fussy eater", "chatterbox", "crafty imp", "tidy child"], "answer": 2},
  ],
  // #83 · Sat 02 Jan 2027
  [
    {"word": "score", "sentence": "My great-grandmother lived to four score and ten, and swore it was all down to a daily sherry.", "options": ["twenty", "decade", "dozen", "hundred"], "answer": 0},
    {"word": "idiosyncratic", "sentence": "His idiosyncratic filing system involved colour-coded sticky notes and a shoebox labelled 'Misc (Urgent)'.", "options": ["digital", "secret", "quirky", "efficient"], "answer": 2},
    {"word": "torpor", "sentence": "The heatwave left the whole town in a state of torpor; even the dogs couldn't be bothered barking.", "options": ["panic", "lethargy", "mourning", "celebration"], "answer": 1},
    {"word": "scabrous", "sentence": "The comedian's scabrous jokes got him banned from the Christmas party but booked for three festivals.", "options": ["lame", "political", "rehearsed", "crude"], "answer": 3},
    {"word": "rudesby", "sentence": "Some rudesby pushed in at the front of the queue and then complained that the coffee was slow.", "options": ["boor", "regular", "manager", "tradie"], "answer": 0},
    {"word": "scapegallows", "sentence": "The old scapegallows in the pub boasted of every crime he'd ever got away with, and a few he hadn't.", "options": ["retired judge", "lucky rogue", "bartender", "war veteran"], "answer": 1},
    {"word": "somniloquy", "sentence": "Her somniloquy kept the whole tent awake, a rambling monologue about lost luggage and a koala who could sing.", "options": ["tossing", "night terror", "snoring", "sleep-talking"], "answer": 3},
  ],
  // #84 · Sun 03 Jan 2027
  [
    {"word": "screen", "sentence": "All volunteers are screened before they're allowed to work with children.", "options": ["vetted", "paid", "filmed", "trained"], "answer": 0},
    {"word": "ignominious", "sentence": "The champion's ignominious exit, tripping over her own shoelace in the first round, made every highlights reel.", "options": ["tearful", "unexpected", "dignified", "humiliating"], "answer": 3},
    {"word": "tremulous", "sentence": "In a tremulous voice, the child asked whether the dog was going to be all right.", "options": ["cheerful", "hoarse", "shaky", "loud"], "answer": 2},
    {"word": "sempiternal", "sentence": "The city's sempiternal roadworks seem to move from one street to the next without ever actually finishing.", "options": ["overnight", "expensive", "endless", "noisy"], "answer": 2},
    {"word": "saphead", "sentence": "Only a saphead would leave a pavlova in a hot car for three hours.", "options": ["tourist", "chef", "kid", "dope"], "answer": 3},
    {"word": "sibilate", "sentence": "The angry goose would sibilate at anyone who came too close to her nest.", "options": ["hiss", "honk", "flap", "peck"], "answer": 0},
    {"word": "scatterling", "sentence": "A scatterling since sixteen, he'd slept in vans, sheds and friends' spare rooms across three states.", "options": ["salesman", "drifter", "roadie", "musician"], "answer": 1},
  ],
  // #85 · Mon 04 Jan 2027
  [
    {"word": "second", "sentence": "Jan proposed a vote of thanks to the volunteers, and Pete seconded it.", "options": ["opposed", "backed", "delayed", "timed"], "answer": 1},
    {"word": "imperious", "sentence": "The imperious duchess summoned the hotel manager with a single raised finger.", "options": ["nervous", "polite", "bossy", "elderly"], "answer": 2},
    {"word": "turpitude", "sentence": "The board sacked the director for moral turpitude after the embezzlement came to light.", "options": ["depravity", "confusion", "weakness", "exhaustion"], "answer": 0},
    {"word": "stygian", "sentence": "We descended into the stygian depths of the cave, where even our torches seemed to shrink.", "options": ["freezing", "inky", "narrow", "echoing"], "answer": 1},
    {"word": "screak", "sentence": "The old gate screaked every time the wind caught it, setting the dog off barking.", "options": ["squealed", "rattled", "swung open", "slammed"], "answer": 0},
    {"word": "sifflement", "sentence": "A faint sifflement came from the keyhole whenever the southerly blew.", "options": ["glimmer", "dripping", "scratching", "whistling"], "answer": 3},
    {"word": "simulty", "sentence": "A simulty between the two families over a borrowed lawnmower lasted three generations.", "options": ["marriage", "grudge", "business", "friendship"], "answer": 1},
  ],
  // #86 · Tue 05 Jan 2027
  [
    {"word": "shed", "sentence": "The company shed two hundred jobs after the merger, most of them in regional offices.", "options": ["created", "cut", "advertised", "moved"], "answer": 1},
    {"word": "impervious", "sentence": "He seemed impervious to criticism, smiling serenely through every hostile question.", "options": ["grateful", "sensitive", "immune", "attentive"], "answer": 2},
    {"word": "umbrage", "sentence": "My aunt took umbrage when nobody asked for seconds of her famous casserole.", "options": ["pity", "notes", "credit", "offence"], "answer": 3},
    {"word": "traduce", "sentence": "The campaign ads traduced the candidate as a crook, though not one claim held up in court.", "options": ["rebranded", "endorsed", "slandered", "praised"], "answer": 2},
    {"word": "slubberdegullion", "sentence": "Some slubberdegullion had left the shared kitchen covered in grease, crumbs and a single sock.", "options": ["guest", "chef", "child", "slob"], "answer": 3},
    {"word": "slugabed", "sentence": "Our teenager is a champion slugabed, rarely seen upright before noon on weekends.", "options": ["lazy riser", "gym junkie", "early bird", "night owl"], "answer": 0},
    {"word": "smatterer", "sentence": "A mere smatterer in French, he could order a croissant but panicked when the waiter replied.", "options": ["dabbler", "native", "teacher", "expert"], "answer": 0},
  ],
  // #87 · Wed 06 Jan 2027
  [
    {"word": "shingle", "sentence": "We walked along the shingle beach, the stones crunching and sliding under our boots.", "options": ["muddy", "sandy", "crowded", "pebbly"], "answer": 3},
    {"word": "impetuous", "sentence": "In an impetuous moment, she quit her job, sold her car and bought a one-way ticket to Lisbon.", "options": ["tearful", "drunken", "careful", "rash"], "answer": 3},
    {"word": "unctuous", "sentence": "The unctuous salesman called us 'my friends' and kept touching his heart as he upped the price.", "options": ["honest", "nervous", "smarmy", "rude"], "answer": 2},
    {"word": "tumid", "sentence": "His tumid prose, all adjectives and Latin quotations, made the report almost unreadable.", "options": ["bombastic", "terse", "technical", "careless"], "answer": 0},
    {"word": "sneaksby", "sentence": "The sneaksby who reported his own teammate to the umpire was never picked again.", "options": ["hero", "sneak", "captain", "rookie"], "answer": 1},
    {"word": "speechifier", "sentence": "The best man was a born speechifier, and his toast ran to forty minutes and three costume changes.", "options": ["show-off", "dancer", "orator", "comedian"], "answer": 2},
    {"word": "spindleshanks", "sentence": "The new recruit, a gangly spindleshanks, looked as if a strong wind might snap him in half.", "options": ["beanpole", "know-all", "chatterbox", "worrywart"], "answer": 0},
  ],
  // #88 · Thu 07 Jan 2027
  [
    {"word": "squash", "sentence": "The government moved quickly to squash rumours of an early election.", "options": ["start", "spread", "quash", "confirm"], "answer": 2},
    {"word": "implacable", "sentence": "The implacable referee ignored every protest and sent off three players before half-time.", "options": ["impartial", "inexperienced", "short-sighted", "unyielding"], "answer": 3},
    {"word": "usurious", "sentence": "The payday lender charged usurious interest rates of three hundred per cent a year.", "options": ["extortionate", "tax-free", "fluctuating", "introductory"], "answer": 0},
    {"word": "turbid", "sentence": "The turbid pond water made it impossible to see the frogs we could hear croaking.", "options": ["cloudy", "shallow", "freezing", "noisy"], "answer": 0},
    {"word": "spleeny", "sentence": "Spleeny from lack of sleep, I snapped at the cat for looking at me the wrong way.", "options": ["giddy", "touchy", "achy", "dizzy"], "answer": 1},
    {"word": "splatterdash", "sentence": "The splatterdash in the pub when the home side won could be heard at the other end of the main street.", "options": ["smell", "fireworks", "racket", "lights"], "answer": 2},
    {"word": "spoondrift", "sentence": "Standing at the end of the breakwater, we were soaked by spoondrift as the gale howled around us.", "options": ["rain squall", "sea spray", "hail", "sleet"], "answer": 1},
  ],
  // #89 · Fri 08 Jan 2027
  [
    {"word": "stall", "sentence": "When asked about the missing funds, the treasurer tried to stall, claiming he needed 'more time to check'.", "options": ["confess", "delay", "resign", "joke"], "answer": 1},
    {"word": "impudent", "sentence": "The impudent schoolboy asked the mayor whether her hair was real.", "options": ["clever", "curious", "shy", "cheeky"], "answer": 3},
    {"word": "vainglorious", "sentence": "The vainglorious general had a statue of himself erected outside his own house.", "options": ["conceited", "forgetful", "wealthy", "paranoid"], "answer": 0},
    {"word": "uxorious", "sentence": "Her uxorious husband carried her handbag, laughed at all her jokes and called her 'the boss' in front of everyone.", "options": ["doting", "lazy", "elderly", "jealous"], "answer": 0},
    {"word": "stillicide", "sentence": "The steady stillicide from the gutter kept me awake, one drop every two seconds onto the tin roof.", "options": ["rattling", "creaking", "dripping", "humming"], "answer": 2},
    {"word": "stultiloquence", "sentence": "The debate descended into stultiloquence, with one candidate arguing that clouds were a government invention.", "options": ["sobbing", "shouting", "silly talk", "silence"], "answer": 2},
    {"word": "streel", "sentence": "The children streeled behind us through the market, dragging their feet and their scarves.", "options": ["trailed", "danced", "raced", "argued"], "answer": 0},
  ],
  // #90 · Sat 09 Jan 2027
  [
    {"word": "staple", "sentence": "Rice is a staple in their household, served with almost every meal.", "options": ["basic food", "rarity", "fastener", "luxury item"], "answer": 0},
    {"word": "incorrigible", "sentence": "Our incorrigible labrador has eaten three remote controls this year and shows no sign of stopping.", "options": ["overweight", "affectionate", "unteachable", "anxious"], "answer": 2},
    {"word": "verisimilitude", "sentence": "The film's verisimilitude was so convincing that viewers wrote to the police about the fictional crimes.", "options": ["realism", "violence", "humour", "budget"], "answer": 0},
    {"word": "valetudinarian", "sentence": "A lifelong valetudinarian, Uncle Ray carried a thermometer in his pocket and a cardigan for every occasion.", "options": ["keen hiker", "fashion lover", "night owl", "health worrier"], "answer": 3},
    {"word": "stroam", "sentence": "On Sunday afternoons we'd stroam about the old town with nowhere in particular to be.", "options": ["busk", "roam", "shop", "jog"], "answer": 1},
    {"word": "swankie", "sentence": "The swankie who ran the market stall could fix a bike, juggle oranges and do your tax return.", "options": ["lazy loafer", "nimble lad", "tourist", "old geezer"], "answer": 1},
    {"word": "tattlery", "sentence": "The office kitchen ran on tattlery: who was dating whom, who'd been promoted, and who'd stolen the milk.", "options": ["good humour", "instant coffee", "idle gossip", "strict rules"], "answer": 2},
  ],
  // #91 · Sun 10 Jan 2027
  [
    {"word": "stern", "sentence": "We sat at the stern of the ferry, watching Sydney shrink behind us.", "options": ["middle", "back", "top", "front"], "answer": 1},
    {"word": "indefatigable", "sentence": "The indefatigable volunteer has run the sausage sizzle every Saturday for thirty-one years.", "options": ["elderly", "grumpy", "paid", "tireless"], "answer": 3},
    {"word": "winsome", "sentence": "The puppy's winsome expression got it a second dinner from every member of the family.", "options": ["charming", "guilty", "hungry", "sleepy"], "answer": 0},
    {"word": "vertiginous", "sentence": "The vertiginous view from the top of the lighthouse sent my knees wobbling.", "options": ["restricted", "famous", "dizzying", "misty"], "answer": 2},
    {"word": "teatish", "sentence": "The teatish toddler wanted the blue cup, then the red cup, then no cup, then the blue cup again.", "options": ["tidy", "clever", "whiny", "thirsty"], "answer": 2},
    {"word": "temulent", "sentence": "The temulent wedding guests were poured into taxis at midnight.", "options": ["drunken", "elderly", "overdressed", "sleepy"], "answer": 0},
    {"word": "tenebricose", "sentence": "We fumbled down the tenebricose stairwell of the old block of flats, the light switch long since broken.", "options": ["spiral", "smelly", "narrow", "dark"], "answer": 3},
  ],
  // #92 · Mon 11 Jan 2027
  [
    {"word": "stoop", "sentence": "The old man had to stoop to get through the cottage's tiny doorway.", "options": ["pay", "squeeze", "knock", "bend"], "answer": 3},
    {"word": "ineffable", "sentence": "Standing at the rim of the canyon at sunrise, she felt an ineffable sense of peace.", "options": ["momentary", "uneasy", "unspeakable", "unfamiliar"], "answer": 2},
    {"word": "abjure", "sentence": "After the scandal, the senator publicly abjured his former beliefs.", "options": ["restated", "explained", "renounced", "rediscovered"], "answer": 2},
    {"word": "pule", "sentence": "The newborn lambs puled in the cold until their mothers found them.", "options": ["slept", "grazed", "tottered", "whimpered"], "answer": 3},
    {"word": "ticktack", "sentence": "In the silent exam hall, the only sound was the ticktack of the clock above the door.", "options": ["ticking", "humming", "chiming", "flapping"], "answer": 0},
    {"word": "titubate", "sentence": "After the long boat trip, we titubated along the jetty as if it were still moving beneath us.", "options": ["crawled", "staggered", "danced", "sprinted"], "answer": 1},
    {"word": "tittup", "sentence": "The pony tittupped around the arena, tossing its mane as if it knew everyone was watching.", "options": ["galloped", "plodded", "rolled", "pranced"], "answer": 3},
  ],
  // #93 · Tue 12 Jan 2027
  [
    {"word": "strain", "sentence": "This strain of wheat was bred to survive drought on the dry plains of the Wimmera.", "options": ["price", "variety", "pressure", "sack"], "answer": 1},
    {"word": "inexorable", "sentence": "The inexorable rise of house prices has pushed young families further and further out of the city.", "options": ["relentless", "temporary", "gentle", "sudden"], "answer": 0},
    {"word": "antediluvian", "sentence": "My dad's antediluvian mobile phone has buttons, an antenna and a game about a snake.", "options": ["expensive", "beloved", "broken", "ancient"], "answer": 3},
    {"word": "roister", "sentence": "The footy team roistered through town after the grand final, singing and spraying beer.", "options": ["protested", "rested", "revelled", "marched"], "answer": 2},
    {"word": "tohubohu", "sentence": "The kitchen on Christmas morning was pure tohubohu: three cooks, two dogs and a turkey that wouldn't fit.", "options": ["silence", "chaos", "bliss", "order"], "answer": 1},
    {"word": "tristful", "sentence": "The tristful old dog sat by the gate every afternoon, waiting for a boy who'd long since moved away.", "options": ["playful", "loyal", "sorrowful", "watchful"], "answer": 2},
    {"word": "vaniloquence", "sentence": "The sales seminar was three hours of vaniloquence and a free tote bag.", "options": ["empty talk", "hard data", "free food", "networking"], "answer": 0},
  ],
  // #94 · Wed 13 Jan 2027
  [
    {"word": "tack", "sentence": "When polite requests didn't work, she changed tack and threatened to call the media.", "options": ["tactic", "shoes", "jobs", "seats"], "answer": 0},
    {"word": "ingenuous", "sentence": "With ingenuous honesty, the five-year-old told the host her soup tasted 'like a puddle'.", "options": ["clever", "naive", "rude", "sleepy"], "answer": 1},
    {"word": "approbation", "sentence": "The plan won the approbation of the whole committee, a first in the club's history.", "options": ["approval", "criticism", "attention", "funding"], "answer": 0},
    {"word": "fugleman", "sentence": "The fugleman of the protest stood on a milk crate and led the chants through a megaphone.", "options": ["journalist", "police officer", "onlooker", "ringleader"], "answer": 3},
    {"word": "vagient", "sentence": "A vagient wail from the nursery told us the baby was awake and unhappy about it.", "options": ["crying", "distant", "electronic", "musical"], "answer": 0},
    {"word": "wantwit", "sentence": "Some wantwit had put the 'Wet Floor' sign at the top of the escalator.", "options": ["cleaner", "manager", "halfwit", "child"], "answer": 2},
    {"word": "whimling", "sentence": "The whimling changed her mind about dessert four times before the waiter gave up.", "options": ["quiet diner", "fickle soul", "food critic", "big eater"], "answer": 1},
  ],
  // #95 · Thu 14 Jan 2027
  [
    {"word": "suit", "sentence": "The family brought a suit against the council after their house flooded for the third time.", "options": ["petition drive", "formal protest", "legal action", "new jacket"], "answer": 2},
    {"word": "insipid", "sentence": "The hospital soup was so insipid that we added salt, pepper and half a bottle of sweet chilli.", "options": ["lukewarm", "spicy", "lumpy", "bland"], "answer": 3},
    {"word": "apocryphal", "sentence": "The story that the founder sketched the logo on a napkin is probably apocryphal, but the company loves telling it.", "options": ["embarrassing", "well-documented", "made-up", "outdated"], "answer": 2},
    {"word": "abominate", "sentence": "My nephew abominates broccoli so fiercely that he can detect it hidden inside a lasagne.", "options": ["ignores", "loathes", "adores", "grows"], "answer": 1},
    {"word": "abdominous", "sentence": "The abdominous Santa at the shopping centre needed no padding at all.", "options": ["portly", "cheerful", "bearded", "bored"], "answer": 0},
    {"word": "agaze", "sentence": "The children stood agaze before the giant Christmas tree, mouths open, too stunned to speak.", "options": ["giggling", "awestruck", "shivering", "in a queue"], "answer": 1},
    {"word": "bilboquet", "sentence": "Grandpa could flip and land the wooden knob of his bilboquet fifty times in a row without looking.", "options": ["cricket bat", "cup-and-ball", "baseball mitt", "tennis racquet"], "answer": 1},
  ],
  // #96 · Fri 15 Jan 2027
  [
    {"word": "vault", "sentence": "The burglar vaulted the fence and vanished into the park.", "options": ["cut through", "crawled under", "leapt over", "kicked down"], "answer": 2},
    {"word": "insolent", "sentence": "The insolent teenager rolled his eyes and told the magistrate to 'chill out'.", "options": ["rude", "sleepy", "polite", "frightened"], "answer": 0},
    {"word": "calumny", "sentence": "The candidate's campaign was built on calumny, spreading rumours that her rival had faked his war record.", "options": ["promises", "slander", "humour", "statistics"], "answer": 1},
    {"word": "adjure", "sentence": "The judge adjured the jury to ignore everything they had read in the newspapers.", "options": ["reminded", "permitted", "allowed", "charged"], "answer": 3},
    {"word": "abecedarian", "sentence": "As an abecedarian at the piano, she could just about manage 'Twinkle, Twinkle' with one finger.", "options": ["beginner", "teacher", "tuner", "prodigy"], "answer": 0},
    {"word": "agrypnotic", "sentence": "For a night-shift nurse, the agrypnotic properties of a triple-shot espresso are a lifesaver.", "options": ["warming", "soothing", "fortifying", "stay-awake"], "answer": 3},
    {"word": "ambilevous", "sentence": "Ambilevous with tools, my brother once dropped the drill, the level and the picture within a single minute.", "options": ["short-sighted", "impatient", "all thumbs", "left-handed"], "answer": 2},
  ],
  // #97 · Sat 16 Jan 2027
  [
    {"word": "keen", "sentence": "At the funeral, the old women began to keen, a high, wavering lament that silenced the room.", "options": ["sing", "whisper", "pray", "wail"], "answer": 3},
    {"word": "intrepid", "sentence": "The intrepid explorers crossed the Simpson Desert on foot in the middle of summer.", "options": ["foolish", "lost", "exhausted", "fearless"], "answer": 3},
    {"word": "chimerical", "sentence": "His chimerical plan to power the town with a giant hamster wheel never made it past the first meeting.", "options": ["fanciful", "detailed", "secret", "expensive"], "answer": 0},
    {"word": "adulatory", "sentence": "The adulatory fan letters, hundreds of them, were stacked in boxes in the actor's garage.", "options": ["anonymous", "handwritten", "angry", "worshipful"], "answer": 3},
    {"word": "ahungered", "sentence": "Ahungered after a day of surfing, we ordered every item on the fish-and-chip menu.", "options": ["sunburnt", "elated", "starving", "worn out"], "answer": 2},
    {"word": "alacritous", "sentence": "The alacritous waiter had our drinks on the table before we'd finished sitting down.", "options": ["quick and eager", "slow and surly", "old and frail", "loud and pushy"], "answer": 0},
    {"word": "alegar", "sentence": "The pickled onions were made with alegar, which gave them a malty, sour bite.", "options": ["brown sugar", "ale vinegar", "smoked salt", "dark honey"], "answer": 1},
  ],
  // #98 · Sun 17 Jan 2027
  [
    {"word": "yield", "sentence": "This year's wheat yield was the best in a decade, thanks to a wet winter.", "options": ["quality", "price", "surrender", "harvest"], "answer": 3},
    {"word": "inveterate", "sentence": "An inveterate gambler, he once bet his car on which raindrop would reach the bottom of the window first.", "options": ["reformed", "habitual", "lucky", "secret"], "answer": 1},
    {"word": "dilettante", "sentence": "A dilettante in everything, he'd tried pottery, jazz piano and Mandarin, but never stuck at any for more than a month.", "options": ["amateur", "expert", "rebel", "teacher"], "answer": 0},
    {"word": "agrestic", "sentence": "His agrestic manners, honed on a dairy farm, caused a stir at the embassy dinner.", "options": ["foreign", "polished", "elegant", "rustic"], "answer": 3},
    {"word": "algid", "sentence": "The algid wind off the Southern Ocean cut through every layer we were wearing.", "options": ["damp", "salty", "gusty", "icy"], "answer": 3},
    {"word": "ambagious", "sentence": "His ambagious directions, involving 'the third gum tree past the old servo', got us thoroughly lost.", "options": ["accurate", "rude", "indirect", "hurried"], "answer": 2},
    {"word": "anteprandial", "sentence": "We took an anteprandial stroll along the beach to build up an appetite for Christmas lunch.", "options": ["sunrise", "leisurely", "pre-dinner", "barefoot"], "answer": 2},
  ],
  // #99 · Mon 18 Jan 2027
  [
    {"word": "arresting", "sentence": "Her portrait of the old farmer was the most arresting painting in the exhibition.", "options": ["striking", "expensive", "criminal", "recent"], "answer": 0},
    {"word": "itinerant", "sentence": "The itinerant shearers moved from station to station across the outback, following the season.", "options": ["skilled", "travelling", "unionised", "young"], "answer": 1},
    {"word": "effrontery", "sentence": "He had the effrontery to ask for a pay rise on the same day he crashed the company car.", "options": ["audacity", "misfortune", "decency", "foresight"], "answer": 0},
    {"word": "aphoristic", "sentence": "Nan's aphoristic advice, 'Never trust a man with clean boots', has served the family well for decades.", "options": ["angry", "pithy", "vague", "rambling"], "answer": 1},
    {"word": "amort", "sentence": "After his band split up, Tom wandered about the house amort for weeks.", "options": ["dejected", "barefoot", "humming", "busily"], "answer": 0},
    {"word": "appetent", "sentence": "The appetent puppy sat quivering by the fridge, eyes fixed on the cheese drawer.", "options": ["sleepy", "nervous", "eager", "guilty"], "answer": 2},
    {"word": "argufy", "sentence": "My uncles will argufy about anything: politics, footy, even which way to hang the toilet roll.", "options": ["joke", "agree", "bet", "argue"], "answer": 3},
  ],
  // #100 · Tue 19 Jan 2027
  [
    {"word": "bay", "sentence": "We kept the mosquitoes at bay with a citronella candle and a great deal of slapping.", "options": ["the table", "the door", "a distance", "the window"], "answer": 2},
    {"word": "jaded", "sentence": "After twenty years of covering elections, the reporter was too jaded to be shocked by anything.", "options": ["well-paid", "naive", "excited", "weary"], "answer": 3},
    {"word": "ersatz", "sentence": "The café served ersatz coffee made from roasted chicory during the shortage.", "options": ["iced", "imitation", "decaf", "imported"], "answer": 1},
    {"word": "benignant", "sentence": "The benignant old judge was known for giving first offenders a second chance.", "options": ["strict", "deaf", "kindly", "elderly"], "answer": 2},
    {"word": "atramentous", "sentence": "The atramentous waters of the gorge looked bottomless, reflecting nothing at all.", "options": ["freezing", "crystal-clear", "fast-flowing", "inky-black"], "answer": 3},
    {"word": "aweary", "sentence": "Aweary of the endless campaign ads, I switched off the TV and read a book.", "options": ["tired", "fond", "unaware", "proud"], "answer": 0},
    {"word": "bagwig", "sentence": "In the old portrait, the merchant wears a powdered bagwig with a black silk ribbon at the back.", "options": ["lace cravat", "gold pocket watch", "18th-century wig", "riding cloak"], "answer": 2},
  ],
  // #101 · Wed 20 Jan 2027
  [
    {"word": "bluff", "sentence": "We picnicked on the bluff overlooking the bay, watching dolphins far below.", "options": ["headland", "lawn", "sandbar", "jetty"], "answer": 0},
    {"word": "judicious", "sentence": "With judicious use of the credit card, they managed a month in Europe without going broke.", "options": ["frequent", "sensible", "secret", "reckless"], "answer": 1},
    {"word": "excrescence", "sentence": "The new shopping tower is an excrescence on the skyline, blocking views of the old cathedral.", "options": ["eyesore", "landmark", "triumph", "shadow"], "answer": 0},
    {"word": "blench", "sentence": "The surgeon didn't blench at the sight of the wound, though the young intern fainted.", "options": ["sneeze", "comment", "flinch", "smile"], "answer": 2},
    {"word": "badinage", "sentence": "The radio hosts' morning badinage was the only thing that got me out of bed.", "options": ["traffic update", "teasing chatter", "song choice", "weather report"], "answer": 1},
    {"word": "ballyrag", "sentence": "The older boys would ballyrag the new kids until a teacher finally stepped in.", "options": ["ignore", "include", "coach", "bully"], "answer": 3},
    {"word": "banausic", "sentence": "She found the job banausic, all spreadsheets and photocopying, with no room for imagination.", "options": ["glamorous", "stressful", "well-paid", "mundane"], "answer": 3},
  ],
  // #102 · Thu 21 Jan 2027
  [
    {"word": "board", "sentence": "The boarding house offered room and board for ninety dollars a week.", "options": ["transport", "laundry", "plank", "meals"], "answer": 3},
    {"word": "languid", "sentence": "The languid summer afternoon drifted by in a haze of cicadas and iced tea.", "options": ["wet and windy", "slow and lazy", "short and busy", "hot and noisy"], "answer": 1},
    {"word": "gimcrack", "sentence": "The gimcrack souvenirs at the airport fell apart before we'd even got them home.", "options": ["local", "pricey", "heavy", "flimsy"], "answer": 3},
    {"word": "caterwaul", "sentence": "The two tomcats caterwauled on the fence half the night.", "options": ["balanced", "yowled", "prowled", "slept"], "answer": 1},
    {"word": "bedizen", "sentence": "For the gala, she bedizened herself in sequins, feathers and three diamond necklaces.", "options": ["prepared", "photographed", "decked out", "embarrassed"], "answer": 2},
    {"word": "bedward", "sentence": "Yawning, the children trooped bedward without a single complaint: a Christmas miracle.", "options": ["to the bath", "to dinner", "towards bed", "outdoors"], "answer": 2},
    {"word": "belaud", "sentence": "The critics belauded the young cellist as the finest talent of her generation.", "options": ["lauded", "interviewed", "criticised", "dismissed"], "answer": 0},
  ],
  // #103 · Fri 22 Jan 2027
  [
    {"word": "bound", "sentence": "With that much rain, the creek is bound to flood by morning.", "options": ["tied", "unlikely", "permitted", "certain"], "answer": 3},
    {"word": "largesse", "sentence": "Thanks to the largesse of a local bakery, the school fete had enough cakes to feed the whole town.", "options": ["supervision", "advertising", "generosity", "bad luck"], "answer": 2},
    {"word": "hector", "sentence": "The sergeant would hector the recruits for hours, shouting until his voice gave out.", "options": ["bully", "feed", "train", "praise"], "answer": 0},
    {"word": "chivvy", "sentence": "Mum had to chivvy us along all morning or we'd never have made the train.", "options": ["film", "hurry", "carry", "follow"], "answer": 1},
    {"word": "berceuse", "sentence": "The nanny hummed a soft berceuse until the baby's eyes finally closed.", "options": ["pop song", "hymn", "lullaby", "jingle"], "answer": 2},
    {"word": "blether", "sentence": "Ignore him; it's all blether, and he's never actually been to Antarctica.", "options": ["nonsense", "a secret", "jealousy", "modesty"], "answer": 0},
    {"word": "blowball", "sentence": "My daughter blew on the blowball and watched its seeds parachute across the paddock.", "options": ["soap bubble", "birthday candle", "party horn", "dandelion head"], "answer": 3},
  ],
  // #104 · Sat 23 Jan 2027
  [
    {"word": "buckle", "sentence": "The old bridge began to buckle under the weight of the floodwater and debris.", "options": ["creak", "tighten", "give way", "shine"], "answer": 2},
    {"word": "lassitude", "sentence": "Weeks of chemotherapy left her with a lassitude that made even reading feel like work.", "options": ["anxiety", "bitterness", "weariness", "curiosity"], "answer": 2},
    {"word": "imprimatur", "sentence": "The new textbook carries the imprimatur of the education department, so every school must use it.", "options": ["official approval", "cheap price tag", "author's signature", "colourful cover"], "answer": 0},
    {"word": "cogitate", "sentence": "He sat on the porch to cogitate on the job offer, staring at the horizon for an hour.", "options": ["nap", "celebrate", "ponder", "complain"], "answer": 2},
    {"word": "blithesome", "sentence": "The blithesome kids splashed in the sprinkler, oblivious to the forty-degree heat.", "options": ["mischievous", "cheerful", "sunburnt", "thirsty"], "answer": 1},
    {"word": "bloviate", "sentence": "The guest speaker continued to bloviate for an hour about 'synergy' and 'paradigms'.", "options": ["stammer nervously", "spout pompously", "answer questions", "read slowly"], "answer": 1},
    {"word": "bonnyclabber", "sentence": "Left out in the heat, the milk had turned to bonnyclabber by morning, and even the cat wouldn't touch it.", "options": ["fresh butter", "pale cream", "frothy foam", "sour curds"], "answer": 3},
  ],
  // #105 · Sun 24 Jan 2027
  [
    {"word": "chair", "sentence": "Dr Okafor will chair the meeting while the president is overseas.", "options": ["run", "record", "cancel", "attend"], "answer": 0},
    {"word": "laudable", "sentence": "Her goal of planting a million trees is laudable, even if the timeline seems optimistic.", "options": ["unrealistic", "expensive", "secretive", "praiseworthy"], "answer": 3},
    {"word": "jeremiad", "sentence": "The columnist's weekly jeremiad warned that phones, scooters and oat milk would be the end of civilisation.", "options": ["recipe", "lament", "advice column", "comic strip"], "answer": 1},
    {"word": "complaisant", "sentence": "The complaisant host agreed to every request, even moving the party outdoors at midnight.", "options": ["obliging", "grumpy", "drunken", "wealthy"], "answer": 0},
    {"word": "bosky", "sentence": "The track wound through a bosky valley, thick with tree ferns and blackwood.", "options": ["rocky", "foggy", "steep", "wooded"], "answer": 3},
    {"word": "bragget", "sentence": "The monks' bragget was so sweet and strong that the abbot kept the cellar key on a chain.", "options": ["fruit cake", "prayer book", "honey ale", "bell rope"], "answer": 2},
    {"word": "brumal", "sentence": "The brumal mornings in Canberra mean scraping ice off the windscreen before school.", "options": ["foggy", "hectic", "wintry", "early"], "answer": 2},
  ],
  // #106 · Mon 25 Jan 2027
  [
    {"word": "close", "sentence": "With twenty people and no air-conditioning, the little room grew close and uncomfortable.", "options": ["dark", "stuffy", "friendly", "quiet"], "answer": 1},
    {"word": "limpid", "sentence": "The limpid water of the rock pool showed every pebble, crab and starfish on the bottom.", "options": ["icy cold", "clear", "salty", "still"], "answer": 1},
    {"word": "lacuna", "sentence": "There's a lacuna in the diary between 1942 and 1945; the pages have simply been torn out.", "options": ["secret", "stain", "gap", "code"], "answer": 2},
    {"word": "confute", "sentence": "She confuted every one of his arguments with figures from the government's own report.", "options": ["ignored", "supported", "repeated", "disproved"], "answer": 3},
    {"word": "brummagem", "sentence": "The market was full of brummagem jewellery that turned your fingers green within a week.", "options": ["antique silver", "handmade local", "cheap and gaudy", "costly designer"], "answer": 2},
    {"word": "brumous", "sentence": "The brumous morning hid the Harbour Bridge completely until almost noon.", "options": ["stormy", "frosty", "noisy", "foggy"], "answer": 3},
    {"word": "buttinsky", "sentence": "Some buttinsky at the next table kept correcting our trivia answers.", "options": ["busybody", "waiter", "quizmaster", "child"], "answer": 0},
  ],
  // #107 · Tue 26 Jan 2027
  [
    {"word": "deck", "sentence": "He threatened to deck anyone who so much as touched his precious car.", "options": ["fine", "film", "sue", "punch"], "answer": 3},
    {"word": "loquacious", "sentence": "The loquacious cab driver told us his life story, his brother's life story and most of a soap opera's plot.", "options": ["grumpy", "lost", "chatty", "speedy"], "answer": 2},
    {"word": "nostrum", "sentence": "The minister's favourite nostrum for every economic problem was a tax cut.", "options": ["warning", "excuse", "cure-all", "joke"], "answer": 2},
    {"word": "contumacious", "sentence": "The contumacious witness refused to answer questions and was held in contempt of court.", "options": ["nervous", "lying", "elderly", "defiant"], "answer": 3},
    {"word": "cacography", "sentence": "The doctor's cacography was so bad that the pharmacist had to phone to check the prescription.", "options": ["spelling", "scrawl", "manner", "accent"], "answer": 1},
    {"word": "calamistrate", "sentence": "Every morning she spent half an hour with the tongs, calamistrating her fringe into perfect ringlets.", "options": ["curling", "trimming", "pinning", "dyeing"], "answer": 0},
    {"word": "canicule", "sentence": "During the canicule the cicadas are deafening and nobody leaves the shade before five.", "options": ["dog days", "harvest", "night shift", "wet season"], "answer": 0},
  ],
  // #108 · Wed 27 Jan 2027
  [
    {"word": "dub", "sentence": "The press dubbed her 'the Iron Lady of the Wheatbelt' after the drought protests.", "options": ["elected", "accused", "named", "quoted"], "answer": 2},
    {"word": "magnanimous", "sentence": "In a magnanimous gesture, the winner invited her defeated rival to share the trophy.", "options": ["awkward", "cynical", "rehearsed", "generous"], "answer": 3},
    {"word": "obstreperous", "sentence": "The obstreperous fans in the back row had to be removed by security after the second chant.", "options": ["foreign", "elderly", "silent", "unruly"], "answer": 3},
    {"word": "controvert", "sentence": "No historian has been able to controvert her claim that the letter is a forgery.", "options": ["refute", "publish", "prove", "ignore"], "answer": 0},
    {"word": "canorous", "sentence": "The canorous call of the bellbirds rang through the gully all afternoon.", "options": ["faint", "harsh", "tuneful", "anxious"], "answer": 2},
    {"word": "carouser", "sentence": "A notorious carouser, he was usually the last to leave the pub and the first to start singing.", "options": ["barman", "reveller", "bouncer", "teetotaller"], "answer": 1},
    {"word": "cassolette", "sentence": "A silver cassolette on the mantelpiece filled the room with the scent of sandalwood.", "options": ["perfume box", "clock", "candlestick", "photo frame"], "answer": 0},
  ],
  // #109 · Thu 28 Jan 2027
  [
    {"word": "entertain", "sentence": "The board refused to entertain the idea of moving the office to the suburbs.", "options": ["consider", "publish", "fund", "amuse"], "answer": 0},
    {"word": "malevolent", "sentence": "The villain's malevolent grin told the audience he was up to no good.", "options": ["goofy", "evil", "toothy", "sheepish"], "answer": 1},
    {"word": "palimpsest", "sentence": "The old city is a palimpsest, its modern streets laid over Roman roads and medieval lanes.", "options": ["layered text", "tourist trap", "ghost town", "ruined wreck"], "answer": 0},
    {"word": "cosset", "sentence": "The grandparents cosset the twins terribly, with ice cream for breakfast and no bedtimes.", "options": ["ignore", "spoil", "teach", "scold"], "answer": 1},
    {"word": "catchpenny", "sentence": "The town's catchpenny attractions, a giant plastic prawn and a 'haunted' bus shelter, drew few visitors.", "options": ["award-winning", "seasonal", "historic", "gimmicky"], "answer": 3},
    {"word": "chapfallen", "sentence": "The chapfallen coach trudged off the field after the hundred-point loss.", "options": ["sunburnt", "furious", "downcast", "limping"], "answer": 2},
    {"word": "charivari", "sentence": "The newlyweds were woken by a charivari of pots, pans and drunken singing beneath their window.", "options": ["marching brass band", "mock serenade", "fire alarm", "dawn chorus"], "answer": 1},
  ],
  // #110 · Fri 29 Jan 2027
  [
    {"word": "express", "sentence": "Patients must give their express consent before any photos are taken.", "options": ["silent", "clear", "quick", "verbal"], "answer": 1},
    {"word": "malleable", "sentence": "Young children's opinions are highly malleable; one cartoon can turn them vegetarian for a week.", "options": ["hard to read", "easily shaped", "strangely loud", "firmly fixed"], "answer": 1},
    {"word": "parvenu", "sentence": "The old families of the district treated the mining magnate as a parvenu, however much he gave to charity.", "options": ["rival", "outlaw", "upstart", "foreigner"], "answer": 2},
    {"word": "discomfit", "sentence": "The unexpected question seemed to discomfit the minister, who shuffled his notes for a long time.", "options": ["please", "rattle", "bore", "amuse"], "answer": 1},
    {"word": "chinchy", "sentence": "The chinchy landlord charged tenants for the light bulbs he replaced.", "options": ["tight-fisted", "softly spoken", "hard-working", "absent-minded"], "answer": 0},
    {"word": "chirr", "sentence": "The chirr of crickets rose from the paddock as the sun went down.", "options": ["trill", "glow", "smell", "swarm"], "answer": 0},
    {"word": "circumambulate", "sentence": "Pilgrims circumambulate the temple three times before entering, murmuring prayers as they go.", "options": ["kneel before", "photograph", "decorate", "walk around"], "answer": 3},
  ],
  // #111 · Sat 30 Jan 2027
  [
    {"word": "fashion", "sentence": "He fashioned a raft from old barrels and a few planks.", "options": ["painted", "styled", "built", "bought"], "answer": 2},
    {"word": "mawkish", "sentence": "The ad's mawkish music and slow-motion puppies made most viewers cringe rather than cry.", "options": ["upbeat", "subtle", "soppy", "jarring"], "answer": 2},
    {"word": "peccadillo", "sentence": "Compared with his brother's crimes, eating the last biscuit was a peccadillo.", "options": ["minor sin", "tradition", "masterstroke", "disaster"], "answer": 0},
    {"word": "disputatious", "sentence": "The disputatious book club spent two hours on whether the author was 'allowed' to kill the dog.", "options": ["punctual", "tipsy", "well-read", "feisty"], "answer": 3},
    {"word": "clamant", "sentence": "The clamant demands of the toddler, the dog and the phone all arrived at once.", "options": ["silent", "urgent", "polite", "gentle"], "answer": 1},
    {"word": "dentilave", "sentence": "After the dentist, she rinsed with a minty dentilave that made her eyes water.", "options": ["nasal spray", "face cream", "eye drop", "mouthwash"], "answer": 3},
    {"word": "dipsetic", "sentence": "The salty peanuts at the bar are deliberately dipsetic, and the publican knows it.", "options": ["past their best", "thirst-making", "habit-forming", "on the house"], "answer": 1},
  ],
  // #112 · Sun 31 Jan 2027
  [
    {"word": "fell", "sentence": "The loggers felled the old mountain ash in under an hour.", "options": ["climbed", "measured", "planted", "cut down"], "answer": 3},
    {"word": "mercurial", "sentence": "Her mercurial boss could be warm at nine and furious by ten.", "options": ["shy", "volatile", "generous", "reliable"], "answer": 1},
    {"word": "perfidy", "sentence": "The general's perfidy, selling battle plans to the enemy, was discovered only after the war.", "options": ["treachery", "cowardice", "incompetence", "bravery"], "answer": 0},
    {"word": "doltish", "sentence": "Only a doltish burglar would leave his phone, selfies and all, at the crime scene.", "options": ["stupid", "rookie", "nervous", "greedy"], "answer": 0},
    {"word": "dimout", "sentence": "During the wartime dimout, streetlamps were hooded and shopfronts left dark.", "options": ["air raid", "curfew", "parade", "blackout"], "answer": 3},
    {"word": "divagate", "sentence": "The lecturer would divagate from the syllabus into long stories about his time in Antarctica.", "options": ["stray", "rush", "quote", "return"], "answer": 0},
    {"word": "elflock", "sentence": "She woke with an elflock so tangled that it took twenty minutes and half a bottle of conditioner to undo.", "options": ["stiff neck", "hair ribbon", "matted tangle", "knotted scarf"], "answer": 2},
  ],
  // #113 · Mon 01 Feb 2027
  [
    {"word": "fiddle", "sentence": "The accountant was caught fiddling the books to hide his gambling losses.", "options": ["balancing", "losing", "falsifying", "reading"], "answer": 2},
    {"word": "mollify", "sentence": "A free dessert was enough to mollify the angry diners.", "options": ["appease", "anger", "feed", "surprise"], "answer": 0},
    {"word": "probity", "sentence": "The new treasurer's probity was beyond question; she once returned a two-cent overpayment.", "options": ["experience", "integrity", "cleverness", "stinginess"], "answer": 1},
    {"word": "dolorous", "sentence": "The dolorous bells of the church rang out for the drowned fishermen.", "options": ["joyful", "booming", "doleful", "distant"], "answer": 2},
    {"word": "drouth", "sentence": "After two years of drouth, the dam was cracked mud and the cattle had been sold.", "options": ["flood", "neglect", "debt", "drought"], "answer": 3},
    {"word": "duncish", "sentence": "That was a duncish thing to do, locking your keys in the car with the engine running.", "options": ["sneaky", "thoughtful", "dim-witted", "risky"], "answer": 2},
    {"word": "ebullition", "sentence": "The ebullition of the hot springs sent clouds of steam into the freezing air.", "options": ["boiling", "colour", "smell", "glow"], "answer": 0},
  ],
  // #114 · Tue 02 Feb 2027
  [
    {"word": "list", "sentence": "The ship began to list to port as the water flooded into the hold.", "options": ["sail", "signal", "lean", "turn"], "answer": 2},
    {"word": "morose", "sentence": "The morose teenager answered every question with a shrug and a sigh.", "options": ["sleepy", "glum", "chatty", "polite"], "answer": 1},
    {"word": "sinecure", "sentence": "His job at the yacht club was a sinecure: a big salary for attending one lunch a year.", "options": ["punishment", "volunteer role", "cushy job", "trial period"], "answer": 2},
    {"word": "equable", "sentence": "Her equable temper made her the ideal person to handle complaints.", "options": ["quick", "even", "fiery", "famous"], "answer": 1},
    {"word": "eggery", "sentence": "The cliffs below the lighthouse are a vast eggery for gannets every spring.", "options": ["nesting site", "cave system", "lookout", "fishing spot"], "answer": 0},
    {"word": "egghot", "sentence": "On cold nights Nan would make an egghot, and we'd sip it by the fire until our cheeks glowed.", "options": ["hot-water bottle", "omelette", "boiled egg", "hot eggnog"], "answer": 3},
    {"word": "ekename", "sentence": "His ekename, 'Shorty', was a joke: he stood almost two metres tall.", "options": ["password", "surname", "nickname", "stage name"], "answer": 2},
  ],
  // #115 · Wed 03 Feb 2027
  [
    {"word": "hide", "sentence": "The tannery bought cattle hides by the truckload and turned them into boots and saddles.", "options": ["horns", "hiding spots", "skins", "carcasses"], "answer": 2},
    {"word": "myopic", "sentence": "The council's myopic decision to sell the park for flats will be regretted for generations.", "options": ["closed-door", "unanimous", "last-minute", "narrow"], "answer": 3},
    {"word": "philippic", "sentence": "The senator's philippic against the bill lasted three hours and included a reading from the Book of Revelation.", "options": ["endorsement", "tirade", "joke", "apology"], "answer": 1},
    {"word": "enervate", "sentence": "The tropical humidity seemed to enervate everyone, and the afternoon meetings were mostly silent.", "options": ["amuse", "exhaust", "energise", "irritate"], "answer": 1},
    {"word": "coggle", "sentence": "The stack of plates began to coggle on the tray, and the waiter froze mid-step.", "options": ["wobble", "slide", "shine", "clatter"], "answer": 0},
    {"word": "colfox", "sentence": "That colfox of a used-car salesman somehow sold us a warranty on a warranty.", "options": ["lonely soul", "sly operator", "honest broker", "new trainee"], "answer": 1},
    {"word": "collogue", "sentence": "The two ministers were seen colloguing in a corridor just before the surprise vote.", "options": ["plotting", "posing", "arguing", "shaking hands"], "answer": 0},
  ],
  // #116 · Thu 04 Feb 2027
  [
    {"word": "kid", "sentence": "She wore soft kid gloves to the opera, buttoned at the wrist.", "options": ["lace", "goatskin", "child-sized", "woollen"], "answer": 1},
    {"word": "nefarious", "sentence": "The hackers' nefarious scheme siphoned money from thousands of pensioners' accounts.", "options": ["clumsy", "foreign", "wicked", "clever"], "answer": 2},
    {"word": "prevaricate", "sentence": "When asked where he'd been all night, my brother began to prevaricate, mentioning 'a friend' and 'some stuff'.", "options": ["boast", "evade", "confess", "apologise"], "answer": 1},
    {"word": "exiguous", "sentence": "Our exiguous savings would cover rent for a month, maybe two if we ate nothing but toast.", "options": ["growing", "secret", "joint", "meagre"], "answer": 3},
    {"word": "collywobbles", "sentence": "Waiting to go on stage, the young violinist had a bad case of the collywobbles.", "options": ["hiccups", "jitters", "giggles", "sniffles"], "answer": 1},
    {"word": "comfit", "sentence": "The wedding guests were each given a little bag of comfits that rattled when you shook it.", "options": ["sweets", "bells", "confetti", "rice"], "answer": 0},
    {"word": "comminatory", "sentence": "The comminatory letter from the bank warned of 'serious consequences' if we missed another payment.", "options": ["congratulatory", "apologetic", "intimidating", "handwritten"], "answer": 2},
  ],
  // #117 · Fri 05 Feb 2027
  [
    {"word": "tackle", "sentence": "He loaded his fishing tackle into the ute before sunrise and headed for the river.", "options": ["gear", "kelpie", "boat", "lunch"], "answer": 0},
    {"word": "nonchalant", "sentence": "She gave a nonchalant shrug, as if winning the lottery happened to her every week.", "options": ["excited", "nervous", "casual", "guilty"], "answer": 2},
    {"word": "propitiate", "sentence": "The villagers left offerings of rice and flowers to propitiate the spirit of the mountain.", "options": ["trap", "anger", "summon", "appease"], "answer": 3},
    {"word": "expatiate", "sentence": "Give my uncle the chance and he'll expatiate on the history of the Holden for an entire afternoon.", "options": ["lie", "joke", "ramble", "complain"], "answer": 2},
    {"word": "compeer", "sentence": "Among her compeers in the orchestra she was known for never missing a single rehearsal.", "options": ["conductors", "students", "peers", "audience"], "answer": 2},
    {"word": "compotation", "sentence": "The reunion turned into a three-day compotation, and nobody remembers much after the first night.", "options": ["road trip", "booze-up", "debate", "hike"], "answer": 1},
    {"word": "concinnity", "sentence": "The poem's concinnity, every line balanced and every rhyme just so, made it a favourite with the judges.", "options": ["darkness", "humour", "length", "elegance"], "answer": 3},
  ],
  // #118 · Sat 06 Feb 2027
  [
    {"word": "pitch", "sentence": "The sailors sealed the hull with hot pitch before the boat went back in the water.", "options": ["paint", "rope", "tar", "glue"], "answer": 2},
    {"word": "officious", "sentence": "An officious attendant insisted we move our towels twenty centimetres to the left.", "options": ["young", "bossy", "friendly", "lazy"], "answer": 1},
    {"word": "quixotic", "sentence": "Her quixotic campaign to get the city to ban leaf blowers attracted three supporters and a goat.", "options": ["cynical", "violent", "expensive", "idealistic"], "answer": 3},
    {"word": "expiate", "sentence": "He spent the rest of his life trying to expiate the guilt of the accident, volunteering at the hospital every weekend.", "options": ["hide", "explain", "try to forget", "atone for"], "answer": 3},
    {"word": "conclamation", "sentence": "A great conclamation went up from the crowd when the winning goal hit the net.", "options": ["shout", "groan", "sigh", "hush"], "answer": 0},
    {"word": "conjubilant", "sentence": "The conjubilant fans poured onto the ground, hugging strangers and singing the club song.", "options": ["rival", "angry", "joyful", "drunken"], "answer": 2},
    {"word": "convive", "sentence": "After the harvest, the whole village would convive in the barn until dawn.", "options": ["pray", "sleep", "vote", "feast"], "answer": 3},
  ],
  // #119 · Sun 07 Feb 2027
  [
    {"word": "plane", "sentence": "The carpenter ran a plane along the door until it closed without sticking.", "options": ["spirit level", "aircraft", "shaving tool", "tape measure"], "answer": 2},
    {"word": "onerous", "sentence": "Caring for three kids and a sick parent placed an onerous burden on her.", "options": ["welcome", "brief", "hidden", "heavy"], "answer": 3},
    {"word": "recidivist", "sentence": "The magistrate said the recidivist had been before the court eleven times for the same offence.", "options": ["key witness", "repeat offender", "court reporter", "first-time offender"], "answer": 1},
    {"word": "expostulate", "sentence": "I tried to expostulate with the referee, but he simply showed me a yellow card.", "options": ["celebrate", "remonstrate", "shake hands", "agree"], "answer": 1},
    {"word": "coronach", "sentence": "The pipers played a coronach as the old laird's coffin was carried up the glen.", "options": ["funeral dirge", "drinking song", "battle charge", "wedding march"], "answer": 0},
    {"word": "corposant", "sentence": "Sailors watched in awe as a corposant flickered blue at the top of the mast during the storm.", "options": ["seabird", "lightning bolt", "signal lamp", "St Elmo's fire"], "answer": 3},
    {"word": "costermonger", "sentence": "The costermonger pushed his barrow through the market, shouting the price of his apples.", "options": ["hawker", "beggar", "farmer", "town crier"], "answer": 0},
  ],
  // #120 · Mon 08 Feb 2027
  [
    {"word": "pound", "sentence": "Our dog escaped again, so we had to collect him from the council pound.", "options": ["rates office", "library", "chambers", "holding pen"], "answer": 3},
    {"word": "opulent", "sentence": "The hotel lobby was opulent, all marble, gold leaf and chandeliers the size of cars.", "options": ["gloomy", "lavish", "modern", "crowded"], "answer": 1},
    {"word": "smarmy", "sentence": "The smarmy estate agent kept calling us 'my dear friends' while steering us past the cracked foundations.", "options": ["nervous", "honest", "oily", "junior"], "answer": 2},
    {"word": "extenuate", "sentence": "Nothing can extenuate cruelty to animals, the magistrate said, not even a difficult childhood.", "options": ["excuse", "prevent", "punish", "encourage"], "answer": 0},
    {"word": "couthy", "sentence": "The couthy landlady greeted us with scones and a pot of tea before we'd even put down our bags.", "options": ["stern", "nosy", "elderly", "genial"], "answer": 3},
    {"word": "cragfast", "sentence": "The ranger abseiled down to rescue a goat that had got itself cragfast halfway down the gorge.", "options": ["badly injured", "stuck on a cliff", "caught in a trap", "tangled in wire"], "answer": 1},
    {"word": "cropsick", "sentence": "Cropsick after the Christmas feast, the whole family lay groaning on the couch.", "options": ["homesick", "sunburnt", "seasick", "overfed"], "answer": 3},
  ],
  // #121 · Tue 09 Feb 2027
  [
    {"word": "quarter", "sentence": "The pirates gave no quarter, sinking every ship that refused to surrender.", "options": ["notice", "warning", "mercy", "coins"], "answer": 2},
    {"word": "ostentatious", "sentence": "His ostentatious gold watch flashed every time he waved at the waiter, which was often.", "options": ["antique", "borrowed", "broken", "showy"], "answer": 3},
    {"word": "schadenfreude", "sentence": "There was a touch of schadenfreude in the office when the boss who'd banned lunch breaks got stuck in the lift.", "options": ["malicious glee", "mild confusion", "quiet panic", "real sympathy"], "answer": 0},
    {"word": "factious", "sentence": "The factious party spent more time fighting itself than the government.", "options": ["wealthy", "divided", "popular", "ancient"], "answer": 1},
    {"word": "cumbrous", "sentence": "The cumbrous old wardrobe took four of us an hour to get up the stairs.", "options": ["unwieldy", "antique", "ugly", "fragile"], "answer": 0},
    {"word": "cunctator", "sentence": "A born cunctator, he filed his tax return at 11.58 p.m. on the very last day, every single year.", "options": ["perfectionist", "night owl", "procrastinator", "accountant"], "answer": 2},
    {"word": "cynosure", "sentence": "At the fancy-dress party, my nephew in a full-body tomato costume was the cynosure of every eye.", "options": ["envy", "victim", "terror", "centre"], "answer": 3},
  ],
  // #122 · Wed 10 Feb 2027
  [
    {"word": "sage", "sentence": "The old fisherman was regarded as a sage, and young skippers came to him for advice about the weather.", "options": ["herb", "drunk", "fraud", "oracle"], "answer": 3},
    {"word": "palatable", "sentence": "The revised plan was far more palatable to voters than the original tax hike.", "options": ["expensive", "confusing", "familiar", "acceptable"], "answer": 3},
    {"word": "sobriquet", "sentence": "His sobriquet, 'The Professor', came from his habit of explaining the offside rule to referees.", "options": ["moniker", "uniform", "salary", "trophy"], "answer": 0},
    {"word": "footling", "sentence": "The meeting got bogged down in footling details, like the font on the agenda.", "options": ["financial", "crucial", "trivial", "legal"], "answer": 2},
    {"word": "dastard", "sentence": "The dastard ran off and left his mates to face the angry bouncer alone.", "options": ["joker", "hero", "rookie", "coward"], "answer": 3},
    {"word": "demulcent", "sentence": "The pharmacist recommended a demulcent syrup with honey, and within a day my raw throat felt better.", "options": ["spicy", "soothing", "sugar-free", "fizzy"], "answer": 1},
    {"word": "deshabille", "sentence": "Caught in deshabille by the early delivery driver, I signed for the parcel in a towel and one sock.", "options": ["undress", "the act", "a hurry", "disguise"], "answer": 0},
  ],
  // #123 · Thu 11 Feb 2027
  [
    {"word": "scrub", "sentence": "The road ran for hours through dry scrub, with barely a tree taller than a man.", "options": ["suburbs", "brushland", "rainforest", "farmland"], "answer": 1},
    {"word": "paucity", "sentence": "There's a paucity of parking near the hospital, so allow extra time.", "options": ["scarcity", "history", "surplus", "variety"], "answer": 0},
    {"word": "specious", "sentence": "His specious argument sounded convincing until you checked any of the numbers.", "options": ["lengthy", "false", "angry", "original"], "answer": 1},
    {"word": "fusty", "sentence": "The fusty old bookshop smelled of damp paper and pipe smoke.", "options": ["musty", "crowded", "tidy", "famous"], "answer": 0},
    {"word": "desuetude", "sentence": "The old tram line fell into desuetude, its tracks rusting under weeds and bitumen.", "options": ["debt", "fashion", "repair", "disuse"], "answer": 3},
    {"word": "dithyramb", "sentence": "The poet's dithyramb to the ocean, all wild exclamations and crashing rhythms, brought the crowd to its feet.", "options": ["short haiku", "dry essay", "frenzied hymn", "sad lament"], "answer": 2},
    {"word": "dodderer", "sentence": "The old dodderer took a full minute to get over the zebra crossing as the traffic waited patiently.", "options": ["lollipop man", "brisk walker", "shuffler", "busker"], "answer": 2},
  ],
  // #124 · Fri 12 Feb 2027
  [
    {"word": "sole", "sentence": "She was the sole survivor of the crash and spent months in hospital.", "options": ["lucky", "first", "fish", "only"], "answer": 3},
    {"word": "pedantic", "sentence": "My pedantic friend corrected the waiter's grammar before ordering his lunch.", "options": ["polite", "hungry", "foreign", "nitpicky"], "answer": 3},
    {"word": "suborn", "sentence": "The defendant was accused of trying to suborn witnesses with cash and concert tickets.", "options": ["locate", "bribe", "question", "protect"], "answer": 1},
    {"word": "glistering", "sentence": "The glistering frost on the paddocks melted within minutes of sunrise.", "options": ["heavy", "unusual", "shining", "patchy"], "answer": 2},
    {"word": "edacious", "sentence": "The edacious possums stripped every rose bush in the garden overnight.", "options": ["noisy", "greedy", "timid", "cheeky"], "answer": 1},
    {"word": "eleemosynary", "sentence": "The trust is purely eleemosynary, existing only to fund scholarships for country students.", "options": ["charitable", "profitable", "secretive", "political"], "answer": 0},
    {"word": "embonpoint", "sentence": "Years of good dinners had given the old chef a comfortable embonpoint that strained his apron strings.", "options": ["plumpness", "confidence", "reputation", "moustache"], "answer": 0},
  ],
  // #125 · Sat 13 Feb 2027
  [
    {"word": "sport", "sentence": "The groom sported a purple velvet suit and a fedora with a feather in it.", "options": ["rented", "hated", "played", "wore"], "answer": 3},
    {"word": "pejorative", "sentence": "'Bogan' was once purely pejorative, but some people now use it with affection.", "options": ["insulting", "old-fashioned", "regional", "formal"], "answer": 0},
    {"word": "supercilious", "sentence": "The supercilious sommelier raised an eyebrow when I asked whether the wine came in a cask.", "options": ["helpful", "flustered", "amused", "snooty"], "answer": 3},
    {"word": "jocose", "sentence": "His jocose remarks lightened the mood at an otherwise tense board meeting.", "options": ["timely", "jokey", "cruel", "blunt"], "answer": 1},
    {"word": "epulation", "sentence": "The wedding's epulation lasted four hours: twelve courses, three toasts and a whole roast pig.", "options": ["dancing", "speeches", "feasting", "ceremony"], "answer": 2},
    {"word": "esculent", "sentence": "The bush tucker guide showed us which berries were esculent and which would make us very sick.", "options": ["ripe", "rare", "native", "edible"], "answer": 3},
    {"word": "estivate", "sentence": "Some frogs estivate underground through the dry season, waiting for the rains.", "options": ["lie low", "migrate", "breed", "feed"], "answer": 0},
  ],
  // #126 · Sun 14 Feb 2027
  [
    {"word": "stock", "sentence": "She simmered the chicken bones for hours to make a rich stock for the risotto.", "options": ["sauce", "supply", "broth", "shares"], "answer": 2},
    {"word": "pernicious", "sentence": "Gossip had a pernicious effect on the team, and by the end of the season nobody trusted anyone.", "options": ["harmful", "minor", "positive", "temporary"], "answer": 0},
    {"word": "temerity", "sentence": "She had the temerity to tell the Prime Minister his tie was crooked, on live TV.", "options": ["decency", "foresight", "patience", "boldness"], "answer": 3},
    {"word": "loutish", "sentence": "The loutish behaviour of a few fans got the whole club fined.", "options": ["boorish", "polite", "loyal", "quiet"], "answer": 0},
    {"word": "eupeptic", "sentence": "Our eupeptic tour guide never stopped smiling, even when the bus broke down in the rain.", "options": ["grumpy", "sunny", "seasick", "anxious"], "answer": 1},
    {"word": "excogitate", "sentence": "The removalists spent a week trying to excogitate a way to get the piano up to the fourth floor.", "options": ["avoid", "work out", "pay for", "film"], "answer": 1},
    {"word": "excursus", "sentence": "The professor's excursus on medieval cheese-making took up half the lecture on the Black Death.", "options": ["digression", "slideshow", "summary", "mistake"], "answer": 0},
  ],
  // #127 · Mon 15 Feb 2027
  [
    {"word": "toll", "sentence": "The church bell tolled twelve times as the clock struck midnight.", "options": ["cracked", "rang", "swung", "charged"], "answer": 1},
    {"word": "petulant", "sentence": "The petulant star refused to go on stage until someone found him a bowl of blue jellybeans.", "options": ["nervous", "ill", "jet-lagged", "childish"], "answer": 3},
    {"word": "torpid", "sentence": "The torpid lizard barely moved on the cold rock, waiting for the sun to warm it.", "options": ["colourful", "hungry", "aggressive", "inactive"], "answer": 3},
    {"word": "malinger", "sentence": "Suspected of malingering, the soldier was ordered to jog around the parade ground on his 'broken' ankle.", "options": ["shirking", "complaining", "oversleeping", "deserting"], "answer": 0},
    {"word": "famulus", "sentence": "The old magician's famulus carried his books, polished his wand and fetched his tea.", "options": ["assistant", "rival", "landlord", "cat"], "answer": 0},
    {"word": "favonian", "sentence": "A favonian breeze drifted through the open windows, carrying the scent of cut grass.", "options": ["icy", "fierce", "gentle", "dusty"], "answer": 2},
    {"word": "feculent", "sentence": "The feculent water in the old canal was green, still and alive with mosquitoes.", "options": ["foul", "deep", "salty", "fresh"], "answer": 0},
  ],
  // #128 · Tue 16 Feb 2027
  [
    {"word": "ward", "sentence": "After her parents died, the girl became a ward of her wealthy aunt.", "options": ["guardian", "hospital room", "dependant", "servant"], "answer": 2},
    {"word": "plaintive", "sentence": "The plaintive cry of a lost lamb echoed across the valley.", "options": ["joyful", "faint", "pitiful", "angry"], "answer": 2},
    {"word": "tractable", "sentence": "The new puppy was surprisingly tractable, learning to sit and stay in a single afternoon.", "options": ["nervous", "small", "hyperactive", "biddable"], "answer": 3},
    {"word": "meretricious", "sentence": "The resort's meretricious glamour, all fake palms and plastic gold, faded on closer inspection.", "options": ["tawdry", "costly", "genuine", "quiet"], "answer": 0},
    {"word": "festinate", "sentence": "We had to festinate through the airport, dragging our bags behind us as the gate closed.", "options": ["argue", "rush", "stroll", "queue"], "answer": 1},
    {"word": "fireboard", "sentence": "In summer, a painted fireboard hid the empty hearth, decorated with roses and a sleeping cat.", "options": ["grate cover", "mantel clock", "coal scuttle", "hearthrug"], "answer": 0},
    {"word": "flacket", "sentence": "The farmer took a long pull from his flacket of cider before going back to the plough.", "options": ["flask", "pipe", "sandwich", "pouch"], "answer": 0},
  ],
  // #129 · Wed 17 Feb 2027
  [
    {"word": "wax", "sentence": "As the moon waxed over the following week, the nights became bright enough to read by.", "options": ["faded", "rose", "grew", "shone"], "answer": 2},
    {"word": "smorgasbord", "sentence": "The menu offered a smorgasbord of choices, which only made my indecisive father more anxious.", "options": ["handful", "range", "shortage", "couple"], "answer": 1},
    {"word": "trenchant", "sentence": "Her trenchant criticism of the report left little room for argument.", "options": ["cutting", "late", "gentle", "vague"], "answer": 0},
    {"word": "opprobrious", "sentence": "The opprobrious graffiti on the mayor's office was scrubbed off within the hour.", "options": ["artistic", "faded", "political", "abusive"], "answer": 3},
    {"word": "flagitious", "sentence": "The court heard details of a flagitious crime that shocked even veteran detectives.", "options": ["clever", "petty", "monstrous", "unsolved"], "answer": 2},
    {"word": "flibbertigibbet", "sentence": "My flibbertigibbet cousin changed her university course four times and her hair colour weekly.", "options": ["bookworm", "athlete", "scatterbrain", "perfectionist"], "answer": 2},
    {"word": "flocculent", "sentence": "Flocculent clouds drifted across the blue sky like sheep on a hillside.", "options": ["fluffy", "thin", "low", "dark grey"], "answer": 0},
  ],
  // #130 · Thu 18 Feb 2027
  [
    {"word": "coin", "sentence": "My nephew coined a new word for the dog's habit of sneezing whenever it gets excited.", "options": ["banned", "spelled", "explained", "invented"], "answer": 3},
    {"word": "precocious", "sentence": "The precocious seven-year-old corrected her teacher's pronunciation of 'quinoa' in front of the whole class.", "options": ["bright", "shy", "sleepy", "spoilt"], "answer": 0},
    {"word": "turgid", "sentence": "The turgid prose of the annual report made even the accountants' eyes glaze over.", "options": ["concise", "honest", "colourful", "overblown"], "answer": 3},
    {"word": "palliate", "sentence": "The doctor said the medication would palliate the pain, though it couldn't cure the illness.", "options": ["diagnose", "ease", "worsen", "explain"], "answer": 1},
    {"word": "folderol", "sentence": "Ignore all the folderol about 'disruptive synergy' and just look at the price.", "options": ["evidence", "fine print", "claptrap", "small detail"], "answer": 2},
    {"word": "footbreadth", "sentence": "Not a footbreadth of the narrow ledge was spared by the nesting gulls.", "options": ["foot's width", "drop of rain", "blade of grass", "speck of dust"], "answer": 0},
    {"word": "footslog", "sentence": "We had to footslog the last ten kilometres after the bus broke down.", "options": ["cycle", "trudge", "hitchhike", "jog"], "answer": 1},
  ],
  // #131 · Fri 19 Feb 2027
  [
    {"word": "crack", "sentence": "A crack team of engineers was flown in to repair the dam.", "options": ["local", "broken", "expert", "small"], "answer": 2},
    {"word": "prodigal", "sentence": "The prodigal heir spent his inheritance on racehorses and a yacht he couldn't sail.", "options": ["lavish", "absent", "lucky", "only"], "answer": 0},
    {"word": "vacillate", "sentence": "She continued to vacillate between the two job offers until both companies withdrew them.", "options": ["waver", "negotiate", "celebrate", "decide"], "answer": 0},
    {"word": "penurious", "sentence": "As penurious students, we heated the flat by leaving the oven door open.", "options": ["careless", "cold", "reckless", "hard-up"], "answer": 3},
    {"word": "formicary", "sentence": "The children watched the busy formicary through a glass panel at the science museum.", "options": ["fish tank", "beehive", "mouse cage", "ant colony"], "answer": 3},
    {"word": "frisure", "sentence": "Her elaborate frisure took two hours and a whole can of hairspray to achieve.", "options": ["hairdo", "manicure", "makeup", "gown"], "answer": 0},
    {"word": "frore", "sentence": "The frore wind off the ranges left a skin of ice on every puddle by dawn.", "options": ["dusty", "frosty", "warm", "gentle"], "answer": 1},
  ],
  // #132 · Sat 20 Feb 2027
  [
    {"word": "flight", "sentence": "Our flat is up three flights, and the lift has been broken since March.", "options": ["hallways", "staircases", "ladders", "plane rides"], "answer": 1},
    {"word": "profligate", "sentence": "The profligate council spent a million dollars on a sculpture nobody wanted.", "options": ["cautious", "corrupt", "reckless", "elected"], "answer": 2},
    {"word": "venal", "sentence": "The venal official would approve any building permit for the right envelope of cash.", "options": ["senior", "lazy", "bribable", "elected"], "answer": 2},
    {"word": "perambulate", "sentence": "Every Sunday the couple would perambulate around the botanic gardens, arm in arm.", "options": ["amble", "bicker", "garden", "race"], "answer": 0},
    {"word": "frowsty", "sentence": "The frowsty spare room hadn't been aired since Grandma's last visit.", "options": ["cluttered", "chilly", "pink", "airless"], "answer": 3},
    {"word": "fulgent", "sentence": "The fulgent headlights of the road train lit up the whole stretch of highway.", "options": ["yellowed", "blazing", "dim", "flickering"], "answer": 1},
    {"word": "fuliginous", "sentence": "The fuliginous ceiling of the old pub told of a century of open fires and pipe smoke.", "options": ["vaulted", "painted", "lofty", "sooty"], "answer": 3},
  ],
  // #133 · Sun 21 Feb 2027
  [
    {"word": "grill", "sentence": "Detectives grilled the suspect for six hours before he finally admitted to the theft.", "options": ["released", "photographed", "interrogated", "fed"], "answer": 2},
    {"word": "propitious", "sentence": "With clear skies and a light breeze, conditions were propitious for the balloon launch.", "options": ["unusual", "favourable", "dangerous", "unknown"], "answer": 1},
    {"word": "vicissitude", "sentence": "The old farmer had weathered every vicissitude: drought, flood, fire and three changes of government.", "options": ["festival", "upheaval", "promotion", "visitor"], "answer": 1},
    {"word": "perspicuous", "sentence": "Her perspicuous instructions meant even I could assemble the flat-pack wardrobe.", "options": ["lucid", "brief", "cheerful", "foreign"], "answer": 0},
    {"word": "frowzy", "sentence": "He turned up to the interview in a frowzy jumper with a hole in each elbow.", "options": ["borrowed", "shabby", "smart", "woollen"], "answer": 1},
    {"word": "funambulate", "sentence": "The circus star would funambulate across the high wire without a net, juggling as she went.", "options": ["somersault", "trapeze-swing", "do cartwheels", "tightrope-walk"], "answer": 3},
    {"word": "furbelow", "sentence": "Her ball gown was a froth of lace, ribbons and furbelows.", "options": ["sequins", "pearls", "flounces", "pleats"], "answer": 2},
  ],
  // #134 · Mon 22 Feb 2027
  [
    {"word": "hamper", "sentence": "We packed a hamper with cheese, crackers and a bottle of wine for the races.", "options": ["backpack", "basket", "esky", "box"], "answer": 1},
    {"word": "prosaic", "sentence": "He gave a prosaic explanation for the 'ghost': a loose window latch and a draughty hall.", "options": ["dramatic", "spooky", "ordinary", "scientific"], "answer": 2},
    {"word": "vituperative", "sentence": "The vituperative comments under the article were eventually switched off by the editor.", "options": ["helpful", "witty", "venomous", "anonymous"], "answer": 2},
    {"word": "pettifog", "sentence": "Lawyers for both sides continued to pettifog over minor wording while the deadline passed.", "options": ["quibble", "network", "agree", "rest"], "answer": 0},
    {"word": "fustigate", "sentence": "The headmaster threatened to fustigate any boy caught smoking behind the bike sheds.", "options": ["expel", "report", "cane", "fine"], "answer": 2},
    {"word": "fuggy", "sentence": "The fuggy back room of the pub reeked of beer and wet dogs.", "options": ["tiny", "noisy", "chilly", "stale"], "answer": 3},
    {"word": "gabfest", "sentence": "The book club had become a weekly gabfest; nobody had actually finished a book in months.", "options": ["natter", "feast", "debate", "quiz night"], "answer": 0},
  ],
  // #135 · Tue 23 Feb 2027
  [
    {"word": "bark", "sentence": "The old three-masted bark dropped anchor in Hobart harbour with a cargo of whale oil.", "options": ["river barge", "dog's yelp", "sailing ship", "wooden crate"], "answer": 2},
    {"word": "gregarious", "sentence": "Our gregarious neighbour knows every dog, child and postie on the street by name.", "options": ["elderly", "nosy", "sociable", "grumpy"], "answer": 2},
    {"word": "perspicacious", "sentence": "A perspicacious reader will spot the killer's identity by chapter three.", "options": ["patient", "young", "casual", "shrewd"], "answer": 3},
    {"word": "platitudinous", "sentence": "The minister's platitudinous speech about 'working families' said nothing at all.", "options": ["rehearsed", "fiery", "lengthy", "clichéd"], "answer": 3},
    {"word": "bombilation", "sentence": "The bombilation of blowflies at the window made the hot afternoon even drowsier.", "options": ["tapping", "crawling", "buzzing", "dying"], "answer": 2},
    {"word": "apolaustic", "sentence": "After a decade of hard work, he retired to an apolaustic life of long lunches and afternoon naps.", "options": ["indulgent", "disciplined", "lonely", "frugal"], "answer": 0},
    {"word": "attercop", "sentence": "An enormous attercop had taken up residence in the dunny, and nobody would go in.", "options": ["rat", "spider", "snake", "possum"], "answer": 1},
  ],
  // #136 · Wed 24 Feb 2027
  [
    {"word": "buck", "sentence": "Our school decided to buck the trend and ban phones from the playground entirely.", "options": ["start", "study", "defy", "follow"], "answer": 2},
    {"word": "cantankerous", "sentence": "The cantankerous old ferryman shouted at anyone who stepped aboard without paying first.", "options": ["grumpy", "tired", "cheerful", "deaf"], "answer": 0},
    {"word": "equivocate", "sentence": "Pressed on whether taxes would rise, the treasurer continued to equivocate for twenty minutes.", "options": ["hedge", "boast", "shout", "apologise"], "answer": 0},
    {"word": "piffling", "sentence": "The parking fine was a piffling twenty dollars, so he parked there every day.", "options": ["monthly", "trifling", "hefty", "fixed"], "answer": 1},
    {"word": "tintinnabulation", "sentence": "The tintinnabulation from the cathedral tower woke the whole neighbourhood on Christmas morning.", "options": ["cannon fire", "fireworks", "bell-ringing", "chanting"], "answer": 2},
    {"word": "aristology", "sentence": "His passion for aristology meant every dinner party came with handwritten menus and a seating plan.", "options": ["church history", "family trees", "star-gazing", "fine dining"], "answer": 3},
    {"word": "cogitabund", "sentence": "He sat cogitabund by the fire, chin in hand, for most of the evening.", "options": ["drowsy", "sulky", "pensive", "tipsy"], "answer": 2},
  ],
  // #137 · Thu 25 Feb 2027
  [
    {"word": "cape", "sentence": "The lighthouse stands on a rocky cape that juts out into the Southern Ocean.", "options": ["sandbank", "harbour", "headland", "lagoon"], "answer": 2},
    {"word": "reticent", "sentence": "She was reticent about her past and changed the subject whenever anyone asked about her childhood.", "options": ["reserved", "honest", "confused", "boastful"], "answer": 0},
    {"word": "sycophant", "sentence": "The new manager surrounded herself with sycophants who praised every idea she had.", "options": ["rivals", "experts", "critics", "toadies"], "answer": 3},
    {"word": "rumbustious", "sentence": "The rumbustious crowd at the footy grand final sang, chanted and stamped for three hours.", "options": ["rowdy", "sober", "sullen", "tiny"], "answer": 0},
    {"word": "gaucherie", "sentence": "His gaucherie at the embassy dinner included drinking from the finger bowl.", "options": ["awkwardness", "charm", "generosity", "wit"], "answer": 0},
    {"word": "backfriend", "sentence": "He discovered too late that his business partner was a backfriend who had been leaking secrets to rivals.", "options": ["nervous wreck", "distant cousin", "silent partner", "false friend"], "answer": 3},
    {"word": "cepevorous", "sentence": "My cepevorous uncle ate them raw like apples, which explains why nobody sat near him on the bus.", "options": ["garlic-hating", "onion-eating", "meat-eating", "bean-loving"], "answer": 1},
  ],
  // #138 · Fri 26 Feb 2027
  [
    {"word": "count", "sentence": "The count lived alone in a crumbling castle with forty cats and a single servant.", "options": ["miser", "bishop", "tally", "noble"], "answer": 3},
    {"word": "sardonic", "sentence": "He gave a sardonic smile when told the 'quick' meeting would only take three hours.", "options": ["proud", "wry", "shy", "warm"], "answer": 1},
    {"word": "harangue", "sentence": "The coach delivered a furious harangue at half-time, and the team came out a different side.", "options": ["apology", "strategy", "rant", "silence"], "answer": 2},
    {"word": "propound", "sentence": "The professor began to propound her theory that the dinosaurs died of boredom.", "options": ["disprove", "abandon", "advance", "steal"], "answer": 2},
    {"word": "aestuous", "sentence": "The aestuous afternoon sent everyone in Bourke searching for shade and a cold drink.", "options": ["windy", "sultry", "drizzly", "gloomy"], "answer": 1},
    {"word": "gallinipper", "sentence": "Camped by the billabong, we were tormented all night by gallinippers the size of sparrows.", "options": ["frogs", "mozzies", "owls", "flying foxes"], "answer": 1},
    {"word": "hautgout", "sentence": "The venison had hung for a fortnight and developed a hautgout that not every guest appreciated.", "options": ["gamey tang", "tough skin", "pink colour", "crisp edge"], "answer": 0},
  ],
  // #139 · Sat 27 Feb 2027
  [
    {"word": "date", "sentence": "The camel driver offered us a handful of dates and a cup of sweet mint tea.", "options": ["almonds", "appointments", "biscuits", "dried fruit"], "answer": 3},
    {"word": "nonplussed", "sentence": "She was completely nonplussed by the question and just stared at the examiner in silence.", "options": ["baffled", "amused", "offended", "bored"], "answer": 0},
    {"word": "obfuscate", "sentence": "The company's lawyers tried to obfuscate the facts with two hundred pages of jargon.", "options": ["prove", "obscure", "shorten", "reveal"], "answer": 1},
    {"word": "prognosticate", "sentence": "Old-timers in the district would prognosticate the weather by watching the ants.", "options": ["record", "forecast", "ignore", "control"], "answer": 1},
    {"word": "ugsome", "sentence": "The ugsome creature in the horror film gave my little brother nightmares for a week.", "options": ["hideous", "clumsy", "talking", "tiny"], "answer": 0},
    {"word": "bantling", "sentence": "She arrived at the barbecue with a squalling bantling on her hip and a casserole in her free hand.", "options": ["infant", "puppy", "handbag", "chook"], "answer": 0},
    {"word": "dinsome", "sentence": "The dinsome pub on a Friday night made any sort of conversation impossible.", "options": ["smoky", "fancy", "noisy", "empty"], "answer": 2},
  ],
  // #140 · Sun 28 Feb 2027
  [
    {"word": "digest", "sentence": "Every Sunday the paper prints a digest of the week's biggest stories.", "options": ["cartoon", "critique", "summary", "ranking"], "answer": 2},
    {"word": "surreptitious", "sentence": "She cast a surreptitious glance at her phone under the dinner table.", "options": ["sneaky", "long", "angry", "proud"], "answer": 0},
    {"word": "punctilious", "sentence": "The punctilious butler checked that every fork sat exactly two centimetres from the plate.", "options": ["clumsy", "fussy", "elderly", "grumpy"], "answer": 1},
    {"word": "veridical", "sentence": "The witness's account turned out to be veridical, matching the CCTV footage in every detail.", "options": ["dramatic", "truthful", "invented", "confused"], "answer": 1},
    {"word": "farlie", "sentence": "The two-headed calf was the farlie of the agricultural show, drawing queues all afternoon.", "options": ["winner", "mascot", "scandal", "marvel"], "answer": 3},
    {"word": "foison", "sentence": "After the rains came a foison of wildflowers across the desert, purple and gold as far as you could see.", "options": ["handful", "shortage", "dusting", "plenty"], "answer": 3},
    {"word": "spaewife", "sentence": "The old spaewife at the fair peered into my palm and promised me riches.", "options": ["fruit seller", "snake charmer", "fortune-teller", "ticket seller"], "answer": 2},
  ],
  // #141 · Mon 01 Mar 2027
  [
    {"word": "draft", "sentence": "His grandfather's number came up in the draft, and he spent two years in Vietnam.", "options": ["redundancies", "conscription", "census", "tax audit"], "answer": 1},
    {"word": "taciturn", "sentence": "The taciturn farmer answered every question with a nod, a shrug or the word 'reckon'.", "options": ["stubborn", "crafty", "quiet", "friendly"], "answer": 2},
    {"word": "malapropism", "sentence": "His best malapropism was announcing that the hospital had put his mother in 'the expensive care unit'.", "options": ["insult", "pun", "complaint", "slip-up"], "answer": 3},
    {"word": "sibylline", "sentence": "The tarot reader's sibylline message, 'The door is also a wall', puzzled the whole table.", "options": ["misprinted", "rude", "cryptic", "cheerful"], "answer": 2},
    {"word": "solivagant", "sentence": "A solivagant traveller, he hitchhiked across the Nullarbor with only a swag and a harmonica.", "options": ["lone", "tired", "famous", "rich"], "answer": 0},
    {"word": "xenodochy", "sentence": "The station owners were famous for their xenodochy, and no traveller was ever turned away.", "options": ["horses", "hospitality", "stinginess", "cruelty"], "answer": 1},
    {"word": "zythepsary", "sentence": "The old zythepsary on the edge of town now produces craft pale ale and hosts trivia nights.", "options": ["chapel", "stable", "brewery", "bakery"], "answer": 2},
  ],
  // #142 · Tue 02 Mar 2027
  [
    {"word": "drill", "sentence": "Twice a term the school holds a fire drill, and everyone files out onto the oval.", "options": ["practice", "inspection", "lecture", "alarm"], "answer": 0},
    {"word": "verbose", "sentence": "The verbose instructions ran to forty pages for a toaster with one button.", "options": ["printed", "wordy", "foreign", "vague"], "answer": 1},
    {"word": "abstemious", "sentence": "An abstemious man, he allowed himself one glass of wine at Christmas and nothing else all year.", "options": ["wealthy", "greedy", "famous", "moderate"], "answer": 3},
    {"word": "swingeing", "sentence": "The government announced swingeing cuts to the arts budget, and three theatres closed within months.", "options": ["welcome", "severe", "modest", "secret"], "answer": 1},
    {"word": "rattlemouse", "sentence": "A rattlemouse flitted out of the barn at dusk, chasing moths around the porch light.", "options": ["owl", "wren", "gecko", "bat"], "answer": 3},
    {"word": "terremote", "sentence": "The terremote rattled every window in Newcastle and cracked the old town hall.", "options": ["cyclone", "explosion", "earthquake", "storm"], "answer": 2},
    {"word": "sunbow", "sentence": "Spray from the waterfall caught the light, and a faint sunbow arched across the gorge.", "options": ["eagle", "rainbow", "cable car", "shadow"], "answer": 1},
  ],
  // #143 · Wed 03 Mar 2027
  [
    {"word": "entrance", "sentence": "The magician's act entranced the children, who sat open-mouthed for a full hour.", "options": ["enchanted", "annoyed", "bored", "frightened"], "answer": 0},
    {"word": "voracious", "sentence": "My voracious little sister reads four novels a week and still complains of having nothing to read.", "options": ["slow", "bored", "avid", "reluctant"], "answer": 2},
    {"word": "inure", "sentence": "Years in the emergency ward had inured her to the sight of blood.", "options": ["attracted", "hardened", "sensitised", "introduced"], "answer": 1},
    {"word": "sapid", "sentence": "The chef's sapid sauces were the talk of every food blog in Melbourne.", "options": ["pricey", "tasty", "bland", "cold"], "answer": 1},
    {"word": "cradlesong", "sentence": "My grandmother hummed an old Welsh cradlesong until the baby finally drifted off.", "options": ["lullaby", "shanty", "march", "hymn"], "answer": 0},
    {"word": "circumbendibus", "sentence": "The taxi driver took a circumbendibus through every suburb in the city before finding the hotel.", "options": ["toll road", "shortcut", "U-turn", "detour"], "answer": 3},
    {"word": "pnigalion", "sentence": "A pnigalion about falling from a cliff woke him gasping at three in the morning.", "options": ["nightmare", "leg cramp", "snore", "hiccup"], "answer": 0},
  ],
  // #144 · Thu 04 Mar 2027
  [
    {"word": "fair", "sentence": "She had fair hair and freckles, and burnt within ten minutes at the beach.", "options": ["thick", "dyed", "blond", "curly"], "answer": 2},
    {"word": "lethargic", "sentence": "The heat made the dogs lethargic, and they lay under the verandah panting all day.", "options": ["sluggish", "noisy", "restless", "vicious"], "answer": 0},
    {"word": "dissemble", "sentence": "He tried to dissemble his disappointment with a cheerful grin, but his eyes gave him away.", "options": ["share", "admit", "explain", "mask"], "answer": 3},
    {"word": "stickle", "sentence": "The two committee members would stickle over a comma for an hour if you let them.", "options": ["agree", "laugh", "bicker", "vote"], "answer": 2},
    {"word": "pinchpenny", "sentence": "My pinchpenny uncle reuses every teabag three times and switches off the fridge overnight.", "options": ["worrier", "miser", "spendthrift", "handyman"], "answer": 1},
    {"word": "procellous", "sentence": "The procellous crossing of Bass Strait left half the passengers green and groaning.", "options": ["overnight", "scenic", "leisurely", "stormy"], "answer": 3},
    {"word": "tardigradous", "sentence": "Our tardigradous progress up the mountain track was overtaken by a family with a pram.", "options": ["slow", "proud", "steep", "noisy"], "answer": 0},
  ],
  // #145 · Fri 05 Mar 2027
  [
    {"word": "fan", "sentence": "Strong winds fanned the bushfire overnight, pushing it towards the township.", "options": ["slowed", "fed", "circled", "split"], "answer": 1},
    {"word": "despondent", "sentence": "After the third rejection letter, he became despondent and stopped applying altogether.", "options": ["dejected", "stubborn", "furious", "relieved"], "answer": 0},
    {"word": "apoplectic", "sentence": "Dad was apoplectic when he saw the scratch down the side of his new ute.", "options": ["calm", "thrilled", "puzzled", "livid"], "answer": 3},
    {"word": "vatic", "sentence": "The old bushman's vatic warnings about the 'big wet' came true that February.", "options": ["prophetic", "drunken", "half-mumbled", "false"], "answer": 0},
    {"word": "jactitate", "sentence": "Feverish and unable to sleep, the patient continued to jactitate on the narrow hospital bed.", "options": ["snore", "thrash", "mutter", "sweat"], "answer": 1},
    {"word": "xerophagy", "sentence": "During Lent the monks practised xerophagy, and the kitchen smelt of nothing but dry bread.", "options": ["silent prayer", "sleeping rough", "eating dry food", "night vigils"], "answer": 2},
    {"word": "rident", "sentence": "The rident toddler waved at every passenger on the crowded morning train, delighting them all.", "options": ["teething", "grizzling", "beaming", "sleepy"], "answer": 2},
  ],
  // #146 · Sat 06 Mar 2027
  [
    {"word": "flock", "sentence": "Tourists flock to Uluru every winter to watch the rock change colour at sunset.", "options": ["hike", "write", "drive", "throng"], "answer": 3},
    {"word": "sullen", "sentence": "The sullen teenager grunted at his grandmother and went straight back to his phone.", "options": ["sleepy", "polite", "sulky", "hungry"], "answer": 2},
    {"word": "venial", "sentence": "Forgetting to bring the dip to a barbecue is a venial sin, not a hanging offence.", "options": ["modern", "mortal", "common", "minor"], "answer": 3},
    {"word": "straiten", "sentence": "Losing the overtime hours would straiten the family's finances for the rest of the year.", "options": ["tighten", "expose", "boost", "simplify"], "answer": 0},
    {"word": "trencherman", "sentence": "A legendary trencherman, my uncle once ate three servings of pavlova at a single wedding.", "options": ["fine dancer", "big eater", "fussy eater", "fast talker"], "answer": 1},
    {"word": "cicatrose", "sentence": "The old shearer's cicatrose hands told of fifty years of blades, wire and kelpie bites.", "options": ["gloved", "tiny", "scarred", "shaking"], "answer": 2},
    {"word": "roration", "sentence": "In the still dawn, the roration on the lawn soaked our shoes before we reached the car.", "options": ["frost", "dew", "mud", "hail"], "answer": 1},
  ],
  // #147 · Sun 07 Mar 2027
  [
    {"word": "fluke", "sentence": "The whale raised its flukes high out of the water before diving.", "options": ["tail fins", "calves", "spouts", "barnacles"], "answer": 0},
    {"word": "jovial", "sentence": "The jovial publican greeted everyone by name and remembered how they took their beer.", "options": ["tired", "nosy", "stern", "jolly"], "answer": 3},
    {"word": "restive", "sentence": "The crowd grew restive as the band failed to appear for a second hour.", "options": ["silent", "drowsy", "impatient", "cheerful"], "answer": 2},
    {"word": "upbraid", "sentence": "The coach would upbraid any player who arrived late, even by thirty seconds.", "options": ["bench", "fine", "ignore", "scold"], "answer": 3},
    {"word": "tommyrot", "sentence": "Most of what that so-called expert says about healing crystals is absolute tommyrot.", "options": ["fact", "nonsense", "common sense", "genius"], "answer": 1},
    {"word": "fubbery", "sentence": "The council inquiry uncovered years of fubbery in the awarding of road contracts.", "options": ["deceit", "efficiency", "delay", "prudence"], "answer": 0},
    {"word": "hurlwind", "sentence": "A hurlwind tore across the paddock, lifting dust, hay and a startled chook into the air.", "options": ["sea breeze", "lightning", "willy-willy", "hailstorm"], "answer": 2},
  ],
  // #148 · Mon 08 Mar 2027
  [
    {"word": "gum", "sentence": "We pitched the tent under an old river gum on the banks of the Murray.", "options": ["willow", "eucalypt", "wattle", "jacaranda"], "answer": 1},
    {"word": "placid", "sentence": "The placid old horse let the children climb all over him without flinching.", "options": ["lame", "wild", "proud", "calm"], "answer": 3},
    {"word": "curmudgeon", "sentence": "The local curmudgeon complained to the council about the noise of children laughing.", "options": ["hermit", "bully", "grouch", "mayor"], "answer": 2},
    {"word": "thievish", "sentence": "The thievish magpies stole every shiny bottle cap in the backyard.", "options": ["singing", "pilfering", "nesting", "swooping"], "answer": 1},
    {"word": "longueur", "sentence": "Despite a few longueurs in the middle act, the play was a triumph.", "options": ["lulls", "twists", "actors", "songs"], "answer": 0},
    {"word": "rutilant", "sentence": "The rutilant sunset over the Kimberley set the whole sky on fire.", "options": ["grey", "fleeting", "red", "misty"], "answer": 2},
    {"word": "oneirocritic", "sentence": "The village oneirocritic told her that seeing a fish in her sleep meant a baby was on the way.", "options": ["dream reader", "midwife", "weather man", "fishmonger"], "answer": 0},
  ],
  // #149 · Tue 09 Mar 2027
  [
    {"word": "hatch", "sentence": "The three boys hatched a plan to sneak into the cinema through the fire exit.", "options": ["devised", "filmed", "overheard", "abandoned"], "answer": 0},
    {"word": "pallid", "sentence": "After a month in hospital, his pallid face looked almost grey.", "options": ["round", "swollen", "shaven", "pale"], "answer": 3},
    {"word": "extirpate", "sentence": "Volunteers spent years trying to extirpate the rabbits from the island, and finally succeeded.", "options": ["purge", "feed", "count", "tag"], "answer": 0},
    {"word": "plenteous", "sentence": "The plenteous harvest that year meant every family in the valley had full storerooms.", "options": ["early", "rich", "meagre", "late"], "answer": 1},
    {"word": "susurrous", "sentence": "The susurrous rustle of the casuarinas lulled us to sleep in the tent.", "options": ["howling", "whispering", "creaking", "crackling"], "answer": 1},
    {"word": "aristarch", "sentence": "Every first novel had to survive the town's resident aristarch, a retired professor with a red pen.", "options": ["harsh critic", "ghostwriter", "bookseller", "publisher"], "answer": 0},
    {"word": "volery", "sentence": "The zoo's new volery houses forty species of finch and parrot.", "options": ["library", "nursery", "aviary", "aquarium"], "answer": 2},
  ],
  // #150 · Wed 10 Mar 2027
  [
    {"word": "host", "sentence": "The new software brought a host of problems we hadn't anticipated.", "options": ["handful", "lot", "fix", "couple"], "answer": 1},
    {"word": "obstinate", "sentence": "The obstinate mule refused to cross the creek, no matter how hard we pulled.", "options": ["old", "thirsty", "timid", "stubborn"], "answer": 3},
    {"word": "cloying", "sentence": "The cloying sweetness of the cocktail made me reach for a glass of water.", "options": ["icy", "bitter", "sickly", "faint"], "answer": 2},
    {"word": "ruminative", "sentence": "In a ruminative mood, he sat on the jetty for hours watching the tide.", "options": ["pensive", "cheerful", "restless", "foul"], "answer": 0},
    {"word": "mizzle", "sentence": "A cold mizzle hung over the Dandenongs all morning, slowly soaking through our jackets.", "options": ["drizzle", "breeze", "haze", "glare"], "answer": 0},
    {"word": "gapeseed", "sentence": "The crashed hot-air balloon in the main street was the gapeseed of the week.", "options": ["mystery", "scandal", "sight", "joke"], "answer": 2},
    {"word": "incolumity", "sentence": "The guards were charged with the incolumity of the young prince.", "options": ["wardrobe", "schooling", "marriage", "safety"], "answer": 3},
  ],
  // #151 · Thu 11 Mar 2027
  [
    {"word": "jam", "sentence": "We were in a real jam when the ute broke down forty kilometres from the nearest town.", "options": ["fix", "rush", "queue", "mood"], "answer": 0},
    {"word": "ephemeral", "sentence": "Fame on social media is ephemeral, lasting about as long as a carton of milk.", "options": ["fleeting", "stressful", "lucrative", "addictive"], "answer": 0},
    {"word": "salutary", "sentence": "The near miss proved salutary, and he never again drove home after a few beers.", "options": ["costly", "useful", "harmful", "pointless"], "answer": 1},
    {"word": "woebegone", "sentence": "The woebegone puppy sat in the rain outside the door until someone let him in.", "options": ["forlorn", "muddy", "excited", "stray"], "answer": 0},
    {"word": "tripudiate", "sentence": "When the final siren went, the whole crowd began to tripudiate in the stands.", "options": ["sit", "boo", "dance", "weep"], "answer": 2},
    {"word": "bickerment", "sentence": "Years of bickerment over the back fence left the two neighbours not speaking.", "options": ["gardening", "squabbling", "renovation", "friendship"], "answer": 1},
    {"word": "lethiferous", "sentence": "The lethiferous berries were marked with a skull on the botanic garden's sign.", "options": ["sour", "edible", "rare", "deadly"], "answer": 3},
  ],
  // #152 · Fri 12 Mar 2027
  [
    {"word": "lock", "sentence": "She kept a lock of her son's baby hair in a silver locket.", "options": ["photo", "tooth", "drawing", "curl"], "answer": 3},
    {"word": "spurious", "sentence": "The insurance claim was spurious, and the investigator found the 'stolen' TV in the garage.", "options": ["valid", "late", "huge", "fake"], "answer": 3},
    {"word": "sybarite", "sentence": "A true sybarite, he spent his inheritance on silk sheets, fine wine and a full-time masseur.", "options": ["ascetic", "hedonist", "miser", "workaholic"], "answer": 1},
    {"word": "unwonted", "sentence": "The usually grumpy librarian greeted us with unwonted cheerfulness on Monday morning.", "options": ["polite", "unusual", "forced", "fake"], "answer": 1},
    {"word": "ingeminate", "sentence": "The parrot would ingeminate the same rude word every time the vicar came to visit.", "options": ["whisper", "forget", "repeat", "spell"], "answer": 2},
    {"word": "suaviloquy", "sentence": "The candidate's suaviloquy charmed the room, though nobody could remember a single policy afterwards.", "options": ["smooth talk", "odd clothes", "loud voice", "bad jokes"], "answer": 0},
    {"word": "nubilous", "sentence": "The nubilous sky over Hobart promised another grey and drizzly afternoon.", "options": ["cloudy", "pink", "clear", "starry"], "answer": 0},
  ],
  // #153 · Sat 13 Mar 2027
  [
    {"word": "log", "sentence": "The captain recorded the storm in the ship's log, noting the wind speed every hour.", "options": ["journal", "mast", "hold", "engine"], "answer": 0},
    {"word": "debonair", "sentence": "In his white linen suit and panama hat, he looked thoroughly debonair.", "options": ["scruffy", "ridiculous", "overheated", "dashing"], "answer": 3},
    {"word": "stolid", "sentence": "The stolid guard at the palace gate didn't blink, even when a tourist waved a flag in his face.", "options": ["giggly", "nervous", "bored", "stony"], "answer": 3},
    {"word": "priggish", "sentence": "His priggish refusal to laugh at any joke made him unpopular at parties.", "options": ["shy", "bored", "prim", "deaf"], "answer": 2},
    {"word": "sorehead", "sentence": "Don't play Monopoly with Uncle Ray; he's a sorehead who flips the board when losing.", "options": ["sore loser", "cheat", "card shark", "banker"], "answer": 0},
    {"word": "gracillent", "sentence": "The gracillent dancer seemed to float across the stage like a heron.", "options": ["nervous", "slender", "sturdy", "tiny"], "answer": 1},
    {"word": "spumiferous", "sentence": "The spumiferous waves crashed against the rocks at Bondi, soaking the onlookers.", "options": ["small", "foamy", "green", "calm"], "answer": 1},
  ],
  // #154 · Sun 14 Mar 2027
  [
    {"word": "mine", "sentence": "Grandpa was a mine of information about cricket scores from the 1950s.", "options": ["keen buyer", "harsh critic", "dull bore", "rich source"], "answer": 3},
    {"word": "scrupulous", "sentence": "She was scrupulous about returning every cent of change, even to the self-serve machine.", "options": ["careful", "secretive", "casual", "careless"], "answer": 0},
    {"word": "waggish", "sentence": "The waggish headmaster ended every school assembly with a terrible pun.", "options": ["droll", "tired", "stern", "bald"], "answer": 0},
    {"word": "supervene", "sentence": "Just as the talks seemed to be succeeding, a scandal would supervene and ruin everything.", "options": ["be denied", "blow over", "crop up", "get buried"], "answer": 2},
    {"word": "scandalmonger", "sentence": "The local scandalmonger knew about the mayor's bankruptcy before the mayor's own accountant did.", "options": ["banker", "detective", "priest", "gossip"], "answer": 3},
    {"word": "dulcitude", "sentence": "The dulcitude of the ripe mangoes had the children licking juice from their elbows.", "options": ["sourness", "sweetness", "hardness", "toughness"], "answer": 1},
    {"word": "cecity", "sentence": "Cataracts had brought on a slow cecity, and by eighty he could no longer read.", "options": ["dementia", "baldness", "blindness", "deafness"], "answer": 2},
  ],
  // #155 · Mon 15 Mar 2027
  [
    {"word": "mint", "sentence": "Collectors pay thousands for comics in mint condition, still sealed in their plastic sleeves.", "options": ["damp", "worn", "new", "fair"], "answer": 2},
    {"word": "zealous", "sentence": "The zealous new parking inspector booked her own mother outside the chemist.", "options": ["junior", "lenient", "lazy", "keen"], "answer": 3},
    {"word": "recalcitrant", "sentence": "The recalcitrant toddler refused to put on his shoes, his hat or his sunscreen.", "options": ["hungry", "clumsy", "unruly", "sleepy"], "answer": 2},
    {"word": "phantasmagoric", "sentence": "The festival's phantasmagoric light show turned the old gasworks into a forest of glowing jellyfish.", "options": ["surreal", "dull", "costly", "brief"], "answer": 0},
    {"word": "galumph", "sentence": "The kelpie pup came galumphing across the yard and knocked over the water bowl.", "options": ["sneaking", "limping", "clomping", "yelping"], "answer": 2},
    {"word": "lavation", "sentence": "The lavation of the sheep before shearing turned the creek grey with dirt and lanolin.", "options": ["branding", "washing", "counting", "feeding"], "answer": 1},
    {"word": "macilent", "sentence": "The macilent stray had clearly not eaten properly in weeks.", "options": ["limping", "nervous", "skinny", "filthy"], "answer": 2},
  ],
  // #156 · Tue 16 Mar 2027
  [
    {"word": "mole", "sentence": "Police suspected a mole inside the department was tipping off the drug syndicate.", "options": ["judge", "clerk", "hacker", "spy"], "answer": 3},
    {"word": "belligerent", "sentence": "The belligerent drunk wanted to fight everyone in the pub, including the jukebox.", "options": ["tearful", "sleepy", "cheerful", "hostile"], "answer": 3},
    {"word": "callow", "sentence": "The callow young lieutenant had never seen action, and it showed.", "options": ["green", "cruel", "tall", "brave"], "answer": 0},
    {"word": "rackety", "sentence": "The rackety old ute could be heard coming from three paddocks away.", "options": ["rattly", "speedy", "red", "shiny"], "answer": 0},
    {"word": "kibitz", "sentence": "Grandpa would kibitz over everyone's shoulder during the card game, offering advice nobody wanted.", "options": ["snooze", "butt in", "cheat", "deal"], "answer": 1},
    {"word": "madefy", "sentence": "The baker would madefy the dough with a little warm milk before rolling it out.", "options": ["season", "moisten", "flatten", "freeze"], "answer": 1},
    {"word": "marcassin", "sentence": "The hunters' dogs flushed a marcassin from the undergrowth, still striped like a humbug.", "options": ["fawn", "hare", "young boar", "young fox"], "answer": 2},
  ],
  // #157 · Wed 17 Mar 2027
  [
    {"word": "novel", "sentence": "Her novel approach to fundraising involved auctioning off the principal's parking spot.", "options": ["new", "risky", "lazy", "costly"], "answer": 0},
    {"word": "inscrutable", "sentence": "The cat gave me an inscrutable look and walked off with my sandwich.", "options": ["guilty", "grateful", "hungry", "puzzling"], "answer": 3},
    {"word": "perfidious", "sentence": "The perfidious ally switched sides halfway through the war, taking the battle plans with him.", "options": ["nervous", "false", "wealthy", "loyal"], "answer": 1},
    {"word": "pernickety", "sentence": "My pernickety aunt irons her tea towels and alphabetises the spice rack.", "options": ["clever", "lazy", "fussy", "messy"], "answer": 2},
    {"word": "lucullan", "sentence": "The wedding was a lucullan affair: oysters, lobster, roast lamb and a six-tier cake.", "options": ["lavish", "cheap", "short", "casual"], "answer": 0},
    {"word": "mirific", "sentence": "The fireworks over the harbour were mirific, and even the cynics in our group fell silent.", "options": ["disappointing", "wondrous", "deafening", "late"], "answer": 1},
    {"word": "monohemerous", "sentence": "The monohemerous fever came and went before the doctor could even see him.", "options": ["one-day", "deadly", "weekly", "mild"], "answer": 0},
  ],
  // #158 · Thu 18 Mar 2027
  [
    {"word": "organ", "sentence": "The party's official organ, a weekly newspaper, printed the leader's speech in full.", "options": ["heartbeat", "rival", "mouthpiece", "opponent"], "answer": 2},
    {"word": "exuberant", "sentence": "The exuberant puppy leapt into the pool, then shook himself dry over all the guests.", "options": ["sick", "timid", "old", "lively"], "answer": 3},
    {"word": "puerile", "sentence": "His puerile jokes about the boss's name stopped being funny around Year 9.", "options": ["cruel", "babyish", "clever", "subtle"], "answer": 1},
    {"word": "prosy", "sentence": "The prosy after-dinner speaker droned on about tax law until half the guests had left.", "options": ["brief", "dull", "drunk", "witty"], "answer": 1},
    {"word": "malapropos", "sentence": "His malapropos joke about funerals at the wake was met with stony silence.", "options": ["old", "whispered", "ill-timed", "clever"], "answer": 2},
    {"word": "mundivagant", "sentence": "A mundivagant photographer, she had filed stories from ninety countries before turning forty.", "options": ["globetrotting", "chain-smoking", "left-handed", "award-winning"], "answer": 0},
    {"word": "nimiety", "sentence": "The menu suffered from a nimiety of truffle oil; it was in everything, even the ice cream.", "options": ["lack", "hint", "excess", "price"], "answer": 2},
  ],
  // #159 · Fri 19 Mar 2027
  [
    {"word": "plant", "sentence": "The man who heckled the comedian turned out to be a plant, paid to start a scene.", "options": ["cop", "drunk", "stooge", "critic"], "answer": 2},
    {"word": "incessant", "sentence": "The incessant barking from next door kept the whole street awake.", "options": ["faint", "distant", "sudden", "constant"], "answer": 3},
    {"word": "salubrious", "sentence": "The resort was hardly salubrious, with cockroaches in the shower and mould on the ceiling.", "options": ["healthy", "remote", "cheap", "crowded"], "answer": 0},
    {"word": "placatory", "sentence": "He brought home a placatory bunch of flowers after forgetting their anniversary.", "options": ["appeasing", "cheap", "giant", "half-wilted"], "answer": 0},
    {"word": "noctuary", "sentence": "The insomniac poet kept a noctuary of every sound and thought between midnight and dawn.", "options": ["sketchbook", "night diary", "alarm clock", "love letter"], "answer": 1},
    {"word": "obmutescence", "sentence": "His sudden obmutescence at the dinner table suggested something was badly wrong.", "options": ["appetite", "laughter", "silence", "cough"], "answer": 2},
    {"word": "omnivagant", "sentence": "The omnivagant goats roamed the whole island, eating everything from hibiscus to clothes on the line.", "options": ["fenced", "wandering", "hairy", "starving"], "answer": 1},
  ],
  // #160 · Sat 20 Mar 2027
  [
    {"word": "pool", "sentence": "The four families decided to pool their money and hire a holiday house at Byron.", "options": ["combine", "save", "waste", "borrow"], "answer": 0},
    {"word": "pompous", "sentence": "The pompous mayor insisted on being addressed as 'Your Worship' at the sausage sizzle.", "options": ["vain", "drunken", "humble", "tardy"], "answer": 0},
    {"word": "soporific", "sentence": "The lecturer's soporific voice sent half the class to sleep within ten minutes.", "options": ["shrill", "lulling", "squeaky", "booming"], "answer": 1},
    {"word": "protuberant", "sentence": "The tree frog's protuberant eyes swivelled slowly towards the unsuspecting fly on the window.", "options": ["bulging", "golden", "tiny", "closed"], "answer": 0},
    {"word": "oscitant", "sentence": "The oscitant students in the back row barely survived the nine o'clock lecture.", "options": ["giggling", "late", "eager", "yawning"], "answer": 3},
    {"word": "pedetentous", "sentence": "Pedetentous by nature, the old council approved the new footpath only after eleven years of debate.", "options": ["corrupt", "reckless", "cautious", "generous"], "answer": 2},
    {"word": "perflate", "sentence": "Open both windows and let the sea breeze perflate the stuffy bedroom.", "options": ["darken", "air", "scent", "dampen"], "answer": 1},
  ],
  // #161 · Sun 21 Mar 2027
  [
    {"word": "punch", "sentence": "Grandma's famous Christmas punch contained more brandy than anyone suspected.", "options": ["pudding", "cake", "drink", "trifle"], "answer": 2},
    {"word": "sombre", "sentence": "The mood at the wake was sombre until someone told the story about the runaway horse.", "options": ["gloomy", "rowdy", "tense", "awkward"], "answer": 0},
    {"word": "tautology", "sentence": "Saying 'a free gift' is a tautology, since every gift is free.", "options": ["lie", "contradiction", "pun", "repetition"], "answer": 3},
    {"word": "rawboned", "sentence": "The rawboned stockman looked as if he'd been carved from a fence post.", "options": ["gaunt", "young", "tanned", "stocky"], "answer": 0},
    {"word": "pettifogger", "sentence": "Don't hire that pettifogger; he'll charge you a fortune to argue about a fence line.", "options": ["shyster", "plumber", "builder", "surveyor"], "answer": 0},
    {"word": "pererration", "sentence": "After a year of pererration through Asia, he came home with a beard and a sitar.", "options": ["fasting", "wandering", "working", "teaching"], "answer": 1},
    {"word": "philauty", "sentence": "His philauty was legendary; he had three portraits of himself in the lounge room.", "options": ["shyness", "humility", "vanity", "wealth"], "answer": 2},
  ],
  // #162 · Mon 22 Mar 2027
  [
    {"word": "rash", "sentence": "In a rash moment he bet his car on the Melbourne Cup and lost.", "options": ["sober", "quiet", "hasty", "lucky"], "answer": 2},
    {"word": "stoical", "sentence": "She remained stoical throughout the long recovery, never once complaining about the pain.", "options": ["tearful", "brave", "bitter", "anxious"], "answer": 1},
    {"word": "vacuous", "sentence": "The vacuous reality star couldn't name the capital of her own state.", "options": ["wealthy", "famous", "glamorous", "brainless"], "answer": 3},
    {"word": "raddled", "sentence": "The raddled old rock star emerged from the tour bus looking a hundred years old.", "options": ["beaming", "sober", "young", "worn-out"], "answer": 3},
    {"word": "philomath", "sentence": "A lifelong philomath, my grandfather enrolled in Mandarin classes at the age of eighty-two.", "options": ["keen learner", "globetrotter", "troublemaker", "bookseller"], "answer": 0},
    {"word": "piscation", "sentence": "Piscation was his only hobby, and he spent every weekend down at the jetty before dawn.", "options": ["fishing", "birdwatching", "painting", "jogging"], "answer": 0},
    {"word": "procere", "sentence": "The procere ghost gums lined the riverbank like a row of sentries.", "options": ["bent", "young", "dead", "tall"], "answer": 3},
  ],
  // #163 · Tue 23 Mar 2027
  [
    {"word": "ring", "sentence": "Police smashed a car-theft ring operating out of three garages in the western suburbs.", "options": ["wave", "rumour", "gang", "habit"], "answer": 2},
    {"word": "whimsical", "sentence": "The café's whimsical decor included teacups hanging from the ceiling and a bathtub full of cushions.", "options": ["drab", "quirky", "modern", "costly"], "answer": 1},
    {"word": "vociferous", "sentence": "The vociferous protesters outside parliament could be heard from the cafeteria.", "options": ["masked", "peaceful", "loud", "small"], "answer": 2},
    {"word": "riant", "sentence": "The riant countryside of the Barossa, all vines and sunshine, revived us after the long drive.", "options": ["flat", "barren", "gloomy", "cheery"], "answer": 3},
    {"word": "pibroch", "sentence": "A lone figure on the hill played a pibroch as the sun went down over the loch.", "options": ["bagpipe tune", "hymn", "folk ballad", "bugle call"], "answer": 0},
    {"word": "quiritation", "sentence": "The quiritation of the stranded hikers carried down the gorge to the rangers' hut.", "options": ["cheers", "pleas", "songs", "jokes"], "answer": 1},
    {"word": "refocillate", "sentence": "A cup of tea and a scone will refocillate even the most weary bushwalker.", "options": ["revive", "bore", "bloat", "annoy"], "answer": 0},
  ],
  // #164 · Wed 24 Mar 2027
  [
    {"word": "slip", "sentence": "She wrote her number on a slip of paper and tucked it into his pocket.", "options": ["ream", "roll", "scrap", "stack"], "answer": 2},
    {"word": "aloof", "sentence": "The new principal seemed aloof at first, but she warmed up once she learnt everyone's name.", "options": ["chatty", "distant", "bossy", "nervous"], "answer": 1},
    {"word": "zealot", "sentence": "A fitness zealot, he jogs to work, cycles home and does push-ups during ad breaks.", "options": ["coach", "sceptic", "beginner", "fanatic"], "answer": 3},
    {"word": "sophistical", "sentence": "The lawyer's sophistical argument dazzled the jury but collapsed under scrutiny on appeal.", "options": ["slippery", "emotional", "boring", "airtight"], "answer": 0},
    {"word": "saucebox", "sentence": "The little saucebox poked her tongue out at the bus driver and then waved sweetly.", "options": ["scaredy-cat", "angel", "brat", "bookworm"], "answer": 2},
    {"word": "revalescent", "sentence": "Revalescent after the flu, she managed a short walk around the block.", "options": ["recovering", "feverish", "bedridden", "exhausted"], "answer": 0},
    {"word": "salebrous", "sentence": "The salebrous track to the old mine shook every bolt loose on the trailer.", "options": ["smooth", "bumpy", "muddy", "sealed"], "answer": 1},
  ],
  // #165 · Thu 25 Mar 2027
  [
    {"word": "tie", "sentence": "The final ended in a tie, and the two captains shared the trophy.", "options": ["draw", "upset", "fight", "rout"], "answer": 0},
    {"word": "amiable", "sentence": "Our amiable landlord dropped round with a bag of lemons from his tree.", "options": ["friendly", "nosy", "grumpy", "elderly"], "answer": 0},
    {"word": "bellicose", "sentence": "The dictator's bellicose speech had the neighbouring countries mobilising their armies.", "options": ["tearful", "rambling", "boring", "warlike"], "answer": 3},
    {"word": "squiffy", "sentence": "After two glasses of champagne, Grandma was decidedly squiffy and started dancing on the table.", "options": ["sleepy", "tipsy", "grumpy", "sober"], "answer": 1},
    {"word": "scapegrace", "sentence": "The family scapegrace had been expelled from three schools and once stole the vicar's bicycle.", "options": ["heir", "cousin", "genius", "rascal"], "answer": 3},
    {"word": "sempervirent", "sentence": "The sempervirent hedge kept the garden green right through the frosty Canberra winter.", "options": ["flowering", "patchy", "evergreen", "thorny"], "answer": 2},
    {"word": "siccate", "sentence": "The old recipe tells you to siccate the herbs for a week before crushing them into powder.", "options": ["soak", "dry", "boil", "chill"], "answer": 1},
  ],
  // #166 · Fri 26 Mar 2027
  [
    {"word": "tip", "sentence": "We loaded the ute with the old couch and three broken chairs and drove them to the tip.", "options": ["dump", "shop", "pub", "beach"], "answer": 0},
    {"word": "apathetic", "sentence": "Voters were so apathetic that only twelve people turned up to the council election forum.", "options": ["excited", "outraged", "unmoved", "confused"], "answer": 2},
    {"word": "braggadocio", "sentence": "Beneath all the braggadocio, the young boxer was terrified of his opponent.", "options": ["muscle", "sweat", "silence", "bluster"], "answer": 3},
    {"word": "scintillate", "sentence": "The diamonds in the shop window seemed to scintillate under the jeweller's bright lamps.", "options": ["crack", "glint", "melt", "fade"], "answer": 1},
    {"word": "shilly-shally", "sentence": "Stop shilly-shallying and pick a restaurant, or we'll be eating cereal for dinner.", "options": ["wavering", "joking", "sulking", "arguing"], "answer": 0},
    {"word": "sloomy", "sentence": "The sloomy afternoon heat had everyone dozing in their deckchairs.", "options": ["lazy", "fierce", "sudden", "dry"], "answer": 0},
    {"word": "sparrowgrass", "sentence": "Grandma's market stall sold sparrowgrass by the bunch, tied with string, every September.", "options": ["leeks", "rhubarb", "asparagus", "lavender"], "answer": 2},
  ],
  // #167 · Sat 27 Mar 2027
  [
    {"word": "toast", "sentence": "After her book became a bestseller, she was the toast of the Sydney literary scene.", "options": ["rival", "darling", "critic", "outcast"], "answer": 1},
    {"word": "audacious", "sentence": "The thieves made an audacious daylight raid on the jewellery store opposite the police station.", "options": ["failed", "clumsy", "quiet", "daring"], "answer": 3},
    {"word": "circumlocution", "sentence": "After ten minutes of circumlocution, he finally admitted he'd crashed the car.", "options": ["waffling", "joking", "shouting", "sobbing"], "answer": 0},
    {"word": "serried", "sentence": "Serried ranks of vines stretched across the hills of the Clare Valley.", "options": ["ancient", "withered", "tangled", "close-set"], "answer": 3},
    {"word": "scunner", "sentence": "She took a scunner to coriander as a child and still picks every leaf out of her curry.", "options": ["liking", "dislike", "fancy", "allergy"], "answer": 1},
    {"word": "sprack", "sentence": "Sprack as ever at ninety, Nan still walks to the shops and back every morning.", "options": ["frail", "grumpy", "spry", "deaf"], "answer": 2},
    {"word": "subitaneous", "sentence": "A subitaneous downpour sent the picnickers running for the rotunda.", "options": ["sudden", "long", "gentle", "warm"], "answer": 0},
  ],
  // #168 · Sun 28 Mar 2027
  [
    {"word": "well", "sentence": "Tears welled up in her eyes as the national anthem began.", "options": ["rose", "dried", "froze", "sparkled"], "answer": 0},
    {"word": "austere", "sentence": "The monks lived in austere cells with nothing but a bed, a chair and a crucifix.", "options": ["cramped", "damp", "lavish", "plain"], "answer": 3},
    {"word": "comestible", "sentence": "The hikers ran out of comestibles on day three and lived on muesli bars and creek water.", "options": ["maps", "food", "cash", "matches"], "answer": 1},
    {"word": "shamefaced", "sentence": "The shamefaced puppy sat beside the chewed slipper, ears flat and tail tucked.", "options": ["sheepish", "proud", "angry", "sleepy-eyed"], "answer": 0},
    {"word": "skirl", "sentence": "The skirl of the pipes echoed off the castle walls as the clan marched past.", "options": ["wail", "hum", "drumbeat", "tune"], "answer": 0},
    {"word": "tenerity", "sentence": "The tenerity with which the old vet handled the injured joey brought tears to our eyes.", "options": ["speed", "skill", "gentleness", "roughness"], "answer": 2},
    {"word": "tonsor", "sentence": "The village tonsor gave every boy in town the same short back and sides.", "options": ["priest", "teacher", "barber", "butcher"], "answer": 2},
  ],
  // #169 · Mon 29 Mar 2027
  [
    {"word": "clip", "sentence": "The old ute was moving at a fair clip when it hit the cattle grid.", "options": ["angle", "speed", "wobble", "distance"], "answer": 1},
    {"word": "banal", "sentence": "The song's banal lyrics rhymed 'love' with 'above' four times in one chorus.", "options": ["corny", "clever", "foreign", "explicit"], "answer": 0},
    {"word": "dyspeptic", "sentence": "The dyspeptic critic hated every film he reviewed that year, even the ones about puppies.", "options": ["generous", "bored", "young", "sour"], "answer": 3},
    {"word": "sough", "sentence": "The wind began to sough through the casuarinas as the storm approached.", "options": ["snap", "sigh", "rattle", "roar"], "answer": 1},
    {"word": "slumgullion", "sentence": "The camp cook served up a slumgullion of whatever was left in the tins.", "options": ["pie", "omelette", "roast", "stew"], "answer": 3},
    {"word": "torved", "sentence": "The torved headmaster glared at us over his spectacles from behind his desk.", "options": ["sleepy", "tipsy", "jolly", "stern"], "answer": 3},
    {"word": "toswink", "sentence": "The miners would toswink underground for twelve hours a day.", "options": ["sing", "sleep", "toil", "pray"], "answer": 2},
  ],
  // #170 · Tue 30 Mar 2027
  [
    {"word": "cleave", "sentence": "Even after forty years in Australia, he would cleave to the customs of his village.", "options": ["mock", "cling", "forget", "object"], "answer": 1},
    {"word": "blithe", "sentence": "She showed a blithe disregard for the speed limit, humming along to the radio at 140.", "options": ["careful", "carefree", "grudging", "nervous"], "answer": 1},
    {"word": "emollient", "sentence": "The minister's emollient tone calmed the angry farmers at the town hall meeting.", "options": ["gentle", "shrill", "bossy", "sarcastic"], "answer": 0},
    {"word": "splendiferous", "sentence": "My nephew described his birthday cake, a three-tier chocolate volcano, as 'splendiferous'.", "options": ["enormous", "bitter", "revolting", "fabulous"], "answer": 3},
    {"word": "smaragdine", "sentence": "The smaragdine waters of the lagoon were so clear we could see the turtles below.", "options": ["muddy", "milky", "inky", "emerald"], "answer": 3},
    {"word": "venust", "sentence": "The venust bride wore her grandmother's lace veil down the aisle.", "options": ["nervous", "lovely", "late", "tearful"], "answer": 1},
    {"word": "vetust", "sentence": "The vetust olive trees in the monastery garden were said to be a thousand years old.", "options": ["fruitless", "withered", "ancient", "sacred"], "answer": 2},
  ],
  // #171 · Wed 31 Mar 2027
  [
    {"word": "cue", "sentence": "He chalked his cue and lined up the black ball for the winning shot.", "options": ["grip", "stick", "glove", "boot"], "answer": 1},
    {"word": "boisterous", "sentence": "The boisterous kids at the next table were building a fort out of sugar sachets.", "options": ["bored", "unruly", "polite", "sleepy"], "answer": 1},
    {"word": "execrable", "sentence": "The hotel's execrable coffee tasted like dishwater stirred with a cigarette.", "options": ["foreign", "pricey", "dreadful", "strong"], "answer": 2},
    {"word": "supernal", "sentence": "The choir's supernal voices filled the cathedral, and several listeners were moved to tears.", "options": ["hushed", "tired", "off-key", "heavenly"], "answer": 3},
    {"word": "sockdolager", "sentence": "The final question was a sockdolager that knocked out every contestant but one.", "options": ["tie-breaker", "clincher", "giveaway", "warm-up"], "answer": 1},
    {"word": "velivolant", "sentence": "The velivolant yachts raced across Sydney Harbour on Boxing Day.", "options": ["sailing", "anchored", "towed", "sinking"], "answer": 0},
    {"word": "veriloquent", "sentence": "A veriloquent witness, she refused to embellish her story even slightly.", "options": ["honest", "tearful", "shaky", "hostile"], "answer": 0},
  ],
  // #172 · Thu 01 Apr 2027
  [
    {"word": "egg", "sentence": "His mates egged him on until he jumped off the bridge into the river.", "options": ["scolded", "teased", "urged", "warned"], "answer": 2},
    {"word": "callous", "sentence": "His callous remark about the flood victims cost him his job.", "options": ["careless", "heartless", "clumsy", "honest"], "answer": 1},
    {"word": "litigious", "sentence": "Our litigious neighbour has taken three people to court this year, including the postie.", "options": ["elderly", "forgetful", "generous", "sue-happy"], "answer": 3},
    {"word": "terrene", "sentence": "The monk had renounced all terrene pleasures, even chocolate biscuits.", "options": ["worldly", "sinful", "costly", "childish"], "answer": 0},
    {"word": "squabash", "sentence": "The reviewer's job was to squabash bad poetry, and she did it with relish.", "options": ["recite", "demolish", "publish", "praise"], "answer": 1},
    {"word": "ultroneous", "sentence": "Her ultroneous offer to wash up after the party surprised everyone.", "options": ["grudging", "unasked", "late", "bribed"], "answer": 1},
    {"word": "weetingly", "sentence": "He weetingly sold the lemon of a car to his own cousin.", "options": ["cheaply", "sadly", "wilfully", "quickly"], "answer": 2},
  ],
  // #173 · Fri 02 Apr 2027
  [
    {"word": "fine", "sentence": "The beach at Hyams is famous for its fine white sand.", "options": ["coarse", "hot", "powdery", "wet"], "answer": 2},
    {"word": "deft", "sentence": "With a few deft strokes, the cartoonist captured the Prime Minister's eyebrows perfectly.", "options": ["skilful", "clumsy", "angry", "slow"], "answer": 0},
    {"word": "ennui", "sentence": "A deep ennui settled over the town in the long, empty weeks after the harvest festival.", "options": ["panic", "joy", "tedium", "fog"], "answer": 2},
    {"word": "swelter", "sentence": "Commuters continued to swelter on the train while the air conditioning was 'being looked at'.", "options": ["chatter", "shiver", "snooze", "roast"], "answer": 3},
    {"word": "snickersnee", "sentence": "The pirate drew his snickersnee and waved it under the captain's nose.", "options": ["pistol", "flag", "spyglass", "knife"], "answer": 3},
    {"word": "wrawful", "sentence": "The wrawful landlord shouted at us for parking on his nature strip.", "options": ["drunken", "kindly", "cranky", "new"], "answer": 2},
    {"word": "witful", "sentence": "The witful old woman always knew which of the neighbours' kids was up to mischief.", "options": ["stern", "wise", "nosy", "deaf"], "answer": 1},
  ],
  // #174 · Sat 03 Apr 2027
  [
    {"word": "hail", "sentence": "The comedian hails from Wagga Wagga and mentions it in every show.", "options": ["moved", "fled", "dates", "comes"], "answer": 3},
    {"word": "devious", "sentence": "The devious toddler hid the broccoli in the dog's water bowl.", "options": ["hungry", "honest", "fussy", "crafty"], "answer": 3},
    {"word": "mellifluous", "sentence": "The radio host's mellifluous voice made even the traffic report sound romantic.", "options": ["nasal", "silky", "shrill", "grating"], "answer": 1},
    {"word": "viscid", "sentence": "A viscid sap oozed from the cut in the gum tree's bark.", "options": ["clear", "sweet", "bitter", "sticky"], "answer": 3},
    {"word": "prattler", "sentence": "The prattler on talkback radio ranted for three hours about bike lanes.", "options": ["traffic cop", "cyclist", "windbag", "comedian"], "answer": 2},
    {"word": "xenial", "sentence": "Our xenial hosts in Tasmania insisted we stay an extra week and fed us like royalty.", "options": ["foreign", "elderly", "grumpy", "welcoming"], "answer": 3},
    {"word": "yclept", "sentence": "The ship, yclept the Lady Nelson, sailed for Port Phillip in 1801.", "options": ["named", "built", "sunk", "owned"], "answer": 0},
  ],
  // #175 · Sun 04 Apr 2027
  [
    {"word": "duck", "sentence": "Our opening batsman was out for a duck, caught behind off the very first ball.", "options": ["a no-ball", "a century", "zero", "fifty"], "answer": 2},
    {"word": "frugal", "sentence": "My frugal grandmother saved every rubber band, twist tie and jam jar for sixty years.", "options": ["cheerful", "wasteful", "forgetful", "thrifty"], "answer": 3},
    {"word": "parsimony", "sentence": "The council's parsimony meant the library roof leaked for a decade before anyone fixed it.", "options": ["incompetence", "bureaucracy", "stinginess", "corruption"], "answer": 2},
    {"word": "sozzled", "sentence": "By the end of the office Christmas party, the accountant was thoroughly sozzled and singing ABBA.", "options": ["exhausted", "homesick", "overjoyed", "drunk"], "answer": 3},
    {"word": "megrims", "sentence": "A bout of the megrims kept her in bed all weekend with the curtains drawn.", "options": ["the blues", "the giggles", "wanderlust", "the hiccups"], "answer": 0},
    {"word": "heartquake", "sentence": "A sudden heartquake seized him as the plane dropped into the air pocket.", "options": ["hunger", "terror", "boredom", "curiosity"], "answer": 1},
    {"word": "kidling", "sentence": "The kidling bleated for its mother from the top of the woodpile.", "options": ["newborn lamb", "young goat", "toddler", "calf"], "answer": 1},
  ],
  // #176 · Mon 05 Apr 2027
  [
    {"word": "crop", "sentence": "The jockey raised his crop as the horses thundered into the straight.", "options": ["helmet", "harvest", "binoculars", "whip"], "answer": 3},
    {"word": "tenacious", "sentence": "The tenacious terrier wouldn't let go of the rope, even when we lifted him off the ground.", "options": ["exhausted", "nervous", "dogged", "playful"], "answer": 2},
    {"word": "pillory", "sentence": "The tabloids continued to pillory the coach after the team's fourth straight loss.", "options": ["interview", "photograph", "applaud", "ridicule"], "answer": 3},
    {"word": "supererogatory", "sentence": "Her supererogatory footnotes ran to three pages, longer than the essay itself.", "options": ["plagiarised", "fascinating", "unnecessary", "handwritten"], "answer": 2},
    {"word": "histrion", "sentence": "The old histrion could still hold an audience spellbound with a single Shakespeare soliloquy.", "options": ["priest", "historian", "actor", "auctioneer"], "answer": 2},
    {"word": "juvenescent", "sentence": "After a fortnight in Fiji, Mum came home looking positively juvenescent and relaxed.", "options": ["sunburnt", "youthful", "homesick", "exhausted"], "answer": 1},
    {"word": "ladkin", "sentence": "The ladkin trotted after his big brothers all the way to the creek.", "options": ["little boy", "grandfather", "piglet", "puppy"], "answer": 0},
  ],
  // #177 · Tue 06 Apr 2027
  [
    {"word": "lark", "sentence": "The boys only stole the sign for a lark and returned it the next morning.", "options": ["joke", "revenge", "profit", "school project"], "answer": 0},
    {"word": "vindictive", "sentence": "The vindictive coach dropped the player for a whole season over a single missed training.", "options": ["generous", "spiteful", "forgetful", "cautious"], "answer": 1},
    {"word": "plaudits", "sentence": "The young chef's first menu won plaudits from every critic in the city.", "options": ["lawsuits", "shrugs", "complaints", "praise"], "answer": 3},
    {"word": "whelm", "sentence": "A great wave rose up to whelm the little fishing boat.", "options": ["steady", "push along", "engulf", "lift"], "answer": 2},
    {"word": "jongleur", "sentence": "A wandering jongleur arrived at the castle with a lute, a monkey and a hundred songs.", "options": ["knight", "minstrel", "pilgrim", "pedlar"], "answer": 1},
    {"word": "liefsome", "sentence": "The liefsome scent of jasmine drifted over the back fence every evening in spring.", "options": ["faint", "pleasing", "cloying", "pungent"], "answer": 1},
    {"word": "mansuete", "sentence": "The mansuete old wombat at the sanctuary let the children scratch behind his ears.", "options": ["tame", "sleepy", "wild", "grumpy"], "answer": 0},
  ],
  // #178 · Wed 07 Apr 2027
  [
    {"word": "lean", "sentence": "The family went through some lean years when the mine closed.", "options": ["busy", "happy", "quiet", "hard"], "answer": 3},
    {"word": "wistful", "sentence": "She gave a wistful smile as she looked at the photos of her childhood home.", "options": ["smug", "forced", "nervous", "longing"], "answer": 3},
    {"word": "promulgate", "sentence": "The church took centuries to promulgate the new calendar across Europe.", "options": ["abolish", "translate", "spread", "question"], "answer": 2},
    {"word": "redound", "sentence": "Her success will redound to the credit of the whole school.", "options": ["count against", "do damage", "be unknown", "contribute"], "answer": 3},
    {"word": "kickshaw", "sentence": "The banquet table was covered in kickshaws: tiny tarts, sugared violets and jellies shaped like swans.", "options": ["burnt offerings", "dirty plates", "plain loaves", "fancy titbits"], "answer": 3},
    {"word": "meandrian", "sentence": "The meandrian creek doubled back on itself a dozen times before reaching the sea.", "options": ["shallow", "winding", "polluted", "freezing"], "answer": 1},
    {"word": "nippitato", "sentence": "The innkeeper served a nippitato so strong that two pints had the shearers singing.", "options": ["potent brew", "fruit cordial", "weak tea", "barley water"], "answer": 0},
  ],
  // #179 · Thu 08 Apr 2027
  [
    {"word": "nag", "sentence": "The swagman rode into town on a broken-down old nag with one ear missing.", "options": ["bicycle", "complainer", "horse", "donkey cart"], "answer": 2},
    {"word": "idyllic", "sentence": "They spent an idyllic week in a cabin by the lake, with no phone reception and no neighbours.", "options": ["miserable", "hectic", "freezing", "peaceful"], "answer": 3},
    {"word": "preen", "sentence": "The finalists continued to preen in front of the mirror while the judges deliberated.", "options": ["sulk", "pray", "stretch", "primp"], "answer": 3},
    {"word": "vamoose", "sentence": "When the farmer appeared with his dog, the trespassing teenagers decided to vamoose.", "options": ["hide", "fight back", "scram", "apologise"], "answer": 2},
    {"word": "lotusland", "sentence": "Some called the beachside town a lotusland, where nobody hurried and nothing ever got done.", "options": ["busy port", "lazy haven", "boom town", "ghost town"], "answer": 1},
    {"word": "obolary", "sentence": "The obolary student lived on two-minute noodles and the free bread at church suppers.", "options": ["vegetarian", "studious", "homesick", "penniless"], "answer": 3},
    {"word": "odelet", "sentence": "She wrote a little odelet to her cat and read it aloud at his birthday party.", "options": ["short poem", "pantomime", "lullaby", "toast"], "answer": 0},
  ],
  // #180 · Fri 09 Apr 2027
  [
    {"word": "palm", "sentence": "The dodgy dealer tried to palm off a fake Rolex on a tourist.", "options": ["pawn", "repair", "foist", "polish"], "answer": 2},
    {"word": "indignant", "sentence": "The indignant customer demanded to see the manager after finding a hair in her pavlova.", "options": ["hungry", "outraged", "confused", "delighted"], "answer": 1},
    {"word": "proclivity", "sentence": "His proclivity for falling asleep in meetings eventually cost him his promotion.", "options": ["tendency", "dislike", "excuse", "medication"], "answer": 0},
    {"word": "wreathe", "sentence": "Smoke from the bushfires would wreathe the hills for weeks that summer.", "options": ["scorch", "clear", "encircle", "brighten"], "answer": 2},
    {"word": "litotes", "sentence": "Calling the cyclone 'a bit of a breeze' is a classic case of Australian litotes.", "options": ["exaggeration", "rhyming slang", "superstition", "understatement"], "answer": 3},
    {"word": "oakling", "sentence": "We planted an oakling in the park the day our daughter was born.", "options": ["time capsule", "sapling", "fence post", "rosebush"], "answer": 1},
    {"word": "rondure", "sentence": "The children sat in a rondure around the campfire, toasting marshmallows.", "options": ["row", "queue", "single file", "circle"], "answer": 3},
  ],
  // #181 · Sat 10 Apr 2027
  [
    {"word": "prune", "sentence": "The editor told him to prune the manuscript by at least a hundred pages.", "options": ["proofread", "trim", "expand", "translate"], "answer": 1},
    {"word": "hapless", "sentence": "The hapless tourist dropped his phone, his passport and finally himself into the harbour.", "options": ["unlucky", "drunken", "angry", "careless"], "answer": 0},
    {"word": "quisling", "sentence": "The resistance fighters regarded the mayor as a quisling who had sold out the town.", "options": ["traitor", "drunkard", "hero", "coward"], "answer": 0},
    {"word": "veracious", "sentence": "The court found her a veracious witness whose evidence could be relied on completely.", "options": ["expert", "hostile", "nervous", "honest"], "answer": 3},
    {"word": "logomachy", "sentence": "The meeting dissolved into logomachy over whether the document was a 'plan' or a 'strategy'.", "options": ["small talk", "budget cuts", "quibbling", "fisticuffs"], "answer": 2},
    {"word": "sedent", "sentence": "The sedent figure of the old fisherman hadn't moved from the wharf in three hours.", "options": ["seated", "shouting", "standing", "sleeping"], "answer": 0},
    {"word": "strepent", "sentence": "The strepent cockatoos woke the whole campground well before dawn.", "options": ["white", "hungry", "loud", "migrating"], "answer": 2},
  ],
  // #182 · Sun 11 Apr 2027
  [
    {"word": "seed", "sentence": "She was the top seed, so the commentators expected her to cruise into the final.", "options": ["local wildcard", "qualifier", "ranked player", "ball girl"], "answer": 2},
    {"word": "innocuous", "sentence": "The question seemed innocuous, but it led to a two-hour argument about the will.", "options": ["pointed", "rude", "personal", "harmless"], "answer": 3},
    {"word": "rambunctious", "sentence": "The rambunctious twins knocked over the Christmas tree twice before lunch.", "options": ["obedient", "wild", "sickly", "sullen"], "answer": 1},
    {"word": "unavailing", "sentence": "All their efforts to save the old cinema proved unavailing, and it was demolished in May.", "options": ["futile", "illegal", "costly", "popular"], "answer": 0},
    {"word": "lollop", "sentence": "The rabbit lolloped across the lawn and disappeared under the shed.", "options": ["slithered", "crept", "waddled", "bounded"], "answer": 3},
    {"word": "thunderburst", "sentence": "A thunderburst directly overhead sent the dogs scrambling under the bed.", "options": ["thunderclap", "drought", "double rainbow", "heatwave"], "answer": 0},
    {"word": "viridity", "sentence": "The viridity of the paddocks after the drought broke brought tears to the old farmer's eyes.", "options": ["emptiness", "dryness", "flatness", "greenness"], "answer": 3},
  ],
  // #183 · Mon 12 Apr 2027
  [
    {"word": "spruce", "sentence": "We spent the weekend sprucing up the house before putting it on the market.", "options": ["valuing", "tidying", "measuring", "insuring"], "answer": 1},
    {"word": "irreverent", "sentence": "The comedian's irreverent take on the royal wedding upset half the audience.", "options": ["cheeky", "solemn", "lengthy", "factual"], "answer": 0},
    {"word": "rancour", "sentence": "There was no rancour between the two rivals after the match, just a handshake and a beer.", "options": ["laughter", "respect", "contact", "spite"], "answer": 3},
    {"word": "unmannerly", "sentence": "The unmannerly guest put his feet on the table and helped himself to the host's whisky.", "options": ["foreign", "elderly", "rude", "drunken"], "answer": 2},
    {"word": "lucubration", "sentence": "The fruit of years of lucubration, his dissertation on fungi ran to nine hundred pages.", "options": ["field trips", "daydreaming", "late-night study", "procrastination"], "answer": 2},
    {"word": "unsadden", "sentence": "A visit from the grandchildren would unsadden even the gloomiest day at the nursing home.", "options": ["darken", "cheer up", "shorten", "interrupt"], "answer": 1},
    {"word": "inopinate", "sentence": "An inopinate letter from a long-lost cousin arrived on her ninetieth birthday.", "options": ["unexpected", "threatening", "unsigned", "overdue"], "answer": 0},
  ],
  // #184 · Tue 13 Apr 2027
  [
    {"word": "steer", "sentence": "The farmer sold three steers at the Wagga saleyards on Thursday.", "options": ["kelpies", "ploughs", "tractors", "bullocks"], "answer": 3},
    {"word": "nebulous", "sentence": "The plan was still nebulous: something about a food truck, a website and 'going viral'.", "options": ["expensive", "illegal", "detailed", "vague"], "answer": 3},
    {"word": "recrimination", "sentence": "The meeting after the loss was full of recrimination, with every player blaming someone else.", "options": ["planning", "silence", "accusation", "celebration"], "answer": 2},
    {"word": "verminous", "sentence": "The verminous old hostel was closed by the health inspector after a guest found rats in the kitchen.", "options": ["haunted", "historic", "infested", "overpriced"], "answer": 2},
    {"word": "minacious", "sentence": "The minacious clouds over the bay sent the sailors scurrying back to the marina.", "options": ["golden", "menacing", "fluffy", "scattered"], "answer": 1},
    {"word": "indagate", "sentence": "The detective was sent to indagate the strange disappearance of the lighthouse keeper.", "options": ["cover up", "probe", "publicise", "ignore"], "answer": 1},
    {"word": "jumblement", "sentence": "The garage was a jumblement of bikes, paint tins, fishing rods and broken chairs.", "options": ["muddle", "showroom", "workshop", "museum"], "answer": 0},
  ],
  // #185 · Wed 14 Apr 2027
  [
    {"word": "stalk", "sentence": "The cat stalked the pigeon across the lawn, belly low to the grass.", "options": ["befriended", "hunted", "ignored", "fed"], "answer": 1},
    {"word": "nimble", "sentence": "With nimble fingers, the old woman threaded the needle on her first try.", "options": ["bony", "shaky", "agile", "painted"], "answer": 2},
    {"word": "redolent", "sentence": "On Sundays the kitchen was redolent of cinnamon and roasting lamb.", "options": ["tired", "fragrant", "devoid", "spotless"], "answer": 1},
    {"word": "tightfisted", "sentence": "The tightfisted publican charged us for tap water and a slice of lemon.", "options": ["cheerful", "elderly", "drunken", "stingy"], "answer": 3},
    {"word": "nightbird", "sentence": "A notorious nightbird, he was rarely seen before noon and never in bed before four.", "options": ["reveller", "jogger", "early riser", "farmer"], "answer": 0},
    {"word": "incalescent", "sentence": "The incalescent afternoon had the lizards out on every rock.", "options": ["windy", "drizzly", "cooling", "warming"], "answer": 3},
    {"word": "imbosk", "sentence": "The bandits would imbosk themselves in the scrub and wait for the gold coach.", "options": ["hide", "warm", "feed", "tie up"], "answer": 0},
  ],
  // #186 · Thu 15 Apr 2027
  [
    {"word": "utter", "sentence": "The meeting was an utter shambles from start to finish.", "options": ["total", "brief", "partial", "minor"], "answer": 0},
    {"word": "obtuse", "sentence": "Was he being deliberately obtuse, or did he genuinely not understand the question?", "options": ["evasive", "rude", "polite", "dense"], "answer": 3},
    {"word": "remonstrate", "sentence": "Parents went to remonstrate with the principal about the new homework policy.", "options": ["protest", "negotiate", "agree", "celebrate"], "answer": 0},
    {"word": "vivify", "sentence": "A splash of lime juice will vivify even the dullest curry.", "options": ["ruin", "enliven", "thicken", "cool"], "answer": 1},
    {"word": "milksop", "sentence": "His brothers called him a milksop because he cried at sad films and wouldn't jump off the jetty.", "options": ["tell-tale", "softie", "bookworm", "show-off"], "answer": 1},
    {"word": "hiphalt", "sentence": "The hiphalt old greyhound still insisted on chasing every ball we threw.", "options": ["greying", "half-blind", "limping", "pampered"], "answer": 2},
    {"word": "grandevity", "sentence": "The tortoise's grandevity made it the zoo's most famous resident.", "options": ["great age", "rare colour", "bad temper", "huge size"], "answer": 0},
  ],
  // #187 · Fri 16 Apr 2027
  [
    {"word": "arms", "sentence": "The arms dealer was arrested at the airport with a suitcase full of cash.", "options": ["weapons", "antiques", "limbs", "diamond"], "answer": 0},
    {"word": "paltry", "sentence": "Volunteers were paid a paltry five dollars a day for picking fruit in the heat.", "options": ["generous", "fair", "measly", "fixed"], "answer": 2},
    {"word": "supine", "sentence": "The patient lay supine on the table while the physio worked on his knee.", "options": ["face down", "sitting up", "face up", "curled up"], "answer": 2},
    {"word": "timeworn", "sentence": "The timeworn steps of the cathedral dipped in the middle from centuries of feet.", "options": ["marble", "slippery", "crowded", "ancient"], "answer": 3},
    {"word": "mossback", "sentence": "The club's mossbacks voted down every proposal, including one to replace the 1970s carpet.", "options": ["treasurers", "new members", "young turks", "old fogeys"], "answer": 3},
    {"word": "forswat", "sentence": "Forswat and filthy, the shearers came in for smoko at ten.", "options": ["shivering", "sweaty", "hungry", "singing"], "answer": 1},
    {"word": "fordone", "sentence": "Fordone after the forty-kilometre march, the soldiers collapsed beside the road.", "options": ["lost", "drenched", "victorious", "exhausted"], "answer": 3},
  ],
  // #188 · Sat 17 Apr 2027
  [
    {"word": "bail", "sentence": "We had to bail frantically as the dinghy took on water in the swell.", "options": ["shout for help", "pray", "row", "bucket out"], "answer": 3},
    {"word": "pensive", "sentence": "She grew pensive as the train pulled out of the station where she'd grown up.", "options": ["irritable", "thoughtful", "drowsy", "chatty"], "answer": 1},
    {"word": "wheedle", "sentence": "The kids tried to wheedle an extra hour of screen time out of their dad.", "options": ["coax", "demand", "steal", "bargain"], "answer": 0},
    {"word": "parboil", "sentence": "Parboil the potatoes for five minutes before tossing them in the roasting pan.", "options": ["mash", "peel", "blanch", "season"], "answer": 2},
    {"word": "pullulate", "sentence": "In the warm wet season, mosquitoes pullulate in every puddle and pot-plant saucer.", "options": ["hibernate", "dry out", "drown", "breed"], "answer": 3},
    {"word": "febricitate", "sentence": "The child continued to febricitate through the night, and by dawn they called the doctor.", "options": ["cough", "sleepwalk", "burn up", "cry"], "answer": 2},
    {"word": "eyedrop", "sentence": "A single eyedrop ran down her cheek as the coffin was lowered.", "options": ["tear", "snowflake", "raindrop", "bead of sweat"], "answer": 0},
  ],
  // #189 · Sun 18 Apr 2027
  [
    {"word": "beam", "sentence": "Grandma beamed with pride as her grandson walked across the stage to collect his degree.", "options": ["shook", "smiled", "clapped", "wept"], "answer": 1},
    {"word": "pugnacious", "sentence": "The pugnacious little terrier picked fights with dogs ten times his size.", "options": ["friendly", "timid", "scrappy", "loyal"], "answer": 2},
    {"word": "toady", "sentence": "The boss's toady laughed loudest at every joke and reported everything we said.", "options": ["crawler", "rival", "secretary", "deputy"], "answer": 0},
    {"word": "befuddle", "sentence": "The new tax forms seemed designed to befuddle even trained accountants.", "options": ["bore", "reassure", "impress", "confuse"], "answer": 3},
    {"word": "pasquinade", "sentence": "An anonymous pasquinade mocking the mayor appeared on the town hall door overnight.", "options": ["petition", "love letter", "lampoon", "eviction notice"], "answer": 2},
    {"word": "elfkin", "sentence": "The elfkin who handed out lollies at the parade was really my eight-year-old cousin in costume.", "options": ["angel", "snowman", "reindeer", "pixie"], "answer": 3},
    {"word": "dulciloquy", "sentence": "The nurse's dulciloquy calmed the frightened children in the waiting room.", "options": ["gentle voice", "stern manner", "colourful toys", "silly jokes"], "answer": 0},
  ],
  // #190 · Mon 19 Apr 2027
  [
    {"word": "boom", "sentence": "The boom swung across the deck and knocked him clean into the water.", "options": ["spar", "rudder", "anchor", "wave"], "answer": 0},
    {"word": "raucous", "sentence": "Raucous laughter from the beer garden drifted up to our hotel room until two in the morning.", "options": ["polite", "nervous", "gentle", "harsh"], "answer": 3},
    {"word": "niggle", "sentence": "The critics will niggle about the film's length, but audiences won't care.", "options": ["marvel", "yawn", "carp", "laugh"], "answer": 2},
    {"word": "hangdog", "sentence": "He wore a hangdog expression as he handed over his report card.", "options": ["bored", "defiant", "excited", "ashamed"], "answer": 3},
    {"word": "objurgate", "sentence": "The magistrate paused to objurgate the defendant's lawyer for arriving forty minutes late.", "options": ["praise", "rebuke", "defend", "pay"], "answer": 1},
    {"word": "dirempt", "sentence": "The court decided to dirempt the business partners, giving each half the company.", "options": ["audit", "unite", "split", "sue"], "answer": 2},
    {"word": "demiss", "sentence": "The demiss servant bowed low and backed out of the room without a word.", "options": ["drunken", "humble", "haughty", "furious"], "answer": 1},
  ],
  // #191 · Tue 20 Apr 2027
  [
    {"word": "bill", "sentence": "The pelican dipped its enormous bill into the water and came up with a bream.", "options": ["foot", "invoice", "beak", "wing"], "answer": 2},
    {"word": "reclusive", "sentence": "The reclusive author hadn't left her farmhouse or given an interview in thirty years.", "options": ["solitary", "wealthy", "famous", "prolific"], "answer": 0},
    {"word": "ossify", "sentence": "Without new members, the club's traditions began to ossify into pointless rituals.", "options": ["evolve", "harden", "flourish", "vanish"], "answer": 1},
    {"word": "gesticulate", "sentence": "The tourist began to gesticulate wildly at the map, trying to explain where his hotel was.", "options": ["sob", "gesture", "scribble", "shout"], "answer": 1},
    {"word": "morceau", "sentence": "The pianist ended the concert with a charming little morceau by Chopin.", "options": ["wave", "apology", "anecdote", "piece"], "answer": 3},
    {"word": "congreet", "sentence": "The two old friends would congreet each other with a bear hug and a slap on the back.", "options": ["challenge", "avoid", "welcome", "insult"], "answer": 2},
    {"word": "crebritude", "sentence": "The crebritude of his visits to the fridge suggested he was not really studying.", "options": ["noise", "length", "stealthiness", "frequency"], "answer": 3},
  ],
  // #192 · Wed 21 Apr 2027
  [
    {"word": "chip", "sentence": "Everyone chipped in twenty dollars for the boss's farewell present.", "options": ["voted", "contributed", "complained", "argued"], "answer": 1},
    {"word": "sedentary", "sentence": "His sedentary job meant he barely took two thousand steps a day.", "options": ["stressful", "desk-bound", "part-time", "well-paid"], "answer": 1},
    {"word": "abrogate", "sentence": "The new government moved to abrogate the treaty within its first week.", "options": ["sign", "publish", "revoke", "renew"], "answer": 2},
    {"word": "bewhiskered", "sentence": "A bewhiskered old prospector sat outside the pub with his dog and a tin pan.", "options": ["toothless", "bearded", "sunburnt", "barefoot"], "answer": 1},
    {"word": "omnifarious", "sentence": "The op shop stocked an omnifarious collection of goods, from fondue sets to fishing rods.", "options": ["dusty", "pricey", "tiny", "varied"], "answer": 3},
    {"word": "delassation", "sentence": "Delassation set in after the third straight night shift, and she fell asleep on the tram.", "options": ["boredom", "hunger", "panic", "fatigue"], "answer": 3},
    {"word": "despect", "sentence": "He looked on the tourists with despect, muttering about them blocking the footpath.", "options": ["contempt", "envy", "curiosity", "pity"], "answer": 0},
  ],
  // #193 · Thu 22 Apr 2027
  [
    {"word": "coach", "sentence": "We took the overnight coach from Sydney to Brisbane to save money on flights.", "options": ["bus", "sleeper train", "ferry", "trainer"], "answer": 0},
    {"word": "skittish", "sentence": "The skittish colt bolted every time a plastic bag blew across the paddock.", "options": ["lazy", "jumpy", "lame", "playful"], "answer": 1},
    {"word": "bamboozle", "sentence": "The magician managed to bamboozle even the sceptical maths teacher.", "options": ["annoy", "fool", "bore", "impress"], "answer": 1},
    {"word": "jubilate", "sentence": "The supporters would jubilate in the streets for days after the premiership.", "options": ["riot", "mourn", "march", "exult"], "answer": 3},
    {"word": "operose", "sentence": "Building the dry-stone wall was operose work that took the old farmer three summers.", "options": ["laborious", "seasonal", "pointless", "skilled"], "answer": 0},
    {"word": "detteles", "sentence": "After thirty years of mortgage payments, my parents were finally detteles.", "options": ["divorced", "retired", "debt-free", "grandparents"], "answer": 2},
    {"word": "dearworth", "sentence": "The locket was a dearworth heirloom, passed from mother to daughter for five generations.", "options": ["tarnished", "cheap", "precious", "gaudy"], "answer": 2},
  ],
  // #194 · Fri 23 Apr 2027
  [
    {"word": "cobbler", "sentence": "The cobbler resoled my boots and stitched the torn strap while I waited.", "options": ["shoemender", "saddler", "locksmith", "tailor"], "answer": 0},
    {"word": "staid", "sentence": "The staid old bank surprised everyone by sponsoring a skateboarding festival.", "options": ["shady", "daring", "stuffy", "foreign"], "answer": 2},
    {"word": "admonish", "sentence": "The judge paused to admonish the jury for reading about the case online.", "options": ["dismiss", "quiz", "thank", "warn"], "answer": 3},
    {"word": "lambaste", "sentence": "Critics were quick to lambaste the remake as a soulless cash grab.", "options": ["slam", "ignore", "review", "praise"], "answer": 0},
    {"word": "mulct", "sentence": "The landlord would mulct his tenants for every scuff mark on the walls.", "options": ["thank", "warn", "fine", "evict"], "answer": 2},
    {"word": "dubitancy", "sentence": "His dubitancy about the plan was obvious from the way he kept frowning at the map.", "options": ["enthusiasm", "doubt", "excitement", "confusion"], "answer": 1},
    {"word": "egality", "sentence": "The founders of the commune believed in perfect egality, with every member paid the same.", "options": ["equality", "silence", "hierarchy", "secrecy"], "answer": 0},
  ],
  // #195 · Sat 24 Apr 2027
  [
    {"word": "sack", "sentence": "He was sacked from the warehouse for sleeping in the forklift.", "options": ["promoted", "fired", "fined", "praised"], "answer": 1},
    {"word": "gullible", "sentence": "The gullible tourist paid fifty dollars for a 'genuine' boomerang made in a factory overseas.", "options": ["cautious", "wealthy", "naive", "jet-lagged"], "answer": 2},
    {"word": "abscond", "sentence": "The treasurer absconded with the footy club's funds and was last seen in Bali.", "options": ["fled", "returned", "invested", "gambled"], "answer": 0},
    {"word": "cockamamie", "sentence": "His cockamamie scheme to breed racing snails never got off the ground.", "options": ["daft", "brilliant", "secret", "profitable"], "answer": 0},
    {"word": "flimflam", "sentence": "The 'miracle' hair tonic turned out to be pure flimflam, and the seller vanished overnight.", "options": ["science", "humbug", "luxury", "genius"], "answer": 1},
    {"word": "nefandous", "sentence": "The nefandous crimes of the pirate captain were never written down, only whispered.", "options": ["petty", "celebrated", "forgotten", "unspeakable"], "answer": 3},
    {"word": "bibelot", "sentence": "Every shelf in Aunty Joan's lounge was crammed with bibelots: china dogs, snow globes and tiny teapots.", "options": ["photographs", "pot plants", "knick-knacks", "library books"], "answer": 2},
  ],
  // #196 · Sun 25 Apr 2027
  [
    {"word": "scrap", "sentence": "Two boys got into a scrap behind the canteen over a packet of chips.", "options": ["game of cards", "huddle", "fight", "queue"], "answer": 2},
    {"word": "genial", "sentence": "The genial host made sure every guest had a full plate and someone to talk to.", "options": ["anxious", "distracted", "gruff", "warm"], "answer": 3},
    {"word": "acquisitive", "sentence": "Our acquisitive neighbour has three boats, four cars and a shed full of things still in their boxes.", "options": ["greedy", "secretive", "generous", "tidy"], "answer": 0},
    {"word": "macerate", "sentence": "Macerate the strawberries in sugar and a splash of port for an hour before serving.", "options": ["soak", "freeze", "slice", "roast"], "answer": 0},
    {"word": "skedaddle", "sentence": "When the possum saw the dog, it skedaddled up the nearest tree.", "options": ["fainted", "hissed", "froze", "fled"], "answer": 3},
    {"word": "fanfaronade", "sentence": "The general's fanfaronade before the battle was matched only by his speed in retreat.", "options": ["silence", "strategy", "prayers", "bragging"], "answer": 3},
    {"word": "selcouth", "sentence": "A selcouth light hovered over the paddock, and the farmer swore it wasn't a drone.", "options": ["faint", "strange", "golden", "familiar"], "answer": 1},
  ],
  // #197 · Mon 26 Apr 2027
  [
    {"word": "shell", "sentence": "Dad had to shell out four hundred dollars to get the car fixed.", "options": ["pull", "pick", "fork", "hand"], "answer": 2},
    {"word": "tranquil", "sentence": "The tranquil waters of the bay were perfect for a morning paddle.", "options": ["still", "murky", "choppy", "icy"], "answer": 0},
    {"word": "askance", "sentence": "The old hands looked askance at the new jackaroo's shiny boots and pressed jeans.", "options": ["enviously", "warily", "longingly", "admiringly"], "answer": 1},
    {"word": "meliorate", "sentence": "The new bypass should meliorate traffic in the town centre.", "options": ["improve", "worsen", "measure", "divert"], "answer": 0},
    {"word": "codswallop", "sentence": "His story about being abducted by aliens on the Nullarbor was complete codswallop.", "options": ["truth", "rubbish", "genius", "mystery"], "answer": 1},
    {"word": "crapulence", "sentence": "The morning after the B&S ball, the whole camp lay groaning in crapulence.", "options": ["triumph", "mud", "sunburn pain", "hangovers"], "answer": 3},
    {"word": "oxter", "sentence": "He carried the newspaper tucked under his oxter all the way to the pub.", "options": ["chin", "hat", "jumper", "armpit"], "answer": 3},
  ],
  // #198 · Tue 27 Apr 2027
  [
    {"word": "skip", "sentence": "We hired a skip for all the rubble from the bathroom renovation.", "options": ["trailer", "labourer", "bin", "truck"], "answer": 2},
    {"word": "terse", "sentence": "Her terse reply, 'Fine', told him everything was very much not fine.", "options": ["warm", "curt", "lengthy", "tearful"], "answer": 1},
    {"word": "avaricious", "sentence": "The avaricious landlord raised the rent three times in a single year.", "options": ["absent", "grasping", "elderly", "generous"], "answer": 1},
    {"word": "commingle", "sentence": "The muddy and clear rivers commingle just below the town, making a two-toned stream.", "options": ["flood", "part", "mix", "freeze"], "answer": 2},
    {"word": "flummox", "sentence": "The cryptic crossword continued to flummox Dad all through Sunday breakfast.", "options": ["bore", "baffle", "amuse", "delight"], "answer": 1},
    {"word": "callithump", "sentence": "The village celebrated the wedding with a callithump of pots, pans and whistles down the main street.", "options": ["noisy parade", "church service", "quiet feast", "fireworks show"], "answer": 0},
    {"word": "lucifugous", "sentence": "Lucifugous cockroaches scattered the moment we flicked the kitchen switch.", "options": ["giant", "sluggish", "winged", "light-shy"], "answer": 3},
  ],
  // #199 · Wed 28 Apr 2027
  [
    {"word": "slate", "sentence": "The film was slated by every critic, though it still made a fortune.", "options": ["savaged", "reviewed", "praised", "ignored"], "answer": 0},
    {"word": "trite", "sentence": "The card's trite verse, 'Roses are red, violets are blue', didn't impress her.", "options": ["rude", "clever", "romantic", "stale"], "answer": 3},
    {"word": "bedraggled", "sentence": "The bedraggled cat came home after three days in the storm, missing half a whisker.", "options": ["dishevelled", "triumphant", "plump", "pampered"], "answer": 0},
    {"word": "effervesce", "sentence": "The tablet began to effervesce the moment it hit the water.", "options": ["fizz", "dissolve", "glow", "sink"], "answer": 0},
    {"word": "higgledy-piggledy", "sentence": "Books were stacked higgledy-piggledy on every surface of the professor's office.", "options": ["neatly", "by colour", "alphabetically", "haphazardly"], "answer": 3},
    {"word": "dizen", "sentence": "Before the ball, she would dizen herself in feathers, sequins and three strings of pearls.", "options": ["disguise", "exhaust", "bedeck", "starve"], "answer": 2},
    {"word": "fribble", "sentence": "The fribble spent his days at the races and his nights at parties, never once working.", "options": ["farmer", "idler", "miser", "scholar"], "answer": 1},
  ],
  // #200 · Thu 29 Apr 2027
  [
    {"word": "rear", "sentence": "She reared four children on a sheep station while running the shearing sheds.", "options": ["taught", "lost", "raised", "adopted"], "answer": 2},
    {"word": "vivacious", "sentence": "Their vivacious daughter chatted to every passenger on the tram.", "options": ["shy", "bubbly", "sulky", "sleepy"], "answer": 1},
    {"word": "cacophonous", "sentence": "The cacophonous orchestra of school recorders made the parents wince.", "options": ["jarring", "tiny", "distant", "tuneful"], "answer": 0},
    {"word": "condole", "sentence": "Neighbours came by to condole with the family after the funeral.", "options": ["argue loudly", "commiserate", "bargain", "celebrate"], "answer": 1},
    {"word": "yawp", "sentence": "From the top of the mountain, he let out a triumphant yawp that echoed down the valley.", "options": ["yawn", "whistle", "sob", "yell"], "answer": 3},
    {"word": "tergiversation", "sentence": "The senator's tergiversation on the dam, for it one month and against it the next, infuriated voters.", "options": ["wavering", "silence", "consistency", "corruption"], "answer": 0},
    {"word": "umbriferous", "sentence": "We spread the picnic rug beneath an umbriferous Moreton Bay fig.", "options": ["dying", "shady", "fruiting", "spiky"], "answer": 1},
  ],
  // #201 · Fri 30 Apr 2027
  [
    {"word": "rung", "sentence": "He started on the lowest rung of the company and worked his way up to CEO.", "options": ["salary", "level", "office", "branch"], "answer": 1},
    {"word": "wily", "sentence": "The wily old fox managed to steal three chooks without setting off the alarm.", "options": ["hungry", "lame", "mangy", "sly"], "answer": 3},
    {"word": "benighted", "sentence": "The film portrays the villagers as benighted peasants, which upset many locals.", "options": ["ignorant", "wealthy", "cheerful", "devout"], "answer": 0},
    {"word": "gallivant", "sentence": "Instead of studying, he would gallivant around Europe on his parents' credit card.", "options": ["toil", "gad about", "lecture", "volunteer"], "answer": 1},
    {"word": "defenestrate", "sentence": "In a fit of rage, the composer threatened to defenestrate the music critic.", "options": ["challenge to a duel", "sue for slander", "send a rude letter", "throw out a window"], "answer": 3},
    {"word": "whiffler", "sentence": "The whiffler on the committee changed his vote three times before morning tea.", "options": ["visitor", "waverer", "heckler", "chairman"], "answer": 1},
    {"word": "wegotism", "sentence": "The CEO's wegotism, 'we are thrilled', 'we have decided', grated on staff who'd just been sacked.", "options": ["name-dropping", "mumbling", "overusing 'we'", "swearing"], "answer": 2},
  ],
  // #202 · Sat 01 May 2027
  [
    {"word": "snap", "sentence": "A cold snap in late spring killed off half the tomato seedlings.", "options": ["spell", "breeze", "storm", "drought"], "answer": 0},
    {"word": "zany", "sentence": "The zany children's entertainer arrived on a unicycle wearing a fish on his head.", "options": ["boring", "wacky", "grumpy", "drunk"], "answer": 1},
    {"word": "boggle", "sentence": "The size of the national debt is enough to make the mind boggle.", "options": ["focus", "rest", "wander", "reel"], "answer": 3},
    {"word": "gangling", "sentence": "The gangling teenager had grown fifteen centimetres in a year and kept hitting his head on doorframes.", "options": ["chubby", "sulky", "lanky", "short"], "answer": 2},
    {"word": "welkin", "sentence": "The cheers of the crowd made the welkin ring as the winning horse crossed the line.", "options": ["sky", "stadium", "grandstand", "bell"], "answer": 0},
    {"word": "battologize", "sentence": "The nervous best man continued to battologize, thanking the caterers six times in one speech.", "options": ["forget his notes", "tell rude jokes", "mumble quietly", "repeat himself"], "answer": 3},
    {"word": "blatteroon", "sentence": "The blatteroon at the next table described her entire holiday to anyone within three metres.", "options": ["eavesdropper", "travel agent", "chatterbox", "pickpocket"], "answer": 2},
  ],
  // #203 · Sun 02 May 2027
  [
    {"word": "spot", "sentence": "Would you like to join us for a spot of lunch at the pub?", "options": ["booking", "plate", "bit", "table"], "answer": 2},
    {"word": "droll", "sentence": "Her droll commentary on the dog show had the whole family in stitches.", "options": ["wry", "furious", "boring", "tearful"], "answer": 0},
    {"word": "browbeat", "sentence": "The detective tried to browbeat the witness into changing her story.", "options": ["trick", "bully", "bribe", "coach"], "answer": 1},
    {"word": "doddery", "sentence": "The doddery old gent took twenty minutes to cross the bowling green.", "options": ["shaky", "smartly dressed", "grumpy", "sprightly"], "answer": 0},
    {"word": "scaramouch", "sentence": "The scaramouch boasted of his duels, but fled the moment a real sword appeared.", "options": ["nobleman", "swordsman", "braggart", "jester"], "answer": 2},
    {"word": "cantillate", "sentence": "The cantor began to cantillate the ancient text in a low, rising voice.", "options": ["whisper", "translate", "chant", "burn"], "answer": 2},
    {"word": "paralogize", "sentence": "Try as he might to paralogize his way out of it, the facts were against him.", "options": ["buy time", "plead guilty", "hide evidence", "twist logic"], "answer": 3},
  ],
  // #204 · Mon 03 May 2027
  [
    {"word": "square", "sentence": "Before leaving the hotel, Dad squared the bill with the receptionist.", "options": ["disputed", "settled", "split", "lost"], "answer": 1},
    {"word": "vapid", "sentence": "The vapid chat show filled an hour without a single interesting sentence.", "options": ["rude", "witty", "dull", "live"], "answer": 2},
    {"word": "chide", "sentence": "Mum would chide us gently for tracking sand through the house after the beach.", "options": ["scold", "excuse", "thank", "bathe"], "answer": 0},
    {"word": "flabbergast", "sentence": "The news that she'd won the lottery would flabbergast her entire family.", "options": ["bore", "disappoint", "anger", "astound"], "answer": 3},
    {"word": "aglet", "sentence": "The aglet on his shoelace had come off, and the end was fraying badly.", "options": ["metal eyelet", "leather tongue", "rubber sole", "plastic tip"], "answer": 3},
    {"word": "impignorate", "sentence": "Down on his luck, he had to impignorate his grandfather's watch to pay the rent.", "options": ["pawn", "polish", "sell", "smash"], "answer": 0},
    {"word": "noctambulist", "sentence": "Our noctambulist son was once found at 3 a.m. making toast in the kitchen, eyes wide open.", "options": ["glutton", "night owl", "sleepwalker", "chronic insomniac"], "answer": 2},
  ],
  // #205 · Tue 04 May 2027
  [
    {"word": "stake", "sentence": "She has a fifty per cent stake in her brother's surf shop.", "options": ["debt", "job", "share", "lease"], "answer": 2},
    {"word": "succinct", "sentence": "The judge's succinct summary took two minutes; the lawyers had taken two weeks.", "options": ["brief", "biased", "angry", "rambling"], "answer": 0},
    {"word": "bounteous", "sentence": "The bounteous spread at the CWA fete included forty kinds of scone.", "options": ["lavish", "stale", "sticky", "meagre"], "answer": 0},
    {"word": "frolicsome", "sentence": "The frolicsome lambs leapt and twisted in the spring paddock.", "options": ["nervous", "woolly", "playful", "sickly"], "answer": 2},
    {"word": "gormandize", "sentence": "At Christmas lunch, my uncles gormandize for three hours and then sleep for four.", "options": ["play cricket", "pig out", "argue", "sing carols"], "answer": 1},
    {"word": "furfuraceous", "sentence": "The furfuraceous bark of the paperbark peeled away in thin layers at the slightest touch.", "options": ["smooth", "sticky", "thorny", "flaky"], "answer": 3},
    {"word": "cecutiency", "sentence": "His cecutiency meant he had to give up driving at night.", "options": ["poor sight", "hearing loss", "insomnia", "bad back"], "answer": 0},
  ],
  // #206 · Wed 05 May 2027
  [
    {"word": "stem", "sentence": "Nurses worked to stem the bleeding until the ambulance arrived.", "options": ["stop", "clean", "photograph", "measure"], "answer": 0},
    {"word": "tactful", "sentence": "It wasn't very tactful of him to mention her ex-husband during the wedding speech.", "options": ["accurate", "sober", "funny", "discreet"], "answer": 3},
    {"word": "censorious", "sentence": "The censorious headmistress banned nail polish, hair gel and laughing in corridors.", "options": ["disapproving", "easygoing", "fashionable", "forgetful"], "answer": 0},
    {"word": "tousle", "sentence": "The breeze would tousle her hair every time she stepped onto the ferry deck.", "options": ["muss up", "chill", "dry", "smooth"], "answer": 0},
    {"word": "bumfuzzle", "sentence": "The new self-checkout machines continue to bumfuzzle Grandad every single week.", "options": ["impress", "fluster", "delight", "short-change"], "answer": 1},
    {"word": "gallimaufry", "sentence": "The op shop window was a gallimaufry of lamps, hats, records and one stuffed fox.", "options": ["disaster", "museum", "jumble", "display"], "answer": 2},
    {"word": "gruntling", "sentence": "The sow lay in the mud while a dozen gruntlings squealed and jostled around her.", "options": ["piglets", "calves", "puppies", "ducklings"], "answer": 0},
  ],
  // #207 · Thu 06 May 2027
  [
    {"word": "still", "sentence": "Grandpa kept an illegal still in the shed, and the whole farm reeked of home-made grappa.", "options": ["carpenter's workbench", "rifle", "brewing rig", "beehive"], "answer": 2},
    {"word": "tenuous", "sentence": "The link between the two crimes was tenuous at best.", "options": ["proven", "obvious", "secret", "weak"], "answer": 3},
    {"word": "capacious", "sentence": "Her capacious handbag held a thermos, three novels and a spare pair of shoes.", "options": ["leather", "roomy", "designer", "tattered"], "answer": 1},
    {"word": "plethoric", "sentence": "The plethoric report, all three hundred pages of it, could have been a single page.", "options": ["concise", "bloated", "accurate", "secret"], "answer": 1},
    {"word": "macaronic", "sentence": "The student band's macaronic lyrics mixed Latin, French and Aussie slang in every line.", "options": ["rhyming", "plagiarised", "political", "multilingual"], "answer": 3},
    {"word": "habnab", "sentence": "The stallholder priced his junk habnab, a dollar here and fifty there.", "options": ["at random", "carefully", "in bulk", "fairly"], "answer": 0},
    {"word": "hircine", "sentence": "The hircine smell of the petting zoo clung to our clothes for days.", "options": ["fishy", "flowery", "goaty", "smoky"], "answer": 2},
  ],
  // #208 · Fri 07 May 2027
  [
    {"word": "swell", "sentence": "The fishermen stayed in port because of the heavy swell.", "options": ["rain", "waves", "traffic", "fog"], "answer": 1},
    {"word": "vehement", "sentence": "He was vehement in his denial, thumping the table with his fist.", "options": ["calm", "fierce", "quiet", "vague"], "answer": 1},
    {"word": "chagrined", "sentence": "The chagrined chef apologised when the soufflé collapsed in front of the judges.", "options": ["delighted", "smug", "mortified", "indifferent"], "answer": 2},
    {"word": "footsore", "sentence": "Footsore after a day at the Royal Easter Show, the kids fell asleep in the car.", "options": ["excited", "sunburnt", "sticky", "weary"], "answer": 3},
    {"word": "phosphene", "sentence": "Rubbing his eyes produced a swirl of phosphenes, purple and green, against the darkness.", "options": ["sparkles", "eyelashes", "headaches", "tears"], "answer": 0},
    {"word": "helpmeet", "sentence": "After fifty years, Grandpa still called Nan his helpmeet and best mate.", "options": ["landlady", "partner", "rival", "neighbour"], "answer": 1},
    {"word": "hamadryad", "sentence": "Legend said a hamadryad lived inside the ancient fig, and would die if it were ever cut down.", "options": ["giant owl", "possum", "water spirit", "tree nymph"], "answer": 3},
  ],
  // #209 · Sat 08 May 2027
  [
    {"word": "tap", "sentence": "Police had been tapping his phone for six months before the arrest.", "options": ["charging", "bugging", "repairing", "smashing"], "answer": 1},
    {"word": "abject", "sentence": "They lived in abject poverty, sharing one room between nine people.", "options": ["wretched", "genteel", "rural", "temporary"], "answer": 0},
    {"word": "dishevelled", "sentence": "He arrived at the interview dishevelled, his tie askew and his shirt untucked.", "options": ["confident", "overdressed", "punctual", "unkempt"], "answer": 3},
    {"word": "indubitable", "sentence": "Her indubitable talent was obvious from the first bar she sang.", "options": ["untrained", "undeniable", "hidden", "modest"], "answer": 1},
    {"word": "trumpery", "sentence": "The market stall sold nothing but trumpery: plastic jewellery, fake perfume and tin rings.", "options": ["junk", "antiques", "flowers", "groceries"], "answer": 0},
    {"word": "hiemal", "sentence": "The hiemal winds off Mount Wellington sent us scurrying back to the hotel.", "options": ["wintry", "balmy", "salty", "dusty"], "answer": 0},
    {"word": "hyemate", "sentence": "The swallows hyemate in the north, returning south each spring.", "options": ["lose feathers", "build nests", "overwinter", "hatch eggs"], "answer": 2},
  ],
  // #210 · Sun 09 May 2027
  [
    {"word": "tick", "sentence": "He bought groceries on tick at the corner shop until payday.", "options": ["impulse", "credit", "sale", "Sundays"], "answer": 1},
    {"word": "adroit", "sentence": "The adroit negotiator got both sides to agree before lunch.", "options": ["deft", "tired", "bullying", "clumsy"], "answer": 0},
    {"word": "cherubic", "sentence": "The cherubic toddler looked innocent, but he'd just drawn on the walls with lipstick.", "options": ["angelic", "grubby", "sulky", "sleepy"], "answer": 0},
    {"word": "rheumy", "sentence": "The old dog's rheumy eyes followed us as we walked up the path.", "options": ["bright", "golden", "suspicious", "watery"], "answer": 3},
    {"word": "knurl", "sentence": "The carpenter avoided the knurl in the timber, which would have split under the chisel.", "options": ["crack", "stain", "nail", "knot"], "answer": 3},
    {"word": "hydromel", "sentence": "The monks fermented their own hydromel from the honey of the abbey's hives.", "options": ["vinegar", "candles", "mead", "cider"], "answer": 2},
    {"word": "illacrymable", "sentence": "Through the whole funeral he stood illacrymable, staring straight ahead.", "options": ["sobbing", "dry-eyed", "smiling", "drunk"], "answer": 1},
  ],
  // #211 · Mon 10 May 2027
  [
    {"word": "till", "sentence": "For a century, farmers tilled these fields with horse-drawn ploughs and wooden harrows.", "options": ["fenced", "sold", "flooded", "worked"], "answer": 3},
    {"word": "amicable", "sentence": "The divorce was surprisingly amicable, and they still go to the footy together.", "options": ["lengthy", "bitter", "civil", "costly"], "answer": 2},
    {"word": "commodious", "sentence": "The new caravan was commodious enough for the whole family and the dog.", "options": ["cramped", "spacious", "stylish", "affordable"], "answer": 1},
    {"word": "sinistral", "sentence": "A sinistral bowler, he gave most batsmen nightmares with his late swing.", "options": ["left-arm", "fast", "veteran", "spin"], "answer": 0},
    {"word": "tarantism", "sentence": "A sort of tarantism seized the wedding guests once the band struck up 'Nutbush'.", "options": ["homesickness", "stage fright", "food poisoning", "dancing mania"], "answer": 3},
    {"word": "ignivomous", "sentence": "The ignivomous dragon on the festival float thrilled the children and singed a palm tree.", "options": ["smoke-coloured", "papier-mâché", "fire-breathing", "three-headed"], "answer": 2},
    {"word": "impuissance", "sentence": "The committee's impuissance became clear when it couldn't even agree on the minutes.", "options": ["efficiency", "weakness", "popularity", "corruption"], "answer": 1},
  ],
  // #212 · Tue 11 May 2027
  [
    {"word": "train", "sentence": "The bride's train was six metres long and needed three flower girls to carry it.", "options": ["bridal party", "lace veil", "trailing gown", "flower garland"], "answer": 2},
    {"word": "irate", "sentence": "An irate customer threw his pie back across the counter.", "options": ["elderly", "hungry", "regular", "furious"], "answer": 3},
    {"word": "congeal", "sentence": "The gravy began to congeal on the plates while the speeches dragged on.", "options": ["set", "steam", "sparkle", "spill"], "answer": 0},
    {"word": "masticate", "sentence": "The cow continued to masticate slowly, staring at us over the fence.", "options": ["chew", "sway", "doze", "blink"], "answer": 0},
    {"word": "gazump", "sentence": "We'd agreed on a price, but another buyer gazumped us at the last minute.", "options": ["congratulated", "copied", "ignored", "outbid"], "answer": 3},
    {"word": "idoneous", "sentence": "After months of searching, they finally found an idoneous site for the new school.", "options": ["suitable", "cheap", "remote", "haunted"], "answer": 0},
    {"word": "infumate", "sentence": "The fishermen would infumate their catch over smouldering ironbark for a week.", "options": ["freeze", "smoke", "salt", "pickle"], "answer": 1},
  ],
  // #213 · Wed 12 May 2027
  [
    {"word": "trip", "sentence": "A possum tripped the motion sensor and set off the alarm at 3 a.m.", "options": ["disabled", "triggered", "fixed", "bit"], "answer": 1},
    {"word": "lithe", "sentence": "The lithe gymnast folded herself into a box no bigger than a microwave.", "options": ["supple", "veteran", "tiny", "nervous"], "answer": 0},
    {"word": "exhume", "sentence": "Police obtained permission to exhume the body for a second autopsy.", "options": ["bury", "identify", "cremate", "dig up"], "answer": 3},
    {"word": "unwearied", "sentence": "The unwearied volunteers kept filling sandbags through the night as the river rose.", "options": ["tireless", "unpaid", "soaked", "frightened"], "answer": 0},
    {"word": "lunule", "sentence": "She painted each lunule silver, leaving the rest of the nail bright red.", "options": ["knuckle", "cuticle", "fingertip", "half-moon"], "answer": 3},
    {"word": "jactancy", "sentence": "His jactancy about his fishing skills ended when he came home with one tiny bream.", "options": ["patience", "boasting", "secrecy", "modesty"], "answer": 1},
    {"word": "lackaday", "sentence": "'Lackaday!' cried the old woman as the eggs slid off the bench and onto the floor.", "options": ["bravo", "hooray", "alas", "giddy-up"], "answer": 2},
  ],
  // #214 · Thu 13 May 2027
  [
    {"word": "tuck", "sentence": "The kids lined up at the tuck shop for meat pies and sausage rolls.", "options": ["book", "uniform", "sports", "snack"], "answer": 3},
    {"word": "glum", "sentence": "He was glum all week after his team missed the finals.", "options": ["smug", "down", "busy", "furious"], "answer": 1},
    {"word": "ruminate", "sentence": "She would ruminate for days before making any decision about money.", "options": ["spend", "gossip", "panic", "ponder"], "answer": 3},
    {"word": "untrammelled", "sentence": "After the divorce, she enjoyed an untrammelled life of travel and painting.", "options": ["unfettered", "tragic", "lonely", "expensive"], "answer": 0},
    {"word": "lollygag", "sentence": "Stop lollygagging and help us carry the esky down to the beach.", "options": ["sunbaking", "complaining", "eating", "dawdling"], "answer": 3},
    {"word": "longanimity", "sentence": "The longanimity of the kindergarten teacher seemed to have no limit.", "options": ["volume", "energy", "patience", "creativity"], "answer": 2},
    {"word": "luctual", "sentence": "A luctual silence fell over the town after the mine disaster.", "options": ["mournful", "welcome", "eerie", "brief"], "answer": 0},
  ],
  // #215 · Fri 14 May 2027
  [
    {"word": "watch", "sentence": "The sailors on the night watch spotted the iceberg just after two.", "options": ["deck", "shift", "party", "telescope"], "answer": 1},
    {"word": "brash", "sentence": "The brash young salesman called the CEO 'mate' and put his feet on her desk.", "options": ["nervous", "timid", "polite", "cocky"], "answer": 3},
    {"word": "hoodwink", "sentence": "The scammers managed to hoodwink hundreds of retirees with fake investment schemes.", "options": ["dupe", "warn", "insure", "help"], "answer": 0},
    {"word": "fuddled", "sentence": "Still fuddled from the night before, he put the milk in the pantry and the cereal in the fridge.", "options": ["efficient", "hungry", "cheerful", "drunk"], "answer": 3},
    {"word": "peculator", "sentence": "The council's peculator had siphoned off funds for a decade before the auditors caught on.", "options": ["embezzler", "mayor", "accountant", "whistleblower"], "answer": 0},
    {"word": "batrachophagous", "sentence": "The batrachophagous heron stalked the edge of the dam each evening, listening for croaks.", "options": ["night-flying", "fish-eating", "frog-eating", "long-legged"], "answer": 2},
    {"word": "escargatoire", "sentence": "The French chef kept an escargatoire behind the restaurant, and its occupants were forever escaping across the car park.", "options": ["herb garden", "snail farm", "wine cellar", "pigeon loft"], "answer": 1},
  ],
  // #216 · Sat 15 May 2027
  [
    {"word": "whip", "sentence": "The party whip made sure every member turned up for the vote.", "options": ["speechwriter", "treasurer", "caterer", "enforcer"], "answer": 3},
    {"word": "conceited", "sentence": "The conceited new captain insisted the team photo be taken from his 'good side'.", "options": ["injured", "shy", "vain", "nervous"], "answer": 2},
    {"word": "hirsute", "sentence": "The hirsute biker turned out to be a children's librarian with a fondness for cross-stitch.", "options": ["grumpy", "hairy", "burly", "tattooed"], "answer": 1},
    {"word": "bushwhack", "sentence": "Bushrangers would bushwhack the gold escort as it passed through the gully.", "options": ["ambush", "guard", "salute", "follow"], "answer": 0},
    {"word": "amaritude", "sentence": "The amaritude of the divorce lingered for years, souring every family Christmas.", "options": ["rancour", "relief", "expense", "secrecy"], "answer": 0},
    {"word": "arietate", "sentence": "The billy goat would arietate the gate every morning until someone let him out.", "options": ["lick", "butt", "chew", "climb"], "answer": 1},
    {"word": "turatt", "sentence": "A turatt bounded across the spinifex, no bigger than a rabbit.", "options": ["dingo pup", "emu chick", "wallaby", "bilby"], "answer": 2},
  ],
  // #217 · Sun 16 May 2027
  [
    {"word": "yarn", "sentence": "Grandpa spun a yarn about wrestling a crocodile in the Daintree.", "options": ["song", "joke", "rope", "tale"], "answer": 3},
    {"word": "cagey", "sentence": "The minister was cagey about when the new hospital would actually open.", "options": ["frank", "evasive", "excited", "certain"], "answer": 1},
    {"word": "impugn", "sentence": "Nobody dared impugn the integrity of the long-serving judge in public.", "options": ["query", "share", "test", "praise"], "answer": 0},
    {"word": "inspiriting", "sentence": "The coach's inspiriting speech at half-time turned the match around.", "options": ["rousing", "bitter", "whispered", "rambling"], "answer": 0},
    {"word": "stertorous", "sentence": "The stertorous breathing from the next tent kept us awake until dawn.", "options": ["whispering", "giggling", "snoring", "coughing"], "answer": 2},
    {"word": "alliciency", "sentence": "The alliciency of free pizza drew every student in the building to the meeting.", "options": ["novelty", "expense", "smell", "lure"], "answer": 3},
    {"word": "tummals", "sentence": "The council left tummals of mulch at the end of every driveway.", "options": ["small bags", "neat rows", "thin trails", "huge heaps"], "answer": 3},
  ],
  // #218 · Mon 17 May 2027
  [
    {"word": "sash", "sentence": "The mayor wore a red sash across her chest for the ribbon-cutting.", "options": ["medal", "band", "brooch", "badge"], "answer": 1},
    {"word": "surly", "sentence": "The surly waiter slammed down our plates without a word.", "options": ["young", "gruff", "cheerful", "chatty"], "answer": 1},
    {"word": "traipse", "sentence": "We had to traipse across the whole city looking for a chemist that was open.", "options": ["drive", "race", "trudge", "cycle"], "answer": 2},
    {"word": "jowly", "sentence": "The jowly bulldog dribbled happily on the judge's shoes at the show.", "options": ["short-tailed", "flat-nosed", "bow-legged", "saggy-cheeked"], "answer": 3},
    {"word": "nepenthe", "sentence": "For the grieving widow, music was the only nepenthe that worked.", "options": ["balm", "burden", "torment", "reminder"], "answer": 0},
    {"word": "hamfatter", "sentence": "The theatre company was full of hamfatters who mugged and shouted their way through Shakespeare.", "options": ["critics", "stagehands", "ushers", "bad actors"], "answer": 3},
    {"word": "vindemiate", "sentence": "Backpackers come to the Barossa each autumn to vindemiate for minimum wage.", "options": ["pick grapes", "shear sheep", "fight fires", "pour beers"], "answer": 0},
  ],
  // #219 · Tue 18 May 2027
  [
    {"word": "seal", "sentence": "The deal was sealed with a handshake over a cold beer at the pub.", "options": ["discussed", "delayed", "clinched", "broken"], "answer": 2},
    {"word": "forlorn", "sentence": "A forlorn teddy bear sat in the window of the abandoned house.", "options": ["cheerful", "dusty", "giant", "lonely"], "answer": 3},
    {"word": "skulk", "sentence": "Foxes skulk around the chook pen at night, waiting for a gap in the wire.", "options": ["howl", "lurk", "sleep", "dig"], "answer": 1},
    {"word": "lissom", "sentence": "The lissom dancer slipped between the tables without spilling a single glass.", "options": ["nimble", "nervous", "clumsy", "tipsy"], "answer": 0},
    {"word": "popinjay", "sentence": "The popinjay strutted into the ball in a gold waistcoat, admiring himself in every mirror.", "options": ["fop", "butler", "bouncer", "magician"], "answer": 0},
    {"word": "parbreak", "sentence": "After the third loop of the rollercoaster, my nephew began to parbreak over the railing.", "options": ["laugh", "scream", "vomit", "wave"], "answer": 2},
    {"word": "throatboll", "sentence": "His throatboll bobbed nervously as the judge read out the verdict.", "options": ["Adam's apple", "pocket watch", "bow tie knot", "left eyebrow"], "answer": 0},
  ],
  // #220 · Wed 19 May 2027
  [
    {"word": "bow", "sentence": "The waves broke over the bow as the ferry ploughed across Bass Strait.", "options": ["front", "mast", "stern", "funnel"], "answer": 0},
    {"word": "disenchanted", "sentence": "After twenty years in advertising, she was disenchanted and longed to grow tomatoes.", "options": ["famous", "eager", "wealthy", "fed up"], "answer": 3},
    {"word": "mesmeric", "sentence": "The mesmeric rhythm of the waves sent him to sleep on the beach.", "options": ["violent", "irregular", "hypnotic", "deafening"], "answer": 2},
    {"word": "plainspoken", "sentence": "The plainspoken farmer told the minister exactly what he thought of the new water rules.", "options": ["blunt", "tongue-tied", "polite", "drunken"], "answer": 0},
    {"word": "pleonasm", "sentence": "'Burning fire' and 'past history' are both examples of pleonasm.", "options": ["metaphor", "padding", "irony", "slang"], "answer": 1},
    {"word": "pinacotheca", "sentence": "The duke's pinacotheca held forty Rembrandts and a single, rather bad watercolour by his mother.", "options": ["armoury", "wine cellar", "art gallery", "library"], "answer": 2},
    {"word": "sunsquall", "sentence": "A sunsquall drifted past the jetty, trailing tentacles a metre long.", "options": ["octopus", "stingray", "seaweed", "jellyfish"], "answer": 3},
  ],
  // #221 · Thu 20 May 2027
  [
    {"word": "jar", "sentence": "The squeal of the chalk on the blackboard jarred on everyone's nerves.", "options": ["grated", "calmed", "settled", "played"], "answer": 0},
    {"word": "lackadaisical", "sentence": "His lackadaisical approach to homework meant he finished most assignments on the bus.", "options": ["careful", "lazy", "methodical", "eager"], "answer": 1},
    {"word": "ingratiating", "sentence": "His ingratiating smile didn't fool the old receptionist for a second.", "options": ["fawning", "toothless", "lopsided", "sincere"], "answer": 0},
    {"word": "tootle", "sentence": "We would tootle along the coast road in Grandad's old Morris Minor on Sundays.", "options": ["argue", "race", "crash", "potter"], "answer": 3},
    {"word": "rapscallion", "sentence": "The young rapscallion had swapped all the salt and sugar in the school canteen.", "options": ["genius", "cook", "prefect", "scamp"], "answer": 3},
    {"word": "paramiographer", "sentence": "A keen paramiographer, she had filled six notebooks with sayings like 'Too many cooks spoil the broth'.", "options": ["kitchen hand", "cookbook editor", "proverb-hunter", "recipe writer"], "answer": 2},
    {"word": "octogamy", "sentence": "The film star's octogamy was legendary; her last wedding had a cake shaped like a revolving door.", "options": ["eight Oscars", "eight weddings", "tiny dog", "huge fortune"], "answer": 1},
  ],
  // #222 · Fri 21 May 2027
  [
    {"word": "brace", "sentence": "On the first morning of the season, he bagged a brace of ducks before breakfast.", "options": ["flock", "trio", "pair", "dozen"], "answer": 2},
    {"word": "cocksure", "sentence": "He wore a cocksure grin after correctly predicting every result in the tipping comp.", "options": ["cocky", "sheepish", "baffled", "nervous"], "answer": 0},
    {"word": "hoary", "sentence": "The comedian dusted off a hoary old joke about mothers-in-law.", "options": ["ancient", "new", "clever", "filthy"], "answer": 0},
    {"word": "piffle", "sentence": "Don't believe that piffle about eating carrots giving you night vision.", "options": ["warning", "twaddle", "science", "advice"], "answer": 1},
    {"word": "scarper", "sentence": "The kids scarpered the moment they heard the neighbour's dog.", "options": ["waved", "froze", "laughed", "bolted"], "answer": 3},
    {"word": "ornithoscopy", "sentence": "Ornithoscopy was Gran's passion, and she kept binoculars on every windowsill.", "options": ["stargazing", "eavesdropping", "gardening", "birdwatching"], "answer": 3},
    {"word": "ostreaculture", "sentence": "Ostreaculture has been the main industry in Coffin Bay for a century.", "options": ["tuna fishing", "oyster farming", "whale watching", "salt mining"], "answer": 1},
  ],
  // #223 · Sat 22 May 2027
  [
    {"word": "combine", "sentence": "The combine roared across the wheat paddock until well after dark.", "options": ["harvester", "road train", "bulldozer", "cartel"], "answer": 0},
    {"word": "garish", "sentence": "The new casino's garish lights could be seen from fifty kilometres away.", "options": ["elegant", "dim", "gaudy", "flickering"], "answer": 2},
    {"word": "funereal", "sentence": "The funereal music in the dentist's waiting room did nothing for my nerves.", "options": ["foreign", "jaunty", "loud", "gloomy"], "answer": 3},
    {"word": "unedifying", "sentence": "The two candidates' shouting match on live TV was an unedifying spectacle.", "options": ["brief", "uplifting", "scripted", "degrading"], "answer": 3},
    {"word": "vellicate", "sentence": "His left eyelid would vellicate whenever the boss walked past.", "options": ["twitch", "close", "water", "droop"], "answer": 0},
    {"word": "megalopsychy", "sentence": "The old captain's megalopsychy showed when he gave his lifeboat seat to a stranger.", "options": ["cowardice", "nobility", "cunning", "seasickness"], "answer": 1},
    {"word": "vulnerose", "sentence": "The vulnerose old tomcat had lost half an ear and most of his dignity.", "options": ["overweight", "scarred", "well-groomed", "toothless"], "answer": 1},
  ],
  // #224 · Sun 23 May 2027
  [
    {"word": "crow", "sentence": "The winning coach couldn't resist crowing about the result on talkback radio.", "options": ["gloating", "apologising", "complaining", "joking"], "answer": 0},
    {"word": "boorish", "sentence": "His boorish behaviour at the wedding included heckling the vicar.", "options": ["tearful", "sober", "charming", "uncouth"], "answer": 3},
    {"word": "dulcet", "sentence": "The dulcet tones of the cellist drifted out of the open window.", "options": ["faint", "mournful", "sweet", "shrill"], "answer": 2},
    {"word": "sang-froid", "sentence": "The pilot's sang-froid as the engine failed kept all the passengers calm.", "options": ["humour", "cool", "panic", "accent"], "answer": 1},
    {"word": "primp", "sentence": "She would primp in the hallway mirror for twenty minutes before every school pick-up.", "options": ["preen", "pace", "stretch", "sulk"], "answer": 0},
    {"word": "navarch", "sentence": "The navarch stood on the flagship's deck, directing forty ships into battle.", "options": ["deckhand", "cook", "admiral", "chaplain"], "answer": 2},
    {"word": "tubicinate", "sentence": "At dawn the bugler would tubicinate reveille, and the whole camp would groan.", "options": ["blow a horn", "ring a bell", "beat a drum", "light a fire"], "answer": 0},
  ],
  // #225 · Mon 24 May 2027
  [
    {"word": "dart", "sentence": "A blue-tongue darted under the woodpile when we lifted the tarp.", "options": ["waddled", "hissed", "dozed", "shot"], "answer": 3},
    {"word": "offhand", "sentence": "The doctor's offhand manner put many patients off, though she was brilliant.", "options": ["gentle", "jolly", "abrupt", "nervous"], "answer": 2},
    {"word": "sinewy", "sentence": "The old drover's sinewy arms could still wrestle a calf to the ground.", "options": ["wiry", "flabby", "sunburnt", "tattooed"], "answer": 0},
    {"word": "chirrup", "sentence": "Crickets began to chirrup in the long grass as the sun went down.", "options": ["hide", "hop", "feed", "chirp"], "answer": 3},
    {"word": "mondegreen", "sentence": "For years I thought the hymn said 'Gladly the cross-eyed bear', a classic mondegreen.", "options": ["cheesy rhyme", "hymn tune", "misheard lyric", "tongue twister"], "answer": 2},
    {"word": "opsonation", "sentence": "Every Saturday morning was given over to opsonation at the Queen Victoria Market.", "options": ["people-watching", "food shopping", "haggling", "busking"], "answer": 1},
    {"word": "pajock", "sentence": "A pajock fanned its tail on the castle lawn, screeching at the tourists.", "options": ["peacock", "pheasant", "parrot", "pelican"], "answer": 0},
  ],
  // #226 · Tue 25 May 2027
  [
    {"word": "cuff", "sentence": "The bouncer cuffed him round the ear and sent him home to his mum.", "options": ["slapped", "shoved", "warned", "pinched"], "answer": 0},
    {"word": "congenial", "sentence": "The congenial atmosphere at the bowls club made newcomers feel instantly at home.", "options": ["pleasant", "formal", "chaotic", "tense"], "answer": 0},
    {"word": "swarthy", "sentence": "The swarthy sailor had a gold earring and a parrot tattooed on his forearm.", "options": ["bald-headed", "one-eyed", "bow-legged", "dark-skinned"], "answer": 3},
    {"word": "rubbishy", "sentence": "The airport bookshop was full of rubbishy celebrity memoirs and diet books.", "options": ["expensive", "trashy", "signed", "banned"], "answer": 1},
    {"word": "recrudescence", "sentence": "Doctors warned of a recrudescence of measles if vaccination rates kept falling.", "options": ["shortage", "disappearance", "resurgence", "cure"], "answer": 2},
    {"word": "diurnalist", "sentence": "The old diurnalist had covered every federal election since Menzies.", "options": ["pollster", "bookmaker", "politician", "journalist"], "answer": 3},
    {"word": "hirundine", "sentence": "The hirundine flight of the bats, swooping and twisting over the river, fascinated the children.", "options": ["silent", "darting", "clumsy", "sluggish"], "answer": 1},
  ],
  // #227 · Wed 26 May 2027
  [
    {"word": "down", "sentence": "The ducklings were covered in soft yellow down when they first left the nest.", "options": ["spots", "scales", "fluff", "mud"], "answer": 2},
    {"word": "genteel", "sentence": "The genteel ladies of the garden club were shocked when the mayor arrived in thongs.", "options": ["rowdy", "foreign", "refined", "elderly"], "answer": 2},
    {"word": "hidebound", "sentence": "The hidebound committee rejected every idea that hadn't been tried before 1970.", "options": ["youthful", "rigid", "bankrupt", "generous"], "answer": 1},
    {"word": "bodge", "sentence": "Dad tried to bodge the leaking tap with chewing gum and gaffer tape.", "options": ["polish", "measure", "replace", "botch"], "answer": 3},
    {"word": "roborant", "sentence": "Grandma swore by a daily roborant of cod-liver oil and stout.", "options": ["tonic", "laxative", "poison", "sedative"], "answer": 0},
    {"word": "excubation", "sentence": "The soldiers took turns at excubation through the long, cold night.", "options": ["playing cards", "writing letters", "keeping watch", "peeling potatoes"], "answer": 2},
    {"word": "refective", "sentence": "After the long drive, a refective swim in the river was exactly what we needed.", "options": ["freezing", "dangerous", "refreshing", "crowded"], "answer": 2},
  ],
  // #228 · Thu 27 May 2027
  [
    {"word": "fleece", "sentence": "Dodgy taxi drivers at the airport would fleece unsuspecting tourists.", "options": ["ignore", "welcome", "rip off", "shear"], "answer": 2},
    {"word": "doughty", "sentence": "The doughty old campaigner had been fighting for the bike path for thirty years.", "options": ["sneaky", "bitter", "plucky", "weary"], "answer": 2},
    {"word": "slapdash", "sentence": "Their slapdash packing meant the hikers had rice and beans but no saucepan.", "options": ["careless", "methodical", "expensive", "early"], "answer": 0},
    {"word": "hearten", "sentence": "The good news from the doctor did a lot to hearten the family.", "options": ["confuse", "cheer", "worry", "divide"], "answer": 1},
    {"word": "pismire", "sentence": "A trail of pismires marched across the bench towards the honey jar.", "options": ["ants", "drips", "crumbs", "flies"], "answer": 0},
    {"word": "strond", "sentence": "We walked the length of the strond at dawn, collecting shells and sea glass.", "options": ["harbour", "beach", "creek", "garden"], "answer": 1},
    {"word": "cizars", "sentence": "Nan kept her good cizars hidden, so nobody could use them on paper.", "options": ["glasses", "teaspoons", "needles", "scissors"], "answer": 3},
  ],
  // #229 · Fri 28 May 2027
  [
    {"word": "fry", "sentence": "The river was full of trout fry released by the fisheries department.", "options": ["baby fish", "weekend anglers", "weeds", "nets"], "answer": 0},
    {"word": "doleful", "sentence": "The doleful old dog lay by the door all day waiting for his owner to return.", "options": ["mopey", "dozy", "playful", "hungry"], "answer": 0},
    {"word": "sallow", "sentence": "After months working night shifts, his skin had turned sallow.", "options": ["tanned", "pasty", "freckled", "rosy"], "answer": 1},
    {"word": "mirthless", "sentence": "He gave a short, mirthless laugh when told the cheque was in the mail.", "options": ["relieved", "hearty", "bitter", "nervous"], "answer": 2},
    {"word": "quiddity", "sentence": "The quiddity of a good pavlova, my aunt insists, lies in the crunch of its shell.", "options": ["essence", "recipe", "cost", "history"], "answer": 0},
    {"word": "libbard", "sentence": "The circus advertised a libbard that could jump through a hoop of fire.", "options": ["poodle", "pony", "leopard", "lion"], "answer": 2},
    {"word": "harfang", "sentence": "A harfang perched on the fence post, its white feathers almost invisible against the snow.", "options": ["cockatoo", "seagull", "white swan", "snowy owl"], "answer": 3},
  ],
  // #230 · Sat 29 May 2027
  [
    {"word": "gorge", "sentence": "The kids gorged themselves on mangoes until their chins were sticky.", "options": ["smeared", "bored", "washed", "stuffed"], "answer": 3},
    {"word": "gratified", "sentence": "She was gratified to see her old students doing so well.", "options": ["baffled", "jealous", "shocked", "pleased"], "answer": 3},
    {"word": "rakish", "sentence": "He wore his hat at a rakish angle and winked at everyone in the room.", "options": ["odd", "jaunty", "careful", "awkward"], "answer": 1},
    {"word": "jounce", "sentence": "The old bus continued to jounce over the corrugations for three hours.", "options": ["jolt", "skid", "stall", "glide"], "answer": 0},
    {"word": "scofflaw", "sentence": "A notorious scofflaw, he had three hundred unpaid parking fines.", "options": ["tow-truck driver", "traffic cop", "lawbreaker", "magistrate"], "answer": 2},
    {"word": "youngth", "sentence": "In the days of his youngth, Grandpa had ridden in the Melbourne Cup.", "options": ["old age", "youth", "army days", "jail term"], "answer": 1},
    {"word": "witchuck", "sentence": "A witchuck darted in and out of its burrow in the riverbank.", "options": ["water rat", "kingfisher", "sand martin", "platypus"], "answer": 2},
  ],
  // #231 · Sun 30 May 2027
  [
    {"word": "graft", "sentence": "It took years of hard graft to turn the rundown farm into a winery.", "options": ["luck", "work", "debt", "money"], "answer": 1},
    {"word": "slothful", "sentence": "The slothful cat moved only to follow the patch of sun across the carpet.", "options": ["lazy", "nervous", "curious", "hungry"], "answer": 0},
    {"word": "obviate", "sentence": "A quick phone call would obviate the need for a two-hour meeting.", "options": ["double", "remove", "create", "explain"], "answer": 1},
    {"word": "unexampled", "sentence": "The town experienced an unexampled boom when gold was found in the creek.", "options": ["record", "brief", "modest", "predictable"], "answer": 0},
    {"word": "struthious", "sentence": "The struthious emus raced the car along the fence line at sixty kilometres an hour.", "options": ["aggressive", "flightless", "brightly coloured", "ostrich-like"], "answer": 3},
    {"word": "smittle", "sentence": "One sneezing child can smittle an entire kindergarten in a week.", "options": ["entertain", "exhaust", "silence", "infect"], "answer": 3},
    {"word": "oxycrate", "sentence": "Roman soldiers carried oxycrate in their canteens on long marches.", "options": ["sour goat's milk", "red wine", "vinegar water", "olive oil"], "answer": 2},
  ],
  // #232 · Mon 31 May 2027
  [
    {"word": "hand", "sentence": "He worked as a farm hand on a cattle station in the Kimberley.", "options": ["labourer", "manager", "vet", "owner"], "answer": 0},
    {"word": "lanky", "sentence": "The lanky teenager had to duck under every doorway in the old cottage.", "options": ["shy", "sulky", "stout", "tall"], "answer": 3},
    {"word": "piteous", "sentence": "The piteous mewing of the kitten led us to the drain.", "options": ["angry", "cheerful", "pathetic", "loud"], "answer": 2},
    {"word": "tenderfoot", "sentence": "As a complete tenderfoot at golf, I lost six balls on the first hole.", "options": ["cheat", "caddie", "novice", "expert"], "answer": 2},
    {"word": "maltreat", "sentence": "Anyone found to maltreat animals at the show will be banned for life.", "options": ["feed", "abuse", "groom", "photograph"], "answer": 1},
    {"word": "loadsman", "sentence": "The loadsman guided the freighter through the treacherous heads at Port Phillip.", "options": ["smuggler", "harbour pilot", "deckhand", "lighthouse keeper"], "answer": 1},
    {"word": "woolert", "sentence": "A woolert screeched from the rafters of the shearing shed.", "options": ["barn owl", "possum", "cockatoo", "bat"], "answer": 0},
  ],
  // #233 · Tue 01 Jun 2027
  [
    {"word": "hold", "sentence": "The wool bales were stowed in the hold before the ship left Fremantle.", "options": ["cabin", "cargo bay", "galley", "lifeboat"], "answer": 1},
    {"word": "tepid", "sentence": "The audience gave the comedian a tepid reception, and he cut his set short.", "options": ["hostile", "rowdy", "rapturous", "lukewarm"], "answer": 3},
    {"word": "sonorous", "sentence": "The cathedral bell gave a deep, sonorous peal at midday.", "options": ["cracked", "resonant", "faint", "tinny"], "answer": 1},
    {"word": "pigheaded", "sentence": "The pigheaded driver refused to admit he was lost, even when we reached the ocean.", "options": ["sleepy", "generous", "nervous", "mulish"], "answer": 3},
    {"word": "transmogrify", "sentence": "The kids managed to transmogrify a cardboard box into a spaceship, complete with a control panel.", "options": ["recycle", "flatten", "turn", "paint"], "answer": 2},
    {"word": "morglay", "sentence": "The knight drew his morglay and charged at the dragon.", "options": ["sword", "helmet", "horse", "shield"], "answer": 0},
    {"word": "sejant", "sentence": "The family crest shows a lion sejant, looking rather bored.", "options": ["roaring", "leaping", "sleeping", "seated"], "answer": 3},
  ],
  // #234 · Wed 02 Jun 2027
  [
    {"word": "jack", "sentence": "We had to jack up the car to change the flat tyre on the Hume Highway.", "options": ["tow", "push", "wash", "raise"], "answer": 3},
    {"word": "sprightly", "sentence": "The sprightly ninety-year-old still swam a kilometre every morning at Bondi.", "options": ["grumpy", "spry", "wealthy", "frail"], "answer": 1},
    {"word": "workaday", "sentence": "The rock star's workaday life involved school drop-offs and gardening.", "options": ["ordinary", "glamorous", "secret", "chaotic"], "answer": 0},
    {"word": "clangour", "sentence": "The clangour of the fire engines' bells filled the street.", "options": ["silence", "glow", "smell", "din"], "answer": 3},
    {"word": "williwaw", "sentence": "A williwaw came screaming down the mountain and flattened every tent in the camp.", "options": ["earth tremor", "squall", "stampede", "avalanche"], "answer": 1},
    {"word": "innominable", "sentence": "The innominable horror in the cellar was, in the end, just a very large possum.", "options": ["mouldy", "tiny", "ancient", "nameless"], "answer": 3},
    {"word": "spellken", "sentence": "The players performed nightly at the old spellken by the river.", "options": ["tavern", "market", "theatre", "chapel"], "answer": 2},
  ],
  // #235 · Thu 03 Jun 2027
  [
    {"word": "lap", "sentence": "The kelpie lapped up the water as if she hadn't had a drink in a week.", "options": ["spilled", "knocked", "slurped", "sniffed"], "answer": 2},
    {"word": "acrid", "sentence": "Acrid smoke from the burning tyres stung our eyes from a kilometre away.", "options": ["fragrant", "pale", "thin", "pungent"], "answer": 3},
    {"word": "artless", "sentence": "Her artless questions about the bride's ex-boyfriend made the whole table squirm.", "options": ["rehearsed", "cunning", "whispered", "naive"], "answer": 3},
    {"word": "abase", "sentence": "He refused to abase himself by begging the selectors for another chance.", "options": ["humble", "exhaust", "excuse", "promote"], "answer": 0},
    {"word": "vaticinate", "sentence": "The old woman would vaticinate about floods and fires to anyone who sat still long enough.", "options": ["knit", "complain", "gossip", "prophesy"], "answer": 3},
    {"word": "absume", "sentence": "Years of drought would slowly absume the family's savings until nothing was left.", "options": ["double", "protect", "eat away", "reveal"], "answer": 2},
    {"word": "actuose", "sentence": "Even at eighty, the actuose old woman ran the CWA, the school canteen and the local footy tipping.", "options": ["bossy", "busy", "frail", "lonely"], "answer": 1},
  ],
  // #236 · Fri 04 Jun 2027
  [
    {"word": "mug", "sentence": "Two teenagers mugged a tourist outside Central station late on Friday.", "options": ["greeted", "photographed", "robbed", "helped"], "answer": 2},
    {"word": "amass", "sentence": "Over forty years, the old miser managed to amass a fortune in a biscuit tin.", "options": ["gather", "spend", "hide", "lose"], "answer": 0},
    {"word": "assail", "sentence": "Reporters assailed the minister with questions as she left the building.", "options": ["ignored", "thanked", "followed", "bombarded"], "answer": 3},
    {"word": "adduce", "sentence": "The lawyer adduced three new witnesses to support her client's alibi.", "options": ["dismissed", "bribed", "interviewed", "produced"], "answer": 3},
    {"word": "wiseacre", "sentence": "The wiseacre in the back row corrected the tour guide at every single stop.", "options": ["photographer", "latecomer", "know-all", "pickpocket"], "answer": 2},
    {"word": "addlings", "sentence": "He spent his addlings from the harvest on a second-hand motorbike.", "options": ["tools", "earnings", "winnings", "debts"], "answer": 1},
    {"word": "adjutor", "sentence": "The vet's adjutor held the struggling calf while the injection went in.", "options": ["neighbour", "rival", "owner", "helper"], "answer": 3},
  ],
  // #237 · Sat 05 Jun 2027
  [
    {"word": "page", "sentence": "The hotel page carried our bags up to the room and refused a tip.", "options": ["manager", "chef", "leaflet", "bellboy"], "answer": 3},
    {"word": "assuage", "sentence": "Nothing the airline said could assuage the anger of the stranded passengers.", "options": ["explain", "measure", "soothe", "provoke"], "answer": 2},
    {"word": "beatific", "sentence": "The baby wore a beatific smile after her first taste of ice cream.", "options": ["toothless", "sticky", "puzzled", "blissful"], "answer": 3},
    {"word": "aggrandize", "sentence": "The mayor used every ribbon-cutting to aggrandize himself in front of the cameras.", "options": ["humble", "embarrass", "puff up", "disguise"], "answer": 2},
    {"word": "omphaloskepsis", "sentence": "After a month of omphaloskepsis at the ashram, he decided to become an accountant.", "options": ["chanting", "navel-gazing", "vegetable gardening", "fasting"], "answer": 1},
    {"word": "affamishment", "sentence": "The settlers faced affamishment when the supply ship failed to arrive that winter.", "options": ["scurvy", "mutiny", "boredom", "hunger"], "answer": 3},
    {"word": "affret", "sentence": "The affret of the cavalry broke the enemy line in minutes.", "options": ["charge", "camp", "retreat", "music"], "answer": 0},
  ],
  // #238 · Sun 06 Jun 2027
  [
    {"word": "patch", "sentence": "The team went through a rough patch, losing six games in a row.", "options": ["crowd", "pitch", "period", "road"], "answer": 2},
    {"word": "bereft", "sentence": "Bereft of ideas, the writers simply brought the dead character back to life.", "options": ["proud", "full", "bare", "tired"], "answer": 2},
    {"word": "besmirch", "sentence": "The anonymous letters were designed to besmirch the candidate's good name.", "options": ["sully", "promote", "explain", "protect"], "answer": 0},
    {"word": "ambulate", "sentence": "After the operation, patients are encouraged to ambulate as soon as possible.", "options": ["sleep", "eat", "talk", "walk"], "answer": 3},
    {"word": "interrobang", "sentence": "The headline ended in an interrobang, which the subeditor quickly removed.", "options": ["semicolon", "?! symbol", "ellipsis", "asterisk"], "answer": 1},
    {"word": "againbuy", "sentence": "He worked three jobs to againbuy the family farm from the bank.", "options": ["buy back", "insure", "sell off", "subdivide"], "answer": 0},
    {"word": "aidful", "sentence": "The aidful stranger changed our tyre in the pouring rain.", "options": ["sullen", "helpful", "nervous", "drunken"], "answer": 1},
  ],
  // #239 · Mon 07 Jun 2027
  [
    {"word": "pit", "sentence": "The final will pit the two oldest clubs in the league against each other.", "options": ["set", "unite", "pay", "rank"], "answer": 0},
    {"word": "beguiling", "sentence": "The beguiling smile of the con man won over half the retirement village.", "options": ["nervous", "toothy", "charming", "crooked"], "answer": 2},
    {"word": "bleary", "sentence": "Bleary after the overnight flight, we stumbled into the hotel lobby at dawn.", "options": ["groggy", "elated", "hungry", "wired"], "answer": 0},
    {"word": "apish", "sentence": "His apish imitation of the boss's walk had everyone in stitches.", "options": ["tiny", "clumsy", "copycat", "cruel"], "answer": 2},
    {"word": "frabjous", "sentence": "'Oh frabjous day!' cried Nan when her lotto numbers came up.", "options": ["dreadful", "joyous", "rainy", "ordinary"], "answer": 1},
    {"word": "aiblins", "sentence": "Aiblins the rain will hold off long enough for the cricket.", "options": ["luckily", "never", "surely", "perhaps"], "answer": 3},
    {"word": "algates", "sentence": "Algates the old ferryman wore the same patched coat, summer and winter alike.", "options": ["secretly", "always", "rarely", "proudly"], "answer": 1},
  ],
  // #240 · Tue 08 Jun 2027
  [
    {"word": "prop", "sentence": "The theatre's props included a stuffed crocodile and a rubber chicken.", "options": ["posters", "actors", "ushers", "objects"], "answer": 3},
    {"word": "brackish", "sentence": "The brackish water in the estuary is home to bream, mullet and the odd bull shark.", "options": ["fresh", "clear", "frozen", "salty"], "answer": 3},
    {"word": "burble", "sentence": "The creek continued to burble over the stones long after the rain had stopped.", "options": ["dry up", "freeze", "gurgle", "flood"], "answer": 2},
    {"word": "avouch", "sentence": "Several witnesses were ready to avouch that he had been at the pub all night.", "options": ["deny", "suspect", "forget", "affirm"], "answer": 3},
    {"word": "kakistocracy", "sentence": "Frustrated voters called the council a kakistocracy, pointing to the bridge it had built across a dry creek.", "options": ["rule by the old", "rule by the worst", "rule by the clergy", "rule by the rich"], "answer": 1},
    {"word": "alloquy", "sentence": "The captain's alloquy to the troops before dawn was brief and stirring.", "options": ["breakfast", "address", "salute", "inspection"], "answer": 1},
    {"word": "almsdeed", "sentence": "Every Christmas the family performed an almsdeed, delivering hampers to the old folks' home.", "options": ["kindness", "carol", "pageant", "prank"], "answer": 0},
  ],
  // #241 · Wed 09 Jun 2027
  [
    {"word": "racket", "sentence": "Police uncovered a protection racket targeting small restaurants in Chinatown.", "options": ["noise", "scam", "survey", "squad"], "answer": 1},
    {"word": "buoyant", "sentence": "Sales were buoyant over Christmas, and the shop hired three extra staff.", "options": ["fake", "flat", "sluggish", "strong"], "answer": 3},
    {"word": "chasten", "sentence": "Chastened by his defeat, the champion trained harder than ever for the rematch.", "options": ["injured", "delighted", "humbled", "bankrupted"], "answer": 2},
    {"word": "backbite", "sentence": "Office politics meant everyone would backbite about the boss as soon as she left the room.", "options": ["worry", "knock", "joke", "praise"], "answer": 1},
    {"word": "lickspittle", "sentence": "The minister's lickspittle agreed with everything, even when the minister contradicted himself.", "options": ["critic", "bodyguard", "yes-man", "rival"], "answer": 2},
    {"word": "ancienty", "sentence": "The ancienty of the cave paintings, some forty thousand years, astonished the archaeologists.", "options": ["size", "age", "colour", "beauty"], "answer": 1},
    {"word": "aneath", "sentence": "The old swagman slept aneath a coolibah tree with his billy beside him.", "options": ["under", "inside", "atop", "beside"], "answer": 0},
  ],
  // #242 · Thu 10 Jun 2027
  [
    {"word": "range", "sentence": "Mum cooked the Sunday roast on the old wood-fired range in the farmhouse kitchen.", "options": ["table", "stove", "veranda", "hills"], "answer": 1},
    {"word": "burly", "sentence": "Two burly removalists carried the piano up the stairs without breaking a sweat.", "options": ["skinny", "grumpy", "brawny", "careful"], "answer": 2},
    {"word": "commiserate", "sentence": "Friends gathered at the pub to commiserate with him after the team's loss.", "options": ["celebrate", "bet", "sympathise", "argue"], "answer": 2},
    {"word": "numinous", "sentence": "The numinous silence inside the old cathedral made even the tourists stop talking.", "options": ["chilly", "awkward", "dusty", "sacred"], "answer": 3},
    {"word": "beleaguer", "sentence": "Problems continued to beleaguer the project, from floods to a strike by the concrete workers.", "options": ["help", "beset", "fund", "amuse"], "answer": 1},
    {"word": "anetic", "sentence": "The anetic hum of the ceiling fan sent the baby to sleep in minutes.", "options": ["soothing", "grating", "broken", "loud"], "answer": 0},
    {"word": "anywhither", "sentence": "The old dog would follow her anywhither, even into the surf.", "options": ["nowhere", "anywhere", "slowly", "reluctantly"], "answer": 1},
  ],
  // #243 · Fri 11 Jun 2027
  [
    {"word": "slug", "sentence": "He took a slug of whisky before stepping up to give the eulogy.", "options": ["swig", "sniff", "bottle", "bite"], "answer": 0},
    {"word": "canny", "sentence": "The canny farmer sold his cattle the week before prices crashed.", "options": ["careless", "shrewd", "greedy", "lucky"], "answer": 1},
    {"word": "contravene", "sentence": "Parking in the disabled bay without a permit would contravene council by-laws.", "options": ["explain", "obey", "breach", "amend"], "answer": 2},
    {"word": "careworn", "sentence": "Her careworn face lit up when she saw her son walk through the arrivals gate.", "options": ["tanned", "painted", "weary", "youthful"], "answer": 2},
    {"word": "persifleur", "sentence": "The office persifleur kept up a stream of gentle teasing all through the budget meeting.", "options": ["note-taker", "bean counter", "latecomer", "banterer"], "answer": 3},
    {"word": "apertly", "sentence": "The minister apertly admitted he had never read the report.", "options": ["openly", "angrily", "tearfully", "secretly"], "answer": 0},
    {"word": "apiologist", "sentence": "The apiologist spent the summer crouched beside hives, wearing a veil and very thick gloves.", "options": ["beekeeper", "bee expert", "honey taster", "botanist"], "answer": 1},
  ],
  // #244 · Sat 12 Jun 2027
  [
    {"word": "shoulder", "sentence": "The council will have to shoulder the cost of repairing the bridge.", "options": ["dodge", "share", "bear", "estimate"], "answer": 2},
    {"word": "chastise", "sentence": "The coach would chastise any player caught on their phone during team meetings.", "options": ["rebuke", "film", "ignore", "reward"], "answer": 0},
    {"word": "convalesce", "sentence": "She went to her sister's farm to convalesce after the operation.", "options": ["hide", "work", "celebrate", "recover"], "answer": 3},
    {"word": "chaffer", "sentence": "Tourists at the night market would chaffer over every single dollar.", "options": ["queue", "haggle", "gossip", "dance"], "answer": 1},
    {"word": "hoity-toity", "sentence": "The hoity-toity guests complained loudly that the champagne wasn't French.", "options": ["nervous", "snobbish", "tipsy", "grateful"], "answer": 1},
    {"word": "arenose", "sentence": "The arenose soil along the coast grows little but banksia and pigface.", "options": ["rocky", "rich", "sandy", "salty"], "answer": 2},
    {"word": "argentry", "sentence": "The family argentry was locked in the bank vault and brought out only at Christmas.", "options": ["fine china", "silverware", "paperwork", "jewellery"], "answer": 1},
  ],
  // #245 · Sun 13 Jun 2027
  [
    {"word": "cardinal", "sentence": "Lying to your mother is the cardinal sin in our house.", "options": ["red", "minor", "chief", "secret"], "answer": 2},
    {"word": "clammy", "sentence": "His hands were clammy as he waited outside the principal's office.", "options": ["inky", "shaking", "frozen", "sweaty"], "answer": 3},
    {"word": "corpulent", "sentence": "The corpulent magistrate wheezed his way up the courthouse steps.", "options": ["portly", "furious", "skinny", "elderly"], "answer": 0},
    {"word": "convoke", "sentence": "The chairman decided to convoke an emergency meeting of the board.", "options": ["cancel", "summon", "postpone", "skip"], "answer": 1},
    {"word": "jumbuck", "sentence": "The swagman grabbed a jumbuck that came down to the billabong to drink.", "options": ["goat", "sheep", "kangaroo", "emu"], "answer": 1},
    {"word": "armipotent", "sentence": "The armipotent empire swallowed its smaller neighbours one by one.", "options": ["peaceful", "bankrupt", "tiny", "mighty"], "answer": 3},
    {"word": "assoil", "sentence": "The priest promised to assoil him of his sins if he confessed everything.", "options": ["remind", "accuse", "punish", "absolve"], "answer": 3},
  ],
  // #246 · Mon 14 Jun 2027
  [
    {"word": "cell", "sentence": "Terror suspects were organised into small cells that never met each other.", "options": ["groups", "prisons", "batteries", "rooms"], "answer": 0},
    {"word": "coddle", "sentence": "Her parents continued to coddle her well into her thirties, paying her rent and her phone bill.", "options": ["neglect", "pamper", "nag", "fine"], "answer": 1},
    {"word": "covetous", "sentence": "He cast a covetous eye over his neighbour's shiny new boat.", "options": ["envious", "bored", "scornful", "drowsy"], "answer": 0},
    {"word": "declaim", "sentence": "The actor stood on the table and began to declaim Hamlet's soliloquy to the pub.", "options": ["recite", "forget", "mumble", "rewrite"], "answer": 0},
    {"word": "jollify", "sentence": "The whole street would jollify on Boxing Day, with a cricket match down the middle of the road.", "options": ["clean up", "party", "protest", "go quiet"], "answer": 1},
    {"word": "astrolatry", "sentence": "The ancient sect practised astrolatry, offering gifts to Venus each evening.", "options": ["fire worship", "ancestor worship", "star worship", "sea worship"], "answer": 2},
    {"word": "atween", "sentence": "The cat squeezed atween the fence palings and vanished into the neighbour's yard.", "options": ["along", "over", "under", "through"], "answer": 3},
  ],
  // #247 · Tue 15 Jun 2027
  [
    {"word": "character", "sentence": "The old fisherman was a real character, with a story for every scar.", "options": ["villain", "letter", "oddball", "hero"], "answer": 2},
    {"word": "colloquial", "sentence": "The tourist's phrasebook didn't cover colloquial expressions like 'flat out like a lizard drinking'.", "options": ["formal", "rude", "ancient", "informal"], "answer": 3},
    {"word": "crestfallen", "sentence": "The crestfallen kids trudged home after the ice-cream van drove straight past.", "options": ["downcast", "giggling", "sticky", "relieved"], "answer": 0},
    {"word": "farrago", "sentence": "The minister's explanation was a farrago of half-truths, excuses and blatant lies.", "options": ["summary", "hotchpotch", "masterpiece", "apology"], "answer": 1},
    {"word": "despoil", "sentence": "Invaders would despoil the villages, carrying off grain, cattle and anything of value.", "options": ["plunder", "tax", "rebuild", "visit"], "answer": 0},
    {"word": "auntre", "sentence": "Few sailors would auntre into the strait after dark without a local pilot.", "options": ["sleep", "sing", "fish", "sail"], "answer": 3},
    {"word": "awreak", "sentence": "He swore to awreak his brother's death if it took him a lifetime.", "options": ["avenge", "forget", "explain", "mourn"], "answer": 0},
  ],
  // #248 · Wed 16 Jun 2027
  [
    {"word": "charge", "sentence": "The babysitter's three young charges were asleep by seven, to her great relief.", "options": ["wards", "accusations", "fees", "batteries"], "answer": 0},
    {"word": "construe", "sentence": "His silence was construed as agreement by everyone at the meeting.", "options": ["read", "ignored", "applauded", "recorded"], "answer": 0},
    {"word": "crotchety", "sentence": "The crotchety old man next door yelled at us every time a ball went over the fence.", "options": ["deaf", "doddery", "generous", "grouchy"], "answer": 3},
    {"word": "efface", "sentence": "Time and weather had effaced the names on the old gravestones.", "options": ["gilded", "erased", "listed", "carved"], "answer": 1},
    {"word": "flapdoodle", "sentence": "The tarot reader's predictions were pure flapdoodle, but the customers loved them.", "options": ["science", "wisdom", "poetry", "baloney"], "answer": 3},
    {"word": "baisemains", "sentence": "Please give my baisemains to your mother when you see her.", "options": ["recipes", "bill", "regards", "complaints"], "answer": 2},
    {"word": "bakistre", "sentence": "The village bakistre was up at three every morning firing the ovens.", "options": ["brewer", "baker", "blacksmith", "potter"], "answer": 1},
  ],
  // #249 · Thu 17 Jun 2027
  [
    {"word": "conduct", "sentence": "She conducted the tour of the old jail with a torch and a great deal of relish.", "options": ["cancelled", "led", "booked", "filmed"], "answer": 1},
    {"word": "crass", "sentence": "His crass joke about the funeral offended everyone at the table.", "options": ["old", "crude", "clever", "quiet"], "answer": 1},
    {"word": "daunt", "sentence": "Nothing could daunt the young sailor, not even forty-foot waves.", "options": ["wake", "thrill", "slow", "faze"], "answer": 3},
    {"word": "ensconce", "sentence": "The cat had managed to ensconce herself in the laundry basket among the clean towels.", "options": ["scratch", "lose", "settle", "wash"], "answer": 2},
    {"word": "foofaraw", "sentence": "All that foofaraw about the royal wedding dominated the news for weeks.", "options": ["scandal", "silence", "fuss", "boredom"], "answer": 2},
    {"word": "ballarag", "sentence": "The older boys would ballarag the new kids on the bus every morning.", "options": ["bully", "ignore", "tutor", "help"], "answer": 0},
    {"word": "balneary", "sentence": "The old hotel's marble balneary had a bath big enough for six.", "options": ["library", "ballroom", "bathroom", "kitchen"], "answer": 2},
  ],
  // #250 · Fri 18 Jun 2027
  [
    {"word": "contract", "sentence": "Half the class contracted chickenpox in the same week, and the school closed early.", "options": ["caught", "signed", "avoided", "studied"], "answer": 0},
    {"word": "curtail", "sentence": "The storm forced organisers to curtail the New Year's fireworks display.", "options": ["shorten", "relocate", "extend", "film"], "answer": 0},
    {"word": "dawdle", "sentence": "The kids would dawdle all the way to school, stopping to look at every lizard.", "options": ["sprint", "complain", "skip", "dally"], "answer": 3},
    {"word": "euphonious", "sentence": "The singer had a euphonious name, which her agent said was half the battle.", "options": ["old-fashioned", "melodious", "forgettable", "made-up"], "answer": 1},
    {"word": "habiliments", "sentence": "The actors' habiliments were all hand-stitched from old curtains and bedspreads.", "options": ["props", "costumes", "scripts", "salaries"], "answer": 1},
    {"word": "baudrick", "sentence": "The knight's sword hung from a leather baudrick slung over his shoulder.", "options": ["chain", "cloak", "satchel", "belt"], "answer": 3},
    {"word": "bawson", "sentence": "A bawson had dug a sett beneath the old oak at the edge of the wood.", "options": ["rabbit", "fox", "badger", "mole"], "answer": 2},
  ],
  // #251 · Sat 19 Jun 2027
  [
    {"word": "court", "sentence": "Both parties were courting the farming vote in the lead-up to the election.", "options": ["counting", "ignoring", "suing", "wooing"], "answer": 3},
    {"word": "dapper", "sentence": "The dapper old gentleman never left home without his hat, cane and pocket square.", "options": ["scruffy", "frail", "smart", "grumpy"], "answer": 2},
    {"word": "debase", "sentence": "Cheap souvenirs only debase the memory of the soldiers who fought there.", "options": ["honour", "cheapen", "preserve", "explain"], "answer": 1},
    {"word": "hierophant", "sentence": "The cult's hierophant revealed the sacred secrets only to members who had paid in full.", "options": ["priest", "founder", "bouncer", "treasurer"], "answer": 0},
    {"word": "expectorate", "sentence": "The sign on the old tram read: 'Passengers must not expectorate on the floor'.", "options": ["smoke", "spit", "sit", "eat"], "answer": 1},
    {"word": "behight", "sentence": "He behight his dying mother that he would finish school.", "options": ["promised", "begged", "lied to", "told"], "answer": 0},
    {"word": "belamy", "sentence": "Come in, belamy, and warm yourself by the fire while I put the kettle on.", "options": ["friend", "officer", "stranger", "landlord"], "answer": 0},
  ],
  // #252 · Sun 20 Jun 2027
  [
    {"word": "craft", "sentence": "Dozens of small craft gathered in the harbour to welcome the yachts home.", "options": ["seabirds", "stalls", "skills", "boats"], "answer": 3},
    {"word": "decrepit", "sentence": "The decrepit old ute somehow made it to Darwin and back.", "options": ["borrowed", "shiny", "rickety", "stolen"], "answer": 2},
    {"word": "decamp", "sentence": "The circus decamped overnight, leaving only tyre tracks and a few balloons.", "options": ["left", "collapsed", "rehearsed", "arrived"], "answer": 0},
    {"word": "extemporize", "sentence": "When the autocue failed, the newsreader had to extemporize for five minutes.", "options": ["ad-lib", "stall", "freeze", "cry"], "answer": 0},
    {"word": "jackanapes", "sentence": "The jackanapes stuck his tongue out at the headmaster and ran off laughing.", "options": ["school captain", "cheeky brat", "star pupil", "new teacher"], "answer": 1},
    {"word": "benedight", "sentence": "The benedight rain fell at last after three dry years.", "options": ["cursed", "blessed", "icy", "brief"], "answer": 1},
    {"word": "bestraught", "sentence": "Bestraught with worry, she phoned every hospital in the state looking for her son.", "options": ["bored", "sleepy", "calm", "frantic"], "answer": 3},
  ],
  // #253 · Mon 21 Jun 2027
  [
    {"word": "cricket", "sentence": "The chirping of a cricket behind the fridge kept her awake all night.", "options": ["insect", "bat", "game", "radio"], "answer": 0},
    {"word": "deride", "sentence": "Critics who once derided the band now call their first album a masterpiece.", "options": ["mocked", "funded", "praised", "managed"], "answer": 0},
    {"word": "gormless", "sentence": "The gormless new recruit saluted the vending machine on his first day at the barracks.", "options": ["eager", "lanky", "dopey", "nervous"], "answer": 2},
    {"word": "farinaceous", "sentence": "The farinaceous diet of bread, pasta and potatoes left the athletes sluggish.", "options": ["sugary", "fatty", "starchy", "spicy"], "answer": 2},
    {"word": "jerkwater", "sentence": "We broke down in some jerkwater town with one pub and no mechanic.", "options": ["bustling", "coastal", "haunted", "tiny"], "answer": 3},
    {"word": "bibliopegy", "sentence": "She learnt bibliopegy at TAFE and now rebinds old family Bibles.", "options": ["calligraphy", "bookbinding", "proofreading", "printing"], "answer": 1},
    {"word": "bibliothec", "sentence": "The bibliothec stamped our books and reminded us they were due back in two weeks.", "options": ["postie", "bookseller", "librarian", "teacher"], "answer": 2},
  ],
  // #254 · Tue 22 Jun 2027
  [
    {"word": "current", "sentence": "Strong currents off the point make it dangerous to swim there.", "options": ["flows", "rocks", "winds", "sharks"], "answer": 0},
    {"word": "dingy", "sentence": "They rented a dingy little flat above a kebab shop in Footscray.", "options": ["sunny", "spacious", "trendy", "drab"], "answer": 3},
    {"word": "glowering", "sentence": "The glowering security guard watched our every move around the gallery.", "options": ["smiling", "sleepy", "scowling", "bored"], "answer": 2},
    {"word": "fructify", "sentence": "With careful pruning, the old orchard would fructify again within two seasons.", "options": ["burn down", "be sold", "bear fruit", "dry out"], "answer": 2},
    {"word": "malversation", "sentence": "The minister resigned after an inquiry found evidence of malversation in his department.", "options": ["overcrowding", "corruption", "efficiency", "bullying"], "answer": 1},
    {"word": "bivious", "sentence": "At the bivious crossroads, the hikers argued about which track to take.", "options": ["flooded", "busy", "forking", "dusty"], "answer": 2},
    {"word": "bountihead", "sentence": "The old squatter's bountihead was legendary; no swagman left his station hungry.", "options": ["wealth", "cruelty", "temper", "largesse"], "answer": 3},
  ],
  // #255 · Wed 23 Jun 2027
  [
    {"word": "mould", "sentence": "Don't try to mould your kids into copies of yourself.", "options": ["photograph", "scold", "praise", "shape"], "answer": 3},
    {"word": "dicey", "sentence": "Crossing the flooded causeway in a hatchback was a dicey decision.", "options": ["wise", "risky", "legal", "quick"], "answer": 1},
    {"word": "deign", "sentence": "The celebrity chef did not deign to visit our table, though he waved from the kitchen.", "options": ["refuse", "hurry", "forget", "stoop"], "answer": 3},
    {"word": "garble", "sentence": "The automated announcement managed to garble every station name on the line.", "options": ["skip", "jumble", "clarify", "shout"], "answer": 1},
    {"word": "lummox", "sentence": "The big lummox knocked over three vases trying to fetch his hat from the hallway.", "options": ["butler", "toddler", "oaf", "burglar"], "answer": 2},
    {"word": "bigaroon", "sentence": "The orchard in Young grew bigaroons as big as walnuts.", "options": ["plums", "apricots", "cherries", "figs"], "answer": 2},
    {"word": "blandiloquous", "sentence": "The blandiloquous estate agent called the shoebox flat 'cosy' and the damp walls 'character'.", "options": ["smooth", "nervous", "rude", "honest"], "answer": 0},
  ],
  // #256 · Thu 24 Jun 2027
  [
    {"word": "mount", "sentence": "Pressure continued to mount on the coach after the sixth straight loss.", "options": ["shift", "grow", "vanish", "ease"], "answer": 1},
    {"word": "digress", "sentence": "Grandpa would digress from every story to tell another story, and never got back to the first one.", "options": ["wander off", "lose his temper", "get to the point", "fall asleep"], "answer": 0},
    {"word": "demotic", "sentence": "The poet mixed formal verse with demotic slang picked up in the pubs of Fitzroy.", "options": ["legal", "foreign", "ancient", "everyday"], "answer": 3},
    {"word": "gladdened", "sentence": "The sight of the first rain in months gladdened every farmer in the district.", "options": ["worried", "soaked", "cheered", "puzzled"], "answer": 2},
    {"word": "magniloquent", "sentence": "The magniloquent speaker used fifty words where five would have done.", "options": ["pompous", "honest", "timid", "nervous"], "answer": 0},
    {"word": "bulchin", "sentence": "The farmer's bulchin chased the kids round the paddock, more playful than dangerous.", "options": ["ram", "kelpie", "bull calf", "billy goat"], "answer": 2},
    {"word": "calceated", "sentence": "Calceated for once, the barefoot surfer looked deeply uncomfortable at the wedding.", "options": ["sober", "shaven", "suited", "shod"], "answer": 3},
  ],
  // #257 · Fri 25 Jun 2027
  [
    {"word": "object", "sentence": "Nobody will object if you bring a plate of lamingtons to the meeting.", "options": ["mind", "notice", "care", "eat"], "answer": 0},
    {"word": "divulge", "sentence": "The magician refused to divulge how the rabbit got into the teapot.", "options": ["practise", "film", "reveal", "forget"], "answer": 2},
    {"word": "deprecate", "sentence": "The bishop was quick to deprecate the violence at the protest.", "options": ["applaud", "film", "ignore", "condemn"], "answer": 3},
    {"word": "glutted", "sentence": "The market was glutted with mangoes, and prices fell to a dollar a tray.", "options": ["flooded", "short", "quiet", "closed"], "answer": 0},
    {"word": "modiste", "sentence": "The modiste fitted her for a ball gown that took three months to finish.", "options": ["jeweller", "dressmaker", "dance teacher", "hairdresser"], "answer": 1},
    {"word": "campanes", "sentence": "The campanes of the old church rang out across the valley on Sunday morning.", "options": ["organs", "trumpets", "choirs", "bells"], "answer": 3},
    {"word": "candicant", "sentence": "The candicant hair at his temples made him look distinguished, or so his wife said.", "options": ["greying", "thinning", "dyed", "curly"], "answer": 0},
  ],
  // #258 · Sat 26 Jun 2027
  [
    {"word": "pad", "sentence": "He lives in a bachelor pad above the surf shop, with three boards and a beanbag.", "options": ["flat", "cushion", "car", "notebook"], "answer": 0},
    {"word": "docile", "sentence": "The docile old draught horse let the kids braid ribbons into his mane.", "options": ["wild", "lame", "proud", "meek"], "answer": 3},
    {"word": "derisory", "sentence": "The company made a derisory offer of a two per cent pay rise, and the union walked out.", "options": ["laughable", "final", "generous", "secret"], "answer": 0},
    {"word": "guileful", "sentence": "The guileful fox lured the hens out of the pen with a trail of grain.", "options": ["hungry", "cunning", "mangy", "clumsy"], "answer": 1},
    {"word": "mollycoddler", "sentence": "Her mollycoddler of a father still cut the crusts off her sandwiches when she was twenty.", "options": ["tyrant", "joker", "slacker", "pamperer"], "answer": 3},
    {"word": "cantatrice", "sentence": "The famous cantatrice sang the national anthem before the Grand Final.", "options": ["dancer", "umpire", "singer", "jockey"], "answer": 2},
    {"word": "carpophagous", "sentence": "The carpophagous flying foxes stripped the mango trees bare in a single night.", "options": ["fruit-eating", "blood-sucking", "insect-eating", "nectar-sipping"], "answer": 0},
  ],
  // #259 · Sun 27 Jun 2027
  [
    {"word": "pop", "sentence": "We'll pop round to Nan's on the way home from the beach.", "options": ["run", "drive", "drop", "phone"], "answer": 2},
    {"word": "domineering", "sentence": "Her domineering mother-in-law rearranged the kitchen every time she visited.", "options": ["bossy", "elderly", "generous", "absent-minded"], "answer": 0},
    {"word": "desecrate", "sentence": "Vandals desecrated the war memorial with spray paint the night before Anzac Day.", "options": ["guarded", "defiled", "restored", "visited"], "answer": 1},
    {"word": "habituate", "sentence": "It took the new puppy a week to habituate to the sound of the trains.", "options": ["howl", "object", "respond", "adjust"], "answer": 3},
    {"word": "mordacious", "sentence": "Her mordacious wit made her a terrifying opponent on the debating team.", "options": ["slow", "biting", "silly", "gentle"], "answer": 1},
    {"word": "cephalalgy", "sentence": "A dull cephalalgy settled behind her eyes by the end of the spreadsheet.", "options": ["tiredness", "stiffness", "squint", "headache"], "answer": 3},
    {"word": "cessant", "sentence": "The cessant volcano hadn't erupted in ten thousand years, according to the guide.", "options": ["erupting", "active", "dormant", "smoking"], "answer": 2},
  ],
  // #260 · Mon 28 Jun 2027
  [
    {"word": "post", "sentence": "She landed a post as junior curator at the National Gallery.", "options": ["pole", "grant", "letter", "job"], "answer": 3},
    {"word": "doting", "sentence": "The doting grandparents had framed every one of the toddler's finger paintings.", "options": ["adoring", "grumpy", "distant", "strict"], "answer": 0},
    {"word": "dextrous", "sentence": "The dextrous pickpocket had my wallet and watch before I'd even felt a bump.", "options": ["nervous", "clumsy", "adept", "lanky"], "answer": 2},
    {"word": "hardhearted", "sentence": "The hardhearted landlord evicted the family a week before Christmas.", "options": ["nervous", "callous", "absent", "generous"], "answer": 1},
    {"word": "muttonhead", "sentence": "Some muttonhead left the gate open, and the sheep are halfway to Bendigo.", "options": ["neighbour", "tourist", "genius", "dimwit"], "answer": 3},
    {"word": "chessom", "sentence": "The garden beds were full of rich chessom, dark and crumbly.", "options": ["clay", "gravel", "loam", "sand"], "answer": 2},
    {"word": "chierte", "sentence": "She spoke of her late husband with great chierte, smiling through her tears.", "options": ["affection", "bitterness", "reluctance", "confusion"], "answer": 0},
  ],
  // #261 · Tue 29 Jun 2027
  [
    {"word": "produce", "sentence": "The roadside stall sold fresh produce from the farm: eggs, honey and tomatoes.", "options": ["goods", "films", "results", "crafts"], "answer": 0},
    {"word": "dumbfounded", "sentence": "She was dumbfounded when her quiet little brother won the talent show.", "options": ["astonished", "relieved", "jealous", "unsurprised"], "answer": 0},
    {"word": "diaphanous", "sentence": "The bride wore a diaphanous veil that floated in the sea breeze.", "options": ["borrowed", "beaded", "sheer", "heavy"], "answer": 2},
    {"word": "hindmost", "sentence": "The hindmost runner was still on the second lap when the winner crossed the line.", "options": ["fastest", "last", "tallest", "oldest"], "answer": 1},
    {"word": "niffy", "sentence": "The niffy socks under his bed had been there since the school holidays.", "options": ["woollen", "odd", "missing", "smelly"], "answer": 3},
    {"word": "chirre", "sentence": "The pigeons would chirre on the window ledge every morning at dawn.", "options": ["nest", "coo", "peck", "fight"], "answer": 1},
    {"word": "chirurgeon", "sentence": "The ship's chirurgeon sawed off the sailor's leg with nothing but rum for anaesthetic.", "options": ["chaplain", "carpenter", "surgeon", "cook"], "answer": 2},
  ],
  // #262 · Wed 30 Jun 2027
  [
    {"word": "project", "sentence": "Her voice projected to the back of the hall without a microphone.", "options": ["faded", "trembled", "planned", "carried"], "answer": 3},
    {"word": "dusky", "sentence": "Dusky light filtered through the gum trees as we set up camp.", "options": ["golden", "dim", "harsh", "bright"], "answer": 1},
    {"word": "disconsolate", "sentence": "The disconsolate fans sat in silence long after the final siren.", "options": ["gutted", "drunken", "frozen", "jubilant"], "answer": 0},
    {"word": "illumine", "sentence": "Candles in every window would illumine the street on Christmas Eve.", "options": ["darken", "light up", "crowd", "decorate"], "answer": 1},
    {"word": "nosher", "sentence": "A champion nosher, he could empty a family-size bag of chips in one episode.", "options": ["chef", "snacker", "critic", "dieter"], "answer": 1},
    {"word": "cicurate", "sentence": "It took the ranger a whole season to cicurate the orphaned wombat.", "options": ["weigh", "feed", "tame", "release"], "answer": 2},
    {"word": "circummure", "sentence": "The townsfolk decided to circummure the village against raiders from the hills.", "options": ["rename", "abandon", "wall in", "flood"], "answer": 2},
  ],
  // #263 · Thu 01 Jul 2027
  [
    {"word": "raise", "sentence": "The question of funding was raised at the end of the meeting.", "options": ["dropped", "brought up", "answered", "lifted aloft"], "answer": 1},
    {"word": "dwindle", "sentence": "Supplies began to dwindle as the floodwaters cut the town off for a third week.", "options": ["rot", "shrink", "pile up", "arrive"], "answer": 1},
    {"word": "dispirited", "sentence": "The dispirited volunteers packed up after only three people came to the fete.", "options": ["furious", "exhausted", "elated", "deflated"], "answer": 3},
    {"word": "impenitent", "sentence": "The impenitent vandal said he would do it all again.", "options": ["sobbing", "masked", "unrepentant", "apologetic"], "answer": 2},
    {"word": "nudnik", "sentence": "The nudnik in seat 14C asked the flight attendant for something every five minutes.", "options": ["doctor", "toddler", "pest", "pilot"], "answer": 2},
    {"word": "cloistress", "sentence": "The old cloistress had not left the convent in forty years.", "options": ["nun", "cook", "widow", "gardener"], "answer": 0},
    {"word": "cohibit", "sentence": "The new rules were meant to cohibit the gamblers, but they simply moved to another pub.", "options": ["reward", "attract", "restrain", "warn"], "answer": 2},
  ],
  // #264 · Fri 02 Jul 2027
  [
    {"word": "relish", "sentence": "She relished the chance to beat her older brother at chess.", "options": ["enjoyed", "wasted", "dreaded", "refused"], "answer": 0},
    {"word": "effervescent", "sentence": "The effervescent host kept the quiz night lively with jokes and spot prizes.", "options": ["nervous", "sullen", "sparkling", "monotone"], "answer": 2},
    {"word": "downhearted", "sentence": "The downhearted farmer stared at the dry dam and the empty sky.", "options": ["hopeful", "sunburnt", "amused", "downcast"], "answer": 3},
    {"word": "infelicitous", "sentence": "His infelicitous remark about the bride's weight silenced the reception.", "options": ["clumsy", "hilarious", "whispered", "rehearsed"], "answer": 0},
    {"word": "oleaginous", "sentence": "The oleaginous maître d' bowed, smiled and assured us the table would be ready in 'just a moment'.", "options": ["flustered", "rude", "elderly", "slimy"], "answer": 3},
    {"word": "colluctation", "sentence": "The colluctation between the two rams lasted until both were too tired to stand.", "options": ["race", "struggle", "romance", "duet"], "answer": 1},
    {"word": "complice", "sentence": "Police arrested the thief's complice, who had been waiting in the getaway car.", "options": ["victim's cousin", "defence lawyer", "partner in crime", "parole officer"], "answer": 2},
  ],
  // #265 · Sat 03 Jul 2027
  [
    {"word": "report", "sentence": "The report of the gun echoed across the valley and set the cockatoos screeching.", "options": ["smoke", "article", "bang", "owner"], "answer": 2},
    {"word": "elated", "sentence": "The players were elated after winning their first premiership in fifty years.", "options": ["humble", "overjoyed", "relieved", "exhausted"], "answer": 1},
    {"word": "draughty", "sentence": "The draughty old farmhouse was freezing in winter, despite three fireplaces.", "options": ["haunted", "cosy", "crowded", "breezy"], "answer": 3},
    {"word": "intersperse", "sentence": "The comedian would intersperse his songs with long, rambling stories about his ex-wife.", "options": ["mix", "end", "replace", "open"], "answer": 0},
    {"word": "panjandrum", "sentence": "The council's chief panjandrum arrived in a limousine to open the new public toilet.", "options": ["critic", "cleaner", "bigwig", "plumber"], "answer": 2},
    {"word": "concite", "sentence": "Agitators were sent to concite the crowd outside the factory gates.", "options": ["count", "feed", "rouse", "calm"], "answer": 2},
    {"word": "congree", "sentence": "The two old rivals would finally congree on the location of the new bridge.", "options": ["vote", "agree", "argue", "gamble"], "answer": 1},
  ],
  // #266 · Sun 04 Jul 2027
  [
    {"word": "resort", "sentence": "Without a ladder, we had to resort to standing on the wheelie bin.", "options": ["turn", "agree", "refuse", "object"], "answer": 0},
    {"word": "elude", "sentence": "The answer continued to elude her until she woke at three in the morning.", "options": ["follow", "annoy", "escape", "please"], "answer": 2},
    {"word": "dumbstruck", "sentence": "Dumbstruck, the contestant stared at the cheque for a million dollars.", "options": ["suspicious", "speechless", "furious", "unmoved"], "answer": 1},
    {"word": "irresolute", "sentence": "The irresolute captain kept changing the batting order right up until the toss.", "options": ["indecisive", "superstitious", "injured", "arrogant"], "answer": 0},
    {"word": "pawky", "sentence": "His pawky remarks about the weather kept the bus queue chuckling.", "options": ["wry", "angry", "gloomy", "loud"], "answer": 0},
    {"word": "consuetude", "sentence": "By long consuetude, the oldest member of the family carved the Christmas ham.", "options": ["law", "custom", "accident", "request"], "answer": 1},
    {"word": "contabescent", "sentence": "The contabescent old dog barely touched his food in the last weeks.", "options": ["barking", "playful", "greedy", "wasting"], "answer": 3},
  ],
  // #267 · Mon 05 Jul 2027
  [
    {"word": "riot", "sentence": "The garden was a riot of colour in spring, with tulips, poppies and roses everywhere.", "options": ["fence", "blaze", "shortage", "battle"], "answer": 1},
    {"word": "embellish", "sentence": "He tended to embellish his fishing stories, and the bream grew bigger every year.", "options": ["confess", "shorten", "forget", "dress up"], "answer": 3},
    {"word": "edify", "sentence": "The documentary was meant to edify viewers about the history of the Murray River.", "options": ["confuse", "educate", "bore", "frighten"], "answer": 1},
    {"word": "livelong", "sentence": "Nan would knit the livelong day, producing a jumper a week.", "options": ["entire", "dreary", "sunny", "busy"], "answer": 0},
    {"word": "peccant", "sentence": "The peccant schoolboy stood outside the principal's office, staring at his shoes.", "options": ["sleepy", "proud", "guilty", "innocent"], "answer": 2},
    {"word": "cordiform", "sentence": "She cut the sandwiches into cordiform pieces for her daughter's Valentine's party.", "options": ["crustless", "bite-sized", "star-shaped", "heart-shaped"], "answer": 3},
    {"word": "crapaud", "sentence": "A fat crapaud squatted by the garden tap, waiting for moths.", "options": ["spider", "toad", "gecko", "lizard"], "answer": 1},
  ],
  // #268 · Tue 06 Jul 2027
  [
    {"word": "rock", "sentence": "The scandal at the bowls club rocked the small town for months.", "options": ["bored", "amused", "shook", "united"], "answer": 2},
    {"word": "emanate", "sentence": "A delicious smell began to emanate from the bakery at four in the morning.", "options": ["spoil", "waft", "drain", "vanish"], "answer": 1},
    {"word": "elephantine", "sentence": "His elephantine attempts at tact only made the situation worse.", "options": ["witty", "subtle", "clumsy", "brief"], "answer": 2},
    {"word": "manful", "sentence": "Despite the pain, he made a manful effort to finish the race.", "options": ["brave", "secret", "lazy", "feeble"], "answer": 0},
    {"word": "penpusher", "sentence": "The penpushers in head office had never set foot on a farm.", "options": ["vets", "clerks", "drovers", "farmers"], "answer": 1},
    {"word": "crapple", "sentence": "The eagle tightened its crapple around the struggling rabbit and lifted off.", "options": ["claw", "beak", "wing", "nest"], "answer": 0},
    {"word": "crinose", "sentence": "The crinose caterpillar left an itchy rash on anyone who touched it.", "options": ["striped", "slimy", "giant", "hairy"], "answer": 3},
  ],
  // #269 · Wed 07 Jul 2027
  [
    {"word": "sentence", "sentence": "The judge handed down a sentence of six months' community service.", "options": ["penalty", "verdict", "speech", "apology"], "answer": 0},
    {"word": "encroach", "sentence": "New housing estates continue to encroach on the koala's habitat.", "options": ["report", "intrude", "improve", "depend"], "answer": 1},
    {"word": "elfin", "sentence": "The elfin actress had huge eyes and a pixie haircut.", "options": ["delicate", "freckled", "stern", "towering"], "answer": 0},
    {"word": "mephitic", "sentence": "A mephitic stench rose from the drain after the storm.", "options": ["faint", "foul", "sweet", "fresh"], "answer": 1},
    {"word": "philtre", "sentence": "The witch sold him a philtre guaranteed to make the baker's daughter adore him for ever.", "options": ["poison", "sleeping draught", "love potion", "lucky charm"], "answer": 2},
    {"word": "curtes", "sentence": "The curtes young knight bowed and offered the old woman his horse.", "options": ["nervous", "rude", "boastful", "courteous"], "answer": 3},
    {"word": "custrel", "sentence": "The knight's custrel carried his shield and lance and polished his helmet every night.", "options": ["chaplain", "squire", "cook", "horse"], "answer": 1},
  ],
  // #270 · Thu 08 Jul 2027
  [
    {"word": "shock", "sentence": "A shock of red hair stuck out from under his hat.", "options": ["mop", "pinch", "fright", "streak"], "answer": 0},
    {"word": "enthralled", "sentence": "The children were enthralled by the puppet show and didn't move for an hour.", "options": ["bored", "captivated", "puzzled", "frightened"], "answer": 1},
    {"word": "embolden", "sentence": "The early win seemed to embolden the young team, and they played without fear all season.", "options": ["tire", "divide", "encourage", "unsettle"], "answer": 2},
    {"word": "mirthful", "sentence": "The mirthful crowd at the comedy festival laughed at everything, even the ads.", "options": ["sullen", "sober", "sparse", "merry"], "answer": 3},
    {"word": "picklepuss", "sentence": "The picklepuss at the front desk hadn't smiled since 1987.", "options": ["chatterbox", "optimist", "grump", "clown"], "answer": 2},
    {"word": "cynegetics", "sentence": "The duke's passion was cynegetics, and he kept forty hounds at the manor.", "options": ["collecting stamps", "growing orchids", "breeding racehorses", "hunting with dogs"], "answer": 3},
    {"word": "deaurate", "sentence": "The deaurate frame was worth far more than the painting inside it.", "options": ["cracked", "gilded", "carved", "plain"], "answer": 1},
  ],
  // #271 · Fri 09 Jul 2027
  [
    {"word": "shower", "sentence": "The couple were showered with confetti as they left the church.", "options": ["blessed", "pushed", "pelted", "photographed"], "answer": 2},
    {"word": "errant", "sentence": "The errant husband turned up three days later with a sunburn and a sheepish grin.", "options": ["injured", "wayward", "dutiful", "wealthy"], "answer": 1},
    {"word": "embroil", "sentence": "He didn't want to embroil himself in his neighbours' dispute over the fence.", "options": ["enrich", "entangle", "amuse", "endanger"], "answer": 1},
    {"word": "nauseate", "sentence": "The smell of the fish market would nauseate him every time.", "options": ["delight", "wake", "tempt", "sicken"], "answer": 3},
    {"word": "pinchbeck", "sentence": "The 'gold' watch turned out to be pinchbeck, worth about as much as the box it came in.", "options": ["fake", "stolen", "Swiss", "antique"], "answer": 0},
    {"word": "debullition", "sentence": "Debullition of the milk left a burnt, sticky mess all over the stovetop.", "options": ["souring overnight", "quick freezing", "slow curdling", "boiling over"], "answer": 3},
    {"word": "decennary", "sentence": "The town celebrated its first decennary with a fair and fireworks.", "options": ["harvest", "decade", "mayor", "flood"], "answer": 1},
  ],
  // #272 · Sat 10 Jul 2027
  [
    {"word": "spring", "sentence": "A spring at the base of the hill supplied the whole farm with water.", "options": ["source", "pump", "coil", "season"], "answer": 0},
    {"word": "exasperated", "sentence": "The exasperated teacher wrote the same instruction on the board for the fifth time.", "options": ["confused", "fed up", "delighted", "sleepy"], "answer": 1},
    {"word": "empyrean", "sentence": "The cathedral's painted ceiling showed angels soaring through the empyrean.", "options": ["forest", "desert", "ocean", "heavens"], "answer": 3},
    {"word": "nettled", "sentence": "Nettled by the umpire's decision, the captain threw his cap on the ground.", "options": ["irritated", "delighted", "baffled", "injured"], "answer": 0},
    {"word": "pogonip", "sentence": "A pogonip settled over the valley, coating every fence wire in frost.", "options": ["dust storm", "hailstorm", "icy fog", "heatwave"], "answer": 2},
    {"word": "delibation", "sentence": "A careful delibation of each wine at the cellar door took most of the afternoon.", "options": ["tasting", "pouring", "pricing", "labelling"], "answer": 0},
    {"word": "delitescent", "sentence": "The delitescent possum spent the day in the roof cavity and emerged only after dark.", "options": ["hidden", "hungry", "injured", "noisy"], "answer": 0},
  ],
  // #273 · Sun 11 Jul 2027
  [
    {"word": "story", "sentence": "His story was that he'd been at the movies, but nobody believed it.", "options": ["joke", "version", "novel", "song"], "answer": 1},
    {"word": "exude", "sentence": "The new manager seemed to exude confidence from her first day.", "options": ["borrow", "lack", "fake", "radiate"], "answer": 3},
    {"word": "enthuse", "sentence": "The tour guide would enthuse about every rock, even the ones that looked exactly like the others.", "options": ["yawn", "grumble", "lecture", "rave"], "answer": 3},
    {"word": "parch", "sentence": "The northerly winds would parch the paddocks within a week of the rain.", "options": ["flood", "cool", "dry", "green"], "answer": 2},
    {"word": "plaguy", "sentence": "The plaguy mosquitoes made sleeping in the tent impossible on the first night.", "options": ["pesky", "harmless", "tiny", "silent"], "answer": 0},
    {"word": "depascent", "sentence": "The depascent cattle moved slowly across the paddock, heads down in the clover.", "options": ["stampeding", "sleeping", "grazing", "calving"], "answer": 2},
    {"word": "deperdition", "sentence": "The deperdition of the family fortune took just one generation and a lot of racehorses.", "options": ["loss", "origin", "secret", "growth"], "answer": 0},
  ],
  // #274 · Mon 12 Jul 2027
  [
    {"word": "strand", "sentence": "The strike left thousands of travellers stranded at the airport.", "options": ["stuck", "seated", "searched", "fed"], "answer": 0},
    {"word": "farcical", "sentence": "The farcical meeting ended with the chairman locked out of his own office.", "options": ["tense", "productive", "ridiculous", "secret"], "answer": 2},
    {"word": "factitious", "sentence": "The factitious outrage on social media lasted exactly one news cycle.", "options": ["genuine", "global", "fake", "violent"], "answer": 2},
    {"word": "prettify", "sentence": "The council spent a fortune trying to prettify the industrial estate with hanging baskets.", "options": ["beautify", "expand", "demolish", "rename"], "answer": 0},
    {"word": "poltroon", "sentence": "The poltroon fled the battlefield before the first shot was fired.", "options": ["medic", "coward", "general", "drummer"], "answer": 1},
    {"word": "desinence", "sentence": "The novel's desinence was so abrupt that readers thought pages were missing.", "options": ["opening", "cover", "title", "ending"], "answer": 3},
    {"word": "detenebrate", "sentence": "The new streetlights were meant to detenebrate the laneway behind the pub.", "options": ["fence off", "light up", "close", "clean"], "answer": 1},
  ],
  // #275 · Tue 13 Jul 2027
  [
    {"word": "subject", "sentence": "Flights out of Darwin are subject to delays during the summer storm season.", "options": ["immune", "sold", "liable", "added"], "answer": 2},
    {"word": "fallacious", "sentence": "The fallacious claim that we only use ten per cent of our brains refuses to die.", "options": ["proven", "boring", "false", "ancient"], "answer": 2},
    {"word": "epistolary", "sentence": "Their epistolary friendship lasted forty years, though they met in person only twice.", "options": ["by chance", "by phone", "by email", "by post"], "answer": 3},
    {"word": "mummify", "sentence": "The ancient Egyptians would mummify cats as well as pharaohs.", "options": ["sacrifice", "breed", "worship", "embalm"], "answer": 3},
    {"word": "pother", "sentence": "Mum made a terrible pother over a single parking ticket outside the chemist.", "options": ["secret", "joke", "fuss", "profit"], "answer": 2},
    {"word": "detrite", "sentence": "The detrite old tyres were fit only for the tip.", "options": ["spare", "bald", "new", "shiny"], "answer": 1},
    {"word": "diffame", "sentence": "A single scandal brought diffame upon the whole family for a generation.", "options": ["disgrace", "fortune", "fame", "luck"], "answer": 0},
  ],
  // #276 · Wed 14 Jul 2027
  [
    {"word": "swallow", "sentence": "He had to swallow his pride and ask his little brother for a loan.", "options": ["display", "admit", "pocket", "defend"], "answer": 2},
    {"word": "famished", "sentence": "After a day of surfing, the kids were famished and ate everything in the fridge.", "options": ["exhausted", "sunburnt", "starving", "freezing"], "answer": 2},
    {"word": "estrange", "sentence": "His drinking would eventually estrange him from his whole family.", "options": ["alienate", "endear", "reunite", "excuse"], "answer": 0},
    {"word": "neaten", "sentence": "She paused to neaten her hair before walking into the interview.", "options": ["dye", "hide", "cut", "tidy"], "answer": 3},
    {"word": "pouter", "sentence": "The pouter in the back seat refused to speak until we stopped for chips.", "options": ["sulker", "navigator", "backseat driver", "chatterbox"], "answer": 0},
    {"word": "diffind", "sentence": "The woodcutter could diffind a log with a single blow of his axe.", "options": ["lift", "split", "stack", "carve"], "answer": 1},
    {"word": "dimication", "sentence": "The dimication between the two roosters left feathers all over the yard.", "options": ["romance", "race", "duet", "fight"], "answer": 3},
  ],
  // #277 · Thu 15 Jul 2027
  [
    {"word": "tart", "sentence": "Her tart reply, 'I'm not your mate', silenced the salesman.", "options": ["late", "sweet", "polite", "sharp"], "answer": 3},
    {"word": "fanciful", "sentence": "His fanciful plan involved a hot-air balloon and a herd of trained goats.", "options": ["dreamy", "secret", "sensible", "costly"], "answer": 0},
    {"word": "evince", "sentence": "Her face didn't evince the slightest surprise when the fire alarm went off.", "options": ["fake", "show", "hide", "cause"], "answer": 1},
    {"word": "oafish", "sentence": "His oafish behaviour at the dinner party included eating straight from the serving dish.", "options": ["clumsy", "witty", "shy", "refined"], "answer": 0},
    {"word": "punster", "sentence": "The office punster couldn't resist: 'I'm on a seafood diet. I see food and I eat it.'", "options": ["accountant", "receptionist", "dietitian", "jokester"], "answer": 3},
    {"word": "dispand", "sentence": "The peacock began to dispand his tail for the indifferent hens.", "options": ["fan out", "shake", "groom", "tuck in"], "answer": 0},
    {"word": "displosion", "sentence": "The displosion at the quarry rattled windows twenty kilometres away.", "options": ["collapse", "flood", "blast", "fire"], "answer": 2},
  ],
  // #278 · Fri 16 Jul 2027
  [
    {"word": "tire", "sentence": "Grandpa never seemed to tire of telling the same war stories.", "options": ["weary", "boast", "forget", "think"], "answer": 0},
    {"word": "feign", "sentence": "He tried to feign illness to get out of the maths test.", "options": ["fake", "spread", "catch", "cure"], "answer": 0},
    {"word": "eviscerate", "sentence": "The reviewer went on to eviscerate the film in eight hundred brutal words.", "options": ["summarise", "praise", "gut", "promote"], "answer": 2},
    {"word": "owlish", "sentence": "Behind his owlish glasses, the new teacher had a wicked sense of humour.", "options": ["tinted", "fashionable", "round", "broken"], "answer": 2},
    {"word": "pursy", "sentence": "The pursy old mayor was puffing after a single flight of stairs.", "options": ["bad-tempered", "short-winded", "red-faced", "long-winded"], "answer": 1},
    {"word": "divellicate", "sentence": "The puppy began to divellicate the cushion, scattering stuffing across the lounge.", "options": ["lick", "sniff", "hide", "shred"], "answer": 3},
    {"word": "doloriferous", "sentence": "The doloriferous bite of a bull ant is a mistake you only make once.", "options": ["fatal", "painful", "itchy", "harmless"], "answer": 1},
  ],
  // #279 · Sat 17 Jul 2027
  [
    {"word": "token", "sentence": "He gave her a small token of his thanks: a jar of homemade quince jam.", "options": ["coin", "rejection", "bill", "gesture"], "answer": 3},
    {"word": "finicky", "sentence": "My finicky cat will only eat fish if it's been warmed to exactly the right temperature.", "options": ["picky", "greedy", "elderly", "lazy"], "answer": 0},
    {"word": "exhort", "sentence": "The coach continued to exhort the players to run harder in the last quarter.", "options": ["bribe", "warn", "urge", "forbid"], "answer": 2},
    {"word": "paunchy", "sentence": "The paunchy publican squeezed behind the bar and pulled us two pints.", "options": ["bearded", "bald-headed", "tattooed", "pot-bellied"], "answer": 3},
    {"word": "putterer", "sentence": "A happy putterer, Grandpa spent his retirement fiddling about in the shed.", "options": ["hermit", "inventor", "dabbler", "drinker"], "answer": 2},
    {"word": "domesman", "sentence": "The village domesman settled every quarrel, from stolen chickens to wandering goats.", "options": ["constable", "judge", "priest", "farmer"], "answer": 1},
    {"word": "doniferous", "sentence": "The doniferous aunt arrived with a bag full of presents for every child in the house.", "options": ["loud-voiced", "rain-soaked", "gift-bearing", "well-meaning"], "answer": 2},
  ],
  // #280 · Sun 18 Jul 2027
  [
    {"word": "top", "sentence": "The children spun their wooden tops across the kitchen floor until dinner.", "options": ["plates", "hats", "toys", "lids"], "answer": 2},
    {"word": "flighty", "sentence": "His flighty sister changed jobs, flats and boyfriends every few months.", "options": ["bossy", "steady", "wealthy", "fickle"], "answer": 3},
    {"word": "explicate", "sentence": "The professor spent an hour trying to explicate a single line of the poem.", "options": ["translate", "memorise", "explain", "recite"], "answer": 2},
    {"word": "petrify", "sentence": "The thought of public speaking would petrify her for days beforehand.", "options": ["bore", "amuse", "terrify", "excite"], "answer": 2},
    {"word": "quaffer", "sentence": "A legendary quaffer, he could down a schooner in one breath.", "options": ["singer", "swimmer", "smoker", "drinker"], "answer": 3},
    {"word": "dudeen", "sentence": "The old Irishman sat on the porch puffing on his dudeen.", "options": ["flute", "clay pipe", "harmonica", "cigar"], "answer": 1},
    {"word": "dureless", "sentence": "Their dureless friendship ended within a month over a borrowed lawnmower.", "options": ["fleeting", "secret", "lifelong", "close"], "answer": 0},
  ],
  // #281 · Mon 19 Jul 2027
  [
    {"word": "tower", "sentence": "At two metres tall, he towered over everyone in the queue.", "options": ["pushed", "hid", "loomed", "argued"], "answer": 2},
    {"word": "flustered", "sentence": "The flustered bride's father forgot his speech and read out the shopping list instead.", "options": ["calm", "rattled", "proud", "drunken"], "answer": 1},
    {"word": "expunge", "sentence": "The record of his conviction was finally expunged after ten years.", "options": ["reviewed", "printed", "framed", "wiped"], "answer": 3},
    {"word": "phantasmal", "sentence": "Phantasmal shapes seemed to move in the fog along the jetty.", "options": ["ghostly", "familiar", "solid", "colourful"], "answer": 0},
    {"word": "quaggy", "sentence": "The quaggy ground near the creek swallowed my boot to the ankle.", "options": ["boggy", "rocky", "dry", "sandy"], "answer": 0},
    {"word": "dysnomy", "sentence": "Critics blamed decades of dysnomy for the state's tangled planning rules.", "options": ["low taxes", "high rents", "bad weather", "bad laws"], "answer": 3},
    {"word": "ebulliate", "sentence": "As the pot began to ebulliate, she tipped in the pasta.", "options": ["crack", "boil", "tip over", "cool"], "answer": 1},
  ],
  // #282 · Tue 20 Jul 2027
  [
    {"word": "track", "sentence": "Police tracked the stolen ute to a farm outside Dubbo.", "options": ["traced", "towed", "sold", "searched"], "answer": 0},
    {"word": "foolhardy", "sentence": "It was foolhardy to swim across the river in flood, and he knew it.", "options": ["illegal", "reckless", "lucky", "sensible"], "answer": 1},
    {"word": "extempore", "sentence": "With no notes, she spoke extempore for twenty minutes and brought the house down.", "options": ["from a script", "in a whisper", "off the cuff", "through tears"], "answer": 2},
    {"word": "protract", "sentence": "The lawyers seemed determined to protract the case for as long as possible.", "options": ["hide", "win", "prolong", "settle"], "answer": 2},
    {"word": "raillery", "sentence": "The groom endured an hour of affectionate raillery from his mates at the bucks' night.", "options": ["praise", "silence", "advice", "teasing"], "answer": 3},
    {"word": "efflagitate", "sentence": "The tenants wrote to efflagitate repairs to the roof before winter.", "options": ["fund", "delay", "demand", "refuse"], "answer": 2},
    {"word": "egling", "sentence": "Grandpa caught an egling off the jetty and threw it back to grow.", "options": ["small crab", "young perch", "eel", "old boot"], "answer": 1},
  ],
  // #283 · Wed 21 Jul 2027
  [
    {"word": "tumbler", "sentence": "He poured a finger of whisky into a heavy crystal tumbler and sat by the fire.", "options": ["decanter", "glass", "jug", "acrobat"], "answer": 1},
    {"word": "forthright", "sentence": "The forthright farmer told the minister his drought plan was useless.", "options": ["timid", "direct", "drunken", "polite"], "answer": 1},
    {"word": "exult", "sentence": "Fans continued to exult in the streets long after the final siren.", "options": ["riot", "queue up", "mourn", "celebrate"], "answer": 3},
    {"word": "putrefy", "sentence": "Left in the sun, the fish would putrefy within hours.", "options": ["rot", "dry", "glow", "cook"], "answer": 0},
    {"word": "rimose", "sentence": "The rimose old dam wall worried the engineers more than they admitted.", "options": ["cracked", "painted", "mossy", "towering"], "answer": 0},
    {"word": "eirenic", "sentence": "The diplomat's eirenic tone calmed both sides of the dispute.", "options": ["bored", "patronising", "peaceable", "hostile"], "answer": 2},
    {"word": "electre", "sentence": "A fly was trapped forever in the piece of electre on her necklace.", "options": ["glass", "silver", "ice", "amber"], "answer": 3},
  ],
  // #284 · Thu 22 Jul 2027
  [
    {"word": "wane", "sentence": "Interest in the new café began to wane after the first month.", "options": ["grow", "fade", "spread", "peak"], "answer": 1},
    {"word": "frenetic", "sentence": "The kitchen was frenetic during the lunch rush, with orders piling up faster than anyone could cook.", "options": ["spotless", "chilly", "hectic", "quiet"], "answer": 2},
    {"word": "fainthearted", "sentence": "This rollercoaster, with its eight loops, is definitely not for the fainthearted.", "options": ["timid", "hungry", "elderly", "tall"], "answer": 0},
    {"word": "reproachful", "sentence": "The dog gave me a reproachful look when I ate the last sausage myself.", "options": ["accusing", "grateful", "hungry", "sleepy"], "answer": 0},
    {"word": "roisterer", "sentence": "The roisterers from the wedding party sang their way down the main street at 2 a.m.", "options": ["mourners", "joggers", "council workers", "revellers"], "answer": 3},
    {"word": "eloign", "sentence": "The family decided to eloign the twins from the city for the summer.", "options": ["enrol", "adopt", "send away", "photograph"], "answer": 2},
    {"word": "emancipist", "sentence": "The emancipist built a flour mill in Parramatta and became one of the colony's richest men.", "options": ["free settler", "prison guard", "naval officer", "freed convict"], "answer": 3},
  ],
  // #285 · Fri 23 Jul 2027
  [
    {"word": "wind", "sentence": "The track winds through the rainforest down to the waterfall.", "options": ["snakes", "ends", "blows", "stops"], "answer": 0},
    {"word": "frigid", "sentence": "Relations between the two neighbours have been frigid ever since the fence dispute.", "options": ["legal", "icy", "polite", "warm"], "answer": 1},
    {"word": "felicitate", "sentence": "The mayor sent a letter to felicitate the couple on their seventieth anniversary.", "options": ["congratulate", "invoice", "sympathise with", "remind"], "answer": 0},
    {"word": "rusticate", "sentence": "The university decided to rusticate the student for a term after the prank.", "options": ["graduate", "suspend", "promote", "honour"], "answer": 1},
    {"word": "rollick", "sentence": "The puppies would rollick in the long grass until they collapsed in a heap.", "options": ["hide", "sleep", "romp", "hunt"], "answer": 2},
    {"word": "embushment", "sentence": "The bushrangers lay in embushment along the coach road near Eugowra.", "options": ["chains", "ambush", "disguise", "comfort"], "answer": 1},
    {"word": "emendicate", "sentence": "Down on his luck, the old actor had to emendicate outside the very theatre he once filled.", "options": ["sleep", "busk", "perform", "beg"], "answer": 3},
  ],
  // #286 · Sat 24 Jul 2027
  [
    {"word": "wound", "sentence": "The road wound up the mountain in a series of hairpin bends.", "options": ["stopped", "crumbled", "injured", "twisted"], "answer": 3},
    {"word": "frisky", "sentence": "The frisky colt bucked and kicked all the way round the yard.", "options": ["sleepy", "old", "lively", "lame"], "answer": 2},
    {"word": "fervid", "sentence": "His fervid support for the Tigers bordered on religious devotion.", "options": ["ardent", "lukewarm", "recent", "secret"], "answer": 0},
    {"word": "scarify", "sentence": "Scarify the lawn in spring to help the new grass come through.", "options": ["rake", "mow", "water", "fertilise"], "answer": 0},
    {"word": "rotgut", "sentence": "The roadhouse sold a rotgut whisky that could strip paint.", "options": ["fine wine", "grog", "cordial", "tea"], "answer": 1},
    {"word": "emphrensy", "sentence": "The endless car alarms would emphrensy even the calmest resident.", "options": ["soothe", "wake", "madden", "amuse"], "answer": 2},
    {"word": "enatation", "sentence": "His enatation from the wreck to the shore took three exhausting hours.", "options": ["drive", "swim", "flight", "voyage"], "answer": 1},
  ],
  // #287 · Sun 25 Jul 2027
  [
    {"word": "bear", "sentence": "The old apple tree continues to bear fruit every autumn.", "options": ["yield", "sell", "hide", "lose"], "answer": 0},
    {"word": "furrowed", "sentence": "His brow was furrowed in concentration as he read the instructions.", "options": ["sunburnt", "sweaty", "smooth", "creased"], "answer": 3},
    {"word": "fidgety", "sentence": "The fidgety kids couldn't sit still for the whole of the wedding service.", "options": ["sticky", "antsy", "silent", "tired"], "answer": 1},
    {"word": "smatter", "sentence": "He could smatter a few words of French, mostly about cheese.", "options": ["master", "teach", "translate", "dabble in"], "answer": 3},
    {"word": "rubbernecker", "sentence": "Rubberneckers slowed the freeway to a crawl as they passed the crash.", "options": ["speeders", "tow trucks", "gawkers", "cyclists"], "answer": 2},
    {"word": "encheason", "sentence": "The encheason of the quarrel was a single missing teaspoon.", "options": ["cost", "cause", "venue", "end"], "answer": 1},
    {"word": "encrisped", "sentence": "Her encrisped hair sprang out in every direction after the humid walk.", "options": ["plaited", "curled", "shaved", "dyed"], "answer": 1},
  ],
  // #288 · Mon 26 Jul 2027
  [
    {"word": "bowl", "sentence": "The young quick could bowl at a hundred and fifty kilometres an hour.", "options": ["field", "catch", "deliver", "hit out"], "answer": 2},
    {"word": "ghoulish", "sentence": "He took a ghoulish interest in the crime scene, photographing everything.", "options": ["official", "morbid", "fleeting", "casual"], "answer": 1},
    {"word": "finagle", "sentence": "She managed to finagle two free tickets to the grand final.", "options": ["lose", "refuse", "sell", "wangle"], "answer": 3},
    {"word": "stouthearted", "sentence": "The stouthearted volunteers fought the fire through the night with nothing but buckets.", "options": ["unpaid", "courageous", "exhausted", "frightened"], "answer": 1},
    {"word": "saponaceous", "sentence": "The saponaceous water in the creek below the laundry was a worry for the fishermen.", "options": ["soapy", "icy", "salty", "muddy"], "answer": 0},
    {"word": "enecate", "sentence": "The new poison was meant to enecate the rats in the grain silo.", "options": ["attract", "feed", "kill off", "count"], "answer": 2},
    {"word": "ensiferous", "sentence": "The ensiferous statue of the general stood in the middle of the park, covered in pigeons.", "options": ["bare-headed", "horse-riding", "one-armed", "sword-bearing"], "answer": 3},
  ],
  // #289 · Tue 27 Jul 2027
  [
    {"word": "cast", "sentence": "Every adult in town cast a vote in the referendum.", "options": ["threw", "lodged", "bought", "lost"], "answer": 1},
    {"word": "glean", "sentence": "We managed to glean a few useful facts from the tourist brochure.", "options": ["invent", "miss", "delete", "pick up"], "answer": 3},
    {"word": "fitful", "sentence": "After the earthquake, everyone in town had a fitful night's sleep.", "options": ["peaceful", "long", "dreamless", "restless"], "answer": 3},
    {"word": "doglike", "sentence": "His doglike devotion to the coach was almost embarrassing to watch.", "options": ["fierce", "faithful", "grudging", "fickle"], "answer": 1},
    {"word": "saunterer", "sentence": "A Sunday saunterer, he took an hour to walk the length of the Esplanade.", "options": ["litterbug", "busker", "ambler", "jogger"], "answer": 2},
    {"word": "entassment", "sentence": "An entassment of dirty dishes awaited us in the kitchen after the party.", "options": ["pile", "set", "rack", "shortage"], "answer": 0},
    {"word": "epopee", "sentence": "The old bard recited an epopee of the clan's battles that lasted until dawn.", "options": ["drinking song", "limerick", "epic poem", "short prayer"], "answer": 2},
  ],
  // #290 · Wed 28 Jul 2027
  [
    {"word": "chap", "sentence": "The cold wind would chap her lips every winter on the farm.", "options": ["seal", "colour", "numb", "crack"], "answer": 3},
    {"word": "gnarled", "sentence": "The gnarled hands of the old fisherman could still tie a knot faster than anyone.", "options": ["trembling", "knotted", "smooth", "tattooed"], "answer": 1},
    {"word": "flaxen", "sentence": "Her flaxen hair turned almost white after a summer at the beach.", "options": ["jet-black", "curly", "blonde", "short"], "answer": 2},
    {"word": "unshod", "sentence": "The unshod horse picked its way carefully across the gravel.", "options": ["barefoot", "blinkered", "lame", "saddled"], "answer": 0},
    {"word": "schlemiel", "sentence": "The schlemiel managed to lock himself out of his car, his house and his office in one day.", "options": ["bungler", "genius", "landlord", "burglar"], "answer": 0},
    {"word": "equipondious", "sentence": "The scales were equipondious, a kilo of feathers against a kilo of lead.", "options": ["tilted", "broken", "level", "rusty"], "answer": 2},
    {"word": "eutaxy", "sentence": "The eutaxy of her spice rack, alphabetised and labelled, impressed every visitor.", "options": ["messiness", "order", "smell", "emptiness"], "answer": 1},
  ],
  // #291 · Thu 29 Jul 2027
  [
    {"word": "china", "sentence": "Nan only brought out the good china for Christmas lunch.", "options": ["silver", "tablecloth", "crockery", "wine"], "answer": 2},
    {"word": "grisly", "sentence": "Detectives made a grisly discovery in the abandoned chest freezer.", "options": ["gruesome", "lucky", "valuable", "routine"], "answer": 0},
    {"word": "fleecy", "sentence": "Fleecy clouds drifted across the blue sky over the paddock.", "options": ["thin", "woolly", "dark grey", "low"], "answer": 1},
    {"word": "uncongenial", "sentence": "The uncongenial atmosphere at the meeting made newcomers want to leave immediately.", "options": ["festive", "relaxed", "frosty", "smoky"], "answer": 2},
    {"word": "scrannel", "sentence": "The scrannel notes of a cheap recorder drifted from the school hall.", "options": ["soothing", "booming", "mellow", "screechy"], "answer": 3},
    {"word": "evigilation", "sentence": "The evigilation of the camp at dawn was a chorus of groans and zippers.", "options": ["breakfast", "packing up", "roll call", "waking up"], "answer": 3},
    {"word": "evitate", "sentence": "She would evitate the boss's eye whenever volunteers were needed.", "options": ["avoid", "meet", "catch", "roll"], "answer": 0},
  ],
  // #292 · Fri 30 Jul 2027
  [
    {"word": "coast", "sentence": "We coasted down the hill with our feet off the pedals.", "options": ["rolled", "raced", "crashed", "walked"], "answer": 0},
    {"word": "groggy", "sentence": "Still groggy from the anaesthetic, she asked the nurse the same question four times.", "options": ["cheerful", "furious", "alert", "woozy"], "answer": 3},
    {"word": "flout", "sentence": "The café continued to flout the smoking ban until the council fined it.", "options": ["ignore", "support", "enforce", "praise"], "answer": 0},
    {"word": "thickset", "sentence": "The thickset prop forward barely fit through the dressing-room door.", "options": ["stocky", "nervous", "lanky", "bearded"], "answer": 0},
    {"word": "sobersides", "sentence": "Don't invite that sobersides; he'll spend the party correcting everyone's grammar.", "options": ["life of the party", "killjoy", "DJ", "gatecrasher"], "answer": 1},
    {"word": "excalfactory", "sentence": "The excalfactory mug of soup thawed his fingers after the hike.", "options": ["warming", "lumpy", "salty", "chilling"], "answer": 0},
    {"word": "excandescent", "sentence": "The blacksmith pulled the excandescent iron from the forge and began to hammer.", "options": ["bent", "rusty", "glowing", "cooling"], "answer": 2},
  ],
  // #293 · Sat 31 Jul 2027
  [
    {"word": "net", "sentence": "The charity netted forty thousand dollars from the art auction.", "options": ["owed", "lost", "raised", "spent"], "answer": 2},
    {"word": "gruff", "sentence": "The gruff old sergeant turned out to have a soft spot for stray kittens.", "options": ["brusque", "young", "skinny", "cheerful"], "answer": 0},
    {"word": "foist", "sentence": "The salesman tried to foist an extended warranty on every customer.", "options": ["hide", "push", "explain", "refund"], "answer": 1},
    {"word": "whiskery", "sentence": "Grandpa's whiskery kiss tickled the grandchildren and made them squeal with laughter.", "options": ["bristly", "gentle", "wet", "smoky"], "answer": 0},
    {"word": "sopor", "sentence": "After the Christmas lunch, the whole family sank into a sopor on the couch.", "options": ["argument", "board game", "sulk", "deep sleep"], "answer": 3},
    {"word": "exsiliency", "sentence": "The exsiliency of the jack-in-the-box made the baby shriek with delight.", "options": ["loud ticking", "springing out", "slow opening", "bright colours"], "answer": 1},
    {"word": "exterraneous", "sentence": "The exterraneous visitors needed a translator to order their meat pies.", "options": ["foreign", "hungry", "royal", "local"], "answer": 0},
  ],
  // #294 · Sun 01 Aug 2027
  [
    {"word": "ferret", "sentence": "She ferreted around in her handbag for the car keys.", "options": ["dug", "cried", "swore", "waited"], "answer": 0},
    {"word": "haphazard", "sentence": "The haphazard parking at the beach meant nobody could get out.", "options": ["careful", "metered", "free", "random"], "answer": 3},
    {"word": "foppish", "sentence": "The foppish young man spent more on his cravats than on rent.", "options": ["scruffy", "thrifty", "dandyish", "sporty"], "answer": 2},
    {"word": "tightlipped", "sentence": "The tightlipped spokesman refused to confirm or deny anything about the merger.", "options": ["cagey", "chatty", "smiling", "nervous"], "answer": 0},
    {"word": "sottish", "sentence": "The sottish captain ran the ferry aground for the third time.", "options": ["sleepy", "drunken", "elderly", "sober"], "answer": 1},
    {"word": "fatigable", "sentence": "The fatigable old pony needed a rest after every lap of the paddock.", "options": ["short-sighted", "easily tired", "bad-tempered", "well-trained"], "answer": 1},
    {"word": "fausen", "sentence": "The children scooped up a fausen from the creek, wriggling like a ribbon.", "options": ["minnow", "tadpole", "yabby", "elver"], "answer": 3},
  ],
  // #295 · Mon 02 Aug 2027
  [
    {"word": "fig", "sentence": "He doesn't care a fig what the neighbours think of his garden gnomes.", "options": ["jot", "moment", "great deal", "lot"], "answer": 0},
    {"word": "haggard", "sentence": "After a week of night feeds, the new parents looked haggard and grey.", "options": ["drawn", "radiant", "relaxed", "tanned"], "answer": 0},
    {"word": "forswear", "sentence": "After the hangover, he vowed to forswear tequila for the rest of his life.", "options": ["collect", "learn", "renounce", "promote"], "answer": 2},
    {"word": "shirty", "sentence": "Dad got a bit shirty when we used his good chisel as a screwdriver.", "options": ["proud", "cranky", "excited", "curious"], "answer": 1},
    {"word": "simoom", "sentence": "The simoom swept in from the desert, filling every tent with sand.", "options": ["camel train", "sandfly", "mirage", "hot wind"], "answer": 3},
    {"word": "expetible", "sentence": "The corner office, with its harbour view, was the most expetible in the building.", "options": ["cramped", "haunted", "desirable", "expensive"], "answer": 2},
    {"word": "fetisely", "sentence": "The dancer stepped fetisely between the champagne glasses without spilling a drop.", "options": ["drunkenly", "clumsily", "daintily", "quickly"], "answer": 2},
  ],
  // #296 · Tue 03 Aug 2027
  [
    {"word": "firm", "sentence": "Hold the ladder firm while I climb onto the roof.", "options": ["upside down", "steady", "loose", "sideways"], "answer": 1},
    {"word": "halcyon", "sentence": "She remembered the halcyon summers of her childhood, spent barefoot on the farm.", "options": ["rainy", "brief", "gloomy", "golden"], "answer": 3},
    {"word": "frangible", "sentence": "The parcel was stamped 'frangible', so naturally the courier threw it over the fence.", "options": ["overdue", "valuable", "urgent", "fragile"], "answer": 3},
    {"word": "skive", "sentence": "He would skive off school every Friday to go surfing at Bells Beach.", "options": ["bunk", "race", "walk", "drive"], "answer": 0},
    {"word": "smarm", "sentence": "There was so much smarm in his apology that nobody believed a word of it.", "options": ["grammar", "oiliness", "honesty", "anger"], "answer": 1},
    {"word": "fizgig", "sentence": "He waded into the shallows with a fizgig, hoping for a flathead for dinner.", "options": ["lantern", "net", "spear", "crab pot"], "answer": 2},
    {"word": "flabel", "sentence": "The servant waved a feathered flabel over the sweating emperor.", "options": ["sword", "torch", "cup", "fan"], "answer": 3},
  ],
  // #297 · Wed 04 Aug 2027
  [
    {"word": "flat", "sentence": "Her flat refusal to discuss the matter ended the meeting early.", "options": ["partial", "tearful", "polite", "blunt"], "answer": 3},
    {"word": "harried", "sentence": "The harried mother juggled three kids, a pram and a dropped ice cream at the bus stop.", "options": ["calm", "wealthy", "frazzled", "smiling"], "answer": 2},
    {"word": "fraternize", "sentence": "Players were warned not to fraternize with the opposition before the grand final.", "options": ["mingle", "fight", "gamble", "train"], "answer": 0},
    {"word": "spiffing", "sentence": "'What a spiffing idea!' said the old colonel when we suggested a picnic.", "options": ["dreadful", "risky", "silly", "splendid"], "answer": 3},
    {"word": "wamble", "sentence": "After the ferry ride, his stomach continued to wamble for an hour.", "options": ["shrink", "settle", "freeze", "churn"], "answer": 3},
    {"word": "flasket", "sentence": "She filled the flasket with washing and carried it out to the line.", "options": ["basket", "tub", "bucket", "bag"], "answer": 0},
    {"word": "flavescent", "sentence": "The flavescent leaves of the poplars signalled the start of autumn.", "options": ["falling", "golden", "glossy", "budding"], "answer": 1},
  ],
  // #298 · Thu 05 Aug 2027
  [
    {"word": "spit", "sentence": "We walked out along the sandy spit at low tide to look for shells.", "options": ["jetty", "point", "dune", "saliva"], "answer": 1},
    {"word": "headstrong", "sentence": "The headstrong filly refused to be saddled until well after noon.", "options": ["wilful", "lame", "pretty", "docile"], "answer": 0},
    {"word": "friable", "sentence": "The friable soil fell apart between his fingers, perfect for planting potatoes.", "options": ["rocky", "sticky", "salty", "crumbly"], "answer": 3},
    {"word": "squashy", "sentence": "The squashy tomatoes at the bottom of the bag were only good for sauce.", "options": ["unripe", "green", "frozen", "mushy"], "answer": 3},
    {"word": "squabby", "sentence": "The squabby little pug waddled after the children all afternoon.", "options": ["squat", "nervous", "lanky", "fluffy"], "answer": 0},
    {"word": "fleckless", "sentence": "Her fleckless white tablecloth survived the Christmas lunch, to everyone's amazement.", "options": ["torn", "faded", "spotless", "borrowed"], "answer": 2},
    {"word": "floriage", "sentence": "The floriage of the jacarandas turned the whole street purple each November.", "options": ["bark", "bloom", "seeds", "shade"], "answer": 1},
  ],
  // #299 · Fri 06 Aug 2027
  [
    {"word": "frank", "sentence": "Let me be frank with you: the wedding cake was an absolute disaster.", "options": ["honest", "brief", "quiet", "polite"], "answer": 0},
    {"word": "heady", "sentence": "The heady scent of frangipani filled the warm evening air.", "options": ["sour", "musty", "faint", "potent"], "answer": 3},
    {"word": "frumpy", "sentence": "She swapped her frumpy cardigan for a sequinned jacket and went dancing.", "options": ["stylish", "itchy", "borrowed", "dowdy"], "answer": 3},
    {"word": "stagy", "sentence": "The actor's stagy sobbing convinced nobody in the audience, not even his mum.", "options": ["genuine", "silent", "hammy", "brief"], "answer": 2},
    {"word": "stumblebum", "sentence": "The stumblebum knocked over the sauce bottles on his way to the counter.", "options": ["regular", "waiter", "chef", "klutz"], "answer": 3},
    {"word": "frigorific", "sentence": "The frigorific southerly dropped the temperature fifteen degrees in an hour.", "options": ["dusty", "icy", "humid", "gentle"], "answer": 1},
    {"word": "fructuous", "sentence": "It was a fructuous meeting, and both sides left with a signed agreement.", "options": ["pointless", "brief", "fruitful", "heated"], "answer": 2},
  ],
  // #300 · Sat 07 Aug 2027
  [
    {"word": "gag", "sentence": "The comedian opened with a gag about Canberra's weather that fell completely flat.", "options": ["joke", "rant", "trick", "song"], "answer": 0},
    {"word": "hoarse", "sentence": "After cheering through the entire grand final, she was too hoarse to speak.", "options": ["croaky", "sunburnt", "giddy", "tipsy"], "answer": 0},
    {"word": "gauzy", "sentence": "Gauzy curtains billowed in the breeze from the open window.", "options": ["heavy", "stained", "filmy", "velvet"], "answer": 2},
    {"word": "straitlaced", "sentence": "Her straitlaced parents were horrified when she came home with a tattoo.", "options": ["easygoing", "prim", "wealthy", "absent"], "answer": 1},
    {"word": "sudorific", "sentence": "The sudorific curry had the whole table mopping their foreheads.", "options": ["mouth-numbing", "tear-jerking", "bland-tasting", "sweat-inducing"], "answer": 3},
    {"word": "furibundal", "sentence": "The furibundal driver leapt out of his car and kicked the parking meter.", "options": ["sleepy", "lost", "giggling", "raging"], "answer": 3},
    {"word": "geminous", "sentence": "The geminous cherries hung from the branch on a single stalk.", "options": ["paired", "rotten", "sour", "golden"], "answer": 0},
  ],
  // #301 · Sun 08 Aug 2027
  [
    {"word": "hack", "sentence": "The old hack had written for every paper in town and been sacked by most of them.", "options": ["typesetter", "editor", "scribbler", "horse"], "answer": 2},
    {"word": "hospitable", "sentence": "The hospitable farmers insisted we stay for dinner, then breakfast, then lunch.", "options": ["kind", "nosy", "grumpy", "wealthy"], "answer": 0},
    {"word": "gawky", "sentence": "The gawky teenager tripped over his own feet on the way to collect his award.", "options": ["graceful", "awkward", "tiny", "smug"], "answer": 1},
    {"word": "strew", "sentence": "The wind would strew rubbish across the car park every bin night.", "options": ["bury", "burn", "collect", "scatter"], "answer": 3},
    {"word": "swither", "sentence": "She would swither for twenty minutes over which ice-cream flavour to choose.", "options": ["complain", "dither", "argue", "rush"], "answer": 1},
    {"word": "geminy", "sentence": "The geminy were so alike that even their mother mixed them up.", "options": ["rivals", "cousins", "puppies", "twins"], "answer": 3},
    {"word": "gharry", "sentence": "We hired a gharry pulled by a sleepy pony to take us to the market.", "options": ["cart", "bike", "guide", "boat"], "answer": 0},
  ],
  // #302 · Mon 09 Aug 2027
  [
    {"word": "junk", "sentence": "A Chinese junk with patched red canvas drifted into the harbour at dawn.", "options": ["paper lantern", "rubbish heap", "sailing boat", "fishing net"], "answer": 2},
    {"word": "illegible", "sentence": "The doctor's handwriting on the prescription was completely illegible, even to the pharmacist.", "options": ["faded", "colourful", "unreadable", "neat"], "answer": 2},
    {"word": "genuflect", "sentence": "Visitors would genuflect before the altar as they entered the old chapel.", "options": ["whisper", "sneeze", "pay", "kneel"], "answer": 3},
    {"word": "stupefy", "sentence": "The heat and the long sermon seemed to stupefy the congregation.", "options": ["daze", "annoy", "anger", "excite"], "answer": 0},
    {"word": "swivet", "sentence": "Mum was in a swivet trying to get the roast, the gravy and the pudding ready at once.", "options": ["trance", "sulk", "huff", "flap"], "answer": 3},
    {"word": "gigantology", "sentence": "The professor's book on gigantology covered every legend from Goliath to the Yowie.", "options": ["ghost stories", "giant lore", "star maps", "dinosaurs"], "answer": 1},
    {"word": "goosery", "sentence": "The farm's goosery was guarded by a gander more terrifying than any dog.", "options": ["henhouse", "dovecote", "duck pond", "goose pen"], "answer": 3},
  ],
  // #303 · Tue 10 Aug 2027
  [
    {"word": "mace", "sentence": "The Speaker's mace lay on the table as parliament began its sitting.", "options": ["printed agenda", "ceremonial staff", "pepper spray", "leather briefcase"], "answer": 1},
    {"word": "imbibe", "sentence": "Tourists were warned not to imbibe too much of the local moonshine.", "options": ["drink", "photograph", "sell", "smuggle"], "answer": 0},
    {"word": "glutinous", "sentence": "The glutinous rice stuck to everything, including, somehow, the ceiling.", "options": ["spicy", "fluffy", "burnt", "sticky"], "answer": 3},
    {"word": "supplicate", "sentence": "The prisoners would supplicate the governor for mercy every Christmas.", "options": ["thank", "curse", "beg", "bribe"], "answer": 2},
    {"word": "taradiddle", "sentence": "Her story about being late because of a runaway camel was a complete taradiddle.", "options": ["riddle", "fib", "rumour", "fact"], "answer": 1},
    {"word": "gowden", "sentence": "The gowden wheat stretched to the horizon under a blue sky.", "options": ["withered", "golden", "green", "flattened"], "answer": 1},
    {"word": "griskin", "sentence": "The butcher wrapped up a griskin for the Sunday roast.", "options": ["leg of lamb", "beef rump", "chicken", "pork loin"], "answer": 3},
  ],
  // #304 · Wed 11 Aug 2027
  [
    {"word": "mark", "sentence": "The ceremony marked fifty years since the Ash Wednesday bushfires.", "options": ["honoured", "prevented", "predicted", "caused"], "answer": 0},
    {"word": "immerse", "sentence": "She liked to immerse herself in a good novel on long flights.", "options": ["fan", "bore", "tire", "lose"], "answer": 3},
    {"word": "gluttonous", "sentence": "The gluttonous possum ate every peach on the tree in a single night.", "options": ["noisy", "sleepy", "greedy", "timid"], "answer": 2},
    {"word": "tenderhearted", "sentence": "The tenderhearted ranger stayed up all night with the injured joey.", "options": ["exhausted", "kind", "veteran", "grumpy"], "answer": 1},
    {"word": "temerarious", "sentence": "The temerarious teenager tried to jump the creek on his BMX and ended up in it.", "options": ["timid", "lucky", "rash", "skilful"], "answer": 2},
    {"word": "guerdonable", "sentence": "Finding the lost child after three days was a guerdonable deed, and the town threw a party.", "options": ["routine", "shameful", "noble", "foolish"], "answer": 2},
    {"word": "guillemet", "sentence": "The French editor insisted on a guillemet at the start of every line of dialogue.", "options": ["quotation mark", "capital letter", "full stop", "dash"], "answer": 0},
  ],
  // #305 · Thu 12 Aug 2027
  [
    {"word": "poker", "sentence": "Grandpa stirred the glowing coals with an old iron poker before bed.", "options": ["card game", "ladle", "fire rod", "shovel"], "answer": 2},
    {"word": "impel", "sentence": "Hunger would impel the foxes into town during the long drought.", "options": ["drive", "keep", "scare", "forbid"], "answer": 0},
    {"word": "gnash", "sentence": "The losing coach could only gnash his teeth as the replay was shown again.", "options": ["brush", "grind", "bare", "pick"], "answer": 1},
    {"word": "thickheaded", "sentence": "The thickheaded burglar left his wallet at the scene of the crime.", "options": ["dense", "armed", "clever", "masked"], "answer": 0},
    {"word": "tenebrious", "sentence": "The tenebrious alley behind the pub was no place to walk alone at night.", "options": ["smelly", "narrow", "dark", "busy"], "answer": 2},
    {"word": "haberdine", "sentence": "The galley stank of haberdine, the sailors' staple for the long voyage.", "options": ["biscuits", "rum", "fresh fish", "salt cod"], "answer": 3},
    {"word": "havenage", "sentence": "Every ship entering Port Jackson had to pay havenage to the colony.", "options": ["harbour fees", "pilots' bribes", "customs fines", "convict wages"], "answer": 0},
  ],
  // #306 · Fri 13 Aug 2027
  [
    {"word": "press", "sentence": "Reporters pressed the minister for answers on the steps outside parliament.", "options": ["praised", "pushed", "ironed", "thanked"], "answer": 1},
    {"word": "implore", "sentence": "The parents implored the kids to stay away from the crocodile sign.", "options": ["dared", "taught", "begged", "bet"], "answer": 2},
    {"word": "gossipy", "sentence": "The gossipy newsletter reported who had been seen leaving whose house.", "options": ["formal", "monthly", "chatty", "glossy"], "answer": 2},
    {"word": "tiddly", "sentence": "After two shandies, Nan was slightly tiddly and started singing.", "options": ["cross", "merry", "sleepy", "teary"], "answer": 1},
    {"word": "thaumaturge", "sentence": "The village thaumaturge claimed he could cure warts, hiccups and bad luck.", "options": ["blacksmith", "schoolteacher", "town drunk", "miracle worker"], "answer": 3},
    {"word": "headspring", "sentence": "The headspring of the river was a tiny trickle among the moss.", "options": ["source", "dam", "mouth", "bend"], "answer": 0},
    {"word": "hearselike", "sentence": "The waiting room had a hearselike hush that made everyone whisper.", "options": ["festive", "sticky", "funereal", "noisy"], "answer": 2},
  ],
  // #307 · Sat 14 Aug 2027
  [
    {"word": "pulse", "sentence": "Lentils, chickpeas and other pulses grow well in the Mallee.", "options": ["berries", "legumes", "weeds", "heartbeats"], "answer": 1},
    {"word": "incisive", "sentence": "Her incisive questions exposed the holes in the company's plan within minutes.", "options": ["lengthy", "sharp", "friendly", "vague"], "answer": 1},
    {"word": "gratify", "sentence": "It would gratify her enormously to see her grandson graduate.", "options": ["upset", "surprise", "bore", "please"], "answer": 3},
    {"word": "towheaded", "sentence": "A towheaded toddler peered at us from behind his mother's legs.", "options": ["red-faced", "freckled", "white-blond", "curly-haired"], "answer": 2},
    {"word": "titivate", "sentence": "She paused to titivate in front of the mirror before opening the door.", "options": ["preen", "sneeze", "pray", "stretch"], "answer": 0},
    {"word": "hebdomad", "sentence": "Every hebdomad, without fail, the paper carried Grandpa's letter to the editor.", "options": ["year", "day", "week", "month"], "answer": 2},
    {"word": "hederaceous", "sentence": "The hederaceous vine had swallowed the whole cottage, chimney and all.", "options": ["flowering", "thorny", "dead", "ivy-like"], "answer": 3},
  ],
  // #308 · Sun 15 Aug 2027
  [
    {"word": "punt", "sentence": "He took a punt on a fifty-to-one outsider in the Melbourne Cup.", "options": ["ride", "kick", "look", "bet"], "answer": 3},
    {"word": "incongruous", "sentence": "The incongruous sight of a man in a tuxedo on a tractor stopped traffic on the highway.", "options": ["odd", "pleasant", "dull", "familiar"], "answer": 0},
    {"word": "grovel", "sentence": "After crashing his father's car, he had no choice but to grovel.", "options": ["boast", "crawl", "lie", "run"], "answer": 1},
    {"word": "treacly", "sentence": "The film's treacly ending had the critics groaning in their seats.", "options": ["soppy", "brutal", "sudden", "confusing"], "answer": 0},
    {"word": "toper", "sentence": "The old toper had his own stool at the end of the bar.", "options": ["owner", "barman", "sot", "cook"], "answer": 2},
    {"word": "henchboy", "sentence": "The knight's henchboy ran ahead with his helmet and gloves.", "options": ["horse", "page", "rival", "father"], "answer": 1},
    {"word": "hindberry", "sentence": "Grandma made hindberry jam every summer from the canes along the fence.", "options": ["apricot", "plum", "berry", "quince"], "answer": 2},
  ],
  // #309 · Mon 16 Aug 2027
  [
    {"word": "ram", "sentence": "The thieves rammed the shopfront with a stolen four-wheel drive.", "options": ["photographed", "robbed", "smashed", "parked"], "answer": 2},
    {"word": "incredulous", "sentence": "She gave an incredulous laugh when he claimed he'd caught a two-metre barramundi.", "options": ["polite", "delighted", "sceptical", "nervous"], "answer": 2},
    {"word": "guileless", "sentence": "The guileless young volunteer believed every word the scammer told her.", "options": ["tired", "innocent", "cynical", "greedy"], "answer": 1},
    {"word": "unappetising", "sentence": "The hospital served an unappetising grey stew with a single boiled carrot.", "options": ["unappealing", "piping hot", "spicy", "delicious"], "answer": 0},
    {"word": "tramontane", "sentence": "The villagers distrusted anyone tramontane, even visitors from the next valley.", "options": ["from town", "from nearby", "from the bay", "from afar"], "answer": 3},
    {"word": "hithermost", "sentence": "We camped on the hithermost bank of the river, too tired to cross.", "options": ["farther", "nearer", "steeper", "muddier"], "answer": 1},
    {"word": "hopyard", "sentence": "The old hopyard in the Derwent Valley now grows apples and cider pears.", "options": ["vineyard", "dairy farm", "sheep run", "hop field"], "answer": 3},
  ],
  // #310 · Tue 17 Aug 2027
  [
    {"word": "rattle", "sentence": "The tough questions from the panel clearly rattled the young candidate.", "options": ["bored", "impressed", "amused", "unsettled"], "answer": 3},
    {"word": "indelible", "sentence": "The trip to Antarctica left an indelible impression on all of us.", "options": ["painful", "false", "lasting", "faint"], "answer": 2},
    {"word": "guzzle", "sentence": "The kids would guzzle cordial until they were bouncing off the walls.", "options": ["sip", "sell", "gulp", "spill"], "answer": 2},
    {"word": "unchivalrous", "sentence": "It was unchivalrous of him to take the last seat on the bus while a pregnant woman stood.", "options": ["ungallant", "unlucky", "sensible", "illegal"], "answer": 0},
    {"word": "trepid", "sentence": "The trepid kitten crept out from under the couch an inch at a time.", "options": ["curious", "hungry", "timid", "playful"], "answer": 2},
    {"word": "hortyard", "sentence": "Behind the farmhouse stood a hortyard of apple and pear trees.", "options": ["orchard", "row", "hedge", "garden shed"], "answer": 0},
    {"word": "houlet", "sentence": "A houlet called from the gum tree as we walked home in the dark.", "options": ["frog", "owl", "kookaburra", "possum"], "answer": 1},
  ],
  // #311 · Wed 18 Aug 2027
  [
    {"word": "rush", "sentence": "The floor of the great hall was strewn with rushes, as in medieval times.", "options": ["reeds", "flowers", "hurries", "rugs"], "answer": 0},
    {"word": "indigent", "sentence": "The charity provides free meals for indigent families across the city.", "options": ["large", "local", "wealthy", "needy"], "answer": 3},
    {"word": "gyrate", "sentence": "The dancers began to gyrate wildly as the drummer picked up the pace.", "options": ["spin", "clap", "bow", "freeze"], "answer": 0},
    {"word": "undeviating", "sentence": "His undeviating loyalty to the club survived forty losing seasons.", "options": ["fading", "secret", "steady", "grudging"], "answer": 2},
    {"word": "troat", "sentence": "In autumn you can hear the stags troat across the valley.", "options": ["sleep", "bellow", "graze", "shed"], "answer": 1},
    {"word": "howadji", "sentence": "The howadji arrived in the bazaar with a camel, a notebook and a terrible sunburn.", "options": ["soldier", "traveller", "merchant", "thief"], "answer": 1},
    {"word": "hunkerism", "sentence": "The committee's hunkerism meant the club still banned mobile phones and coloured socks.", "options": ["old-fogeyism", "poverty", "bad manners", "recklessness"], "answer": 0},
  ],
  // #312 · Thu 19 Aug 2027
  [
    {"word": "scour", "sentence": "She had to scour the pot for twenty minutes to remove the burnt rice.", "options": ["heat", "dry", "rinse", "scrub"], "answer": 3},
    {"word": "indomitable", "sentence": "The indomitable old swimmer completed her fiftieth Rottnest crossing at seventy-five.", "options": ["tireless", "nervous", "reluctant", "injured"], "answer": 0},
    {"word": "halfhearted", "sentence": "He made a halfhearted attempt to tidy his room, then went back to his game.", "options": ["heroic", "feeble", "noisy", "costly"], "answer": 1},
    {"word": "scatty", "sentence": "Our scatty neighbour once posted her car keys in the letterbox along with the bills.", "options": ["thrifty", "dizzy", "grumpy", "bossy"], "answer": 1},
    {"word": "uppish", "sentence": "The uppish new manager refused to eat lunch with the staff.", "options": ["vegan", "busy", "snooty", "shy"], "answer": 2},
    {"word": "hyperbolize", "sentence": "Fishermen tend to hyperbolize, and the 'monster' was barely thirty centimetres.", "options": ["lie low", "embellish", "give up", "whisper"], "answer": 1},
    {"word": "inaidable", "sentence": "Lost in the outback without water, the hikers were inaidable until the helicopter spotted them.", "options": ["cheerful", "careless", "helpless", "sunburnt"], "answer": 2},
  ],
  // #313 · Fri 20 Aug 2027
  [
    {"word": "sharp", "sentence": "The meeting starts at nine o'clock sharp, so don't be late again.", "options": ["tomorrow", "sometimes", "exactly", "roughly"], "answer": 2},
    {"word": "industrious", "sentence": "The industrious ants rebuilt their nest within an hour of the rain.", "options": ["lazy", "tiny", "busy", "angry"], "answer": 2},
    {"word": "harebrained", "sentence": "His harebrained plan to tow an iceberg to Perth never got past the pub.", "options": ["clever", "loopy", "secret", "costly"], "answer": 1},
    {"word": "fogbound", "sentence": "The fogbound airport cancelled every morning flight until well after noon.", "options": ["socked-in", "sunlit", "crowded", "deserted"], "answer": 0},
    {"word": "psephology", "sentence": "A professor of psephology, he could predict every seat on polling night by nine o'clock.", "options": ["bird study", "election study", "skull reading", "handwriting"], "answer": 1},
    {"word": "incontentation", "sentence": "Incontentation spread through the ranks as the pay was delayed again.", "options": ["rumours", "discontent", "influenza", "laughter"], "answer": 1},
    {"word": "infrigidate", "sentence": "Infrigidate the jelly overnight before turning it out onto the plate.", "options": ["stir", "slice", "warm", "chill"], "answer": 3},
  ],
  // #314 · Sat 21 Aug 2027
  [
    {"word": "spar", "sentence": "The two boxers sparred for three rounds in the gym before the real fight.", "options": ["argued", "sailed", "trained", "posed"], "answer": 2},
    {"word": "infuriate", "sentence": "His habit of humming during exams would infuriate the whole class.", "options": ["enrage", "calm", "amuse", "bore"], "answer": 0},
    {"word": "gushy", "sentence": "The gushy review called the café 'a life-changing experience' for a toastie.", "options": ["brief", "anonymous", "scathing", "effusive"], "answer": 3},
    {"word": "lionhearted", "sentence": "The lionhearted surf lifesaver swam out into the rip three times.", "options": ["exhausted", "fearless", "reluctant", "elderly"], "answer": 1},
    {"word": "vilipend", "sentence": "The critic seemed to vilipend every local band, no matter how good.", "options": ["promote", "ignore", "manage", "belittle"], "answer": 3},
    {"word": "inquietation", "sentence": "The inquietation in the henhouse at midnight meant a fox was about.", "options": ["smell", "egg-laying", "silence", "commotion"], "answer": 3},
    {"word": "insperse", "sentence": "Lightly insperse the sponge with icing sugar just before serving it.", "options": ["slice", "bake", "dust", "soak"], "answer": 2},
  ],
  // #315 · Sun 22 Aug 2027
  [
    {"word": "fold", "sentence": "The farmer drove the sheep back into the fold before the storm hit.", "options": ["shed", "pen", "crease", "river"], "answer": 1},
    {"word": "inquisitive", "sentence": "The inquisitive magpie hopped right up to the picnic rug to inspect our sandwiches.", "options": ["noisy", "hungry", "timid", "curious"], "answer": 3},
    {"word": "hearken", "sentence": "Hearken to your grandmother; she has seen more floods than any of us.", "options": ["listen", "return", "object", "write"], "answer": 0},
    {"word": "betroth", "sentence": "The two families agreed to betroth their children when both were still in nappies.", "options": ["baptise", "educate", "engage", "separate"], "answer": 2},
    {"word": "brabbler", "sentence": "The brabbler at the end of the bar picked a fight with anyone who disagreed about the footy.", "options": ["comedian", "bookie", "squabbler", "barman"], "answer": 2},
    {"word": "intenerate", "sentence": "Slow cooking will intenerate even the toughest cut of beef.", "options": ["brown", "toughen", "season", "soften"], "answer": 3},
    {"word": "internuncio", "sentence": "The internuncio carried letters back and forth for the two warring families for a decade.", "options": ["bodyguard", "lawyer", "go-between", "priest"], "answer": 2},
  ],
  // #316 · Mon 23 Aug 2027
  [
    {"word": "foot", "sentence": "His parents agreed to foot the bill for the whole wedding, band and all.", "options": ["lose", "query", "split", "pay"], "answer": 3},
    {"word": "insinuate", "sentence": "Are you trying to insinuate that I ate the last Tim Tam?", "options": ["imply", "forget", "deny", "prove"], "answer": 0},
    {"word": "heartrending", "sentence": "The heartrending photos of the flood victims prompted millions in donations.", "options": ["blurry", "cheerful", "staged", "harrowing"], "answer": 3},
    {"word": "bighearted", "sentence": "The bighearted publican fed every firefighter in town for free during the bushfires.", "options": ["wealthy", "generous", "exhausted", "grumpy"], "answer": 1},
    {"word": "clinquant", "sentence": "The clinquant costumes of the pantomime dames were visible from the back row.", "options": ["colourless", "glittering", "borrowed", "moth-eaten"], "answer": 1},
    {"word": "inusitate", "sentence": "An inusitate silence fell over the normally rowdy classroom when the principal walked in unannounced.", "options": ["awkward", "welcome", "unusual", "brief"], "answer": 2},
    {"word": "invalescence", "sentence": "After a winter of illness, his invalescence returned with the spring sunshine.", "options": ["gloom", "appetite", "vigour", "cough"], "answer": 2},
  ],
  // #317 · Tue 24 Aug 2027
  [
    {"word": "gauge", "sentence": "It was hard to gauge the mood of the crowd from the back of the hall.", "options": ["ignore", "change", "lift", "judge"], "answer": 3},
    {"word": "insufferable", "sentence": "The insufferable know-all at the trivia night argued with the quizmaster about every answer.", "options": ["charming", "shy", "unbearable", "quietly spoken"], "answer": 2},
    {"word": "hobnob", "sentence": "The minister spent the evening hobnobbing with donors at a harbourside fundraiser.", "options": ["dancing", "sulking", "mingling", "arguing"], "answer": 2},
    {"word": "bootlicking", "sentence": "The bootlicking assistant laughed at every one of the CEO's terrible jokes.", "options": ["sleepy", "fawning", "honest", "sarcastic"], "answer": 1},
    {"word": "dolour", "sentence": "The dolour in her voice when she spoke of the farm was impossible to miss.", "options": ["sorrow", "anger", "accent", "pride"], "answer": 0},
    {"word": "jenneting", "sentence": "Gran picked jennetings from the old tree in December to bake into pies.", "options": ["quinces", "plums", "apples", "figs"], "answer": 2},
    {"word": "jument", "sentence": "The jument plodded up the mountain track under a load of firewood.", "options": ["lumberjack", "sheepdog", "pack animal", "tractor"], "answer": 2},
  ],
  // #318 · Wed 25 Aug 2027
  [
    {"word": "ground", "sentence": "Freshly ground black pepper makes all the difference to a good steak.", "options": ["cooked", "soil", "floor", "milled"], "answer": 3},
    {"word": "interminable", "sentence": "The interminable speeches at the awards night ran for three hours.", "options": ["endless", "brief", "witty", "moving"], "answer": 0},
    {"word": "hotheaded", "sentence": "The hotheaded young striker was sent off for arguing with the referee.", "options": ["timid", "fiery", "veteran", "injured"], "answer": 1},
    {"word": "bullheaded", "sentence": "The bullheaded captain refused to change tactics even when they were losing by forty.", "options": ["injured", "obstinate", "cautious", "inspired"], "answer": 1},
    {"word": "footle", "sentence": "Stop footling about and help me carry the shopping in.", "options": ["rushing", "arguing", "mucking", "sulking"], "answer": 2},
    {"word": "knurry", "sentence": "The knurry old timber was too hard to work with a hand saw.", "options": ["gnarly", "pale", "damp", "smooth"], "answer": 0},
    {"word": "lamish", "sentence": "The lamish old greyhound still insisted on joining us for the morning walk.", "options": ["a bit grumpy", "a bit fat", "a bit lame", "a bit deaf"], "answer": 2},
  ],
  // #319 · Thu 26 Aug 2027
  [
    {"word": "hit", "sentence": "The song was a hit in Australia but sank without a trace everywhere else.", "options": ["punch", "success", "secret", "remix"], "answer": 1},
    {"word": "irksome", "sentence": "The irksome buzz of the fluorescent light gave her a headache by lunchtime.", "options": ["annoying", "faint", "soothing", "musical"], "answer": 0},
    {"word": "huffy", "sentence": "She got huffy when nobody at work noticed her new haircut.", "options": ["chatty", "sleepy", "touchy", "giggly"], "answer": 2},
    {"word": "countrified", "sentence": "The city cousins teased him for his countrified accent and his RM Williams boots.", "options": ["nasal", "posh", "rustic", "foreign"], "answer": 2},
    {"word": "galoot", "sentence": "Some galoot reversed his trailer into the boat ramp and blocked it for an hour.", "options": ["tourist", "fisherman", "ranger", "clumsy oaf"], "answer": 3},
    {"word": "lanary", "sentence": "The bales were stacked to the rafters in the lanary, waiting for the trucks.", "options": ["dairy", "grain silo", "woodshed", "wool store"], "answer": 3},
    {"word": "laniferous", "sentence": "Merinos are the most laniferous sheep in the country, shorn of up to twelve kilos at a time.", "options": ["woolly", "valuable", "stubborn", "nervous"], "answer": 0},
  ],
  // #320 · Fri 27 Aug 2027
  [
    {"word": "jumper", "sentence": "Grandma knitted me a purple jumper with a koala on the front.", "options": ["dress", "athlete", "scarf", "sweater"], "answer": 3},
    {"word": "jaunty", "sentence": "He walked into the office with a jaunty step after his holiday in Fiji.", "options": ["weary", "careful", "bouncy", "limping"], "answer": 2},
    {"word": "hurtle", "sentence": "Cars hurtle down the hill towards the school crossing at all hours.", "options": ["crawl", "park", "turn", "speed"], "answer": 3},
    {"word": "croaky", "sentence": "Her voice was croaky after singing karaoke until two in the morning.", "options": ["shrill", "hoarse", "sweet", "steady"], "answer": 1},
    {"word": "gaudery", "sentence": "The gaudery of the Christmas windows in the city drew crowds all December.", "options": ["finery", "closure", "emptiness", "theft"], "answer": 0},
    {"word": "largifical", "sentence": "His largifical tips made him the waiters' favourite customer at every restaurant.", "options": ["generous", "foreign", "secret", "stingy"], "answer": 0},
    {"word": "latrant", "sentence": "The latrant dogs next door kept the whole street awake until dawn.", "options": ["sleeping", "starving", "barking", "escaped"], "answer": 2},
  ],
  // #321 · Sat 28 Aug 2027
  [
    {"word": "launch", "sentence": "The rescuers took a police launch out to the stranded yacht.", "options": ["helicopter", "car", "drone", "motorboat"], "answer": 3},
    {"word": "jittery", "sentence": "The jittery horse shied at every plastic bag along the fence line.", "options": ["lame", "hungry", "nervous", "calm"], "answer": 2},
    {"word": "idolatrous", "sentence": "The idolatrous fans built a shrine to the singer outside his childhood home.", "options": ["casual", "angry", "former", "adoring"], "answer": 3},
    {"word": "dandified", "sentence": "The dandified young man spent more time on his moustache than on his studies.", "options": ["foppish", "sporty", "scruffy", "studious"], "answer": 0},
    {"word": "gloam", "sentence": "In the gloam, the kangaroos came down to graze on the golf course.", "options": ["twilight", "rain", "morning", "heat"], "answer": 0},
    {"word": "leasow", "sentence": "The cows were moved to the far leasow, where the clover was thicker.", "options": ["dairy", "field", "barn", "creek"], "answer": 1},
    {"word": "liflode", "sentence": "Fishing had been the family's liflode for four generations on Kangaroo Island.", "options": ["holiday", "curse", "living", "hobby"], "answer": 2},
  ],
  // #322 · Sun 29 Aug 2027
  [
    {"word": "pole", "sentence": "The two candidates are at opposite poles on the question of the dam.", "options": ["booths", "parties", "towns", "ends"], "answer": 3},
    {"word": "jubilant", "sentence": "The jubilant crowd poured onto the ground after the final siren.", "options": ["sober", "gloomy", "tiny", "joyful"], "answer": 3},
    {"word": "ignoble", "sentence": "He took the ignoble decision to blame his own team for the loss.", "options": ["base", "sudden", "brave", "wise"], "answer": 0},
    {"word": "earsplitting", "sentence": "The earsplitting shriek of the smoke alarm sent the cat up the curtains.", "options": ["musical", "piercing", "faint", "gentle"], "answer": 1},
    {"word": "gobbet", "sentence": "The seagull snatched a gobbet of fish from the trawler's deck.", "options": ["feather", "net", "chunk", "bucket"], "answer": 2},
    {"word": "lobspound", "sentence": "The pickpocket spent a month in the lobspound for stealing the mayor's watch.", "options": ["lock-up", "stocks", "army", "workhouse"], "answer": 0},
    {"word": "loresman", "sentence": "The old loresman taught the boys to read the stars, the tides and the clouds.", "options": ["shepherd", "fisherman", "sailor", "teacher"], "answer": 3},
  ],
  // #323 · Mon 30 Aug 2027
  [
    {"word": "shoal", "sentence": "A huge shoal of whiting flashed silver beneath the jetty at Brighton.", "options": ["bucket", "sandbar", "net", "school"], "answer": 3},
    {"word": "knotty", "sentence": "The council faced the knotty problem of where to put the new tip.", "options": ["tricky", "simple", "costly", "ancient"], "answer": 0},
    {"word": "impish", "sentence": "The toddler gave an impish grin and dropped the phone into the toilet.", "options": ["cheeky", "toothless", "sleepy", "guilty"], "answer": 0},
    {"word": "encumber", "sentence": "Don't encumber yourself with a heavy pack on the first day of the trek.", "options": ["spoil", "amuse", "burden", "equip"], "answer": 2},
    {"word": "gruntle", "sentence": "Dad would gruntle all the way through the shopping centre car park.", "options": ["sneeze", "grunt", "sing", "whistle"], "answer": 1},
    {"word": "luculent", "sentence": "Her luculent explanation finally made sense of the tax return.", "options": ["lengthy", "rude", "lucid", "muddled"], "answer": 2},
    {"word": "luteous", "sentence": "The luteous glow of the streetlights made everyone look slightly ill.", "options": ["bluish", "greenish", "yellowish", "pinkish"], "answer": 2},
  ],
  // #324 · Tue 31 Aug 2027
  [
    {"word": "sling", "sentence": "He wore his arm in a sling for six weeks after falling off the trampoline.", "options": ["pocket", "strap", "plaster", "catapult"], "answer": 1},
    {"word": "laborious", "sentence": "Copying the old parish records by hand was a laborious task.", "options": ["tiring", "pleasant", "quick", "illegal"], "answer": 0},
    {"word": "impute", "sentence": "It would be wrong to impute any bad motive to the volunteers.", "options": ["deny", "explain", "reward", "ascribe"], "answer": 3},
    {"word": "enthral", "sentence": "The storyteller would enthral the children for an hour with tales of bunyips.", "options": ["scare", "puzzle", "charm", "bore"], "answer": 2},
    {"word": "guggle", "sentence": "The baby began to guggle happily in her highchair as Dad pulled faces.", "options": ["sleep", "wail", "cough", "gurgle"], "answer": 3},
    {"word": "maledicency", "sentence": "The maledicency of the anonymous letters shocked even the hardened detective.", "options": ["politeness", "slander", "spelling", "length"], "answer": 1},
    {"word": "maltalent", "sentence": "There was no maltalent between the brothers, despite the fight over the farm.", "options": ["ill will", "money", "humour", "contact"], "answer": 0},
  ],
  // #325 · Wed 01 Sep 2027
  [
    {"word": "snipe", "sentence": "Critics continued to snipe at the coach from the commentary box.", "options": ["carp", "cheer", "nod", "wave"], "answer": 0},
    {"word": "languish", "sentence": "The bill continued to languish in committee for three years.", "options": ["pass", "stall", "vanish", "thrive"], "answer": 1},
    {"word": "incarcerate", "sentence": "The court decided to incarcerate him for eighteen months for the armed robbery.", "options": ["deport", "acquit", "jail", "fine"], "answer": 2},
    {"word": "equanimous", "sentence": "She remained equanimous even when the caterers turned up three hours late.", "options": ["tearful", "hungry", "furious", "calm"], "answer": 3},
    {"word": "hagridden", "sentence": "Hagridden by debts, the old farmer finally sold up and moved to the coast.", "options": ["tormented", "blessed", "inspired", "untroubled"], "answer": 0},
    {"word": "mappery", "sentence": "His mappery was so precise that the army used his charts for fifty years.", "options": ["spying", "gardening", "map-making", "painting"], "answer": 2},
    {"word": "marcor", "sentence": "A slow marcor set in, and by spring the old horse was skin and bone.", "options": ["decline", "frost", "growth", "recovery"], "answer": 0},
  ],
  // #326 · Thu 02 Sep 2027
  [
    {"word": "tar", "sentence": "The workers spread hot tar over the potholes on the highway.", "options": ["bitumen", "gravel", "cement", "sailor"], "answer": 0},
    {"word": "leery", "sentence": "The farmer was leery of the city slickers offering to buy his land.", "options": ["proud", "jealous", "fond", "wary"], "answer": 3},
    {"word": "inculcate", "sentence": "Grandma tried to inculcate good manners in us with endless reminders.", "options": ["test", "mock", "instil", "excuse"], "answer": 2},
    {"word": "exhilarate", "sentence": "The first ride on the rollercoaster would exhilarate even the grumpiest teenager.", "options": ["thrill", "bore", "tire", "sicken"], "answer": 0},
    {"word": "hifalutin", "sentence": "His hifalutin talk about 'artisanal mouthfeel' irritated everyone at the barbecue.", "options": ["honest", "mumbled", "la-di-da", "drunken"], "answer": 2},
    {"word": "marrowfat", "sentence": "Grandpa grew marrowfat in the back garden and shelled them on the porch.", "options": ["nuts", "peas", "pumpkins", "beans"], "answer": 1},
    {"word": "masterdom", "sentence": "The pirate captain's masterdom over the island lasted twenty years.", "options": ["map", "search", "fear", "rule"], "answer": 3},
  ],
  // #327 · Fri 03 Sep 2027
  [
    {"word": "stud", "sentence": "The racehorse retired to stud after winning the Cox Plate.", "options": ["breeding", "earring", "racing", "pasture"], "answer": 0},
    {"word": "lilting", "sentence": "Her lilting Irish accent made even the shipping forecast sound like poetry.", "options": ["musical", "mumbled", "harsh", "flat"], "answer": 0},
    {"word": "indecipherable", "sentence": "The doctor's indecipherable scrawl meant the chemist had to call to check.", "options": ["printed", "illegible", "faded", "elegant"], "answer": 1},
    {"word": "forbearing", "sentence": "The forbearing teacher answered the same question twelve times without losing her temper.", "options": ["weary", "absent", "patient", "strict"], "answer": 2},
    {"word": "holloa", "sentence": "The huntsman gave a holloa as the fox broke cover.", "options": ["sneeze", "whisper", "salute", "shout"], "answer": 3},
    {"word": "maybloom", "sentence": "The lanes of Devon were white with maybloom in early summer.", "options": ["dust", "daisies", "hawthorn", "snow"], "answer": 2},
    {"word": "mellay", "sentence": "A mellay broke out at the jumble sale over the last box of vinyl records.", "options": ["parade", "scuffle", "silence", "auction"], "answer": 1},
  ],
  // #328 · Sat 04 Sep 2027
  [
    {"word": "strike", "sentence": "The judge told the clerk to strike the remark from the record.", "options": ["hit", "add", "repeat", "delete"], "answer": 3},
    {"word": "loath", "sentence": "He was loath to leave the warm pub for the freezing walk home.", "options": ["too drunk", "determined", "unwilling", "in a hurry"], "answer": 2},
    {"word": "ineluctable", "sentence": "The ineluctable march of time had turned the rock star into a grandfather.", "options": ["embarrassing", "unexpected", "reversible", "unavoidable"], "answer": 3},
    {"word": "fourscore", "sentence": "The old soldier had lived fourscore years and never once seen the sea.", "options": ["eighty", "sixty", "hundred", "forty"], "answer": 0},
    {"word": "immure", "sentence": "The hermit chose to immure himself in a hut on the edge of the forest.", "options": ["wear out", "shut away", "show off", "tire out"], "answer": 1},
    {"word": "mercify", "sentence": "The judge refused to mercify the thief, despite his tears and his mother's letter.", "options": ["question", "blame", "pity", "fine"], "answer": 2},
    {"word": "metewand", "sentence": "The surveyor laid his metewand along the boundary and scratched his head.", "options": ["walking stick", "fishing rod", "measuring rod", "spirit level"], "answer": 2},
  ],
  // #329 · Sun 05 Sep 2027
  [
    {"word": "tattoo", "sentence": "The military tattoo at Edinburgh Castle drew crowds from around the world.", "options": ["parade", "banquet", "ink design", "cannon"], "answer": 0},
    {"word": "loiter", "sentence": "Teenagers would loiter outside the servo late into the night.", "options": ["hang around", "work shifts", "queue up", "pick fights"], "answer": 0},
    {"word": "inextricable", "sentence": "The town's fortunes were inextricable from the fate of the mine.", "options": ["recent", "distinct", "bound up", "hidden"], "answer": 2},
    {"word": "furbish", "sentence": "They worked all summer to furbish the old homestead for the family reunion.", "options": ["demolish", "sell", "insure", "spruce up"], "answer": 3},
    {"word": "inamorato", "sentence": "Her secret inamorato turned out to be the shy librarian from the council.", "options": ["neighbour", "sweetheart", "accountant", "stepbrother"], "answer": 1},
    {"word": "michery", "sentence": "The shopkeeper suspected michery when the till came up twenty dollars short.", "options": ["luck", "magic", "error", "theft"], "answer": 3},
    {"word": "misspense", "sentence": "His constant misspense on gadgets left nothing for the rent.", "options": ["budgeting", "earning", "waste", "saving"], "answer": 2},
  ],
  // #330 · Mon 06 Sep 2027
  [
    {"word": "trunk", "sentence": "The boxer took a heavy blow to the trunk and doubled over in pain.", "options": ["nose", "chin", "torso", "knee"], "answer": 2},
    {"word": "lurid", "sentence": "The tabloid printed lurid details of the celebrity divorce on page one.", "options": ["accurate", "brief", "shocking", "dull"], "answer": 2},
    {"word": "iniquitous", "sentence": "The iniquitous tax fell hardest on the poorest families in the district.", "options": ["fair", "unjust", "modest", "temporary"], "answer": 1},
    {"word": "goateed", "sentence": "A goateed barista handed over my flat white with a flourish.", "options": ["bald", "bearded", "tattooed", "grumpy"], "answer": 1},
    {"word": "incommodious", "sentence": "The incommodious caravan barely fitted two people, let alone four kids and a dog.", "options": ["spacious", "luxurious", "rusty", "cramped"], "answer": 3},
    {"word": "moliminous", "sentence": "The moliminous report ran to a thousand pages and sank without trace.", "options": ["weighty", "slim", "witty", "secret"], "answer": 0},
    {"word": "montigenous", "sentence": "The montigenous honey from the Alps was the most expensive jar in the shop.", "options": ["city-bred", "alpine", "lowland", "sea-salted"], "answer": 1},
  ],
  // #331 · Tue 07 Sep 2027
  [
    {"word": "wage", "sentence": "The two families waged a bitter feud over the boundary fence for decades.", "options": ["ended", "fought", "hid", "paid"], "answer": 1},
    {"word": "luscious", "sentence": "The luscious Bowen mangoes dripped sweet juice down our arms.", "options": ["bruised", "sour", "unripe", "juicy"], "answer": 3},
    {"word": "insuperable", "sentence": "The language barrier proved insuperable, and the deal fell through.", "options": ["easily solved", "insurmountable", "rather amusing", "quite temporary"], "answer": 1},
    {"word": "insatiate", "sentence": "His insatiate appetite for gossip kept the whole street on edge.", "options": ["secret", "fading", "endless", "modest"], "answer": 2},
    {"word": "insalubrious", "sentence": "The insalubrious boarding house had rats in the kitchen and mould in every room.", "options": ["crowded", "luxurious", "unhealthy", "historic"], "answer": 2},
    {"word": "mountance", "sentence": "The mountance of rain that fell overnight flooded half the town.", "options": ["amount", "sound", "smell", "warmth"], "answer": 0},
    {"word": "multanimous", "sentence": "A multanimous genius, she painted, composed, coded and ran a bakery.", "options": ["many-sided", "lazy", "one-track", "famous"], "answer": 0},
  ],
  // #332 · Wed 08 Sep 2027
  [
    {"word": "wick", "sentence": "She trimmed the candle's wick so it wouldn't smoke during dinner.", "options": ["string", "base", "wax", "flame"], "answer": 0},
    {"word": "macabre", "sentence": "The museum had a macabre collection of shrunken heads and medieval torture devices.", "options": ["valuable", "gruesome", "charming", "small"], "answer": 1},
    {"word": "internecine", "sentence": "The party tore itself apart in an internecine feud that lasted three years.", "options": ["friendly", "internal", "foreign", "brief"], "answer": 1},
    {"word": "lowborn", "sentence": "The lowborn stable boy rose to become the king's most trusted adviser.", "options": ["humble", "noble", "foreign", "lazy"], "answer": 0},
    {"word": "inutile", "sentence": "The inutile gadget sat in its box for three years before going to the op shop.", "options": ["expensive", "stolen", "useless", "fragile"], "answer": 2},
    {"word": "mundify", "sentence": "The nurse began to mundify the wound with saline before stitching it.", "options": ["measure", "photograph", "clean", "bandage"], "answer": 2},
    {"word": "nathless", "sentence": "The road was flooded for a week; nathless, the postie got through every day.", "options": ["because", "therefore", "meanwhile", "still"], "answer": 3},
  ],
  // #333 · Thu 09 Sep 2027
  [
    {"word": "wing", "sentence": "The hospital opened a new children's wing in March with a ribbon-cutting.", "options": ["doctor", "playground", "budget", "section"], "answer": 3},
    {"word": "meddle", "sentence": "Don't meddle in your sister's love life; she can sort it out herself.", "options": ["pry", "believe", "rejoice", "invest"], "answer": 0},
    {"word": "interpolate", "sentence": "The editor would interpolate her own comments into the author's text, in square brackets.", "options": ["translate", "delete", "insert", "underline"], "answer": 2},
    {"word": "vegetate", "sentence": "Instead of studying, he would vegetate on the couch all weekend.", "options": ["garden", "laze", "work", "exercise"], "answer": 1},
    {"word": "knavish", "sentence": "The knavish landlord kept every cent of the bond and blamed the tenants.", "options": ["crooked", "honest", "absent", "elderly"], "answer": 0},
    {"word": "nefast", "sentence": "The nefast plot to poison the king was foiled by his taster.", "options": ["wicked", "comic", "secret", "clever"], "answer": 0},
    {"word": "negotious", "sentence": "The negotious shopkeeper served customers, answered the phone and stocked shelves all at once.", "options": ["very slow", "very rude", "very busy", "very old"], "answer": 2},
  ],
  // #334 · Fri 10 Sep 2027
  [
    {"word": "yard", "sentence": "The sailors climbed out along the yard to reef the sail.", "options": ["metre", "spar", "deck", "garden"], "answer": 1},
    {"word": "melodious", "sentence": "The melodious call of the magpies woke us at dawn.", "options": ["tuneful", "mournful", "harsh", "distant"], "answer": 0},
    {"word": "inundate", "sentence": "Viewers continued to inundate the station with complaints about the ending.", "options": ["thank", "bore", "sue", "flood"], "answer": 3},
    {"word": "unwarrantable", "sentence": "The search of her bag was an unwarrantable intrusion on her privacy.", "options": ["perfectly routine", "very polite", "quite brief", "inexcusable"], "answer": 3},
    {"word": "langsyne", "sentence": "The old men at the pub talked of langsyne, when the town had three banks and a cinema.", "options": ["the footy", "the weather", "days gone by", "the future"], "answer": 2},
    {"word": "nemorous", "sentence": "The nemorous hills behind the town were thick with mountain ash.", "options": ["wooded", "bare", "snowy", "rocky"], "answer": 0},
    {"word": "neurospast", "sentence": "The neurospast danced on its strings while the children shrieked with delight.", "options": ["clown", "puppet", "monkey", "acrobat"], "answer": 1},
  ],
  // #335 · Sat 11 Sep 2027
  [
    {"word": "discount", "sentence": "Don't discount the underdogs; they've won three of their last four.", "options": ["bet on", "fear", "price", "dismiss"], "answer": 3},
    {"word": "misshapen", "sentence": "The misshapen carrots were sold cheaply at the farmers' market.", "options": ["peeled", "organic", "deformed", "frozen"], "answer": 2},
    {"word": "jaundiced", "sentence": "Years in politics had given her a jaundiced view of human nature.", "options": ["scientific", "rosy", "cynical", "tolerant"], "answer": 2},
    {"word": "addlepated", "sentence": "The addlepated professor wore odd shoes to his own retirement dinner.", "options": ["tearful", "dotty", "meticulous", "furious"], "answer": 1},
    {"word": "lunkhead", "sentence": "Some lunkhead tried to fill his diesel ute with petrol.", "options": ["cop", "dope", "mechanic", "genius"], "answer": 1},
    {"word": "nocument", "sentence": "The new freeway would cause great nocument to the wetlands and the birds that nest there.", "options": ["beauty", "access", "harm", "benefit"], "answer": 2},
    {"word": "noiance", "sentence": "The barking dog was a constant noiance to the whole street.", "options": ["nuisance", "mystery", "danger", "comfort"], "answer": 0},
  ],
  // #336 · Sun 12 Sep 2027
  [
    {"word": "fit", "sentence": "She laughed so hard at the joke that she had a coughing fit.", "options": ["pain", "shape", "bout", "habit"], "answer": 2},
    {"word": "monotonous", "sentence": "The monotonous drone of the ceiling fan sent him to sleep.", "options": ["shrill", "musical", "dull", "rattling"], "answer": 2},
    {"word": "juxtapose", "sentence": "The exhibition would juxtapose old photos of the town with new ones taken from the same spots.", "options": ["set side by side", "hide away", "combine into one", "sell off"], "answer": 0},
    {"word": "affright", "sentence": "The sudden thunderclap would affright the horses in the paddock.", "options": ["summon", "scare", "wake", "soothe"], "answer": 1},
    {"word": "quodlibet", "sentence": "The band finished with a quodlibet, mashing up three Christmas carols at once.", "options": ["medley", "ballad", "solo", "march"], "answer": 0},
    {"word": "nourice", "sentence": "The baby's nourice rocked her to sleep in the east wing each afternoon.", "options": ["cook", "tutor", "aunt", "nurse"], "answer": 3},
    {"word": "nubiferous", "sentence": "The nubiferous westerly rolled in, and by noon the sky was grey from end to end.", "options": ["dust-carrying", "salt-laden", "heat-bearing", "cloud-bearing"], "answer": 3},
  ],
  // #337 · Mon 13 Sep 2027
  [
    {"word": "brief", "sentence": "The barrister read through her brief on the train to court.", "options": ["underwear", "novel", "case notes", "lunch"], "answer": 2},
    {"word": "muddled", "sentence": "His muddled directions took us through three suburbs before we found the hall.", "options": ["confused", "polite", "precise", "hurried"], "answer": 0},
    {"word": "kibosh", "sentence": "The council put the kibosh on the music festival after complaints about noise.", "options": ["budget", "spotlight", "seal", "stop"], "answer": 3},
    {"word": "alarum", "sentence": "The alarum sounded from the castle tower as the enemy appeared on the hill.", "options": ["fanfare", "church bell", "dinner bell", "alarm call"], "answer": 3},
    {"word": "weltschmerz", "sentence": "A sense of weltschmerz settled over him as he read the evening news.", "options": ["fear of missing out", "world-weariness", "homesickness", "road rage"], "answer": 1},
    {"word": "nundination", "sentence": "Saturday was given over to nundination in the town square, with stalls of every kind.", "options": ["buying and selling", "feasting and drinking", "singing and dancing", "praying and fasting"], "answer": 0},
    {"word": "obtemper", "sentence": "The soldiers were bound to obtemper every order, however foolish.", "options": ["ignore", "question", "obey", "forget"], "answer": 2},
  ],
  // #338 · Tue 14 Sep 2027
  [
    {"word": "bust", "sentence": "Police made a major drug bust at the docks in Fremantle last night.", "options": ["raid", "statue", "deal", "shipment"], "answer": 0},
    {"word": "muggy", "sentence": "It was a muggy February night, and nobody could sleep.", "options": ["frosty", "starry", "windy", "humid"], "answer": 3},
    {"word": "lacerate", "sentence": "Barbed wire can badly lacerate a horse's legs if it panics in the paddock.", "options": ["trap", "slash", "strengthen", "tangle"], "answer": 1},
    {"word": "ambuscade", "sentence": "The rebels set an ambuscade in the narrow mountain pass at dawn.", "options": ["feast", "camp", "truce", "ambush"], "answer": 3},
    {"word": "wordmonger", "sentence": "The wordmonger filled forty pages without saying anything at all.", "options": ["windbag", "editor", "poet", "printer"], "answer": 0},
    {"word": "occision", "sentence": "The occision of the king's favourite falcon sent the court into mourning.", "options": ["escape", "hatching", "capture", "killing"], "answer": 3},
    {"word": "odible", "sentence": "His odible habit of chewing with his mouth open put everyone off their dinner.", "options": ["harmless", "secret", "hateful", "charming"], "answer": 2},
  ],
  // #339 · Wed 15 Sep 2027
  [
    {"word": "cap", "sentence": "The government put a cap on rent increases of five per cent a year.", "options": ["hat", "limit", "tax", "review"], "answer": 1},
    {"word": "mushy", "sentence": "The mushy peas were the only vegetable on the pub's menu.", "options": ["pulpy", "crunchy", "frozen", "spicy"], "answer": 0},
    {"word": "languorous", "sentence": "They spent a languorous afternoon by the pool, barely moving except to reach for a drink.", "options": ["tense", "chilly", "lazy", "hectic"], "answer": 2},
    {"word": "anchorite", "sentence": "The anchorite had lived alone in a cave above the river for thirty years.", "options": ["outlaw", "pilgrim", "fisherman", "hermit"], "answer": 3},
    {"word": "woolgatherer", "sentence": "The woolgatherer at the back of the class was staring out the window again.", "options": ["class clown", "troublemaker", "daydreamer", "teacher's pet"], "answer": 2},
    {"word": "odorament", "sentence": "The odorament she wore could be detected three rows back at the opera.", "options": ["lorgnette", "tiara", "perfume", "gown"], "answer": 2},
    {"word": "olifant", "sentence": "The circus olifant lifted one huge foot and bowed to the crowd.", "options": ["jumbo", "pony", "bear", "camel"], "answer": 0},
  ],
  // #340 · Thu 16 Sep 2027
  [
    {"word": "card", "sentence": "Uncle Mick is a real card; he had the whole wedding in stitches.", "options": ["bore", "drunk", "joker", "grump"], "answer": 2},
    {"word": "musty", "sentence": "The musty smell of the old caravan hit us as soon as we opened the door.", "options": ["fresh", "sweet", "stale", "smoky"], "answer": 2},
    {"word": "laudatory", "sentence": "The review was so laudatory that the author suspected her mother had written it.", "options": ["glowing", "confused", "short", "harsh"], "answer": 0},
    {"word": "acerbity", "sentence": "The acerbity of her reviews made restaurant owners dread her visits.", "options": ["brevity", "kindness", "sweetness", "sharpness"], "answer": 3},
    {"word": "playfellow", "sentence": "My old playfellow from primary school now runs a winery in the Hunter.", "options": ["first teacher", "old mate", "bully", "older cousin"], "answer": 1},
    {"word": "opiferous", "sentence": "The opiferous arrival of the SES crew was greeted with cheers.", "options": ["unexpected", "noisy", "helpful", "late"], "answer": 2},
    {"word": "opplete", "sentence": "The opplete train carriage smelled of wet umbrellas and coffee.", "options": ["freezing", "packed", "first-class", "empty"], "answer": 1},
  ],
  // #341 · Fri 17 Sep 2027
  [
    {"word": "copper", "sentence": "The copper on the beat knew every shopkeeper by name.", "options": ["cop", "coin", "metal worker", "tramp"], "answer": 0},
    {"word": "natty", "sentence": "The natty old gent wore a bow tie and a carnation to the races.", "options": ["grumpy", "stylish", "shabby", "tipsy"], "answer": 1},
    {"word": "lovelorn", "sentence": "The lovelorn teenager wrote poems about the girl at the bus stop.", "options": ["studious", "grumpy", "sporty", "pining"], "answer": 3},
    {"word": "brouhaha", "sentence": "There was a huge brouhaha when the council tried to cut down the old fig tree.", "options": ["inquiry", "silence", "uproar", "party"], "answer": 2},
    {"word": "potholer", "sentence": "The potholer squeezed through a gap no wider than a letterbox.", "options": ["road worker", "caver", "burglar", "plumber"], "answer": 1},
    {"word": "oppugnation", "sentence": "The council's plan met fierce oppugnation from residents at the town hall.", "options": ["support", "resistance", "praise", "curiosity"], "answer": 1},
    {"word": "opuscule", "sentence": "The poet's final opuscule was just eight pages long but won every prize.", "options": ["long novel", "contract", "short work", "obituary"], "answer": 2},
  ],
  // #342 · Sat 18 Sep 2027
  [
    {"word": "corn", "sentence": "His new boots gave him a painful corn on his little toe.", "options": ["callus", "splinter", "kernel", "grain"], "answer": 0},
    {"word": "nonsensical", "sentence": "The instructions were nonsensical, having been translated badly from three other languages.", "options": ["helpful", "colourful", "garbled", "brief"], "answer": 2},
    {"word": "luxuriate", "sentence": "After the hike, she would luxuriate in a hot bath for an hour.", "options": ["wallow", "shiver", "read", "doze"], "answer": 0},
    {"word": "codger", "sentence": "The old codger at the bowls club still played every Tuesday at ninety-four.", "options": ["referee", "coach", "barman", "geezer"], "answer": 3},
    {"word": "quaquaversal", "sentence": "The quaquaversal signpost at the crossroads showed the way to twelve different towns.", "options": ["repainted", "half-sunk", "leaning", "many-armed"], "answer": 3},
    {"word": "orchesography", "sentence": "Her orchesography described every step of the old bush dances in loving detail.", "options": ["cookbook", "dance manual", "hymn book", "travel diary"], "answer": 1},
    {"word": "orisont", "sentence": "The ship sank slowly below the orisont until only its smoke was visible.", "options": ["clouds", "horizon", "headland", "waves"], "answer": 1},
  ],
  // #343 · Sun 19 Sep 2027
  [
    {"word": "crank", "sentence": "The local crank wrote to the paper every week about fluoride in the water.", "options": ["doctor", "editor", "mayor", "oddball"], "answer": 3},
    {"word": "noxious", "sentence": "Noxious fumes from the factory drifted over the school oval.", "options": ["toxic", "fragrant", "faint", "harmless"], "answer": 0},
    {"word": "malodorous", "sentence": "The malodorous bin had been sitting in the sun for a week.", "options": ["empty", "dented", "fetid", "shiny"], "answer": 2},
    {"word": "drollery", "sentence": "His drollery kept the whole dinner party laughing until midnight.", "options": ["cooking", "snoring", "silence", "wit"], "answer": 3},
    {"word": "rompish", "sentence": "The rompish puppies tumbled over each other in the long grass.", "options": ["frisky", "sleepy", "timid", "hungry"], "answer": 0},
    {"word": "orology", "sentence": "Her love of orology took her to every peak in the Australian Alps.", "options": ["bird study", "mountain study", "gold prospecting", "ear study"], "answer": 1},
    {"word": "outlope", "sentence": "The family took a short outlope to the coast every Easter long weekend.", "options": ["argument", "feast", "loan", "excursion"], "answer": 3},
  ],
  // #344 · Mon 20 Sep 2027
  [
    {"word": "deal", "sentence": "Dad would deal the cards for a game of five hundred after dinner.", "options": ["handed out", "hid", "cheated", "collected"], "answer": 0},
    {"word": "obliterate", "sentence": "The cyclone would obliterate half the old jetty before dawn on Tuesday.", "options": ["destroy", "flood", "paint", "repair"], "answer": 0},
    {"word": "mangy", "sentence": "A mangy dog slunk around the back of the butcher's shop.", "options": ["pampered", "glossy", "scabby", "fat"], "answer": 2},
    {"word": "embrocation", "sentence": "Grandpa rubbed embrocation into his knees before every bowls match.", "options": ["beer", "liniment", "chalk", "sunscreen"], "answer": 1},
    {"word": "wrathy", "sentence": "The wrathy neighbour stormed over to complain about our leaf blower.", "options": ["furious", "sleepy", "deaf", "grateful"], "answer": 0},
    {"word": "outrecuidance", "sentence": "The outrecuidance of the new recruit, who called the general 'mate', was legendary.", "options": ["talent", "loyalty", "cheek", "shyness"], "answer": 2},
    {"word": "overcarking", "sentence": "The overcarking mother rang the school three times before morning tea.", "options": ["wealthy", "forgetful", "relaxed", "fretful"], "answer": 3},
  ],
  // #345 · Tue 21 Sep 2027
  [
    {"word": "drag", "sentence": "The meeting was a drag; nobody could stay awake past the treasurer's report.", "options": ["success", "secret", "riot", "bore"], "answer": 3},
    {"word": "odious", "sentence": "The odious man kicked a dog in front of a busload of schoolchildren.", "options": ["elderly", "hateful", "nervous", "popular"], "answer": 1},
    {"word": "maunder", "sentence": "The old professor would maunder on about Latin verbs until the bell rang.", "options": ["sing", "shout", "test", "ramble"], "answer": 3},
    {"word": "grandee", "sentence": "The grandees of the party gathered in a private room to choose the new leader.", "options": ["volunteers", "rookies", "voters", "bigwigs"], "answer": 3},
    {"word": "xanthous", "sentence": "The xanthous flowers of the wattle lit up the bush in August.", "options": ["yellow", "red", "purple", "white"], "answer": 0},
    {"word": "overlanguaged", "sentence": "The overlanguaged contract ran to ninety pages for a single lawn-mowing job.", "options": ["concise", "wordy", "illegal", "secret"], "answer": 1},
    {"word": "oynoun", "sentence": "Grandma's stew needed one more oynoun, so she sent me to the garden.", "options": ["turnip", "carrot", "onion", "potato"], "answer": 2},
  ],
  // #346 · Wed 22 Sep 2027
  [
    {"word": "dress", "sentence": "The nurse dressed the wound and sent him home with painkillers.", "options": ["clothed", "photographed", "bandaged", "ignored"], "answer": 2},
    {"word": "opinionated", "sentence": "The opinionated taxi driver had a view on everything from interest rates to cricket.", "options": ["silent", "dogmatic", "lost", "very polite"], "answer": 1},
    {"word": "meddlesome", "sentence": "The meddlesome neighbour reported us to the council for having a green roof.", "options": ["jealous", "elderly", "helpful", "nosy"], "answer": 3},
    {"word": "natter", "sentence": "The two grandmothers would natter over the fence for hours about absolutely nothing.", "options": ["knit", "garden", "argue", "chatter"], "answer": 3},
    {"word": "yestereve", "sentence": "Yestereve the wind dropped, and the whole valley went silent.", "options": ["last night", "next week", "at noon", "tomorrow"], "answer": 0},
    {"word": "packhouse", "sentence": "The apples were sorted and boxed in the packhouse before heading to market.", "options": ["orchard", "kitchen", "school", "depot"], "answer": 3},
    {"word": "paideutics", "sentence": "She studied paideutics at university before becoming a primary school teacher.", "options": ["accounting", "education", "law", "botany"], "answer": 1},
  ],
  // #347 · Thu 23 Sep 2027
  [
    {"word": "fence", "sentence": "Police arrested a fence who had been selling stolen jewellery from his garage.", "options": ["neighbour", "burglar", "receiver", "jeweller"], "answer": 2},
    {"word": "ornery", "sentence": "The ornery old mule refused to budge an inch, no matter how we coaxed it.", "options": ["willing", "cranky", "lame", "tired"], "answer": 1},
    {"word": "misanthropic", "sentence": "The misanthropic lighthouse keeper had not spoken to another person in years.", "options": ["hard-working", "short-sighted", "sea-loving", "people-hating"], "answer": 3},
    {"word": "nincompoop", "sentence": "Some nincompoop left the freezer door open, and all the ice cream melted.", "options": ["visitor", "genius", "fool", "thief"], "answer": 2},
    {"word": "winebibber", "sentence": "The winebibber at the end of the table emptied three bottles before the main course.", "options": ["waiter", "tippler", "chef", "teetotaller"], "answer": 1},
    {"word": "palamate", "sentence": "The palamate platypus paddled across the creek with surprising speed.", "options": ["egg-laying", "bill-faced", "furry", "web-footed"], "answer": 3},
    {"word": "pament", "sentence": "The children chalked hopscotch squares on the pament outside the school.", "options": ["footpath", "wall", "playground", "blackboard"], "answer": 0},
  ],
  // #348 · Fri 24 Sep 2027
  [
    {"word": "fire", "sentence": "The company fired forty workers the week before Christmas, without warning.", "options": ["sacked", "paid", "shot", "hired"], "answer": 0},
    {"word": "ostensible", "sentence": "The ostensible reason for the visit was a cup of tea, but she really wanted to borrow the trailer.", "options": ["real", "secret", "urgent", "stated"], "answer": 3},
    {"word": "misconstrue", "sentence": "Please don't misconstrue my silence at the meeting as agreement with the plan.", "options": ["share", "ignore", "misread", "record"], "answer": 2},
    {"word": "pettish", "sentence": "The pettish toddler threw her spoon on the floor when the yoghurt ran out.", "options": ["sleepy", "cross", "quiet", "generous"], "answer": 1},
    {"word": "metheglin", "sentence": "The monks brewed metheglin every autumn and sold it at the abbey gate.", "options": ["spiced mead", "rye bread", "goat's cheese", "candles"], "answer": 0},
    {"word": "panegyris", "sentence": "The whole town turned out for the panegyris in honour of the patron saint.", "options": ["election", "festival", "trial", "funeral"], "answer": 1},
    {"word": "partan", "sentence": "The children caught a partan in a rock pool and named it Gerald.", "options": ["starfish", "crab", "eel", "fish"], "answer": 1},
  ],
  // #349 · Sat 25 Sep 2027
  [
    {"word": "fix", "sentence": "We're in a bit of a fix: the car's broken down and the last ferry leaves in an hour.", "options": ["mood", "queue", "rush", "pickle"], "answer": 3},
    {"word": "painstaking", "sentence": "The painstaking restoration of the old church took eleven years.", "options": ["rushed", "cheap", "careful", "secret"], "answer": 2},
    {"word": "modish", "sentence": "The modish café served avocado on sourdough to queues of influencers.", "options": ["shabby", "trendy", "cheap", "quiet"], "answer": 1},
    {"word": "ruction", "sentence": "There was a ruction at the pub when the umpire walked in.", "options": ["uproar", "toast", "raffle", "silence"], "answer": 0},
    {"word": "momentaneous", "sentence": "There was a momentaneous flash, then the whole street went dark.", "options": ["lasting", "momentary", "blue", "deafening"], "answer": 1},
    {"word": "peragrate", "sentence": "They hoped to peragrate the whole of Africa by bicycle in a single year.", "options": ["travel through", "write a book on", "make a film of", "fly across"], "answer": 0},
    {"word": "perduellion", "sentence": "The general was tried for perduellion after his secret letters to the enemy were found.", "options": ["drunkenness", "theft", "cowardice", "treason"], "answer": 3},
  ],
  // #350 · Sun 26 Sep 2027
  [
    {"word": "float", "sentence": "The company plans to float on the stock exchange next year.", "options": ["close", "sink", "list", "merge"], "answer": 2},
    {"word": "palatial", "sentence": "The rock star's palatial home in Toorak had fourteen bathrooms.", "options": ["grand", "modest", "haunted", "cramped"], "answer": 0},
    {"word": "moonstruck", "sentence": "The moonstruck teenager spent the whole of maths staring at the back of her crush's head.", "options": ["bored", "furious", "lovesick", "sleepy"], "answer": 2},
    {"word": "rigmarole", "sentence": "Getting a new passport involved a whole rigmarole of forms, photos and queues.", "options": ["palaver", "fee", "bribe", "shortcut"], "answer": 0},
    {"word": "murmurous", "sentence": "The murmurous crowd fell silent as the bride appeared at the church door.", "options": ["jeering loudly", "sobbing", "cheering", "whispering"], "answer": 3},
    {"word": "perdulous", "sentence": "The perdulous socks were found, months later, behind the dryer.", "options": ["holey", "lost", "dirty", "new"], "answer": 1},
    {"word": "perquisition", "sentence": "The police carried out a perquisition of the house but found nothing.", "options": ["renovation", "valuation", "search", "survey"], "answer": 2},
  ],
  // #351 · Mon 27 Sep 2027
  [
    {"word": "fork", "sentence": "Take the left fork at the old servo and keep going for ten kilometres.", "options": ["bridge", "utensil", "gate", "branch"], "answer": 3},
    {"word": "pamper", "sentence": "She liked to pamper herself with a massage after every marathon.", "options": ["test", "weigh", "punish", "indulge"], "answer": 3},
    {"word": "mosey", "sentence": "We'll mosey down to the pub after the cricket finishes.", "options": ["race", "amble", "drive", "phone"], "answer": 1},
    {"word": "scallywag", "sentence": "The little scallywag had hidden his sister's shoes in the oven.", "options": ["genius", "angel", "rascal", "bully"], "answer": 2},
    {"word": "mussitate", "sentence": "He would mussitate under his breath whenever the boss gave him another job.", "options": ["whistle", "sing", "mutter", "cheer"], "answer": 2},
    {"word": "persant", "sentence": "The persant cry of the plover warned us off its nest.", "options": ["hoarse", "shrill", "sleepy", "gentle"], "answer": 1},
    {"word": "perspicil", "sentence": "The captain raised his perspicil and scanned the horizon for sails.", "options": ["spyglass", "cutlass", "flag", "sextant"], "answer": 0},
  ],
  // #352 · Tue 28 Sep 2027
  [
    {"word": "grate", "sentence": "His constant whistling began to grate on everyone in the office.", "options": ["rely", "spread", "rest", "jar"], "answer": 3},
    {"word": "patchy", "sentence": "Mobile reception is patchy once you leave the highway near Cobar.", "options": ["spotty", "free", "perfect", "costly"], "answer": 0},
    {"word": "multifarious", "sentence": "Her multifarious interests included beekeeping, kickboxing, medieval poetry and competitive cheese-rolling.", "options": ["secret", "diverse", "costly", "narrow"], "answer": 1},
    {"word": "scrimshank", "sentence": "The soldiers would scrimshank in the canteen whenever the sergeant wasn't looking.", "options": ["march", "drill", "shirk", "salute"], "answer": 2},
    {"word": "nictate", "sentence": "The owl continued to nictate slowly at us from its perch.", "options": ["hoot", "wink", "preen", "glare"], "answer": 1},
    {"word": "pervigilation", "sentence": "The nurses kept up a pervigilation at the old man's bedside through the night.", "options": ["vigil", "argument", "party", "card game"], "answer": 0},
    {"word": "philalethist", "sentence": "A true philalethist, the editor refused to print anything she couldn't verify.", "options": ["truth-lover", "liar", "spin doctor", "gossip"], "answer": 0},
  ],
  // #353 · Wed 29 Sep 2027
  [
    {"word": "grub", "sentence": "The kids were starving and wanted some grub before the movie.", "options": ["toys", "sleep", "food", "money"], "answer": 2},
    {"word": "peeved", "sentence": "She was peeved that nobody had saved her a seat.", "options": ["relieved", "miffed", "puzzled", "pleased"], "answer": 1},
    {"word": "multitudinous", "sentence": "The multitudinous stars over the Nullarbor took our breath away.", "options": ["countless", "falling", "scattered", "faint"], "answer": 0},
    {"word": "skulduggery", "sentence": "There was some skulduggery behind the sudden rezoning of the farmland.", "options": ["red tape", "good planning", "bad luck", "dirty dealing"], "answer": 3},
    {"word": "oenomel", "sentence": "The Greek host served oenomel in small clay cups before the feast.", "options": ["honeyed wine", "spring water", "olive oil", "goat's milk"], "answer": 0},
    {"word": "pickery", "sentence": "The corner store lost hundreds of dollars a year to pickery.", "options": ["spoilage", "petty theft", "rent rises", "bad debts"], "answer": 1},
    {"word": "pilcrow", "sentence": "The editor's red pen added a pilcrow wherever the text needed a break.", "options": ["question mark", "underline", "paragraph mark", "full stop"], "answer": 2},
  ],
  // #354 · Thu 30 Sep 2027
  [
    {"word": "heel", "sentence": "The heel left her stranded at the altar and ran off with the best man's savings.", "options": ["shoe", "groom", "priest", "cad"], "answer": 3},
    {"word": "perky", "sentence": "The perky receptionist greeted everyone with a smile, even at seven in the morning.", "options": ["silent", "grumpy", "chirpy", "sleepy"], "answer": 2},
    {"word": "newfangled", "sentence": "Grandpa refused to use any newfangled gadget, including the microwave.", "options": ["modern", "broken", "antique", "imported"], "answer": 0},
    {"word": "bunkum", "sentence": "The salesman's claims about the miracle mattress were pure bunkum.", "options": ["truth", "hokum", "poetry", "science"], "answer": 1},
    {"word": "pachydermatous", "sentence": "The pachydermatous minister simply smiled through the barrage of criticism.", "options": ["thick-skinned", "tongue-tied", "red-faced", "thin-skinned"], "answer": 0},
    {"word": "plenishing", "sentence": "The newlyweds' plenishing consisted of a mattress, two chairs and a borrowed fridge.", "options": ["wedding gifts", "relatives", "furniture", "savings"], "answer": 2},
    {"word": "plutology", "sentence": "His lectures on plutology explained why the rich keep getting richer.", "options": ["psychology", "geology", "economics", "astronomy"], "answer": 2},
  ],
  // #355 · Fri 01 Oct 2027
  [
    {"word": "hip", "sentence": "Rose hips make a tart jelly that Gran swore kept colds away.", "options": ["petals", "thorns", "berries", "joints"], "answer": 2},
    {"word": "perplexing", "sentence": "The perplexing instructions for the flat-pack wardrobe had no words, only arrows.", "options": ["colourful", "baffling", "brief", "helpful"], "answer": 1},
    {"word": "nuzzle", "sentence": "The foal would nuzzle its mother's neck whenever a stranger came near.", "options": ["nudge", "circle", "bite", "kick"], "answer": 0},
    {"word": "coxcomb", "sentence": "The young coxcomb strutted about the ballroom in a velvet suit and lace cuffs.", "options": ["dandy", "farmer", "soldier", "butler"], "answer": 0},
    {"word": "petrichor", "sentence": "After months of drought, the petrichor that rose from the paddocks made the farmers grin.", "options": ["sound of thunder", "sight of clouds", "taste of dust", "smell of rain"], "answer": 3},
    {"word": "poraille", "sentence": "The new soup kitchen fed the poraille of the parish every Friday.", "options": ["soldiers", "children", "poor", "clergy"], "answer": 2},
    {"word": "potlid", "sentence": "The toddler banged a potlid with a wooden spoon for an hour.", "options": ["drum", "saucepan lid", "highchair", "biscuit tin"], "answer": 1},
  ],
  // #356 · Sat 02 Oct 2027
  [
    {"word": "hook", "sentence": "The song's hook was so catchy that the whole office was humming it by lunch.", "options": ["price", "chorus", "video", "lyrics"], "answer": 1},
    {"word": "perturbed", "sentence": "She was perturbed to find the back door open when she got home.", "options": ["disturbed", "delighted", "amused", "relieved"], "answer": 0},
    {"word": "obtrusive", "sentence": "The new mobile phone tower was an obtrusive eyesore on the ridge.", "options": ["invisible", "charming", "glaring", "temporary"], "answer": 2},
    {"word": "skylarking", "sentence": "The teacher had had enough of the skylarking in the back row.", "options": ["sleeping", "silliness", "studying", "whispering"], "answer": 1},
    {"word": "argy-bargy", "sentence": "There was some argy-bargy at the bus stop over who had been there first.", "options": ["queueing", "singing", "argument", "hugging"], "answer": 2},
    {"word": "poupeton", "sentence": "The ventriloquist's poupeton winked cheekily at the audience between jokes.", "options": ["parrot", "assistant", "monkey", "puppet"], "answer": 3},
    {"word": "pourparler", "sentence": "After weeks of pourparler, the two councils finally agreed to share a tip.", "options": ["public protest", "court battles", "early talks", "silent standoff"], "answer": 2},
  ],
  // #357 · Sun 03 Oct 2027
  [
    {"word": "knot", "sentence": "The yacht was making twelve knots with the wind behind her.", "options": ["crew members", "wave sets", "speed units", "rope tangles"], "answer": 2},
    {"word": "peruse", "sentence": "He sat in the café to peruse the paper over a long black.", "options": ["buy", "sell", "fold", "read"], "answer": 3},
    {"word": "opine", "sentence": "Everyone at the barbecue felt free to opine on the state of the national team.", "options": ["bet", "gamble", "cheer", "comment"], "answer": 3},
    {"word": "whippersnapper", "sentence": "Some young whippersnapper told Grandpa that his car was 'vintage'.", "options": ["policeman", "upstart", "mechanic", "salesman"], "answer": 1},
    {"word": "whigmaleerie", "sentence": "Grandpa's latest whigmaleerie was a solar-powered machine for turning the compost.", "options": ["complaint", "contraption", "confession", "investment"], "answer": 1},
    {"word": "premices", "sentence": "The farmer laid the premices of the harvest on the altar at the church fete.", "options": ["old tools", "best cattle", "first fruits", "rotten apples"], "answer": 2},
    {"word": "pricket", "sentence": "A pricket, its antlers just two short spikes, bolted from the bracken.", "options": ["young deer", "wild boar", "fox cub", "hare"], "answer": 0},
  ],
  // #358 · Mon 04 Oct 2027
  [
    {"word": "lead", "sentence": "The pencil's lead snapped just as she started the exam.", "options": ["casing", "nib", "graphite", "sharpener"], "answer": 2},
    {"word": "pithy", "sentence": "His pithy speech lasted thirty seconds and got the biggest cheer of the night.", "options": ["tearful", "concise", "rambling", "drunken"], "answer": 1},
    {"word": "oracular", "sentence": "The old coach gave an oracular reply: 'The ball is round, and the game is long.'", "options": ["cryptic", "angry", "cheerful", "rude"], "answer": 0},
    {"word": "billingsgate", "sentence": "The fishwives' billingsgate could make even a sailor blush at fifty paces.", "options": ["loud laughter", "foul language", "fresh catch", "bad smell"], "answer": 1},
    {"word": "wigging", "sentence": "He got a proper wigging from the boss for being late three days in a row.", "options": ["promotion", "day off", "pay rise", "rocket"], "answer": 3},
    {"word": "priedieu", "sentence": "The old woman knelt at the priedieu in the corner of her bedroom every night.", "options": ["dressing table", "sewing box", "prayer desk", "fireplace"], "answer": 2},
    {"word": "proditor", "sentence": "The proditor opened the city gates to the enemy at midnight.", "options": ["hero", "guard", "traitor", "priest"], "answer": 2},
  ],
  // #359 · Tue 05 Oct 2027
  [
    {"word": "lime", "sentence": "The farmer spread lime over the paddock to sweeten the acid soil.", "options": ["seed", "manure", "chalky powder", "citrus juice"], "answer": 2},
    {"word": "pliable", "sentence": "The young willow branches were pliable enough to weave into a basket.", "options": ["thorny", "bendy", "brittle", "dead"], "answer": 1},
    {"word": "overweening", "sentence": "His overweening ambition made him plenty of enemies in the party.", "options": ["sudden", "unbridled", "modest", "secret"], "answer": 1},
    {"word": "gubbins", "sentence": "The back of the ute was full of gubbins: rope, tarps, jerry cans and a broken esky.", "options": ["fresh groceries", "camping friends", "farm animals", "odds and ends"], "answer": 3},
    {"word": "misoneism", "sentence": "The club's misoneism meant it was the last in the state to accept credit cards.", "options": ["bad luck", "love of money", "fear of change", "lack of members"], "answer": 2},
    {"word": "propugnacle", "sentence": "The old propugnacle on the headland had guarded the harbour since 1820.", "options": ["fort", "lighthouse", "church", "jail"], "answer": 0},
    {"word": "querimony", "sentence": "Her querimony about the noise reached the council within the hour.", "options": ["praise", "invitation", "complaint", "donation"], "answer": 2},
  ],
  // #360 · Wed 06 Oct 2027
  [
    {"word": "mail", "sentence": "The knight's coat of mail weighed nearly as much as he did.", "options": ["letters", "velvet", "fur", "armour"], "answer": 3},
    {"word": "posthumous", "sentence": "The poet won a posthumous award, three years after the funeral.", "options": ["lifetime", "unanimous", "early-career", "after-death"], "answer": 3},
    {"word": "peevish", "sentence": "The peevish toddler had refused every food except dry toast for a week.", "options": ["sleepy", "chubby", "fretful", "cheerful"], "answer": 2},
    {"word": "poppycock", "sentence": "His claim to have played for the Wallabies was utter poppycock.", "options": ["truth", "modesty", "trivia", "rubbish"], "answer": 3},
    {"word": "natation", "sentence": "Natation was compulsory at the school, and every child had a bronze medallion by Year 6.", "options": ["needlework", "chess", "swimming", "Latin"], "answer": 2},
    {"word": "quickhatch", "sentence": "The trapper's cabin was raided by a quickhatch that stole every scrap of meat.", "options": ["raccoon", "wolverine", "honey badger", "lynx"], "answer": 1},
    {"word": "rabious", "sentence": "The rabious dog strained at its chain as we crept past the gate.", "options": ["fierce", "friendly", "sleepy", "tiny"], "answer": 0},
  ],
  // #361 · Thu 07 Oct 2027
  [
    {"word": "pump", "sentence": "She danced all night in her new satin pumps and woke with blistered feet.", "options": ["stockings", "shoes", "gown", "gloves"], "answer": 1},
    {"word": "precipitous", "sentence": "The track made a precipitous descent to the beach, with ropes for handholds.", "options": ["steep", "sandy", "gentle", "winding"], "answer": 0},
    {"word": "pendulous", "sentence": "Pendulous bunches of grapes hung from the vines in the Barossa.", "options": ["sagging", "green", "tiny", "sour"], "answer": 0},
    {"word": "balderdash", "sentence": "The politician's speech was full of the usual balderdash about 'hard-working families'.", "options": ["insults", "statistics", "jokes", "drivel"], "answer": 3},
    {"word": "vinaceous", "sentence": "She wore a vinaceous velvet gown that matched the shiraz in her glass.", "options": ["pea-green", "wine-red", "snow-white", "sky-blue"], "answer": 1},
    {"word": "radeau", "sentence": "The castaways lashed together a radeau from driftwood and empty barrels.", "options": ["signal", "ladder", "hut", "raft"], "answer": 3},
    {"word": "rament", "sentence": "Fine raments of cedar curled from the carpenter's plane and drifted to the floor.", "options": ["nails", "knotholes", "shavings", "stains"], "answer": 2},
  ],
  // #362 · Fri 08 Oct 2027
  [
    {"word": "smack", "sentence": "A fishing smack sailed into Port Fairy with its hold full of crayfish.", "options": ["boat", "crew", "net", "slap"], "answer": 0},
    {"word": "prescient", "sentence": "Her prescient warning about the bridge came true a week later.", "options": ["prophetic", "half-hearted", "unfounded", "rather vague"], "answer": 0},
    {"word": "peremptory", "sentence": "The boss issued a peremptory order to clear the desks by five.", "options": ["vague", "optional", "curt", "polite"], "answer": 2},
    {"word": "hobnail", "sentence": "The old miners' hobnail boots clattered on the cobblestones at dawn.", "options": ["suede", "studded", "rubber", "wellington"], "answer": 1},
    {"word": "writhen", "sentence": "The writhen branches of the old olive tree looked like arthritic fingers.", "options": ["blossoming", "straight", "pruned", "twisted"], "answer": 3},
    {"word": "recense", "sentence": "The editor would recense every chapter before the book went to the printers.", "options": ["illustrate", "burn", "revise", "sell"], "answer": 2},
    {"word": "redition", "sentence": "The redition of the stolen painting was celebrated with a party at the gallery.", "options": ["auction", "theft", "forgery", "return"], "answer": 3},
  ],
  // #363 · Sat 09 Oct 2027
  [
    {"word": "sock", "sentence": "He socked the bully on the nose and was suspended for a week.", "options": ["warned", "tickled", "punched", "photographed"], "answer": 2},
    {"word": "prodigious", "sentence": "The pianist showed a prodigious talent at the age of four.", "options": ["rare", "modest", "average", "hidden"], "answer": 0},
    {"word": "portend", "sentence": "The black clouds seemed to portend a wild night ahead for the campers.", "options": ["foretell", "prevent", "ignore", "follow"], "answer": 0},
    {"word": "fusspot", "sentence": "The fusspot at table six sent his soup back three times.", "options": ["tourist", "pedant", "glutton", "regular"], "answer": 1},
    {"word": "wrawl", "sentence": "The tomcats would wrawl on the back fence half the night.", "options": ["yowl", "hunt", "purr", "sleep"], "answer": 0},
    {"word": "regious", "sentence": "The regious procession wound slowly through the town, trumpets blaring and flags flying.", "options": ["school", "funeral", "circus", "royal"], "answer": 3},
    {"word": "remercie", "sentence": "She stood up to remercie the volunteers before the cake was cut.", "options": ["count", "scold", "thank", "pay"], "answer": 2},
  ],
  // #364 · Sun 10 Oct 2027
  [
    {"word": "type", "sentence": "He's not my type; he thinks camping means a hotel without room service.", "options": ["kind", "font", "boss", "brother"], "answer": 0},
    {"word": "profane", "sentence": "The parrot's profane vocabulary got it banned from the pet shop window.", "options": ["musical", "French", "huge", "rude"], "answer": 3},
    {"word": "muzzy", "sentence": "Still muzzy from the cold medicine, he put salt in his tea.", "options": ["cheerful", "alert", "furious", "foggy"], "answer": 3},
    {"word": "busybody", "sentence": "The local busybody knew everyone's business before they did, and told the whole street.", "options": ["hermit", "meddler", "mayor", "postie"], "answer": 1},
    {"word": "emulous", "sentence": "The emulous younger brother entered every race his sister had ever won.", "options": ["lazy", "indifferent", "competitive", "injured"], "answer": 2},
    {"word": "reposure", "sentence": "After the wedding, the couple sought reposure in a cabin by the lake.", "options": ["rest", "company", "excitement", "work"], "answer": 0},
    {"word": "reptatory", "sentence": "The reptatory vine had spread across the whole garden in a single summer.", "options": ["thorny", "creeping", "flowering", "poisonous"], "answer": 1},
  ],
  // #365 · Mon 11 Oct 2027
  [
    {"word": "cab", "sentence": "The truckie climbed down from his cab and stretched after twelve hours on the road.", "options": ["trailer", "bonnet", "taxi", "cockpit"], "answer": 3},
    {"word": "protrude", "sentence": "A rusty nail continued to protrude from the old fence post.", "options": ["bend", "glow", "jut", "sink in"], "answer": 2},
    {"word": "oaken", "sentence": "The oaken door of the old church was studded with iron nails.", "options": ["wooden", "glass", "iron", "painted"], "answer": 0},
    {"word": "affray", "sentence": "An affray broke out in the stands after the controversial umpiring decision.", "options": ["singalong", "Mexican wave", "brawl", "silence"], "answer": 2},
    {"word": "yestermorn", "sentence": "Yestermorn the tide was so low you could walk out to the island.", "options": ["midnight", "tomorrow", "Easter", "yesterday"], "answer": 3},
    {"word": "reserate", "sentence": "The jailer came at dawn to reserate the cells and let the prisoners into the yard.", "options": ["search", "clean", "inspect", "unlock"], "answer": 3},
    {"word": "retchless", "sentence": "The retchless driver overtook three trucks on a blind corner.", "options": ["lost", "reckless", "drowsy", "patient"], "answer": 1},
  ],
];
