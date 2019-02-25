defmodule DixitServer.Repo.Migrations.CreatePlayers do
  use Ecto.Migration

  def change do
    create table(:players) do
      add :name, :string, null: false
      add :score, :integer, default: 0, null: false
      add :room_id, references(:rooms, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:players, [:room_id])
    create constraint("players", "score_must_be_positive", check: "score > 0")
  end
end
