import "./Main.css";
import rogerHeader from '../../assets/rogerHeader.jpg';
import { Typewriter } from "react-simple-typewriter";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from 'react-spring';

export default function Main() {
    const canvasRef = useRef();
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, api] = useSpring(() => ({
      r: 0,
      config: {
        mass: 1,
        tension: 280,
        friction: 40,
        precision: 0.001,
      },
    }));
    useEffect(() => {
      let width = 0;
      const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
      window.addEventListener('resize', onResize)
      onResize()
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 3,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [1, 1, 1],
        markerColor: [0 / 255, 200 / 255, 21 / 255],
        glowColor: [1.2, 1.2, 1.2],
        markers: [{ location: [38.6719, -121.1613], size: .07 }],
        onRender: (state) => {
          state.phi = r.get()
          state.width = width * 2
          state.height = width * 2
        }
      })
      setTimeout(() => canvasRef.current.style.opacity = '1')
      return () => { 
        globe.destroy();
        window.removeEventListener('resize', onResize);
      }
    }, [])
  return (
    <main className="main">
      <div className="main__contents">
        <div className="main__caption">
          <p className="main__text">
            My Name Is Roger Gaylord.
          </p>
          <p className="main__text-span">
            <Typewriter words={['Full Stack Developer', 'Experienced Account Manager', 'Software Engineer', 'Team Player']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} cursorBlinking/>
            </p>
        </div>
      </div>
      <div style={{
            width: '100%',
            maxWidth: 600,
            aspectRatio: 1,
            margin: 'auto',
            position: 'relative',
            }}>
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                pointerInteracting.current =
                    e.clientX - pointerInteractionMovement.current;
                canvasRef.current.style.cursor = 'grabbing';
                }}
                onPointerUp={() => {
                pointerInteracting.current = null;
                canvasRef.current.style.cursor = 'grab';
                }}
                onPointerOut={() => {
                pointerInteracting.current = null;
                canvasRef.current.style.cursor = 'grab';
                }}
                onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                    const delta = e.clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta;
                    api.start({
                    r: delta / 200,
                    });
                }
                }}
                onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                    const delta = e.touches[0].clientX - pointerInteracting.current;
                    pointerInteractionMovement.current = delta;
                    api.start({
                    r: delta / 100,
                    });
                }
                }}
                style={{
                width: '100%',
                height: '100%',
                cursor: 'grab',
                contain: 'layout paint size',
                opacity: 0,
                transition: 'opacity 1s ease',
                }}
            />
        </div>
      {/* <div className="main__image">
            <img src={rogerHeader} alt="Roger Gaylord" className="main__picture" />
        </div> */}
    </main>
  );
}
