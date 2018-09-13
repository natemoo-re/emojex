declare module 'emoji-aware' {
    export function consoleFormat(value: string): string;
    export function isEmoji(value: string): string[];
    export function split(value: string): string[];
    export function withoutEmoji(value: string): string[];
    export function onlyEmoji(value: string): string[];
}