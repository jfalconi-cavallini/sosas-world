'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Glass Pipes', href: '#categories' },
        { label: 'Vapes & Cigars', href: '#categories' },
        { label: 'Accessories', href: '#categories' },
        { label: 'Hours', href: '#hours' },
    ]

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled
                ? 'rgba(4, 0, 26, 0.95)'
                : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(180,79,255,0.3)' : 'none',
            boxShadow: scrolled ? '0 0 30px rgba(180,79,255,0.2)' : 'none',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
            }}>
                {/* Logo */}
                <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{ width: 52, height: 52, position: 'relative', flexShrink: 0 }}>
                        <Image
                            src="/images/sosa-logo.PNG"
                            alt="Sosa's Smoke Shop"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                    <span style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 'clamp(13px, 2.5vw, 18px)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '1px',
                        lineHeight: 1.2,
                    }}>
                        SOSA'S<br />
                        <span style={{
                            color: '#ffe600',
                            textShadow: '0 0 10px #ffe600',
                            fontSize: 'clamp(10px, 2vw, 14px)',
                            letterSpacing: '3px',
                        }}>SMOKE SHOP</span>
                    </span>
                </a>

                {/* Desktop Links */}
                <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} style={{
                            color: '#ccc',
                            textDecoration: 'none',
                            fontFamily: "'Exo 2', sans-serif",
                            fontWeight: 600,
                            fontSize: '14px',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s, text-shadow 0.2s',
                        }}
                            onMouseEnter={e => {
                                (e.target as HTMLElement).style.color = '#39ff14'
                                    ; (e.target as HTMLElement).style.textShadow = '0 0 10px #39ff14'
                            }}
                            onMouseLeave={e => {
                                (e.target as HTMLElement).style.color = '#ccc'
                                    ; (e.target as HTMLElement).style.textShadow = 'none'
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'none',
                        flexDirection: 'column',
                        gap: '5px',
                        padding: '5px',
                    }}
                    className="hamburger"
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map(i => (
                        <span key={i} style={{
                            display: 'block',
                            width: '25px',
                            height: '2px',
                            background: menuOpen ? '#b44fff' : '#fff',
                            transition: 'all 0.3s',
                            transformOrigin: 'center',
                            transform: menuOpen
                                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                                    : i === 1 ? 'scaleX(0)'
                                        : 'rotate(-45deg) translate(5px, -5px)'
                                : 'none',
                        }} />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    background: 'rgba(4, 0, 26, 0.97)',
                    borderTop: '1px solid rgba(180,79,255,0.3)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                }}>
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontFamily: "'Exo 2', sans-serif",
                                fontWeight: 600,
                                fontSize: '16px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                padding: '10px 0',
                                borderBottom: '1px solid rgba(180,79,255,0.2)',
                            }}>
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </nav>
    )
}