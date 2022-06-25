import * as React from 'react';
import { useDebouncedCallback } from 'use-debounce'
import { DEBOUNCE_WAIT } from '../constants';

export const useDebouncedTextChange = (onChange: (value?: string) => void, delay = DEBOUNCE_WAIT) => {
    const [ debouncedCallback, , callpending ] = useDebouncedCallback((value?: string) => {
        onChange(value);
    }, delay);

    const onTextChange = (event: any, newValue?: string) => {
        debouncedCallback(newValue);
    }

    //cleanup on unmount if necessary
    React.useEffect(() => {
        return () => callpending();
    }, [callpending]);
    return [ onTextChange ];
}