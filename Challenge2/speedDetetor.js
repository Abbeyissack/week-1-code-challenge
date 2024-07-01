// Function to detect speed violations
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("ok");

    } else {
        
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12) {
            
            console.log("points: ${points}. License suspended. ");

        } else {

            console.log("points: ${points}");
        }
    }
}