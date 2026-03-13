import React, { useState } from 'react';
import { faqData } from '../data/faq';

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq__item">
            <button
                className="faq__question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {faq.question}
                <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            <div className={`faq__answer-wrapper ${isOpen ? 'faq__answer-wrapper--open' : ''}`}>
                <div className="faq__answer">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">FAQs</span>
                    <h2 className="section-header__title">常見問題解答</h2>
                    <p className="section-header__desc">在這裡找到關於 SalesPilot CRM 的常見問題與解答，如有其他疑問，歡迎聯繫我們的支援團隊。</p>
                </div>
                <div className="faq__list">
                    {faqData.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
