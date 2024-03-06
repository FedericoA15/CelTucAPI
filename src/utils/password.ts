import bcrypt from 'bcrypt';

const secretKey: any = process.env.SECRET_KEY;

const passwordCache: { [key: string]: string } = {};

/**
Hashes a password using the bcrypt algorithm.
@param password - The password to hash.
@returns The hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
    if (passwordCache[password]) {
        return passwordCache[password];
    }

    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password + secretKey, saltRounds);
        passwordCache[password] = hashedPassword; 
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw new Error('Error hashing password');
    }
};

/**
Compares a plain text password with a hashed password.
@param plainPassword - The plain text password to compare.
@param hashedPassword - The hashed password to compare against.
@returns true if the passwords match, false otherwise.
 */
export const comparePassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isMatch = await bcrypt.compare(plainPassword + secretKey, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw new Error('Error comparing passwords');
    }
};