defmodule DixitWeb.CardsResolver do
  alias Dixit.Game

  def all_cards(_root, _args, _info) do
    cards = Game.list_cards()
    {:ok, cards}
  end
end
