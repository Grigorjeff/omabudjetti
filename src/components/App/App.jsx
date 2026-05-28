import Content from '../Content'
import Header from '../Header'
import Item from '../Item'
import Menu from '../Menu'
import styles from './App.module.scss'
import Button from '../../shared/ui/buttons'


function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <Button>LISÄÄ UUSI RIVI</Button>
        </Content>
        <Menu />
      </div>
    </>
  )

}

export default App