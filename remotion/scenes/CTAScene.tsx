import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CatNarrator } from '../components/CatNarrator.tsx';

export const CTAScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const contentSpring = spring({
        frame,
        fps,
        config: { damping: 100 },
    });

    const buttonSpring = spring({
        frame: frame - 30,
        fps,
        config: { damping: 80 },
    });

    const badgeSpring = spring({
        frame: frame - 50,
        fps,
        config: { damping: 80 },
    });

    return (
        <AbsoluteFill
            style={{
                background: 'linear-gradient(135deg, #2d1b34 0%, #1a0a1f 100%)',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '600px',
                    height: '600px',
                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.4,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '20%',
                    width: '500px',
                    height: '500px',
                    background: '#f97316',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.3,
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    paddingBottom: '160px', // 將內容整體往上推，避開右下角的貓咪
                }}
            >
                <div
                    style={{
                        fontSize: '120px',
                        marginBottom: '40px',
                        opacity: contentSpring,
                        transform: `scale(${contentSpring})`,
                    }}
                >
                    🚀
                </div>

                <h2
                    style={{
                        fontSize: '84px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        marginBottom: '40px',
                        opacity: contentSpring,
                    }}
                >
                    準備好體驗未來了嗎?
                </h2>

                <p
                    style={{
                        fontSize: '42px',
                        color: '#d8b4d4',
                        marginBottom: '60px',
                        maxWidth: '1200px',
                        lineHeight: 1.6,
                        opacity: contentSpring,
                    }}
                >
                    加入超過 50,000 位滿意用戶的行列
                    <br />
                    立即開始您的智能生活之旅
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '40px',
                        marginBottom: '60px',
                        opacity: buttonSpring,
                        transform: `translateY(${(1 - buttonSpring) * 30}px)`,
                    }}
                >
                    <button
                        style={{
                            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                            color: 'white',
                            fontSize: '36px',
                            fontWeight: 700,
                            padding: '30px 80px',
                            borderRadius: '60px',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 20px 40px rgba(236, 72, 153, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                        }}
                    >
                        立即購買 <span style={{ fontSize: '42px' }}>→</span>
                    </button>
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '50px',
                        opacity: badgeSpring,
                    }}
                >
                    {['30 天退款保證', '全台免運', '24/7 客服支援'].map((text, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                fontSize: '28px',
                                color: '#d8b4d4',
                            }}
                        >
                            <span
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                }}
                            >
                                ✓
                            </span>
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            <CatNarrator
                subtitle="喵~ 現在購買享有限時優惠,不要錯過喔!"
                showFrom={20}
            />
        </AbsoluteFill>
    );
};
