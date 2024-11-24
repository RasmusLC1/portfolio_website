import React from "react";
import Carousel from "../Images/Carousel";
import CodeDisplay from "../codeDisplay/CodeDisplay";
import { code } from "framer-motion/client";
import menuPane from "../MenuPane";

const LightingSlide = () => {
  const slides = [
    `/pictures/game/spawn.png`,
    `/pictures/game/chest.png`,
    `/pictures/game/item_drop.png`,
    `/pictures/game/pickup.png`,
    `/pictures/game/equip.png`,
    `/pictures/game/attack.png`,
  ];

  const codeString = `
# Setting Up lights for lightsource object
def Setup_Tile_Light(self):
    # Setup light_level under the light itself
    tile = self.game.tilemap.Current_Tile(self.tile)
    # If there is no tile present, then simply return
    if not self.Check_Tile(tile):
        return

        # If the current tile is brigther than the lightsource, then just return as nothing can be updated
    if self.light_level < tile.light_level:
        return 

    self.game.tilemap.Set_Light_Level(tile, self.light_level)
    self.tiles.append(tile)

    for j in range(self.number_rays):
        # Compute the precalculated angles on the new points
        cos_angle = self.angle_cosines[j]
        sin_angle = self.angle_sines[j]
        for i in range(1, self.light_level + 1):
            pos_x = self.pos[0] + cos_angle * i
            pos_y = self.pos[1] + sin_angle * i
            tile_key = str(int(pos_x) // self.game.tilemap.tile_size) + ';' + str(int(pos_y) // self.game.tilemap.tile_size)
            try:
                tile = self.game.tilemap.Current_Tile(tile_key)
            except Exception as e:
                print("DATA WRONG, LIGHT HANDLER", (pos_x, pos_y), self.tile, e)

            if not self.Check_Tile(tile):
                break
            new_light_level = max(0, self.light_level - i)
            # Add the tile if it's darker than the current tile
            if new_light_level > tile.light_level:
                self.game.tilemap.Set_Light_Level(tile, new_light_level)
                self.tiles.append(tile)

############################################

# Moving lights in the lightHandler
def Move_Light(self, pos, light_source, tile):
    # Move the light to the new position
    light_source.pos_holder = light_source.pos
    light_source.tile = tile
    light_source.pos = pos

    # Recalculate the light at the new position
    light_source.Setup_Tile_Light()

    # Update all nearby lights after moving
    nearby_lights = self.Find_Nearby_Lights(light_source.pos, 100)
    for light in nearby_lights:
        light.Setup_Tile_Light()  # Recalculate the light for the nearby light sources
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
    <div className="section">
      <div className="headline">
        <h2>LIGHTING</h2>
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

export default LightingSlide;
