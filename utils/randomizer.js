export const random = (min, max)=> {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}