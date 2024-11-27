import SlideTemplate from "./SlideTemplate";


const Weapons = () => {
  const slides = [
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/equip.png`, description: 'Weapons can be equipped'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/attack.png`, description: 'Weapons can be used to attack other entities'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/bow.png`, description: 'There are different weapons, both ranged and close combat'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/slashattack.png`, description: 'Weapons can have different attack types, this is a slash attack'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/stabattack.png`, description: 'Stab attack is shown here'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/throwing.png`, description: 'Each weapon has a unique special attack and some can be thrown'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/fireattack.png`, description: 'The torch can shoot out a burst of fire'},
    {image: `${import.meta.env.BASE_URL}/pictures/game/weapons/chargeattack.png`, description: 'The halberd can be used to charge into or away from combat'},
  ];

  const codeString = `
# Weapons are universal and can be used by both play and enemy
def Charge_Player_Or_Enemy(self):
    try:
        if 'enemy' == self.entity.category:
            self.Set_Charging_Enemy()
        
        elif 'player' == self.entity.type:
            if not self.inventory_type:
                return
            self.Set_Charging_Player()
    except TypeError as e:
        print(f"Entity neither enemy nor player: {e}")

# Check for collision on attack
def Attack_Collision_Check(self):
    # Check if the weapon has already hit an enemy this attack
    if self.enemy_hit:
        return None
    
    self.Set_Attack_Hitbox()


    # Handle enemy attack collision check for player
    player_collision_result = self.Player_Collision(self.attack_hitbox)
    if player_collision_result:
        return player_collision_result

    for enemy in self.nearby_enemies:
        # Check if the enemy is on damage cooldown
        if enemy.damage_cooldown:
            continue
        # Check for collision with enemy
        if self.attack_hitbox.colliderect(enemy.rect()):
            self.Entity_Hit(enemy)
            # Return enemy in case further effects need to be added such as knockback
            return enemy
        
    return None

# Rendering the attack and efect
# Handle rendering the weapons attack effect
def Render_Attack_Effect(self, surf, offset):
    if not self.attacking:
        return
    
    pos = self.Attack_Effect_Position(offset)
    
    effect_type = self.effect + '_' + self.attack_type + '_effect'
    attack_effect = self.game.assets[effect_type][self.attack_effect_animation]
    # attack_effect.set_alpha()
    attack_effect = pygame.transform.rotate(attack_effect, self.rotate)
    surf.blit( pygame.transform.flip(attack_effect, False, False), (pos[0], pos[1]))


# Render the weapon in entity's hand and rotate towards target
def Render_Equipped(self, surf, offset=(0, 0)):
    weapon_image = self.game.assets[self.sub_type][self.animation].convert_alpha()
    if self.rotate:
        weapon_image = pygame.transform.rotate(weapon_image, self.rotate - 180)

    surf.blit( pygame.transform.flip(weapon_image, False, False),
                (self.pos[0] - offset[0], self.pos[1] - offset[1]))
    
    self.Render_Attack_Effect(surf, offset)    
##############################################################################
# Projectile type weapons can be shot
# Run once to setup the shooting
def Initialise_Shooting(self, speed):
    if not self.shoot_speed:
        self.render = True
        self.shoot_distance = self.shoot_distance_holder
        self.active = 255
        self.shoot_speed = speed * 2
        self.nearby_enemies = self.game.enemy_handler.Find_Nearby_Enemies(self.entity, self.shoot_distance * 2)
        return True
    return False


# Continously updated shooting effect
def Shoot(self):
    
    if self.Reset_Shot():
        return

    dir_x = self.pos[0] + self.attack_direction[0] * self.shoot_speed
    dir_y = self.pos[1] + self.attack_direction[1] * self.shoot_speed

    self.Update_Tile(self.pos)
    
    if not self.Check_Tile((dir_x, dir_y)):
        self.special_attack = 0
        self.shoot_distance = 0
        self.shoot_speed = 0
        return None
    self.Move((dir_x, dir_y))
    # Check for collision with enemy
    entity_hit = self.Attack_Collision_Check_Projectile()
    if entity_hit:
        self.special_attack = 0
        self.shoot_distance = 0
        self.shoot_speed = 0
        return entity_hit
    return None

# Reset the weapon after the maximum distance has been rached
def Reset_Shot(self):
    if self.Update_Shoot_Distance():
        return False
    self.shoot_speed = 0
    self.special_attack = 0
    self.shoot_speed = 0
    self.picked_up = False
    self.equipped = False
    self.in_inventory = False
    self.Set_Entity(None)
    return True

`;

const description = (
    <div className="text">
      <p className="description">
        Weapons are a subtype of items and interact with both the player and enemies to enhance gameplay.
      </p>
      <ul className="features">
        <li>Weapons have unique basic attacks with specific advantages and limitations.</li>
        <li>Weapons feature different damage types and can be upgraded.</li>
        <li>There are various weapon subtypes, each with distinct properties.</li>
        <li>Weapons are dynamically rendered on entities, allowing for unique combinations.</li>
        <li>Weapons can be shot or thrown and interact with the environment.</li>
      </ul>
    </div>
  );
  
  


  return (

    <SlideTemplate
    id = "weapons" 
      headline="WEAPONS"
      description={description}
      codeString={codeString}
      language = "python"
      slides={slides}
    />
  );
};

export default Weapons;
