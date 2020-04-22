import React from 'react';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en)

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US')

export interface TimeDurationProps {
    dateInString: string
}


const TimeDuration: React.SFC<TimeDurationProps> = (props) => {
    const dt = new Date(props.dateInString);
    const dtInMS = dt.valueOf();
    const currentDateInMS = Date.now().valueOf()
    const absoluteTimeInMS = currentDateInMS - dtInMS;

    return (
    <span data-testid="time">
        {absoluteTimeInMS > 0 ? timeAgo.format(Date.now() - (absoluteTimeInMS), 'time') + " ago" :
         timeAgo.format(Date.now() - (absoluteTimeInMS), 'time') + " after" }
    </span>);

};

export default TimeDuration;