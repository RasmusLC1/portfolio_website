import SlideTemplate from "./SlideTemplate";


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
# Customise the internal map structure
    def Generate_Map(self):
        self.Delete_Map_File('data/maps/0.json')
        self.tilemap.Clear_Tilemap()
        self.cellular_automata.Create_Map()


        self.Spawn_Lakes(7, floor, lava)

        
        self.a_star.Setup_Custom_Map(self.cellular_automata.map, self.cellular_automata.size_x, self.cellular_automata.size_y)

        self.Player_Spawn()
        self.a_star.Set_Map('custom')
        self.Spawn_Traps(1)
        # Spawn more loot rooms in lower levels of dungeon
        # TODO: PROPER LEVEL SYSTEM
        temp_level = 5
        if not self.Spawn_Loot_Room(temp_level):
            self.Generate_Map()
            return
        
        self.Spawn_Boss_Room()

        self.a_star.Setup_Custom_Map(self.cellular_automata.map, self.cellular_automata.size_x, self.cellular_automata.size_y)

        self.a_star.Set_Map('custom')

        # Call itself recursively and generate a new map if it fails to spawn enemies
        if not self.Enemy_Spawner():
            self.Generate_Map()
            return

        self.Spawn_Chest(2)

        self.Level_Structure()
    

        self.tilemap.save('data/maps/0.json')



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

const description = (<div className = "text">
  <p className="description">
    Random level generation using cellular automata and refined with random structures and elements
  </p>
  <ul className="features"> {/* Corrected usage of ul for list items */}
    <li>First generate a random noisemap with 1 and 0 to represent walls and floors</li>
    <li>Second refine the noise map using cellular automata to generate the dungeon layout</li>
    <li>Third spawns structures and entities within the cellular automata</li>
    <li>Fourth check that critical structures and enemies can pathfind to the player to prevent unreachable objects</li>
  
  </ul>
</div>)


  return (
    <SlideTemplate
      headline="LEVEL GENERATOR"
      description={description}
      codeString={codeString}
      slides={slides}
    />
  );
};

export default LevelGeneration;
