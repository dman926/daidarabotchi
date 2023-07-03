/**
 * @TODO:
 *    Add a function to retrieve an array of ImagePackage from Google Photos and any albums that are shared
 *    Add functions to control viewing Google Photos albums and adding and removing read permissions from specific albums
 */

import { onCall } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';

interface ImagePackage {
  thumbnailURL: string;
  url: string;
}

const everyDayAtMidnightCron = '0 0 * * *';

export const albumSyncHandler = onSchedule(everyDayAtMidnightCron, (event) => {
  return;
});

export const adminGetAlbumsHandler = onCall(
  { enforceAppCheck: true },
  (request) => {
    return {};
  }
);

export const getAlbumsHandler = onCall({ enforceAppCheck: true }, (request) => {
  return {};
});

export const addAlbumHandler = onCall({ enforceAppCheck: true }, (request) => {
  return {};
});

export const removeAlbumHandler = onCall(
  { enforceAppCheck: true },
  (request) => {
    return {};
  }
);
