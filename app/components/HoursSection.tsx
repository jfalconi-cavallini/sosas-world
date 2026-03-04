'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const hours = [
    { day: 'Monday', time: '10:00 AM – 11:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 11:00 PM' },
    { day: 'Wednesday', time: '10:00 AM – 12:00 PM' },
    { day: 'Thursday', time: '10:00 AM – 12:00 AM' },
    { day: 'Friday', time: '10:00 AM – 12:00 AM' },
    { day: 'Saturday', time: '10:00 AM – 12:00 AM' },
    { day: 'Sunday', time: '10:00 AM – 10:00 PM' },
]

function getTodayIndex() {
    return new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
}

export default function HoursSection() {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const todayIndex = getTodayIndex()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="hours" ref={ref} style={{
            position: 'relative',
            zIndex: 1,
            padding: 'clamp(60px, 10vw, 120px) 0',
            overflow: 'hidden',
        }}>
            {/* Neon line divider top */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #b44fff, #39ff14, #00f5ff, transparent)',
                boxShadow: '0 0 20px rgba(180,79,255,0.5)',
            }} />

            <div className="container">
                <div style={{
                    display: 'flex',
                    gap: 'clamp(30px, 5vw, 60px)',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {/* Mascot */}
                    <div style={{
                        flex: '0 0 auto',
                        width: 'clamp(220px, 35vw, 380px)',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'all 0.8s ease',
                    }}>
                        <Image
                            src="/images/mascot.PNG"
                            alt="Sosa's Mascot"
                            width={380}
                            height={500}
                            style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 30px rgba(57,255,20,0.4))' }}
                        />
                    </div>

                    {/* Hours card */}
                    <div style={{
                        flex: '1 1 300px',
                        maxWidth: '500px',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s ease 0.2s',
                    }}>
                        <p style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '5px',
                            color: '#39ff14',
                            textTransform: 'uppercase',
                            marginBottom: '12px',
                        }}>
                            Come Visit Us
                        </p>
                        <h2 style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: 'clamp(24px, 4vw, 42px)',
                            fontWeight: 900,
                            color: '#fff',
                            marginBottom: '8px',
                            lineHeight: 1.2,
                        }}>
                            Business Hours
                        </h2>
                        <p style={{
                            color: '#b44fff',
                            fontSize: '13px',
                            marginBottom: '28px',
                            letterSpacing: '1px',
                        }}>
                            📍 Haltom City, TX
                        </p>

                        {/* Hours list */}
                        <div style={{
                            background: 'rgba(10, 5, 40, 0.7)',
                            backdropFilter: 'blur(15px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(180,79,255,0.3)',
                            overflow: 'hidden',
                            boxShadow: '0 0 40px rgba(180,79,255,0.2)',
                        }}>
                            {hours.map((row, i) => (
                                <div key={row.day} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '13px 20px',
                                    background: i === todayIndex
                                        ? 'linear-gradient(90deg, rgba(180,79,255,0.2), rgba(57,255,20,0.1))'
                                        : i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                                    borderLeft: i === todayIndex ? '3px solid #39ff14' : '3px solid transparent',
                                    transition: 'background 0.2s',
                                }}>
                                    <span style={{
                                        fontFamily: "'Exo 2', sans-serif",
                                        fontWeight: i === todayIndex ? 700 : 500,
                                        color: i === todayIndex ? '#39ff14' : '#ccc',
                                        fontSize: '14px',
                                        letterSpacing: '0.5px',
                                    }}>
                                        {row.day} {i === todayIndex && <span style={{ fontSize: '11px', color: '#39ff14', marginLeft: '6px' }}>← Today</span>}
                                    </span>
                                    <span style={{
                                        fontFamily: "'Orbitron', sans-serif",
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        color: i === todayIndex ? '#fff' : 'rgba(255,255,255,0.7)',
                                        letterSpacing: '0.5px',
                                    }}>
                                        {row.time}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <a href="tel:+18175550000" style={{
                                padding: '12px 24px',
                                background: 'linear-gradient(135deg, #39ff14, #00aa00)',
                                color: '#000',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 700,
                                fontSize: '12px',
                                letterSpacing: '1px',
                                boxShadow: '0 0 20px rgba(57,255,20,0.5)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                            }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                                        ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(57,255,20,0.7)'
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.transform = 'none'
                                        ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(57,255,20,0.5)'
                                }}
                            >
                                📞 Call Us
                            </a>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{
                                padding: '12px 24px',
                                background: 'transparent',
                                color: '#00f5ff',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 700,
                                fontSize: '12px',
                                letterSpacing: '1px',
                                border: '1.5px solid #00f5ff',
                                boxShadow: '0 0 15px rgba(0,245,255,0.3)',
                                transition: 'all 0.2s',
                            }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'rgba(0,245,255,0.1)'
                                        ; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'transparent'
                                        ; (e.currentTarget as HTMLElement).style.transform = 'none'
                                }}
                            >
                                📍 Get Directions
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Neon line divider bottom */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f5ff, #b44fff, #39ff14, transparent)',
                boxShadow: '0 0 20px rgba(0,245,255,0.5)',
            }} />
        </section>
    )
}