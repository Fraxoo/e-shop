// StarRating.jsx
// Affiche des étoiles dynamiques (plein / demi / vide) depuis une note.
// Props:
// - value: la note (ex: 3.7 ou 7.4)
// - max: nb d'étoiles (par défaut 5)
// - scale: l’échelle de la note (5 ou 10). Si 10, on convertit sur 5.
// - size: taille des icônes (ex: "1rem", "20px")

export default function StarRating({
  value = 0,
  max = 5,
  scale = 5,
  size = "1rem",
  className = ""
}) {
  // Convertit la note sur 5 si on reçoit une note /10
  const normalized = Math.max(0, Math.min(scale, value)) * (5 / scale);

  // Arrondi au 0.5 le plus proche
  const rounded = Math.round(normalized * 2) / 2;

  const full = Math.floor(rounded);
  const hasHalf = rounded - full === 0.5;
  const empty = max - full - (hasHalf ? 1 : 0);

  return (
    <div
      className={`star-rating ${className}`}
      aria-label={`Note ${value} sur ${scale}`}
      style={{ display: "inline-flex", gap: "4px", lineHeight: 1 }}
    >
      {/* Pleines */}
      {Array.from({ length: full }).map((_, i) => (
        <i
          key={`full-${i}`}
          className="fa-solid fa-star"
          style={{ fontSize: size }}
          aria-hidden="true"
        />
      ))}
      {/* Demi */}
      {hasHalf && (
        <i
          className="fa-solid fa-star-half-stroke"
          style={{ fontSize: size }}
          aria-hidden="true"
        />
      )}
      {/* Vides */}
      {Array.from({ length: empty }).map((_, i) => (
        <i
          key={`empty-${i}`}
          className="fa-regular fa-star"
          style={{ fontSize: size }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
