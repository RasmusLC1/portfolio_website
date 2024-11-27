import SlideTemplate from "./SlideTemplate";


const InventorySystem = () => {


  const slides = [
      {image: `/pictures/game/inventorysystem/itemonground.png`, description: 'Item on the ground'},
      {image: `/pictures/game/inventorysystem/iteminventory.png`, description: 'Item in inventory'},
      {image: `/pictures/game/inventorysystem/dragitem.png`, description: 'Dragging item around'},
    {image: `/pictures/game/inventorysystem/weaponequipped.png`, description: 'Weapon in equipped inventory slot'},
    {image: `/pictures/game/inventorysystem/fullinventory.png`, description: ' items stacks when picked up and the inventory can be filled'},
    {image: `/pictures/game/inventorysystem/tooltip.png`, description: 'Each item has a auto generated tooltip'},
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

const description = (
  <div className="text">
    <p className="description">
      All items share a base class and interact with the inventory system based on their properties.
    </p>
    <ul className="features">
      <li>Items can be added to one of three inventories: general items, runes, or equipped weapons.</li>
      <li>Items check for other compatible items in the inventory and can merge with them.</li>
      <li>Items can be dragged and placed onto the tilemap.</li>
      <li>Items can be interacted with to trigger specific effects.</li>
      <li>Each item has a unique tooltip that is automatically generated.</li>
    </ul>
  </div>
);


  return (

    <SlideTemplate
    id = "inventory"
      headline="INVENTORY"
      description={description}
      codeString={codeString}
      slides={slides}
    />

  );
};

export default InventorySystem;
