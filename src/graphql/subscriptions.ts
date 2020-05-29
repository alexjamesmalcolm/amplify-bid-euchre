/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateLobby = /* GraphQL */ `
  subscription OnCreateLobby {
    onCreateLobby {
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
export const onUpdateLobby = /* GraphQL */ `
  subscription OnUpdateLobby {
    onUpdateLobby {
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
export const onDeleteLobby = /* GraphQL */ `
  subscription OnDeleteLobby {
    onDeleteLobby {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
