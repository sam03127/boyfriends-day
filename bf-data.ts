import chibi from './assets/chibi.png';
import song from './assets/song.png';
import promise1 from './assets/promise1.png';
import promise2 from './assets/promise2.png';
import promise3 from './assets/promise3.png';
import ch1 from './assets/ch1.png';
import ch2 from './assets/ch2.png';
import ch3 from './assets/ch3.png';
import ch4 from './assets/ch4.png';
import ch5 from './assets/ch5.png';
import ch6 from './assets/ch6.png';
import booth1 from './assets/booth1.png';
import booth2 from './assets/booth2.png';
import booth3 from './assets/booth3.png';
import booth4 from './assets/booth4.png';

/** A single promise shown on its own page. */
export type Promise = {
  /** Display label, e.g. "Promise 1". */
  label: string;
  /** Short subtitle under the title. */
  subtitle: string;
  /** The promise text written on the note card. */
  text: string;
  /** Anime illustration shown in the filmstrip frame. */
  image: string;
  /** Little doodle note in the corner. */
  doodle: string;
};

/** Images used across the experience. */
export const images = { chibi, song, ch1, ch2, ch3, ch4, ch5, ch6, booth1, booth2, booth3, booth4 };

/** Who the surprise is from and for — edit these to personalise. */
export const couple = {
  to: 'My Love',
  from: 'Your Girl',
};

/** Paragraphs of the love letter (typed out one by one). */
export const letter: string[] = [
  `Hey you,`,
  `I've been trying to find the right words to write, and honestly, nothing feels big enough for what you mean to me.`,
  `You make ordinary days feel like little adventures. You make my bad days softer and my good days brighter. You laugh at my silly jokes, you put up with my moods, and somehow you still look at me like I'm your favourite person in the world.`,
  `So today is all about you — the boy who stole my heart and never gave it back. Happy Boyfriend's Day, my love.`,
];

/** Photos pinned next to the letter. */
export const letterPhotos = [
  { src: booth1, caption: 'us being us' },
  { src: ch3, caption: 'my favourite day' },
  { src: booth3, caption: 'silly faces 😜' },
];

/** The three promises. */
export const promises: Promise[] = [
  {
    label: 'Promise 1',
    subtitle: "It's me and you. Always ❤️",
    text: "I promise to always be your safe place, the person you can be completely yourself with, no matter what kind of day you've had.",
    image: promise1,
    doodle: 'safe with me 🫶',
  },
  {
    label: 'Promise 2',
    subtitle: 'Every single day 🌧️☂️',
    text: "I promise to keep choosing you, again and again, on the easy days and the hard ones. Not because I have to, but because... I want to.",
    image: promise2,
    doodle: 'always you',
  },
  {
    label: 'Promise 3',
    subtitle: 'Your biggest fan 🏆',
    text: "I promise to celebrate your wins like they're my own, hold your hand through the tough moments, and never let you forget how loved you are.",
    image: promise3,
    doodle: "You're perfect",
  },
];

/** "Our Song" card details and original lyric lines. */
export const ourSong = {
  title: 'Our Song',
  track: 'The Song That Feels Like Us',
  artist: 'for you, on repeat',
  cover: song,
  lyrics: [
    'Tere saath har pal, ek nayi kahaani hai,',
    'Teri hasi mein hi meri zindagaani hai.',
    'Dhoop ho ya baarish, tu paas rehna,',
    'Bas itna sa hai mujhe tujhse kehna —',
    'Tu hai toh sab hai, tu hi meri duniya,',
    'Har dua mein maanga, bas tera hi naam piya. ♡',
  ],
  bubble: 'You make me happy in a way no one else can.',
};

/** Photos inside the heart collage on the finale. */
export const collage = [ch1, booth2, ch2, ch4, booth4, ch5, promise1, ch6, booth1, promise2, ch3, booth3, promise3, song];

/** Stickers scattered around the finale. */
export const stickers = ['FAVORITE HUMAN', 'BEST BOYFRIEND', 'You & Me', 'Mine 💘', 'Forever'];
