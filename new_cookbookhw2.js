//ecma 5

// function Onload() {
//     'use strict'
//     let check_sell_value = Boolean(Xrm.Page.getAttribute('new_check_sell').getValue()) 
//     Xrm.Page.ui.tabs.get("money_tab").setVisible(check_sell_value)
// }
// function Onchange(){
//     'use strict'
//     let check_sell_value = Boolean(Xrm.Page.getAttribute('new_check_sell').getValue())
//     Xrm.Page.ui.tabs.get("money_tab").setVisible(check_sell_value) 
// }

//ecma 6 arrow function
let check_sell_value = new Boolean()
const Onload = () => {
    hide_or_show_money_tab()
}
const Onchange = () => {
    hide_or_show_money_tab()
}
const hide_or_show_money_tab = () => {
    'use strict'
    check_sell_value = Boolean(Xrm.Page.getAttribute('new_check_sell').getValue())
    Xrm.Page.ui.tabs.get("money_tab").setVisible(check_sell_value)
}