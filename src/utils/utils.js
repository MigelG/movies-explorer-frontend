function formatMinutes(duration) {
    if (duration < 10) {
        return `0${duration}`;
    }
    return duration;
}

export function formatDuration(duration) {
    let hours = 0;
    let minutes = 0;
    if (duration >= 60) {
        hours = Math.trunc(duration / 60);
        minutes = duration % 60;
        return `${hours}ч ${formatMinutes(minutes)}м`;
    } else {
        return `${duration}м`;
    }
}
