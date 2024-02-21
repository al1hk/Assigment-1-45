function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("Bombay", "India");
const location3 = cityCountry("Tokyo", "Japan");

console.log(location1);
console.log(location2);
console.log(location3);