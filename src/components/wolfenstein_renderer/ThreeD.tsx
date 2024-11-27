import SlideTemplate from "../dungeon_crawler/SlideTemplate";


const ThreeD = () => {
    const slides = [
        {image: `${import.meta.env.BASE_URL}/pictures/wolfenstein/3d.png`, description: 'Example of 3D rendering of terrain'},
        {image: `${import.meta.env.BASE_URL}/pictures/wolfenstein/3d2.png`, description: 'Gold being rendered in 3D'},
        {image: `${import.meta.env.BASE_URL}/pictures/wolfenstein/enemies3d.png`, description: 'Enemies in 3D with moving 3D models'},
      ];


const codeString = `
public void FieldOfViewPlayer3D(Graphics g, LevelCreator levelCreator, ZombieSpawner zombiespawner) {
  Player player = levelCreator.getPlayer;

  // get direction vector
  double directionX = player.getdirectionX - player.getX;
  double directionY = player.getdirectionY - player.getY;

  // Normalize the direction vector to have a unit length
  Tuple<double, double> direction = coordinate.Direction(directionX, directionY);

  // Define the number of rays for FOV
  int numRays = 80;

  //Distance that the player can see
  int distance = 800;
  double fovAngle = Math.PI/3; // Change this value to adjust the field of view

  // Calculate the angle increment between rays
  double angleIncrement = fovAngle / (numRays - 1);
  List <List<Field>> fields = levelCreator.getfields;
  for (int i = 0; i < numRays; i++) {
      // Calculate the angle for the current ray by spreading the direction
      rayAngle = Math.Atan2(direction.Item2, direction.Item1) + (i - (numRays - 1) / 2) * angleIncrement;

      // Initialize the ray's position at the player's position
      rayX3D = player.getX;
      rayY3D = player.getY;
      
      rayDistance = 0;
      // Wall width
      int wallWidth = 10;

      // Cast the front ray
      while (rayDistance < distance) {
          // Update the ray's position
          rayX3D += Math.Cos(rayAngle) * 0.1; 
          rayY3D += Math.Sin(rayAngle) * 0.1; 
          rayDistance += 0.1;
          int fieldRow = (int)(rayX3D / 10);
          int fieldColumn = (int)(rayY3D / 10);
          Field field  = levelCreator.getfields[fieldRow][fieldColumn];
              // Check if the ray hit a wall
              if (field.getwall) {
                  field.updateLightLevel((int)rayDistance);
                  calculateWall(g, player, numRays, i);
                  // Draw the "3D" wall rectangle on the screen.
                  int grey = ColorCalculator(105, field.getlightLevel  - (int)field.gettorchLight);
                  SolidBrush customBrush = new SolidBrush(Color.FromArgb(grey, grey, grey));
                  g.FillRectangle(customBrush, (float)wallLeft, (float)wallTop, (float)wallWidth, (float)wallHeight); //Wall
                  g.FillRectangle(Brushes.Red, (float)wallLeft, (float)(wallTop+wallHeight), (float)wallWidth, (float)(wallHeight * rayDistance)); //floor
                  g.FillRectangle(Brushes.Blue, (float)wallLeft, (float)(0), (float)wallWidth, (float)(wallTop)); //Ceiling


                  break;
              
              }else if (field.gettreasure){
                  field.updateLightLevel((int)rayDistance);
                  CalculateTreasure(g, field, player, numRays, i);
              } else if (field.getenemy){
                  field.updateLightLevel((int)rayDistance);
                  CalculateEnemy(g, field, player, numRays, i);
              } else if (field.gettorch) {
              }
      }
  }
  for (int i = 0; i < treasureCount; i++){
      int x = treasureFields[i].Item1/10;
      int y = treasureFields[i].Item2/10;
      //Get RGP values from Rapid tables
      int red = ColorCalculator(240, fields[x][y].getlightLevel);
      int green = ColorCalculator(215, fields[x][y].getlightLevel);
      SolidBrush customBrush = new SolidBrush(Color.FromArgb(red, green, 0));
      g.FillRectangle(customBrush, (float)treasureLeft[i], (float)treasureTop[i], (float)treasureHeight[i]/2, (float)treasureHeight[i]/2);
  }
  for (int i = 0; i < enemyCount; i++){
      int x = enemyFields[i].Item1/10;
      int y = enemyFields[i].Item2/10;
      int green = ColorCalculator(250, fields[x][y].getlightLevel);
      SolidBrush customBrush = new SolidBrush(Color.FromArgb(0, green, 0));
      g.FillRectangle(customBrush, (float)enemyLeft[i], (float)enemyTop[i], (float)enemyHeight[i], (float)enemyHeight[i]);
  }
  ListCleanup();
}

public void FieldOfViewTorch(List<List<Field>> levelFields, Field torchfield) {
    
    // Define the number of rays for FOV
    int numRays = 500;

    //Distance that the torch can see
    int distance = 100;
    double fovAngle = Math.PI; // Change this value to adjust the field of view

    // Calculate the angle increment between rays
    double angleIncrement = fovAngle / (numRays - 1);

    for (int i = 0; i < numRays; i++) {
        // Calculate the angle for the current ray by spreading the direction
        double angle = Math.Atan2(torchfield.getX + 5, torchfield.getY) + (i - (numRays - 1) / 2) * angleIncrement;

        // Initialize the ray's position at the player's position
        double rayXFront = torchfield.getX;
        double rayYFront = torchfield.getY;
        double rayXBack = torchfield.getX;
        double rayYBack = torchfield.getY;
        double rayDistance = 0;

        // Cast the front ray
        while (rayDistance < distance) {
            // Update the ray's position
            rayXFront += Math.Cos(angle);
            rayYFront += Math.Sin(angle);
            rayDistance += 1;
            fieldRow = (int)rayXFront / 10;
            fieldColumn =(int)rayYFront / 10;
            Field field = levelFields[fieldRow][fieldColumn];
            // Check if the ray hit a wall in the level
            if (field.getwall){
                break; // Stop the ray when it hits a wall
            } 
        }
        levelFields[fieldRow][fieldColumn].updateTorchLight(distance - rayDistance);
        rayDistance = 0;
        // Cast the backwards rays
        while (rayDistance < distance) {
            rayXBack -= Math.Cos(angle);
            rayYBack -= Math.Sin(angle);
            rayDistance += 1; // Increment the ray's distance
            fieldRow = (int)rayXBack / 10;
            fieldColumn =(int)rayYBack / 10;
            Field field = levelFields[fieldRow][fieldColumn];

            // Check if the ray hit a wall in the level
            if (field.getwall){
                break; // Stop the ray when it hits a wall
            }
        }
        levelFields[fieldRow][fieldColumn].updateTorchLight(distance - rayDistance);
    }
}
}
      `;

      const description = (
<div className="text">
  <p className="description">
    3D game environment created using raycasting techniques.
  </p>
  <ul className="features">
    <li>Simulated 3D environment using a raycasting engine</li>
    <li>Enemies rendered in 3D, capable of moving and updating positions dynamically</li>
    <li>Interactive items that can be picked up</li>
    <li>Basic lighting system with dynamic light effects around torches, modifying RGB values</li>
  </ul>
</div>

      );
  


  return (

    <SlideTemplate
    id = "3d" 
      headline="3D PERSPECTIVE"
      description={description}
      codeString={codeString}
      language = "c#"
      slides={slides}
    />
  );
};

export default ThreeD;
