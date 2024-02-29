function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

let location1 = cityCountry("Lahore", "Pakistan");
let location2 = cityCountry("Bombay", "India");
let location3 = cityCountry("Tokyo", "Japan");

console.log(location1);
console.log(location2);
console.log(location3);
