require('minitest/autorun')
require('minitest/rg')

require_relative('card.rb')
require_relative('testing_task_2.rb')

class TestCardGame < Minitest::Test
  def setup
    @card1 = Card.new("spade", 1)
    @card2 = Card.new("diamond", 5)

  end

  def test_check_for_ace
    actual = CardGame.check_for_ace(@card1)
    assert_equal(true, actual)
  end

  def test_highest_card
    actual = CardGame.highest_card(@card1, @card2)
    assert_equal(@card2, actual)
  end

  def test_highest_card__first_card
    actual = CardGame.highest_card(@card2, @card1)
    assert_equal(@card2, actual)
  end

  def test_cards_total
    actual = CardGame.cards_total(@card1, @card2)
    assert_equal("You have a total of 6", actual)
  end

end
