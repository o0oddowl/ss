const tg = window.Telegram.WebApp
export function useTelegram(){
    //const onClose = () =>{
      //  tg.close()
    //}
  // const onToggleButton = () => {
       //if(tg.MainButton.isVisible){
        //   tg.MainButton.show()
      // } else {}
    //}
    
    return {
       tg, user: tg.initDataUnsafe?.user,
      }
}