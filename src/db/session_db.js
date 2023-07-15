import {setThemeLocalDb } from '@/db/local_db'
import {getTheme} from '@/db/local_db'

export let curr_theme = await getTheme()


export function setTheme(theme) {
    curr_theme = theme;
    setThemeLocalDb(theme)
    return theme
}