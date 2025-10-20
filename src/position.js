/**
 * Position utility class for Construct object positions
 * Represents X, Y coordinates as floating-point numbers
 */

export class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    toString() {
        return `Position(x=${this.x}, y=${this.y})`;
    }
}
