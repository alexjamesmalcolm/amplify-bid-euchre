/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      position
      lobbyId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      position
      lobbyId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      position
      lobbyId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createLobby = /* GraphQL */ `
  mutation CreateLobby(
    $input: CreateLobbyInput!
    $condition: ModelLobbyConditionInput
  ) {
    createLobby(input: $input, condition: $condition) {
      id
      lobbyLeaderId
      lobbyLeader {
        id
        position
        lobbyId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      players {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateLobby = /* GraphQL */ `
  mutation UpdateLobby(
    $input: UpdateLobbyInput!
    $condition: ModelLobbyConditionInput
  ) {
    updateLobby(input: $input, condition: $condition) {
      id
      lobbyLeaderId
      lobbyLeader {
        id
        position
        lobbyId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      players {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteLobby = /* GraphQL */ `
  mutation DeleteLobby(
    $input: DeleteLobbyInput!
    $condition: ModelLobbyConditionInput
  ) {
    deleteLobby(input: $input, condition: $condition) {
      id
      lobbyLeaderId
      lobbyLeader {
        id
        position
        lobbyId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      players {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      phase
      lobbyId
      lobby {
        id
        lobbyLeaderId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      phase
      lobbyId
      lobby {
        id
        lobbyLeaderId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      phase
      lobbyId
      lobby {
        id
        lobbyLeaderId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
