import QuizShow from "./index";

describe('quizShow', () => {
    const quizShow = new QuizShow();
    
    test('should pass case 1', () => {
        expect(quizShow.wager([100, 100, 100], 25, 75)).toBe(76);
    });
    
    test('should pass case 2', () => {
        expect(quizShow.wager([10, 50, 60], 30, 41)).toBe(0);
    });

    test('should pass case 3', () => {
        expect(quizShow.wager([10, 50, 60], 31, 41)).toBe(10);
    });

    test('should pass case 4', () => {
        expect(quizShow.wager([2, 2, 12], 0, 10)).toBe(1);
    });

    test('should pass case 5', () => {
        expect(quizShow.wager([10000, 10000, 10000], 9998, 9997)).toBe(9999);
    });

    test('should pass case 6', () => {
        expect(quizShow.wager([5824, 4952, 6230], 364, 287)).toBe(694);
    });
});