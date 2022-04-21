const guessGifts = (wishList, presents) => {
    let guess = [];
    presents.forEach(p => {
        wishList.forEach(w => {
        if (w.size === p.size && 
            w.clatters === p.clatters &&
            w.weight === p.weight &&
            guess.indexOf(w.name) === -1) {
                guess.push(w.name);
            }
        });
    });
    return guess
}

console.log(guessGifts([
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
], [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]))