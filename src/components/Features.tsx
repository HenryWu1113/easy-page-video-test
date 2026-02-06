import './Features.css';

const features = [
    {
        icon: '⚡',
        title: '極速性能',
        description: '搭載最新處理器,性能提升300%,讓您享受飛一般的速度體驗。'
    },
    {
        icon: '🎨',
        title: '精美設計',
        description: '獲得多項國際設計大獎,每個細節都經過精心打磨,展現極致美學。'
    },
    {
        icon: '🔒',
        title: '安全無憂',
        description: '採用軍規級加密技術,保護您的隱私與數據安全,讓您使用無後顧之憂。'
    },
    {
        icon: '🌍',
        title: '環保永續',
        description: '100%可回收材料製造,減少碳足跡,為地球環保盡一份心力。'
    },
    {
        icon: '🤖',
        title: 'AI智能',
        description: '內建先進AI助手,學習您的使用習慣,提供個性化智能建議。'
    },
    {
        icon: '🔋',
        title: '超長續航',
        description: '創新電池技術,單次充電可使用72小時,告別電量焦慮。'
    }
];

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features-header text-center">
                    <h2 className="features-title">
                        為什麼選擇我們?
                    </h2>
                    <p className="features-subtitle">
                        六大核心優勢,讓您的選擇更有信心
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-hover-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
