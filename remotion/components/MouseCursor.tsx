import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

interface MouseProps {
    x: number;
    y: number;
    click?: boolean;
}

export const MouseCursor: React.FC<MouseProps> = ({ x, y, click = false }) => {
    const frame = useCurrentFrame();

    // 點擊波紋效果
    const rippleScale = click ? interpolate(frame % 30, [0, 10], [0.5, 2], { extrapolateRight: 'clamp' }) : 0;
    const rippleOpacity = click ? interpolate(frame % 30, [0, 10], [1, 0], { extrapolateRight: 'clamp' }) : 0;

    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                pointerEvents: 'none',
                zIndex: 2000,
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
                transform: `translate(-5px, -2px) ${click ? 'scale(0.9)' : 'scale(1)'}`, // 點擊時稍微縮小
                transition: 'transform 0.1s',
            }}
        >
            {/* 點擊波紋 */}
            {click && (
                <div
                    style={{
                        position: 'absolute',
                        left: -10,
                        top: -10,
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '3px solid rgba(255, 255, 255, 0.8)',
                        transform: `scale(${rippleScale})`,
                        opacity: rippleOpacity,
                    }}
                />
            )}

            {/* 滑鼠游標 SVG */}
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                    fill="#1e293b"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
};
