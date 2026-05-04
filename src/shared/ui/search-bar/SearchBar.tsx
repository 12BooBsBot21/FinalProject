import { TextInput } from '@mantine/core'
interface SearchBarProps {
  valueSearching: string
  setValueSearching: (value: string) => void
}

export default function SearchBar({
  valueSearching,
  setValueSearching,
}: SearchBarProps) {
  return (
    <TextInput
      label="Search"
      placeholder="Search by name"
      value={valueSearching}
      onChange={(event) => setValueSearching(event.currentTarget.value)}
      radius="md"
      size="md"
    />
  )
}
