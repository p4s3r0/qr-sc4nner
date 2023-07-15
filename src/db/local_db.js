import Dexie from 'dexie';


const db = new Dexie('qrSc4nner-LocalDatabase');

db.version(1).stores({
    settings: 'id, theme'
});

init()

export async function init() {
    const settings_exist = (await db.settings.toArray()).length
    if (!settings_exist) {
        db.settings.add({'id': 0, 'theme': 'theme-yellow'})
    }
}

export async function setThemeLocalDb(theme) {
    db.settings.update(0, {'theme': theme})
}

export async function getTheme() {
    const curr_theme = (await db.settings.toArray())[0].theme
    return curr_theme;
}
