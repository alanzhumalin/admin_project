import React, { useState } from 'react';
import BannerInput from '../components/BannerInput';
import PromoMessageInput from '../components/PromoMessageInput';
import FAQList from '../components/FAQList';

const ContentManagement = () => {
  const [banner, setBanner] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [faq, setFaq] = useState([{ question: '', answer: '' }]);

  const handleBannerChange = (e) => setBanner(e.target.value);
  const handlePromoMessageChange = (e) => setPromoMessage(e.target.value);
  
  const handleFaqChange = (index, field, value) => {
    const newFaq = [...faq];
    newFaq[index][field] = value;
    setFaq(newFaq);
  };

  const handleAddFaq = () => {
    setFaq([...faq, { question: '', answer: '' }]);
  };

  const handleSave = () => {
    
    console.log('Banner:', banner);
    console.log('Promo Message:', promoMessage);
    console.log('FAQs:', faq);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>

      <BannerInput banner={banner} onChange={handleBannerChange} />
      <PromoMessageInput promoMessage={promoMessage} onChange={handlePromoMessageChange} />
      <FAQList faqs={faq} onFaqChange={handleFaqChange} onAddFaq={handleAddFaq} />

      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Content
      </button>
    </div>
  );
};

export default ContentManagement;
