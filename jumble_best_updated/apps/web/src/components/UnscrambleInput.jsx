
import React, { useState, useEffect } from 'react';
import { Sparkles, AlertCircle, CornerDownLeft, CheckCircle2, SlidersHorizontal, X, PartyPopper, Flag, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { getDefinition } from '@/lib/wordDictionary.js';
import DefinitionPopup from '@/components/DefinitionPopup.jsx';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import NoMatchesSpeechBubble from '@/components/NoMatchesSpeechBubble.jsx';
import { getRandomQuote } from '@/components/KalamityKateQuotes.jsx';

// ─── Fallback word list (used instantly while ENABLE dictionary loads) ────────
const FALLBACK_WORDS = [
  "ab","ad","ah","am","an","at","aw","ax","ay","ba","be","bi","by","do","ed","eh","el",
  "em","en","er","es","et","ex","fa","go","ha","he","hi","ho","id","if","in","is","it",
  "jo","ka","la","li","lo","ma","me","mi","mo","mu","my","na","no","nu","od","of","oh",
  "ok","om","on","op","or","ow","ox","oy","pa","pi","qi","re","so","ta","ti","to","uh",
  "um","un","up","us","we","xi","ya","ye","yo","za",
  "ace","act","add","age","ago","aid","aim","air","ale","all","ant","ape","arc","are",
  "ark","arm","art","ash","ask","ate","awe","axe","aye","bag","ban","bar","bat","bay",
  "bed","beg","bet","bid","big","bit","box","boy","bud","bug","bun","bus","but","cab",
  "can","cap","car","cat","cob","cog","cop","cot","cow","cry","cub","cup","cut","dab",
  "dam","dew","did","die","dig","dim","dip","dog","dot","dry","dub","dug","dye","ear",
  "eat","egg","ego","elf","elk","elm","end","era","eve","ewe","eye","fan","fat","fed",
  "few","fit","fix","fly","fog","foe","fox","fry","fun","fur","gap","gas","gel","gem",
  "get","gin","god","got","gum","gun","gut","guy","had","ham","has","hat","hay","hen",
  "hid","him","hip","his","hit","hog","hop","hot","how","hub","hug","hum","hut","ice",
  "ill","ink","ion","ivy","jab","jam","jar","jaw","jet","jig","job","jog","jot","joy",
  "jug","keg","key","kid","kin","kit","lag","lap","law","lay","leg","let","lid","lip",
  "lit","log","lot","low","lug","mad","man","map","mat","may","men","met","mob","mop",
  "mud","mug","nag","nap","nod","not","now","nun","nut","oak","oat","odd","off","oil",
  "old","one","opt","orb","ore","our","out","owe","own","pad","pan","pat","paw","pay",
  "peg","pen","pew","pie","pig","pit","pod","pop","pot","pub","pun","pup","put","rag",
  "ram","ran","rap","rat","raw","ray","red","rib","rid","rig","rim","rip","rob","rod",
  "rot","row","rub","rug","rum","run","rut","rye","sad","sap","sat","saw","say","set",
  "sew","sin","sip","sit","six","ski","sky","sob","sod","son","sow","soy","spy","sub",
  "sue","sum","sun","tab","tan","tap","tar","tax","tea","ten","tie","tin","tip","ton",
  "top","tot","tow","toy","try","tub","tug","two","use","van","vat","vim","vow","wag",
  "war","was","wax","way","web","wed","wet","who","why","wig","win","wit","woe","won",
  "woo","yam","yap","yep","yes","yet","yew","you","zap","zip","zoo",
  "able","ache","acid","acre","also","amid","apex","arch","area","army","aura","auto",
  "back","bail","bait","bale","ball","band","bane","bank","bare","bark","barn","base",
  "bash","bath","bead","beak","beam","bean","bear","beat","beef","beer","bell","belt",
  "bend","best","bile","bill","bind","bird","bite","blow","blue","blur","boat","body",
  "bold","bolt","bone","book","boom","born","bowl","bump","burn","bush","busy","cage",
  "cake","calm","came","cane","cape","card","care","cart","case","cash","cast","cave",
  "chat","chin","chip","chop","cite","clam","clap","clue","coal","coat","code","coil",
  "cold","comb","come","cone","cook","cool","cope","copy","cord","core","corn","cost",
  "crab","crew","crop","crow","cure","curl","cute","dark","dart","dash","data","dawn",
  "dead","deal","dear","deck","deed","deep","deny","desk","dial","diet","dime","dine",
  "disk","dome","done","doom","door","dose","down","draw","drip","drop","drug","drum",
  "duck","dull","dusk","dust","duty","each","earn","ease","east","edge","epic","even",
  "evil","exam","face","fact","fail","fair","fall","fame","fare","farm","fast","fate",
  "fear","feel","felt","file","fill","film","find","fine","fire","firm","fish","fist",
  "flag","flat","flew","flip","flow","foam","fold","fond","food","fool","foot","fork",
  "form","fort","foul","four","free","fuel","full","fund","fuse","game","gate","gave",
  "gear","gift","give","glad","glow","glue","goal","gold","golf","gone","grab","grid",
  "grin","grip","grit","gulf","gust","hair","half","hall","halt","hand","hang","hard",
  "harm","hate","head","heal","heap","heat","heel","help","hero","hide","high","hill",
  "hint","hire","hold","hole","home","hood","hook","hope","horn","host","huge","hung",
  "hunt","hurt","idea","iron","item","jail","join","joke","jump","just","keen","keep",
  "kick","kind","king","lack","laid","lake","land","lane","last","late","lazy","lead",
  "leaf","leak","lean","leap","left","lend","lens","levy","life","lift","like","lime",
  "line","link","lion","list","live","load","loan","lock","loft","lone","long","look",
  "loop","lord","lore","lose","lost","loud","love","luck","lung","made","mail","main",
  "make","male","mall","many","mark","mask","mate","maze","meal","mean","meat","meet",
  "melt","memo","menu","mild","mile","milk","mill","mind","mine","mint","mist","mode",
  "mold","mole","moon","more","most","move","much","mule","myth","nail","name","navy",
  "near","neat","neck","need","nest","next","nice","nine","node","none","noon","norm",
  "nose","note","noun","numb","once","only","open","oral","over","pace","pack","paid",
  "pain","pair","palm","park","part","past","path","peak","peer","pick","pile","pine",
  "pink","pipe","plan","play","plot","plow","plum","plus","poem","pole","poll","pool",
  "poor","pork","port","pose","post","pour","prey","prop","pull","pump","pure","push",
  "quit","race","rack","raid","rail","rain","rake","ramp","rang","rank","rare","rate",
  "read","real","reap","rear","reef","reel","rely","rent","rest","rice","rich","ride",
  "ring","riot","rise","risk","road","roam","roar","robe","rock","rode","role","roll",
  "roof","room","root","rope","rose","ruin","rule","rush","safe","sage","said","sail",
  "sake","sale","salt","same","sand","sang","sank","save","scan","scar","seal","seam",
  "seat","seed","seek","seem","self","sell","send","sent","shin","ship","shoe","shop",
  "shot","show","sick","side","sigh","sign","silk","sing","sink","site","size","skin",
  "skip","slam","slap","slim","slip","slow","slug","snap","snow","soap","soar","sock",
  "soft","soil","sold","sole","some","song","soon","sort","soul","soup","span","spin",
  "spot","star","stay","stem","step","stir","stop","stub","suit","sung","sunk","sure",
  "surf","swap","tale","talk","tall","tank","tape","task","team","tear","tell","term",
  "test","text","tide","tilt","time","tiny","tire","toad","toll","tomb","tone","tool",
  "tore","torn","tour","town","tray","tree","trim","trip","true","tube","tuck","tune",
  "turf","turn","twin","type","ugly","unit","upon","used","vain","vale","vast","veil",
  "vest","view","vine","void","vote","wade","wage","wake","walk","wall","wand","want",
  "ward","warm","wash","wave","weak","wear","weed","week","well","went","west","wide",
  "wife","wild","will","wind","wine","wing","wink","wire","wise","wish","woke","wolf",
  "word","wore","work","worm","yard","year","zero","zone","zoom",
  "about","above","acute","admit","adopt","adult","after","again","agent","agree","ahead",
  "alarm","album","alert","alike","alien","align","alley","allow","alone","along","alter",
  "amaze","amber","angel","anger","angle","angry","ankle","apart","apple","apply","argue",
  "arise","armor","aroma","arose","aside","atlas","attic","audio","avoid","award","aware",
  "awful","bagel","baker","basic","batch","beach","began","begin","being","below","bench",
  "bland","blank","blast","blaze","bleed","bless","blind","block","blood","bloom","brace",
  "brain","brand","brave","bread","break","breed","bride","brief","bring","broad","broke",
  "broom","brown","brush","build","built","buyer","cadet","camel","carry","cedar","chair",
  "chalk","chaos","charm","chart","chase","cheap","check","cheek","cheer","chess","chest",
  "chief","child","chill","civic","civil","claim","class","clean","clear","clerk","click",
  "cliff","climb","clock","clone","close","cloud","coach","coast","comet","comic","coral",
  "count","court","cover","crack","craft","crane","crave","crazy","cream","creek","creep",
  "crest","crime","cross","crowd","crown","crude","cruel","crush","crust","cubic","daisy",
  "dance","debut","delta","demon","depot","depth","devil","dirty","dodge","doing","doubt",
  "dough","draft","drain","drama","drawl","dream","dress","drift","drink","drive","drove",
  "drown","early","earth","eight","elbow","elect","elite","empty","enemy","enjoy","enter",
  "entry","equal","error","essay","event","every","exact","exist","extra","fable","falls",
  "false","fancy","fatal","fault","feast","ferry","fever","fiber","field","fifth","fifty",
  "fight","final","first","fixed","flame","flare","flash","flask","flesh","float","flock",
  "flood","floor","flour","flute","force","forge","frail","frame","frank","fraud","fresh",
  "front","frost","froze","fruit","fully","funny","genre","ghost","giant","given","gland",
  "glare","glass","globe","gloom","gloss","glove","going","gorge","goose","grace","grade",
  "grain","grand","grant","grape","grasp","grass","grave","graze","greed","green","greet",
  "grill","grind","groan","groom","gross","group","grove","guard","guess","guest","guide",
  "guild","gusto","habit","happy","harsh","haven","haste","heart","heavy","herbs","hippo",
  "hoist","honey","honor","horse","hotel","human","humor","image","imply","inept","infer",
  "inner","input","ivory","judge","juice","juicy","jumbo","knack","kneel","knife","knock",
  "known","label","lance","large","laser","later","laugh","layer","learn","lease","least",
  "leave","legal","lemon","level","light","linen","liver","local","lodge","logic","loose",
  "lover","lower","loyal","lucky","magic","major","maker","manor","maple","march","marsh",
  "medal","media","mercy","merge","merit","merry","metal","meter","might","model","money",
  "month","moral","motel","motor","mount","mourn","mouth","movie","muddy","music","naive",
  "needs","nerve","never","night","noise","north","novel","nurse","oasis","occur","ocean",
  "offer","olive","onset","opera","orbit","order","other","ought","outer","owned","owner",
  "oxide","ozone","paint","panic","paper","party","paste","patch","pause","peace","pearl",
  "pedal","penny","perch","peril","phase","phone","photo","piano","pilot","pitch","pixel",
  "pizza","place","plain","plane","plank","plant","plate","plaza","plead","pluck","plume",
  "point","porch","pound","power","press","price","pride","prime","print","prize","probe",
  "proof","prose","proud","prove","pulse","pupil","purse","queen","query","quest","queue",
  "quick","quiet","quota","quote","rabbi","rally","ranch","range","rapid","raven","reach",
  "realm","rebel","reign","relax","remix","repay","reply","retro","risky","rival","river",
  "robot","rocky","rouge","rough","round","route","rowdy","royal","ruler","rural","salad",
  "sauce","scale","scene","scope","score","scout","seize","sense","serum","serve","seven",
  "sewer","shade","shake","shall","shame","shape","shark","sharp","sheep","shelf","shell",
  "shift","shirt","shock","shore","short","shout","shove","shrug","sight","silly","since",
  "sixth","sixty","skill","skull","skunk","slack","slate","slave","sleep","slice","slide",
  "slope","sloth","small","smart","smell","smile","smoke","snack","snail","snake","snare",
  "sneak","snore","solar","solid","solve","sorry","spark","speak","speed","spend","spice",
  "spill","spite","spoke","spoon","sport","spout","spray","squad","squat","stack","staff",
  "stage","stain","stale","stalk","stall","stamp","stand","stare","stark","start","steal",
  "steam","steel","steep","steer","stink","stock","stone","stood","store","storm","story",
  "stout","stove","strap","straw","stray","strip","stuck","stump","style","sugar","suite",
  "super","surge","swamp","swear","sweat","swept","swift","swine","sword","syrup","table",
  "talon","tango","taste","taunt","tease","teeth","thank","theft","theme","there","these",
  "thick","thing","think","thorn","three","threw","throw","tiger","tight","title","today",
  "token","tonic","torch","total","touch","toxic","trace","track","trade","trail","train",
  "trait","trash","tread","treat","trend","trial","tribe","trick","tried","troll","troop",
  "trout","truce","truck","truly","trunk","truth","tulip","tutor","twice","twist","ultra",
  "under","union","unite","until","upset","urban","usher","usual","utter","vague","valid",
  "valor","value","valve","vapor","vault","verse","video","vigil","viral","visor","visit",
  "vital","vivid","vomit","voter","wagon","waste","watch","water","weary","weave","wedge",
  "weigh","weird","whale","wheat","wheel","where","while","white","whole","whose","witty",
  "woman","women","world","worry","worse","worst","worth","would","wound","wrath","wrist",
  "write","wrote","young","yours","youth","yummy",
  "lonely","calamity","jumble","tumble","fumble","humble","rumble","mumble","bumble","stumble",
  "crumble","grumble","gamble","ramble","scramble","absent","absorb","accept","accord","action",
  "active","actual","affirm","afford","afraid","agency","agenda","agreed","almost","always",
  "amount","animal","annual","answer","appear","arrive","artist","asleep","aspect","assert",
  "assign","assist","assume","attach","attack","attain","attend","avenge","backup","ballot",
  "banana","banner","barrel","battle","before","behind","belief","bellow","beside","bottle",
  "bounce","bridge","bright","broken","bronze","burrow","butter","button","camera","candle",
  "cannon","canopy","carbon","castle","cattle","caught","center","chance","change","chapel",
  "charge","choice","choose","chosen","circle","clever","closet","combat","create","credit",
  "cuddle","custom","dagger","danger","darken","debate","decade","decide","defend","define",
  "degree","delete","demand","desert","design","detail","detect","devote","differ","direct",
  "disarm","divide","double","dragon","drawer","during","effort","either","embark","emerge",
  "empire","enable","endure","engine","enough","entire","entity","escape","estate","except",
  "expect","expert","extend","famine","famous","father","fellow","fender","finger","finish",
  "flight","foster","frozen","future","garage","garlic","gather","gentle","gifted","glance",
  "golden","gospel","govern","gravel","grudge","handle","happen","harbor","hazard","healer",
  "heaven","helper","hidden","highly","honest","hunger","hunter","impact","import","inside",
  "insist","intent","invest","island","itself","jacket","jester","joyful","jungle","junior",
  "kidnap","knight","ladder","lively","locket","manner","marble","market","matter","mature",
  "menace","mentor","method","mirror","modern","modest","moment","mortal","mosaic","mother",
  "narrow","nature","nearly","needle","nimble","normal","notice","notion","object","obtain",
  "offend","onward","orange","orphan","outrun","palace","pardon","parish","partly","patent",
  "patrol","patron","pencil","people","permit","phrase","pillar","pirate","planet","pledge",
  "plunge","pocket","poison","police","portal","potato","prefer","pretty","prince","prison",
  "profit","prompt","proper","proven","public","purple","pursue","puzzle","rattle","ravine",
  "reason","recall","reduce","refine","reform","refuse","regard","repair","repeat","resign",
  "resist","result","return","reveal","review","riches","riddle","ritual","robust","rocket",
  "roster","rubble","saddle","sample","savage","scarce","screen","scroll","season","secret",
  "sector","severe","shadow","shaken","shrink","shroud","signal","simple","single","sister",
  "sketch","sliver","smooth","soften","source","spirit","splash","spring","square","stable",
  "statue","steady","stolen","street","strict","string","strong","struck","submit","subtle",
  "sudden","suffer","summer","supply","surely","symbol","talent","tangle","target","temple",
  "tender","theory","throne","timely","triple","trophy","tunnel","turtle","twitch","unable",
  "unfair","unfold","unkind","unlike","unruly","unwise","update","uphold","uproot","vanish",
  "vendor","vessel","victim","vision","vortex","wander","warmer","wealth","weapon","wonder",
  "worker","worthy","abandon","beneath","brought","capture","careful","carried","certain",
  "complex","connect","correct","council","courage","covered","defense","deliver","despite",
  "distant","dormant","emerald","essence","exactly","example","exhibit","explain","factory",
  "failure","fantasy","feature","feeling","fiction","finding","forward","founded","freedom",
  "further","glitter","glacier","healing","include","instant","involve","knowing","largely",
  "leading","lengthy","meaning","measure","meeting","mention","message","missing","mixture",
  "morning","natural","nothing","obvious","opening","opinion","outside","package","painful",
  "partial","perfect","perform","picture","placing","popular","portion","present","prevent",
  "primary","problem","product","program","promise","protect","purpose","quality","quickly",
  "rainbow","recover","release","relying","respect","restore","roughly","scatter","section",
  "seeking","selling","sending","shelter","showing","smaller","somehow","someone","special",
  "specify","stretch","student","subject","support","thought","through","tonight","totally",
  "touched","towards","trigger","turning","twisted","typical","uniform","unknown","utterly",
  "variety","various","version","village","visible","waiting","walking","warning","wedding",
  "western","whether","willing","winning","wrapper","blanket","captain","chapter","charter",
  "cluster","command","compass","concert","contain","content","counter","country","crumble",
  "culture","chamber","harvest","imagine","journey","mystery","perhaps","provide","similar",
  "summary","surface","survive","thunder","trading","trouble","unusual","without",
];

// ENABLE dictionary — 172,000+ words used in Scrabble tournaments
const ENABLE_DICT_URL = 'https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt';

function buildWordData(wordArray) {
  const unique = [...new Set(wordArray.map(w => w.toLowerCase().trim()).filter(w => w.length >= 2 && /^[a-z]+$/.test(w)))];
  return unique.map(w => ({ word: w, key: w.split('').sort().join('') }));
}

function findSubAnagrams(letters, wordData) {
  const cleanLetters = letters.toLowerCase().replace(/[^a-z]/g, '');
  const letterCounts = {};
  for (const ch of cleanLetters) {
    letterCounts[ch] = (letterCounts[ch] || 0) + 1;
  }
  return wordData
    .filter(({ word }) => {
      if (word.length > cleanLetters.length) return false;
      const wc = {};
      for (const ch of word) {
        wc[ch] = (wc[ch] || 0) + 1;
        if (wc[ch] > (letterCounts[ch] || 0)) return false;
      }
      return true;
    })
    .map(({ word }) => word);
}

function UnscrambleInput() {
  const [letters, setLetters] = useState('');
  const [dictionary, setDictionary] = useState('standard');
  const [bestMatch, setBestMatch] = useState('');
  const [bonusWordsGrouped, setBonusWordsGrouped] = useState({});
  const [searchedLetters, setSearchedLetters] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [noMatchQuote, setNoMatchQuote] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [mustInclude, setMustInclude] = useState('');
  const [wordData, setWordData] = useState(() => buildWordData(FALLBACK_WORDS));
  const [dictReady, setDictReady] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [isReporting, setIsReporting] = useState(false);

  useEffect(() => {
    fetch(ENABLE_DICT_URL)
      .then(r => r.text())
      .then(text => {
        const words = text.split('\n').map(w => w.trim().toLowerCase()).filter(w => w.length >= 2 && /^[a-z]+$/.test(w));
        setWordData(buildWordData(words));
        setDictReady(true);
      })
      .catch(() => {
        setDictReady(true);
      });
  }, []);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#26ccff','#a25afd','#ff5e7e','#88ff5a','#fcff42','#ffa62d','#ff36ff'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#26ccff','#a25afd','#ff5e7e','#88ff5a','#fcff42','#ffa62d','#ff36ff'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  const handleSearch = async () => {
    const cleanLetters = letters.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanLetters.length < 2) {
      setError("Please enter at least 2 letters to search.");
      setBestMatch(''); setBonusWordsGrouped({}); setHasSearched(false);
      return;
    }
    setError(null); setIsSearching(true); setHasSearched(false); setReportSent(false);
    setSearchedLetters(cleanLetters);
    await new Promise(resolve => setTimeout(resolve, 600));

    try {
      const sortedInput = cleanLetters.split('').sort().join('');
      const subAnagrams = findSubAnagrams(cleanLetters, wordData);
      let exactMatches = subAnagrams.filter(w => w.split('').sort().join('') === sortedInput);

      if (startsWith) exactMatches = exactMatches.filter(w => w.startsWith(startsWith.toLowerCase().trim()));
      if (endsWith) exactMatches = exactMatches.filter(w => w.endsWith(endsWith.toLowerCase().trim()));
      if (mustInclude) exactMatches = exactMatches.filter(w => w.includes(mustInclude.toLowerCase().trim()));

      if (exactMatches.length > 0) {
        const match = exactMatches[0];
        setBestMatch(match);
        const bonusWords = subAnagrams.filter(w => w !== match && w.length >= 3);
        const grouped = bonusWords.reduce((acc, word) => {
          const len = word.length;
          if (!acc[len]) acc[len] = [];
          acc[len].push(word);
          return acc;
        }, {});
        setBonusWordsGrouped(grouped);
        setNoMatchQuote('');
        setHasSearched(true);
        triggerConfetti();
        setShowCelebration(true);
      } else {
        try {
          const pattern = '?'.repeat(cleanLetters.length);
          const resp = await fetch(`https://api.datamuse.com/words?sp=${pattern}&max=1000`);
          const data = await resp.json();
          const apiMatch = data.find(item => item.word.toLowerCase().split('').sort().join('') === sortedInput);
          if (apiMatch) {
            setBestMatch(apiMatch.word.toLowerCase());
            setBonusWordsGrouped({});
            setNoMatchQuote('');
            setHasSearched(true);
            triggerConfetti();
            setShowCelebration(true);
          } else {
            setBestMatch(''); setBonusWordsGrouped({});
            setNoMatchQuote(getRandomQuote()); setHasSearched(true);
          }
        } catch {
          setBestMatch(''); setBonusWordsGrouped({});
          setNoMatchQuote(getRandomQuote()); setHasSearched(true);
        }
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setBestMatch(''); setBonusWordsGrouped({});
    }
    setIsSearching(false);
  };

  const handleReportWord = async () => {
    setIsReporting(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b79d1e6f-b771-47d0-9c5b-131ac11cd78e',
          subject: 'Missing Word Report — Jumble.best',
          message: `A user could not unscramble: "${searchedLetters.toUpperCase()}" — please consider adding this word to the dictionary.`,
        }),
      });
      setReportSent(true);
    } catch {
      setReportSent(true); // Show success anyway — don't confuse the user
    }
    setIsReporting(false);
  };

  const handleKeyDown = (e) => { if (e.key === 'Enter') { e.preventDefault(); handleSearch(); } };

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setLetters(val);
    if (hasSearched || error) { setHasSearched(false); setError(null); setBestMatch(''); setBonusWordsGrouped({}); }
  };

  const sortedBonusLengths = Object.keys(bonusWordsGrouped).sort((a, b) => b - a);

  return (
    <div className="w-full relative">
      <AnimatePresence>
        {showCelebration && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }} transition={{ type: "spring", bounce: 0.5 }}
              className="bg-card border-2 border-primary/20 shadow-2xl rounded-3xl p-8 max-w-md w-full text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <PartyPopper className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-black text-card-foreground mb-4">Success! You are a genius!</h2>
              <p className="text-muted-foreground text-lg mb-8">We found the perfect match for your letters.</p>
              <Button size="lg" className="w-full text-lg h-14 rounded-xl font-bold" onClick={() => setShowCelebration(false)}>
                View Result
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-card rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <h3 className="hero-heading text-2xl font-bold text-card-foreground">Jumble Word Unscrambler</h3>
          {!dictReady && (
            <span className="ml-auto text-xs text-muted-foreground animate-pulse">Loading full dictionary...</span>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="unscramble-input" className="block text-sm font-medium text-card-foreground mb-2">
              Enter scrambled letters
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Input id="unscramble-input" type="text" value={letters} onChange={handleInputChange}
                  onKeyDown={handleKeyDown} placeholder="e.g., B J E U M L"
                  className="hero-heading text-2xl h-14 text-foreground placeholder:text-muted-foreground pr-12 bg-background border-2 border-border focus-visible:ring-primary focus-visible:border-primary uppercase tracking-widest"
                  autoComplete="off" spellCheck="false" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center gap-1 pointer-events-none opacity-50">
                  <CornerDownLeft className="w-4 h-4" />
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button onClick={handleSearch}
                  disabled={isSearching || letters.replace(/[^a-zA-Z]/g, '').length < 2}
                  className="btn-vibrant-green h-14 px-6 sm:px-8 text-lg flex-1 sm:flex-none transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-black tracking-wider">
                  {isSearching ? 'SOLVING...' : 'SOLVE'}
                </button>
                <button onClick={() => setShowOptions(!showOptions)}
                  className="btn-vibrant-pink h-14 px-4 sm:px-6 text-lg flex-1 sm:flex-none min-w-[140px] transition-all duration-200 active:scale-95 font-bold">
                  {showOptions ? <><X className="w-5 h-5 mr-2 inline" /> Hide Options</> : <><SlidersHorizontal className="w-5 h-5 mr-2 inline" /> Options</>}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showOptions && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="p-5 bg-muted/40 rounded-xl border border-border grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Dictionary</label>
                    <Select value={dictionary} onValueChange={setDictionary}>
                      <SelectTrigger className="text-foreground h-11 bg-background"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard English</SelectItem>
                        <SelectItem value="oxford">Oxford Dictionary</SelectItem>
                        <SelectItem value="slang">Slang</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Starts with</label>
                    <Input value={startsWith} onChange={(e) => setStartsWith(e.target.value.replace(/[^a-zA-Z]/g, ''))} placeholder="e.g., a" className="h-11 bg-background text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Ends with</label>
                    <Input value={endsWith} onChange={(e) => setEndsWith(e.target.value.replace(/[^a-zA-Z]/g, ''))} placeholder="e.g., s" className="h-11 bg-background text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">Must include</label>
                    <Input value={mustInclude} onChange={(e) => setMustInclude(e.target.value.replace(/[^a-zA-Z]/g, ''))} placeholder="e.g., er" className="h-11 bg-background text-foreground" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="mt-6 p-4 bg-destructive/10 text-destructive rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}

          {isSearching && !error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="mt-6 flex flex-col items-center justify-center py-12 bg-muted/20 rounded-xl border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100" />
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200" />
              </div>
              <p className="text-muted-foreground font-medium">Solving anagram...</p>
            </motion.div>
          )}

          {!isSearching && !error && hasSearched && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-8">
              {bestMatch ? (
                <div className="space-y-10">
                  <div className="p-5 bg-primary/10 border border-primary/20 rounded-xl flex items-start sm:items-center gap-4">
                    <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">Success! Match found.</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Perfect anagram for: <span className="font-mono font-bold text-primary bg-background px-2 py-0.5 rounded border border-border">{searchedLetters.toUpperCase()}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-center py-8 px-4 bg-primary/5 rounded-3xl border border-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                    <div className="reveal-word mb-6">{bestMatch}</div>
                    <div className="flex justify-center">
                      <DefinitionPopup word={bestMatch} definition={getDefinition(bestMatch, dictionary)} />
                    </div>
                  </div>

                  {sortedBonusLengths.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                      className="pt-8 border-t-2 border-border border-dashed">
                      <div className="text-center mb-8">
                        <h4 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Bonus Words hiding inside!</h4>
                        <p className="text-muted-foreground mt-2 font-medium">
                          Shorter words hiding in "{letters.replace(/[^a-zA-Z]/g, '').toUpperCase()}"
                        </p>
                      </div>
                      <div className="space-y-6">
                        {sortedBonusLengths.map((len, index) => (
                          <motion.div key={len} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="bg-card p-6 rounded-2xl border border-border/60 shadow-sm">
                            <h5 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-4">
                              <span>{len}-Letter Words</span>
                              <div className="h-px bg-border/50 flex-grow" />
                              <span className="bg-secondary/10 text-secondary-foreground px-2 py-0.5 rounded-full text-xs">{bonusWordsGrouped[len].length}</span>
                            </h5>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {bonusWordsGrouped[len].map(word => (
                                <span key={word} className="bonus-word-badge">{word}</span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="mt-8 space-y-4">
                  <NoMatchesSpeechBubble quote={noMatchQuote} />
                  <div className="flex justify-center">
                    {!reportSent ? (
                      <button
                        onClick={handleReportWord}
                        disabled={isReporting}
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-muted-foreground border border-border rounded-xl hover:text-primary hover:border-primary transition-colors duration-200 disabled:opacity-50"
                      >
                        <Flag className="w-4 h-4" />
                        {isReporting ? 'Reporting...' : 'Report this word as missing'}
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-green-600 border border-green-200 rounded-xl bg-green-50">
                        <CheckCircle className="w-4 h-4" />
                        Thanks! We'll look into adding this word.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default UnscrambleInput;
