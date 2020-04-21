export default class GrafixMask {
    sortedAreas(rectangles: string[]): number[] {
        const panel = new Array(400).fill(false).map(() => new Array(600).fill(false));
        this.markRectangles(panel, rectangles);

        const result: number[] = [];
        panel.forEach((row, ri) => row.forEach((column, ci) => result.push(this.colorEmpty(panel, ri, ci))));
        return result;
    }

    private markRectangles(panel: boolean[][], rectangles: string[]): void {
        
    }

    private colorEmpty(panel: boolean[][], row, column): number {
        return 0;
    }
}