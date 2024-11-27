import SlideTemplate from "./SlideTemplate";


const Runes = () => {
  const slides = [
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/runeselection.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/upgrading runes.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/purchasebutton.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/purchasedash.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/dashbought.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/dashinventory.png`, description: ''},
    {image: `${import.meta.env.BASE_URL}/pictures/game/runes/dash.png`, description: ''}
  ];

  const codeString = `
# Base rune classs inheriting from abstract items
class Rune(Item):
    def __init__(self, game, type, pos, power, soul_cost):
        super().__init__(game,  type, 'rune', pos, (32, 32), 1, False)
        self.menu_pos = pos
        self.max_amount = 1
        self.upgrade_cost = max(10, math.ceil(soul_cost / 3))
        self.original_power = power
        self.current_power = power
        self.original_soul_cost = soul_cost
        self.current_soul_cost = soul_cost
        self.min_soul_cost = math.ceil(self.original_soul_cost / 10)
        self.animation_time_max = 1
        self.animation_time = 0
        self.animation_size = 0
        self.animation_size_max = 0
        self.active = False
        self.effect = ''
        self.render = True
        self.picked_up = True
        self.cost_to_buy = soul_cost // 2 * power // 2

###################################################

# All runes handled by a central rune handler

# Add runes to Active Inventory
def Add_Rune_To_Rune_Inventory(self, rune_type):
    for rune in self.runes:
        if rune_type != rune.type:
            continue
        
        rune.active = True
        self.active_runes.append(rune)
        self.game.rune_inventory.Add_Item(rune)
        self.game.item_handler.Add_Item(rune)
        return

# Only one of each rune, so easy filter by rune_type return when found
def Remove_Rune_From_Inventory(self, rune_type):
    for rune in self.runes:
        if rune_type != rune.type:
            continue
        
        rune.active = False
        self.active_runes.remove(rune)
        self.game.rune_inventory.Remove_Item(rune, True)
        self.game.item_handler.Remove_Item(rune)
        return True
    
    return False

####################################################

# Example of rune interaction from the shrine menu

def Rune_Interactions(self):
    # Check interaction with runes
    for rune in self.runes:
        if rune.Menu_Rect().colliderect(self.game.mouse.rect_click()):
            self.game.mouse.Reset_Click_Pos()
            if self.Replace_Rune(rune):
                return
            self.active_rune = rune
            # Clear the previous text
            return

    if not self.available_rune:
        return

    if self.available_rune.Menu_Rect().colliderect(self.game.mouse.rect_click()):
        self.game.mouse.Reset_Click_Pos()

        self.active_rune = self.available_rune

        return

def Replace_Rune(self, rune_to_replace):
    if not self.rune_bought:
        return False
    
    clear_available_rune = pygame.Surface((50, 60))
    clear_available_rune.fill((20,20,20)) # Gold color

    self.game.display.blit(clear_available_rune, (self.available_rune.menu_pos[0] - 5, self.available_rune.menu_pos[1] - 30))
    self.game.rune_handler.Remove_Rune_From_Inventory(rune_to_replace.type)

    self.game.rune_handler.Add_Rune_To_Rune_Inventory(self.available_rune.type)
    self.game.player.Decrease_Souls(self.available_rune.cost_to_buy)

    self.Set_Active_Runes_Menu_Pos()
    self.available_rune = None
    self.available_rune_name = ''
    self.rune_bought = False
    self.active_rune = None
    self.shrine.Remove_Available_Rune()
    return True

`;

const description = (
  <div className="text">
    <p className="description">
      A magic system based on upgradable and interchangeable runes for flexible gameplay.
    </p>
    <ul className="features">
      <li>Runes require souls, which are collected by defeating enemies.</li>
      <li>Different runes provide unique effects, such as resistances, offensive abilities, terrain interaction, and enhanced player movement.</li>
      <li>Runes can be upgraded or purchased at shrines located in boss rooms.</li>
      <li>Runes can be rearranged in the rune inventory to assign them to different hotkeys.</li>
      <li>Runes are treated as items for the rune inventory but are excluded from the general item inventory.</li>
    </ul>
  </div>
);

  


  return (

    <SlideTemplate
    id = "runes" 
      headline="RUNES"
      description={description}
      codeString={codeString}
      slides={slides}
    />
  );
};

export default Runes;
