import React from 'react'

export type ActionType = undefined | number | string
export type StateActionType = React.Dispatch<React.SetStateAction<ActionType>>
