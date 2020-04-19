import ZigZag from "./index";

describe('zigzag', () => {
    const zigzag = new ZigZag();
    
    test('should pass case 1', () => {
        expect(zigzag.longestZigZag([1, 7, 4, 9, 2, 5])).toBe(6);
    });
    
    test('should pass case 2', () => {
        expect(zigzag.longestZigZag([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7);
    });

    test('should pass case 3', () => {
        expect(zigzag.longestZigZag([44])).toBe(1);
    });

    test('should pass case 4', () => {
        expect(zigzag.longestZigZag([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2);
    });

    test('should pass case 5', () => {
        expect(zigzag.longestZigZag([70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32])).toBe(8);
    });

    test('should pass case 6', () => {
        expect(zigzag.longestZigZag([374, 40, 854, 203, 203, 156, 362, 279, 812, 955, 600, 947, 978, 46, 100, 953, 670, 862, 568, 188, 67, 669, 810, 704, 52, 861, 49, 640, 370, 908, 477, 245, 413, 109, 659, 401, 483, 308, 609, 120, 249, 22, 176, 279, 23, 22, 617, 462, 459, 244])).toBe(36);
    });

    test('should pass case 7', () => {
        expect(zigzag.longestZigZag([1, 1, 1, 1, 1, 1, 1])).toBe(1);
    });
});