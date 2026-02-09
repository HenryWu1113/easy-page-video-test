import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { CatNarrator } from '../components/CatNarrator.tsx';

export const OpeningScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleOpacity = spring({
        frame: frame - 20,
        fps,
        config: { damping: 100 },
    });

    const titleScale = spring({
        frame: frame - 20,
        fps,
        config: { mass: 0.5 },
    });

    const subtitleOpacity = spring({
        frame: frame - 40,
        fps,
        config: { damping: 100 },
    });

    return (
        <AbsoluteFill
            style={{
                background: 'linear-gradient(135deg, #1a0a1f 0%, #2d1b34 100%)',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '600px',
                    height: '600px',
                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.3,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '500px',
                    height: '500px',
                    background: '#f97316',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.2,
                }}
            />

            <div style={{ textAlign: 'center', zIndex: 1 }}>
                <div
                    style={{
                        fontSize: '120px',
                        marginBottom: '40px',
                        opacity: titleOpacity,
                        transform: `scale(${titleScale})`,
                    }}
                >
                    🚀
                </div>

                <h1
                    style={{
                        fontSize: '96px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        marginBottom: '30px',
                        opacity: titleOpacity,
                        transform: `scale(${titleScale})`,
                    }}
                >
                    TechPro
                </h1>

                <p
                    style={{
                        fontSize: '42px',
                        color: '#d8b4d4',
                        opacity: subtitleOpacity,
                    }}
                >
                    革命性智能產品,改變你的生活
                </p>
            </div>

            <CatNarrator
                subtitle="喵~ 體驗前所未有的創新科技!"
                showFrom={60}
                audioOffsetInSeconds={0}
                audioDurationInSeconds={3.2}
            />
        </AbsoluteFill>
    );
};
