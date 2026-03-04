'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const categories = [
    {
        title: 'Glass Pipes',
        image: '/images/glass_pipes.PNG',
        description: 'Premium borosilicate pieces, hand-blown art glass, and custom rigs. The finest selection in DFW.',
        accent: '#b44fff',
        glow: 'rgba(180,79,255,0.5)',
    },
    {
        title: 'Vapes & Cigars',
        image: '/images/vapes_cigars.PNG',
        description: 'Top-shelf disposables, premium box mods, fine cigars and blunts from around the galaxy.',
        accent: '#00f5ff',
        glow: 'rgba(0,245,255,0.5)',
    },
    {
        title: 'Accessories',
        image: '/images/accessories.PNG',
        description: 'Grinders, rolling papers, lighters, storage solutions and every tool you need.',
        accent: '#39ff14',
        glow: 'rgba(57,255,20,0.5)',
    },
]

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
    const [hovered, setHovered] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
                background: 'rgba(10, 5, 40, 0.6)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${hovered ? cat.accent : 'rgba(180,79,255,0.25)'}`,
                boxShadow: hovered
                    ? `0 0 30px ${cat.glow}, 0 20px 60px rgba(0,0,0,0.5)`
                    : '0 10px 40px rgba(0,0,0,0.4)',
                flex: '1 1 300px',
                maxWidth: '380px',
                minWidth: '280px',
            }}
        >
            {/* Image */}
            <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '130%',
                overflow: 'hidden',
            }}>
                <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'transform 0.5s ease',
                        transform: hovered ? 'scale(1.06)' : 'scale(1)',
                    }}
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to bottom, transparent 40%, rgba(4,0,26,0.95) 100%)`,
                }} />
            </div>

            {/* Text overlay */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '24px 20px',
            }}>
                <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: 'clamp(16px, 3vw, 22px)',
                    fontWeight: 700,
                    color: cat.accent,
                    textShadow: `0 0 15px ${cat.glow}`,
                    marginBottom: '8px',
                    letterSpacing: '1px',
                }}>
                    {cat.title}
                </h3>
                <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    transform: hovered ? 'translateY(0)' : 'translateY(5px)',
                    opacity: hovered ? 1 : 0.7,
                    transition: 'all 0.3s ease',
                }}>
                    {cat.description}
                </p>
                <div style={{
                    marginTop: '14px',
                    display: 'inline-block',
                    padding: '8px 22px',
                    borderRadius: '50px',
                    border: `1.5px solid ${cat.accent}`,
                    color: cat.accent,
                    fontSize: '11px',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    boxShadow: `0 0 10px ${cat.glow}`,
                    transform: hovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease',
                }}>
                    Explore →
                </div>
            </div>
        </div>
    )
}

export default function Categories() {
    return (
        <section id="categories" style={{
            position: 'relative',
            zIndex: 1,
            padding: 'clamp(60px, 10vw, 120px) 0',
        }}>
            {/* Background pattern */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: -1,
                backgroundImage: 'url(/images/background.PNG)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.08,
            }} />

            <div className="container">
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 70px)' }}>
                    <p style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '11px',
                        letterSpacing: '5px',
                        color: '#b44fff',
                        textTransform: 'uppercase',
                        marginBottom: '12px',
                    }}>
                        Browse Our Universe
                    </p>
                    <h2 style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: 'clamp(28px, 5vw, 52px)',
                        fontWeight: 900,
                        background: 'linear-gradient(135deg, #fff 0%, #b44fff 50%, #39ff14 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1.2,
                        marginBottom: '16px',
                    }}>
                        Shop By Category
                    </h2>
                    <div style={{
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #b44fff, #39ff14)',
                        margin: '0 auto',
                        borderRadius: '2px',
                        boxShadow: '0 0 15px rgba(180,79,255,0.6)',
                    }} />
                </div>

                {/* Cards */}
                <div style={{
                    display: 'flex',
                    gap: 'clamp(16px, 3vw, 30px)',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    {categories.map((cat, i) => (
                        <CategoryCard key={cat.title} cat={cat} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}