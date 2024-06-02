// Define a type for the coordinate with latitude as a string
type Coordinate = {
  lat: string;
};

// Function to parse the latitude string to a number
function parseLatitude(coord: Coordinate): number {
  return parseFloat(coord.lat);
}

// Example usage
const coord: Coordinate = {
  lat: "-43.9509",
};

const latitudeNumber: number = parseLatitude(coord);
console.log(latitudeNumber); // Output: -43.9509
