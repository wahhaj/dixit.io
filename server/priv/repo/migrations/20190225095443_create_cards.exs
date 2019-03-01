defmodule Dixit.Repo.Migrations.CreateCards do
  use Ecto.Migration

  def change do
    create table(:cards) do
      add :image_url, :string, null: false
    end

    create unique_index(:cards, [:image_url])
  end
end
