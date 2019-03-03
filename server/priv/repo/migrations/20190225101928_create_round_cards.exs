defmodule DixitServer.Repo.Migrations.CreateRoundCards do
  use Ecto.Migration

  def change do
    create table(:round_cards, primary_key: false) do
      add :votes, :integer, null: false, default: 0
      add :round_id, references(:rounds, on_delete: :delete_all), primary_key: true
      add :player_id, references(:players, on_delete: :delete_all), primary_key: true
      add :card_id, references(:cards, on_delete: :delete_all), primary_key: true

      timestamps()
    end
  end
end
