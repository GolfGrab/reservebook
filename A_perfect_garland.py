#####################################################################
# Answer for A Perfect Garland problem                              #
# by: GolfGrab Surapus Moonjarad                                    #
#                                                                   #
# #### personal goal ####                                           #                        
# 1. code readability ( with comment and guard clause pattern )     #
# 2. code performance ( not the best but bigO is O(n) )             #
#####################################################################         
                


def main():
  flower_list = [] 
  while True :
    ######### get new flower #########
    new_flower = input() 
    if new_flower not in ["J","G","O","R","Z"] :
      break
    
    # check if end of input flower
    if new_flower == "Z" :
      print("".join(flower_list))
      break
    
    ######### validate flower with guard clause pattern #########
    # check if continueous globe amaranth more than 3
    ## GGGxxxx[G]
    if new_flower == "G" \
        and len(flower_list)>=3 \
        and flower_list[0] == "G" \
        and flower_list[1] == "G" \
        and flower_list[2] == "G" :
      print("Invalid pattern.")
    ## GGxxxxG[G] 
    if new_flower == "G" \
        and len(flower_list)>=3 \
        and flower_list[0] == "G" \
        and flower_list[1] == "G" \
        and flower_list[-1] == "G" :
      print("Invalid pattern.")
      continue
    ## GxxxxGG[G]
    if new_flower == "G" \
        and len(flower_list)>=3 \
        and flower_list[0] == "G" \
        and flower_list[-1] == "G" \
        and flower_list[-2] == "G" :
      print("Invalid pattern.")
      continue
    ## xxxxGGG[G]
    if new_flower == "G" \
        and len(flower_list)>=3 \
        and flower_list[-1] == "G" \
        and flower_list[-2] == "G" :
      print("Invalid pattern.")
      continue

    # check if invalid rose rose must be between 2 types of flower
    ## YxxxxY[R]
    if new_flower == "R" \
        and len(flower_list)>=2 \
        and flower_list[-1] == flower_list[0] :
      print("Invalid pattern.")
      continue
    ## RYxxxx[Y]
    if len(flower_list)>=2 \
        and flower_list[0] == "R" \
        and len(flower_list)>=2 \
        and new_flower == flower_list[1] :
      print("Invalid pattern.")
      continue
    ## xxxxYR[Y]
    if len(flower_list)>=2 \
        and flower_list[-1] == "R" \
        and new_flower == flower_list[-2] :
      print("Invalid pattern.")
      continue
    
    # add new flower to flower list
    flower_list.append(new_flower)


if __name__ == "__main__":
  main()