'use client';

import { useEffect, useRef } from 'react';

const FloatingCubes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Cube {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 30 + 10;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Wrap around edges
        if (this.x < -this.size) this.x = canvasWidth + this.size;
        if (this.x > canvasWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvasHeight + this.size;
        if (this.y > canvasHeight + this.size) this.y = -this.size;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        // Draw cube wireframe
        const half = this.size / 2;
        
        // Front face
        ctx.strokeStyle = '#a855f7'; // primary-500
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-half, -half, this.size, this.size);

        // Back face (3D effect)
        const offset = this.size * 0.3;
        ctx.strokeStyle = '#7c3aed'; // darker shade
        ctx.beginPath();
        ctx.moveTo(-half + offset, -half + offset);
        ctx.lineTo(half + offset, -half + offset);
        ctx.lineTo(half + offset, half + offset);
        ctx.lineTo(-half + offset, half + offset);
        ctx.closePath();
        ctx.stroke();

        // Connecting lines
        ctx.beginPath();
        ctx.moveTo(-half, -half);
        ctx.lineTo(-half + offset, -half + offset);
        ctx.moveTo(half, -half);
        ctx.lineTo(half + offset, -half + offset);
        ctx.moveTo(half, half);
        ctx.lineTo(half + offset, half + offset);
        ctx.moveTo(-half, half);
        ctx.lineTo(-half + offset, half + offset);
        ctx.stroke();

        ctx.restore();
      }
    }

    const cubes: Cube[] = [];
    const cubeCount = 8;

    for (let i = 0; i < cubeCount; i++) {
      cubes.push(new Cube(canvas.width, canvas.height));
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cubes.forEach((cube) => {
        cube.update(canvas.width, canvas.height);
        cube.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
};

export default FloatingCubes;
