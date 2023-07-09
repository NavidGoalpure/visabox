import useDevice from 'Hooks/useDevice';
import { useEffect, useState } from 'react';
import BlogCardsMobile from './Mobile/BlogCardsMobile';
import DesktopCards from './Desktop/DesktopCards';

const SmartBlogWall = () => {
    const [screen, setScreen] = useState<'MOBILE' | 'DESKTOP'>('MOBILE');
    const { isLaptop } = useDevice();
    useEffect(() => {
        if (isLaptop) setScreen('DESKTOP');
    });
    if (screen === 'MOBILE') return <BlogCardsMobile />;
    return <DesktopCards />;
};
export default SmartBlogWall;
