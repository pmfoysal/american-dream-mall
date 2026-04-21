import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './CursorFollower.module.css';

interface CursorFollowerProps {
  color?: string;
  size?: number;
  delay?: number;
}

export function CursorFollower({
  color = '#c9a962',
  size = 12,
  delay = 0.1
}: CursorFollowerProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const animate = useCallback(() => {
    if (!cursorRef.current || !followerRef.current) return;

    // Smooth cursor follow
    cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.3;
    cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.3;

    // Slower follower
    followerPos.current.x += (mousePos.current.x - followerPos.current.x) * delay;
    followerPos.current.y += (mousePos.current.y - followerPos.current.y) * delay;

    cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
    followerRef.current.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;

    rafId.current = requestAnimationFrame(animate);
  }, [delay]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Initialize positions off-screen
    cursor.style.transform = 'translate(-100px, -100px)';
    follower.style.transform = 'translate(-100px, -100px)';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2
      };
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [size, animate]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className={`${styles.cursor} ${isVisible ? styles.visible : ''} ${isClicking ? styles.clicking : ''}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className={`${styles.follower} ${isVisible ? styles.visible : ''} ${isClicking ? styles.clicking : ''}`}
        style={{
          width: size * 3,
          height: size * 3,
          borderColor: color,
        }}
      />
    </>
  );
}