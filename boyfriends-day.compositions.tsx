import { MemoryRouter } from 'react-router-dom';
import { BoyfriendsDay } from './boyfriends-day.js';
import { PromisePage, FinalePage } from './bf-pages.js';
import { promises } from './bf-data.js';

/** Full experience, starting from the cover. */
export const BoyfriendsDayBasic = () => {
  return (
    <MemoryRouter>
      <BoyfriendsDay />
    </MemoryRouter>
  );
};

/** A single promise page. */
export const PromiseOne = () => <PromisePage promise={promises[0]} onBack={() => {}} />;

/** The heart collage finale. */
export const Finale = () => <FinalePage onRestart={() => {}} />;
