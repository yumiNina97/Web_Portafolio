/**
 * Validates a name input
 * @param name - The name to validate
 * @returns True if the name is valid, false otherwise
 */
export function validateName(name: string): boolean {
    return name.trim().length > 0;
}

/**
 * Validates an email address
 * @param email - The email to validate
 * @returns True if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a message input
 * @param message - The message to validate
 * @returns True if the message is valid, false otherwise
 */
export function validateMessage(message: string): boolean {
    return message.trim().length > 10;
}