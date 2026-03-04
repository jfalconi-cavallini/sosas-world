'use client'
import Image from 'next/image'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{
            position: 'relative',
            zIndex: 1,
            background: 'rgba(4, 0, 26, 0.97)',
            borderTop: '1px solid rgba(180,79,255,0.2)',
            padding: 'clamp(40px, 6vw, 70px) 0 30px',
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    gap: '40px',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginBottom: '50px',
                }}>
                    {/* Brand */}
                    <div style={{ flex: '1 1 250px', maxWidth: '320px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ width: 56, height: 56, position: 'relative' }}>
                                <Image src="/images/sosa-logo.PNG" alt="Logo" fill style={{ objectFit: 'contain' }} />
                            </div>
                            <div>
                                <div style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontSize: '18px',
                                    fontWeight: 900,
                                    color: '#fff',
                                }}>SOSA'S</div>
                                <div style={{
                                    fontFamily: "'Orbitron', sans-serif",
                                    fontSize: '11px',
                                    letterSpacing: '3px',
                                    color: '#ffe600',
                                    textShadow: '0 0 10px rgba(255,230,0,0.5)',
                                }}>SMOKE SHOP</div>
                            </div>
                        </div>
                        <p style={{
                            color: 'rgba(255,255,255,0.5)',
                            fontSize: '13px',
                            lineHeight: 1.7,
                            maxWidth: '280px',
                        }}>
                            Your out-of-this-world smoke shop experience. Premium products, extraterrestrial vibes.
                        </p>
                        {/* Social icons row */}
                        <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                            {['Facebook', 'Instagram', 'TikTok'].map(s => (
                                <a key={s} href="#" style={{
                                    width: '38px', height: '38px',
                                    borderRadius: '50%',
                                    border: '1.5px solid rgba(180,79,255,0.4)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#b44fff',
                                    fontSize: '11px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    fontFamily: "'Exo 2', sans-serif",
                                    fontWeight: 600,
                                }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = '#b44fff'
                                            ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(180,79,255,0.5)'
                                            ; (e.currentTarget as HTMLElement).style.background = 'rgba(180,79,255,0.1)'
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,79,255,0.4)'
                                            ; (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                            ; (e.currentTarget as HTMLElement).style.background = 'transparent'
                                    }}
                                >
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div style={{ flex: '1 1 160px' }}>
                        <h4 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '12px',
                            letterSpacing: '3px',
                            color: '#b44fff',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}>Quick Links</h4>
                        {['Home', 'Glass Pipes', 'Vapes & Cigars', 'Accessories', 'Hours'].map(link => (
                            <a key={link} href="#" style={{
                                display: 'block',
                                color: 'rgba(255,255,255,0.5)',
                                textDecoration: 'none',
                                fontSize: '13px',
                                marginBottom: '10px',
                                transition: 'color 0.2s',
                                fontFamily: "'Exo 2', sans-serif",
                            }}
                                onMouseEnter={e => (e.target as HTMLElement).style.color = '#39ff14'}
                                onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'}
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div style={{ flex: '1 1 200px' }}>
                        <h4 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '12px',
                            letterSpacing: '3px',
                            color: '#39ff14',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}>Find Us</h4>
                        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: 2, fontFamily: "'Exo 2', sans-serif" }}>
                            <p>📍 Mansfield, TX</p>
                            <p>📞 (682) 323-8346</p>
                            <p>🕐 Open 7 Days a Week</p>
                            <p style={{ marginTop: '8px', color: '#39ff14', fontSize: '12px' }}>
                                ✅ Age 21+ Verification Required
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', fontFamily: "'Exo 2', sans-serif" }}>
                        © {year} Sosa's World Smoke Shop. All rights reserved.
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', fontFamily: "'Exo 2', sans-serif" }}>
                        🔞 Must be 21+ to purchase tobacco products
                    </p>
                </div>
            </div>
        </footer>
    )
}