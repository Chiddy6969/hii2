import { PhotoItem } from './types';

// Grid configuration for a 7x6 heart shape
// 1 = Photo, 0 = Empty space
const HEART_GRID = [
  [0, 1, 1, 0, 1, 1, 0], // Row 0
  [1, 1, 1, 1, 1, 1, 1], // Row 1
  [1, 1, 1, 1, 1, 1, 1], // Row 2
  [0, 1, 1, 1, 1, 1, 0], // Row 3
  [0, 0, 1, 1, 1, 0, 0], // Row 4
  [0, 0, 0, 1, 0, 0, 0], // Row 5
];

export const TOTAL_PHOTOS = 27;

// *** HOW TO ADD OR REMOVE VIDEOS ***
// 1. To ADD a video: Add the tile ID (1-27) to the array below.
//    - Example: To make the first photo a video, change it to: [1, 11, 15, 19]
//    - Requirement: You MUST add '1.mp4' in the videos folder AND '1.jpeg' in the photos folder.
//
// 2. To REMOVE a video: Delete the ID from the array below.
//    - Example: To remove video 11, change it to: [15, 19]
//    - The tile will revert to being a normal photo using '11.jpeg'.
const VIDEO_IDS = [11, 15, 17, 19, 23, 22, 24, 25]; 

export const INITIAL_PHOTOS: PhotoItem[] = [];

let idCounter = 1;
HEART_GRID.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    if (cell === 1) {
      const isVideo = VIDEO_IDS.includes(idCounter);

      INITIAL_PHOTOS.push({
        id: idCounter,
        row: rowIndex,
        col: colIndex,
        type: isVideo ? 'video' : 'photo',
        
        // LOGIC:
        // If it is a VIDEO: 
        //   - The main URL is './videos/ID.mp4'
        //   - The thumbnail is './photos/ID.jpeg' (The cover image shown in the grid)
        // If it is a PHOTO:
        //   - The main URL is './photos/ID.jpeg'
        
        url: isVideo ? `./videos/${idCounter}.mp4` : `./photos/${idCounter}.jpeg`,
        thumbnail: isVideo ? `./photos/${idCounter}.jpeg` : undefined,

        isRevealed: false,
      });
      idCounter++;
    }
  });
});