export default class QuizShow {
    wager(scores: number[], wager1: number, wager2: number): number {
        const highest1 = scores[1] + wager1,
              lowest1  = scores[1] - wager1,
              highest2 = scores[2] + wager2,
              lowest2  = scores[2] - wager2,
              highest0 = scores[0] * 2;

        if (highest0 > highest1 && highest0 > highest2) {
            return (highest2 > highest1 ? highest2 : highest1) - scores[0] + 1;
        } else if (scores[0] * 2 <= lowest1 || scores[0] * 2 <= lowest2) {
            return 0
        } else if (scores[0] * 2 > lowest1 && scores[0] * 2 > lowest2) {
            return (lowest1 > lowest2 ? lowest1 : lowest2) + 1 - scores[0];
        }

        throw new Error('fuck...');
    }
}