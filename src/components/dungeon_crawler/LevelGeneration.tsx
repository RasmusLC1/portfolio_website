import React from "react";
import Carousel from "../Images/Carousel";
import CodeDisplay from "../codeDisplay/CodeDisplay";
import { code } from "framer-motion/client";

const LevelGeneration = () => {
  const slides = [
    `/pictures/game/levelgenerator/level1.png`,
    `/pictures/game/levelgenerator/level2.png`,
    `/pictures/game/levelgenerator/level3.png`,
    `/pictures/game/levelgenerator/level4.png`,
  ];

  const codeString = `
  # Takes from starting x/y to the given size and inserts 2 values into the table
  def Generate_Noise_Map(self, floor_density, map, value_1, value_2, size_x, size_y):
      for y in range(size_y):
          for x in range(size_x):
              value = random.randint(0, 100)
              if value > floor_density:
                  map[x][y] = value_1  # Floor
              else:
                  map[x][y] = value_2  # Wall

##############################################
# Cellular automata to generate map structure
def Create_Map(self):
      self.map = self.Create_Level()
      # self.Save_Map_To_File('test_map_1.txt', self.map)
      floor = 0
      wall = 1
      self.Refine_Level(floor, wall, self.size_x, self.size_y, 5, self.map)
      self.Close_Borders(0, 0, self.size_x, self.size_y)
      self.Save_Map_To_File('test_map.txt', self.map)


  def Create_Level(self) -> None:
      self.size_x = 100 + random.randint(-20, 20)
      self.size_y = 100 + random.randint(-20, 20)
      noise_map = Noise_Map()
      return noise_map.Create_Noise_Map(self.size_x, self.size_y)    
  
  def Within_Map_Bounds(self, x, y, size_x, size_y) -> bool:
      return 0 <= x < size_x and 0 <= y < size_y

  def Refine_Level(self, value_1, value_2, size_x, size_y, iterations, map):
      for i in range(iterations):
          temp_map = [row.copy() for row in map]

          for j in range(size_y):
              for i in range(size_x):
                  neighbour_wall_count = 0
                  for y in range(j-1, j+2):
                      for x in range(i-1, i+2):
                          if self.Within_Map_Bounds(x, y, size_x, size_y):
                              if y != j or x != i:
                                  if temp_map[x][y] == value_2:
                                      neighbour_wall_count += 1
                          else:
                              neighbour_wall_count += 1

                  if neighbour_wall_count > 4:
                      map[i][j] = value_2
                  else:
                      map[i][j] = value_1 

###################################
# Example of spawning structures inside the map
def Room_Structure_Circle(self, center_x, center_y, radius):
    door_array = [1, 2, 3, 4]
    # Randomize the array
    random.shuffle(door_array)

    for y in range(center_y - radius, center_y + radius + 1):
        for x in range(center_x - radius, center_x + radius + 1):
            # Calculate the distance from the center
            distance = ((x - center_x) ** 2 + (y - center_y) ** 2) ** 0.5
            if distance == radius:
                self.Spawn_Door_Circle_Room(door_array[0], center_x, x, center_y, y)
                    

            elif distance <= radius:
                # Floor inside the circle
                self.cellular_automata.map[x][y] = floor
            elif distance <= radius + 1:
                # Walls around the circular floor
                self.cellular_automata.map[x][y] = wall
`;

const text = () => {
    return (
      <div className = "text">
        <p className="description">
          Dynamic lighting engine that interacts with enemy AI and affects the player's vision
        </p>
        <ul className="features"> {/* Corrected usage of ul for list items */}
          <li>Raycaster based lighting system</li>
          <li>Precomputed angles for optimisation</li>
          <li>Tile check for error handling and performance improvement</li>
          <li>Check for nearby lights to only update relevant light sources</li>
          <li>Only update lights on trigger for performance</li>
        </ul>
      </div>
    );
  };
  


  return (
    <div id = "levelgeneration" className="section">
        <div  className="headline">
          <h2>LEVEL GENERATION</h2>
        </div>
      <div className="split-container">
        <div className="display">
          <Carousel slides={slides} />
          {text()}
        </div>

        <div className="code">
          <CodeDisplay codeString={codeString} />
        </div>
      </div>
    </div>
  );
};

export default LevelGeneration;
