'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = heroRef.current
        if (!el) return
        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            const img = el.querySelector('.hero-main-img') as HTMLElement
            if (img) {
                img.style.transform = `translate(${x * 15}px, ${y * 10}px)`
            }
        }
        el.addEventListener('mousemove', onMove)
        return () => el.removeEventListener('mousemove', onMove)
    }, [])

    return (
        <section id="home" ref={heroRef} style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            zIndex: 1,
        }}>
            {/* Background image */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
            }}>
                <Image
                    src="/images/background.PNG"
                    alt="background"
                    fill
                    style={{ objectFit: 'cover', opacity: 0.35 }}
                    priority
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at center, rgba(4,0,26,0.3) 0%, rgba(4,0,26,0.85) 100%)',
                }} />
            </div>

            {/* Content */}
            <div className="container" style={{
                position: 'relative', zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                paddingTop: '100px',
                paddingBottom: '60px',
                gap: '30px',
            }}>
                {/* Hero banner image */}
                <div style={{
                    width: '100%',
                    maxWidth: '900px',
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 0 60px rgba(180,79,255,0.5), 0 0 120px rgba(57,255,20,0.2)',
                    animation: 'fadeInUp 0.8s ease forwards',
                }}>
                    <Image
                        src="/images/template1.PNG"
                        alt="Welcome to Sosa's Smoke Shop"
                        width={900}
                        height={500}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(4,0,26,0.8) 100%)',
                    }} />
                </div>

                {/* Tagline */}
                <p style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: 'clamp(14px, 3vw, 20px)',
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    animation: 'fadeInUp 1s ease 0.2s both',
                }}>
                    Out-of-this-world selection. Down-to-earth prices.
                    <br />
                    <span style={{ color: '#b44fff' }}>Haltom City's premier smoke shop.</span>
                </p>

                {/* CTA Buttons */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    animation: 'fadeInUp 1s ease 0.4s both',
                }}>
                    <a href="#categories" style={{
                        padding: '14px 36px',
                        background: 'linear-gradient(135deg, #b44fff, #7000ff)',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '2px',
                        boxShadow: '0 0 20px rgba(180,79,255,0.6), 0 0 40px rgba(180,79,255,0.3)',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)'
                                ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(180,79,255,0.9), 0 0 60px rgba(180,79,255,0.5)'
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'none'
                                ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(180,79,255,0.6), 0 0 40px rgba(180,79,255,0.3)'
                        }}
                    >
                        Shop Now
                    </a>
                    <a href="#hours" style={{
                        padding: '14px 36px',
                        background: 'transparent',
                        color: '#39ff14',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontFamily: "'Orbitron', sans-serif",
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '2px',
                        border: '2px solid #39ff14',
                        boxShadow: '0 0 15px rgba(57,255,20,0.4)',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(57,255,20,0.1)'
                                ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent'
                                ; (e.currentTarget as HTMLElement).style.transform = 'none'
                        }}
                    >
                        Our Hours
                    </a>
                </div>

                {/* Scroll indicator */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '10px',
                    opacity: 0.6,
                    animation: 'float 2s ease-in-out infinite',
                }}>
                    <span style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#b44fff' }}>Explore</span>
                    <div style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, #b44fff, transparent)',
                    }} />
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    )
}