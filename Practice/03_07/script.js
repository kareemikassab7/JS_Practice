/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const screen= {
    brand: "dell",
    sizeInches: 15,
    buttonNum: 5,
    isOn: false,
    
    toggleScreen : function(turnonoff){
        isOn= turnonoff;
    },
    powerButton: {
        shape: "round",
        color: "black-color"
    }
};

console.log("first object: ", screen);
console.log("try square bracket method: ", screen.powerButton["color"]);
