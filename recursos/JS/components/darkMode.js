const localS = window.localStorage

function darkMode () {
    const btn = document.getElementById('btn');

    if (localS.getItem('theme') === 'dark') {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
    
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark')

        if (document.body.classList.contains('dark')) {
            localS.setItem('theme', 'dark')
        } else {
            localS.removeItem('theme')
        }
    })
    
    

}

export default darkMode

