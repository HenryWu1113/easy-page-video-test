import './CTA.css';

export default function CTA() {
    return (
        <section className="cta">
            <div className="cta-background">
                <div className="cta-glow cta-glow-1"></div>
                <div className="cta-glow cta-glow-2"></div>
            </div>

            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        準備好體驗未來了嗎?
                    </h2>
                    <p className="cta-description">
                        加入超過 50,000 位滿意用戶的行列,立即開始您的智能生活之旅
                    </p>

                    <div className="cta-buttons">
                        <button className="btn btn-primary btn-large">
                            立即購買
                            <span>🚀</span>
                        </button>
                        <button className="btn btn-secondary btn-large">
                            免費試用 30 天
                        </button>
                    </div>

                    <div className="cta-features">
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>30 天退款保證</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>全台免運</span>
                        </div>
                        <div className="cta-feature">
                            <span className="feature-icon">✓</span>
                            <span>24/7 客服支援</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
