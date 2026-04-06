interface SearchBarProps {
  valueSearching: string;
  setValueSearching: (value: string) => void;
}

export default function SearchBar({
  valueSearching,
  setValueSearching,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="input">search</label>
      <input
        id="input"
        placeholder="search by name"
        value={valueSearching}
        onChange={(e) => setValueSearching(e.target.value)}
      />
    </div>
  );
}
