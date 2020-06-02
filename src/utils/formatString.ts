const formatString = (target: string, ...args: string[]): string => {
    return target.replace(/{(\d+)}/g, (match, number) => {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

export default formatString;
