import { TOKEN } from './tokens';

const Vanilla = new Map<TOKEN, string>();
Vanilla.set(TOKEN.START, '^');
Vanilla.set(TOKEN.END, '$');

Vanilla.set(TOKEN.GREEDY, '*');
Vanilla.set(TOKEN.LAZY, '*?');

Vanilla.set(TOKEN.ANY, '.');

Vanilla.set(TOKEN.WORD, '\\w');
Vanilla.set(TOKEN.DIGIT, '\\d');
Vanilla.set(TOKEN.CHARACTER_LOWERCASE, 'a-z');
Vanilla.set(TOKEN.CHARACTER_UPPERCASE, 'A-Z');

Vanilla.set(TOKEN.ZERO_OR_MORE, '*');
Vanilla.set(TOKEN.ZERO_OR_ONE, '+');

Vanilla.set(TOKEN.NEGATE, '^');
Vanilla.set(TOKEN.LOOKAHEAD, '?=');
Vanilla.set(TOKEN.LOOKBEHIND, '?!');

export { Vanilla } 