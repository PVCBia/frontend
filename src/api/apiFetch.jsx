export async function apiFetch(endPoint, options = {}) {

    const token = localStorage.getItem("token");

    const headers = {
        "Context-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
    }
    /*
    headers : { Authorization: `Bearer ${token}`,
                "X-App-Version": "1.0.0"}
    */

    const response = await fetch("http://localhost:3001${endpoint}", {
        ...options,
        headers
    })

    if (!response.ok) {
        throw new Error("Erro de requisição para API")
    }

    return response.json();
}