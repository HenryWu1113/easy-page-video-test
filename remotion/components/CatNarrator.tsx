import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

interface CatNarratorProps {
    subtitle: string;
    showFrom?: number;
}

export const CatNarrator: React.FC<CatNarratorProps> = ({ subtitle, showFrom = 0 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 貓咪進場動畫
    const catEntrance = spring({
        frame: frame - showFrom,
        fps,
        config: {
            damping: 100,
        },
    });

    // 對話泡泡出現動畫
    const bubbleSpring = spring({
        frame: frame - showFrom - 15,
        fps,
        config: {
            damping: 80,
        },
    });

    // 貓咪眨眼動畫 - 更快速更自然
    const blinkFrame = frame % 90;
    const isBlinking = blinkFrame >= 0 && blinkFrame <= 5;

    // 對話泡泡縮放呼吸效果
    const breathe = Math.sin(frame / 15) * 0.02 + 1;

    // 貓尾巴搖擺
    const tailWag = Math.sin(frame / 10) * 5;

    if (frame < showFrom) return null;

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '60px',
                right: '60px',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'flex-end',
                gap: '20px',
            }}
        >
            {/* 對話泡泡 (雲朵形狀) - 改為左側 */}
            <div
                style={{
                    position: 'relative',
                    background: 'rgba(255, 255, 255, 0.98)',
                    padding: '20px 30px',
                    borderRadius: '30px',
                    marginBottom: '60px', // 稍微往上提一點，對齊貓頭
                    maxWidth: '600px', // 增加寬度，讓文字更橫向
                    whiteSpace: 'nowrap', // 盡量不換行
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    border: '3px solid #fbbf24',
                    opacity: bubbleSpring,
                    transform: `scale(${bubbleSpring * breathe}) translateY(${(1 - bubbleSpring) * 20}px)`,
                }}
            >
                {/* 文字內容 */}
                <p
                    style={{
                        fontSize: '28px', // 稍微加大字體
                        color: '#1e293b',
                        margin: 0,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        fontFamily: 'Inter, sans-serif',
                    }}
                >
                    {subtitle}
                </p>

                {/* 泡泡尾巴 - 指向右邊的貓 */}
                <div
                    style={{
                        position: 'absolute',
                        right: '-28px', // 移到右側
                        bottom: '20px',
                        display: 'flex',
                        gap: '4px',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '18px',
                            height: '18px',
                            background: 'white',
                            borderRadius: '50%',
                            border: '2px solid #fbbf24',
                        }}
                    />
                    <div
                        style={{
                            width: '12px',
                            height: '12px',
                            background: 'white',
                            borderRadius: '50%',
                            border: '2px solid #fbbf24',
                        }}
                    />
                    <div
                        style={{
                            width: '6px',
                            height: '6px',
                            background: 'white',
                            borderRadius: '50%',
                            border: '2px solid #fbbf24',
                        }}
                    />
                </div>
            </div>

            {/* 可愛貓咪 */}
            <div
                style={{
                    position: 'relative',
                    opacity: catEntrance,
                    transform: `translateY(${(1 - catEntrance) * 50}px) scale(${catEntrance})`,
                    flexShrink: 0, // 防止貓咪被壓縮
                }}
            >
                {/* 貓咪身體 */}
                <div
                    style={{
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid #fff',
                        boxShadow: '0 12px 30px rgba(251, 191, 36, 0.4)',
                        position: 'relative',
                        overflow: 'visible',
                    }}
                >
                    {/* 左耳朵 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-25px',
                            left: '15px',
                            width: '0',
                            height: '0',
                            borderLeft: '20px solid transparent',
                            borderRight: '0px solid transparent',
                            borderBottom: '35px solid #fbbf24',
                            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                        }}
                    >
                        {/* 耳朵內部 */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '8px',
                                left: '-12px',
                                width: '0',
                                height: '0',
                                borderLeft: '12px solid transparent',
                                borderRight: '0px solid transparent',
                                borderBottom: '20px solid #fcd34d',
                            }}
                        />
                    </div>

                    {/* 右耳朵 */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '-25px',
                            right: '15px',
                            width: '0',
                            height: '0',
                            borderLeft: '0px solid transparent',
                            borderRight: '20px solid transparent',
                            borderBottom: '35px solid #fbbf24',
                            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))',
                        }}
                    >
                        {/* 耳朵內部 */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '8px',
                                right: '-12px',
                                width: '0',
                                height: '0',
                                borderLeft: '0px solid transparent',
                                borderRight: '12px solid transparent',
                                borderBottom: '20px solid #fcd34d',
                            }}
                        />
                    </div>

                    {/* 臉部 */}
                    <div style={{ position: 'relative', marginTop: '10px' }}>
                        {/* 眼睛容器 */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '32px',
                                marginBottom: '12px',
                                justifyContent: 'center',
                            }}
                        >
                            {/* 左眼 */}
                            <div
                                style={{
                                    width: isBlinking ? '16px' : '10px',
                                    height: isBlinking ? '3px' : '10px',
                                    background: '#1f2937',
                                    borderRadius: isBlinking ? '2px' : '50%',
                                    transition: 'all 0.1s ease',
                                }}
                            />
                            {/* 右眼 */}
                            <div
                                style={{
                                    width: isBlinking ? '16px' : '10px',
                                    height: isBlinking ? '3px' : '10px',
                                    background: '#1f2937',
                                    borderRadius: isBlinking ? '2px' : '50%',
                                    transition: 'all 0.1s ease',
                                }}
                            />
                        </div>

                        {/* 腮紅 */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '5px',
                                left: '-35px',
                                width: '22px',
                                height: '15px',
                                background: 'rgba(251, 113, 133, 0.4)',
                                borderRadius: '50%',
                                filter: 'blur(3px)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '5px',
                                right: '-35px',
                                width: '22px',
                                height: '15px',
                                background: 'rgba(251, 113, 133, 0.4)',
                                borderRadius: '50%',
                                filter: 'blur(3px)',
                            }}
                        />

                        {/* 鼻子 */}
                        <div
                            style={{
                                width: '12px',
                                height: '10px',
                                background: '#f87171',
                                borderRadius: '0 0 50% 50%',
                                margin: '0 auto 6px',
                            }}
                        />

                        {/* 嘴巴 */}
                        <div
                            style={{
                                textAlign: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                color: '#78350f',
                                lineHeight: 1,
                            }}
                        >
                            ω
                        </div>
                    </div>
                </div>

                {/* 尾巴 */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '-35px',
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                        borderRadius: '50%',
                        border: '3px solid #fff',
                        boxShadow: '0 4px 12px rgba(251, 191, 36, 0.3)',
                        transform: `rotate(${tailWag}deg)`,
                        transformOrigin: 'left center',
                    }}
                />
            </div>
        </div>
    );
};
