import React from 'react';
import ProfileForm from './ProfileForm';

function ProfilePage() {
  return (
    <div>
      <header>
        <h1>Профиль пользователя</h1>
        {/* Меню навигации (если необходимо) */}
      </header>
      <main>
        {/* Секция с данными пользователя */}
        <section id="user-profile">
          <h2>Личные данные</h2>
          <ProfileForm />
          {/* Здесь будут отображаться данные пользователя */}
        </section>
        
        {/* Другие разделы профиля пользователя */}
      </main>
      <footer>
        <p>© 2024 TON Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProfilePage;
