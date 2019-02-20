defmodule DixitServer.Repo do
  use Ecto.Repo,
    otp_app: :dixit_server,
    adapter: Ecto.Adapters.Postgres
end
