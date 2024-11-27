import SlideTemplate from "./SlideTemplate";


const Enemies = () => {
    const slides = [
        {image: `/pictures/game/enemies/differentenemies.png`, description: 'There are many different enemies with unique attack patterns'},
        {image: `/pictures/game/enemies/shooting.png`, description: 'Enemies can aim and shoot at the player'},
        {image: `/pictures/game/enemies/attack.png`, description: 'The spider will first shoot a spiderweb at the player'},
        {image: `/pictures/game/enemies/snare.png`, description: 'It will then jump at the player and apply poison when the player is snared'},
        {image: `/pictures/game/enemies/retreat.png`, description: 'The spider will then retreat and attack again'}
      ];


  const codeString = `
# Enemy base logic
def Update(self, tilemap, movement=(0, 0)):
    self.path_finding.Path_Finding()
    movement = self.direction
    
    super().Update(tilemap, movement = movement)

    self.Set_Direction_Holder()

    self.Update_Alert_Cooldown()
    self.Update_Locked_On_Target()


###########################################################
# Enemy pathfinding logic in seperate class for seperation of concern
def Path_Finding(self, target, look_for_new_path = False):
    self.Calculate_Distance_To_Player()

    self.Set_Position_Holder()

    self.Corner_Handling()



    self.Update_Stuck_Timer()
    if self.Stuck_Check():
        return
    
    if self.entity.Attack_Strategy():
        self.entity.Trap_Collision_Handler()

        return
    else:
        # If enemy looses sight of player he will try to go to the last known location
        if self.player_found:
            self.player_found = False
            self.entity.Set_Target(self.game.player.pos)
            look_for_new_path = True

    # Only run this if we need a new path
    if look_for_new_path:
        self.Find_Shortest_Path()
    
    if not self.Navigate_Path():
        self.Moving_Random()

##########################################################
# Enemy attack logic 
# Return True if pathing updated else false
def Attack_Strategy(self) -> bool:
    if self.game.player.status_effects.invisibility:
        return False
    if self.entity.attack_strategy == 'direct':
        return self.Direct_Pathing()
    elif self.entity.attack_strategy == 'long_range':
        return self.Keep_Distance(200, 160)
    elif self.entity.attack_strategy == 'medium_range':
        return self.Keep_Distance(120, 80)
    elif self.entity.attack_strategy == 'short_range':
        return self.Keep_Distance(80, 40)
    elif self.entity.attack_strategy == 'keep_position':
        self.entity.direction = (0, 0)
        return True
    else:
        return self.Direct_Pathing()

def Keep_Distance(self, max_range, closest_range):
    # Cooldown since the player's relative position does not need constant update
    if self.direct_pathing_cooldown:
        self.direct_pathing_cooldown = max(0, self.direct_pathing_cooldown - 1)
        return True       
    
    if self.entity.distance_to_player < max_range and self.entity.distance_to_player > closest_range:
        random_x = random.randint(1, 10) / 10
        random_y = random.randint(1, 10) / 10
        self.entity.direction = pygame.math.Vector2(random_x, random_y)
        self.entity.direction.normalize_ip()
        self.direct_pathing_cooldown = 20

        return True
    
    if self.entity.distance_to_player > max_range :
        return self.Charge_player(150)
    
    return self.Run_Away(60)


################################################################
# Full Spider class showcasing implementation of strategies

from scripts.entities.enemies.enemy import Enemy
from scripts.items.weapons.projectiles.spider_web_projectile import Spider_Web_Projectile

import math
import random
import pygame

class Spider(Enemy):
  def __init__(self, game, pos, type, health, strength, max_speed, agility, intelligence, stamina):
      super().__init__(game, pos, type, health, strength, max_speed, agility, intelligence, stamina)

      self.animation = 'spider'

      self.path_finding_strategy = 'standard'
      self.attack_strategy = 'medium_range'

      self.animation_num_max = 3 # running and idle animation
      self.animation_num_cooldown_max = 100

      self.attack_animation_num_max = 3 # Standard attack and shoot spider web
      self.attack_animation_num_cooldown_max = 200

      self.jumping_animation_num_max = 8 # Jumping attack
      self.jumping_animation_num = 0
      self.jumping_animation_num_cooldown_max = 5

      self.on_back_animation_num_max = 8 # To make spider friendly again
      self.on_back_animation_num_cooldown_max = 50

      self.shot_fired = 0
      self.attack_cooldown = 0

      self.spider_web = None

      self.attack_symbol_offset = 10


  def Update(self, tilemap, movement = (0, 0)):
      super().Update(tilemap, movement)
      self.Update_Shot_Fired()        
      self.Update_Attack_Cooldown()

      if self.distance_to_player > 100 and self.attack_strategy != 'medium_range':
          self.charge = 0
          self.attack_strategy = 'medium_range'

      if self.attack_cooldown:
          return
      
      self.Attack()

  def Attack(self):
      if not super().Attack():
          return

      if self.shot_fired:
          self.Jump_Attack()
          return

      if self.distance_to_player <= 100:
          self.Ranged_Attack()
          return
      

  def Jump_Attack(self):
      if self.shot_fired == 1:
          self.Set_Attack_Cooldown(60)
          return
      
      if self.shot_fired < 30 and self.shot_fired > 15:
          self.Set_Frame_movement((self.attack_direction[0], self.attack_direction[1]))
          self.Tile_Map_Collision_Detection(self.game.tilemap)
          self.attack_strategy =  'direct'
          if self.max_speed == self.max_speed_holder:
              self.max_speed *= 15
      elif self.shot_fired < 15:
          self.attack_strategy =  'long_range'
          if self.max_speed != self.max_speed_holder:
              self.max_speed = self.max_speed_holder
      else:
          self.attack_strategy = 'close_range'

      self.Bite_Attack()
  
  # Bite the player when the player is close
  def Bite_Attack(self):
      if self.Future_Rect(self.attack_direction).colliderect(self.game.player.rect()):
          self.attack_strategy =  'long_range'
          self.game.player.Damage_Taken(self.strength)
          self.game.player.Set_Effect('poison', 4)
          self.Set_Attack_Cooldown(60)
      

  def Ranged_Attack(self):
      self.charge += 1
      
      if self.charge == 5:
          self.attack_strategy = 'keep_position'

      if self.charge >= 80:
          self.Initialise_Spider_Web()
          self.attack_strategy = 'medium_range'
          self.charge = 0
          self.Set_Shot_Fired(45)
  
  def Initialise_Spider_Web(self):
      self.Set_Target(self.game.player.pos)
      self.Set_Attack_Direction()

      damage = 1
      speed = 1
      max_range = 280

      spider_web = Spider_Web_Projectile(self.game,
                                  self.rect(),
                                  'spider_web',
                                  damage,
                                  speed,
                                  max_range,
                                  'particle',
                                  self.charge,
                                  self.attack_direction,  
                                  self
                              )
      
      self.game.item_handler.Add_Item(spider_web)
      self.shot_fired = 45

  
  def Update_Shot_Fired(self):
      if self.shot_fired:
          self.shot_fired = max(0, self.shot_fired - 1)
      return
  
  def Update_Attack_Cooldown(self):
      if self.attack_cooldown:
          self.attack_cooldown = max(0, self.attack_cooldown - 1)
      return

  # Set new action for animation
  def Set_Action(self, movement):
      if self.shot_fired:
          self.Set_Animation('jumping')
          return

      if self.charge and self.distance_to_player <= 50:
          self.Set_Animation('attack')
          return

      # Check for movement
      if not movement[0] and not movement[1]:
          self.Set_Animation('idle')
          return
      if movement[1] or movement[0]:
          self.Set_Animation('running')

  
  def Update_Jumping_Animation(self) -> None:
      if not self.jumping_animation_num_cooldown:
          self.jumping_animation_num += 1
          if self.jumping_animation_num > self.jumping_animation_num_max:
              self.jumping_animation_num = 0
          self.jumping_animation_num_cooldown = self.jumping_animation_num_cooldown_max
      else:
          self.jumping_animation_num_cooldown = max(0, self.jumping_animation_num_cooldown - 1)


  def Set_Shot_Fired(self, amount):
      self.shot_fired = amount
      return
  
  def Set_Attack_Cooldown(self, amount):
      self.attack_cooldown = amount
      return


`;




const description = (
    <div className="text">
      <p className="description">
        Enemies can pathfind towards the player and use strategies to make combat more challenging.
      </p>
      <ul className="features">
        <li>Enemies share a base class with the player and have similar properties.</li>
        <li>Each enemy has unique attack patterns.</li>
        <li>Enemies can aim and shoot projectiles at the player.</li>
        <li>Example: the spider.</li>
        <li>The spider keeps its distance and retreats if the player gets too close.</li>
        <li>It shoots a web at the player and jumps to attack.</li>
        <li>The web snares the player, and the spider poisons them.</li>
        <li>After attacking, the spider retreats and waits to strike again.</li>
      </ul>
    </div>
  );
  
  


  return (

    <SlideTemplate
    id = "enemies" 
      headline="ENEMIES"
      description={description}
      codeString={codeString}
      slides={slides}
    />
  );
};

export default Enemies;
