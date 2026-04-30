import s from './searchBar.module.css'

interface SearchBarProps {
  valueSearching: string
  setValueSearching: (value: string) => void
}

export default function SearchBar({
  valueSearching,
  setValueSearching,
}: SearchBarProps) {
  return (
    <div className={s.searchBar}>
      <label htmlFor="input" className={s.searchBarLabel}>
        search
      </label>
      <input
        id="input"
        placeholder="search by name"
        value={valueSearching}
        className={s.searchBarInput}
        onChange={(e) => setValueSearching(e.target.value)}
      />
    </div>
  )
}
