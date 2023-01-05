const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let intRes = [];
	for (let i = 0; i < expr.length; i += 10) {
        intRes.push(expr.slice(i, i + 10));
	}
    intRes = intRes.map((el) => el.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' '));
	intRes = intRes.map((el) => el !== ' ' ? MORSE_TABLE[el] : ' ');
    let endRes = intRes.join('');
	return endRes;
    }


module.exports = {
    decode
}