defmodule Dixit.Game.RoundCard do
  use Ecto.Schema
  import Ecto.Changeset


  schema "round_cards" do
    field :votes, :integer
    field :player_id, :id
    field :round_id, :id
    field :card_id, :id

    timestamps()
  end

  @doc false
  def changeset(round_card, attrs) do
    round_card
    |> cast(attrs, [:votes])
    |> validate_required([:votes])
  end
end
