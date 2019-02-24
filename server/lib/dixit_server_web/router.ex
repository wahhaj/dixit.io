defmodule DixitServerWeb.Router do
  use DixitServerWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", DixitServerWeb do
    pipe_through :api
  end
end
