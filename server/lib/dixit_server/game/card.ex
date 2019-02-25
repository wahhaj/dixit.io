defmodule DixitServer.Game.Card do
  use Ecto.Schema
  import Ecto.Changeset


  schema "cards" do
    field :image_url, :string
  end

  @doc false
  def changeset(card, attrs) do
    card
    |> cast(attrs, [:image_url])
    |> validate_required([:image_url])
    |> unique_constraint(:image_url)
  end
end
