// src/components/auth/SignUp.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    alert('Check your email for confirmation link (if enabled).');

    if (data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        email: data.user.email,
        created_at: new Date()
      });
    }
  }

  return (
    <form onSubmit={handleSignUp}>
      <input
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
        type="password"
      />
      <button type="submit">Sign up</button>
    </form>
  );
}
