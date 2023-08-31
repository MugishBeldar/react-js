const DateFormatter = ({ data }) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const month = months[data.date.getMonth()].slice(0, 3)
    const year = data.date.getFullYear()
    const date = data.date.getDate()
    console.log(`${month} ${date}, ${year}`);
    return `  ${month} ${date}, ${year}`
}

export default DateFormatter;