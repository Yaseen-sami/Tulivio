// src/components/auth/SignIn.tsx
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useAuth } from '@/lib/useAuth';

export default function SignIn() {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 👇 Redirect if already logged in
  useEffect(() => {
    if (!loading && user) {
      window.location.href = '/'; // Home page
    }
  }, [user, loading]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    window.location.href = '/';
  }

  // Show loader while checking session
  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSignIn}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
