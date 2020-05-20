/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      position
      lobbyId
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        lobbyId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLobby = /* GraphQL */ `
  query GetLobby($id: ID!) {
    getLobby(id: $id) {
      id
      lobbyLeaderId
      lobbyLeader {
        id
        position
        lobbyId
        createdAt
        updatedAt
      }
      players {
        items {
          id
          position
          lobbyId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLobbys = /* GraphQL */ `
  query ListLobbys(
    $filter: ModelLobbyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLobbys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lobbyLeaderId
        lobbyLeader {
          id
          position
          lobbyId
          createdAt
          updatedAt
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      phase
      lobbyId
      lobby {
        id
        lobbyLeaderId
        lobbyLeader {
          id
          position
          lobbyId
          createdAt
          updatedAt
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phase
        lobbyId
        lobby {
          id
          lobbyLeaderId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
