import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="brand-name">🚀 TechPro</h3>
                        <p className="brand-tagline">創新科技,改變未來</p>
                        <div className="social-links">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">📷</a>
                            <a href="#" className="social-link">🐦</a>
                            <a href="#" className="social-link">📺</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4 className="link-title">產品</h4>
                            <ul className="link-list">
                                <li><a href="#features">功能特色</a></li>
                                <li><a href="#products">產品方案</a></li>
                                <li><a href="#">技術規格</a></li>
                                <li><a href="#">常見問題</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4 className="link-title">公司</h4>
                            <ul className="link-list">
                                <li><a href="#">關於我們</a></li>
                                <li><a href="#">最新消息</a></li>
                                <li><a href="#">聯絡我們</a></li>
                                <li><a href="#">加入我們</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4 className="link-title">支援</h4>
                            <ul className="link-list">
                                <li><a href="#">客服中心</a></li>
                                <li><a href="#">保固服務</a></li>
                                <li><a href="#">退換貨政策</a></li>
                                <li><a href="#">隱私權政策</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} TechPro. All rights reserved. Made with ❤️ in Taiwan
                    </p>
                </div>
            </div>
        </footer>
    );
}
