import { drawConcentricCircles } from "../utils/drawHelpers";

// Define a custom interface that extends CanvasRenderingContext2D to include the _fillStyle property
interface MockCanvasRenderingContext2D extends CanvasRenderingContext2D {
  _fillStyle: string;
}

describe('drawConcentricCircles', () => {
    let ctx: MockCanvasRenderingContext2D;
    let fillRectSpy: jest.SpyInstance;

    beforeEach(() => {
        // Create a mock canvas element
        const mockCanvas = document.createElement('canvas');

        // Create a partial mock of CanvasRenderingContext2D and assign the mock canvas element
        const mockContext = {
            canvas: mockCanvas,
            fillRect: jest.fn(),
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            closePath: jest.fn(),
            // Define a property to hold the fillStyle value
            _fillStyle: '',
            set fillStyle(value: string) {
                this._fillStyle = value;
            },
            get fillStyle() {
                return this._fillStyle;
            },
        };

        // Cast mockContext to unknown and then to MockCanvasRenderingContext2D
        ctx = mockContext as unknown as MockCanvasRenderingContext2D;

        // Spy on fillRect
        fillRectSpy = jest.spyOn(ctx, 'fillRect');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should call fillRect the correct number of times', () => {
        const colors = Array(100).fill('rgb(0, 0, 0)'); // Use a smaller set of colors for testing
        drawConcentricCircles(ctx, colors, 500, 500, 5);

        // Check that fillRect is called for each color
        expect(fillRectSpy).toHaveBeenCalledTimes(colors.length);
    });
    
});
