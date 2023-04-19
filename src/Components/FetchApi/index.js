export default async function fetchData() {
    try {
        const response = await fetch("https://example-apis.vercel.app/api/weather");
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }

}