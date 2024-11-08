import { generateColors } from "../utils/generateColors";

describe('generateColors', () => {
    let colors: string[];

    beforeAll(() => {
        colors = generateColors();
    });

    test('should generate exactly 32,768 colors', () => {
        expect(colors.length).toBe(32768);
    });

    test('should generate unique colors', () => {
        const uniqueColors = new Set(colors);
        expect(uniqueColors.size).toBe(32768);
    });

    test('each color should be in the correct rgb format', () => {
        colors.forEach(color => {
          expect(color).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
        });
    });

    test('each color component should be within the 0-255 range', () => {
        colors.forEach(color => {
            const rgbValues = color.match(/\d+/g)?.map(Number);
            expect(rgbValues).toBeDefined();
            rgbValues?.forEach(value => {
                expect(value).toBeGreaterThanOrEqual(0);
                expect(value).toBeLessThanOrEqual(255);
            });
        });
    });    
});