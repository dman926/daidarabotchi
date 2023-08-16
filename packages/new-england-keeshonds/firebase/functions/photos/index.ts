import { onCall } from 'firebase-functions/v2/https';
import { onSchedule } from 'firebase-functions/v2/scheduler';

interface ImagePackage {
  thumbnailURL: string;
  url: string;
}

const everyDayAtMidnightCron = '0 0 * * *';

// @TODO: Add util function to compare stored album and source album and apply differences

export const albumSyncHandler = onSchedule(everyDayAtMidnightCron, (event) => {
  /**
   * @TODO
   *  Refresh Firestore admin/photos.(refreshToken|provider)
   *  Sync stored and source albums using Firestore admin/photos.albums using util function
   */
  return;
});

export const adminGetAlbumsHandler = onCall(
  { enforceAppCheck: true },
  (request) => {
    // @TODO: Get a list of all available albums (and main thumbnails) and all synced albums
    return {};
  }
);

export const adminSetAlbumsHandler = onCall(
  { enforceAppCheck: true },
  (request) => {
    // @TODO: Set the list of synced albums and apply diffs with util function
    return {};
  }
);

export const getAlbumsHandler = onCall({ enforceAppCheck: true }, (request) => {
  // @TODO: Get a list of album names and metadata and the first page of photos
  return {};
});

export const getPagedAlbumHandler = onCall(
  { enforceAppCheck: true },
  (request) => {
    // @TODO: Handle continued pagination of an album
    return {};
  }
);
