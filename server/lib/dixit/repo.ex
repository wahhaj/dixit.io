defmodule Dixit.Repo do
  use Ecto.Repo,
    otp_app: :dixit,
    adapter: Ecto.Adapters.Postgres
end
