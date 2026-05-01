import { useOutletContext } from 'react-router-dom'
import { useDebounce } from '@/shared/index'
import { useFetch } from '@/shared/index'
import type { CharacterResponse } from '@/entities/character'
import { CharacterList } from '@/entities/character'
import { ShowError, ShowLoading, ShowNoData } from '@/shared/index'

export function CharacterPage() {
  const search = useOutletContext<string>()
  const nameAfterDebounce = useDebounce(search, 1100)
  const { data, isLoading, error } = useFetch<CharacterResponse>(
    `?name=${nameAfterDebounce}`,
  )
  if (isLoading) {
    return <ShowLoading>Загружаем список персонажей.</ShowLoading>
  }
  if (error) {
    return <ShowError>{error}</ShowError>
  }
  if (!data) {
    return <ShowNoData>non data</ShowNoData>
  }
  return (
    <div>
      <CharacterList characters={data.results} />
    </div>
  )
}
