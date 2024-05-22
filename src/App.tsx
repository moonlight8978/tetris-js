import { useEffect, useMemo, useRef } from "react";
import "./App.css";
import { Board } from "./board";
import { CanvasDrawer } from "./drawer";

function App() {
  const board = useMemo(() => new Board(10, 20), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawer = useMemo(() => {
    return new CanvasDrawer();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      board.onTick();
      drawer.draw(canvasRef.current, board);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [drawer, board]);

  return <canvas ref={canvasRef} width={1000} height={1000} />;
}

export default App;
