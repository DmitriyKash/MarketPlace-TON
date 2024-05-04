import React from 'react';
import ProfileForm from './ProfileForm';
import Navigation from './Navigation'; // Assuming Navigation is a separate component

function ProfilePage() {
  return (
    <div>
      <header>
        <h1>Профиль пользователя</h1>
        <Navigation />
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
