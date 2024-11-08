export const drawConcentricCircles = (
    ctx: CanvasRenderingContext2D,
    colors: string[],
    centerX: number,
    centerY: number,
    ringSpacing: number
) => {
    let radius = ringSpacing;
    let colorIndex = 0;

    while (colorIndex < colors.length) {
        const colorsPerRing = Math.ceil((2 * Math.PI * radius) / 4);
        for (let i = 0; i < colorsPerRing && colorIndex < colors.length; i++) {
            const angle = (2 * Math.PI * i) / colorsPerRing;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            // Set the current color before drawing
            ctx.fillStyle = colors[colorIndex++];
            ctx.fillRect(x, y, ringSpacing * 0.8, ringSpacing * 0.8);
        }
        radius += ringSpacing;
    }
};