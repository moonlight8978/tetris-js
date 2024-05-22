import { Board } from "./board";

export class CanvasDrawer {
  constructor() {}

  draw(canvas: HTMLCanvasElement, board: Board) {
    const padding = 4;
    const blockSize = 20;
    const offset = 10;

    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#000000";
    ctx.rect(
      offset,
      offset,
      board.width * (blockSize + padding) + padding,
      board.height * (blockSize + padding) + padding
    );
    ctx.stroke();

    console.table(board.currentGrid);

    board.currentGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!board.shouldDraw(rowIndex, colIndex)) {
          return;
        }

        switch (cell) {
          case "L":
            ctx.fillStyle = "#8BF8A7";
            break;

          case "X":
          default:
            ctx.fillStyle = "#e0e0e0";
            break;
        }

        // ctx.fillText(
        //   cell,
        //   offset + padding + rowIndex * (blockSize + padding),
        //   offset + padding + (colIndex - 2) * (blockSize + padding)
        // );
        ctx.fillRect(
          offset + padding + rowIndex * (blockSize + padding),
          offset + padding + (colIndex - board.offset) * (blockSize + padding),
          blockSize,
          blockSize
        );
      });
    });

    ctx.stroke();
  }
}
