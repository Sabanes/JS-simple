// Array of authors
const authors = [
    'Albert Einstein',
    'Mark Twain',
    'Maya Angelou',
    'Oprah Winfrey',
    'Nelson Mandela',
    'Mahatma Gandhi',
  ];
  
  // Array of quotes
  const quotes = [
    'Believe you can and you are halfway there.',
    'The only way to do great work is to love what you do.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'Happiness is not something ready-made. It comes from your own actions.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Be the change you wish to see in the world.',
  ];
  
  // Array of emojis
  const emojis = ['🌟', '⭐', '✨', '💫', '🌈', '🔥'];
  
  // Function to generate a random index
  const getRandomIndex = array => Math.floor(Math.random() * array.length);
  
  // Function to generate a random quote
  const generateQuote = () => {
    const authorIndex = getRandomIndex(authors);
    const quoteIndex = getRandomIndex(quotes);
    const emojiIndex = getRandomIndex(emojis);
  
    const author = authors[authorIndex];
    const quote = quotes[quoteIndex];
    const emoji = emojis[emojiIndex];
  
    return `${quote} ${emoji} - ${author}`;
  };
  
  // Generate and log a random quote
  console.log(generateQuote());