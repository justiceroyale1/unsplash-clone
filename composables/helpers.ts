const debounce = (func: Function, timeout = 500) => {
    let timer: NodeJS.Timeout;

    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

export const useHelpers = () => {
    return {
        debounce
    }
}