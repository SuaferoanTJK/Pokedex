import React from "react";
import Button from "../Button/Button";
// import PropTypes from "prop-types";
import cardFormater from "../../utils/formaters/cardFormater";
import { useSelector } from "react-redux";
// Card.propTypes = { id: PropTypes.number, name: PropTypes.string };

const Card = ({ id, name, types, height, weight }) => {
  const pokemonsReduxState = useSelector(
    (state) => state.addOrRemovePokeFavs.pokemons
  );

  const isPokemonExist = pokemonsReduxState.some(
    (pokemon) => pokemon.id === id
  );

  const typePokemon = types[0].type.name;

  const pokemonWeight = weight / 10;

  const heightPokemonMeters = height / 10;
  return (
    <div className="container">
      <div className={`card ${cardFormater(typePokemon)}`}>
        <div className="card-front">
          <div className="card-image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="Pokemon 1"
            />
          </div>
          <div className="card-body">
            <p className="card-name">{`${id}. ${name}`} </p>
            <Button
              isPokemonExist={isPokemonExist}
              char={{ id: id, name: name }}
              styleClass={"Button"}
            />
          </div>
        </div>
        <div className="card-back">
          <div className="card-body">
            <p className="back-name">{`${id}. ${name}`} </p>
            <div className="back-info">
              <p className="back-text">
                <span>Height:</span> {heightPokemonMeters} m
              </p>
              <p className="back-text">
                <span>Weight:</span> {pokemonWeight} Kg
              </p>
              <p className="back-text">
                <span>Type:</span> {typePokemon}
              </p>
              <p className="back-text">
                <span>Amount:</span> 1
              </p>
            </div>
            <Button
              isPokemonExist={isPokemonExist}
              char={{ id: id, name: name }}
              styleClass={"Button"}
            />
            <Button
              isPokemonExist={isPokemonExist}
              char={{ id: id, name: name }}
              styleClass={"Button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
