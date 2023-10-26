import home from '@/assets/icons/home.png';
import media from '@/assets/icons/media.png';
import logo from '@/assets/icons/logo.png';
import today from '@/assets/icons/today.png';
import menu from '@/assets/icons/menu.png';

import homeD from '@/assets/icons/active/home.png';
import logoD from '@/assets/icons/active/logo.png';
import favD from '@/assets/icons/active/fav.png';
import todayD from '@/assets/icons/active/today.png';
import mediaD from '@/assets/icons/active/media.png';
import noteD from '@/assets/icons/active/note.png';
import saveD from '@/assets/icons/active/save.png';
import listD from '@/assets/icons/active/list.png';
import tagD from '@/assets/icons/active/tag.png';
import moreD from '@/assets/icons/active/more.png';

export const mobileMenuSettings = [
    { src: home, label: 'home', clickable: false, },
    { src: media, label: 'media', clickable: false, },
    { src: logo, label: 'logo', clickable: false, },
    { src: today, label: 'today', clickable: false, },
    { src: menu, label: 'note', clickable: true, },
];

export const dektopMenuSettings = [
    {
        title: '',
        content: [
            { src: homeD, label: 'homeD', clickable: false, name: "Accueil"  },
            { src: logoD, label: 'logoD', clickable: false, name: "Bible"  },
            { src: mediaD, label: 'mediaD', clickable: false, name: "Médias"  },
            { src: todayD, label: 'todayD', clickable: false, name: "Plans"  },
        ]
    },
    {
        title: 'Mes activités',
        content: [
            { src: noteD, label: 'note', clickable: true, name: "Notes", selected: true  },
            { src: favD, label: 'favD', clickable: false, name: "Favoris"  },
            { src: listD, label: 'listD', clickable: false, name: "Listes"  },
            { src: tagD, label: 'tagD', clickable: false, name: "Etiquettes"  },
            { src: saveD, label: 'saveD', clickable: false, name: "Signets"  },
            { src: moreD, label: 'moreD', clickable: false, name: "Plus"  },
        ]
    }
];