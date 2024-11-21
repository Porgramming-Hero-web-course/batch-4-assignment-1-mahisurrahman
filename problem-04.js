{
    var isCircle_1 = function (shape) {
        return shape.shape === "circle";
    };
    var isRectangle_1 = function (shape) {
        return shape.shape === "rectangle";
    };
    var calculateShapeArea = function (shape) {
        if (isCircle_1(shape)) {
            return 3.142 * shape.radius * shape.radius;
        }
        else if (isRectangle_1(shape)) {
            return shape.width * shape.height;
        }
        else {
            throw new Error("Invalid shape");
        }
    };
    var circle = { shape: "circle", radius: 5 };
    var rectangle = { shape: "rectangle", width: 10, height: 5 };
    console.log("Circle Area: ".concat(calculateShapeArea(circle)));
    console.log("Rectangle Area: ".concat(calculateShapeArea(rectangle)));
    //
}
