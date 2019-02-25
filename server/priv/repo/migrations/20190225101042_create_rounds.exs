defmodule DixitServer.Repo.Migrations.CreateRounds do
  use Ecto.Migration

  def change do
    create table(:rounds) do
      add :room_id, references(:rooms, on_delete: :delete_all)
      add :storyteller_id, references(:players, on_delete: :delete_all)
      add :number, :integer, default: 0, null: false

      timestamps()
    end

    create index(:rounds, [:room_id, :storyteller_id])
  end
end
