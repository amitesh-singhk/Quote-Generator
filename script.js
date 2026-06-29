const quotes = [
    "Believe in yourself.",
    "Success comes from hard work.",
    "Never stop learning.",
    "Dream big and dare to fail.",
    "Stay positive and be happy.",
    "Small steps every day lead to big results.",
    "Your only limit is your mind.",
    "Consistency is the key to success."
];

const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
});