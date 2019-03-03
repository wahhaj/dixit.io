defmodule DixitWeb.Router do
  use DixitWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: DixitWeb.Schema,
      interface: :simple,
      context: %{pubsub: DixitWeb.Endpoint},
      json_codec: Jason
  end

end
