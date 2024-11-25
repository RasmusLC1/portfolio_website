import SlideTemplate from "./SlideTemplate";


const InventorySystem = () => {


  const slides = [
      `/pictures/game/inventorysystem/itemonground.png`,
      `/pictures/game/inventorysystem/iteminventory.png`,
      `/pictures/game/inventorysystem/dragitem.png`,
    `/pictures/game/inventorysystem/weaponequipped.png`,
    `/pictures/game/inventorysystem/fullinventory.png`,
    `/pictures/game/inventorysystem/tooltip.png`,
  ];

  const codeString = `
# Add item to the inventory
def Add_Item(self, item):
    # Check if an item can have more than one charge, example health potion is 3
    if self.Add_Item_To_Inventory_Slot_Merge(item):
        return True
                
    
    return self.Add_Item_To_Inventory_Slot(item)

# Add items and merge items to prevent item loss
def Add_Item_To_Inventory_Slot_Merge(self, item):
    if not item.max_amount > 1:
        return False
    for inventory_slot in self.inventory:
        if inventory_slot.item:
            inventory_slot.item.Update()
            if inventory_slot.item.type == item.type and inventory_slot.item.amount < inventory_slot.item.max_amount:

                inventory_slot.item.Increase_Amount(item.amount)
                # Handle overflow and send it to the new available position
                if inventory_slot.item.amount > inventory_slot.item.max_amount:
                    new_amount = inventory_slot.item.amount - inventory_slot.item.max_amount
                    new_item = copy(item)
                    new_item.Set_Amount(new_amount)
                    # Add item to item list if there is no room
                    if not self.Overflow(new_item):
                        new_item.Update()
                        self.game.item_handler.Add_Item(new_item)
                self.game.item_handler.Remove_Item(item)
                inventory_slot.item.Update()
                return True

# Add items without checking for slot merging
def Add_Item_To_Inventory_Slot(self, item):
    i = 0
    j = 0
    for inventory_slot in self.inventory:
        if not inventory_slot.item:

            if not inventory_slot.Add_Item(item):

                continue
            self.game.item_handler.Remove_Item(item)
            try:
                inventory_slot.item.Update()
            except TypeError as e:
                print(f"Weapon in inventory: {e}")
                
            return True
        # 2d array simulation for position
        i += 1
        if i >= self.x_size:
            i = 0
            j += 1
    return False


###############################
# Inventory slots are their own objects
class Inventory_Slot():
def __init__(self, game, pos, size, item, index, key = None):
    self.game = game
    self.pos = pos
    self.index = index
    self.size = size
    self.item = item
    self.key = key
    self.background = None
    self.inventory_type = None
    self.Setup_Inventory_Texture()
    self.active = False
    self.activate_counter = 0
    self.white_list_items = []
    self.saved_data = {}
`;

const description = (<div className = "text">
  <p className="description">
    All items inherit from the same base class and can interract with the inventory system in different ways depending on their properties
  </p>
  <ul className="features"> {/* Corrected usage of ul for list items */}
    <li>Items can be added to 3 inventories, items, runes and equipped weapons inventory</li>
    <li>Items check for other items in the inventory they can merge with</li>
    <li>Items can be dragged and placed on the tilemap</li>
    <li>Items can be interacted with for various effects</li>
    <li>Each item has a unique automatically generated tooltip</li>
  </ul>
</div>)


  return (
    <SlideTemplate
      headline="INVENTORY SYSTEM"
      description={description}
      codeString={codeString}
      slides={slides}
    />
  );
};

export default InventorySystem;
