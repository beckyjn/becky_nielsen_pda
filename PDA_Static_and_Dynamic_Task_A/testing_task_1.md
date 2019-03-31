### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

# function name doesn't follow convention - check_for_ace
# should be a class method
  def checkforAce(card)
    if card.value = 1 #should be ==
      return true
    else
      return false
    end
  end

#should be def not dif
# need comment between two arguments
#class method
  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# the two possible return options are different - is that ok
#name isn't one of the attributes of the class Card
# card.name should be card1.suit or card1
#too many ends

#total needs to be assigned a value first
# wrong number of arguments - use a splat perhaps?
def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end
#string interpolation would be neater?
#return needs to come after for loop
#need to end class
```
