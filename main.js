//variable with an array of lyric snippits
const MysteryMsg = ['I can\'t stop what you began', 'A spectre of my mortal soul', 'Flow like a river', 'I\'m breaking the habit tonight', 'A metamorphosis samurai'];

const randomMsgGenerator = msg => {
    console.log(msg[Math.floor(Math.random() * 5)]);
}

randomMsgGenerator(MysteryMsg);