import React from 'react';
import { StyledCells } from './styles/StyledCells'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
    <StyledCells type={type} color={TETROMINOS[type].color}>cell</StyledCells>
)

export default Cell