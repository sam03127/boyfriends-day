import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { couple, letter, letterPhotos, promises, ourSong, collage, stickers, type Promise } from './bf-data.js';
import { Web, Star, Garland, Chibi, SpiderSticker } from './decorations.js';
import styles from './boyfriends-day.module.css';

/** Props shared by pages that can move forward. */
type NavProps = { onNext: () => void };

const lineVariants: Variants = {
  initial: { opacity: 0, y: 24, rotateX: -35 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.25 + i * 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Cover page: "Happy Boyfriend's Day My Love <3". */
export function CoverPage({ onNext }: NavProps) {
  return (
    <section className={`${styles.page} ${styles.cover}`}>
      <Garland side="left" />
      <Garland side="right" />
      <Web />
      <Star className={styles.topRight} />
      <h1 className={styles.coverTitle}>
        {['Happy', "Boyfriend's Day"].map((l, i) => (
          <motion.span key={l} className={styles.line} custom={i} variants={lineVariants} initial="initial" animate="animate">
            {l}
          </motion.span>
        ))}
        <motion.span className={styles.line} custom={2} variants={lineVariants} initial="initial" animate="animate">
          {couple.to} <span className={styles.lt}>&lt;3</span>
        </motion.span>
      </h1>
      <motion.button
        className={styles.pillBtn}
        onClick={onNext}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        whileTap={{ scale: 0.95 }}
      >
        open your surprise 💌
      </motion.button>
      <Chibi position="bottomCenter" />
    </section>
  );
}

/** Love letter on the left, taped polaroids on the right — reveals paragraph by paragraph. */
export function LetterPage({ onNext }: NavProps) {
  return (
    <section className={styles.page}>
      <Web />
      <Star className={styles.topRight} />
      <div className={styles.split}>
        <motion.div className={styles.letter} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className={styles.letterHeart} aria-hidden>❤</span>
          {letter.map((p, i) => (
            <motion.p
              key={p.slice(0, 12)}
              className={styles.letterText}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {p}
            </motion.p>
          ))}
          <motion.p
            className={styles.signoff}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + letter.length * 0.5, duration: 0.6 }}
          >
            — forever yours, {couple.from} 💋
          </motion.p>
        </motion.div>
        <div className={styles.polaroids}>
          {letterPhotos.map((p, i) => (
            <motion.figure
              key={p.caption}
              className={styles.polaroid}
              initial={{ opacity: 0, y: -50, rotate: 0, scale: 1.15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.25, duration: 0.6, ease: [0.34, 1.4, 0.64, 1] }}
            >
              <span className={styles.tape} />
              <img src={p.src} alt={p.caption} loading="eager" decoding="async" />
              <figcaption>{p.caption}</figcaption>
            </motion.figure>
          ))}
          <SpiderSticker className={styles.spiderOnPhotos} />
        </div>
      </div>
      <button className={styles.pillBtn} onClick={onNext}>
        I have promises for you →
      </button>
      <Chibi />
    </section>
  );
}

/** Hub with three 3D heart buttons. */
export function PromisesHub({
  opened,
  onOpen,
  onNext,
}: NavProps & { opened: number[]; onOpen: (i: number) => void }) {
  return (
    <section className={styles.page}>
      <Web />
      <Star className={styles.topRight} />
      <h2 className={styles.title}>My Promises to you</h2>
      <p className={styles.hint}>click on us ♡</p>
      <div className={styles.hearts}>
        {promises.map((p, i) => (
          <motion.button
            key={p.label}
            className={`${styles.heartBtn} ${opened.includes(i) ? styles.heartOpened : ''}`}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.34, 1.4, 0.64, 1] }}
            whileHover={{ scale: 1.1, rotate: -4 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => onOpen(i)}
          >
            <svg viewBox="0 0 100 92" aria-hidden>
              <defs>
                <radialGradient id={`hg${i}`} cx="35%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#ff7b7b" />
                  <stop offset="55%" stopColor="#e0242b" />
                  <stop offset="100%" stopColor="#8f0d14" />
                </radialGradient>
              </defs>
              <path d="M50 88 C20 66 2 48 2 28 C2 12 14 2 28 2 C38 2 46 8 50 16 C54 8 62 2 72 2 C86 2 98 12 98 28 C98 48 80 66 50 88 Z" fill={`url(#hg${i})`} />
              <ellipse cx="28" cy="22" rx="10" ry="6" fill="#fff" opacity="0.45" transform="rotate(-30 28 22)" />
            </svg>
            <span>{p.label}</span>
            {opened.includes(i) && <em>✓ read</em>}
          </motion.button>
        ))}
      </div>
      <div className={styles.loveCard}>
        I <b>TRULY</b> LOVE YOU
        <br />
        WITH ALL MY ❤ HEART
      </div>
      <button className={styles.pillBtn} onClick={onNext} disabled={opened.length < promises.length}>
        {opened.length < promises.length ? `open all promises (${opened.length}/3)` : 'next: our song 🎵'}
      </button>
      <Chibi />
    </section>
  );
}

/** A single promise: filmstrip photo + note card. */
export function PromisePage({ promise, onBack }: { promise: Promise; onBack: () => void }) {
  return (
    <section className={styles.page}>
      <Web />
      <div className={styles.doodle}>
        <span>{promise.doodle}</span>
      </div>
      <h2 className={styles.title}>{promise.label}</h2>
      <p className={styles.hint}>{promise.subtitle}</p>
      <div className={styles.split}>
        <motion.div
          className={styles.filmstrip}
          initial={{ opacity: 0, x: -40, rotate: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.sprockets} />
          <img src={promise.image} alt={promise.label} loading="eager" decoding="async" />
          <div className={styles.sprockets} />
        </motion.div>
        <motion.div
          className={styles.note}
          initial={{ opacity: 0, x: 40, rotate: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.pin} />
          <p>{promise.text}</p>
          <SpiderSticker className={styles.spiderOnNote} />
        </motion.div>
      </div>
      <button className={styles.pillBtn} onClick={onBack}>
        ← back to promises
      </button>
      <Chibi />
    </section>
  );
}

/** "Our Song" — a decorative player card + lyrics (no real audio playback). */
export function SongPage({ onNext }: NavProps) {
  const [playing, setPlaying] = useState(true);
  return (
    <section className={styles.page}>
      <Web />
      <div className={styles.doodle}>
        <span>{ourSong.bubble}</span>
      </div>
      <h2 className={styles.title}>
        <span className={styles.notes}>♪</span> {ourSong.title} <span className={styles.notes}>♫</span>
      </h2>
      <div className={styles.split}>
        <motion.div className={styles.player} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <img src={ourSong.cover} alt="album art" className={`${styles.cover2} ${playing ? styles.spinning : ''}`} loading="eager" decoding="async" />
          <strong>{ourSong.track}</strong>
          <small>{ourSong.artist}</small>
          <div className={styles.progress}>
            <span className={playing ? styles.progressRun : ''} />
          </div>
          <div className={styles.controls}>
            <button aria-label="previous">⏮</button>
            <button className={styles.playBtn} onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'pause' : 'play'}>
              {playing ? '❚❚' : '▶'}
            </button>
            <button aria-label="next">⏭</button>
          </div>
        </motion.div>
        <div className={styles.lyrics}>
          {ourSong.lyrics.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.22, duration: 0.5 }}
            >
              {l}
            </motion.p>
          ))}
        </div>
      </div>
      <button className={styles.pillBtn} onClick={onNext}>
        one last thing… ❤
      </button>
      <Chibi />
    </section>
  );
}

/** Heart cells for a 7x6 grid (1 = photo). */
const HEART_MASK = ['0110110', '1111111', '1111111', '0111110', '0011100', '0001000'];

/** Finale: heart-shaped anime photo collage + stickers. */
export function FinalePage({ onRestart }: { onRestart: () => void }) {
  let k = 0;
  return (
    <section className={`${styles.page} ${styles.finale}`}>
      <Garland side="left" />
      <Garland side="right" />
      <motion.h2
        className={styles.bigLove}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.34, 1.4, 0.64, 1] }}
      >
        I LOVE YOU
      </motion.h2>
      <p className={styles.hint}>Always and forever &lt;3</p>
      <div className={styles.heartGrid}>
        {HEART_MASK.join('')
          .split('')
          .map((c, i) => {
            if (c === '0') return <span key={i} />;
            const src = collage[k++ % collage.length];
            return (
              <motion.img
                key={i}
                src={src}
                alt=""
                loading="eager"
                decoding="async"
                initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.035, duration: 0.45, ease: [0.34, 1.4, 0.64, 1] }}
              />
            );
          })}
      </div>
      {stickers.map((s, i) => (
        <motion.span
          key={s}
          className={`${styles.sticker} ${styles[`sticker${i}`]}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
        >
          {s}
        </motion.span>
      ))}
      <button className={styles.pillBtn} onClick={onRestart}>
        replay ↺
      </button>
      <Chibi position="bottomRight" />
    </section>
  );
}
