import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/feedback/submit/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Спасибо за ваш отзыв!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Ошибка при отправке формы");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h3>Обратная связь</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ваше имя"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ваш email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Ваше сообщение"
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FeedbackForm;
