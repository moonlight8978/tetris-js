import { LTetromino, Tetromino } from "./tetromino";

export class Board {
  public currentTetromino: Tetromino;

  public landedGrid: string[][];

  public currentGrid: string[][];

  public offset = 3;

  constructor(public width: number, public height: number) {
    this.landedGrid = new Array(this.width)
      .fill(0)
      .map(() => new Array(this.height + this.offset).fill("X"));

    this.currentGrid = new Array(this.width)
      .fill(0)
      .map(() => new Array(this.height + this.offset).fill("X"));
  }

  public shouldDraw(x: number, y: number) {
    return y >= this.offset;
  }

  public onTick() {
    if (!this.currentTetromino) {
      this.currentTetromino = this.randomTetromino();
      return;
    }

    if (this.currentTetromino.y < this.height) {
      this.currentTetromino.moveDown();
    } else {
      this.currentTetromino.shape.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          this.landedGrid[this.currentTetromino.x + rowIndex][
            this.currentTetromino.y + colIndex
          ] = cell;
        });
      });

      this.currentTetromino = this.randomTetromino();
    }

    this.landedGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        this.currentGrid[rowIndex][colIndex] = cell;
      });
    });

    this.currentTetromino.shape.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        this.currentGrid[this.currentTetromino.x + rowIndex][
          this.currentTetromino.y + colIndex
        ] = cell;
      });
    });

    // console.table(this.currentGrid);
  }

  public randomTetromino() {
    return new LTetromino(4, 0, 0);
  }
}
