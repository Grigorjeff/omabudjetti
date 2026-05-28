import styles from './Menu.module.scss'
import { MdSettings, MdTimeline, MdViewList } from 'react-icons/md'

/**
 * Sovelluksen alareunassa oleva navigaatiovalikko.
 *
 * Menu sisältää ikonilinkit sovelluksen eri näkymiin ja
 * tarjoaa nopean tavan siirtyä näkymästä toiseen.
 *
 * @example
 * <Menu />
 *
 * @returns {JSX.Element}
 */
function Menu() {

  return (
    <div className={styles.menu}>
    <div><MdViewList /></div>
      <div><MdTimeline /></div>
      <div><MdSettings /></div>
    </div>
  )

}

export default Menu
