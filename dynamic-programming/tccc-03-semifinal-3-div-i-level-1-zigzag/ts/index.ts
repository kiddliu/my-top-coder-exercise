export default class ZigZag {
  longestZigZag(sequence: number[]): number {
    if (sequence.length === 0) return 0;
    if (sequence.length === 1) return 1;

    return this.longestZigZagSequence(sequence).length;
  }

  private longestZigZagSequence(sequence: number[]) : number[] {
    if (sequence.length === 2) return sequence[0] !== sequence[1] ? sequence : [sequence[0]];

    let result;

    const last = sequence[sequence.length - 1];
    const lastState = this.longestZigZagSequence(sequence.slice(0, sequence.length - 1));
    if (lastState.length === 1) {
      result = lastState[0] === last ? lastState : lastState.concat(last);
    } else {
      const last3 = lastState.slice(-2).concat(last);
      if (this.isSequenceOf3ZigZag(last3)) {
        result = lastState.concat(last);
      } else {
        lastState.pop();
        result = lastState.concat(last);
      }
    }
    
    return result;
  }

  private isSequenceOf3ZigZag(sequence: number[]): boolean {
    return (sequence[1] > sequence[0] && sequence[1] > sequence[2]) 
           || (sequence[1] < sequence[0] && sequence[1] < sequence[2]);
  }
}