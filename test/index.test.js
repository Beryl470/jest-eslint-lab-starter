const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes the first letter of each word', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('handles a single word', () => {
        expect(capitalizeWords('javascript')).toBe('Javascript');
    });

    test('handles multiple spaces', () => {
        expect(capitalizeWords('hello   world')).toBe('Hello   World');
    });

    test('returns empty string for empty input', () => {
        expect(capitalizeWords('')).toBe('');
    });
});

describe('filterActiveUsers', () => {
    test('returns only active users', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([
            { name: 'Alice', isActive: true },
        ]);
    });

    test('returns empty array if no users active', () => {
        const users = [
            { name: 'Tom', isActive: false },
            { name: 'Jerry', isActive: false },
        ];
        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('handles empty array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });
});

describe('logAction', () => {
    test('returns correctly formatted log string', () => {
        const result = logAction('login', 'Beryl');
        expect(result).toMatch(/^User Beryl performed login at .+Z$/);
    });

    test('includes action name', () => {
        const result = logAction('logout', 'Sam');
        expect(result).toMatch(/performed logout/);
    });
});
