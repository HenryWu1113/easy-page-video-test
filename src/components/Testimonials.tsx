import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: '王小明',
        role: '科技部落客',
        avatar: '👨‍💼',
        content: '這是我用過最棒的產品!性能強大,設計精美,完全超出我的期待。強烈推薦給所有追求品質的朋友!',
        rating: 5
    },
    {
        id: 2,
        name: '李美麗',
        role: '企業主管',
        avatar: '👩‍💼',
        content: '作為一個忙碌的企業主管,這個產品大大提升了我的工作效率。AI智能助手特別實用,省下很多時間。',
        rating: 5
    },
    {
        id: 3,
        name: '張大衛',
        role: '攝影師',
        avatar: '📸',
        content: '攝影功能太強大了!夜拍效果驚艷,專業模式也很好用。已經成為我工作中不可或缺的工具。',
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="testimonials-header text-center">
                    <h2 className="testimonials-title">
                        用戶真實評價
                    </h2>
                    <p className="testimonials-subtitle">
                        聽聽他們怎麼說
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>

                            <p className="testimonial-content">
                                "{testimonial.content}"
                            </p>

                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-role">{testimonial.role}</div>
                                </div>
                            </div>

                            <div className="testimonial-quote">"</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
