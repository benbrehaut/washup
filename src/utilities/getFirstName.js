/**
 * Formats the full name of the user to get the first word
 * @param {string} fullName - the full name of a user
 * @returns the first name of the user
 */
export const getFirstName = (fullName) => {
    return fullName.split(' ').slice(0, -1).join(' ');
}