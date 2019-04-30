const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGOLAB_PURPLE_URI || "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    synopsis:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    thumbnail:
      "http://books.google.com/books/content?id=0LdtxoCQxOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    date: new Date(Date.now()),
    selfLink: "https://www.googleapis.com/books/v1/volumes/lMjdYuVzmrwC"
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    synopsis:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous. But there's another mother there, and another father, and they want her to stay and be their little girl. They want to change her and never let her go. Coraline will have to fight with all her wit and courage if she is to save herself and return to her ordinary life.",
    thumbnail:
      "http://books.google.com/books/content?id=0LdtxoCQxOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    date: new Date(Date.now()),
    selfLink: "https://www.googleapis.com/books/v1/volumes/lMjdYuVzmrwC"
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    synopsis:
      "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    thumbnail:
      "http://books.google.com/books/content?id=0LdtxoCQxOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    date: new Date(Date.now()),
    selfLink: "https://www.googleapis.com/books/v1/volumes/lMjdYuVzmrwC"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    synopsis:
      "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
    thumbnail:
      "http://books.google.com/books/content?id=0LdtxoCQxOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    date: new Date(Date.now()),
    selfLink: "https://www.googleapis.com/books/v1/volumes/lMjdYuVzmrwC"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    synopsis:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    thumbnail:
      "http://books.google.com/books/content?id=0LdtxoCQxOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    date: new Date(Date.now()),
    selfLink: "https://www.googleapis.com/books/v1/volumes/lMjdYuVzmrwC"
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
