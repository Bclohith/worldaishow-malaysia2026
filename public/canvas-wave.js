/**
 * ParticleWave class renders a 3D-perspective digital grid wave on an HTML5 canvas.
 * It uses multiple overlapping sine/cosine functions for fluid motion and interpolates
 * color from cyan to lime green to match the design.
 */
class ParticleWave {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        // Grid configurations
        this.cols = 28;
        this.rows = 14;
        this.time = 0;
        this.speed = 0.008;

        // Wave parameters
        this.amplitude1 = 12;
        this.amplitude2 = 6;
        this.frequency1 = 0.22;
        this.frequency2 = 0.12;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    init() {
        this.resize();
    }

    resize() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        // Set display size
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        
        // Scale canvas drawing context to handle retina displays
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.width = rect.width;
        this.height = rect.height;
    }

    animate() {
        this.time += this.speed;
        this.ctx.clearRect(0, 0, this.width, this.height);

        const spacingX = this.width / (this.cols - 1);
        const spacingY = (this.height * 0.5) / (this.rows - 1);
        const centerY = this.height * 0.55;

        // 2D Array to store calculated 3D coordinates for line drawing
        const gridPoints = [];

        // 1. Calculate positions and project to 2D
        for (let r = 0; r < this.rows; r++) {
            gridPoints[r] = [];
            
            // Depth/perspective scale: 0 is furthest back, 1 is closest front
            const depthRatio = r / (this.rows - 1);
            const scale = 0.35 + 0.65 * depthRatio; 
            
            for (let c = 0; c < this.cols; c++) {
                // Base grid coordinate
                const baseX = c * spacingX;
                const baseY = centerY + (r - this.rows / 2) * spacingY * 0.85;

                // Wave ripple calculation based on X, Z (row depth), and Time
                const wave1 = Math.sin(c * this.frequency1 + r * 0.15 + this.time * 2) * this.amplitude1;
                const wave2 = Math.cos(c * this.frequency2 - this.time * 0.8) * this.amplitude2;
                const dy = (wave1 + wave2) * scale;

                // Project with perspective relative to the center of the screen
                const projX = this.width * 0.5 + (baseX - this.width * 0.5) * scale;
                const projY = baseY + dy * scale + (this.height * 0.12 * (1 - scale));

                // Calculate color interpolation (Cyan on left, Lime Green on right)
                // Normalize X to a ratio between 0 and 1
                const xRatio = Math.max(0, Math.min(1, projX / this.width));
                
                // Cyan RGB: (0, 243, 255)
                // Lime RGB: (181, 245, 35)
                const red = Math.round(0 + (181 - 0) * xRatio);
                const green = Math.round(243 + (245 - 243) * xRatio);
                const blue = Math.round(255 + (35 - 255) * xRatio);
                
                // Fade out particles towards the very back and sides
                const edgeFade = Math.sin(xRatio * Math.PI) * 0.9 + 0.1;
                const alpha = (0.2 + 0.8 * depthRatio) * 0.75 * edgeFade;

                gridPoints[r][c] = {
                    x: projX,
                    y: projY,
                    radius: (0.8 + 1.8 * depthRatio),
                    color: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
                    lineColor: `rgba(${red}, ${green}, ${blue}, ${alpha * 0.15})`
                };
            }
        }

        // 2. Draw connections (Grid Mesh Lines) first so they sit under the dots
        this.ctx.lineWidth = 0.55;
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const current = gridPoints[r][c];

                // Connect to the right neighbor
                if (c < this.cols - 1) {
                    const right = gridPoints[r][c + 1];
                    this.ctx.beginPath();
                    this.ctx.moveTo(current.x, current.y);
                    this.ctx.lineTo(right.x, right.y);
                    this.ctx.strokeStyle = current.lineColor;
                    this.ctx.stroke();
                }

                // Connect to the bottom neighbor (depth-wise connection)
                if (r < this.rows - 1) {
                    const bottom = gridPoints[r + 1][c];
                    this.ctx.beginPath();
                    this.ctx.moveTo(current.x, current.y);
                    this.ctx.lineTo(bottom.x, bottom.y);
                    this.ctx.strokeStyle = current.lineColor;
                    this.ctx.stroke();
                }
            }
        }

        // 3. Draw particles (dots) on top of lines
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const p = gridPoints[r][c];
                
                this.ctx.beginPath();
                this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color;
                
                // Give closer/larger dots a slight glow
                if (p.radius > 1.8) {
                    this.ctx.shadowBlur = 4;
                    this.ctx.shadowColor = p.color;
                } else {
                    this.ctx.shadowBlur = 0;
                }
                
                this.ctx.fill();
            }
        }
        this.ctx.shadowBlur = 0; // Reset shadow

        requestAnimationFrame(() => this.animate());
    }
}

// Initialized when scripts load
document.addEventListener('DOMContentLoaded', () => {
    new ParticleWave('wave-canvas');
});

