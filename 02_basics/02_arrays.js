const marvel = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel.push(dc_heros);

console.log(marvel);
console.log(marvel[3][1]);

const allheros = [...marvel,...dc_heros]
console.log(allheros);


