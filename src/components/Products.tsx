import './Products.css';

const products = [
    {
        id: 1,
        name: 'Pro Max 極致版',
        price: '29,999',
        originalPrice: '35,999',
        image: '💎',
        tag: '熱賣',
        features: ['旗艦配置', '512GB存儲', '專業攝影']
    },
    {
        id: 2,
        name: 'Ultra 超能版',
        price: '19,999',
        originalPrice: '23,999',
        image: '⭐',
        tag: '推薦',
        features: ['高性能', '256GB存儲', '長續航']
    },
    {
        id: 3,
        name: 'Lite 輕巧版',
        price: '9,999',
        originalPrice: '12,999',
        image: '✨',
        tag: '新品',
        features: ['輕薄便攜', '128GB存儲', '日常使用']
    }
];

export default function Products() {
    return (
        <section className="products" id="products">
            <div className="container">
                <div className="products-header text-center">
                    <h2 className="products-title">
                        選擇最適合您的方案
                    </h2>
                    <p className="products-subtitle">
                        三種版本,滿足不同需求,總有一款適合您
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`product-card ${index === 1 ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {product.tag && (
                                <div className="product-tag">{product.tag}</div>
                            )}

                            <div className="product-image">
                                <div className="product-icon">{product.image}</div>
                            </div>

                            <h3 className="product-name">{product.name}</h3>

                            <div className="product-price">
                                <span className="price-current">NT$ {product.price}</span>
                                <span className="price-original">NT$ {product.originalPrice}</span>
                            </div>

                            <ul className="product-features">
                                {product.features.map((feature, i) => (
                                    <li key={i} className="feature-item">
                                        <span className="feature-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="btn btn-product">
                                立即選購
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
