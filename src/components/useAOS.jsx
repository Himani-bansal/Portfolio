import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Duration of animation in milliseconds
            once: false, // Animation should happen more than once
        });

        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};

export default useAOS;
