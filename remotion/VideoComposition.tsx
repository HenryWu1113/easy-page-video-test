import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { OpeningScene } from './scenes/OpeningScene';
import { FeaturesScene } from './scenes/FeaturesScene';
import { ProductsScene } from './scenes/ProductsScene';
import { TestimonialsScene } from './scenes/TestimonialsScene';
import { CTAScene } from './scenes/CTAScene';

export const VideoComposition: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill
            style={{
                backgroundColor: '#0f172a',
            }}
        >
            {/* 場景 1: 開場 (0-150 frames = 0-5秒) */}
            <Sequence from={0} durationInFrames={150}>
                <OpeningScene />
            </Sequence>

            {/* 場景 2: 功能特色 (150-360 frames = 5-12秒) */}
            <Sequence from={150} durationInFrames={210}>
                <FeaturesScene />
            </Sequence>

            {/* 場景 3: 產品方案 (360-540 frames = 12-18秒) */}
            <Sequence from={360} durationInFrames={180}>
                <ProductsScene />
            </Sequence>

            {/* 場景 4: 用戶評價 (540-690 frames = 18-23秒) */}
            <Sequence from={540} durationInFrames={150}>
                <TestimonialsScene />
            </Sequence>

            {/* 場景 5: 行動呼籲 (690-840 frames = 23-28秒) */}
            <Sequence from={690} durationInFrames={150}>
                <CTAScene />
            </Sequence>
        </AbsoluteFill>
    );
};
