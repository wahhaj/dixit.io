defmodule DixitServer.Game.Round do
  use Ecto.Schema
  import Ecto.Changeset


  schema "rounds" do
    field :room_id, :id
    field :storyteller_id, :id
    field :number, :integer

    timestamps()
  end

  @doc false
  def changeset(round, attrs) do
    round
    |> cast(attrs, [:number])
    |> validate_required([:number])
  end
end
