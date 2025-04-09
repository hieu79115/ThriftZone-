export const register = async (username: string, password: string) => {
    const response = await fetch(' http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return response.json();
}

export const login = async (username: string, password: string) => {
    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response.json();
}

export const getCurrentUser = async () => {
    const response = await fetch('http://localhost:5000/api/auth/current-user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch current user');
    }

    return response.json();
}

export const logout = async () => {
    const response = await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Failed to logout');
    }

    return response.json();
}