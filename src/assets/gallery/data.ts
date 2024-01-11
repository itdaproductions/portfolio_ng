export interface GalleryFiles {
  imageUrl: string;
  imageTitle?: string;
  imageDescription?: string;
}

export interface GalleryData {
  directoryUrl: string;
  directoryTitle: string;
  directoryDescription?: string;
  images: GalleryFiles[];
}

export const PortfolioGallery: GalleryData[] = [
  {
    directoryUrl: 'design',
    directoryTitle: 'Design',
    directoryDescription: "They don't suck, I swear",
    images: [
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
    ],
  },
  {
    directoryUrl: '3d',
    directoryTitle: 'Desenhos 3d',
    directoryDescription: "They don't suck, I swear",
    images: [
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
    ],
  },
  {
    directoryUrl: 'tradicional',
    directoryTitle: 'Tradicional',
    directoryDescription: "They don't suck, I swear",
    images: [
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
    ],
  },
  {
    directoryUrl: 'sculpture',
    directoryTitle: 'Sculpture',
    directoryDescription: "They don't suck, I swear",
    images: [
      {
        imageUrl: '1.png',
        imageTitle: 'This is a good title',
        imageDescription: 'A beautiful landscape with mountains',
      },
      {
        imageUrl: '2.png',
        imageDescription: 'A cute kitten playing with a ball of yarn',
      },
      {
        imageUrl: '3.png',
        imageDescription: 'A delicious plate of spaghetti carbonara',
      },
    ],
  },
];
