{
  //

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const isCircle = (shape: Shape): shape is Circle => {
    return shape.shape === "circle";
  }

  const isRectangle= (shape: Shape): shape is Rectangle =>{
    return shape.shape === "rectangle";
  }

  const calculateShapeArea = (shape: Shape): number =>{
    if (isCircle(shape)) {
      return 3.142 * shape.radius * shape.radius;
    } else if (isRectangle(shape)) {
      return shape.width * shape.height;
    } else {
      throw new Error("Invalid shape");
    }
  }

  const circle: Circle = { shape: "circle", radius: 5 };
  const rectangle: Rectangle = { shape: "rectangle", width: 10, height: 5 };

  console.log(`Circle Area: ${calculateShapeArea(circle)}`); 
  console.log(`Rectangle Area: ${calculateShapeArea(rectangle)}`); 

  //
}
