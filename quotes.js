const quotes = [
    {
        quote: 'Victory belongs to the most persevering.',
        author: 'Napoleon Bonaparte'
    },
    {
        quote: 'A good conscience is a continual Christmas.',
        author: 'Benjamin Franklin'
    },
    {
        quote: 'What is a friend? A single soul dwelling in two bodies.',
        author: 'Aristotle'
    },
    {
        quote: 'Has not peace honours and glories of her own unattended by the dangers of war?',
        author: 'Hermocrates of Syracuse'
    },
    {
        quote: 'Choose a job you love, and you will never have to work a day in your life.',
        author: 'Confucius'
    },
    {
        quote: 'The words that enlighten the soul are more precious than jewels.',
        author: 'Hazrat Inayat Khan'
    },
    {
        quote: 'A man cannot be too careful in the choice of his enemies.',
        author: 'Oscar Wilde'
    },
    {
        quote: 'A great secret of success is to go through life as a man who never gets used up.',
        author: 'Albert Schweitzer'
    },
    {
        quote: 'Happiness gives us the energy which is the basis of health.',
        author: 'Henri-Frederic Amiel'
    },
    {
        quote: 'A genius is just a talented person who does his homework.',
        author: 'Thomas A. Edison'
    },


]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]



quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author