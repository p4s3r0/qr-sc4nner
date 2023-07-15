import Dexie from 'dexie';


const db = new Dexie('qrSc4nner-LocalDatabase');

db.version(1).stores({
    settings: 'id, theme'
});


export async function setThemeLocalDb(theme) {
    db.settings.update(0, {'theme': theme})
}

export async function getTheme() {
    const curr_theme = await db.settings.toArray()

    if (!curr_theme.length) {
        db.settings.add({'id': 0, 'theme': 'theme-yellow'})
        return 'theme-yellow'
    }
    return curr_theme[0].theme;
}
