import { drawConcentricCircles } from "../utils/drawHelpers";

interface MockCanvasRenderingContext2D extends CanvasRenderingContext2D {
  _fillStyle: string;
}

describe('drawConcentricCircles', () => {
    let ctx: MockCanvasRenderingContext2D;
    let fillRectSpy: jest.SpyInstance;

    beforeEach(() => {
        const mockCanvas = document.createElement('canvas');

        const mockContext = {
            canvas: mockCanvas,
            fillRect: jest.fn(),
            beginPath: jest.fn(),
            arc: jest.fn(),
            fill: jest.fn(),
            closePath: jest.fn(),
            _fillStyle: '',
            set fillStyle(value: string) {
                this._fillStyle = value;
            },
            get fillStyle() {
                return this._fillStyle;
            },
        };

        ctx = mockContext as unknown as MockCanvasRenderingContext2D;
        fillRectSpy = jest.spyOn(ctx, 'fillRect');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should call fillRect the correct number of times', () => {
        const colors = Array(100).fill('rgb(0, 0, 0)');
        drawConcentricCircles(ctx, colors, 500, 500, 5);
        expect(fillRectSpy).toHaveBeenCalledTimes(colors.length);
    });
    
});
