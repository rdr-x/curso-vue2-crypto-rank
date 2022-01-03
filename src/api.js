const url = "https://api.coincap.io/v2";

export async function getAssets() {
    try {
        const req = await fetch(`${url}/assets?limit20`);
        const res = await req.json();
        return await res.data;
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}