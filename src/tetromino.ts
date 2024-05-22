export abstract class Tetromino {
  protected rotateToShape: Map<number, string[][]>;

  constructor(public x: number, public y: number, protected rotate: number) {}

  moveDown() {
    this.y += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  get shape() {
    return this.rotateToShape.get(this.rotate)!;
  }
}

export class LTetromino extends Tetromino {
  constructor(x: number, y: number, rotate: number) {
    super(x, y, rotate);

    this.rotateToShape = new Map([
      [
        0,
        [
          ["L", "L", "L"],
          ["X", "X", "L"],
        ],
      ],
      [
        90,
        [
          ["L", "L", "X"],
          ["L", "X", "X"],
          ["L", "X", "X"],
        ],
      ],
      [
        180,
        [
          ["L", "L"],
          ["X", "L"],
          ["X", "L"],
        ],
      ],
      [
        270,
        [
          ["X", "X", "L"],
          ["L", "L", "L"],
        ],
      ],
    ]);
  }
}
