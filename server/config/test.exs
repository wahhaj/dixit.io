use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :dixit_server, DixitServerWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :dixit_server, DixitServer.Repo,
  username: "postgres",
  password: "postgres",
  database: "dixit_server_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
