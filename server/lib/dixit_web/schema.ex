defmodule DixitWeb.Schema do
  use Absinthe.Schema

  alias DixitWeb.CardsResolver

  object :card do
    field :id, non_null(:id)
    field :image_url, non_null(:string)
  end

  query do
    field :all_cards, non_null(list_of(non_null(:card))) do
      resolve &CardsResolver.all_cards/3
    end
  end
end
