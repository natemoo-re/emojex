import { EmojExp } from '.';

console.log('RegExp: ', new RegExp('^.*(?=,)').exec('Hello there, world!'));
// RegExp:  [ 'Hello there', index: 0, input: 'Hello there, world!' ]

console.log('EmojExp: ', new EmojExp('🏁✨❤️(👉,)').exec('Hello there, world!'));
// EmojExp: ['Hello there', index: 0, input: 'Hello there, world!']