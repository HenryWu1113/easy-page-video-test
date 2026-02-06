import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content fade-in-up">
          <span className="hero-badge">✨ 2026 全新上市</span>
          <h1 className="hero-title">
            革命性智能產品
            <br />
            <span className="text-gradient">改變你的生活</span>
          </h1>
          <p className="hero-description">
            體驗前所未有的創新科技,讓每一天都充滿驚喜。
            我們的產品結合最新AI技術與優雅設計,為您帶來極致體驗。
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">
              立即購買
              <span>→</span>
            </button>
            <button className="btn btn-secondary">
              了解更多
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">滿意客戶</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">用戶評分</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">回購率</div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="product-showcase">
            <div className="product-card">
              <div className="product-glow"></div>
              <div className="product-content">
                <div className="product-icon">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
