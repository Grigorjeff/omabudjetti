import styles from './Items.module.scss'
import { FloatingButton } from '../../shared/ui/buttons'
import Item from '../../components/Item'
import { useLoaderData } from 'react-router'


function Items() {
const data = useLoaderData()
const items = data.map(item => <Item key={item.id} data={item} />)
  return (
    <div className={styles.items}>
      { items }
      <FloatingButton secondary>+</FloatingButton>
    </div>
  )
}

export default Items