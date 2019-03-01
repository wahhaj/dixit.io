defmodule Dixit.Game.Room do
  use Ecto.Schema
  import Ecto.Changeset


  schema "rooms" do
    field :code, :string
    field :state, :string

    timestamps()
  end

  @doc false
  def changeset(room, attrs) do
    room
    |> cast(attrs, [:code, :state])
    |> validate_required([:code, :state])
    |> unique_constraint(:code)
  end
end
