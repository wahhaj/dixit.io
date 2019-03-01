defmodule Dixit.GameTest do
  use Dixit.DataCase

  alias Dixit.Game

  describe "cards" do
    alias Dixit.Game.Card

    @valid_attrs %{image_url: "some image_url"}
    @update_attrs %{image_url: "some updated image_url"}
    @invalid_attrs %{image_url: nil}

    def card_fixture(attrs \\ %{}) do
      {:ok, card} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Game.create_card()

      card
    end

    test "list_cards/0 returns all cards" do
      card = card_fixture()
      assert Game.list_cards() == [card]
    end

    test "get_card!/1 returns the card with given id" do
      card = card_fixture()
      assert Game.get_card!(card.id) == card
    end

    test "create_card/1 with valid data creates a card" do
      assert {:ok, %Card{} = card} = Game.create_card(@valid_attrs)
      assert card.image_url == "some image_url"
    end

    test "create_card/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Game.create_card(@invalid_attrs)
    end

    test "update_card/2 with valid data updates the card" do
      card = card_fixture()
      assert {:ok, %Card{} = card} = Game.update_card(card, @update_attrs)
      assert card.image_url == "some updated image_url"
    end

    test "update_card/2 with invalid data returns error changeset" do
      card = card_fixture()
      assert {:error, %Ecto.Changeset{}} = Game.update_card(card, @invalid_attrs)
      assert card == Game.get_card!(card.id)
    end

    test "delete_card/1 deletes the card" do
      card = card_fixture()
      assert {:ok, %Card{}} = Game.delete_card(card)
      assert_raise Ecto.NoResultsError, fn -> Game.get_card!(card.id) end
    end

    test "change_card/1 returns a card changeset" do
      card = card_fixture()
      assert %Ecto.Changeset{} = Game.change_card(card)
    end
  end

  describe "rooms" do
    alias Dixit.Game.Room

    @valid_attrs %{code: "some code", state: "some state"}
    @update_attrs %{code: "some updated code", state: "some updated state"}
    @invalid_attrs %{code: nil, state: nil}

    def room_fixture(attrs \\ %{}) do
      {:ok, room} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Game.create_room()

      room
    end

    test "list_rooms/0 returns all rooms" do
      room = room_fixture()
      assert Game.list_rooms() == [room]
    end

    test "get_room!/1 returns the room with given id" do
      room = room_fixture()
      assert Game.get_room!(room.id) == room
    end

    test "create_room/1 with valid data creates a room" do
      assert {:ok, %Room{} = room} = Game.create_room(@valid_attrs)
      assert room.code == "some code"
      assert room.state == "some state"
    end

    test "create_room/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Game.create_room(@invalid_attrs)
    end

    test "update_room/2 with valid data updates the room" do
      room = room_fixture()
      assert {:ok, %Room{} = room} = Game.update_room(room, @update_attrs)
      assert room.code == "some updated code"
      assert room.state == "some updated state"
    end

    test "update_room/2 with invalid data returns error changeset" do
      room = room_fixture()
      assert {:error, %Ecto.Changeset{}} = Game.update_room(room, @invalid_attrs)
      assert room == Game.get_room!(room.id)
    end

    test "delete_room/1 deletes the room" do
      room = room_fixture()
      assert {:ok, %Room{}} = Game.delete_room(room)
      assert_raise Ecto.NoResultsError, fn -> Game.get_room!(room.id) end
    end

    test "change_room/1 returns a room changeset" do
      room = room_fixture()
      assert %Ecto.Changeset{} = Game.change_room(room)
    end
  end

  describe "players" do
    alias Dixit.Game.Player

    @valid_attrs %{name: "some name", score: 42}
    @update_attrs %{name: "some updated name", score: 43}
    @invalid_attrs %{name: nil, score: nil}

    def player_fixture(attrs \\ %{}) do
      {:ok, player} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Game.create_player()

      player
    end

    test "list_players/0 returns all players" do
      player = player_fixture()
      assert Game.list_players() == [player]
    end

    test "get_player!/1 returns the player with given id" do
      player = player_fixture()
      assert Game.get_player!(player.id) == player
    end

    test "create_player/1 with valid data creates a player" do
      assert {:ok, %Player{} = player} = Game.create_player(@valid_attrs)
      assert player.name == "some name"
      assert player.score == 42
    end

    test "create_player/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Game.create_player(@invalid_attrs)
    end

    test "update_player/2 with valid data updates the player" do
      player = player_fixture()
      assert {:ok, %Player{} = player} = Game.update_player(player, @update_attrs)
      assert player.name == "some updated name"
      assert player.score == 43
    end

    test "update_player/2 with invalid data returns error changeset" do
      player = player_fixture()
      assert {:error, %Ecto.Changeset{}} = Game.update_player(player, @invalid_attrs)
      assert player == Game.get_player!(player.id)
    end

    test "delete_player/1 deletes the player" do
      player = player_fixture()
      assert {:ok, %Player{}} = Game.delete_player(player)
      assert_raise Ecto.NoResultsError, fn -> Game.get_player!(player.id) end
    end

    test "change_player/1 returns a player changeset" do
      player = player_fixture()
      assert %Ecto.Changeset{} = Game.change_player(player)
    end
  end

  describe "rounds" do
    alias Dixit.Game.Round

    @valid_attrs %{}
    @update_attrs %{}
    @invalid_attrs %{}

    def round_fixture(attrs \\ %{}) do
      {:ok, round} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Game.create_round()

      round
    end

    test "list_rounds/0 returns all rounds" do
      round = round_fixture()
      assert Game.list_rounds() == [round]
    end

    test "get_round!/1 returns the round with given id" do
      round = round_fixture()
      assert Game.get_round!(round.id) == round
    end

    test "create_round/1 with valid data creates a round" do
      assert {:ok, %Round{} = round} = Game.create_round(@valid_attrs)
    end

    test "create_round/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Game.create_round(@invalid_attrs)
    end

    test "update_round/2 with valid data updates the round" do
      round = round_fixture()
      assert {:ok, %Round{} = round} = Game.update_round(round, @update_attrs)
    end

    test "update_round/2 with invalid data returns error changeset" do
      round = round_fixture()
      assert {:error, %Ecto.Changeset{}} = Game.update_round(round, @invalid_attrs)
      assert round == Game.get_round!(round.id)
    end

    test "delete_round/1 deletes the round" do
      round = round_fixture()
      assert {:ok, %Round{}} = Game.delete_round(round)
      assert_raise Ecto.NoResultsError, fn -> Game.get_round!(round.id) end
    end

    test "change_round/1 returns a round changeset" do
      round = round_fixture()
      assert %Ecto.Changeset{} = Game.change_round(round)
    end
  end

  describe "round_cards" do
    alias Dixit.Game.RoundCard

    @valid_attrs %{votes: 42}
    @update_attrs %{votes: 43}
    @invalid_attrs %{votes: nil}

    def round_card_fixture(attrs \\ %{}) do
      {:ok, round_card} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Game.create_round_card()

      round_card
    end

    test "list_round_cards/0 returns all round_cards" do
      round_card = round_card_fixture()
      assert Game.list_round_cards() == [round_card]
    end

    test "get_round_card!/1 returns the round_card with given id" do
      round_card = round_card_fixture()
      assert Game.get_round_card!(round_card.id) == round_card
    end

    test "create_round_card/1 with valid data creates a round_card" do
      assert {:ok, %RoundCard{} = round_card} = Game.create_round_card(@valid_attrs)
      assert round_card.votes == 42
    end

    test "create_round_card/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Game.create_round_card(@invalid_attrs)
    end

    test "update_round_card/2 with valid data updates the round_card" do
      round_card = round_card_fixture()
      assert {:ok, %RoundCard{} = round_card} = Game.update_round_card(round_card, @update_attrs)
      assert round_card.votes == 43
    end

    test "update_round_card/2 with invalid data returns error changeset" do
      round_card = round_card_fixture()
      assert {:error, %Ecto.Changeset{}} = Game.update_round_card(round_card, @invalid_attrs)
      assert round_card == Game.get_round_card!(round_card.id)
    end

    test "delete_round_card/1 deletes the round_card" do
      round_card = round_card_fixture()
      assert {:ok, %RoundCard{}} = Game.delete_round_card(round_card)
      assert_raise Ecto.NoResultsError, fn -> Game.get_round_card!(round_card.id) end
    end

    test "change_round_card/1 returns a round_card changeset" do
      round_card = round_card_fixture()
      assert %Ecto.Changeset{} = Game.change_round_card(round_card)
    end
  end
end
