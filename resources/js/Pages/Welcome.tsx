
interface WelcomeProps {
  version: string;
}

export default function Welcome({ version }: WelcomeProps) {
  return (
    <div style={{
      fontFamily: 'Figtree, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f3f4f6',
      color: '#111827'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2.5rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.75rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        maxWidth: '500px',
        width: '90%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <img 
            src="https://www.goravel.dev/logo.png" 
            alt="Goravel Logo" 
            style={{ width: '240px' }} 
          />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.75rem 0', color: '#1f2937' }}>
          Goravel + Inertia + React (TSX)
        </h1>
        <p style={{ color: '#4b5563', fontSize: '1.05rem', margin: '0 0 2rem 0', lineHeight: 1.5 }}>
          Welcome to your single-page application built on top of a Laravel-like Go architecture using TypeScript!
        </p>
        <div style={{ 
          fontSize: '0.875rem', 
          color: '#9ca3af', 
          borderTop: '1px solid #e5e7eb', 
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Framework Version:</span>
          <span style={{ fontWeight: 600, color: '#4b5563' }}>Goravel {version}</span>
        </div>
      </div>
    </div>
  );
}
