
export function CapitalizedWordsForDifficulties(input) {
    return input
        .split('-')
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join(' ');
}