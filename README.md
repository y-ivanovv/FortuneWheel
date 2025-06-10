
# 🎡 Колесо Удачи + Обратная связь (React + Django)

Простой и стильный веб-проект с реализацией "колеса удачи" на React и формой обратной связи, которая сохраняет данные через Django в базу данных.

---

## 🧰 Стек технологий

- **Frontend**: React + CSS
- **Backend**: Django + Django REST Framework
- **База данных**: SQLite

---

## 🚀 Как запустить проект локально

### 🔧 1. Клонирование репозитория

```bash
git clone https://github.com/твой-никнейм/название-репозитория.git
cd название-репозитория
```

### 📦 2. Установка зависимостей

#### Backend (Django):

```bash
cd backend
python -m venv venv
source venv/bin/activate  # или venv\Scripts\activate на Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

#### Frontend (React):

Открой новый терминал:

```bash
cd frontend
npm install
npm start
```

---

## 📬 Форма обратной связи

Форма находится внизу страницы, перед футером. Отправленные сообщения сохраняются в базу данных Django. Проверить можно в Django admin-панели:

```bash
# Создай суперпользователя
python manage.py createsuperuser

# Перейди на
http://127.0.0.1:8000/admin
```

---

## 🧪 Пример .env файла (не забудь создать в backend и frontend)

### backend/.env

```
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=127.0.0.1,localhost
```

---

## 📦 Сборка проекта

### Frontend production build:

```bash
npm run build
```

---

## 🤝 Благодарности

Спасибо за использование этого проекта!  
Если понравилось — поставь ⭐ или сделай fork 🙌
