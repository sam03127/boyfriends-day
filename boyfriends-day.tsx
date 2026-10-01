import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { promises, images, ourSong, collage } from './bf-data.js';
import { CoverPage, LetterPage, PromisesHub, PromisePage, SongPage, FinalePage } from './bf-pages.js';
import { FloatingHearts } from './decorations.js';
import styles from './boyfriends-day.module.css';

/** All screens in the experience. */
type Screen = 'cover' | 'letter' | 'hub' | 'promise' | 'song' | 'finale';

const pageVariants = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -18, scale: 0.98 },
};

/**
 * Happy Boyfriend's Day — an animated, page-by-page digital surprise
 * with a love letter, three promises, "our song" and a heart photo collage,
 * illustrated with anime art.
 */
export function BoyfriendsDay() {
  const [screen, setScreen] = useState<Screen>('cover');
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<number[]>([]);

  // Warm the browser's image cache for every picture used in the experience
  // ahead of time, so later pages open instantly instead of decoding on tap.
  useEffect(() => {
    const urls = [...Object.values(images), ...promises.map((p) => p.image), ourSong.cover, ...collage];
    const warm = () =>
      urls.forEach((src) => {
        const img = new Image();
        img.decoding = 'async';
        img.src = src as string;
      });
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    if (idle) idle(warm);
    else window.setTimeout(warm, 150);
  }, []);

  const go = (s: Screen) => {
    setScreen(s);
    window.scrollTo({ top: 0 });
  };

  const openPromise = (i: number) => {
    setActive(i);
    setOpened((o) => (o.includes(i) ? o : [...o, i]));
    go('promise');
  };

  return (
    <main className={styles.app}>
      <FloatingHearts />
      <AnimatePresence mode="wait">
        <motion.div
          key={screen + active}
          className={styles.stage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {screen === 'cover' && <CoverPage onNext={() => go('letter')} />}
          {screen === 'letter' && <LetterPage onNext={() => go('hub')} />}
          {screen === 'hub' && <PromisesHub opened={opened} onOpen={openPromise} onNext={() => go('song')} />}
          {screen === 'promise' && <PromisePage promise={promises[active]} onBack={() => go('hub')} />}
          {screen === 'song' && <SongPage onNext={() => go('finale')} />}
          {screen === 'finale' && (
            <FinalePage
              onRestart={() => {
                setOpened([]);
                go('cover');
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
