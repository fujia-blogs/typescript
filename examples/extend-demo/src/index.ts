interface MouseListenerProcess {
  mouseReleased(e: any): void;
  mousePressed(e: any): void;
  mouseEntered(e: any): void;
  mouseClicked(e: any): void;
  mouseExisted(e: any): void;
}

abstract class MouseListenerProcessAdapter implements MouseListenerProcess {
  mouseReleased(e: any): void {
    throw new Error('Method not implemented.');
  }
  mousePressed(e: any): void {
    throw new Error('Method not implemented.');
  }
  mouseEntered(e: any): void {
    throw new Error('Method not implemented.');
  }

  abstract mouseClicked(e: any): void;

  abstract mouseExisted(e: any): void;
}

class MyMouseListenerProcess extends MouseListenerProcessAdapter {
  mouseClicked(e: any): void {
    throw new Error('Method not implemented.');
  }
  mouseExisted(e: any): void {
    throw new Error('Method not implemented.');
  }
}
