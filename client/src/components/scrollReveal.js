 export const fadeIn = (direction,delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === "down" ? -20 : 0,
            x: direction === 'left' ? 10 : direction === "right" ? -10 : 0,
        },
        show: {
            y:0,
            x:0,
            opacity:1,
            transition: {
                type: "tween",
                duration: 1.3,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75],
            }
        }
    }
}