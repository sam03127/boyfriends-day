import { useMemo } from 'react';
import { images } from './bf-data.js';
import styles from './boyfriends-day.module.css';

/** Spiderweb doodle for the top-left corner. */
export function Web({ className = '' }: { className?: string }) {
  return (
    <svg className={`${styles.web} ${className}`} viewBox="0 0 100 100" aria-hidden>
      <g fill="none" stroke="#2b1b1b" strokeWidth="1.6" strokeLinecap="round">
        <path d="M0 0 L100 100 M0 0 L100 40 M0 0 L40 100 M0 0 L100 0 M0 0 L0 100" />
        <path d="M22 0 Q20 12 0 22 M44 0 Q40 26 0 44 M66 0 Q60 40 0 66 M88 0 Q80 54 0 88" />
      </g>
    </svg>
  );
}

/** Red sketchy star sticker. */
export function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={`${styles.star} ${className}`} viewBox="0 0 100 100" aria-hidden>
      <path
        d="M50 6 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z"
        fill="#e0312f"
        stroke="#7a1010"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A vertical garland of hanging hearts. */
export function Garland({ side }: { side: 'left' | 'right' }) {
  return (
    <div className={`${styles.garland} ${side === 'left' ? styles.garlandLeft : styles.garlandRight}`} aria-hidden>
      {[0, 1, 2, 3].map((col) => (
        <div key={col} className={styles.garlandString} style={{ animationDelay: `${col * 0.4}s`, height: `${55 + ((col * 17) % 35)}%` }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className={styles.garlandHeart}>❤</span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Chibi anime couple sticker placed in a page corner. */
export function Chibi({ position = 'bottomLeft' }: { position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' }) {
  return <img src={images.chibi} alt="chibi us" loading="eager" decoding="async" className={`${styles.chibi} ${styles[position]}`} />;
}

/** Hearts that float up from the bottom of the screen. */
export function FloatingHearts({ count = 10 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 12 + Math.random() * 18,
        duration: 7 + Math.random() * 8,
        delay: -Math.random() * 15,
        char: i % 5 === 0 ? '💕' : '❤',
      })),
    [count]
  );
  return (
    <div className={styles.floating} aria-hidden>
      {hearts.map((h, i) => (
        <span
          key={i}
          style={{ left: `${h.left}%`, fontSize: h.size, animationDuration: `${h.duration}s`, animationDelay: `${h.delay}s` }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
}

/** Spider-Man-style mask sticker made in SVG (no copyrighted artwork). */
export function SpiderSticker({ className = '' }: { className?: string }) {
  return (
    <svg className={`${styles.spider} ${className}`} viewBox="0 0 100 120" aria-hidden>
      <path d="M50 4 C82 4 96 34 92 64 C88 96 66 116 50 116 C34 116 12 96 8 64 C4 34 18 4 50 4 Z" fill="#d7262b" stroke="#fff" strokeWidth="5" />
      <g stroke="#5a0b0e" strokeWidth="1.2" fill="none" opacity="0.7">
        <path d="M50 8 V114 M10 60 H90 M18 26 L82 100 M82 26 L18 100" />
        <path d="M30 40 Q50 52 70 40 M24 78 Q50 92 76 78" />
      </g>
      <path d="M22 52 C30 38 46 44 46 62 C40 70 26 68 22 52 Z" fill="#fff" stroke="#111" strokeWidth="4" />
      <path d="M78 52 C70 38 54 44 54 62 C60 70 74 68 78 52 Z" fill="#fff" stroke="#111" strokeWidth="4" />
    </svg>
  );
}
