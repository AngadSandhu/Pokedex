import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch",
  background:
    "radial-gradient(circle at 0 0, rgba(251, 191, 36, 0.16), transparent 55%), radial-gradient(circle at 100% 100%, rgba(56, 189, 248, 0.18), transparent 55%), rgba(15, 23, 42, 0.96)",
  width: "10.5em",
  height: "10.5em",
  cursor: "pointer",
  borderRadius: "1rem",
  padding: "0.8rem 0.9rem",
  flexFlow: "column",
  fontWeight: 700,
  color: "#e5e7eb",
  boxShadow:
    "0 16px 32px rgba(15, 23, 42, 0.7), 0 0 0 1px rgba(15, 23, 42, 0.85)",
  transition:
    "transform 160ms ease-out, box-shadow 160ms ease-out, background 180ms ease-out",
};

const nameStyles: React.CSSProperties = {
  fontSize: "0.9rem",
  letterSpacing: "0.06em",
};

const idChipStyles: React.CSSProperties = {
  alignSelf: "flex-end",
  padding: "0.15rem 0.6rem",
  borderRadius: "999px",
  fontSize: "0.75rem",
  letterSpacing: "0.08em",
  background:
    "linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(251, 191, 36, 0.35))",
  color: "#fefce8",
};

const imageShellStyles: React.CSSProperties = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyles: React.CSSProperties = {
  width: "64px",
  height: "64px",
  objectFit: "contain",
  filter: "drop-shadow(0 8px 14px rgba(15, 23, 42, 0.7))",
};

type PokemonTileProps = {
  id: number;
  name: string;
  url?: string;
};

const PokemonTile = ({ id, name }: PokemonTileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const getPokemonDetails = () => {
    navigate(`/pokemon/id=${id}`);
  };

  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const cardStyles: React.CSSProperties = {
    ...baseStyles,
    transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0)",
    boxShadow: isHovered
      ? "0 22px 44px rgba(15, 23, 42, 0.85), 0 0 0 1px rgba(148, 163, 184, 0.45)"
      : baseStyles.boxShadow,
  };

  return (
    <div
      style={cardStyles}
      onClick={getPokemonDetails}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={nameStyles}>{name && <p>{name.toUpperCase()}</p>}</div>
      <div style={imageShellStyles}>
        <img
          src={spriteUrl}
          alt={name}
          style={imageStyles}
          loading="lazy"
        />
      </div>
      <div style={idChipStyles}>
        <span>#{id.toString().padStart(3, "0")}</span>
      </div>
    </div>
  );
};

export default memo(PokemonTile);
