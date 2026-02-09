import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CatNarrator } from '../components/CatNarrator.tsx';

const testimonials = [
    {
        name: '王小明',
        role: '科技部落客',
        avatar: '👨‍💼',
        rating: 5,
        comment: '性能強大,設計精美',
    },
    {
        name: '李美麗',
        role: '企業主管',
        avatar: '👩‍💼',
        rating: 5,
        comment: 'AI助手特別實用',
    },
    {
        name: '張大衛',
        role: '攝影師',
        avatar: '📸',
        rating: 5,
        comment: '攝影功能太強大了',
    },
];

export const TestimonialsScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleSpring = spring({
        frame,
        fps,
        config: { damping: 100 },
    });

    return (
        <AbsoluteFill
            style={{
                background: 'linear-gradient(180deg, #1a0a1f 0%, #2d1b34 50%, #1a0a1f 100%)',
                padding: '80px',
                fontFamily: 'Inter, sans-serif',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: '#ec4899',
                    borderRadius: '50%',
                    filter: 'blur(150px)',
                    opacity: 0.2,
                }}
            />

            <div
                style={{
                    textAlign: 'center',
                    marginBottom: '80px',
                    opacity: titleSpring,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <h2
                    style={{
                        fontSize: '72px',
                        fontWeight: 'bold',
                        background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        marginBottom: '20px',
                    }}
                >
                    用戶真實評價
                </h2>
                <p style={{ fontSize: '36px', color: '#d8b4d4', margin: 0 }}>
                    聽聽他們怎麼說
                </p>
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: '60px',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {testimonials.map((testimonial, index) => {
                    const cardSpring = spring({
                        frame: frame - 25 - index * 10,
                        fps,
                        config: { damping: 80 },
                    });

                    return (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(45, 27, 52, 0.8)',
                                padding: '50px',
                                borderRadius: '32px',
                                border: '2px solid rgba(236, 72, 153, 0.3)',
                                width: '500px',
                                opacity: cardSpring,
                                transform: `translateY(${(1 - cardSpring) * 50}px)`,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '8px',
                                    marginBottom: '30px',
                                }}
                            >
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} style={{ fontSize: '36px' }}>
                                        ⭐
                                    </span>
                                ))}
                            </div>

                            <p
                                style={{
                                    fontSize: '32px',
                                    color: '#fef3f9',
                                    marginBottom: '40px',
                                    lineHeight: 1.6,
                                }}
                            >
                                "{testimonial.comment}"
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(251, 191, 36, 0.2) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '48px',
                                        border: '2px solid rgba(236, 72, 153, 0.3)',
                                    }}
                                >
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: '28px',
                                            fontWeight: 600,
                                            color: '#fef3f9',
                                            marginBottom: '5px',
                                        }}
                                    >
                                        {testimonial.name}
                                    </div>
                                    <div style={{ fontSize: '22px', color: '#d8b4d4' }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <CatNarrator
                subtitle="喵~ 超過 50,000 位用戶的五星好評!"
                showFrom={40}
                audioOffsetInSeconds={10}
                audioDurationInSeconds={3}
                audioDelayInFrames={20}
            />
        </AbsoluteFill>
    );
};
