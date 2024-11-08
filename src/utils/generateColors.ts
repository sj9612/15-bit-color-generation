// Helper function to scale 5-bit color values to 8-bit
const scaleColorValue = (value: number): number => Math.round((value * 255) / 31);

// Helper function to convert RGB to HSV
const rgbToHsv = (r: number, g: number, b: number): { h: number; s: number; v: number } => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;
    let h: number = 0;
    const v = max;
    const s = max === 0 ? 0 : delta / max;

    if (delta !== 0) {
        h = (
            (max === r ? (g - b) / delta + (g < b ? 6 : 0) :
            max === g ? (b - r) / delta + 2 :
                        (r - g) / delta + 4)
        ) / 6;
    }
    

    return { h: h * 360, s: s * 100, v: v * 100 };
};

// Function to generate the sorted 15-bit color palette
export const generateColors = (): string[] => {
    const colors: { color: string; h: number; s: number; v: number }[] = [];

    for (let r = 0; r < 32; r++) {
        for (let g = 0; g < 32; g++) {
            for (let b = 0; b < 32; b++) {
                const red = scaleColorValue(r);
                const green = scaleColorValue(g);
                const blue = scaleColorValue(b);

                // Convert RGB to HSV
                const { h, s, v } = rgbToHsv(red, green, blue);
                
                colors.push({
                    color: `rgb(${red}, ${green}, ${blue})`,
                    h,
                    s,
                    v,
                });
            }
        }
    }

    // Sort colors by hue, saturation, and brightness (value)
    colors.sort((a, b) => 
        a.h - b.h || a.s - b.s || a.v - b.v
    );

    return colors.map(c => c.color);
};
