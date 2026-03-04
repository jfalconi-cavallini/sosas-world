'use client'
import { useEffect, useRef } from 'react'

export default function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animFrame: number
        let stars: { x: number; y: number; r: number; alpha: number; speed: number; twinkleSpeed: number }[] = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initStars = () => {
            stars = []
            for (let i = 0; i < 180; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 1.8 + 0.2,
                    alpha: Math.random(),
                    speed: Math.random() * 0.3 + 0.05,
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                })
            }
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            stars.forEach(s => {
                s.alpha += s.speed * s.twinkleSpeed * 60 * 0.016
                if (s.alpha > 1 || s.alpha < 0) s.speed *= -1
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255,255,255,${Math.abs(s.alpha)})`
                ctx.fill()
            })
            animFrame = requestAnimationFrame(draw)
        }

        resize()
        initStars()
        draw()

        window.addEventListener('resize', () => { resize(); initStars() })
        return () => {
            cancelAnimationFrame(animFrame)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%', height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )
}