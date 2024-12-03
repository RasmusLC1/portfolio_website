import SlideTemplate from "../dungeon_crawler/SlideTemplate";

const TwoDRaycasting = () => {
  const slides = [
    {
      image: `${import.meta.env.BASE_URL}/pictures/wolfenstein/2draycaster.png`,
      description: "Raycaster used to render 2d environment",
    },
    {
      image: `${
        import.meta.env.BASE_URL
      }/pictures/wolfenstein/2dpathfinding.png`,
      description: "Basic enemy AI with A* pathfinding",
    },
  ];

  const codeString = `
// 2D raycaster renderer 
public void FieldOfViewPlayer(Graphics g, LevelCreator levelCreator,
                              ZombieSpawner zombiespawner, double destionationX,
                              double destionationY, Entity entity) {
  Player player = levelCreator.getPlayer;

  // get direction vector
  double directionX = destionationX - entity.getX;
  double directionY = destionationY - entity.getY;

  // entity is at destination
  if (Math.Abs(directionX) < 5 && Math.Abs(directionY) < 5){
      return;
  }

  // Normalize the direction vector to have a unit length
  Tuple<double, double> direction = coordinate.Direction(directionX, directionY);

  // Define the number of rays for FOV
  int numRays = 400;

  //Distance that the player can see
  int distance = 200;
  double fovAngle = Math.PI; // Change this value to adjust the field of view

  // Calculate the angle increment between rays
  double angleIncrement = fovAngle / (numRays - 1);

  for (int i = 0; i < numRays; i++) {
      // Calculate the angle for the current ray by spreading the direction
      double angle = Math.Atan2(direction.Item2, direction.Item1) + (i - (numRays - 1) / 2) * angleIncrement;

      // Initialize the ray's position at the player's position
      double rayXFront = entity.getX;
      double rayYFront = entity.getY;
      double rayXBack = entity.getX;
      double rayYBack = entity.getY;
      double rayDistance = 0;
      Field field = levelCreator.getfields[0][0];

      // Cast the front ray
      while (rayDistance < distance) {
          // Update the ray's position
          rayXFront += Math.Cos(angle);
          rayYFront += Math.Sin(angle);
          rayDistance += 1;
          int fieldRow = (int)rayXFront / 10;
          int fieldColumn =(int)rayYFront / 10;
          int xPos = levelCreator.getfields[fieldRow][fieldColumn].getX;
          int yPos = levelCreator.getfields[fieldRow][fieldColumn].getY;

          // Check if the ray hit a wall in the level
          if (levelCreator.getfields[fieldRow][fieldColumn].getwall){
              drawWall(g, xPos, yPos, field.getsize, field.getsize);
              break; // Stop the ray when it hits a wall
          } else if (levelCreator.getfields[fieldRow][fieldColumn].getenemy){
              drawZombie(g, xPos, yPos);
          } else if (levelCreator.getfields[fieldRow][fieldColumn].gettreasure){
              drawTreasure(g, xPos, yPos, field.getsize);
          } 
      }
      rayDistance = 0;
      // Cast the backwards rays
      while (rayDistance < distance) {
          rayXBack -= Math.Cos(angle);
          rayYBack -= Math.Sin(angle);
          rayDistance += 1; // Increment the ray's distance
          int fieldRow = (int)rayXBack / 10;
          int fieldColumn =(int)rayYBack / 10;
          int xPos = levelCreator.getfields[fieldRow][fieldColumn].getX;
          int yPos = levelCreator.getfields[fieldRow][fieldColumn].getY;

          // Check if the ray hit a wall in the level
          if (levelCreator.getfields[fieldRow][fieldColumn].getwall){
              drawWall(g, xPos, yPos, field.getsize, field.getsize);
              break; // Stop the ray when it hits a wall
          } else if (levelCreator.getfields[fieldRow][fieldColumn].getenemy){
              drawZombie(g, xPos, yPos);
          } else if (levelCreator.getfields[fieldRow][fieldColumn].gettreasure){
              drawTreasure(g, xPos, yPos, field.getsize);
          } 
      }
  }
}
////////////////
// Enemy AI
public void ZombieControl(ZombieSpawner zombiespawner, LevelCreator level){
  player = level.getPlayer;

  for (int i = 0; i < zombiespawner.getzombies.Count; i++){
      zombie = zombiespawner.getzombies[i];
      startField.UpdateX((int)zombie.getX / 10);
      startField.UpdateY((int)zombie.getY / 10);
      finishField.UpdateX((int)player.getX / 10);
      finishField.UpdateY((int)player.getY / 10);

      startField.SetDistance(finishField.getX, finishField.getY);
      //Check if zombie is at same position as player
      if (startField.getdistance > 0){
          
          //Raycast zombie's field of view
          rayTracer.FieldOfView(level, zombie.getdirectionX, zombie.getdirectionY, zombie);

          //Activate zombie and set aggro timer
          if (zombie.getactivateZombie){
              if (zombieTimer.ElapsedMilliseconds == 0){
                  zombieTimer.Start();
              }
          //Reset timer when aggro timer reaches 4 seconds
              if (zombieTimer.ElapsedMilliseconds > 4000){
                  zombieTimer.Reset();
                  zombie.SetActivateZombie(false);
              }
              //Pathfinding for zombies
              updatedCoords = shortestPath.Pathfinder(level.getfields, startField, finishField);
              Tuple<double,double> distance = coordinate.Direction(updatedCoords.Item1*10-zombie.getX, updatedCoords.Item2*10-zombie.getY);

              //Get the new coordinates
              int normalizedDirectionX = (int) Math.Round(distance.Item1 * zombie.getzombieSpeed + zombie.getX);
              int normalizedDirectionY = (int) Math.Round(distance.Item2 * zombie.getzombieSpeed + zombie.getY);
              level.getfields[(int)zombie.getX/10][(int)zombie.getY/10].updateEnemy(false);
              zombie.updateXpos(normalizedDirectionX);
              zombie.updateYpos(normalizedDirectionY);
              level.getfields[(int)zombie.getX/10][(int)zombie.getY/10].updateEnemy(true);
              //Set direction for raycasting
              double destinationX = distance.Item1 * 10 + zombie.getX;
              double destinationY = distance.Item2 * 10 + zombie.getY;
              zombie.SetDirection(destinationX, destinationY);
          }
      }                 
  }
}
      `;

  const description = (
    <div className="text">
      <p className="description">
        2D game perspective used as the basis for computing the 3D environment.
      </p>
      <ul className="features">
        <li>
          Basic renderer with walls in red, player in white, enemies in green,
          and loot in gold
        </li>
        <li>Raycaster implemented to calculate the Field of View</li>
        <li>Enemies feature basic AI with pathfinding capabilities using A*</li>
        <li>Enemies have basic hitboxes that can interact with the player</li>
        <li>Walls include collision detection</li>
      </ul>
    </div>
  );

  return (
    <SlideTemplate
      id="2d"
      headline="2D PERSPECTIVE"
      description={description}
      codeString={codeString}
      language="c#"
      slides={slides}
    />
  );
};

export default TwoDRaycasting;
