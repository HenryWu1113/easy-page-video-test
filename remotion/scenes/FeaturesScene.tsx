import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';
import { CatNarrator } from '../components/CatNarrator.tsx';
import { MouseCursor } from '../components/MouseCursor.tsx';

const features = [
    { icon: '⚡', title: '極速性能', desc: '性能提升 300%' },
    { icon: '🎨', title: '精美設計', desc: '國際大獎肯定' },
    { icon: '🔒', title: '安全無憂', desc: '軍規級加密' },
    { icon: '🌍', title: '環保永續', desc: '100% 可回收' },
    { icon: '🤖', title: 'AI智能', desc: '智能學習助手' },
    { icon: '🔋', title: '超長續航', desc: '72 小時續航' },
];

export const FeaturesScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { width, height, fps } = useVideoConfig();

    // 標題動畫 (0-30幀)
    const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

    // === 運鏡參數 ===
    // 目標卡片中心點 (第一排中間：精美設計)
    const targetX = width / 2;     // 960
    const targetY = 440;           // 卡片大約高度

    // 滑鼠起點 (右下角)
    const startX = width * 0.85;
    const startY = height * 0.85;

    // 1. 滑鼠移動動畫 (Frame 20 -> 60)
    // 提早 20 幀開始，讓節奏更緊湊
    const moveProgress = interpolate(frame, [20, 60], [0, 1], {
        easing: Easing.bezier(0.42, 0, 0.58, 1), // ease-in-out
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    const mouseX = interpolate(moveProgress, [0, 1], [startX, targetX]);
    const mouseY = interpolate(moveProgress, [0, 1], [startY, targetY]);

    // 2. 鏡頭縮放動畫 (Frame 70 -> 200)
    // 之前結束在 230，現在提前到 200 結束，確保在場景切換前完成縮回
    const zoomProgress = interpolate(
        frame,
        [70, 100, 170, 200], // 放大(30f) -> 停留(70f) -> 縮回(30f)
        [1, 2.0, 2.0, 1],
        {
            easing: Easing.bezier(0.25, 1, 0.5, 1), // 平滑縮放
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp'
        }
    );

    // 卡片特效 (配合放大時間)
    const isTargetIndex = 1;
    const glowOpacity = interpolate(frame, [70, 100], [0, 1], { extrapolateRight: 'clamp' });
    const dimOpacity = interpolate(frame, [70, 100], [1, 0.4], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill
            style={{
                background: 'linear-gradient(180deg, #1a0a1f 0%, #2d1b34 100%)',
                padding: '80px',
                fontFamily: 'Inter, sans-serif',
                overflow: 'hidden',
            }}
        >
            {/* 內容層：原地縮放 */}
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    transform: `scale(${zoomProgress})`,
                    transformOrigin: `${targetX}px ${targetY}px`, // 設定縮放中心為卡片位置
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* 標題 */}
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '60px',
                        opacity: titleOpacity,
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
                        六大核心優勢
                    </h2>
                    <p style={{ fontSize: '36px', color: '#d8b4d4', margin: 0 }}>
                        為什麼選擇我們?
                    </p>
                </div>

                {/* 功能網格 */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '40px',
                        maxWidth: '1600px',
                        width: '100%',
                    }}
                >
                    {features.map((feature, index) => {
                        // 每個卡片的進場動畫
                        const featureOpacity = interpolate(
                            frame - 10 - index * 5,
                            [0, 20],
                            [0, 1],
                            { extrapolateRight: 'clamp' }
                        );

                        const featureY = interpolate(
                            frame - 10 - index * 5,
                            [0, 20],
                            [30, 0],
                            { extrapolateRight: 'clamp', easing: Easing.out(Easing.quad) }
                        );

                        // 縮放時，非目標卡片變暗
                        const currentOpacity = index === isTargetIndex ? 1 : (zoomProgress > 1.05 ? dimOpacity : 1);

                        return (
                            <div
                                key={index}
                                style={{
                                    background: 'rgba(45, 27, 52, 0.8)',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    border: `1px solid rgba(236, 72, 153, ${index === isTargetIndex ? 0.3 + glowOpacity : 0.3})`,
                                    textAlign: 'center',
                                    opacity: featureOpacity * currentOpacity,
                                    transform: `translateY(${featureY}px)`,
                                    boxShadow: index === isTargetIndex ? `0 0 ${glowOpacity * 60}px rgba(236, 72, 153, 0.5)` : 'none',
                                    position: 'relative',
                                }}
                            >
                                <div style={{ fontSize: '80px', marginBottom: '20px' }}>
                                    {feature.icon}
                                </div>
                                <h3
                                    style={{
                                        fontSize: '36px',
                                        color: '#fef3f9',
                                        margin: '0 0 10px 0',
                                        fontWeight: 600,
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p style={{ fontSize: '24px', color: '#d8b4d4', margin: 0 }}>
                                    {feature.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* 滑鼠層 (必須在縮放層內) */}
                <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    {/* 只有在進入 Zoom 階段前和中段顯示 (大約到縮回前) */}
                    <MouseCursor
                        x={mouseX}
                        y={mouseY}
                        click={frame > 65 && frame < 170} // 點擊時間配合縮放區間
                    />
                </div>
            </div>

            <CatNarrator
                subtitle="喵~ 看看這個細節，做工非常精緻喔!"
                showFrom={30}
            />
        </AbsoluteFill>
    );
};
