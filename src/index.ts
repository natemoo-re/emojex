import { TOKEN, Tokens } from "./lib/tokens";
import { Vanilla } from './lib/vanilla';
import { split } from 'emoji-aware';

function tokenize(input: string): (TOKEN | string)[] {
    return split(input).map((x) => Tokens.has(x) ? Tokens.get(x) : x)
}

function parse(pattern: string): string {
    const tokens = tokenize(pattern);
    return tokens.map((value) => (typeof value === 'number') ? Vanilla.get(value) : value).join('');
}

export class EmojExp extends RegExp {
    constructor(pattern: string, flags?: string) {
        const parsed = parse(pattern);
        super(parsed, flags);
    }
}

