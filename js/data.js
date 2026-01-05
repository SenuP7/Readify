const ReadifyData = {
  books: [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    synopsis: "A powerful coming-of-age story addressing racism, justice, and moral growth in the American South.",
    image: "items\\images\\to_kill_a_mocking_bird.jpg",
    sequels: [],
    reviews: [
      { user: "Anna", rating: 5, comment: "Emotionally powerful and timeless." },
      { user: "Mark", rating: 4, comment: "A must-read classic." }
    ]
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    synopsis: "A grim warning about mass surveillance, propaganda, and the loss of individual freedom.",
    image: "items\\images\\1984.jpg",
    sequels: [],
    reviews: [
      { user: "Sam", rating: 5, comment: "Terrifying and relevant." },
      { user: "Lina", rating: 4, comment: "Thought-provoking dystopia." }
    ]
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    synopsis: "A sharp and humorous romance exploring love, class expectations, and personal pride.",
    image: "items\\images\\pride_and_prejudice.jpg",
    sequels: [],
    reviews: [
      { user: "Emily", rating: 5, comment: "Witty and charming." },
      { user: "James", rating: 4, comment: "Classic romance done right." }
    ]
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    synopsis: "A tragic reflection on ambition, wealth, and the illusion of the American Dream.",
    image: "items\\images\\the_great_gatsby.jpg",
    sequels: [],
    reviews: [
      { user: "Tom", rating: 4, comment: "Beautifully written but tragic." },
      { user: "Sara", rating: 5, comment: "Symbolism is brilliant." }
    ]
  },
  {
    id: 5,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological",
    synopsis: "A psychological exploration of guilt, morality, and the struggle for redemption.",
    image: "items\\images\\crime_and_punishment.png",
    sequels: [],
    reviews: [
      { user: "Ivan", rating: 5, comment: "Deep and intense." },
      { user: "Nina", rating: 4, comment: "Heavy but rewarding." }
    ]
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    synopsis: "A charming fantasy adventure following an unlikely hero on a journey of courage.",
    image: "items\\images\\the_hobbit.jpg",
    sequels: ["The Lord of the Rings"],
    reviews: [
      { user: "Leo", rating: 5, comment: "Perfect fantasy adventure." },
      { user: "Kate", rating: 4, comment: "Fun and imaginative." }
    ]
  },
  {
    id: 7,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    synopsis: "An epic tale of friendship, sacrifice, and the battle between good and evil.",
    image: "items\\images\\the_lord_of_the_rings.jpg",
    sequels: ["The Two Towers", "The Return of the King"],
    reviews: [
      { user: "Chris", rating: 5, comment: "A masterpiece of fantasy." },
      { user: "Mia", rating: 5, comment: "World-building is unmatched." }
    ]
  },
  {
    id: 8,
    title: "Animal Farm",
    author: "George Orwell",
    genre: "Political Satire",
    synopsis: "A powerful allegory exposing corruption, propaganda, and political manipulation.",
    image: "items\\images\\animal_farm.jpg",
    sequels: [],
    reviews: [
      { user: "Ben", rating: 4, comment: "Short but impactful." },
      { user: "Olivia", rating: 5, comment: "Brilliant satire." }
    ]
  },
  {
    id: 9,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    synopsis: "A rebellious teenager’s honest and critical perspective on growing up and society.",
    image: "items\\images\\the_catcher_in_the_rye.jpg",
    sequels: [],
    reviews: [
      { user: "Noah", rating: 4, comment: "Relatable and raw." },
      { user: "Ella", rating: 3, comment: "Not for everyone, but honest." }
    ]
  },
  {
    id: 10,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    genre: "Magical Realism",
    synopsis: "A richly layered family saga blending history, magic, and generational fate.",
    image: "items\\images\\one_hundred_years_of_solitude.webp",
    sequels: [],
    reviews: [
      { user: "Daniel", rating: 5, comment: "Beautiful and poetic." },
      { user: "Sofia", rating: 4, comment: "Complex but rewarding." }
    ]
  },
  {
    id: 11,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Romance",
    synopsis: "A strong woman’s journey toward independence, love, and self-respect.",
    image: "items\\images\\jane_eyre.jpg",
    sequels: [],
    reviews: [
      { user: "Rachel", rating: 5, comment: "Strong heroine." },
      { user: "Paul", rating: 4, comment: "Emotionally rich." }
    ]
  },
  {
    id: 12,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Thriller",
    synopsis: "A fast-paced thriller combining historical secrets, art, and conspiracy.",
    image: "items\\images\\the_da_vinci_code.webp",
    sequels: ["Angels & Demons", "Inferno"],
    reviews: [
      { user: "Alex", rating: 4, comment: "Exciting and fast-paced." },
      { user: "Megan", rating: 3, comment: "Fun but unrealistic." }
    ]
  }
  ],


  authors: [
    {
      name: "George Orwell",
      bio: "English novelist and essayist, known for political satire and dystopian works."
    },
    {
      name: "Jane Austen",
      bio: "English novelist famous for her sharp wit and social commentary."
    },
    {
      name: "Fyodor Dostoevsky",
      bio: "Russian novelist exploring psychology, faith, and morality."
    },
    {
      name: "J.R.R. Tolkien",
      bio: "Author of epic fantasy worlds including Middle-earth."
    },
    {
      name: "Gabriel García Márquez",
      bio: "Colombian novelist known for popularizing magical realism."
    }
  ],

  quotes: [
    {
      text: "A reader lives a thousand lives before he dies.",
      author: "George R.R. Martin"
    },
    {
      text: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      text: "Until I feared I would lose it, I never loved to read.",
      author: "Harper Lee"
    },
    {
      text: "There is no friend as loyal as a book.",
      author: "Ernest Hemingway"
    }
  ]
};
