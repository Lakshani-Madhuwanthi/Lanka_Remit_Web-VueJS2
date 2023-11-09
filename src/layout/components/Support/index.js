export class MenuItem {
    name = ""
    redirect = ""
    isVisible = () => {return true}
    meta = {
        type: '', icon: '', title: '', isActive: false
    }
    children = []
}
