import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

class MySingleLibStyleComponent {
  private rootElement: any;

  constructor(targetId: string) {
    this.rootElement = document.getElementById(targetId);
    if (!this.rootElement) {
      const errMsg = 'Error: target element is not found';
      console.error(errMsg);
      throw new Error(errMsg);
    }
  }

  public render(): void {
    if (this.rootElement) {
      ReactDOM.render(<App />, this.rootElement);
    }
  }
}

export default MySingleLibStyleComponent;
