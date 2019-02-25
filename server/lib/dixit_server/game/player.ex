defmodule DixitServer.Game.Player do
  use Ecto.Schema
  import Ecto.Changeset


  schema "players" do
    field :name, :string
    field :score, :integer
    field :room_id, :id

    timestamps()
  end

  @doc false
  def changeset(player, attrs) do
    player
    |> cast(attrs, [:name, :score])
    |> validate_required([:name, :score])
  end
end
