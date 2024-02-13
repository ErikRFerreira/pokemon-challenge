export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick} className="text-2xl">
      {isFavorite ? <>&#9733;</> : <>&#9734;</>}
    </button>
  );
}
