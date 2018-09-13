export enum TOKEN {
    START = 0,
    END,
    GREEDY,
    LAZY,
    ANY,
    CHARACTER_LOWERCASE,
    CHARACTER_UPPERCASE,
    WORD,
    DIGIT,
    ZERO_OR_ONE,
    ZERO_OR_MORE,
    ONE_OR_MORE,
    NEGATE,
    LOOKAHEAD,
    LOOKBEHIND
}

const Tokens = new Map<string, TOKEN>();
Tokens.set('🏁', TOKEN.START);
Tokens.set('✋', TOKEN.END);

Tokens.set('❤️', TOKEN.GREEDY);
Tokens.set('💔', TOKEN.LAZY);

Tokens.set('✨', TOKEN.ANY);

Tokens.set('🔡', TOKEN.CHARACTER_LOWERCASE);
Tokens.set('🔠', TOKEN.CHARACTER_UPPERCASE);
Tokens.set('🔤', TOKEN.WORD);
Tokens.set('🔢', TOKEN.DIGIT);

Tokens.set('0️⃣', TOKEN.ZERO_OR_MORE);
Tokens.set('1️⃣', TOKEN.ZERO_OR_ONE);

Tokens.set('🚫', TOKEN.NEGATE);
Tokens.set('👉', TOKEN.LOOKAHEAD);
Tokens.set('👈', TOKEN.LOOKBEHIND);

export { Tokens };