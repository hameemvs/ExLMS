import React from 'react';
import { Mail, Lock, GraduationCap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--primary)' }}>
      <Card style={{ width: '400px', maxWidth: '90%', padding: '40px', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '8px' }}>
            <GraduationCap size={40} className="text-accent" />
            <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '1px' }}>ESOFT</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Shaping Lives, Creating Futures.
          </div>
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>Welcome back</h2>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>Please enter your details to sign in.</p>
        </div>

        <Input 
          label="Email address" 
          placeholder="Enter your email" 
          type="email" 
          icon={<Mail size={18} />} 
        />
        
        <Input 
          label="Password" 
          placeholder="Enter your password" 
          type="password" 
          icon={<Lock size={18} />} 
        />
        
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
          <Link to="#" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>Forgot password?</Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/dashboard" style={{ display: 'block', width: '100%' }}>
             <Button variant="primary" style={{ width: '100%', padding: '12px' }}>Sign in</Button>
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/register" className="text-accent font-medium">Register now</Link>
        </div>
      </Card>
    </div>
  );
}
