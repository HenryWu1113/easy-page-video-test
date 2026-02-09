import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { CatNarrator } from '../components/CatNarrator.tsx';

const products = [
    {
        name: 'Pro Max 極致版',
        price: 'NT$ 29,999',
        icon: '💎',
        tag: '熱賣',
        features: ['旗艦配置', '512GB 存儲', '專業攝影'],
    },
    {
        name: 'Ultra 超能版',
        price: 'NT$ 19,999',
        icon: '⭐',
        tag: '推薦',
        features: ['高性能', '256GB 存儲', '長續航'],
        featured: true,
    },
    {
        name: 'Lite 輕巧版',
        price: 'NT$ 9,999',
        icon: '✨',
        tag: '新品',
        features: ['輕薄便攜', '128GB 存儲', '日常使用'],
    },
];

export const ProductsScene: React.FC = () => {
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
                background: 'linear-gradient(135deg, #2d1b34 0%, #1a0a1f 100%)',
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
                    width: '800px',
                    height: '800px',
                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                    borderRadius: '50%',
                    filter: 'blur(150px)',
                    opacity: 0.15,
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
                    選擇最適合您的方案
                </h2>
                <p style={{ fontSize: '36px', color: '#d8b4d4', margin: 0 }}>
                    三種版本,滿足不同需求
                </p>
            </div>

            <div
                style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {products.map((product, index) => {
                    // 基本進場動畫
                    const productSpring = spring({
                        frame: frame - 30 - index * 8,
                        fps,
                        config: { damping: 80 },
                    });

                    // === 輪播高亮邏輯 ===
                    // 根據 activeIndex 決定哪個卡片要亮起來
                    // 時間分配: 
                    // 0-40: 進場
                    // 40-80: Index 0 (Pro Max)
                    // 80-120: Index 1 (Ultra)
                    // 120-160: Index 2 (Lite)

                    const highlightStart = 40 + index * 40;
                    const highlightEnd = highlightStart + 40;

                    // 計算當前這張卡片的高亮權重 (0 到 1)
                    // 會有淡入淡出的效果 (因為有重疊區間，所以用 10 幀做過渡)
                    const activeWeight = interpolate(
                        frame,
                        [highlightStart - 10, highlightStart, highlightEnd - 10, highlightEnd],
                        [0, 1, 1, 0],
                        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                    );

                    // 根據權重計算樣式
                    const scale = 1 + activeWeight * 0.1; // 放大 1.1 倍
                    const opacity = 0.6 + activeWeight * 0.4; // 非選取時 0.6，選取時 1.0
                    const shadowBlur = activeWeight * 60; // 陰影大小

                    return (
                        <div
                            key={index}
                            style={{
                                background: product.featured
                                    ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(251, 191, 36, 0.15) 100%)'
                                    : 'rgba(45, 27, 52, 0.8)',
                                padding: '50px 40px',
                                borderRadius: '32px',
                                // 邊框顏色：選取時變亮，未選取時變暗
                                border: product.featured
                                    ? `3px solid rgba(236, 72, 153, ${0.5 + activeWeight * 0.5})`
                                    : `2px solid rgba(236, 72, 153, ${0.2 + activeWeight * 0.8})`,
                                width: '420px',
                                textAlign: 'center',
                                opacity: productSpring * opacity, // 結合進場動畫和高亮不透明度
                                transform: `translateY(${(1 - productSpring) * 50}px) scale(${scale})`, // 結合進場位移和高亮縮放
                                position: 'relative',
                                // 發光效果
                                boxShadow: `0 0 ${shadowBlur}px rgba(236, 72, 153, ${activeWeight * 0.5})`,
                                transition: 'opacity 0.3s, transform 0.3s', // 確保過渡平滑
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '30px',
                                    right: '30px',
                                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                                    color: 'white',
                                    padding: '8px 20px',
                                    borderRadius: '20px',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    opacity: 0.8 + activeWeight * 0.2, // 標籤也跟著亮
                                }}
                            >
                                {product.tag}
                            </div>

                            <div style={{ fontSize: '100px', marginBottom: '20px' }}>
                                {product.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: '42px',
                                    color: '#fef3f9',
                                    margin: '0 0 20px 0',
                                    fontWeight: 700,
                                }}
                            >
                                {product.name}
                            </h3>

                            <div
                                style={{
                                    fontSize: '48px',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fbbf24 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    marginBottom: '30px',
                                    opacity: 0.8 + activeWeight * 0.2,
                                }}
                            >
                                {product.price}
                            </div>

                            <div style={{ marginTop: '30px' }}>
                                {product.features.map((feat, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            fontSize: '24px',
                                            color: '#d8b4d4',
                                            margin: '15px 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                        }}
                                    >
                                        <span style={{ color: '#ec4899', fontSize: '28px', fontWeight: 'bold' }}>
                                            ✓
                                        </span>
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <CatNarrator
                subtitle="喵~ 無論是哪個版本，都是性價比之王!"
                showFrom={40}
                audioOffsetInSeconds={6.1}
                audioDurationInSeconds={4}
            />
        </AbsoluteFill>
    );
};
