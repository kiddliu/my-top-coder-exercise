export default class GrafixMask {
    constructor(private panel: boolean[][] = new Array(400).fill(false).map(() => new Array(600).fill(false))) {
    }

    sortedAreas(rectangles: string[]): number[] {
        this.markRectangles(rectangles);

        const result: number[] = [];
        this.panel.forEach((row, ri) => row.forEach((_, ci) => result.push(this.colorNode(ri, ci))));
        return result.filter(r => r > 0).sort((a, b) => a - b);
    }

    private markRectangles(rectangles: string[]): void {
        rectangles.forEach(rectangle => {
            const coorndinates: number[] = rectangle.split(" ").map(Number);
            if (coorndinates.length === 4) {
                for (let row: number = coorndinates[0]; row <= coorndinates[2]; row++) {
                    for (let col: number = coorndinates[1]; col <= coorndinates[3]; col++) {
                        this.panel[row][col] = true;
                    }
                }
            }
        });
    }

    private colorNode(row: number, col: number): number {
        if (row < 0 || row >= this.panel.length) { return 0; }
        if (col < 0 || col >= this.panel[0].length) { return 0; }
        if (this.panel[row][col]) { return 0; }

        this.panel[row][col] = true;

        return 1 + this.colorNode(row + 1, col) + this.colorNode(row, col + 1)
                 + this.colorNode(row - 1, col) + this.colorNode(row, col - 1);
    }
}