const quotes = [
  {
    quote: "Beware of what you set your heart upon…for it shall surely be yours.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "Tell yourself how wonderful you are, how great you are. Tell yourself how much you love yourself.",
    author: "Don Miguel Ruiz"
  },
  {
    quote: "Love yourself first and everything falls into line.",
    author: "Lucille Ball"
  },
  {
    quote: "When you are truly clear about what you want, the whole universe stands on tiptoe waiting to assist you in miraculous and amazing ways to manifest your dream or intention.",
    author: "Constance Arnold"
  },
  {
    quote: "Know your magic, trust your magic, use your magic, and know that you are a manifestation of life’s magic.",
    author: "Rasheed Ogunlaru"
  }
];


const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteObj = quotes[randomIndex];
  

  quoteText.textContent = `"${quoteObj.quote}"`;
  authorText.textContent = `– ${quoteObj.author}`;
});