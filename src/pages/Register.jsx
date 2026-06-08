import React, { useState } from 'react';
import { User, Mail, Lock, GraduationCap } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Link } from 'react-router-dom';

const ROLES = ['Student', 'Instructor', 'Coordinator', 'HOD'];

export function Register() {
  const [selectedRole, setSelectedRole] = useState('Student');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'var(--primary)', padding: '40px 0' }}>
      <Card style={{ width: '500px', maxWidth: '90%', padding: '40px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', marginBottom: '8px' }}>
            <GraduationCap size={40} className="text-accent" />
            <span style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '1px' }}>ESOFT</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Create your account
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label className="input-label" style={{ display: 'block', marginBottom: '12px' }}>I am registering as a:</label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {ROLES.map(role => (
              <div 
                key={role} 
                onClick={() => setSelectedRole(role)}
                style={{ cursor: 'pointer' }}
              >
                <Badge 
                  variant={selectedRole === role ? 'primary' : 'default'} 
                  style={{ 
                    padding: '8px 16px', 
                    fontSize: '0.85rem',
                    border: selectedRole === role ? '1px solid var(--accent)' : '1px solid transparent'
                  }}
                >
                  {role}
                </Badge>
              </div>
            ))}
          </div>
        </div>
        
        <Input label="Full Name" placeholder="John Doe" icon={<User size={18} />} />
        <Input label="Email Address" placeholder="name@esoft.edu" type="email" icon={<Mail size={18} />} />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <Input label="Password" placeholder="••••••••" type="password" icon={<Lock size={18} />} />
          <Input label="Confirm Password" placeholder="••••••••" type="password" icon={<Lock size={18} />} />
        </div>
        
        <div style={{ marginTop: '32px' }}>
          <Link to="/login" style={{ display: 'block', width: '100%' }}>
            <Button variant="primary" style={{ width: '100%', padding: '12px' }}>Create Account</Button>
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '32px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/login" className="text-accent font-medium">Sign in</Link>
        </div>
      </Card>
    </div>
  );
}
