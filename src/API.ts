/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePlayerInput = {
  id?: string | null,
  position: string,
  lobbyId?: string | null,
};

export type ModelPlayerConditionInput = {
  position?: ModelStringInput | null,
  lobbyId?: ModelIDInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  position?: string | null,
  lobbyId?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateLobbyInput = {
  id?: string | null,
  lobbyLeaderId: string,
};

export type ModelLobbyConditionInput = {
  lobbyLeaderId?: ModelIDInput | null,
  and?: Array< ModelLobbyConditionInput | null > | null,
  or?: Array< ModelLobbyConditionInput | null > | null,
  not?: ModelLobbyConditionInput | null,
};

export type UpdateLobbyInput = {
  id: string,
  lobbyLeaderId?: string | null,
};

export type DeleteLobbyInput = {
  id?: string | null,
};

export type CreateGameInput = {
  id?: string | null,
  phase: string,
  lobbyId: string,
};

export type ModelGameConditionInput = {
  phase?: ModelStringInput | null,
  lobbyId?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type UpdateGameInput = {
  id: string,
  phase?: string | null,
  lobbyId?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  position?: ModelStringInput | null,
  lobbyId?: ModelIDInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelLobbyFilterInput = {
  id?: ModelIDInput | null,
  lobbyLeaderId?: ModelIDInput | null,
  and?: Array< ModelLobbyFilterInput | null > | null,
  or?: Array< ModelLobbyFilterInput | null > | null,
  not?: ModelLobbyFilterInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  phase?: ModelStringInput | null,
  lobbyId?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLobbyMutationVariables = {
  input: CreateLobbyInput,
  condition?: ModelLobbyConditionInput | null,
};

export type CreateLobbyMutation = {
  createLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLobbyMutationVariables = {
  input: UpdateLobbyInput,
  condition?: ModelLobbyConditionInput | null,
};

export type UpdateLobbyMutation = {
  updateLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLobbyMutationVariables = {
  input: DeleteLobbyInput,
  condition?: ModelLobbyConditionInput | null,
};

export type DeleteLobbyMutation = {
  deleteLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetLobbyQueryVariables = {
  id: string,
};

export type GetLobbyQuery = {
  getLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLobbysQueryVariables = {
  filter?: ModelLobbyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLobbysQuery = {
  listLobbys:  {
    __typename: "ModelLobbyConnection",
    items:  Array< {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      phase: string,
      lobbyId: string,
      lobby:  {
        __typename: "Lobby",
        id: string,
        lobbyLeaderId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    position: string,
    lobbyId: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLobbySubscription = {
  onCreateLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLobbySubscription = {
  onUpdateLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLobbySubscription = {
  onDeleteLobby:  {
    __typename: "Lobby",
    id: string,
    lobbyLeaderId: string,
    lobbyLeader:  {
      __typename: "Player",
      id: string,
      position: string,
      lobbyId: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    players:  {
      __typename: "ModelPlayerConnection",
      items:  Array< {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    phase: string,
    lobbyId: string,
    lobby:  {
      __typename: "Lobby",
      id: string,
      lobbyLeaderId: string,
      lobbyLeader:  {
        __typename: "Player",
        id: string,
        position: string,
        lobbyId: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      players:  {
        __typename: "ModelPlayerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
