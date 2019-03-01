defmodule Dixit.Repo.Migrations.CreateRooms do
  use Ecto.Migration

  def change do
    create table(:rooms) do
      add :code, :string, null: false
      add :state, :string

      timestamps()
    end

    create unique_index(:rooms, [:code])
  end
end
