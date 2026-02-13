export const getExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInMs = now - start;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    return diffInYears.toFixed(1);
};
