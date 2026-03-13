import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [show, setShow] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setShow(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsExiting(true);
        setTimeout(() => {
            setShow(false);
        }, 400); // 配合 CSS 動畫時間
    };

    if (!show) return null;

    return (
        <div className={`cookie-consent ${isExiting ? 'cookie-consent--exit' : 'cookie-consent--enter'}`}>
            <div className="cookie-consent__inner">
                <div className="cookie-consent__text">
                    我們使用 Cookie 來改善您的瀏覽體驗。繼續瀏覽本網站即表示您同意我們的存取政策。
                </div>
                <div className="cookie-consent__actions">
                    <a href="#" className="btn btn--sm btn--outline">了解更多</a>
                    <button onClick={handleAccept} className="btn btn--sm btn--primary">接受全部</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
