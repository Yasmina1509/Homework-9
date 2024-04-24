let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "малина"];
let wordsWithN = [];
let wordsWithoutN = [];

letterSearch.forEach(word => {
    if (word.toLowerCase().includes('н')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
});

console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);





