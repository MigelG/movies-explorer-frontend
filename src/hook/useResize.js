import { useState, useEffect } from 'react';

export function useResize(array) {
    const [width, setWidth] = useState(window.innerWidth);
    const [arrLength, setArrLength] = useState(0);

    useEffect(() => {
        function handleResize() {
            setTimeout(() => {
                setWidth(window.innerWidth);
            }, 1000);
        }

        window.addEventListener('resize', handleResize);

        if (width >= 1280) {
            setArrLength(12);
        } else if (width > 1000) {
            setArrLength(9);
        } else if (width > 650) {
            setArrLength(6);
        } else {
            setArrLength(5);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [width]);

    function getMore() {
        if (width >= 1280) {
            setArrLength(arrLength + 4);
        } else if (width > 1000) {
            setArrLength(arrLength + 3);
        } else if (width > 650) {
            setArrLength(arrLength + 2);
        } else {
            setArrLength(arrLength + 5);
        }
    }

    return [array.slice(0, arrLength), getMore];
}